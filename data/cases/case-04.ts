import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 4,
  patientName: "Ramesh Patel",
  age: 27,
  intro: "Doctor, my nose suddenly started bleeding a few minutes ago.",
  image: "/images/cases/case-04.jpg",
  defaultResponse: "I'm not sure… please ask more clearly, Doctor.",
  keywords: [
    {
      keywords: ["when", "start", "started", "since"],
      response: "It suddenly started just a few minutes ago while I was sitting.",
    },
    { keywords: ["which side", "side", "nostril"], response: "Blood is mostly coming from my right nostril." },
    { keywords: ["cause", "injury", "hurt", "trauma"], response: "No, I didn’t get hurt. It just started on its own." },
    { keywords: ["how is the blood", "color", "bright"], response: "It’s bright red and fresh." },
    {
      keywords: ["weak", "weakness", "dizzy", "dizziness"],
      response: "Yes, I’m feeling a little weak after the bleeding.",
    },
    { keywords: ["headache", "fever"], response: "No headache or fever right now." },
    {
      keywords: ["history", "past", "summer", "hot"],
      response: "I get nosebleeds often in summer when the weather is hot.",
    },
  ],
  vitals: {
    stats: [
      { label: "Pulse", value: "90/min" },
      { label: "BP", value: "110/70 mmHg" },
      { label: "Temperature", value: "Normal" },
      { label: "Respiration", value: "18/min" },
    ],
  },
  diagnosis: {
    provisional: "Epistaxis (Nose bleeding)",
    correct: ["ferrumphos", "ferrum phosphoricum", "ferrumphos", "ferrum-phos"],
    correctText: "✔️ Correct remedy.",
    wrongText: "✖️ Try again.",
    remedyInfo:
      "Ferrum phosphoricum: bright red bleeding; often without injury; suited to young/anemic/weak patients; acute complaints with weakness.",
  },
  quiz: [
    {
      question: "What is the patient’s main complaint?",
      options: ["Headache", "Epistaxis", "Fever"],
      correctIndex: 1,
    },
    {
      question: "Which nostril was bleeding?",
      options: ["Left", "Right", "Both"],
      correctIndex: 1,
    },
    {
      question: "Most suitable remedy in this case?",
      options: ["Ferrum phos", "Belladonna", "Arnica"],
      correctIndex: 0,
    },
  ],
}

export default def
