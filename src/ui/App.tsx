import React, { useRef, useEffect } from 'react'
import { css } from 'astroturf'
import { initCanvas } from '../graphics/canvas'

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (canvasRef.current) initCanvas(canvasRef.current)
  }, [])

  return (
    <>
      <canvas className={s.canvas} ref={canvasRef} />
    </>
  )
}

export default App

const s = css`
  .canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`
