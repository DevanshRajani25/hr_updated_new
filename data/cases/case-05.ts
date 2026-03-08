import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 5,
  patientName: "Anjali Mehta",
  age: 29,
  intro: "Doctor… I feel so low these days… nothing excites me anymore.",
  image: "/images/cases/case-05.jpg",
  defaultResponse: "I… I can’t express it well, Doctor. Please ask differently.",
  keywords: [
    {
      keywords: ["hello", "hi", "how are you", "what happened", "why are you here", "problem"],
      response: "Doctor… I feel so low these days… nothing excites me anymore.",
    },
    {
      keywords: ["sad", "cry", "low", "hopeless", "depression", "unhappy", "tearful"],
      response: "Yes… I cry often without reason… it feels like there’s no light in my life.",
    },
    {
      keywords: ["sleep", "night", "insomnia", "rest"],
      response: "I can’t sleep well… I wake up at night and keep thinking about useless things.",
    },
    {
      keywords: ["food", "hunger", "eat", "appetite"],
      response: "I hardly feel hungry… sometimes I skip meals without noticing.",
    },
    {
      keywords: ["energy", "work", "teaching", "routine", "tired"],
      response: "Even teaching my students feels like a burden… I feel tired all the time.",
    },
    {
      keywords: ["fear", "suicide", "die", "end life", "harm"],
      response: "Doctor… sometimes I feel life is meaningless… but I don’t have courage to end it.",
    },
    {
      keywords: ["past", "before", "illness", "history"],
      response: "No major illness before… but I was always sensitive and emotional since childhood.",
    },
  ],
  vitals: {
    stats: [
      { label: "Pulse", value: "72/min" },
      { label: "BP", value: "108/70 mmHg" },
      { label: "Temp", value: "98.4°F" },
      { label: "Respiration", value: "16/min" },
    ],
  },
  diagnosis: {
    provisional: "Depressive Episode",
    correct: ["ignatia", "ignatia amara", "ignatiaamara"],
    remedyInfo:
      "Ignatia Amara: grief, sadness, silent suffering; worse from consolation; sighing, sobbing; contradictory symptoms (laughing and crying).",
  },
  quiz: [
    {
      question: "What is the main complaint of Anjali Mehta?",
      options: ["Cough and cold", "Persistent sadness and hopelessness", "Joint pain", "Stomach ache"],
      correctIndex: 1,
    },
    {
      question: "What is her appetite condition?",
      options: ["Increased hunger", "Normal hunger", "Loss of appetite", "Craving spicy food"],
      correctIndex: 2,
    },
    {
      question: "Which homeopathic remedy is indicated here?",
      options: ["Arnica", "Ignatia Amara", "Belladonna", "Sulphur"],
      correctIndex: 1,
    },
    {
      question: "What is the peculiar keynote of Ignatia?",
      options: [
        "Craving sweets",
        "Contradictory symptoms like laughing and crying together",
        "Fear of water",
        "Trembling hands",
      ],
      correctIndex: 1,
    },
    {
      question: "Which vital sign is correct for Anjali?",
      options: ["Pulse 100/min", "BP 108/70 mmHg", "Temp 101°F", "Respiration 22/min"],
      correctIndex: 1,
    },
  ],
}

export default def
