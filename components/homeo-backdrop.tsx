"use client"

import { FlaskConical, BookOpen, Waves, ScrollText, Pill } from "lucide-react"

type Props = { theme?: "blue" | "mint" | "lemon" | "purple" | "orange"; className?: string }

export function HomeoBackdrop({ theme = "blue", className = "" }: Props) {
  const gradients: Record<string, string> = {
    blue: "from-sky-50 via-white to-indigo-50",
    mint: "from-emerald-50 via-white to-teal-50",
    lemon: "from-yellow-50 via-white to-amber-50",
    purple: "from-fuchsia-50 via-white to-violet-50",
    orange: "from-orange-50 via-white to-red-50",
  }
  const items = [
    { Icon: FlaskConical, color: "text-sky-400" },
    { Icon: BookOpen, color: "text-emerald-400" },
    { Icon: Waves, color: "text-indigo-400" },
    { Icon: ScrollText, color: "text-purple-400" },
    { Icon: Pill, color: "text-rose-400" },
  ]
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[theme]} pointer-events-none`} />
      {Array.from({ length: 10 }).map((_, i) => {
        const It = items[i % items.length]
        return (
          <div
            key={i}
            className={`absolute opacity-30 ${It.color} animate-pulse`}
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 13) % 100}%`,
              animation: `float ${8 + (i % 4)}s ease-in-out ${i * 0.2}s infinite`,
            }}
          >
            <It.Icon className="w-10 h-10" />
          </div>
        )
      })}
      <div
        className="absolute -inset-20 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(56,189,248,0.15),transparent_60%)]"
        style={{
          animation: `scaleAnimation 6s ease-in-out infinite`,
        }}
      />
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(-20px) rotate(0deg); }
          50% { transform: translateY(10px) rotate(8deg); }
        }
        @keyframes scaleAnimation {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
      `}</style>
    </div>
  )
}
