"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { CaseDefinition } from "@/types/case"
import { loadCaseByNumber } from "@/data/case-registry"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { HomeoBackdrop } from "@/components/homeo-backdrop"

type DiagData = { symptoms: string; diagnosis: string; medicine: string; potency: string }

export default function DiagnosisPage() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params?.id)
  const [activeCase, setActiveCase] = useState<CaseDefinition | null>(null)
  const [data, setData] = useState<DiagData>({ symptoms: "", diagnosis: "", medicine: "", potency: "" })
  const [checking, setChecking] = useState(false)

  useEffect(() => {
    let mounted = true
    async function run() {
      if (id >= 6 && id <= 23) {
        const loaded = await loadCaseByNumber(id)
        if (!mounted) return
        setActiveCase(loaded)
      }
    }
    run()
    // Load drafted state (if any)
    const cached = sessionStorage.getItem(`hr_case_${id}_diag`)
    if (cached) {
      try {
        const obj = JSON.parse(cached)
        setData((d) => ({ ...d, ...obj }))
      } catch {}
    }
    return () => {
      mounted = false
    }
  }, [id])

  function getCorrectList(): string[] {
    if (id === 1) return ["belladonna", "belladonna", "bella donna"]
    if (id === 2)
      return [
        "ledum palustre",
        "ledum",
        "ledum pal",
        "ledum pal.",
        "ledum palust.",
        "ledum-palustre",
        "ledum palustre",
        "ledumpalustre",
      ].map((s) => s.toLowerCase())
    if (id === 3) return ["sulphur", "sulfur", "sulph", "sulph."]
    if (id === 4)
      return [
        "ferrum phos",
        "ferrum phosphoricum",
        "ferrumphos",
        "ferrum-phos",
        "ferrum phosph",
        "ferrum phos.",
        "ferr phos",
        "ferr. phos",
      ].map((s) => s.toLowerCase())
    if (id === 5)
      return ["ignatia", "ignatia amara", "ignatiaamara", "ignatia-amara", "ign", "ign.", "ignat", "ignat."].map((s) =>
        s.toLowerCase(),
      )
    if (id === 6)
      return ["belladonna", "bella donna", "belladonna", "bella", "bell", "bell."].map((s) => s.toLowerCase())
    if (id === 11) return ["arnica", "arnica montana", "arnica mont", "arnica mont."].map((s) => s.toLowerCase())
    const arr = activeCase?.diagnosis?.correct ?? []
    return arr.map((x) => x.toLowerCase())
  }

  function onCheck() {
    setChecking(true)
    setTimeout(() => {
      const correctList = getCorrectList()
      const med = data.medicine.trim().toLowerCase()
      const okMed = med.length > 0 && correctList.includes(med)
      const okPot = data.potency.trim().length > 0
      const correct = okMed && okPot
      // persist
      const store = { ...data, correct }
      sessionStorage.setItem(`hr_case_${id}_diag`, JSON.stringify(store))
      router.push(`/cases/${id}/remedy`)
    }, 1200)
  }

  return (
    <main className="min-h-screen relative p-6">
      <HomeoBackdrop theme="blue" className="absolute inset-0 -z-10" />
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/90 rounded-3xl shadow-xl card-float">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl font-extrabold text-sky-700 text-center">Diagnosis & Remedy Selection</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sky-700">Key Symptoms</Label>
                <Input
                  value={data.symptoms}
                  onChange={(e) => setData({ ...data, symptoms: e.target.value })}
                  placeholder="List key symptoms"
                  className="rounded-xl"
                />
              </div>
              <div>
                <Label className="text-sky-700">Provisional Diagnosis</Label>
                <Input
                  value={data.diagnosis}
                  onChange={(e) => setData({ ...data, diagnosis: e.target.value })}
                  placeholder={
                    activeCase?.diagnosis?.provisional ||
                    (id === 1
                      ? "Acute throbbing congestive headache"
                      : id === 4
                        ? "Epistaxis (Nosebleed)"
                        : id === 5
                          ? "Depressive Episode"
                          : "Diagnosis")
                  }
                  className="rounded-xl"
                />
              </div>
              <div>
                <Label className="text-sky-700">Remedy</Label>
                <Input
                  value={data.medicine}
                  onChange={(e) => setData({ ...data, medicine: e.target.value })}
                  placeholder="Enter remedy (required)"
                  className="rounded-xl"
                />
              </div>
              <div>
                <Label className="text-sky-700">Potency</Label>
                <Input
                  value={data.potency}
                  onChange={(e) => setData({ ...data, potency: e.target.value })}
                  placeholder="Enter potency (required)"
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <Button
                onClick={() => router.push(`/cases/${id}/vitals`)}
                variant="outline"
                className="btn-bounce rounded-full px-6"
              >
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Vitals
              </Button>
              <Button
                onClick={onCheck}
                disabled={checking || !data.medicine || !data.potency}
                className="btn-bounce rounded-full px-8 text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500"
              >
                {checking ? "Checking..." : "Check Remedy"} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
