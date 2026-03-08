import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 13,
  patientName: "Rakesh Verma",
  age: 32,
  intro: "Hello doctor… please look at my hand carefully, this cut is deep and burning, I'm worried about infection.",
  image: "/images/cases/case-13-burn.jpg",
  defaultResponse: "Please ask more clearly.",
  keywords: [
    {
      keywords: ["pain", "burning"],
      response: "There is burning, raw and sore pain doctor.",
    },
    {
      keywords: ["injury", "wound", "cut"],
      response: "My main complaint is a deep cut on my hand with active bleeding and burning pain.",
    },
  ],
  vitals: {
    stats: [
      { label: "BP", value: "124/78 mmHg" },
      { label: "Pulse", value: "86/min" },
      { label: "Temperature", value: "Normal" },
      { label: "General Condition", value: "Anxious, alert, stable" },
    ],
  },
  diagnosis: {
    provisional: "Acute traumatic lacerated wound of hand",
    correct: ["calendula", "calendula officinalis"],
    correctText:
      "✅ Correct diagnosis!\nThe case indicates CALENDULA OFFICINALIS.\nClean cut wound with raw, bleeding surface, fear of infection, and promotes tissue repair — classic Calendula picture.",
    wrongText:
      "❌ Incorrect remedy selection.\nThis case shows a clean cut wound with rapid tissue repair needs.\nRe-analyze the trauma type and wound characteristics.",
    remedyInfo: "Calendula Officinalis – for clean cuts, rapid wound healing, and prevention of infection.",
  },
  quiz: [
    {
      question: "Most characteristic indication in this case:",
      options: ["Suppuration", "Hard swelling", "Clean cut wound", "Neuralgia"],
      correctIndex: 2,
    },
    {
      question: "Nature of the case:",
      options: ["Chronic", "Functional", "Traumatic", "Psychogenic"],
      correctIndex: 2,
    },
    {
      question: "Dominant sensation:",
      options: ["Itching", "Burning & raw", "Throbbing", "Numbness"],
      correctIndex: 1,
    },
    {
      question: "Mental state shown:",
      options: ["Anger", "Indifference", "Anxiety", "Excitement"],
      correctIndex: 2,
    },
    {
      question: "Correct remedy:",
      options: ["Arnica", "Hypericum", "Calendula", "Silicea"],
      correctIndex: 2,
    },
  ],
}

export default def
