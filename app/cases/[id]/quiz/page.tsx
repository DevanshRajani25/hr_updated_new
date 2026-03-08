/* Quiz page */
"use client"

import { useEffect, useMemo, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import type { CaseDefinition } from "@/types/case"
import { loadCaseByNumber } from "@/data/case-registry"
import { HomeoBackdrop } from "@/components/homeo-backdrop"

type Q = { question: string; options: string[]; correctIndex: number }

export default function QuizPage() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params?.id)
  const [activeCase, setActiveCase] = useState<CaseDefinition | null>(null)
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [score, setScore] = useState(0)

  useEffect(() => {
    let mounted = true
    async function run() {
      if (id >= 5 && id <= 20) {
        const loaded = await loadCaseByNumber(id)
        if (!mounted) return
        setActiveCase(loaded)
      }
    }
    run()
    return () => {
      mounted = false
    }
  }, [id])

  const case1Quiz: Q[] = useMemo(
    () => [
      {
        question: "Maria's sudden, violent throbbing headache fits which remedy best?",
        options: ["Glonoine", "Belladonna", "Bryonia", "Nux Vomica"],
        correctIndex: 1,
      },
      {
        question: "Key Belladonna modalities in Maria:",
        options: [
          "Worse by motion and cold air",
          "Worse by light, noise, touch, and lying down",
          "Better by open air",
          "Better by pressure",
        ],
        correctIndex: 1,
      },
      {
        question: "Red, hot face; dry burning skin suggests:",
        options: ["Chronic state", "Hyperemia/acute inflammation", "Suppurative", "Neuralgia only"],
        correctIndex: 1,
      },
      {
        question: "Typical Belladonna mental state:",
        options: ["Calm", "Excitable, oversensitive to impressions", "Weeping and mild", "Indifferent"],
        correctIndex: 1,
      },
      {
        question: "Differentiate Belladonna vs Glonoine:",
        options: [
          "Belladonna: violent throbbing with red, hot dry skin",
          "Glonoine: only at night",
          "Belladonna: better by walking",
          "Glonoine: no effect from sun/heat",
        ],
        correctIndex: 0,
      },
    ],
    [],
  )

  const case3Quiz: Q[] = useMemo(
    () => [
      {
        question: "What is the most characteristic time modality in Neha Shah's case?",
        options: ["Worse in morning", "Worse at night and from sweating", "Better at night", "No time modality"],
        correctIndex: 1,
      },
      {
        question: "Which thermal modality distinguishes Sulphur in this case?",
        options: [
          "Desires warmth",
          "Indifferent to temperature",
          "Prefers cold, worse from heat/sweating",
          "Alternating hot and cold",
        ],
        correctIndex: 2,
      },
      {
        question: "The concomitant symptom of 'burning eyes' alongside skin eruptions suggests:",
        options: [
          "Separate condition requiring different remedy",
          "Sulphur's tendency for burning sensations in multiple areas",
          "Allergic conjunctivitis only",
          "Side effect of scratching",
        ],
        correctIndex: 1,
      },
      {
        question: "Family history of skin allergies in mother indicates:",
        options: [
          "Hereditary tendency, supporting Sulphur's chronic nature",
          "Contagious condition",
          "Not relevant to case-taking",
          "Autoimmune disorder",
        ],
        correctIndex: 0,
      },
      {
        question: "Past history of similar eruptions on arms suggests:",
        options: [
          "Acute one-time condition",
          "Chronic, recurring tendency typical of Sulphur constitution",
          "Infection spreading",
          "Environmental allergy only",
        ],
        correctIndex: 1,
      },
    ],
    [],
  )

  const case4Quiz: Q[] = useMemo(
    () => [
      {
        question: "What key characteristic of Ramesh's nosebleed suggests Ferrum Phos?",
        options: [
          "Dark, clotted blood",
          "Bright red, fresh blood without injury",
          "Profuse bleeding with fainting",
          "Blood only in morning",
        ],
        correctIndex: 1,
      },
      {
        question: "Which nostril was primarily bleeding in this case?",
        options: ["Left nostril", "Right nostril", "Both nostrils equally", "Alternating sides"],
        correctIndex: 1,
      },
      {
        question: "The absence of trauma before the bleeding indicates:",
        options: [
          "Hidden head injury",
          "Spontaneous bleeding typical of Ferrum Phos",
          "Coagulation disorder only",
          "High blood pressure",
        ],
        correctIndex: 1,
      },
      {
        question: "Ramesh's tendency to get nosebleeds in summer/hot weather suggests:",
        options: [
          "Ferrum Phos constitution with heat sensitivity",
          "Dehydration only",
          "Sun allergy",
          "Unrelated seasonal factor",
        ],
        correctIndex: 0,
      },
      {
        question: "The concomitant symptom of weakness after bleeding is characteristic of:",
        options: [
          "Severe anemia requiring hospitalization",
          "Ferrum Phos - weakness from bleeding in anemic/young patients",
          "Psychological fear only",
          "Unrelated fatigue",
        ],
        correctIndex: 1,
      },
    ],
    [],
  )

  const case11Quiz: Q[] = useMemo(
    () => [
      {
        question: "The most likely diagnosis in this case is:",
        options: ["Acute conjunctivitis", "Corneal abrasion", "Subconjunctival hemorrhage", "Glaucoma"],
        correctIndex: 2,
      },
      {
        question: "Which feature strongly indicates ARNICA in this case?",
        options: ["Severe throbbing pain", "Purulent discharge", "Injury looks worse than it feels", "Vision loss"],
        correctIndex: 2,
      },
      {
        question: "What is the main cause of the condition in this patient?",
        options: ["Infection", "Allergy", "Minor trauma / strain", "Chronic disease"],
        correctIndex: 2,
      },
      {
        question: "What sensation does the patient describe?",
        options: [
          "Burning and itching",
          "Sharp stabbing pain",
          "Bruised soreness with mild discomfort",
          "Complete numbness",
        ],
        correctIndex: 2,
      },
      {
        question: "The mental state of the patient is best described as:",
        options: [
          "Extremely anxious",
          "Aggressive and angry",
          "Says 'I'm fine' but internally uneasy",
          "Depressed and withdrawn",
        ],
        correctIndex: 2,
      },
    ],
    [],
  )

  const questions: Q[] = useMemo(() => {
    if (id === 1) return case1Quiz
    if (id === 2) {
      return [
        {
          question: "What is the primary complaint of Rajesh Mishra?",
          options: ["Headache", "Knee bruise after fall", "Stomach pain", "Fever"],
          correctIndex: 1,
        },
        {
          question: "Which side is affected?",
          options: ["Left", "Both", "Right", "None"],
          correctIndex: 2,
        },
        {
          question: "What makes his pain worse?",
          options: ["Cold air", "Warmth or touch", "Sitting quietly", "Morning time"],
          correctIndex: 1,
        },
        {
          question: "What gives relief to Rajesh Mishra?",
          options: ["Heat", "Rest in warm room", "Cold application", "Exercise"],
          correctIndex: 2,
        },
        {
          question: "Which medicine suits this case best?",
          options: ["Belladonna", "Arnica", "Rhus tox", "Ledum palustre"],
          correctIndex: 3,
        },
      ]
    }
    if (id === 3) return case3Quiz
    if (id === 4) return case4Quiz
    if (id === 11) return case11Quiz
    return activeCase?.quiz ?? []
  }, [id, activeCase, case1Quiz, case3Quiz, case4Quiz, case11Quiz])

  function checkAnswer() {
    if (!questions.length || selected == null) return
    const isCorrect = Number(selected) === questions[idx].correctIndex
    setFeedback(isCorrect ? "Correct!" : "Incorrect.")
    if (isCorrect) setScore((s) => s + 1)
  }

  function next() {
    setFeedback(null)
    setSelected(null)
    if (idx < questions.length - 1) {
      setIdx((i) => i + 1)
    } else {
      // store and go to result
      sessionStorage.setItem(`hr_case_${id}_quiz_score`, JSON.stringify({ score, total: questions.length }))
      router.push(`/cases/${id}/result`)
    }
  }

  return (
    <main className="min-h-screen relative p-6">
      <HomeoBackdrop theme="lemon" className="absolute inset-0 -z-10" />
      <div className="max-w-3xl mx-auto">
        <Card className="bg-white/90 rounded-3xl shadow-xl card-float">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl font-extrabold text-rose-600 text-center">Case {id} Quiz</h2>
            <div className="text-center text-sm text-gray-600">
              Question {idx + 1} / {questions.length || 1}
            </div>

            {questions.length > 0 ? (
              <>
                <p className="text-lg font-semibold text-indigo-700">{questions[idx].question}</p>
                <div className="mt-4 space-y-3">
                  {questions[idx].options.map((opt, i) => (
                    <label
                      key={i}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer ${
                        selected === String(i)
                          ? "bg-rose-50 border-rose-300"
                          : "bg-white hover:bg-rose-50 border-gray-200"
                      }`}
                    >
                      <input
                        type="radio"
                        name="q"
                        value={i}
                        checked={selected === String(i)}
                        onChange={(e) => setSelected(e.target.value)}
                        className="w-5 h-5 text-rose-600"
                      />
                      <span className="text-gray-800">{opt}</span>
                    </label>
                  ))}
                </div>

                {feedback && (
                  <div
                    className={`p-3 rounded-xl ${
                      feedback.startsWith("Correct") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                    }`}
                  >
                    {feedback}
                  </div>
                )}

                <div className="flex justify-center gap-3">
                  <Button onClick={() => router.push(`/cases/${id}/remedy`)} variant="outline" className="rounded-full">
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back
                  </Button>
                  {!feedback ? (
                    <Button
                      onClick={checkAnswer}
                      disabled={selected == null}
                      className="btn-bounce rounded-full px-8 text-white bg-gradient-to-r from-rose-500 to-fuchsia-500"
                    >
                      Check Answer
                    </Button>
                  ) : (
                    <Button
                      onClick={next}
                      className="btn-bounce rounded-full px-8 text-white bg-gradient-to-r from-sky-500 to-indigo-500"
                    >
                      {idx < questions.length - 1 ? "Next" : "Finish"}
                    </Button>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center text-gray-700">
                No quiz configured for this case.{" "}
                <Button onClick={() => router.push(`/cases/${id}/result`)} className="ml-2 rounded-full">
                  Continue
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
