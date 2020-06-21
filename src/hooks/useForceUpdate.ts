import { useState, useCallback } from 'react'

export function useForceUpdate() {
  const [, forceUpdate] = useState(false)
  return useCallback(() => forceUpdate((s) => !s), [])
}
