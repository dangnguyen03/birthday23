"use client"

import { useEffect, useRef } from "react"

export default function HeroSection() {
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!titleRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = titleRef.current.getBoundingClientRect()

      const x = (clientX - left - width / 2) / 20
      const y = (clientY - top - height / 2) / 20

      titleRef.current.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl">
        {/* Animated hearts */}
        <div className="mb-8 flex justify-center gap-4 text-4xl animate-bounce">
          <span style={{ animationDelay: "0s" }}>💕</span>
          <span style={{ animationDelay: "0.2s" }}>✨</span>
          <span style={{ animationDelay: "0.4s" }}>💕</span>
        </div>

        {/* Main title with 3D effect */}
        <div ref={titleRef} className="mb-8 transition-transform duration-100 will-change-transform">
          <h1 className="text-6xl md:text-8xl font-light text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 mb-4">
           Happy Birthday
          </h1>
          <p className="text-3xl md:text-5xl font-light text-rose-900">❤️‍🔥 Võ Thúy Hằng 💖</p>
        </div>

        {/* Subtitle */}
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-rose-700/80 font-light leading-relaxed max-w-2xl mx-auto">
          Hôm nay là sinh nhật em 🎁🎂🎉, ngày anh trân trọng và cảm ơn những điều đẹp đẽ mà em đã mang đến cho cuộc đời anh 💓.
          </p>
          <p className="text-lg md:text-xl text-purple-600/70 font-light italic">
          Bên em, từng khoảnh khắc đều trở nên ý nghĩa và đáng trân trọng.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
