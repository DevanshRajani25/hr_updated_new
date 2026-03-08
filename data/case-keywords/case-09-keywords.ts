// Case 9 (Cantharis - Rita Sharma) - Complete keyword-response mapping
// Acute cystitis / UTI with intense burning and cutting pain

export interface KeywordResponse {
  category: string
  keywords: string[]
  responses: string[]
}

export const CASE_9_KEYWORDS: KeywordResponse[] = [
  // 1. NAME
  {
    category: "name",
    keywords: ["name", "what+name"],
    responses: ["Rita Sharma"],
  },
  // 2. AGE
  {
    category: "age",
    keywords: ["age", "how+old+you"],
    responses: ["30 years"],
  },
  // 3. OCCUPATION
  {
    category: "occupation",
    keywords: ["occupation", "what+do", "doing", "do"],
    responses: ["School Teacher"],
  },
  // 4. MARITAL STATUS
  {
    category: "marital",
    keywords: ["marriage", "married", "are+you+married", "single"],
    responses: ["Married"],
  },
  // 5. ADDRESS
  {
    category: "address",
    keywords: ["address", "where+live", "living"],
    responses: ["Urban residential area"],
  },
  // 6. CHIEF COMPLAINT
  {
    category: "chief",
    keywords: ["main+complain", "complaint", "chief+complaint"],
    responses: [
      "I experience severe burning and cutting pain during urination.",
      "Passing urine feels like fire inside.",
      "The pain is so intense that I feel like crying.",
    ],
  },
  // 7. LOCATION
  {
    category: "location",
    keywords: ["where+pain", "which+side", "location+pain", "where+exactly+pain"],
    responses: [
      "Pain is in the lower abdomen and urinary passage.",
      "Discomfort near bladder and urethra.",
      "Burning spreads through urinary tract.",
    ],
  },
  // 8. SENSATION
  {
    category: "sensation",
    keywords: ["sensation", "how+sensation", "how+feel", "how+pain"],
    responses: [
      "Burning and cutting like acid.",
      "Sharp and intolerable pain.",
      "Constant burning even after urination.",
    ],
  },
  // 9. AGGRAVATION
  {
    category: "aggravation",
    keywords: ["aggravation", "aggravates", "worse", "worsen", "when+worsen", "when+pain+increase", "modality"],
    responses: ["Pain worsens while passing urine.", "Small quantity increases burning.", "Worse at night."],
  },
  // 10. AMELIORATION
  {
    category: "amelioration",
    keywords: ["amelioration", "ameliorates", "relief", "feel+good", "when+relief", "modality"],
    responses: ["Slight relief after urination.", "Warmth gives mild relief.", "Keeping still helps slightly."],
  },
  // 11. CONCOMITANT
  {
    category: "concomitant",
    keywords: ["concomitant", "any+other+complaint", "other", "other+symptom"],
    responses: ["Constant urge with burning.", "Restlessness due to pain.", "Weakness with urinary pain."],
  },
  // 12. ONSET
  {
    category: "onset",
    keywords: ["onset", "when+start", "when+started", "when+begins"],
    responses: ["Started suddenly two days ago."],
  },
  // 13. DURATION
  {
    category: "duration",
    keywords: ["duration", "how+long", "how+many+days", "how+much+time"],
    responses: ["Started two days ago."],
  },
  // 14. PROGRESSION
  {
    category: "progression",
    keywords: ["progression", "how+increase", "how+progressive"],
    responses: ["Mild burning became severe."],
  },
  // 15. HISTORY OF PRESENT ILLNESS
  {
    category: "history",
    keywords: ["history", "any+history", "past", "in+past"],
    responses: ["Started suddenly two days ago.", "Mild burning became severe.", "Urge every hour."],
  },
  // 16. FAMILY HISTORY
  {
    category: "family",
    keywords: ["family", "parents", "partner", "family+history"],
    responses: ["No family history of urinary complaints."],
  },
  // 17. APPETITE
  {
    category: "appetite",
    keywords: ["appetite", "hunger", "eat", "eating", "meal"],
    responses: ["Reduced appetite since pain started."],
  },
  // 18. THIRST
  {
    category: "thirst",
    keywords: ["thirst", "thirsty", "water", "water+drink"],
    responses: ["Thirsty with small sips."],
  },
  // 19. TONGUE
  {
    category: "tongue",
    keywords: ["tongue"],
    responses: ["Dry and slightly red."],
  },
  // 20. URINE
  {
    category: "urine",
    keywords: ["urine", "urinate", "urinates", "pass+urine"],
    responses: ["Scanty, frequent, intense burning."],
  },
  // 21. STOOL
  {
    category: "stool",
    keywords: ["stool", "bowel", "constipation"],
    responses: ["Bowel movements are normal."],
  },
  // 22. DESIRE
  {
    category: "desire",
    keywords: ["desire", "craving", "food+like", "like+eat"],
    responses: ["Desire for cold drinks."],
  },
  // 23. AVERSION
  {
    category: "aversion",
    keywords: ["aversion", "dislike", "don’t+like"],
    responses: ["Aversion to spicy food."],
  },
  // 24. SWEAT
  {
    category: "sweat",
    keywords: ["sweat", "perspiration", "how+sweat"],
    responses: ["No abnormal sweat."],
  },
  // 25. SLEEP
  {
    category: "sleep",
    keywords: ["sleep", "sleeping", "sleep+problem"],
    responses: ["Disturbed due to pain."],
  },
  // 26. DREAMS
  {
    category: "dreams",
    keywords: ["dream", "dreams", "dreaming"],
    responses: ["No specific dreams."],
  },
  // 27. THERMALS
  {
    category: "thermal",
    keywords: ["thermal", "cold", "heat", "fever", "chilly"],
    responses: ["Feels hot, prefers cool."],
  },
  // 28. MENTAL GENERALS
  {
    category: "mental",
    keywords: ["mental", "anger", "irritable", "anxiety", "anxious", "fear", "mood"],
    responses: [
      "Extremely irritable due to pain.",
      "Anxious because pain is uncontrollable.",
      "Unable to remain calm.",
    ],
  },
]

