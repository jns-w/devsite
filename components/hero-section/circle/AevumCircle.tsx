"use client";
import styles from "./aevum-circle.module.scss";
import { NoiseGenerator } from "@/utils/noise";
import { useAtom } from "jotai";
// import { timerState, timerStateAtom } from "@/atoms/timer-state";
import {useEffect, useMemo, useRef, useState} from "react";
import { lerp, lerpRGB } from "@/utils/animation";
import {useEventListener} from "usehooks-ts";
// import useSound from "use-sound";

export function AevumCircle() {

  const settings = useMemo(() => ({
    normal: {
      radius: 40,
      height: 2,
      speed: 0.008,
      color: "rgba(42,42,42,0.8)",
    },
    hovered: {
      radius: 30,
      height: 1.5,
      speed: 0.08,
      color: "rgba(197,8,8,0.7)",
    }
  }),[])

  const noise = useMemo(() => new NoiseGenerator(), []);
  let offset = useRef(Math.random());
  // let targetOffset = useRef(offset.current)
  const lines = useMemo(
    () => [
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
    ],
    []
  );
  let speed = useRef(settings.normal.speed);
  let targetSpeed = useRef(speed.current);
  let radius = useRef(10);
  let targetRadius = useRef(settings.normal.radius);
  let height = useRef(1);
  let targetHeight = useRef(2);
  let color = useRef(settings.normal.color);
  let targetColor = useRef(color.current);
  let origin = useRef([0, 0]);
  let targetOrigin = useRef(origin.current);
  let opacity = useRef(0.6);
  let targetOpacity = useRef(opacity.current);
  // let glow = useRef('rgb(255,188,46,0.99)')
  let lineWidth = useRef(2);

  const aevum = useRef();


  useEffect(() => {
    const canvas = aevum.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (!canvas || !ctx) return;
    let canvasWidth = canvas.offsetWidth;
    let canvasHeight = canvas.offsetHeight;
    // const dpi = window.devicePixelRatio > 1.5 ? 2 : 1;
    const dpi = 1;
    canvasWidth = canvasWidth * dpi;
    canvasHeight = canvasHeight * dpi;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.width = canvasWidth + "px";
    canvas.style.height = canvasHeight + "px";
    origin.current = [ctx.canvas.width / 2, ctx.canvas.height / 2];
    targetOrigin.current = origin.current;
    if (dpi > 1) {
      canvas.style.transform = "scale(0.5)";
      targetRadius.current *= 2;
      targetHeight.current *= 1.5;
      lineWidth.current *= 2;
    }

    function drawCircle(
      ctx: CanvasRenderingContext2D,
      frame: number,
      delta: number
    ) {
      offset.current += (delta * speed.current) / 30;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalAlpha = opacity.current;
      ctx.beginPath();
      const path = new Path2D();
      let startPoint: number[] = [];
      let x = 10;
      let y = 10;
      let ghostCount = 3;

      if (targetHeight.current !== height.current) {
        height.current = lerp(height.current, targetHeight.current, 0.02);
      }
      if (targetRadius.current !== radius.current) {
        radius.current = lerp(radius.current, targetRadius.current, 0.1);
      }
      if (targetOpacity.current !== opacity.current) {
        opacity.current = lerp(opacity.current, targetOpacity.current, 0.1);
      }
      if (targetColor.current !== color.current) {
        color.current = lerpRGB(color.current, targetColor.current, 0.04);
      }
      // if (targetOffset.current !== offset.current) {
      //   offset.current = lerp(offset.current, targetOffset.current, 0.02)
      // }
      if (targetOrigin.current[0] !== origin.current[0]) {
        origin.current[0] = lerp(origin.current[0], targetOrigin.current[0], 0.1)
        origin.current[1] = lerp(origin.current[1], targetOrigin.current[1], 0.1)
      }
      if (targetSpeed.current !== speed.current) {
        speed.current = lerp(speed.current, targetSpeed.current, 0.02);
      }

      function getControlPoint(pt1: number[], pt2: number[]) {
        return [(pt1[0] + pt2[0]) / 2, (pt1[1] + pt2[1]) / 2];
      }

      for (
        let i = 0;
        i < 2 * Math.PI - Math.PI / 12;
        i += Math.PI / radius.current
      ) {
        x =
          origin.current[0] +
          Math.cos(i) *
            (radius.current +
              noise.simplex3(i, 0, offset.current) * height.current);
        y =
          origin.current[1] +
          Math.sin(i) *
            (radius.current +
              noise.simplex3(i, 0, offset.current) * height.current);
        if (i === 0) {
          startPoint = [x, y];
        }
        path.lineTo(x, y);
      }

      const mid = getControlPoint(startPoint, [x, y]);
      path.bezierCurveTo(x, y, mid[0], mid[1], startPoint[0], startPoint[1]);
      path.closePath();
      ctx.strokeStyle = color.current;
      ctx.lineWidth = lineWidth.current;
      ctx.stroke(path);
      ctx.shadowColor = color.current;
      ctx.shadowBlur = 20;

      // ghosting
      ctx.lineWidth = lineWidth.current / 2;
      for (let k = 0; k < ghostCount; k++) {
        ctx.globalAlpha = 0.6 - k / 10;
        const r = radius.current - k * 2;
        let startPoint: number[] = [];
        let x: number = 0;
        let y: number = 0;
        ctx.beginPath();
        for (
          let i = 0;
          i < 2 * Math.PI - Math.PI / 10;
          i += Math.PI / radius.current
        ) {
          x =
            origin.current[0] +
            Math.cos(i) *
              (r +
                noise.simplex3(i, lines[k], offset.current + k) *
                  height.current *
                  1.5);
          y =
            origin.current[1] +
            Math.sin(i) *
              (r +
                noise.simplex3(i, lines[k], offset.current + k) *
                  height.current *
                  1.5);
          if (i === 0) {
            startPoint = [x, y];
          }
          ctx.lineTo(x, y);
        }
        const mid = getControlPoint(startPoint, [x, y]);
        ctx.bezierCurveTo(x, y, mid[0], mid[1], startPoint[0], startPoint[1]);
        ctx.closePath();
        ctx.stroke();
      }
    }

    let frame = 0;
    let animationFrameId: number;
    let time = Date.now();

    function render() {
      animationFrameId = window.requestAnimationFrame(render);
      frame++;
      const currentTime = Date.now();
      const delta = currentTime - time;
      time = currentTime;
      drawCircle(ctx, frame, delta);
    }

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  });

  const containerRef = useRef()


  useEventListener('mousemove', (e: MouseEvent) => {
    console.log(e.x)
    targetOrigin.current = [e.clientX, e.clientY]
  }, containerRef.current)





  return (
    <div
      className={styles.container}
      ref={containerRef}
      // onMouseOut={()=>{
      //   targetOrigin.current = [0,0]
      // }}
      // onClick={() => toggleTimer()}
      // onMouseDown={() => {
      //   targetSpeed.current = 0.06;
      //   targetHeight.current = 1;
      //   targetRadius.current = 100;
      //   targetOpacity.current = 1;
      // }}
      // onMouseUp={() => {
      //   targetHeight.current = 7;
      //   targetRadius.current = 100;
      //   targetSpeed.current = 0.01;
      //   targetOpacity.current = 0.9;
      // }}
    >
      <div
        className={styles.artWrapper}
        onMouseOver={() => {
          targetSpeed.current = settings.hovered.speed
          targetHeight.current = settings.hovered.height
          targetRadius.current = settings.hovered.radius
          targetOpacity.current = 1;
          targetColor.current = settings.hovered.color
        }}
        onMouseOut={() => {
          targetHeight.current = settings.normal.height
          targetRadius.current = settings.normal.radius
          targetSpeed.current = settings.normal.speed
          targetOpacity.current = 0.9;
          targetColor.current = settings.normal.color
        }}
      >
        <canvas ref={aevum} className={styles.art}/>
      </div>
    </div>
  );
}
