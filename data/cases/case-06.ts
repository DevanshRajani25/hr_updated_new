import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 6,
  patientName: "Ramesh Patel",
  age: 22,
  intro: "Doctor, my throat hurts so much… it’s red and swollen. I can hardly swallow.",
  image: "/images/cases/case-06.jpg",
  defaultResponse: "Please ask about my throat, fever, drinks or onset…",
  keywords: [
    {
      keywords: ["throat", "pain", "swallow", "swallowing", "food"],
      response: "It feels like knives when I try to swallow, especially food.",
    },
    { keywords: ["water", "drink"], response: "Even drinking water makes it burn." },
    { keywords: ["right", "side"], response: "It’s more painful on the right side." },
    { keywords: ["fever", "heat", "hot"], response: "I feel feverish, my body is burning." },
    { keywords: ["cold", "cold water"], response: "I can’t bear to drink cold water, it worsens the pain." },
    { keywords: ["warm", "warm drink"], response: "Warm drinks make me feel a little better." },
    {
      keywords: ["mood", "weak", "irritated", "talk"],
      response: "I feel so weak and sad, don’t feel like talking… I get irritated quickly.",
    },
    {
      keywords: ["onset", "duration", "yesterday", "since"],
      response: "It started suddenly since yesterday evening and kept increasing overnight.",
    },
    {
      keywords: ["tonsil", "tonsils", "patch", "patches", "look"],
      response: "Yes doctor, my tonsils look red and swollen with white patches.",
    },
  ],
  vitals: {
    stats: [
      { label: "Temp", value: "101°F" },
      { label: "Pulse", value: "92/min" },
      { label: "BP", value: "108/72 mmHg" },
      { label: "RR", value: "20/min" },
    ],
  },
  diagnosis: {
    provisional: "Acute Tonsillitis",
    correct: ["belladonna", "bella donna", "belladona"],
    correctText: "✅ Yes, that matches—sudden high fever, red throat, pain.",
    wrongText: "❌ That doesn’t sound like me. My pain is sudden and fiery, not slow or dull.",
    remedyInfo:
      "Belladonna: sudden, violent inflammations; redness, burning fever; dryness of throat; irritability and restlessness.",
  },
  quiz: [
    {
      question: "Tonsillitis often presents with:",
      options: ["Red swollen throat", "Leg cramps", "Ear discharge"],
      correctIndex: 0,
    },
    {
      question: "Belladonna is suited for:",
      options: ["Gradual onset", "Sudden, violent onset", "Chronic mild cough"],
      correctIndex: 1,
    },
    {
      question: "In Belladonna, pain is worse with:",
      options: ["Cold drinks", "Warm drinks", "Sleeping"],
      correctIndex: 0,
    },
    {
      question: "Fever in Belladonna is usually:",
      options: ["Low grade", "Burning high fever", "No fever"],
      correctIndex: 1,
    },
    {
      question: "Patient’s mood in Belladonna:",
      options: ["Cheerful", "Sad & irritable", "Indifferent"],
      correctIndex: 1,
    },
  ],
}

export default def
