import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 19,
  patientName: "Diya",
  age: 21,
  occupation: "College Student",
  address: "Ahmedabad",
  intro: "My main complaint is repeated face pimples doctor… red and painful.",
  image: "/images/cases/case-19.jpg",
  defaultResponse: "Please ask more clearly.",

  keywords: [
    // CASUAL GREETING RULES
    { keywords: ["hi", "hello", "hey"], response: "Hello doctor.. (casual but confident tone)" },
    { keywords: ["ok", "okk", "okay"], response: "Okk doctor.. (simple tone)" },

    // BASIC PATIENT INFO
    { keywords: ["name", "what name"], response: "My name is Diya doctor… I get these pimples again and again." },
    { keywords: ["age", "how old", "how old are you"], response: "I am 21 years old doctor… pimples started from last few years." },
    { keywords: ["occupation", "what do", "doing", "do you do"], response: "I am a college student doctor… (casual) stress and irregular routine." },
    { keywords: ["marriage", "married", "are you married", "single"], response: "I am unmarried doctor… (normal tone)." },
    { keywords: ["address", "where live", "where do you live", "living"], response: "I live in Ahmedabad doctor… heat troubles my skin." },

    // CHIEF COMPLAINT
    { keywords: ["main complaint", "complaint", "chief complaint"], response: "My main complaint is repeated face pimples doctor… red and painful." },

    // LOCATION
    { keywords: ["where pimple", "which area", "location"], response: "Mostly on face doctor… cheeks and forehead mainly." },

    // SENSATION
    { keywords: ["sensation", "how feel", "pain how"], response: "They burn and itch doctor… sometimes painful on touch." },

    // AGGRAVATION
    { keywords: ["aggravation", "worse", "worsen", "when increase", "modality"], response: "Worse from heat and sweating doctor… and after washing face." },

    // AMELIORATION
    { keywords: ["amelioration", "relief", "better when"], response: "Better in cool air doctor… scratching gives temporary relief." },

    // CONCOMITANT
    { keywords: ["concomitant", "other symptom", "other"], response: "Skin becomes oily and itchy doctor… sometimes burning." },

    // ONSET
    { keywords: ["onset", "when start", "started"], response: "It started in teenage doctor… gradually increasing." },

    // DURATION
    { keywords: ["duration", "how long"], response: "Since about 3 years doctor… comes again and again." },

    // PROGRESSION
    { keywords: ["progression", "increasing"], response: "Yes doctor… frequency and severity both increasing." },

    // HISTORY
    { keywords: ["history", "past"], response: "I had oily skin since long doctor… pimples keep recurring." },

    // FAMILY HISTORY
    { keywords: ["family", "family history"], response: "My elder brother also had acne doctor." },

    // APPETITE
    { keywords: ["appetite", "hunger"], response: "Appetite is good doctor… I feel hungry often." },

    // THIRST
    { keywords: ["thirst", "water"], response: "Thirst is increased doctor… I drink more water." },

    // TONGUE
    { keywords: ["tongue"], response: "Tongue is reddish doctor." },

    // URINE
    { keywords: ["urine"], response: "Urine is normal doctor." },

    // STOOL
    { keywords: ["stool", "bowel"], response: "Sometimes burning stool doctor." },

    // DESIRE
    { keywords: ["desire", "craving"], response: "I like sweets and spicy food doctor." },

    // AVERSION
    { keywords: ["aversion", "dislike"], response: "I don't like bathing often doctor… (Sulphur keynote)." },

    // SWEAT
    { keywords: ["sweat", "perspiration"], response: "Sweat is offensive doctor… more in heat." },

    // SLEEP
    { keywords: ["sleep"], response: "Sleep is okay doctor… but body feels hot at night." },

    // DREAMS
    { keywords: ["dream"], response: "No specific dreams doctor." },

    // THERMALS
    { keywords: ["thermal", "heat", "cold"], response: "I feel more heat doctor… can't tolerate warmth." },

    // MENTAL GENERALS
    { keywords: ["mental", "anger", "mood", "mind", "irritable"], response: "I am confident doctor… but careless about cleanliness and routine." },
  ],

  vitals: {
    stats: [
      { label: "BP", value: "120/80 mmHg" },
      { label: "Pulse", value: "84/min" },
      { label: "Temperature", value: "98.6°F" },
      { label: "Respiration", value: "18/min" },
    ],
  },

  diagnosis: {
    provisional: "Chronic acne vulgaris",
    correct: ["sulphur", "sulfur"],
    correctText: "✅ Correct. SULPHUR is the indicated remedy.",
    wrongText: "❌ Incorrect. The correct remedy is SULPHUR.",
    remedyInfo: "SULPHUR – Recurrent acne; burning itching pimples; worse from heat; oily dirty skin; aversion to bathing; offensive sweat; heaty patient.",
  },

  quiz: [
    {
      question: "Main aggravation:",
      options: ["Cold air", "Heat", "Morning", "Motion"],
      correctIndex: 1,
    },
    {
      question: "Skin type:",
      options: ["Dry", "Clean", "Oily dirty", "Pale"],
      correctIndex: 2,
    },
    {
      question: "Sensation:",
      options: ["Numb", "Burning itching", "Stitching", "Cold"],
      correctIndex: 1,
    },
    {
      question: "Thermal preference:",
      options: ["Chilly", "Heaty", "Neutral", "Alternating"],
      correctIndex: 1,
    },
    {
      question: "Most suitable remedy:",
      options: ["Graphites", "Sulphur", "Pulsatilla", "Nat mur"],
      correctIndex: 1,
    },
  ],
}

export default def
