import React, { RefObject, useEffect, useRef, useState } from "react"

export const useHideOnClickOutside = (initState: boolean) => {
  const nodeRef: React.RefObject<HTMLElement> = useRef(null)
  const [isVisible, setVisibility] = useState(initState)
  const handleClickOutside = (event: MouseEvent) => {
    if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
      setVisibility(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  return { nodeRef, isVisible, setVisibility }
}