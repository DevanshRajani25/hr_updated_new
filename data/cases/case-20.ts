import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 20,
  patientName: "Ramesh",
  age: 58,
  occupation: "Farmer",
  address: "Gujarat",
  intro: "My main complaint is dark painful toes doctor… (concerned) skin looks dry and blackish.",
  image: "/images/cases/case-20.jpg",
  defaultResponse: "Please ask more clearly.",

  keywords: [
    // CASUAL GREETING RULES
    { keywords: ["hi", "hello", "hey"], response: "Hello doctor… (weak but alert tone)" },
    { keywords: ["ok", "okk", "okay"], response: "Okk doctor… (restless but polite tone)" },

    // BASIC PATIENT INFO
    { keywords: ["name", "what name"], response: "My name is Ramesh doctor… (low energy) my feet condition is worrying me." },
    { keywords: ["age", "how old", "how old are you"], response: "I am 58 years old doctor… (frail tone) weakness is increasing these days." },
    { keywords: ["occupation", "what do", "doing", "do you do"], response: "I am a farmer doctor… (tired) long standing in fields makes pain worse." },
    { keywords: ["marriage", "married", "are you married", "single"], response: "Yes doctor I am married… (short reply) family is concerned about my feet." },
    { keywords: ["address", "where live", "where do you live", "living"], response: "I live in Gujarat doctor… (plain tone) cold nights affect circulation." },

    // CHIEF COMPLAINT
    { keywords: ["main complaint", "complaint", "chief complaint"], response: "My main complaint is dark painful toes doctor… (concerned) skin looks dry and blackish." },

    // LOCATION
    { keywords: ["where pain", "which side", "location pain", "where exactly"], response: "Pain is in my toes doctor… (specific) especially the smaller ones." },

    // SENSATION
    { keywords: ["sensation", "how sensation", "how feel", "how pain"], response: "It is burning pain doctor… (peculiar) but I want cold air on them." },

    // AGGRAVATION
    { keywords: ["aggravation", "aggravates", "worse", "worsen", "when worsen", "when increase"], response: "It becomes worse from heat and covering doctor… (keynote) warmth increases burning." },

    // AMELIORATION
    { keywords: ["amelioration", "ameliorates", "relief", "feel good", "when relief"], response: "I feel better with cold applications doctor… (strange) I keep feet uncovered." },

    // CONCOMITANT
    { keywords: ["concomitant", "any other complaint", "other symptom", "other"], response: "My skin is very dry and shriveled doctor… (observing) and I feel very weak." },

    // ONSET
    { keywords: ["onset", "when start", "when started", "when begins"], response: "It started with numbness doctor… (recalling) then color slowly changed." },

    // DURATION
    { keywords: ["duration", "how long", "how many days", "how much time"], response: "It has been for about 3 months doctor… (progressive)." },

    // PROGRESSION
    { keywords: ["progression", "how increase", "how progressive"], response: "Yes doctor it is slowly spreading… (worried but restless)." },

    // HISTORY
    { keywords: ["history", "any history", "past", "in past"], response: "I have diabetes for many years doctor… (important cause)." },

    // FAMILY HISTORY
    { keywords: ["family", "parents", "partner", "family history"], response: "My mother had circulation trouble doctor… (neutral)." },

    // APPETITE
    { keywords: ["appetite", "hunger", "eat", "eating", "meal"], response: "Appetite is low doctor… (weak feeling)." },

    // THIRST
    { keywords: ["thirst", "thirsty", "water", "water drink"], response: "I am very thirsty doctor… (frequent sips)." },

    // TONGUE
    { keywords: ["tongue"], response: "My tongue is dry doctor… (pale and dry)." },

    // URINE
    { keywords: ["urine", "urinate", "urinates", "pass urine"], response: "Urine is frequent doctor… (diabetic pattern)." },

    // STOOL
    { keywords: ["stool", "bowel", "constipation"], response: "Sometimes loose stool doctor… (offensive)." },

    // DESIRE
    { keywords: ["desire", "craving", "food like", "like eat"], response: "I like sour things doctor… (mild craving)." },

    // AVERSION
    { keywords: ["aversion", "dislike", "don't like"], response: "I don't like warm food doctor… (prefers cool things)." },

    // SWEAT
    { keywords: ["sweat", "perspiration", "how sweat"], response: "Sweat is cold and sticky doctor… (clammy)." },

    // SLEEP
    { keywords: ["sleep", "sleeping", "sleep problem"], response: "Sleep is disturbed doctor… (restless from burning pain)." },

    // DREAMS
    { keywords: ["dream", "dreams", "dreaming"], response: "I dream of danger doctor… (anxious state)." },

    // THERMALS
    { keywords: ["thermal", "cold", "heat", "fever", "chilly"], response: "I feel cold inside doctor… but I cannot tolerate covering." },

    // MENTAL GENERALS
    { keywords: ["mental", "mentally", "anger", "any anger", "when angry", "angry", "how react", "irritable", "irritates", "anxiety", "anxious", "mood", "mind", "fear", "mood swings", "sad"], response: "I feel anxious about my health doctor… (restless) keep checking my feet repeatedly." },
  ],

  vitals: {
    stats: [
      { label: "BP", value: "142/90 mmHg" },
      { label: "Pulse", value: "98/min" },
      { label: "Temperature", value: "97.6°F" },
      { label: "Respiration", value: "20/min" },
    ],
  },

  diagnosis: {
    provisional: "Peripheral vascular insufficiency with dry gangrene tendency",
    correct: ["secale cornutum", "secale", "ergot"],
    correctText: "✅ Correct. SECALE CORNUTUM is the indicated remedy.",
    wrongText: "❌ Incorrect. The correct remedy is SECALE CORNUTUM.",
    remedyInfo: "SECALE CORNUTUM – Dry blackish toes; burning pains; worse from heat; better from cold applications; thin weak patient; strange thermal contradiction (cold internally but wants uncovering).",
  },

  quiz: [
    {
      question: "Characteristic thermal modality:",
      options: ["Better with heat", "Worse from cold", "Burning but wants cold", "Better with covering"],
      correctIndex: 2,
    },
    {
      question: "Tissue state of toes:",
      options: ["Moist swelling", "Dry shriveled", "Soft edema", "Red hot"],
      correctIndex: 1,
    },
    {
      question: "Main aggravation:",
      options: ["Cold", "Heat", "Motion", "Noise"],
      correctIndex: 1,
    },
    {
      question: "General physical condition:",
      options: ["Obese", "Thin weak", "Muscular", "Plethoric"],
      correctIndex: 1,
    },
    {
      question: "Most suitable remedy:",
      options: ["Arsenicum", "Secale Cornutum", "Carbo veg", "Lachesis"],
      correctIndex: 1,
    },
  ],
}

export default def
