/* Vitals sub-page for each case */
"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import type { CaseDefinition } from "@/types/case"
import { loadCaseByNumber } from "@/data/case-registry"
import { HomeoBackdrop } from "@/components/homeo-backdrop"

export default function VitalsPage() {
  const router = useRouter()
  const params = useParams()
  const id = Number(params?.id)
  const [activeCase, setActiveCase] = useState<CaseDefinition | null>(null)

  useEffect(() => {
    let mounted = true
    async function run() {
      if (id >= 5 && id <= 20) {
        const loaded = await loadCaseByNumber(id)
        if (!mounted) return
        setActiveCase(loaded)
      } else {
        setActiveCase(null)
      }
    }
    run()
    return () => {
      mounted = false
    }
  }, [id])

  const mariaVitals =
    id === 1
      ? [
          { label: "Temperature", value: "101.6°F (mildly raised)" },
          { label: "Pulse", value: "96/min (full and bounding)" },
          { label: "Blood Pressure", value: "138/86 mmHg" },
          { label: "Respiratory Rate", value: "20/min" },
          { label: "Respiratory System (RS)", value: "Normal breath sounds" },
          { label: "Cardiovascular System (CVS)", value: "Heart sounds normal, no murmur" },
          { label: "Gastrointestinal Tract (GIT)", value: "Appetite low, thirst moderate" },
          { label: "Locomotor System", value: "No stiffness, mild weakness due to headache" },
          { label: "Genito-Urinary (G.U.) System", value: "Normal frequency and output" },
          { label: "CNS", value: "Mild irritability, throbbing pain intensity fluctuates" },
        ]
      : []

  const rajeshVitals =
    id === 2
      ? [
          { label: "Temperature", value: "98.1°F (Normal)" },
          { label: "Pulse", value: "78/min, regular" },
          { label: "Respiration", value: "18/min" },
          { label: "Blood Pressure", value: "118/76 mmHg" },
          { label: "Appearance", value: "Calm, pale bluish bruise on right knee" },
          { label: "General condition", value: "Stable, oriented" },
        ]
      : []

  const nehaVitals =
    id === 3
      ? [
          { label: "Temperature", value: "Slightly raised, feels warm most of the time" },
          { label: "Pulse", value: "Normal but bounding" },
          { label: "Blood Pressure", value: "Normal" },
          { label: "RS (Respiratory System)", value: "Clear, no abnormal sounds" },
          { label: "CVS (Cardiovascular System)", value: "S1 S2 normal" },
          { label: "GIT (Gastrointestinal Tract)", value: "Acidity, bloating, burning sensation" },
          { label: "Locomotor System", value: "No major complaints" },
          { label: "GU System (Genito-Urinary)", value: "Normal" },
          { label: "CNS (Central Nervous System)", value: "Alert but restless" },
        ]
      : []

  const rameshVitals =
    id === 4
      ? [
          { label: "Temperature", value: "Normal (98.4°F)" },
          { label: "Pulse", value: "90/min" },
          { label: "Blood Pressure", value: "110/70 mmHg" },
          { label: "Respiratory Rate", value: "18/min" },
          { label: "General Appearance", value: "Slightly pale, appears weak" },
          { label: "Nose Examination", value: "Bright red bleeding from right nostril" },
          { label: "Respiratory System (RS)", value: "Clear, normal breath sounds" },
          { label: "Cardiovascular System (CVS)", value: "Heart sounds normal" },
          { label: "CNS", value: "Alert, slightly anxious about bleeding" },
        ]
      : []

  const anjaliVitals =
    id === 5
      ? [
          { label: "Temperature", value: "98.4°F (Normal)" },
          { label: "Pulse", value: "72/min (Regular)" },
          { label: "Blood Pressure", value: "108/70 mmHg" },
          { label: "Respiratory Rate", value: "16/min" },
          { label: "General Appearance", value: "Appears sad, tearful, frequent sighing" },
          { label: "Respiratory System (RS)", value: "Clear, tendency to sigh deeply" },
          { label: "Cardiovascular System (CVS)", value: "Heart sounds normal" },
          { label: "Gastrointestinal Tract (GIT)", value: "Loss of appetite, no physical complaints" },
          { label: "CNS", value: "Alert but emotionally distressed, silent grief" },
          { label: "Mental State", value: "Depressed mood, tearful, worse from consolation" },
        ]
      : []

  const rameshTonsilsVitals =
    id === 6
      ? [
          { label: "Temperature", value: "101°F (High fever)" },
          { label: "Pulse", value: "92/min" },
          { label: "Blood Pressure", value: "108/72 mmHg" },
          { label: "Respiratory Rate", value: "20/min" },
          { label: "General Appearance", value: "Flushed face, irritable, restless" },
          { label: "Throat Examination", value: "Red, swollen tonsils with white patches, right side worse" },
          { label: "Tongue", value: "Red and dry" },
          { label: "Respiratory System (RS)", value: "Clear breath sounds" },
          { label: "Cardiovascular System (CVS)", value: "Heart sounds normal" },
          { label: "CNS", value: "Alert but irritable due to pain" },
        ]
      : []

  const rahulFractureVitals =
    id === 10
      ? [
          { label: "Temperature", value: "98.4°F (Normal)" },
          { label: "Pulse", value: "78/min (Regular)" },
          { label: "Blood Pressure", value: "110/70 mmHg" },
          { label: "Respiratory Rate", value: "16/min" },
          { label: "General Appearance", value: "Alert, concerned about hand injury" },
          { label: "Hand Examination", value: "Swelling and tenderness on metacarpal bone" },
          { label: "Skin", value: "No discoloration, normal temperature" },
          { label: "Respiratory System (RS)", value: "Clear, normal breath sounds" },
          { label: "Cardiovascular System (CVS)", value: "Heart sounds normal" },
          { label: "CNS", value: "Alert but anxious about healing" },
        ]
      : []

  const rameshVitalsCase11 =
    id === 11
      ? [
          { label: "Temperature", value: "98.6°F (Normal)" },
          { label: "Pulse", value: "78/min, regular" },
          { label: "Blood Pressure", value: "120/80 mmHg" },
          { label: "Respiratory Rate", value: "16/min" },
          { label: "RS (Respiratory System)", value: "B.L.A.E. present, no added sounds" },
          { label: "CVS (Cardiovascular System)", value: "S1 & S2 normal, no murmur" },
          { label: "CNS (Central Nervous System)", value: "Conscious, oriented to time, place, person" },
          { label: "GIT (Gastrointestinal Tract)", value: "Abdomen soft, non-tender, bowel sounds present" },
          { label: "Locomotor System", value: "Normal movements, no joint swelling or deformity" },
          { label: "Genito-Urinary System", value: "No complaints, normal micturition" },
        ]
      : []

  const sureshVitalsCase15 =
    id === 15
      ? [
          { label: "Blood Pressure", value: "126/80 mmHg" },
          { label: "Pulse", value: "82/min" },
          { label: "Temperature", value: "98.4°F" },
          { label: "Respiration Rate", value: "22/min" },
          { label: "General Condition", value: "Irritable, wants rest, avoids movement" },
          { label: "Chest Examination", value: "Dry cough, chest pain on coughing, no expectoration" },
        ]
      : []

  const title =
    id === 1
      ? "Maria Johnson – Vitals"
      : id === 2
        ? "Rajesh Mishra – Vitals"
        : id === 3
          ? "Neha Shah – Vitals"
          : id === 4
            ? "Ramesh Patel – Vitals"
            : id === 5
              ? "Anjali Mehta – Vitals"
              : id === 6
                ? "Ramesh Patel – Vitals"
                : id === 10
                  ? "Rahul Patel – Vitals"
                  : id === 11
                    ? "Ramesh Patel – Vitals"
                    : id === 15
                      ? "Suresh Mehta – Vitals"
                      : `${activeCase?.patientName ?? "Virtual Patient"} – Vitals`

  const vitalsToShow =
    id === 1
      ? mariaVitals
      : id === 2
        ? rajeshVitals
        : id === 3
          ? nehaVitals
          : id === 4
            ? rameshVitals
            : id === 11
              ? rameshVitalsCase11
              : id === 15
                ? sureshVitalsCase15
                : []

  return (
    <main className="min-h-screen relative p-6">
      <HomeoBackdrop theme="purple" className="absolute inset-0 -z-10" />
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/90 rounded-3xl shadow-xl">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl font-extrabold text-indigo-700 text-center">{title}</h2>
            {id === 10 && <p className="text-sm text-amber-600 font-semibold text-center">X-ray of fracture</p>}
            {id === 15 && <p className="text-sm text-amber-600 font-semibold text-center">Chronic dry pleuritic cough - BRYONIA ALBA case</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vitalsToShow.map((s) => (
                <div key={s.label} className="p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-sky-50 border">
                  <h3 className="font-semibold text-sky-700">{s.label}</h3>
                  <p className="text-2xl font-bold text-indigo-800">{s.value}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-3">
              <Button
                onClick={() => router.push(`/cases/${id}`)}
                variant="outline"
                className="btn-bounce rounded-full px-6"
              >
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Interaction
              </Button>
              <Button
                onClick={() => router.push(`/cases/${id}/diagnosis`)}
                className="btn-bounce rounded-full px-6 text-white bg-gradient-to-r from-fuchsia-500 to-indigo-500"
              >
                Continue <ArrowLeft className="ml-2 hidden" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
