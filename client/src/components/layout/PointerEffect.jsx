import { useEffect, useState } from 'react'

function PointerEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isPointerDevice, setIsPointerDevice] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')
    const updatePointerMode = () => setIsPointerDevice(mediaQuery.matches)

    updatePointerMode()
    mediaQuery.addEventListener('change', updatePointerMode)

    return () => mediaQuery.removeEventListener('change', updatePointerMode)
  }, [])

  useEffect(() => {
    if (!isPointerDevice) return undefined

    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setIsVisible(true)
    }

    const handleLeave = () => setIsVisible(false)
    const handleEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseenter', handleEnter)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseenter', handleEnter)
    }
  }, [isPointerDevice])

  if (!isPointerDevice) return null

  return (
    <>
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[70] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: `translate(${position.x - 6}px, ${position.y - 6}px)` }}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[69] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 bg-cyan-300/8 blur-[2px] transition-[transform,opacity] duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: `translate(${position.x - 24}px, ${position.y - 24}px)` }}
      />
    </>
  )
}

export default PointerEffect
