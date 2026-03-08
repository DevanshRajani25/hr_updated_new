/* Final result page with retry options */
"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, RotateCcw } from "lucide-react"
import { HomeoBackdrop } from "@/components/homeo-backdrop"

export default function ResultPage() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params?.id)
  const [score, setScore] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const raw = sessionStorage.getItem(`hr_case_${id}_quiz_score`)
    if (raw) {
      try {
        const obj = JSON.parse(raw)
        setScore(Number(obj.score) || 0)
        setTotal(Number(obj.total) || 0)
      } catch {}
    }
  }, [id])

  const feedback =
    id === 2 && total > 0
      ? score >= 4
        ? "Excellent doctor! You understood Ledum palustre perfectly."
        : score >= 2
          ? "Good effort! Review case notes again."
          : "Needs more observation. Try revising the case carefully."
      : id === 1 && total > 0
        ? score >= 4
          ? "Excellent! You mastered Belladonna."
          : score >= 2
            ? "Good effort! Review the case."
            : "Needs more study. Try again."
        : null

  function retryQuiz() {
    // Clear quiz score and go back to quiz
    sessionStorage.removeItem(`hr_case_${id}_quiz_score`)
    router.push(`/cases/${id}/quiz`)
  }

  function retryCase() {
    // Clear diag and quiz and go to interaction
    sessionStorage.removeItem(`hr_case_${id}_diag`)
    sessionStorage.removeItem(`hr_case_${id}_quiz_score`)
    router.push(`/cases/${id}`)
  }

  return (
    <main className="min-h-screen relative p-6">
      <HomeoBackdrop theme="purple" className="absolute inset-0 -z-10" />
      <div className="max-w-3xl mx-auto">
        <Card className="bg-white/90 rounded-3xl shadow-xl card-float">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl font-extrabold text-indigo-700 text-center">Quiz Result</h2>
            <p className="text-lg text-gray-800 text-center">
              Your score: {score} / {total}
            </p>
            {feedback && <p className="text-center font-semibold text-indigo-700">{feedback}</p>}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Button
                onClick={() => router.push("/")}
                className="btn-bounce rounded-full px-8 text-white bg-gradient-to-r from-emerald-500 to-teal-500"
              >
                <Home className="mr-2 w-4 h-4" /> Home
              </Button>
              <Button onClick={() => router.push("/cases")} variant="outline" className="btn-bounce rounded-full px-8">
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Cases
              </Button>
              <Button onClick={retryQuiz} variant="outline" className="btn-bounce rounded-full px-8 bg-transparent">
                <RotateCcw className="mr-2 w-4 h-4" /> Retry Quiz
              </Button>
              <Button onClick={retryCase} variant="outline" className="btn-bounce rounded-full px-8 bg-transparent">
                <RotateCcw className="mr-2 w-4 h-4" /> Retry Case
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
