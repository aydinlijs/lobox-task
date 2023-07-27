import { useEffect } from 'react'

export const useKeyCode = (
  key: string,
  callback: (event?: KeyboardEvent) => void
): void => {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      event.preventDefault()
      event.stopPropagation()
      if (event.key === key) {
        callback(event)
      }
    }

    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, [callback, key])
}
