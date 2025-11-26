"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
  life: number
  maxLife: number
}

export default function InteractiveElement() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = 600

    // Initialize particles
    const particleArray: Particle[] = []
    for (let i = 0; i < 80; i++) {
      particleArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        color: ["#ec4899", "#f472b6", "#fbcfe8", "#fda4af", "#fff0f5"][Math.floor(Math.random() * 5)],
        opacity: Math.random() * 0.5 + 0.3,
        life: Math.random() * 100,
        maxLife: Math.random() * 100 + 50,
      })
    }

    const animate = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(255, 228, 230, 0.3)")
      gradient.addColorStop(1, "rgba(243, 232, 255, 0.3)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particleArray.forEach((particle) => {
        particle.life += 1
        if (particle.life > particle.maxLife) {
          particle.life = 0
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
        }

        const lifePercent = particle.life / particle.maxLife
        particle.opacity = Math.sin(lifePercent * Math.PI) * 0.6 + 0.2

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-12 text-rose-900">Phút Giây Ngọt Ngào ✨</h2>

        <div
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden shadow-2xl group"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <canvas ref={canvasRef} className="w-full block bg-gradient-to-b from-rose-100 to-purple-100" />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Outer glow ring */}
            <div
              className={`absolute w-64 h-64 rounded-full border-2 border-rose-300/30 transition-all duration-500 ${
                isHovering ? "scale-125 border-rose-400/50" : "scale-100"
              }`}
              style={{ animation: "pulse-ring 3s ease-in-out infinite" }}
            />

            {/* Middle sparkle */}
            <div
              className={`absolute w-48 h-48 rounded-full transition-all duration-500 ${
                isHovering ? "opacity-100 scale-110" : "opacity-70 scale-100"
              }`}
              style={{
                background: "radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%)",
                animation: "spin-slow 8s linear infinite",
              }}
            />

            {/* Main card */}
            <div
              className={`relative w-56 h-56 bg-white rounded-2xl shadow-2xl transform transition-all duration-500 ${
                isHovering ? "scale-110" : "scale-100"
              }`}
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,240,245,0.95) 100%)",
                boxShadow: isHovering ? "0 40px 60px rgba(236, 72, 153, 0.3)" : "0 20px 40px rgba(236, 72, 153, 0.2)",
                transform: isHovering
                  ? `perspective(1000px) rotateX(${(mousePos.y - 300) * 0.05}deg) rotateY(${(mousePos.x - window.innerWidth / 2) * 0.05}deg)`
                  : "perspective(1000px) rotateX(0) rotateY(0)",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-2xl">
                <div
                  className={`text-8xl mb-4 transition-all duration-700 ${
                    isHovering ? "scale-125 animate-pulse" : "scale-100"
                  }`}
                  style={{
                    filter: isHovering
                      ? "drop-shadow(0 0 20px rgba(236, 72, 153, 0.6))"
                      : "drop-shadow(0 0 10px rgba(236, 72, 153, 0.3))",
                  }}
                >
                  <Image src="/images/hang.jpg" alt="My Love" width={120} height={120} className="rounded-full object-cover" />
                </div>

                <div
                  className={`text-center px-6 transition-all duration-700 ${
                    isHovering ? "opacity-10 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <p className="text-rose-600 font-light text-sm leading-relaxed">
                    Bên em, mọi khoảnh khắc đều trở nên thật diệu kỳ 💝.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating sparkles */}
            {isHovering &&
              [...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-rose-400 rounded-full opacity-60"
                  style={{
                    left: `calc(50% + ${Math.cos((i / 6) * Math.PI * 2) * 150}px)`,
                    top: `calc(50% + ${Math.sin((i / 6) * Math.PI * 2) * 150}px)`,
                    animation: `float-sparkle 2s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
          </div>
        </div>

        <p className="text-center text-rose-600/70 mt-8 font-light">
          Di chuột vào khoảnh khắc kỳ diệu để hé lộ bí mật ✨
        </p>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float-sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  )
}
