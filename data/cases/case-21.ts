import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 21,
  patientName: "Chandni Shah",
  age: 23,
  occupation: "Student",
  address: "Gujarat",
  intro: "My main complaint is irregular and delayed periods doctor… (slightly teary) sometimes they stop for 2–3 months…",
  image: "/images/cases/case-21.jpg",
  defaultResponse: "Please ask more clearly.",

  keywords: [
    // CASUAL GREETING RULES
    { keywords: ["hi", "hello", "hey"], response: "Hello doctor… (soft emotional tone) I was waiting to talk to you…" },
    { keywords: ["ok", "okk", "okay"], response: "Okk doctor… (gentle and obedient tone)" },

    // BASIC PATIENT INFO
    { keywords: ["name", "what name"], response: "My name is Chandni Shah doctor… (soft voice) I feel very disturbed because of my periods…" },
    { keywords: ["age", "how old", "how old are you"], response: "I am 23 years old doctor… (innocent tone) my cycle has been irregular for many months…" },
    { keywords: ["occupation", "what do", "doing", "do you do"], response: "I am a student doctor… (mild) stress of studies makes me more emotional." },
    { keywords: ["marriage", "married", "are you married", "single"], response: "No doctor… I am not married yet… (shy tone) but I worry about my future health." },
    { keywords: ["address", "where live", "where do you live", "living"], response: "I live in Gujarat doctor… (calm tone) I feel better when I sit in open air." },

    // CHIEF COMPLAINT
    { keywords: ["main complaint", "complaint", "chief complaint"], response: "My main complaint is irregular and delayed periods doctor… (slightly teary) sometimes they stop for 2–3 months…" },

    // LOCATION
    { keywords: ["where pain", "which side", "location pain", "where exactly"], response: "Pain is in my lower abdomen doctor… (holding stomach gently) shifting from side to side." },

    // SENSATION
    { keywords: ["sensation", "how sensation", "how feel", "how pain"], response: "It feels like cramping and heaviness doctor… (changeable description) sometimes mild, sometimes more." },

    // AGGRAVATION
    { keywords: ["aggravation", "aggravates", "worse", "worsen", "when worsen", "when increase"], response: "It becomes worse in warm room doctor… (soft) I feel suffocated in heat." },

    // AMELIORATION
    { keywords: ["amelioration", "ameliorates", "relief", "feel good", "when relief"], response: "I feel better in open air doctor… (relieved tone) cool fresh air makes me comfortable." },

    // CONCOMITANT
    { keywords: ["concomitant", "any other complaint", "other symptom", "other"], response: "I have white discharge sometimes doctor… (embarrassed) and I cry easily without reason." },

    // ONSET
    { keywords: ["onset", "when start", "when started", "when begins"], response: "It started about one year ago doctor… (thinking softly) after emotional stress." },

    // DURATION
    { keywords: ["duration", "how long", "how many days", "how much time"], response: "It has been irregular for almost one year doctor… (mildly worried)." },

    // PROGRESSION
    { keywords: ["progression", "how increase", "how progressive"], response: "Yes doctor… sometimes it improves, sometimes again delays… (changeable nature)." },

    // HISTORY
    { keywords: ["history", "any history", "past", "in past"], response: "I had normal cycles before doctor… (softly) this problem started gradually." },

    // FAMILY HISTORY
    { keywords: ["family", "parents", "partner", "family history"], response: "My mother also had irregular periods doctor… (gentle tone)." },

    // APPETITE
    { keywords: ["appetite", "hunger", "eat", "eating", "meal"], response: "Appetite is normal doctor… (mild) but I don't feel very hungry sometimes." },

    // THIRST
    { keywords: ["thirst", "thirsty", "water", "water drink"], response: "I am not very thirsty doctor… (keynote) I drink very little water." },

    // TONGUE
    { keywords: ["tongue"], response: "My tongue looks normal doctor… (soft tone)." },

    // URINE
    { keywords: ["urine", "urinate", "urinates", "pass urine"], response: "Urine is normal doctor… nothing special." },

    // STOOL
    { keywords: ["stool", "bowel", "constipation"], response: "Stool is normal doctor… sometimes slightly delayed." },

    // DESIRE
    { keywords: ["desire", "craving", "food like", "like eat"], response: "I like sweets and ice cream doctor… (gentle smile)." },

    // AVERSION
    { keywords: ["aversion", "dislike", "don't like"], response: "I don't like fatty food doctor… (mild dislike)." },

    // SWEAT
    { keywords: ["sweat", "perspiration", "how sweat"], response: "Sweat is not much doctor… (normal)." },

    // SLEEP
    { keywords: ["sleep", "sleeping", "sleep problem"], response: "Sleep is disturbed doctor… (emotional) I think too much and cry at night." },

    // DREAMS
    { keywords: ["dream", "dreams", "dreaming"], response: "I dream of being alone doctor… (weepy feeling)." },

    // THERMALS
    { keywords: ["thermal", "cold", "heat", "fever", "chilly"], response: "I cannot tolerate heat doctor… (important) I always want fresh cool air." },

    // MENTAL GENERALS
    { keywords: ["mental", "mentally", "anger", "any anger", "when angry", "angry", "how react", "irritable", "irritates", "anxiety", "anxious", "mood", "mind", "fear", "mood swings", "sad"], response: "I feel very emotional doctor… (tearful voice) I cry easily and want someone to console me." },
  ],

  vitals: {
    stats: [
      { label: "BP", value: "110/70 mmHg" },
      { label: "Pulse", value: "76/min" },
      { label: "Temperature", value: "98.4°F" },
      { label: "Respiration", value: "18/min" },
    ],
  },

  diagnosis: {
    provisional: "Polycystic Ovarian Disease (PCOD)",
    correct: ["pulsatilla", "pulsatilla nigricans"],
    correctText: "✅ Correct. PULSATILLA NIGRICANS is the indicated remedy.",
    wrongText: "❌ Incorrect. The correct remedy is PULSATILLA NIGRICANS.",
    remedyInfo: "PULSATILLA NIGRICANS – Irregular delayed menses; mild weepy temperament; thirstless; better in open air; worse in warm rooms; changeable symptoms; seeks consolation.",
  },

  quiz: [
    {
      question: "Characteristic thermal modality:",
      options: ["Better with heat", "Worse from cold", "Better in open air", "Better in warm room"],
      correctIndex: 2,
    },
    {
      question: "Thirst characteristic:",
      options: ["Excess thirst", "Thirstless", "Drinks large quantities", "Burning thirst"],
      correctIndex: 1,
    },
    {
      question: "Mental state:",
      options: ["Irritable violent", "Weepy mild", "Indifferent", "Suspicious"],
      correctIndex: 1,
    },
    {
      question: "Menses pattern:",
      options: ["Early profuse", "Regular", "Delayed irregular", "Frequent"],
      correctIndex: 2,
    },
    {
      question: "Most suitable remedy:",
      options: ["Sepia", "Pulsatilla", "Lachesis", "Nat mur"],
      correctIndex: 1,
    },
  ],
}

export default def
