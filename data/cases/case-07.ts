import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 7,
  patientName: "Rina Patel",
  age: 26,
  intro: "Doctor, my head feels like it will burst… the pain started after being in the sun.",
  image: "/images/cases/case-07.jpg",
  defaultResponse: "Could you ask me about sun exposure, heat, or how I feel in cool places?",
  keywords: [
    {
      keywords: ["name", "what+name", "who+you", "your+name", "introduce"],
      response: "My name is Rina Patel.",
    },
    {
      keywords: ["age", "your+age", "how+old", "years+old"],
      response: "I'm 26 years old.",
    },
    {
      keywords: ["married", "marital", "husband", "spouse"],
      response: "No, I'm not married yet.",
    },
    {
      keywords: ["occupation", "job", "work", "profession", "what+do+you+do"],
      response: "I work as a marketing executive.",
    },
    {
      keywords: ["address", "where+live", "where+stay", "location", "place"],
      response: "I live in Ahmedabad.",
    },
    {
      keywords: ["chief+complaint", "main+complaint", "complaint", "problem", "suffering"],
      response: "Doctor, my head feels like it will burst… the pain started after being in the sun.",
    },
    {
      keywords: ["where+pain", "location", "which+part", "affected+part"],
      response: "The pain is mainly in my forehead and temples… feels like my whole head is congested.",
    },
    {
      keywords: ["sensation", "how+feel", "how+pain", "describe+pain"],
      response:
        "It's a throbbing, pulsating pain, like something is beating inside my head… feels as if my head will explode.",
    },
    {
      keywords: ["sun", "sunlight", "heat", "hot", "bright", "warm"],
      response: "Sunlight makes it much worse… I can't tolerate this heat, even sunlight makes the pain unbearable.",
    },
    {
      keywords: ["worse", "worsen", "aggravation", "aggravated", "triggers"],
      response: "Heat, noise, and moving around increase the pain… it's worst in the sun.",
    },
    {
      keywords: ["better", "relief", "amelioration", "improve", "feel+good"],
      response: "I feel a little better in a cool, dark room… cold applications on my head help.",
    },
    {
      keywords: ["concomitant", "other+complaint", "other+problem", "additional"],
      response: "I feel dizzy and nauseated with the headache… my face feels hot and flushed.",
    },
    {
      keywords: ["history", "when+started", "onset", "began"],
      response:
        "Yesterday I was outside in strong sun for a long time… after that, the headache slowly started and kept increasing.",
    },
    {
      keywords: ["family+history", "parents", "relatives", "hereditary"],
      response: "No major illnesses in my family… my parents are generally healthy.",
    },
    {
      keywords: ["appetite", "hunger", "eat", "food", "meal"],
      response: "I don't feel like eating at all… food smells make me uncomfortable.",
    },
    {
      keywords: ["tongue", "show+tongue", "coated"],
      response: "My tongue feels dry… mouth feels hot and dry.",
    },
    {
      keywords: ["desire", "craving", "like+to+eat", "want+to+eat"],
      response: "I feel like drinking cold water again and again… small sips don't satisfy me.",
    },
    {
      keywords: ["aversion", "dislike", "don't+like", "hate"],
      response: "I don't want hot food or tea.",
    },
    {
      keywords: ["thirst", "thirsty", "drink", "water"],
      response: "Very thirsty… I need cold water frequently.",
    },
    {
      keywords: ["stool", "bowel", "motion", "passes"],
      response: "Stool is normal.",
    },
    {
      keywords: ["urine", "urination", "pass+urine"],
      response: "Urine is slightly reduced today.",
    },
    {
      keywords: ["sweat", "perspiration", "sweaty"],
      response: "I sweat a lot, especially on my face… sweat doesn't relieve my headache.",
    },
    {
      keywords: ["sleep", "sleeping", "night", "rest"],
      response: "I can't sleep properly due to head pain… pain wakes me up.",
    },
    {
      keywords: ["dreams", "nightmare", "dream"],
      response: "No specific dreams.",
    },
    {
      keywords: ["thermal", "temperature", "cold", "hot", "feel"],
      response: "I cannot tolerate heat at all… I feel better in cold surroundings.",
    },
    {
      keywords: ["mental", "mood", "emotions", "anxious", "irritable", "restless"],
      response: "I feel anxious and restless because of the pain… small noise irritates me a lot.",
    },
  ],
  vitals: {
    stats: [
      { label: "Temperature", value: "100.4°F" },
      { label: "Pulse", value: "104/min (bounding)" },
      { label: "BP", value: "150/90 mmHg" },
      { label: "Respiration", value: "22/min" },
    ],
    appearance: "Face flushed, restless, heat intolerance",
  },
  diagnosis: {
    provisional: "Sunstroke / Sun Headache",
    correct: ["glonoinum", "glonoin", "glonoine"],
    wrongText: "❌ Think about sun aggravation + throbbing congestive headache.",
    correctText: "✅ Correct! Glonoinum matches the patient's sun-induced congestive headache.",
    remedyInfo:
      "Glonoinum: violent congestive headache from sun/heat exposure; throbbing, bursting pain; worse from sun, heat, motion; better from cold applications, cool dark room; face flushed; heat intolerance; restlessness and anxiety.",
  },
  quiz: [
    {
      question: "Which factor aggravated the headache most?",
      options: ["Cold air", "Sun exposure", "Fasting", "Night time"],
      correctIndex: 1,
    },
    {
      question: "Key sensation of pain?",
      options: ["Dull ache", "Burning", "Throbbing", "Stitching"],
      correctIndex: 2,
    },
    {
      question: "Best remedy for sunstroke headache?",
      options: ["Belladonna", "Glonoinum", "Nux vomica", "Bryonia"],
      correctIndex: 1,
    },
    {
      question: "Which modality gives relief to the patient?",
      options: ["Warm covering", "Pressure on abdomen", "Cold applications on head", "Lying on right side"],
      correctIndex: 2,
    },
    {
      question: "Which mental state is most prominent in this case?",
      options: [
        "Calm and indifferent",
        "Fear of darkness",
        "Restlessness and anxiety due to pain",
        "Desire for company",
      ],
      correctIndex: 2,
    },
  ],
}

export default def
