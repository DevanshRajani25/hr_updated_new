import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 3,
  patientName: "Neha Shah",
  age: 31,
  intro:
    "Doctor, I have these red, itchy patches on my neck since 2 weeks. The itching is very bad, especially at night, and it burns too.",
  image: "/images/cases/case-03-skin.jpg",
  defaultResponse: "I can't explain properly, Doctor. Please ask in another way.",
  keywords: [
    {
      keywords: ["itching", "scratch", "burning", "eruption", "rash", "neck", "skin"],
      response: "Yes Doctor, the patches itch constantly and burn badly on my neck.",
    },
    {
      keywords: ["since when", "how long", "duration", "started"],
      response: "This problem started about 2 weeks ago.",
    },
    {
      keywords: ["spread", "increase", "worse"],
      response: "Yes, it is slowly spreading to the sides of my neck.",
    },
    {
      keywords: ["better", "worse", "relief", "aggravation", "modalities"],
      response: "Itching is worse at night and from sweating. Cold water wash gives me some relief.",
    },
    {
      keywords: ["other symptoms", "associated", "together", "concomitant", "eyes"],
      response: "Sometimes my eyes burn when the itching is severe.",
    },
    {
      keywords: ["past", "previous", "before", "earlier"],
      response: "I had similar skin eruptions on my arms last year.",
    },
    {
      keywords: ["family", "hereditary", "anyone else", "mother", "father"],
      response: "Yes, my mother also has skin allergy problems.",
    },
    {
      keywords: ["appetite", "hunger"],
      response: "My appetite is normal.",
    },
    {
      keywords: ["thirst", "water", "drink"],
      response: "I feel very thirsty and drink water frequently.",
    },
    {
      keywords: ["sleep", "night"],
      response: "My sleep is disturbed because itching is worse at night.",
    },
    {
      keywords: ["mind", "mood", "mental", "emotion"],
      response: "I feel very irritable and restless because of this constant itching.",
    },
  ],
  vitals: {
    summary: [
      "Chief Complaint: Itchy, burning red patches on neck",
      "Onset: Since 2 weeks; slowly spreading",
      "Modalities: Worse at night and from sweating; better by cold applications",
      "Concomitant: Burning in eyes",
      "Past History: Similar eruptions last year",
      "Family History: Mother has skin allergies",
      "Generals: Appetite normal; thirst increased; sleep disturbed",
      "Mind: Irritable, restless",
    ],
  },
  diagnosis: {
    provisional: "Eczema / Allergic Dermatitis",
    correct: ["sulphur", "sulfur"],
    wrongText: "Not correct, Doctor. Please try again.",
    correctText: "✅ Correct. Sulphur matches the picture.",
    remedyInfo:
      "Sulphur: severe itching worse at night; burning eruptions; relief from cold; recurring skin problems; increased thirst; disturbed sleep; irritable/restless.",
  },
  quiz: [
    {
      question: "What is the KEY modality that suggests Sulphur over other skin remedies in Neha's case?",
      options: [
        "Itching better from warmth",
        "Itching worse at night with burning relief from cold",
        "Itching only during daytime",
        "Itching with no thermal modality",
      ],
      correctIndex: 1,
    },
    {
      question: "The CONCOMITANT symptom of burning eyes along with skin eruptions is characteristic of which miasm?",
      options: ["Psoric miasm", "Sycotic miasm", "Syphilitic miasm", "Tubercular miasm"],
      correctIndex: 0,
    },
    {
      question:
        "Neha mentions her father had 'skin issues and acidity problems.' This family history primarily indicates:",
      options: [
        "Genetic predisposition with no homeopathic significance",
        "Strong Sulphur constitutional tendency across generations",
        "Need for allopathic treatment first",
        "Contraindication for homeopathic treatment",
      ],
      correctIndex: 1,
    },
    {
      question: "The RECURRING nature of Neha's skin eruptions (last year on arms, now on neck) suggests:",
      options: [
        "Acute remedy needed only",
        "Deep-seated chronic miasmatic condition requiring constitutional treatment",
        "Simple allergy with no deeper pathology",
        "Vitamin deficiency only",
      ],
      correctIndex: 1,
    },
    {
      question:
        "Which of the following MENTAL states combined with the physical symptoms most strongly confirms Sulphur?",
      options: [
        "Patient is calm and indifferent",
        "Irritability and restlessness from constant itching with aversion to heat",
        "Extreme fear and anxiety about the condition",
        "Depression with desire for company",
      ],
      correctIndex: 1,
    },
  ],
}

export default def
