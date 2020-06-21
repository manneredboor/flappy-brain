let canvas: HTMLCanvasElement | undefined
let ctx: CanvasRenderingContext2D | undefined

const dpi = window.devicePixelRatio || 1
export const width = window.innerWidth
export const height = window.innerHeight

export function initCanvas(canvasArg: HTMLCanvasElement) {
  canvas = canvasArg
  canvas.width = width * dpi
  canvas.height = height * dpi
  ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  return { width, height, canvas, ctx }
}

export function clear() {
  if (!ctx) return
  ctx.clearRect(0, 0, width * dpi, height * dpi)
}
