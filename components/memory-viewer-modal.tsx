"use client"

import { useState, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Memory {
  id: number
  image: string
  caption: string
  description: string
}

interface MemoryViewerModalProps {
  isOpen: boolean
  onClose: () => void
  memories: Memory[]
}

export default function MemoryViewerModal({ isOpen, onClose, memories }: MemoryViewerModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const currentMemory = memories[currentIndex]

  const handleNext = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prev) => (prev + 1) % memories.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }, [isAnimating, memories.length])
  
  const handlePrev = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }, [isAnimating, memories.length])

  useEffect(() => {
    if (!isOpen) return
  
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "Escape") onClose()
    }
  
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [isOpen, handleNext, handlePrev, onClose])
  

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-4xl max-h-[90vh] bg-black rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-white" />
          </button>

        <div className="relative w-full flex flex-col">
          {/* Image display */}
          <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-black flex items-center justify-center">
            <div
              className={`relative w-full h-full transition-all duration-700 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <Image
                src={currentMemory.image || "/placeholder.svg"}
                alt={currentMemory.caption || "Memory Image"}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Vignette effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
          </div>

          {/* Info section */}
          <div className="relative px-8 py-8 bg-gradient-to-b from-black/50 to-black">
            <h2
              className={`text-3xl md:text-4xl font-light text-white mb-3 transition-all duration-700 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {currentMemory.caption}
            </h2>

            <p
              className={`text-lg text-white/80 leading-relaxed max-w-2xl transition-all duration-700 delay-100 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {currentMemory.description}
            </p>

            {/* Progress and controls */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {memories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true)
                        setCurrentIndex(idx)
                        setTimeout(() => setIsAnimating(false), 500)
                      }
                    }}
                    className={`rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-8 h-1 bg-rose-500"
                        : "w-2 h-1 bg-rose-300/50 hover:bg-rose-300"
                    }`}
                  />
                ))}
              </div>

              <div className="text-sm text-white/60">
                {currentIndex + 1} / {memories.length}
              </div>
            </div>
          </div>
        </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-200 disabled:opacity-50"
            aria-label="Previous memory"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-200 disabled:opacity-50"
            aria-label="Next memory"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </>
  )
}
