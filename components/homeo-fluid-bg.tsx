"use client"

import { useEffect, useState } from "react"

export function HomeoFluidBg() {
  const [isLowPower, setIsLowPower] = useState(false)

  useEffect(() => {
    // Detect low-power devices
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsLowPower(mediaQuery.matches)
  }, [])

  if (isLowPower) {
    return null // Disable on low-power devices
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blob 1 - Soft gradient, slow float */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(125, 211, 252, 0.6), transparent 70%)",
          top: "10%",
          left: "5%",
          animation: "float-blob-1 15s ease-in-out infinite",
        }}
      />

      {/* Blob 2 - Mint accent, medium float */}
      <div
        className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(167, 243, 208, 0.5), transparent 70%)",
          top: "50%",
          right: "10%",
          animation: "float-blob-2 18s ease-in-out infinite",
        }}
      />

      {/* Blob 3 - Warm accent, slow float */}
      <div
        className="absolute w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(253, 224, 71, 0.4), transparent 70%)",
          bottom: "15%",
          left: "50%",
          animation: "float-blob-3 20s ease-in-out infinite",
        }}
      />

      <style>{`
        @keyframes float-blob-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -40px) scale(1.05); }
          50% { transform: translate(-20px, 30px) scale(0.95); }
          75% { transform: translate(40px, 20px) scale(1.02); }
        }
        @keyframes float-blob-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 30px) scale(1.03); }
          66% { transform: translate(30px, -40px) scale(0.98); }
        }
        @keyframes float-blob-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(50px, -30px) scale(1.01); }
          80% { transform: translate(-30px, 40px) scale(0.99); }
        }
      `}</style>
    </div>
  )
}
