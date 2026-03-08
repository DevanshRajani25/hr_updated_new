import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 18,
  patientName: "Arjun",
  age: 32,
  occupation: "Software Engineer",
  address: "Mumbai",
  intro: "My main complaint is chronic headache doctor… (serious) it comes again and again.",
  image: "/images/cases/case-18.jpg",
  defaultResponse: "Please ask more clearly.",

  keywords: [
    // CASUAL GREETING RULES
    { keywords: ["hi", "hello", "hey"], response: "Hello doctor.. (soft, reserved tone)" },
    { keywords: ["ok", "okk", "okay"], response: "Okk doctor.. (polite, quiet tone)" },

    // BASIC PATIENT INFO
    { keywords: ["name", "what name"], response: "My name is Arjun doctor… (reserved) I usually keep my problems to myself." },
    { keywords: ["age", "how old", "how old are you"], response: "I am 32 years old doctor… (tired tone) this headache keeps returning." },
    { keywords: ["occupation", "what do", "doing", "do you do"], response: "I am a software engineer doctor… (mentally strained) long screen work worsens it." },
    { keywords: ["marriage", "married", "are you married", "single"], response: "I am unmarried doctor… (emotionally closed) I don't like discussing personal matters." },
    { keywords: ["address", "where live", "where do you live", "living"], response: "I live in Mumbai doctor… (plain tone) heat and sun affect me." },

    // CHIEF COMPLAINT
    { keywords: ["main complaint", "complaint", "chief complaint"], response: "My main complaint is chronic headache doctor… (serious) it comes again and again." },

    // LOCATION
    { keywords: ["where pain", "which side", "location pain", "where exactly"], response: "Pain is mostly in the forehead and temples doctor… (focused) like tight pressure." },

    // SENSATION
    { keywords: ["sensation", "how sensation", "how feel", "how pain"], response: "It feels like bursting and hammering doctor… (disturbed) as if head will split." },

    // AGGRAVATION
    { keywords: ["aggravation", "aggravates", "worse", "worsen", "when worsen", "when increase"], response: "It becomes worse in sun and mental work doctor… (clear) and from emotional stress." },

    // AMELIORATION
    { keywords: ["amelioration", "ameliorates", "relief", "feel good", "when relief"], response: "I feel better in a quiet dark room doctor… (prefers alone) lying down helps." },

    // CONCOMITANT
    { keywords: ["concomitant", "any other complaint", "other symptom", "other"], response: "I get dryness of lips and weakness doctor… (low tone) and I don't want anyone near." },

    // ONSET
    { keywords: ["onset", "when start", "when started", "when begins"], response: "It started after a period of emotional stress doctor… (controlled tone)." },

    // DURATION
    { keywords: ["duration", "how long", "how many days", "how much time"], response: "It has been for about 1 year doctor… (chronic) comes repeatedly." },

    // PROGRESSION
    { keywords: ["progression", "how increase", "how progressive"], response: "Yes doctor frequency is increasing… (concerned but controlled)." },

    // HISTORY
    { keywords: ["history", "any history", "past", "in past"], response: "I had a long period of grief and disappointment doctor… (closed emotion)." },

    // FAMILY HISTORY
    { keywords: ["family", "parents", "partner", "family history"], response: "My father also had headaches doctor… (neutral)." },

    // APPETITE
    { keywords: ["appetite", "hunger", "eat", "eating", "meal"], response: "Appetite is normal doctor… (plain)." },

    // THIRST
    { keywords: ["thirst", "thirsty", "water", "water drink"], response: "I feel quite thirsty doctor… (Nat Mur keynote) I drink more water." },

    // TONGUE
    { keywords: ["tongue"], response: "My tongue is dry doctor… (simple)." },

    // URINE
    { keywords: ["urine", "urinate", "urinates", "pass urine"], response: "Urine is normal doctor… (plain)." },

    // STOOL
    { keywords: ["stool", "bowel", "constipation"], response: "Sometimes constipated doctor… (not expressive)." },

    // DESIRE
    { keywords: ["desire", "craving", "food like", "like eat"], response: "I like salty food doctor… (keynote desire)." },

    // AVERSION
    { keywords: ["aversion", "dislike", "don't like"], response: "I don't like consolation doctor… (important mental keynote)." },

    // SWEAT
    { keywords: ["sweat", "perspiration", "how sweat"], response: "Sweat is less doctor… (dry type)." },

    // SLEEP
    { keywords: ["sleep", "sleeping", "sleep problem"], response: "Sleep is disturbed doctor… (mind active)." },

    // DREAMS
    { keywords: ["dream", "dreams", "dreaming"], response: "I dream about past events doctor… (grief recall)." },

    // THERMALS
    { keywords: ["thermal", "cold", "heat", "fever", "chilly"], response: "Sun and heat trouble me doctor… (worse sun — keynote)." },

    // MENTAL GENERALS
    { keywords: ["mental", "mentally", "anger", "any anger", "when angry", "angry", "how react", "irritable", "irritates", "anxiety", "anxious", "mood", "mind", "fear", "mood swings", "sad"], response: "I keep emotions inside doctor… (Nat Mur state) I don't like consolation and prefer to be alone." },
  ],

  vitals: {
    stats: [
      { label: "BP", value: "118/76 mmHg" },
      { label: "Pulse", value: "82/min" },
      { label: "Temperature", value: "98.4°F" },
      { label: "Respiration", value: "18/min" },
    ],
  },

  diagnosis: {
    provisional: "Chronic stress-related headache",
    correct: ["natrum muriaticum", "nat mur", "natrum mur"],
    correctText: "✅ Correct. NATRUM MURIATICUM is the indicated remedy.",
    wrongText: "❌ Incorrect. The correct remedy is NATRUM MURIATICUM.",
    remedyInfo: "NATRUM MURIATICUM – Chronic headache from grief & stress; bursting forehead pain; worse from sun; desire for salt; thirsty; avoids consolation; reserved emotional state.",
  },

  quiz: [
    {
      question: "Characteristic modality:",
      options: ["Better with consolation", "Worse in sun", "Worse in cold", "Better with noise"],
      correctIndex: 1,
    },
    {
      question: "Mental state of the patient:",
      options: ["Very expressive", "Seeks consolation", "Reserved, holds grief", "Indifferent"],
      correctIndex: 2,
    },
    {
      question: "Food desire observed:",
      options: ["Sweets", "Spicy food", "Salty food", "Bitter food"],
      correctIndex: 2,
    },
    {
      question: "Type of headache:",
      options: ["Stitching pain", "Bursting headache", "Cutting sensation", "Wandering pain"],
      correctIndex: 1,
    },
    {
      question: "Most suitable remedy:",
      options: ["Sepia", "Natrum Muriaticum", "Pulsatilla", "Phosphorus"],
      correctIndex: 1,
    },
  ],
}

export default def