// Helper: Get response and avoid repetition
const lastFallbackIndex = -1

export function getRandomResponse(category: string): string {
  const found = CASE_9_KEYWORDS.find((kw) => kw.category === category)
  if (!found || found.responses.length === 0) {
    return "I'm in so much pain, doctor..."
  }

  if (category === "fallback") {
    return "I'm not sure how to answer that... please ask about my burning urination or pain."
  }

  return found.responses[Math.floor(Math.random() * found.responses.length)]
}

// Helper: Detect keywords and return response
export function detectAndRespond(userInput: string): { category: string; response: string } {
  const normalized = userInput
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()

  const words = normalized.split(" ").filter((w) => w.length > 0)

  // 👋 CASUAL GREETING RULE (GLOBAL)
  if (words.length === 1) {
    const word = words[0]
    if (word.startsWith("h") && word.length >= 2 && word.length <= 5) {
      return { category: "casual_greeting", response: "Hello, doctor!" }
    }
    if (word.startsWith("o") && (word === "ok" || word === "okay" || word === "okk" || word === "ohk")) {
      return { category: "casual_ack", response: "OKK!!" }
    }
  }

  // 2. Multi-Keyword Matching (+) and logical AND
  for (const keywordGroup of CASE_9_KEYWORDS) {
    for (const keyword of keywordGroup.keywords) {
      const keywordTokens = keyword.split("+")
      const matches = keywordTokens.every((token) => normalized.includes(token))
      if (matches) {
        return {
          category: keywordGroup.category,
          response: getRandomResponse(keywordGroup.category),
        }
      }
    }
  }

  // If no keyword matched, return fallback response
  return {
    category: "fallback",
    response: getRandomResponse("fallback"),
  }
}
