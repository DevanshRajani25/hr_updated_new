/* Remedy info page (Result & Explanation) */
"use client"

import { useEffect, useMemo, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { CaseDefinition } from "@/types/case"
import { loadCaseByNumber } from "@/data/case-registry"
import { HomeoBackdrop } from "@/components/homeo-backdrop"

export default function RemedyPage() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params?.id)
  const [activeCase, setActiveCase] = useState<CaseDefinition | null>(null)
  const [correct, setCorrect] = useState<boolean | null>(null)
  const [showWhy, setShowWhy] = useState(false)

  useEffect(() => {
    let mounted = true
    async function run() {
      if (id >= 3 && id <= 23) {
        const loaded = await loadCaseByNumber(id)
        if (!mounted) return
        setActiveCase(loaded)
      }
    }
    run()
    const cached = sessionStorage.getItem(`hr_case_${id}_diag`)
    if (cached) {
      try {
        const obj = JSON.parse(cached)
        setCorrect(Boolean(obj?.correct))
      } catch {}
    }
    return () => {
      mounted = false
    }
  }, [id])

  const remedyInfo = useMemo(() => {
    if (id === 1)
      return "Belladonna suits sudden, violent congestion: throbbing headache, red hot face, dry heat; worse light/noise/touch/jar; relief in dark quiet room with rest or cool applications."
    if (id === 2)
      return `About Ledum palustre:
- Ledum palustre is a great remedy for bruises, puncture wounds, and insect bites.
- It suits people who prefer cold, whose pains get worse by warmth or touch, and better by cold applications.
- It's often called the 'Arnica of the cold type' — calm, cool, yet deeply sore.`
    if (id === 5)
      return `About Ignatia Amara:
- Ignatia Amara is the premier remedy for grief, sadness, and emotional distress.
- Suited for sensitive, emotional individuals who suffer silently and prefer to be alone.
- Key features: contradictory symptoms (laughing and crying together), sighing, sobbing, worse from consolation.
- Mental state: depression, tearfulness, feelings of hopelessness, but lack courage for extreme actions.
- Modalities: worse from consolation and sympathy; better when busy or distracted.`
    if (id === 21)
      return `Why PULSATILLA NIGRICANS?

Clinical Indicators Present in This Case:
• Irregular delayed menses
• Mild weepy temperament
• Thirstless
• Better in open air
• Worse in warm room
• Changeable symptoms
• Seeks consolation

About Pulsatilla Nigricans:
- Pulsatilla is the premier female remedy for menstrual disorders.
- Suited for mild, emotional, weepy individuals who seek reassurance and console.
- Classic Pulsatilla keynote: better in open air, worse in warm stuffy rooms.
- Thermal state: intolerant of heat, always wanting fresh cool air.
- Thirstlessness is a distinguishing feature (unusual in most remedies).
- Changeable symptoms and emotional instability are hallmark characteristics.
- White discharge and menstrual irregularities respond beautifully to Pulsatilla.
- Mental state: crying easily, seeks sympathy, emotional dependence.`
    if (id === 22)
      return `Why RUTA GRAVEOLENS?

Clinical Indicators Present in This Case:
• Tendon sheath swelling (Ganglion cyst)
• After occupational strain/overuse
• Worse from motion
• Better from rest
• Bruised aching pain
• Deep-seated tissue affection

About Ruta Graveolens:
- Ruta is the premier remedy for tendon and ligament injuries from overuse.
- Suited for hardworking individuals with occupational strain injuries.
- Classic Ruta keynote: worse from motion, better from rest.
- The pain is characteristically bruised and aching, as if deeply injured.
- Ganglion cysts and synovial swellings respond excellently to Ruta.
- Particularly effective in carpenters, laborers, and workers with repetitive strain.
- Mental state: irritable when unable to work, practical worker mentality.
- Modality: sensitive to cold air, which is a Ruta characteristic.`
    if (id === 23)
      return `Why CALCAREA FLUORICA?

Clinical Indicators Present in This Case:
• Heel pain on first steps
• Ligament and plantar fascia strain
• Standing/walking aggravates pain
• Plantar fascia involvement
• Tissue elasticity disorder
• Pain worse on initial movement

About Calcarea Fluorica:
- Calcarea Fluorica is the premier remedy for plantar fasciitis and heel pain.
- Suited for hardworking individuals with prolonged standing and walking strain.
- Classic Calcarea Fluorica keynote: heel pain worse on first steps, better after continued movement.
- Affects elastic fibers of ligaments and fascia, addressing root pathology.
- Plantar fasciitis with heel spur tendency responds excellently to Calc Fluor.
- Particularly effective in shopkeepers, laborers, and standing workers.
- Mental state: worried about pain affecting work capacity and livelihood.
- Tissue state: restores elasticity to strained ligaments and fasciae.`
    return activeCase?.diagnosis?.remedyInfo || "Selected remedy matches the totality and modalities for this case."
  }, [id, activeCase])

  return (
    <main className="min-h-screen relative p-6">
      <HomeoBackdrop theme="mint" className="absolute inset-0 -z-10" />
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/90 rounded-3xl shadow-xl card-float">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl font-extrabold text-indigo-700 text-center">Result & Explanation</h2>

            {id === 2 ? (
              correct ? (
                <p className="text-green-700 text-lg font-semibold">
                  ✅ Correct, this medicine is perfect for my case.
                </p>
              ) : (
                <p className="text-red-600 text-lg font-semibold">
                  ❌ No doctor, that medicine doesn't suit me. The right medicine is Ledum palustre.
                </p>
              )
            ) : id === 21 ? (
              correct ? (
                <div className="space-y-3">
                  <p className="text-green-700 text-lg font-semibold">
                    ✅ Correct! PULSATILLA NIGRICANS is perfectly indicated.
                  </p>
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <p className="text-green-800 font-semibold mb-2">Clinical Indicators Present:</p>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Irregular delayed menses</li>
                      <li>• Mild weepy temperament</li>
                      <li>• Thirstless</li>
                      <li>• Better in open air</li>
                      <li>• Worse in warm room</li>
                      <li>• Changeable symptoms</li>
                      <li>• Seeks consolation</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-red-600 text-lg font-semibold">
                    ❌ Incorrect. The right medicine is PULSATILLA NIGRICANS.
                  </p>
                  <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                    <p className="text-red-800 font-semibold mb-2">Why PULSATILLA NIGRICANS?</p>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Irregular delayed menses</li>
                      <li>• Mild weepy temperament</li>
                      <li>• Thirstless</li>
                      <li>• Better in open air</li>
                      <li>• Worse in warm room</li>
                      <li>• Changeable symptoms</li>
                      <li>• Seeks consolation</li>
                    </ul>
                  </div>
                </div>
              )
            ) : id === 22 ? (
              correct ? (
                <div className="space-y-3">
                  <p className="text-green-700 text-lg font-semibold">
                    ✅ Correct! RUTA GRAVEOLENS is perfectly indicated.
                  </p>
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <p className="text-green-800 font-semibold mb-2">Clinical Indicators Present:</p>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Tendon sheath swelling (Ganglion cyst)</li>
                      <li>• After occupational strain/overuse</li>
                      <li>• Worse from motion</li>
                      <li>• Better from rest</li>
                      <li>• Bruised aching pain</li>
                      <li>• Deep-seated tissue affection</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-red-600 text-lg font-semibold">
                    ❌ Incorrect. The right medicine is RUTA GRAVEOLENS.
                  </p>
                  <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                    <p className="text-red-800 font-semibold mb-2">Why RUTA GRAVEOLENS?</p>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Tendon sheath swelling (Ganglion cyst)</li>
                      <li>• After occupational strain/overuse</li>
                      <li>• Worse from motion</li>
                      <li>• Better from rest</li>
                      <li>• Bruised aching pain</li>
                      <li>• Deep-seated tissue affection</li>
                    </ul>
                  </div>
                </div>
              )
            ) : id === 23 ? (
              correct ? (
                <div className="space-y-3">
                  <p className="text-green-700 text-lg font-semibold">
                    ✅ Correct! CALCAREA FLUORICA is perfectly indicated.
                  </p>
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <p className="text-green-800 font-semibold mb-2">Clinical Indicators Present:</p>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Heel pain on first steps</li>
                      <li>• Ligament and plantar fascia strain</li>
                      <li>• Standing/walking aggravates pain</li>
                      <li>• Plantar fascia involvement</li>
                      <li>• Tissue elasticity disorder</li>
                      <li>• Pain worse on initial movement</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-red-600 text-lg font-semibold">
                    ❌ Incorrect. The right medicine is CALCAREA FLUORICA.
                  </p>
                  <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                    <p className="text-red-800 font-semibold mb-2">Why CALCAREA FLUORICA?</p>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Heel pain on first steps</li>
                      <li>• Ligament and plantar fascia strain</li>
                      <li>• Standing/walking aggravates pain</li>
                      <li>• Plantar fascia involvement</li>
                      <li>• Tissue elasticity disorder</li>
                      <li>• Pain worse on initial movement</li>
                    </ul>
                  </div>
                </div>
              )
            ) : correct ? (
              <p className="text-green-700 text-lg font-semibold">✅ Correct! Good remedy selection.</p>
            ) : (
              <p className="text-red-600 text-lg font-semibold">❌ Incorrect. See why and retry.</p>
            )}

            <div>
              <Button variant="outline" onClick={() => setShowWhy((s) => !s)} className="btn-bounce rounded-full">
                {showWhy ? "Hide Why" : "See Why"}
              </Button>
              {showWhy && <div className="mt-3 p-4 rounded-xl bg-indigo-50 border text-gray-800">{remedyInfo}</div>}
            </div>

            <div className="flex justify-center gap-3">
              <Button
                onClick={() => {
                  // clear correctness to retry
                  const cached = sessionStorage.getItem(`hr_case_${id}_diag`)
                  if (cached) {
                    try {
                      const obj = JSON.parse(cached)
                      obj.correct = null
                      sessionStorage.setItem(`hr_case_${id}_diag`, JSON.stringify(obj))
                    } catch {}
                  }
                  router.push(`/cases/${id}/diagnosis`)
                }}
                variant="outline"
                className="btn-bounce rounded-full px-6"
              >
                <ArrowLeft className="mr-2 w-4 h-4" /> Retry Diagnosis
              </Button>
              <Button
                onClick={() => router.push(`/cases/${id}/quiz`)}
                className="btn-bounce rounded-full px-8 text-white bg-gradient-to-r from-sky-500 to-indigo-500"
              >
                Start Quiz <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
