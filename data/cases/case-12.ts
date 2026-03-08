import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 12,
  patientName: "Meena Joshi",
  age: 48,
  gender: "Female",
  occupation: "Housewife",
  address: "Ahmedabad",
  intro: "Hello doctor… (slow, reserved) please ask gently, this swelling near my ear worries me a lot.",
  image: "/images/cases/case-12-neck-swelling.jpg",
  defaultResponse: "Please ask about my swelling, location, hardness, movement, weakness, or mental state…",
  keywords: [
    { keywords: ["name"], response: "My name is Meena Joshi doctor (quiet)… I don't talk much." },
    { keywords: ["age"], response: "I am 48 years old doctor (slow)… weakness has increased." },
    { keywords: ["gender", "female"], response: "I am female doctor (simple)." },
    { keywords: ["occupation", "work"], response: "I am a housewife (plain)… mostly indoor work." },
    { keywords: ["married"], response: "I am married doctor (reserved)… family life is quiet." },
    { keywords: ["address"], response: "I live in Ahmedabad (simple)… calm area." },
    {
      keywords: ["swelling", "complaint"],
      response: "My main complaint is hard swelling near ear (worried)… it doesn't move.",
    },
    { keywords: ["location"], response: "It is near ear and jaw side (points slowly)." },
    { keywords: ["sensation", "feel"], response: "It feels hard and heavy (uneasy)… not sharp pain." },
    { keywords: ["character", "type", "nature"], response: "It is hard, not soft (clear)… feels fixed." },
    {
      keywords: ["worse", "aggravation", "motion"],
      response: "It gets worse on moving neck (careful)… stiffness increases.",
    },
    { keywords: ["better", "relief"], response: "Keeping still gives relief (relieved)." },
    { keywords: ["other", "symptom"], response: "I feel weakness and heaviness (tired)." },
    { keywords: ["onset", "start"], response: "It started gradually doctor (thinking)." },
    { keywords: ["duration", "long"], response: "It is there since many months (worried)." },
    { keywords: ["increasing", "progression"], response: "It is slowly increasing (observant)." },
    { keywords: ["past", "history"], response: "No major illness before (simple)." },
    { keywords: ["family"], response: "No such issue in family (neutral)." },
    { keywords: ["appetite"], response: "Appetite is low (slow)… eat little." },
    { keywords: ["thirst"], response: "Thirst is moderate (balanced)." },
    { keywords: ["desire", "craving"], response: "No special cravings (neutral)." },
    { keywords: ["aversion"], response: "I avoid heavy food (uneasy)." },
    { keywords: ["stool"], response: "Stool is sluggish (slow)… not regular." },
    { keywords: ["urine"], response: "Urine is normal (neutral)." },
    { keywords: ["sweat"], response: "Less sweating (dry feeling)." },
    { keywords: ["sleep"], response: "Sleep is disturbed (tired)… thoughts continue." },
    { keywords: ["dreams"], response: "No clear dreams (dull)." },
    { keywords: ["cold", "thermal", "heat"], response: "I feel more cold (chilly)." },
    { keywords: ["menopause", "menses"], response: "Menopause has started (low vitality)." },
    { keywords: ["mental", "mood", "alone"], response: "I like to stay alone (reserved)… don't enjoy company." },
  ],
  vitals: {
    stats: [
      { label: "BP", value: "130/80 mmHg" },
      { label: "Pulse", value: "70/min" },
      { label: "Temp", value: "Normal" },
      { label: "General", value: "Weak, slow, stable" },
    ],
    summary: [
      "Hard indurated glandular swelling (parotid/cervical region)",
      "Worse from movement; improved with rest",
      "Reserved, withdrawn mental state; prefers solitude",
    ],
  },
  diagnosis: {
    provisional: "Hard parotid/cervical glandular swelling with induration",
    correct: ["conium", "conium maculatum"],
    correctText:
      "✅ Correct diagnosis! CONIUM MACULATUM is indicated for hard, indurated glandular swelling with slow progressive condition, reserved withdrawn mental state, and worse from movement.",
    wrongText:
      "❌ Incorrect remedy. This case shows hard indurated glands with slow progression. Re-analyze the hardness, slowness, and mental withdrawal.",
    remedyInfo:
      "CONIUM MACULATUM – Hard indurated glandular swelling; slow progressive; reserved withdrawn nature; worse from motion.",
  },
  quiz: [
    {
      question: "Key indication pointing to Conium?",
      options: ["Sharp pain", "Sudden swelling", "Hard indurated gland", "Red inflamed swelling"],
      correctIndex: 2,
    },
    {
      question: "Mental state of patient suggests:",
      options: ["Talkative", "Aggressive", "Reserved and withdrawn", "Fearful of dark"],
      correctIndex: 2,
    },
    {
      question: "Aggravation is mainly from:",
      options: ["Eating", "Motion", "Cold", "Heat"],
      correctIndex: 1,
    },
    {
      question: "Nature of progression:",
      options: ["Rapid", "Sudden", "Slow", "Intermittent"],
      correctIndex: 2,
    },
    {
      question: "Most suitable remedy:",
      options: ["Belladonna", "Calcarea", "Conium", "Silicea"],
      correctIndex: 2,
    },
  ],
}

export default def
