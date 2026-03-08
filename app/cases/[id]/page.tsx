"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react"
import type { CaseDefinition } from "@/types/case"
import { loadCaseByNumber } from "@/data/case-registry"
import { INTERACTION_MAP, pick } from "@/data/interaction-map"
import { HomeoBackdrop } from "@/components/homeo-backdrop"
import { HomeoFluidBg } from "@/components/homeo-fluid-bg"
import { detectKeywords, logDetection, normalize, detectCase19Keywords, detectCase20Keywords, detectCase21Keywords, detectCase22Keywords, detectCase23Keywords } from "@/lib/keyword-detector"
import { detectAndRespond as detectAndRespondCase1 } from "@/data/case-keywords/case-01-keywords"
import { detectAndRespond as detectAndRespondCase2 } from "@/data/case-keywords/case-02-keywords"
import { detectAndRespond as detectAndRespondCase3 } from "@/data/case-keywords/case-03-keywords"
import { detectAndRespond as detectAndRespondCase4 } from "@/data/case-keywords/case-04-keywords"
import { detectAndRespond as detectAndRespondCase5 } from "@/data/case-keywords/case-05-keywords"
import { detectAndRespond as detectAndRespondCase6 } from "@/data/case-keywords/case-06-keywords"
import { detectAndRespond as detectAndRespondCase9 } from "@/data/case-keywords/case-09-keywords"
import { detectAndRespond as detectAndRespondCase10 } from "@/data/case-keywords/case-10-keywords"
import { detectAndRespond as detectAndRespondCase11 } from "@/data/case-keywords/case-11-keywords"
import { detectAndRespond as detectAndRespondCase12 } from "@/data/case-keywords/case-12-keywords"
import { detectAndRespond as detectAndRespondCase13 } from "@/data/case-keywords/case-13-keywords"
import { detectAndRespond as detectAndRespondCase14 } from "@/data/case-keywords/case-14-keywords"
import { detectAndRespond as detectAndRespondCase15 } from "@/data/case-keywords/case-15-keywords"
import { detectAndRespond as detectAndRespondCase16 } from "@/data/case-keywords/case-16-keywords"
import { detectAndRespond as detectAndRespondCase17 } from "@/data/case-keywords/case-17-keywords"
import { detectAndRespond as detectAndRespondCase18 } from "@/data/case-keywords/case-18-keywords"
import { detectAndRespond as detectAndRespondCase19 } from "@/data/case-keywords/case-19-keywords"
import { detectAndRespond as detectAndRespondCase20 } from "@/data/case-keywords/case-20-keywords"
import { detectAndRespond as detectAndRespondCase21 } from "@/data/case-keywords/case-21-keywords"
import { detectAndRespond as detectAndRespondCase22 } from "@/data/case-keywords/case-22-keywords"
import { detectAndRespond as detectAndRespondCase23 } from "@/data/case-keywords/case-23-keywords"

/* -------------------- Shared helpers -------------------- */
const join = (...k: string[]) => k.join("+")

