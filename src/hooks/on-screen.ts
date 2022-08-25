import { RefObject, useEffect, useState } from 'react'

export const useOnScreen = (ref: RefObject<HTMLElement>, options: IntersectionObserverInit) => {

  const [isOnScreen, setIsOnScreen] = useState(true)

  const intersectionCB: IntersectionObserverCallback = ([entry]) => setIsOnScreen(entry.isIntersecting)

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCB, options)
    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
      observer.disconnect()
    }
  }, [ref])

  return [isOnScreen]
}