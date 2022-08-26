import { RefObject, useEffect, useState, useRef } from 'react'

export const useOnScreen = (options: IntersectionObserverInit) => {

  const navRef: React.RefObject<HTMLElement> = useRef(null)

  const [isOnScreen, setIsOnScreen] = useState(true)

  const intersectionCB: IntersectionObserverCallback = ([entry]) => setIsOnScreen(entry.isIntersecting)

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCB, options)
    if (navRef.current) observer.observe(navRef.current)
    return () => {
      if (navRef.current) observer.unobserve(navRef.current)
      observer.disconnect()
    }
  }, [navRef])

  return { isOnScreen, navRef }
}