const C2 = {
  name: [
    "name",
    "what+name",
    "what's+name",
    "who+you",
    "your+name",
    "tell+name",
    "may+i+know+name",
    "who+are+you",
    "introduce",
    "introduction",
    "identity",
  ],
  age: [
    "age",
    "your+age",
    "what+age",
    "how+old",
    "what's+age",
    "tell+age",
    "may+i+know+age",
    "years+old",
    "how+many+years",
    "current+age",
  ],
  marital: [
    "married",
    "marital+status",
    "single",
    "husband",
    "spouse",
    "your+marriage",
    "what+marital",
    "are+you+married",
    "marriage",
    "unmarried",
  ],
  occupation: [
    "occupation",
    "job",
    "work",
    "profession",
    "service",
    "what+do+you+do",
    "what+work",
    "what+is+your+job",
    "tell+job",
    "what+profession",
    "are+you+working",
    "where+you+work",
    "what+service",
    "your+occupation",
    "what+you+do+in+life",
  ],
  address: [
    "address",
    "house",
    "home",
    "where+live",
    "where+stay",
    "your+house",
    "residence",
    "location",
    "place",
    "where+from",
    "your+address",
    "living+place",
    "current+address",
    "home+address",
    "present+address",
  ],
  location: [
    "where+pain",
    "where+problem",
    "which+part+pain",
    "pain+area",
    "affected+part",
    "which+side",
    "complaint+location",
    "where+ache",
    "your+suffering",
    "which+place+hurt",
    "body+part+pain",
    "exact+pain+place",
    "where+trouble",
    "location+complaint",
    "site+pain",
  ],
  sensation: [
    "throbbing",
    "beating",
    "bursting",
    "pulsating",
    "hammering",
    "stabbing",
    "sharp+pain",
    "splitting",
    "headache+pain",
    "painful",
    "hurting",
    "pounding",
    "intense+headache",
    "ache+throbbing",
    "pressing",
  ],
  aggravation: [
    "when+worse",
    "worse",
    "worsen",
    "aggravation",
    "when+aggravation",
    "aggravated+with",
    "aggravates",
    "worse+with",
    "worsen+with",
    "triggers+pain",
    "pain+increases",
    "pain+worse",
    "hurts+more",
    "headache+worse",
    "pounding+increases",
    "throbbing+worse",
    "pain+aggravated",
    "gets+worse",
    "intense+headache",
    "pain+trigger",
  ],
  amelioration: [
    "when+good",
    "feel+good",
    "amelioration",
    "ameliorates",
    "ameliorates+with",
    "modalities",
    "relief",
    "eases",
    "improve",
    "lessen+pain",
    "headache+better",
    "relieved+with",
    "reduces+pain",
    "pain+eases",
    "pain+decreases",
    "rest",
    "quiet+place",
    "dark+room",
    "cold+compress",
    "calms+down",
  ],
  concomitant: [
    "any+other+complaint",
    "other+illness",
    "concomitant",
    "concomitant+complaint",
    "other+problem",
    "any+additional+symptom",
    "other+symptoms",
    "additional+complaint",
    "any+other+issue",
    "coexisting+problem",
    "associated+complaint",
    "also+suffer",
    "other+discomfort",
    "additional+symptom+present",
    "anything+else+wrong",
  ],
  chief: [
    "chief+complaint",
    "main+problem",
    "primary+issue",
    "main+complaint",
    "what+suffering",
    "problem",
    "complaint",
    "issue",
    "headache",
    "pain+head",
    "throbbing+headache",
    "forehead+pain",
    "temples+pain",
    "intense+headache",
    "worst+pain",
  ],
}

type C2Rule = { category: string; keywords: string[]; responses: string[] }

const CASE2_RULES: C2Rule[] = [
  {
    category: "name",
    keywords: C2.name,
    responses: [
      "My name is Rajesh Mishra, doctor.",
      "I'm Rajesh… you can call me that.",
      "Rajesh Mishra… yeah, that's me.",
    ],
  },
  {
    category: "age",
    keywords: C2.age,
    responses: ["I'm 34 years old now.", "Just 34, not that old I guess.", "Thirty-four, doctor."],
  },
  {
    category: "marital",
    keywords: C2.marital,
    responses: [
      "Yes, I'm married.",
      "I've got a wife and a small kid at home.",
      "Married… it's been around seven years now.",
    ],
  },
  {
    category: "occupation",
    keywords: C2.occupation,
    responses: [
      "I work as a site supervisor at a construction area.",
      "My job needs me to move around a lot, that's how I got hurt.",
      "I'm at a building site most of the day, managing workers.",
    ],
  },
  {
    category: "address",
    keywords: C2.address,
    responses: [
      "I stay near Vastrapur, Ahmedabad.",
      "My home is in the city area, doctor.",
      "I live close to the main market side.",
    ],
  },
  {
    category: "location",
    keywords: C2.location,
    responses: [
      "It's right here on my right knee, swollen and sore.",
      "The bruise is mainly on the knee, feels hard to move.",
      "It's all on the right side, doctor.",
    ],
  },
  {
    category: "sensation",
    keywords: C2.sensation,
    responses: [
      "It feels bruised and sore, like someone punched it deep.",
      "Pain is sharp when I move, dull when I sit still.",
      "There's a kind of stinging and numbness mixed together.",
    ],
  },
  {
    category: "aggravation",
    keywords: C2.aggravation,
    responses: [
      "It gets worse by warmth or touching it.",
      "If I cover it or apply heat, pain increases.",
      "The more I walk or press, the worse it feels.",
    ],
  },
  {
    category: "amelioration",
    keywords: C2.amelioration,
    responses: [
      "Cold things calm it down a bit.",
      "When I keep it open to cool air, it feels easier.",
      "Putting an ice cloth gives quick relief, doctor.",
    ],
  },
  {
    category: "concomitant",
    keywords: C2.concomitant,
    responses: [
      "Sometimes the area feels numb and stiff.",
      "The bruise looks bluish with coldness around it.",
      "Slight chill runs through my leg after pain starts.",
    ],
  },
  {
    category: "chief",
    keywords: C2.chief,
    responses: [
      "I got this bruise on my right knee, and it just won't settle.",
      "The knee still hurts even after all these days.",
      "I fell once, and since then, the pain and stiffness won't go.",
    ],
  },
]

