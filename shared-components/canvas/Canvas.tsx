import React from 'react'
import useCanvas from "@/hooks/useCanvas";

type CanvasProps = {
  draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void,
  options: {
    context?: string
  }
}

export function Canvas(props: CanvasProps) {

  const { draw, options, ...rest } = props
  const { context, ...moreConfig } = options
  const canvasRef = useCanvas(draw, {context})

  return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas