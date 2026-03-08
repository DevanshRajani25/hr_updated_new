import type { CaseDefinition } from "@/types/case"

/**
 * CASE 16 - RUHI SHARMA (PULSATILLA NIGRICANS)
 * Polycystic Ovarian Disease (PCOD)
 * Patient: 23 yrs, Female, Student, Surat
 * Nature: Mild, emotional, tearful, seeks consolation
 * Remedy: PULSATILLA NIGRICANS
 *
 * SYSTEM ENGINE RULES:
 * 1. System always behaves like patient Ruhi - never as teacher or system
 * 2. Tone = mild, soft, emotional, reassurance-seeking
 * 3. Responses ONLY from mapped keywords - NO generated responses
 * 4. Do NOT modify response text or keywords
 * 5. Keyword detection flexible but must match keyword words exactly
 * 6. User can ask ANY question in ANY order - NO fixed sequence
 * 7. System NEVER says "I don't know" - ALWAYS provides response
 * 8. If multiple keywords match → choose most specific match
 * 9. Return only ONE response per reply
 * 10. Casual greeting rules apply FIRST (before all other logic)
 */

const def: CaseDefinition = {
  caseNumber: 16,
  patientName: "Ruhi Sharma",
  age: 23,
  intro: "Doctor, my periods are very irregular… (sad face) sometimes they stop for months. I have PCOD and I'm very emotional.",
  image: "/images/cases/case-16-abdominal-pain.jpg",
  defaultResponse: "Please ask doctor… (soft voice, gentle tone)",
  keywords: [
    // 🔹 NAME
    {
      keywords: ["name"],
      response: "My name is Ruhi doctor… (soft voice, slight smile) I feel shy talking about my problem.",
    },
    // 🔹 AGE
    {
      keywords: ["age", "how", "old"],
      response: "I'm 23 years old doctor… (gentle tone)",
    },
    // 🔹 OCCUPATION
    {
      keywords: ["occupation", "what", "do", "doing"],
      response: "I'm a student doctor… (worried face) studies stress me a lot.",
    },
    // 🔹 MARITAL STATUS
    {
      keywords: ["marriage", "married", "single"],
      response: "No doctor, I'm not married… (shy smile).",
    },
    // 🔹 ADDRESS
    {
      keywords: ["address", "where", "live", "living"],
      response: "I live in Surat doctor… (soft tone).",
    },
    // 🔹 CHIEF COMPLAINT
    {
      keywords: ["main", "complaint", "chief"],
      response: "My periods are very irregular doctor… (sad face) sometimes they stop for months.",
    },
    // 🔹 LOCATION
    {
      keywords: ["where", "pain", "which", "side", "location"],
      response: "Pain is in lower abdomen doctor… (places hand gently).",
    },
    // 🔹 SENSATION
    {
      keywords: ["sensation", "how", "feel", "sharp"],
      response: "It feels dull and heavy doctor… (mild discomfort on face).",
    },
    // 🔹 AGGRAVATION
    {
      keywords: ["aggravation", "worse", "worsen", "when", "increase", "modality"],
      response: "Stress makes it worse doctor… (anxious look).",
    },
    // 🔹 AMELIORATION
    {
      keywords: ["amelioration", "relief", "better", "good"],
      response: "I feel better when someone talks kindly doctor… (eyes soften).",
    },
    // 🔹 CONCOMITANT
    {
      keywords: ["concomitant", "other", "complaint", "symptom"],
      response: "I gain weight easily doctor… (worried expression).",
    },
    // 🔹 ONSET
    {
      keywords: ["onset", "when", "start", "started", "begins"],
      response: "It started gradually doctor… (thinking) about 2 years back.",
    },
    // 🔹 DURATION
    {
      keywords: ["duration", "how", "long", "days", "time"],
      response: "Periods delay for 2–3 months doctor… (sad tone).",
    },
    // 🔹 PROGRESSION
    {
      keywords: ["progression", "increase", "progressive"],
      response: "Yes doctor, it is increasing… (concerned face).",
    },
    // 🔹 HISTORY OF PRESENT ILLNESS
    {
      keywords: ["history", "past"],
      response: "No major illness before doctor… (soft reply) PCOD is my main issue.",
    },
    // 🔹 FAMILY HISTORY
    {
      keywords: ["family", "parents", "partner"],
      response: "My mother had similar cycle problem doctor… (gentle voice).",
    },
    // 🔹 APPETITE
    {
      keywords: ["appetite", "hunger", "eat", "eating", "meal"],
      response: "Appetite keeps changing doctor… (uncertain expression).",
    },
    // 🔹 THIRST
    {
      keywords: ["thirst", "thirsty", "water", "drink"],
      response: "I'm not very thirsty doctor… (soft smile).",
    },
    // 🔹 TONGUE
    {
      keywords: ["tongue"],
      response: "Tongue looks normal doctor… (neutral face).",
    },
    // 🔹 URINE
    {
      keywords: ["urine", "urinate"],
      response: "Urine is normal doctor… (calm reply).",
    },
    // 🔹 STOOL
    {
      keywords: ["stool", "bowel", "constipation"],
      response: "Sometimes constipated doctor… (uneasy smile).",
    },
    // 🔹 DESIRE
    {
      keywords: ["desire", "craving", "like"],
      response: "I crave sweets doctor… (soft smile).",
    },
    // 🔹 AVERSION
    {
      keywords: ["aversion", "dislike", "don't"],
      response: "I don't like oily food doctor… (gentle refusal).",
    },
    // 🔹 SWEAT
    {
      keywords: ["sweat", "perspiration"],
      response: "Normal sweating doctor… (neutral).",
    },
    // 🔹 SLEEP
    {
      keywords: ["sleep", "sleeping", "problem"],
      response: "Sleep is disturbed doctor… (tired eyes) I keep thinking.",
    },
    // 🔹 DREAMS
    {
      keywords: ["dream", "dreams", "dreaming"],
      response: "I get emotional dreams doctor… (soft voice).",
    },
    // 🔹 THERMALS
    {
      keywords: ["thermal", "cold", "heat", "fever", "chilly"],
      response: "I feel better in open air doctor… (relaxed).",
    },
    // 🔹 MENTAL GENERALS
    {
      keywords: ["mental", "anger", "irritable", "anxiety", "mood", "mind", "fear", "sad"],
      response: "I become very emotional doctor… (tearful eyes) small things affect me.",
    },
  ],
  vitals: {
    stats: [
      { label: "BP", value: "110/70 mmHg" },
      { label: "Pulse", value: "76/min" },
      { label: "Temperature", value: "98.2°F" },
      { label: "Respiration", value: "18/min" },
      { label: "General Condition", value: "Mild, emotional, seeks reassurance, tearful eyes" },
      { label: "Abdominal Exam", value: "Mild pelvic tenderness, hormonal imbalance signs" },
    ],
  },
  diagnosis: {
    provisional: "Polycystic Ovarian Disease (PCOD)",
    correct: ["pulsatilla"],
    correctText: "✅ Correct. PULSATILLA NIGRICANS is the indicated remedy.",
    wrongText: "❌ Incorrect. The correct remedy is PULSATILLA NIGRICANS - irregular delayed menses, mild emotional nature, better by consolation and fresh air, thirstless, hormonal imbalance.",
    remedyInfo:
      "PULSATILLA NIGRICANS - Classic remedy for irregular delayed menses, mild emotional tearful nature, better by consolation and fresh air, thirstless. Perfect match for PCOD with emotional constitution.",
  },
  quiz: [
    {
      question: "Mental nature of patient:",
      options: ["Aggressive", "Reserved", "Emotional", "Fearful"],
      correctIndex: 2,
    },
    {
      question: "Thirst in this case:",
      options: ["Excessive", "Normal", "Thirstless", "Increased at night"],
      correctIndex: 2,
    },
    {
      question: "Best modality:",
      options: ["Warm room", "Rest alone", "Consolation", "Pressure"],
      correctIndex: 2,
    },
    {
      question: "Menstrual pattern:",
      options: ["Regular", "Profuse", "Irregular delayed", "Painful scanty"],
      correctIndex: 2,
    },
    {
      question: "Best indicated remedy:",
      options: ["Sepia", "Nat mur", "Pulsatilla", "Calcarea"],
      correctIndex: 2,
    },
  ],
}

export default def
