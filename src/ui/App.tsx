import React from 'react'
import { css } from 'astroturf'
import { useCanvasDrawer } from '../graphics/CanvasDrawer'

function App() {
  const { canvasRef, drawer } = useCanvasDrawer()

  console.log(drawer)

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
