import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 11,
  patientName: "Ramesh Solanki",
  age: "32 years",
  intro: "My eye looks very bad but honestly it doesn't pain much.",
  image: "/images/cases/case-11-eye-hemorrhage.jpg",
  subtitle: "Subconjunctival hemorrhage",
  defaultResponse: "Please ask about the eye, pain, sensation, when it started, or any other concern…",
  keywords: [],
  diagnosis: {
    provisional: "Subconjunctival hemorrhage",
    correct: ["arnica", "arnica montana", "arnica mont", "arnica mont."],
    correctText:
      "✅ Correct diagnosis!\nThe case indicates ARNICA MONTANA.\nThe condition occurred after minor trauma/strain.\nInjury looks severe but pain is mild, with bruised soreness and aversion to touch — classic Arnica picture.",
    wrongText:
      "❌ Incorrect remedy selection.\nThis case is trauma-based with bruised soreness and minimal pain despite alarming appearance.\nRe-analyze the cause, sensation, and patient behavior.",
    remedyInfo:
      "Arnica Montana: Eye hemorrhage from minor trauma; injury looks worse than it feels; bruised soreness; dislikes touch; calm exterior with internal unease.",
  },
  quiz: [
    {
      question: "The most likely diagnosis in this case is:",
      options: ["Acute conjunctivitis", "Corneal abrasion", "Subconjunctival hemorrhage", "Glaucoma"],
      correctIndex: 2,
    },
    {
      question: "Which feature strongly indicates ARNICA in this case?",
      options: ["Severe throbbing pain", "Purulent discharge", "Injury looks worse than it feels", "Vision loss"],
      correctIndex: 2,
    },
    {
      question: "What is the main cause of the condition in this patient?",
      options: ["Infection", "Allergy", "Minor trauma / strain", "Chronic disease"],
      correctIndex: 2,
    },
    {
      question: "What sensation does the patient describe?",
      options: [
        "Burning and itching",
        "Sharp stabbing pain",
        "Bruised soreness with mild discomfort",
        "Complete numbness",
      ],
      correctIndex: 2,
    },
    {
      question: "The mental state of the patient is best described as:",
      options: [
        "Extremely anxious",
        "Aggressive and angry",
        "Says 'I'm fine' but internally uneasy",
        "Depressed and withdrawn",
      ],
      correctIndex: 2,
    },
  ],
}

export default def
