import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 22,
  patientName: "Suresh",
  age: 32,
  occupation: "Carpenter",
  address: "Gujarat",
  intro: "My main complaint is this round swelling on my wrist doctor… (concerned) it feels hard.",
  image: "/images/cases/case-22.jpg",
  defaultResponse: "Please ask more clearly.",

  keywords: [
    // CASUAL GREETING RULES
    { keywords: ["hi", "hello", "hey"], response: "Hello doctor… (slight discomfort but respectful tone)" },
    { keywords: ["ok", "okk", "okay"], response: "Okk doctor… (mild pain tone)" },

    // BASIC PATIENT INFO
    { keywords: ["name", "what name"], response: "My name is Suresh doctor… (normal tone) this wrist swelling is disturbing my work." },
    { keywords: ["age", "how old", "how old are you"], response: "I am 32 years old doctor… (working age) I depend on my hands daily." },
    { keywords: ["occupation", "what do", "doing", "do you do"], response: "I am a carpenter doctor… (important cause) I use my wrist continuously for heavy tools." },
    { keywords: ["marriage", "married", "are you married", "single"], response: "Yes doctor I am married… (simple tone) my work is getting affected." },
    { keywords: ["address", "where live", "where do you live", "living"], response: "I live in Gujarat doctor… (plain tone)." },

    // CHIEF COMPLAINT
    { keywords: ["main complaint", "complaint", "chief complaint"], response: "My main complaint is this round swelling on my wrist doctor… (concerned) it feels hard." },

    // LOCATION
    { keywords: ["where pain", "which side", "location pain", "where exactly"], response: "The swelling is on the back side of my right wrist doctor… (showing area)." },

    // SENSATION
    { keywords: ["sensation", "how sensation", "how feel", "how pain"], response: "It feels like deep aching pain doctor… (as if bruised) especially when I move it." },

    // AGGRAVATION
    { keywords: ["aggravation", "aggravates", "worse", "worsen", "when worsen", "when increase"], response: "It becomes worse from motion and overuse doctor… (keynote) lifting tools increases pain." },

    // AMELIORATION
    { keywords: ["amelioration", "ameliorates", "relief", "feel good", "when relief"], response: "I feel better when I keep my wrist at rest doctor… (important modality)." },

    // CONCOMITANT
    { keywords: ["concomitant", "any other complaint", "other symptom", "other"], response: "I feel stiffness in the joint doctor… (tendon tightness) like it is strained." },

    // ONSET
    { keywords: ["onset", "when start", "when started", "when begins"], response: "It started after continuous heavy work doctor… (strain history)." },

    // DURATION
    { keywords: ["duration", "how long", "how many days", "how much time"], response: "It has been for about 2 months doctor… (persistent swelling)." },

    // PROGRESSION
    { keywords: ["progression", "how increase", "how progressive"], response: "Yes doctor it is slowly becoming more noticeable… (gradual increase)." },

    // HISTORY
    { keywords: ["history", "any history", "past", "in past"], response: "I had similar strain pain earlier doctor… (recurrent tendon weakness)." },

    // FAMILY HISTORY
    { keywords: ["family", "parents", "partner", "family history"], response: "No major family problem doctor… (neutral)." },

    // APPETITE
    { keywords: ["appetite", "hunger", "eat", "eating", "meal"], response: "Appetite is normal doctor… (healthy worker)." },

    // THIRST
    { keywords: ["thirst", "thirsty", "water", "water drink"], response: "I drink normal amount of water doctor… (nothing unusual)." },

    // TONGUE
    { keywords: ["tongue"], response: "My tongue is normal doctor… (no coating)." },

    // URINE
    { keywords: ["urine", "urinate", "urinates", "pass urine"], response: "Urine is normal doctor… (no complaint)." },

    // STOOL
    { keywords: ["stool", "bowel", "constipation"], response: "Stool is regular doctor… (no issue)." },

    // DESIRE
    { keywords: ["desire", "craving", "food like", "like eat"], response: "I like simple home food doctor… (normal desire)." },

    // AVERSION
    { keywords: ["aversion", "dislike", "don't like"], response: "I don't have any special aversion doctor…" },

    // SWEAT
    { keywords: ["sweat", "perspiration", "how sweat"], response: "Sweat is normal doctor… (during work mainly)." },

    // SLEEP
    { keywords: ["sleep", "sleeping", "sleep problem"], response: "Sleep is slightly disturbed doctor… (pain when turning wrist)." },

    // DREAMS
    { keywords: ["dream", "dreams", "dreaming"], response: "No particular dreams doctor…" },

    // THERMALS
    { keywords: ["thermal", "cold", "heat", "fever", "chilly"], response: "I feel generally chilly doctor… (Ruta patient often sensitive to cold air)." },

    // MENTAL GENERALS
    { keywords: ["mental", "mentally", "anger", "any anger", "when angry", "angry", "how react", "irritable", "irritates", "anxiety", "anxious", "mood", "mind", "fear", "mood swings", "sad"], response: "I feel irritated when I cannot work doctor… (practical worker mindset)." },
  ],

  vitals: {
    stats: [
      { label: "BP", value: "126/82 mmHg" },
      { label: "Pulse", value: "84/min" },
      { label: "Temperature", value: "98.2°F" },
      { label: "Respiration", value: "18/min" },
    ],
  },

  diagnosis: {
    provisional: "Ganglion cyst (Tendon sheath swelling)",
    correct: ["ruta", "ruta graveolens"],
    correctText: "✅ Correct. RUTA GRAVEOLENS is the indicated remedy.",
    wrongText: "❌ Incorrect. The correct remedy is RUTA GRAVEOLENS.",
    remedyInfo: "RUTA GRAVEOLENS – Tendon sheath swelling after occupational strain; worse from motion; better from rest; bruised aching pain; characteristic of overuse injuries in hardworking individuals.",
  },

  quiz: [
    {
      question: "Main aggravation:",
      options: ["Rest", "Cold", "Motion", "Sleep"],
      correctIndex: 2,
    },
    {
      question: "Tissue involved:",
      options: ["Nerve", "Bone", "Tendon", "Skin"],
      correctIndex: 2,
    },
    {
      question: "Characteristic sensation:",
      options: ["Burning", "Bruised aching", "Stitching", "Throbbing"],
      correctIndex: 1,
    },
    {
      question: "Primary cause:",
      options: ["Infection", "Overstrain", "Allergy", "Fever"],
      correctIndex: 1,
    },
    {
      question: "Most suitable remedy:",
      options: ["Rhus tox", "Ruta", "Arnica", "Calcarea"],
      correctIndex: 1,
    },
  ],
}

export default def