// Calm Ledum fallback (stay on-topic; no unrelated replies)
const CASE2_FALLBACK = "Can you please ask that in another way?"

type Chat = { role: "user" | "patient"; text: string; ts: number }

function pickCase2Response(rule: C2Rule, usedIdx: Record<string, number | undefined>) {
  const prev = usedIdx[rule.category]
  let idx = Math.floor(Math.random() * rule.responses.length)
  if (rule.responses.length > 1 && idx === prev) {
    idx = (idx + 1) % rule.responses.length
  }
  usedIdx[rule.category] = idx
  return rule.responses[idx]
}

export default function InteractionPage() {
  const router = useRouter()
  const params = useParams()
  const id = Number(params?.id)
  const [activeCase, setActiveCase] = useState<CaseDefinition | null>(null)
  const [patientDialogue, setPatientDialogue] = useState("")
  const [interactions, setInteractions] = useState<Chat[]>([]) // now stores full chat log
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [progress, setProgress] = useState(0)
  const [cycleMap, setCycleMap] = useState<Record<string, number>>({})
  const [c2UsedIdx, setC2UsedIdx] = useState<Record<string, number | undefined>>({}) // Case 2 anti-repeat

  // Load case data for 4–20 and handle lock gate. Case 1/2/3 are free.
  useEffect(() => {
    let mounted = true
    async function run() {
      if (id >= 5 && id <= 20) {
        const loaded = await loadCaseByNumber(id)
        if (!mounted) return
        setActiveCase(loaded)
        setPatientDialogue(loaded?.intro || "")
      } else if (id === 1) {
        setPatientDialogue("Doctor… my head is pounding. Please ask your questions clearly.")
      } else if (id === 2) {
        setPatientDialogue("Hello doctor… my right knee is bruised. Ask what you need; I'll answer calmly.")
      } else if (id === 3) {
        setPatientDialogue(
          "Doctor, I have these red, itchy patches on my neck since 2 weeks. The itching is very bad, especially at night, and it burns too.",
        )
      } else if (id === 4) {
        setPatientDialogue("Doctor, my nose suddenly started bleeding a few minutes ago. I'm feeling a bit weak now.")
      } else if (id === 5) {
        setPatientDialogue("Please ask more clearly.")
      } else if (id === 6) {
        setPatientDialogue("Doctor, I have a sore throat. Ask what you need; I'll answer calmly.")
      } else if (id === 9) {
        setPatientDialogue("")
      } else if (id === 10) {
        setPatientDialogue("Please describe the fracture.")
      } else if (id === 11) {
        setPatientDialogue("Hello doctor")
      } else if (id === 12) {
        setPatientDialogue("Doctor, my neck is swollen and tender.")
      } else if (id === 13) {
        setPatientDialogue("Doctor, I have a burn wound on my hand.")
      } else if (id === 14) {
        setPatientDialogue("Hello doctor.. This painful swelling in my beard area is unbearable.")
      } else if (id === 15) {
        setPatientDialogue("Doctor, I have been coughing for a week now and it's getting worse.")
      } else if (id === 16) {
        setPatientDialogue("Doctor, my periods are very irregular… (sad face) sometimes they stop for months. I have PCOD and I'm very emotional.")
      } else if (id === 17) {
        setPatientDialogue("Doctor, I'm losing a lot of hair and I'm very worried about it.")
      } else if (id === 18) {
        setPatientDialogue("My main complaint is chronic headache doctor… (serious) it comes again and again.")
      } else if (id === 19) {
        setPatientDialogue("My main complaint is repeated face pimples doctor… red and painful.")
      } else if (id === 20) {
        setPatientDialogue("My main complaint is dark painful toes doctor… (concerned) skin looks dry and blackish.")
      } else if (id === 21) {
        setPatientDialogue("My main complaint is irregular and delayed periods doctor… (slightly teary) sometimes they stop for 2–3 months…")
      } else if (id === 22) {
        setPatientDialogue("My main complaint is this round swelling on my wrist doctor… (concerned) it feels hard.")
      } else if (id === 23) {
        setPatientDialogue("My main complaint is severe pain in the heel doctor… especially when I walk.")
      }
    }
    run()
    return () => {
      mounted = false
    }
  }, [id, router])

  function case1Respond(text: string): string {
    const result = detectAndRespondCase1(text)
    return result.response
  }

  function case2Respond(text: string): string {
    const result = detectAndRespondCase2(text)
    return result.response
  }

  function case3Respond(text: string): string {
    const result = detectAndRespondCase3(text)
    return result.response
  }

  function case4Respond(q: string): string | null {
    const result = detectAndRespondCase4(q)
    return result.response
  }

  function case5Respond(q: string): string | null {
    const result = detectAndRespondCase5(q)
    return result.response
  }

  function case6Respond(q: string): string | null {
    const result = detectAndRespondCase6(q)
    return result.response
  }

  function case9Respond(q: string): string | null {
    const result = detectAndRespondCase9(q)
    return result.response
  }

  function case10Respond(q: string): string | null {
    return detectAndRespondCase10(q)
  }

  function case11Respond(question: string): string {
    return detectAndRespondCase11(question)
  }

  function case12Respond(question: string): string {
    return detectAndRespondCase12(question)
  }

  function case13Respond(question: string): string {
    return detectAndRespondCase13(question)
  }

  function case14Respond(question: string): string {
    return detectAndRespondCase14(question)
  }

  function case15Respond(question: string): string {
    return detectAndRespondCase15(question)
  }

  function case16Respond(question: string): string {
    return detectAndRespondCase16(question)
  }

  function case17Respond(question: string): string {
    return detectAndRespondCase17(question)
  }

  function case18Respond(question: string): string {
    return detectAndRespondCase18(question)
  }

  function case19Respond(question: string): string {
    return detectAndRespondCase19(question)
  }

  function case20Respond(question: string): string {
    return detectAndRespondCase20(question)
  }

  function case21Respond(question: string): string {
    return detectAndRespondCase21(question)
  }

  function case22Respond(question: string): string {
    return detectAndRespondCase22(question)
  }

  function case23Respond(question: string): string {
    return detectAndRespondCase23(question)
  }

  function stdRespond(text: string): string | null {
    // CASE 17 SPECIAL HANDLING - Strict keyword detection
    if (id === 17) {
      const case17Match = case17Respond(text)
      if (case17Match) {
        return case17Match
      }
      return null
    }

    // CASE 18 SPECIAL HANDLING - Strict keyword detection
    if (id === 18) {
      const case18Match = case18Respond(text)
      if (case18Match) {
        return case18Match
      }
      return null
    }

    // CASE 19 SPECIAL HANDLING - Strict keyword detection
    if (id === 19) {
      const case19Match = case19Respond(text)
      if (case19Match) {
        return case19Match
      }
      return null
    }

    // CASE 20 SPECIAL HANDLING - Strict keyword detection
    if (id === 20) {
      const case20Match = case20Respond(text)
      if (case20Match) {
        return case20Match
      }
      return null
    }

    // CASE 21 SPECIAL HANDLING - Strict keyword detection
    if (id === 21) {
      const case21Match = case21Respond(text)
      if (case21Match) {
        return case21Match
      }
      return null
    }

    // CASE 22 SPECIAL HANDLING - Strict keyword detection
    if (id === 22) {
      const case22Match = case22Respond(text)
      if (case22Match) {
        return case22Match
      }
      return null
    }

    // CASE 23 SPECIAL HANDLING - Strict keyword detection
    if (id === 23) {
      const case23Match = case23Respond(text)
      if (case23Match) {
        return case23Match
      }
      return null
    }

    // Standard response for other cases
    const result = detectKeywords(text)

    // Log detection for analytics
    logDetection(id, text, result, "")

    const rules = INTERACTION_MAP[id]
    if (!rules) return null

    // Try to match using detected keywords
    for (const match of result.matches) {
      for (const rule of rules) {
        if (rule.keywords.some((k) => matchesKeyword(k, normalize(text)))) {
          const response = pick(rule.responses)
          logDetection(id, text, result, response)
          return response
        }
      }
    }

    return null
  }

  function ask() {
    if (!input.trim() || isTyping) return
    const q = input.trim()
    setInteractions((arr) => [...arr, { role: "user", text: q, ts: Date.now() }]) // push user bubble
    setIsTyping(true)
    setTimeout(() => {
      let res: string | null = null
      if (id === 1) res = case1Respond(q)
      else if (id === 2) res = case2Respond(q)
      else if (id === 3) res = case3Respond(q)
      else if (id === 4) res = case4Respond(q)
      else if (id === 5) res = case5Respond(q)
      else if (id === 6) res = case6Respond(q)
      else if (id === 9) res = case9Respond(q)
      else if (id === 10) res = case10Respond(q)
      else if (id === 11) res = case11Respond(q)
      else if (id === 12) res = case12Respond(q)
      else if (id === 13) res = case13Respond(q)
      else if (id === 14) res = case14Respond(q)
      else if (id === 15) res = case15Respond(q)
      else if (id === 16) res = case16Respond(q)
      else if (id === 17) res = case17Respond(q)
      else if (id === 18) res = case18Respond(q)
      else if (id === 19) res = case19Respond(q)
      else if (id === 20) res = case20Respond(q)
      else if (id === 21) res = case21Respond(q)
      else if (id === 22) res = case22Respond(q)
      else if (id === 23) res = case23Respond(q)
      else if (id >= 7 && id <= 23) res = stdRespond(q)

      if (!res) {
        res = "I'm not sure how to answer that… could you ask differently about my symptoms?"
      }
      setPatientDialogue(res)
      setInteractions((arr) => [...arr, { role: "patient", text: res!, ts: Date.now() }]) // push patient bubble
      setProgress((p) => Math.min(100, p + 10))
      setInput("")
      setIsTyping(false)
    }, 900) // small human-like delay
  }

  const caseTitle =
    id === 1
      ? "Case 1 – Maria Johnson"
      : id === 2
        ? "Case 2 – Rajesh Mishra"
        : id === 3
          ? "Case 3 – Neha Shah"
          : id === 4
            ? "Case 4 – Ramesh Patel"
            : id === 5
              ? "Case 5 – Anjali Mehta"
              : id === 6
                ? "Case 6 – Ramesh Patel"
                : id === 9
                  ? "Case 9 – Persistent Cough"
                  : id === 10
                    ? "Case 10 – Fracture X-ray"
                    : id === 11
                      ? "Case 11 – Ramesh Solanki"
                      : id === 12
                        ? "Case 12 – Rajshree Sharma"
                        : id === 13
                          ? "Case 13 – Anil Sharma"
                          : id === 14
                            ? "Case 14 – Vimal Pansuriya"
                            : id === 15
                              ? "Case 15 – Arun Kumar"
                            : id === 16
                              ? "Case 16 – Ruhi Sharma"
                              : id === 17
                                ? "Case 17 – Keyli"
                                : id === 18
                                  ? "Case 18 – Arjun"
                              : id === 19
                                ? "Case 19 – Diya"
                                : id === 20
                                  ? "Case 20 – Ramesh"
                                  : id === 21
                                    ? "Case 21 – Chandni Shah"
                                    : id === 22
                                      ? "Case 22 – Suresh"
                                      : id === 23
                                        ? "Case 23 – Mahesh"
                                        : `Case ${id} – ${activeCase?.patientName ?? "Virtual Patient"}`

  const CaseImage = () => {
    const src =
      id === 1
        ? "/images/cases/case-01.png"
        : id === 2
          ? "/images/img-20251015-wa0003.jpg"
          : id === 3
            ? "/images/cases/case-03-skin.jpg"
            : id === 4
              ? "/images/cases/case-04-nosebleed.png"
              : id === 5
                ? "/images/cases/case-05-depression.png"
                : id === 6
                  ? "/images/cases/case-06-throat.jpg"
                  : id === 9
                    ? "/images/cases/case-09-cough.jpg"
                    : id === 10
                      ? "/images/cases/case-10-fracture-xray.jpg"
                      : id === 11
                        ? "/images/cases/case-11-eye-hemorrhage.jpg"
                        : id === 12
                          ? "/images/cases/case-12-neck-swelling.jpg"
                          : id === 13
                            ? "/images/cases/case-13-burn.jpg"
                            : id === 14
                              ? "/images/cases/case-14-rash.jpg"
                              : id === 15
                                ? "/images/cases/case-15-cough.jpg"
                                : id === 16
                                  ? "/images/cases/case-16-abdominal-pain.jpg"
                                  : id === 17
                                    ? "/images/cases/case-17-hair-loss.jpg"
                                      : id === 18
                                        ? "/images/cases/case-18.jpg"
                                      : id === 19
                                        ? "/images/cases/case-19.jpg"
                                      : id === 20
                                        ? "/images/cases/case-20.jpg"
                                        : id === 21
                                          ? "/images/cases/case-21.jpg"
                                          : id === 22
                                            ? "/images/cases/case-22.jpg"
                                            : id === 23
                                              ? "/images/cases/case-23.jpg"
                                              : activeCase?.image || "/virtual-patient.jpg"
    return (
      <img
        src={src || "/placeholder.svg?height=160&width=160&query=virtual%20patient"}
        alt="Virtual patient"
        className="w-40 h-40 object-cover rounded-2xl border-4 border-yellow-200 shadow-lg"
      />
    )
  }

  const [endRef, setEndRef] = useState<HTMLDivElement | null>(null)
  useEffect(() => {
    endRef?.scrollIntoView({ behavior: "smooth" })
  }, [interactions, endRef, isTyping])

  return (
    <main className="min-h-screen relative p-4 md:p-6">
      <HomeoFluidBg />
      <HomeoBackdrop theme="mint" className="absolute inset-0 -z-10" />
      <div className="max-w-5xl mx-auto space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-700">{caseTitle}</h1>
        </div>
        <p className="text-sm text-gray-600">Virtual Patient Interaction</p>
        {id === 10 && <p className="text-sm text-amber-600 font-semibold">X-ray of fracture</p>}
        {id === 11 && <p className="text-sm text-amber-600 font-semibold">Subconjunctival hemorrhage</p>}
        {id === 12 && <p className="text-sm text-amber-600 font-semibold">Neck swelling</p>}
        {id === 13 && <p className="text-sm text-amber-600 font-semibold">Burn wound</p>}
        {id === 14 && <p className="text-sm text-amber-600 font-semibold">Neck rash inflammation</p>}
        {id === 15 && <p className="text-sm text-amber-600 font-semibold">Chronic dry cough - BRYONIA ALBA</p>}
        {id === 16 && <p className="text-sm text-amber-600 font-semibold">Abdominal pain</p>}
        {id === 17 && <p className="text-sm text-amber-600 font-semibold">Hair loss concern</p>}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left: patient summary card */}
          <Card className="lg:col-span-2 bg-white/90 rounded-3xl shadow-xl">
            <CardContent className="p-6 space-y-4">
              <CaseImage />
              <div className="space-y-1">
                <p className="text-sm text-gray-700">
                  Ask freely about name, age, marital status, occupation, address, chief complaint, location, sensation,
                  aggravation, relief, and associated symptoms.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Right: chat */}
          <Card className="lg:col-span-3 bg-white/90 rounded-3xl shadow-xl">
            <CardContent className="p-6 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-amber-600">Interaction Progress</span>
                  <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-3 rounded-full" />
              </div>

              <Card className="border-0 bg-white/80 rounded-2xl shadow-sm max-h-[420px] overflow-y-auto">
                <CardContent className="p-5 space-y-4">
                  {/* initial system/patient line */}
                  {!interactions.length && (
                    <div className="flex items-start gap-3 animate-[fadeIn_300ms_ease-out]">
                      <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full grid place-items-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-amber-50 text-gray-900">
                        <p className="text-sm">
                          {activeCase?.intro ||
                            (id === 1
                              ? "Doctor, I have a severe headache behind my eyes, pounding sensation, throbbing pain."
                              : id === 2
                                ? "I have a bruise on my knee from a fall."
                                : id === 3
                                  ? "Doctor, I have a persistent burning sensation in my stomach, acidity problem."
                                  : id === 4
                                    ? "Doctor, my nose suddenly started bleeding a few minutes ago. I'm feeling a bit weak now."
                                    : id === 5
                                      ? "Please ask more clearly."
                                      : id === 6
                                        ? "Doctor, I have a sore throat. Ask what you need; I'll answer calmly."
                                        : id === 9
                                          ? "Please ask about my symptoms."
                                          : id === 10
                                            ? "Please describe the fracture."
                                            : id === 11
                                              ? "Hello doctor"
                                              : id === 12
                                                ? "Hello doctor… (slow, reserved) please ask gently, this swelling near my ear worries me a lot."
                                                : id === 13
                                                  ? "Hello doctor… I have a burn wound on my hand."
                                                  : id === 14
                                                    ? "Hello doctor"
                                                    : "Please ask more clearly.")}
                        </p>
                      </div>
                    </div>
                  )}
                  {interactions.map((m, i) =>
                    m.role === "user" ? (
                      <div key={m.ts + "-u"} className="flex justify-end animate-[fadeInUp_220ms_ease-out]">
                        <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-indigo-600 text-white shadow">
                          <p className="text-sm">{m.text}</p>
                        </div>
                      </div>
                    ) : (
                      <div key={m.ts + "-p"} className="flex items-start gap-3 animate-[fadeIn_260ms_ease-out]">
                        <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full grid place-items-center">
                          <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-amber-50 text-gray-900">
                          <p className="text-sm leading-relaxed">{m.text}</p>
                        </div>
                      </div>
                    ),
                  )}
                  {isTyping && (
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full grid place-items-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-amber-50 text-gray-900">
                        <span className="inline-block w-2 h-2 bg-amber-600 rounded-full animate-bounce mr-1" />
                        <span className="inline-block w-2 h-2 bg-amber-600 rounded-full animate-bounce mr-1 [animation-delay:120ms]" />
                        <span className="inline-block w-2 h-2 bg-amber-600 rounded-full animate-bounce [animation-delay:240ms]" />
                      </div>
                    </div>
                  )}
                  <div ref={setEndRef} />
                </CardContent>
              </Card>

              <div>
                <Label className="text-lg font-semibold text-sky-700 mb-2 block">Ask Your Question</Label>
                <div className="flex gap-3">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && ask()}
                    placeholder={
                      id === 1
                        ? "e.g. location, sensation, worse/better, appetite, sleep, mental…"
                        : id === 2
                          ? "e.g. name, age, married, job, address, where pain, stabbing, worse, cold helps…"
                          : id === 3
                            ? "e.g. name, age, location, itching worse at night, sweating, burning…"
                            : id === 4
                              ? "e.g. name, age, when started, which nostril, cause, weakness, history, summer…"
                              : id === 5
                                ? "e.g. name, age, occupation, chief, location, sensation, aggravation, amelioration…"
                                : id === 6
                                  ? "e.g. name, age, occupation, chief, location, sensation, aggravation, amelioration…"
                                  : id === 9
                                    ? "e.g. name, age, occupation, chief, location, sensation, aggravation, amelioration…"
                                    : id === 10
                                      ? "e.g. name, age, occupation, chief, location, sensation, aggravation, amelioration…"
                                      : id === 11
                                        ? "e.g. name, age, occupation, chief, location, sensation, aggravation, amelioration…"
                                        : id === 12
                                          ? "e.g. name, age, occupation, chief, location, sensation, aggravation, amelioration…"
                                          : id === 13
                                            ? "e.g. name, age, occupation, chief, location, sensation, aggravation, amelioration…"
                                            : "e.g. name, age, occupation, chief, location, sensation, aggravation, amelioration…"
                    }
                    className="flex-1 rounded-xl"
                  />
                  <Button
                    onClick={ask}
                    className="px-6 rounded-xl text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500"
                  >
                    Ask
                  </Button>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <Button onClick={() => router.push("/cases")} variant="outline" className="rounded-full">
                  <ArrowLeft className="mr-2 w-4 h-4" /> Back to Cases
                </Button>
                <Button
                  onClick={() => router.push(`/cases/${id}/vitals`)}
                  className="rounded-full text-white bg-gradient-to-r from-teal-500 to-sky-500"
                >
                  Continue <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

function matchesKeyword(keyword: string, clean: string) {
  if (keyword.includes("+")) {
    const t = keyword.split("+").map((x) => x.trim())
    return t.every((tok) => clean.includes(tok))
  }
  return clean.includes(keyword)
}
