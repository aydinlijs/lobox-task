import { RefObject, useEffect } from 'react'

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  callback: (event: MouseEvent) => void,
  isOpen = true
): void => {
  useEffect(() => {
    const handleClick = (e: MouseEvent): void => {
      e.stopPropagation()
      if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
        callback(e)
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
