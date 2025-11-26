"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function MemoriesTriptych() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const memories = [
    {
      id: 1,
      image: "/images/hanhtrinh/c3.png",
      rotation: -3,
      scale: 1,
    },
    {
      id: 2,
      image: "/images/hanhtrinh/py.jpg",
      rotation: 1,
      scale: 1.05,
    },
    {
      id: 3,
      image: "/images/hanhtrinh/hangtn.png",
      rotation: -2,
      scale: 1,
    },
    {
      id: 4,
      image: "/images/hanhtrinh/dangtn.png",
      rotation: 2,
      scale: 1,
    },
  ]

  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-8">
      {/* Section header - clearly separated from photo gallery */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground/90 mb-2">Những Khoảnh Khắc Trân Quý Của Chúng Ta</h2>
        <p className="text-foreground/60 text-sm md:text-base">Những ký ức ta luôn nâng niu, được hé mở qua từng khoảnh khắc.</p>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        {/* Multi-column responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-max">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={`group transition-all duration-1000 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isLoaded ? `${index * 150}ms` : "0ms",
                gridColumn: index % 3 === 1 ? "span 1 md:span 2" : "span 1",
                gridRow: index % 4 === 2 ? "span 2" : "span 1",
              }}
            >
              {/* Photo frame with romantic glow */}
              <div className="relative h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
                {/* Animated glow background */}
                <div
                  className="absolute inset-0 rounded-lg blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, hsl(${340 + index * 20}deg 80% 70%) 0%, hsl(${280 + index * 15}deg 75% 65%) 100%)`,
                  }}
                />

                {/* Shadow depth layer */}
                <div
                  className="absolute -inset-4 rounded-lg shadow-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, hsla(${340}deg 70% 50% / 0.3) 0%, hsla(${280}deg 70% 50% / 0.1) 100%)`,
                  }}
                />

                {/* Image with frame and subtle rotation */}
                <div
                  className="relative w-full h-full rounded-lg overflow-hidden border-4 md:border-6 border-white/90 shadow-lg transition-transform duration-700 ease-out"
                  style={{
                    transform: `rotate(${memory.rotation}deg) scale(${memory.scale})`,
                  }}
                >
                  <Image
                    src={memory.image || "/placeholder.svg?height=300&width=300&query=romantic%20memory"}
                    alt={`Memory ${memory.id}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    priority={index < 2}
                  />

                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Decorative corner accents for certain images */}
                {index % 3 === 1 && (
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-rose-300/60 rounded-tr" />
                )}
                {index % 3 === 2 && (
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-purple-300/60 rounded-bl" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 mt-12">
        {memories.map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 opacity-60 animate-pulse"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>
    </section>
  )
}
