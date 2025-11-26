"use client"

import { useState, useEffect } from "react"
import HeroSection from "@/components/hero-section"
import PhotoGallery from "@/components/photo-gallery"
import PersonalMessage from "@/components/personal-message"
import InteractiveElement from "@/components/interactive-element"
import Celebrations from "@/components/celebrations"
import MemoriesTriptych from "@/components/memories-triptych"

export default function Page() {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    // Trigger confetti on load
    const timer = setTimeout(() => setShowConfetti(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden">
      <Celebrations show={showConfetti} />

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <InteractiveElement />
        <MemoriesTriptych />
        <PhotoGallery />
        <PersonalMessage />
      </div>
    </main>
  )
}
