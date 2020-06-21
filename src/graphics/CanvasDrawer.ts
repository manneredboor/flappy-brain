import { useRef, useCallback } from 'react'
import { useForceUpdate } from '../hooks/useForceUpdate'

const DPI = window.devicePixelRatio || 1

export function useCanvasDrawer() {
  const forceUpdate = useForceUpdate()
  const { current: that } = useRef({
    drawer: null as CanvasDrawer | null,
  })
  const canvasRef = useCallback(
    (el: HTMLCanvasElement | null) => {
      if (el && (!that.drawer || that.drawer.canvas !== el)) {
        that.drawer = new CanvasDrawer(el)
        forceUpdate()
      }
    },
    [forceUpdate],
  )
  return {
    canvasRef,
    drawer: that.drawer,
  }
}

export class CanvasDrawer {
  ctx: CanvasRenderingContext2D
  canvas: HTMLCanvasElement
  width: number
  height: number

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    this.measureWindow()
    window.addEventListener('resize', () => this.measureWindow())
  }

  measureWindow() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.canvas.width = this.width * DPI
    this.canvas.height = this.height * DPI
  }

  clear() {
    const { ctx, width, height } = this
    ctx.clearRect(0, 0, width * DPI, height * DPI)
  }
}
