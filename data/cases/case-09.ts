import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 9,
  patientName: "Rita Sharma",
  age: 30,
  intro: "I experience severe burning and cutting pain during urination.",
  image: "/images/cases/case-09.jpg",
  defaultResponse:
    "Please ask about burning urination, urinary frequency, pain intensity, concomitant symptoms, or mental state…",
  keywords: [
    // Chief Complaint - Burning & Cutting Pain During Urination
    {
      keywords: ["burning", "urination", "urine", "pass"],
      responses: [
        "I experience severe burning and cutting pain during urination. It's unbearable 😣.",
        "Passing urine feels like fire inside, and the pain is absolutely intense 😢.",
        "Every time I urinate, the pain is so severe that I feel like crying 😔.",
      ],
    },
    // Location of Pain
    {
      keywords: ["location", "where", "abdomen", "bladder"],
      responses: [
        "The pain is mainly felt in the lower abdomen and urinary passage.",
        "I feel intense discomfort near the bladder and urethral region.",
        "The burning sensation spreads through the entire urinary tract.",
      ],
    },
    // Sensation (Keynote)
    {
      keywords: ["sensation", "feels", "burning", "cutting", "sharp"],
      responses: [
        "It feels like burning and cutting, as if acid is flowing 😩.",
        "The pain is sharp, raw, and intolerable 😭.",
        "There is constant burning even after passing urine.",
      ],
    },
    // Aggravation/Modalities
    {
      keywords: ["worse", "aggravate", "aggravation", "worsen"],
      responses: [
        "The pain becomes worse while passing urine 😰.",
        "Even a small quantity of urine increases the burning.",
        "Symptoms worsen at night… I cannot sleep 😴.",
      ],
    },
    // Amelioration/Relief
    {
      keywords: ["better", "relief", "amelioration", "improve", "water"],
      responses: [
        "There is slight relief after passing urine, but it lasts only briefly.",
        "Warmth provides mild temporary comfort.",
        "Keeping completely still reduces the discomfort slightly.",
      ],
    },
    // Concomitant Symptoms
    {
      keywords: ["urge", "frequency", "frequent", "restless", "unable"],
      responses: [
        "There is constant urge to urinate with intense burning 😰.",
        "I feel restless and unable to sit calmly due to pain 😣.",
        "There is weakness along with urinary pain.",
      ],
    },
    // Associated Complaint
    {
      keywords: ["genital", "soreness", "irritation", "frequency", "heaviness"],
      responses: [
        "There is irritation and soreness in the genital region.",
        "Urine is passed frequently but in small amounts.",
        "Lower abdominal heaviness accompanies the pain.",
      ],
    },
    // History of Present Illness
    {
      keywords: ["started", "began", "beginning", "sudden", "history"],
      responses: [
        "The problem started suddenly two days ago 😔.",
        "It began with mild burning, which rapidly became severe.",
        "The urge to urinate comes every hour… I'm exhausted.",
      ],
    },
    // Past History
    {
      keywords: ["past", "before", "previous", "infection", "had"],
      responses: ["I had a similar urinary infection once in the past. This is recurring 😟."],
    },
    // Family History
    {
      keywords: ["family", "mother", "father", "parents", "hereditary"],
      responses: ["No significant urinary complaints in the family."],
    },
    // Appetite
    {
      keywords: ["appetite", "eat", "eating", "food"],
      responses: ["My appetite has reduced since the pain started. I have no energy to eat."],
    },
    // Tongue
    {
      keywords: ["tongue", "coating", "mouth"],
      responses: ["My tongue feels dry and appears slightly red."],
    },
    // Desire/Cravings
    {
      keywords: ["desire", "crave", "craving", "want", "cold", "drink"],
      responses: ["I desire cold drinks frequently 💧."],
    },
    // Aversion
    {
      keywords: ["aversion", "avoid", "dislike", "spicy"],
      responses: ["I avoid spicy and strong food as it worsens discomfort."],
    },
    // Thirst
    {
      keywords: ["thirst", "thirsty"],
      responses: ["I feel thirsty often but drink only small sips."],
    },
    // Stool
    {
      keywords: ["stool", "bowel", "constipation"],
      responses: ["My bowel movements are normal."],
    },
    // Sleep
    {
      keywords: ["sleep", "sleeping", "wake", "rest"],
      responses: ["My sleep is disturbed due to constant pain and urge. I'm exhausted 😴."],
    },
    // Dreams
    {
      keywords: ["dream", "dreams"],
      responses: ["No specific dreams."],
    },
    // Thermal Preference
    {
      keywords: ["thermal", "temperature", "heat", "cold", "warm"],
      responses: ["I feel more comfortable in cooler surroundings. I'm a hot patient."],
    },
    // Mental State (Keynote - Irritability, Anxiety, Restlessness)
    {
      keywords: ["mental", "mood", "irritable", "irritation", "anxious", "anxiety", "calm"],
      responses: [
        "The continuous pain makes me extremely irritable 😤.",
        "I feel anxious because the pain is uncontrollable 😰.",
        "I am unable to remain calm due to constant discomfort 😣.",
      ],
    },
    // Casual Greetings (Global Rule)
    {
      keywords: ["hi", "hello", "hey", "hii", "hmmm"],
      response: "Hello, doctor!",
    },
    {
      keywords: ["ok", "okay", "okk", "ohk"],
      response: "OKK!!",
    },
  ],
  vitals: {
    stats: [
      { label: "Temperature", value: "99.5°F" },
      { label: "Pulse", value: "96/min" },
      { label: "Respiration", value: "20/min" },
      { label: "BP", value: "118/76 mmHg" },
    ],
    summary: [
      "Distressed, exhausted expression",
      "Severe burning and cutting pain during urination",
      "Passing urine feels like fire inside",
      "Intense restlessness and irritability",
    ],
  },
  diagnosis: {
    provisional: "Acute cystitis / Urinary tract irritation",
    correct: ["cantharis", "cantharis vesicatoria"],
    correctText: "✅ Correct! Cantharis is the most suitable remedy matching the totality of symptoms.",
    wrongText: "❌ Incorrect. Think about the intense burning and violent urge.",
    remedyInfo:
      "Cantharis is selected due to: Intense burning and cutting pain during urination; Constant and violent urge to urinate; Scanty urine passed with agony; Marked restlessness and irritability; Acute inflammatory condition of urinary tract.",
  },
  quiz: [
    {
      question: "What is the key sensation during urination in this case?",
      options: ["Dull pain", "Burning and cutting pain", "Colicky pain", "Cramping"],
      correctIndex: 1,
    },
    {
      question: "Which mental state is most prominent?",
      options: ["Calmness", "Indifference", "Restlessness and irritability", "Depression"],
      correctIndex: 2,
    },
    {
      question: "Urine characteristic in this case is:",
      options: ["Profuse and painless", "Scanty and burning", "Dark and offensive", "Involuntary"],
      correctIndex: 1,
    },
    {
      question: "Which remedy is indicated?",
      options: ["Apis mellifica", "Sarsaparilla", "Cantharis", "Pulsatilla"],
      correctIndex: 2,
    },
    {
      question: "What aggravates the complaint?",
      options: ["Rest", "Cold air", "Passing urine", "Lying down"],
      correctIndex: 2,
    },
  ],
}

export default def
