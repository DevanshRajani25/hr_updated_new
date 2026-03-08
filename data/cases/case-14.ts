import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 14,
  patientName: "Vimal pansuriya",
  age: 32,
  intro: "Hello doctor.. This painful swelling in my beard area is unbearable.",
  image: "/images/cases/case-14-rash.jpg",
  defaultResponse: "Please ask more clearly.",
  vitals: {
    stats: [
      { label: "BP", value: "128/82 mmHg" },
      { label: "Pulse", value: "88/min" },
      { label: "Temp", value: "100.2°F" },
      { label: "RR", value: "20/min" },
    ],
  },
  diagnosis: {
    provisional: "Acute suppurative folliculitis / abscess (post-shaving)",
    correct: ["hepar sulph", "hepar sulphuris", "hepar", "sulphur hepar"],
    correctText:
      "✅ Correct diagnosis! This case shows acute suppurative folliculitis with extreme tenderness, splinter-like pain, and worse from cold – classic HEPAR SULPHURIS picture. Warmth provides relief.",
    wrongText:
      "❌ Incorrect remedy selection. This case features extreme sensitivity to touch, splinter-like pain, suppurative tendency, and better from warmth. Re-analyze the characteristic pain and modalities.",
    remedyInfo:
      "HEPAR SULPHURIS – Extreme tenderness, sharp splinter-like pain, suppurative inflammation, worse from cold/touch, better from warmth, irritable mental state.",
  },
  quiz: [
    {
      question: "Most striking indication here is:",
      options: ["Hard induration", "Painless swelling", "Extreme tenderness", "Dry skin"],
      correctIndex: 2,
    },
    {
      question: "Pain described as:",
      options: ["Dull", "Burning", "Splinter-like", "Numb"],
      correctIndex: 2,
    },
    {
      question: "Aggravation occurs from:",
      options: ["Warmth", "Rest", "Cold", "Pressure"],
      correctIndex: 2,
    },
    {
      question: "Mental state of patient:",
      options: ["Calm", "Indifferent", "Irritable", "Cheerful"],
      correctIndex: 2,
    },
    {
      question: "Best indicated remedy:",
      options: ["Belladonna", "Silicea", "Hepar sulph", "Conium"],
      correctIndex: 2,
    },
  ],
}

export default def
