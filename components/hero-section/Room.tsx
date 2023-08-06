import {Perf} from "r3f-perf";
import {OrbitControls} from "@react-three/drei";
import {Suspense, useRef} from "react";
import {Man} from "@/components/hero-section/Man";
import {useFrame} from "@react-three/fiber";
import {useControls} from "leva";
import {Desk} from "@/components/hero-section/Desk";
import {Chair} from "@/components/hero-section/Chair";

export default function Room() {
  const orbit = useRef()

  const controls = useControls({
    zoom: 1.4,
  })

  const dirLight = useRef()
  const dirLightControls = useControls("Directional Light", {
    intensity: 1,
  })

  return <>
    {/*<Perf position="top-left"/>*/}
    <OrbitControls ref={orbit} enableZoom={true} makeDefault target={[0.5, 1.1, 0.4]} zoom0={controls.zoom}/>
    <directionalLight ref={dirLight} intensity={dirLightControls.intensity}/>
    <ambientLight intensity={.3}/>
    <Suspense fallback={null}>
      <Man/>
      <Desk/>
      <Chair/>
    </Suspense>
  </>
}