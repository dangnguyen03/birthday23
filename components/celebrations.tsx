"use client"

import { useEffect, useRef } from "react"

interface CelebrationsProps {
  show: boolean
}

export default function Celebrations({ show }: CelebrationsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!show || !containerRef.current) return

    const container = containerRef.current
    const celebrationEmojis = ["🎉", "🎊", "💕", "✨", "🌟", "💝", "🎈"]

    for (let i = 0; i < 30; i++) {
      const emoji = celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)]
      const element = document.createElement("div")

      element.textContent = emoji
      element.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}vw;
        top: -20px;
        font-size: ${Math.random() * 20 + 20}px;
        pointer-events: none;
        animation: fall ${Math.random() * 3 + 3}s linear forwards;
        z-index: 50;
      `

      container.appendChild(element)

      setTimeout(() => element.remove(), 5000)
    }
  }, [show])

  return (
    <>
      <style>{`
        @keyframes fall {
          0% {
            opacity: 1;
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: translateY(100vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
          }
        }
      `}</style>
      <div ref={containerRef} />
    </>
  )
}
