"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, IndianRupee, Lock } from "lucide-react"

type SlideToPayProps = {
  label?: string
  amount?: number
  onComplete?: () => void
  upi?: {
    pa: string // VPA
    pn?: string // Payee name
    am?: string // amount as string
    tn?: string // transaction note
    cu?: string // currency (INR)
  }
}

export default function SlideToPay({
  label = "Slide to Pay ₹19",
  amount = 19,
  onComplete,
  upi = {
    pa: "daxeshmarvaniya@okaxis",
    pn: "Daxesh Marvaniya",
    am: "19",
    tn: "Homeo Reaches Access Payment",
    cu: "INR",
  },
}: SlideToPayProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const knobRef = useRef<HTMLDivElement>(null)
  const [completed, setCompleted] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [knobX, setKnobX] = useState(0)
  const [maxX, setMaxX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const knob = el.querySelector("#slider-knob") as HTMLDivElement | null
    if (!knob) return
    const trackWidth = el.clientWidth
    const knobWidth = knob.clientWidth
    setMaxX(trackWidth - knobWidth - 4)
  }, [])

  const progress = maxX > 0 ? (knobX / maxX) * 100 : 0

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !trackRef.current) return
      const rect = trackRef.current.getBoundingClientRect()
      let newX = e.clientX - rect.left - 24
      newX = Math.max(0, Math.min(newX, maxX))
      setKnobX(newX)
    }

    const handleMouseUp = (e: MouseEvent) => {
      if (!isDragging) return
      setIsDragging(false)
      if (knobX >= maxX * 0.95) {
        setProcessing(true)
        setTimeout(() => {
          setCompleted(true)
          const params = new URLSearchParams({
            pa: upi.pa,
            pn: upi.pn ?? "",
            am: upi.am ?? String(amount),
            tn: upi.tn ?? "",
            cu: upi.cu ?? "INR",
          })
          const upiUrl = `upi://pay?${params.toString()}`
          try {
            window.location.href = upiUrl
          } catch (e) {
            // ignore
          }
          onComplete?.()
        }, 1200)
      } else {
        setKnobX(0)
      }
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }
    }
  }, [isDragging, knobX, maxX, upi, amount, onComplete])

  return (
    <div className="w-full">
      <div className="text-center mb-3">
        {!completed ? (
          <p className="text-sm text-gray-600">Slide to make a secure payment using Google Pay</p>
        ) : (
          <p className="text-sm text-green-600 font-medium">Payment flow initiated</p>
        )}
      </div>

      <div
        ref={trackRef}
        className="relative w-full h-14 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 border-2 border-blue-200 overflow-hidden cursor-grab active:cursor-grabbing"
        aria-label={label}
      >
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-200/60 to-teal-200/60 transition-all"
          style={{ width: `${progress}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {!completed ? (
            <div className="flex items-center gap-2 text-blue-700 font-semibold">
              <Lock className="w-5 h-5" />
              <span>{label}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-green-700 font-semibold">
              <CheckCircle className="w-5 h-5" />
              <span>{`Payment of ₹${amount} Successful!`}</span>
            </div>
          )}
        </div>

        <div
          id="slider-knob"
          ref={knobRef}
          className={`absolute top-1 left-1 h-12 w-12 rounded-full shadow-lg flex items-center justify-center text-white transition-all ${completed ? "bg-green-500" : "bg-gradient-to-r from-blue-500 to-teal-500"}`}
          style={{ transform: `translateX(${knobX}px)`, cursor: "grab" }}
          onMouseDown={() => !completed && setIsDragging(true)}
          role="button"
          aria-label="Slide knob"
        >
          {processing || completed ? (
            <CheckCircle className="w-6 h-6 text-white" />
          ) : (
            <IndianRupee className="w-6 h-6 text-white" />
          )}
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-2">Powered by Google Pay</p>
    </div>
  )
}
