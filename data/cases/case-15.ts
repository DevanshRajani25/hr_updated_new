import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 15,
  patientName: "Suresh Mehta",
  age: 38,
  intro: "Doctor, long-standing dry cough with chest pain. Talking increases my cough.",
  image: "/images/cases/case-15-cough.jpg",
  defaultResponse: "Please ask briefly... talking worsens my cough.",
  keywords: [
    {
      keywords: ["name"],
      response: "My name is Suresh doctor. Speaks slowly, holds chest. Please ask briefly, talking increases my cough.",
    },
    {
      keywords: ["age", "how", "old"],
      response: "I'm 38 years old doctor. Serious tone. I just want rest.",
    },
    {
      keywords: ["occupation", "what", "do", "doing"],
      response: "I'm an accountant doctor. Annoyed. Sitting long hours with cough is painful.",
    },
    {
      keywords: ["marriage", "married", "single"],
      response: "Yes doctor, married. Slightly irritated. Everyone keeps asking questions.",
    },
    {
      keywords: ["address", "where", "live", "living"],
      response: "I live in Surat doctor. Low voice. Climate change affects me.",
    },
    {
      keywords: ["main", "complaint", "chief"],
      response: "Dry cough with chest pain doctor. Presses chest. Every cough hurts.",
    },
    {
      keywords: ["where", "pain", "which", "side", "location"],
      response: "Pain is in the chest doctor. Holds chest firmly. Especially while coughing.",
    },
    {
      keywords: ["sensation", "how", "feel", "sharp", "stitching"],
      response: "It feels stitching pain doctor. Grimaces. Like something is tearing.",
    },
    {
      keywords: ["aggravation", "worse", "worsen", "when", "increase", "modality"],
      response: "Movement makes it worse doctor. Stays still. Even turning increases pain. Talking worsens cough.",
    },
    {
      keywords: ["amelioration", "relief", "better", "good"],
      response: "Rest gives relief doctor. Relaxes slightly. Lying still helps. Pressing the chest helps.",
    },
    {
      keywords: ["concomitant", "other", "complaint", "symptom"],
      response: "I feel very irritable doctor. Short replies. Don't like disturbance. Dry mouth and thirst.",
    },
    {
      keywords: ["onset", "when", "start", "started", "begins"],
      response: "It started gradually doctor. Thinking. Worsened with time.",
    },
    {
      keywords: ["duration", "how", "long", "days", "time"],
      response: "Around 2-3 months doctor. Tired. Not improving.",
    },
    {
      keywords: ["progression", "increase", "progressive"],
      response: "Yes doctor, it is increasing. Concerned. Pain is more now.",
    },
    {
      keywords: ["history", "past"],
      response: "No major illness before doctor. Irritated. This cough is the main issue now.",
    },
    {
      keywords: ["family", "parents", "partner"],
      response: "No significant family illness doctor. Brief reply.",
    },
    {
      keywords: ["appetite", "hunger", "eat", "eating", "meal"],
      response: "Appetite is normal doctor. Plain tone. No interest in food.",
    },
    {
      keywords: ["thirst", "thirsty", "water", "drink"],
      response: "I feel very thirsty doctor. Firm. Drink large quantities. Prefer cold water.",
    },
    {
      keywords: ["tongue"],
      response: "Tongue looks dry doctor. Brief.",
    },
    {
      keywords: ["urine", "urinate"],
      response: "Urine is normal doctor. Short answer.",
    },
    {
      keywords: ["stool", "bowel", "constipation"],
      response: "Stool is dry doctor. Brief reply. Sometimes constipated.",
    },
    {
      keywords: ["desire", "craving", "like"],
      response: "No special cravings doctor. Indifferent.",
    },
    {
      keywords: ["aversion", "dislike", "don't"],
      response: "Don't like disturbance or talking doctor. Irritated.",
    },
    {
      keywords: ["sweat", "perspiration"],
      response: "Normal sweating doctor. Neutral.",
    },
    {
      keywords: ["sleep", "sleeping", "problem"],
      response: "Sleep disturbed doctor. Irritated. Cough wakes me. Poor sleep. Tired. Pain disturbs rest.",
    },
    {
      keywords: ["dream", "dreams", "dreaming"],
      response: "No particular dreams doctor. Short reply.",
    },
    {
      keywords: ["thermal", "cold", "heat", "fever", "chilly"],
      response: "I feel more comfortable in cool air doctor. Neutral. Heat worsens discomfort.",
    },
    {
      keywords: ["mental", "anger", "irritable", "irritates", "anxiety", "anxious", "mood", "mind", "fear", "sad"],
      response: "I get irritated easily doctor. Stern face. Don't like being questioned. I want silence and rest. Disturbance annoys me.",
    },
    {
      keywords: ["cough", "dry", "painful"],
      response: "Persistent dry cough with chest pain doctor. Every cough causes sharp pain.",
    },
  ],
  vitals: {
    stats: [
      { label: "BP", value: "126/80 mmHg" },
      { label: "Pulse", value: "82/min" },
      { label: "Temperature", value: "98.4°F" },
      { label: "Respiration", value: "22/min" },
      { label: "General Condition", value: "Irritable, wants rest, avoids movement" },
      { label: "Chest Exam", value: "Dry cough, chest pain on coughing, no expectoration" },
    ],
  },
  diagnosis: {
    provisional: "Chronic dry pleuritic cough",
    correct: ["bryonia"],
    correctText: "✅ Correct. BRYONIA ALBA is the indicated remedy.",
    wrongText: "❌ Incorrect. The correct remedy is BRYONIA ALBA - dry painful cough worse from movement and talking, better by rest and pressure, with irritable temperament.",
    remedyInfo:
      "BRYONIA ALBA - Dry painful cough worse from motion and talking, better by rest and pressure. Patient irritable, serious, wants silence. Classic pleuritic cough with chest pain on coughing.",
  },
  quiz: [
    {
      question: "Key aggravation in this case:",
      options: ["Night", "Cold air", "Movement", "Eating"],
      correctIndex: 2,
    },
    {
      question: "Nature of patient:",
      options: ["Talkative", "Anxious", "Irritable", "Fearful"],
      correctIndex: 2,
    },
    {
      question: "Best relief comes from:",
      options: ["Walking", "Warm drinks", "Rest", "Open air"],
      correctIndex: 2,
    },
    {
      question: "Type of cough:",
      options: ["Productive", "Loose", "Dry painful", "Spasmodic"],
      correctIndex: 2,
    },
    {
      question: "Best indicated remedy:",
      options: ["Rumex", "Drosera", "Bryonia", "Spongia"],
      correctIndex: 2,
    },
  ],
}

export default def
