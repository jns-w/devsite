import {useRef, useEffect, MutableRefObject} from 'react'
import canvas from "@/shared-components/canvas/Canvas";

const useCanvas = (draw: Function, options: any = {}) => {

  const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext(options.context || '2d')
    let frameCount = 0
    let animationFrameId: any;
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  return canvasRef
}
export default useCanvas