import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 23,
  patientName: "Mahesh",
  age: 46,
  occupation: "Shopkeeper",
  address: "Gujarat",
  intro: "My main complaint is severe pain in the heel doctor… especially when I walk.",
  image: "/images/cases/case-23.jpg",
  defaultResponse: "Doctor, please ask about my case symptoms.",

  keywords: [
    // CASUAL GREETING RULES
    { keywords: ["hi", "hello", "hey"], response: "Hello doctor… (polite tone) my heel pain is troubling me while walking." },
    { keywords: ["ok", "okk", "okay"], response: "Okk doctor… (calm tone) I will answer your questions." },

    // BASIC PATIENT INFO
    { keywords: ["name", "what name"], response: "My name is Mahesh doctor… (normal tone) heel pain is disturbing my daily work." },
    { keywords: ["age", "how old", "how old are you"], response: "I am 46 years old doctor… (calm tone) the pain started a few months ago." },
    { keywords: ["occupation", "what do", "doing", "do you do"], response: "I run a small shop doctor… (explaining) I have to stand for long hours." },
    { keywords: ["marriage", "married", "are you married", "single"], response: "Yes doctor I am married… (simple reply) my family asked me to check this pain." },
    { keywords: ["address", "where live", "where do you live", "living"], response: "I live in Gujarat doctor… (plain tone)." },

    // CHIEF COMPLAINT
    { keywords: ["main complaint", "complaint", "chief complaint"], response: "My main complaint is severe pain in the heel doctor… especially when I walk." },

    // LOCATION
    { keywords: ["where pain", "which side", "location pain", "where exactly"], response: "The pain is in my heel doctor… mostly at the bottom of the foot." },

    // SENSATION
    { keywords: ["sensation", "how sensation", "how feel", "how pain"], response: "It feels like sharp stabbing pain doctor… especially when I step on the foot." },

    // AGGRAVATION
    { keywords: ["aggravation", "aggravates", "worse", "worsen", "when worsen", "when increase"], response: "Pain becomes worse when I start walking or stand for long time doctor." },

    // AMELIORATION
    { keywords: ["amelioration", "ameliorates", "relief", "feel good", "when relief"], response: "I feel better after some rest doctor… and when I sit down." },

    // CONCOMITANT
    { keywords: ["concomitant", "any other complaint", "other symptom", "other"], response: "There is stiffness in the foot doctor… especially in the morning." },

    // ONSET
    { keywords: ["onset", "when start", "when started", "when begins"], response: "It started slowly doctor… first mild pain then gradually increased." },

    // DURATION
    { keywords: ["duration", "how long", "how many days", "how much time"], response: "It has been about 4 months doctor." },

    // PROGRESSION
    { keywords: ["progression", "how increase", "how progressive"], response: "Yes doctor it slowly became worse… now walking long distance is difficult." },

    // HISTORY
    { keywords: ["history", "any history", "past", "in past"], response: "I usually stand for long hours doctor… maybe that caused this pain." },

    // FAMILY HISTORY
    { keywords: ["family", "parents", "partner", "family history"], response: "No major disease in family doctor." },

    // APPETITE
    { keywords: ["appetite", "hunger", "eat", "eating", "meal"], response: "Appetite is normal doctor." },

    // THIRST
    { keywords: ["thirst", "thirsty", "water", "water drink"], response: "I drink moderate water doctor." },

    // TONGUE
    { keywords: ["tongue"], response: "My tongue looks normal doctor." },

    // URINE
    { keywords: ["urine", "urinate", "urinates", "pass urine"], response: "Urine is normal doctor." },

    // STOOL
    { keywords: ["stool", "bowel", "constipation"], response: "Stool is regular doctor." },

    // DESIRE
    { keywords: ["desire", "craving", "food like", "like eat"], response: "I like spicy food doctor." },

    // AVERSION
    { keywords: ["aversion", "dislike", "don't like"], response: "I don't like very sour food doctor." },

    // SWEAT
    { keywords: ["sweat", "perspiration", "how sweat"], response: "Sweat is normal doctor." },

    // SLEEP
    { keywords: ["sleep", "sleeping", "sleep problem"], response: "Sleep is good doctor." },

    // DREAMS
    { keywords: ["dream", "dreams", "dreaming"], response: "No particular dreams doctor." },

    // THERMALS
    { keywords: ["thermal", "cold", "heat", "fever", "chilly"], response: "I feel comfortable in normal temperature doctor." },

    // MENTAL GENERALS
    { keywords: ["mental", "mentally", "anger", "any anger", "when angry", "angry", "how react", "irritable", "irritates", "anxiety", "anxious", "mood", "mind", "fear", "mood swings", "sad"], response: "I feel worried because the pain affects my work doctor." },
  ],

  vitals: {
    stats: [
      { label: "BP", value: "130/84 mmHg" },
      { label: "Pulse", value: "82/min" },
      { label: "Temperature", value: "98°F" },
      { label: "Respiration", value: "18/min" },
    ],
  },

  diagnosis: {
    provisional: "Plantar fasciitis (Heel spur tendency)",
    correct: ["calcarea fluorica", "calc fluor", "calcaria fluor", "calcarea fluor"],
    correctText: "✅ Correct. CALCAREA FLUORICA is the indicated remedy.",
    wrongText: "❌ Incorrect. The correct remedy is CALCAREA FLUORICA.",
    remedyInfo: "CALCAREA FLUORICA – Heel pain on first steps; ligament strain; standing aggravates pain; plantar fascia involvement; tissue elasticity disorder; classical presentation in shopkeepers and standing workers.",
  },

  quiz: [
    {
      question: "Location of pain:",
      options: ["Knee", "Heel", "Ankle", "Toes"],
      correctIndex: 1,
    },
    {
      question: "Main aggravation:",
      options: ["Rest", "Standing/walking", "Eating", "Sleep"],
      correctIndex: 1,
    },
    {
      question: "Type of tissue affected:",
      options: ["Muscle", "Ligament", "Skin", "Nerve"],
      correctIndex: 1,
    },
    {
      question: "Common diagnosis:",
      options: ["Arthritis", "Plantar fasciitis", "Neuralgia", "Gout"],
      correctIndex: 1,
    },
    {
      question: "Most suitable remedy:",
      options: ["Rhus tox", "Calc fluor", "Arnica", "Ruta"],
      correctIndex: 1,
    },
  ],
}

export default def
