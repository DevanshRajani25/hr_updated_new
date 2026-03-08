// Case 10 (Symphytum - Rahul Patel) - Complete keyword-response mapping
// Factory worker with hand fracture - bone injury case with deep pain, soreness, delayed healing

export interface KeywordResponse {
  keywords: string[]
  responses: string[]
  category: string
}

export const CASE_10_KEYWORDS: KeywordResponse[] = [
  // 1. NAME
  {
    category: "name",
    keywords: ["name", "what+name", "who+you", "your+name", "tell+name", "introduce", "identity"],
    responses: [
      "My name is Rahul Patel doctor (calm but slightly uncomfortable)… I work in a factory and this hand injury has made daily work very difficult.",
      "I am Rahul Patel (soft voice, cooperative)… please treat me well doctor, I really need my hand to heal properly.",
    ],
  },

  // 2. AGE
  {
    category: "age",
    keywords: ["age", "how+old", "your+age", "what+age", "years+old", "how+many+years"],
    responses: [
      "I am 26 years old doctor (simple, straightforward)… I'm still young but this injury makes me feel weak from inside.",
      "Doctor, my age is 26 (slightly worried)… at this age such bone pain is not normal, that's why I came.",
    ],
  },

  // 3. MARITAL STATUS
  {
    category: "marital",
    keywords: ["married", "marital+status", "single", "husband", "spouse", "marriage", "unmarried"],
    responses: [
      "I am unmarried doctor (neutral, slightly shy)… but my family depends on my work.",
      "No doctor, I am not married yet (concerned)… because of this injury, everything feels delayed.",
    ],
  },

  // 4. OCCUPATION
  {
    category: "occupation",
    keywords: ["occupation", "job", "work", "profession", "what+do+you+do", "what+work", "service", "employer"],
    responses: [
      "I work as a factory worker (tired, honest)… I use my hands a lot, lifting and machine work, that's how this injury happened.",
      "Doctor, I do factory job (helpless)… without my hand working properly, I can't earn.",
    ],
  },

  // 5. ADDRESS
  {
    category: "address",
    keywords: ["address", "where+live", "where+stay", "home", "residence", "location", "place", "area"],
    responses: [
      "I live in Rajkot, Movdi area (simple)… nearby to the factory.",
      "My address is Rajkot, Movdi (calm)… I came here from there only.",
    ],
  },

  // 6. CHIEF COMPLAINT
  {
    category: "chief",
    keywords: ["chief+complaint", "main+complaint", "complaint", "problem"],
    responses: [
      "Doctor, my main problem is severe pain in my hand bone (deep suffering)… after injury it feels sore deep inside.",
      "I am suffering from hand bone pain (distressed)… even after rest it doesn't feel fully healed.",
    ],
  },

  // 7. LOCATION OF COMPLAINT
  {
    category: "location",
    keywords: ["where+pain", "location+pain", "which+side", "where+exactly+pain", "which+part", "affected+area"],
    responses: [
      "The pain is exactly in this hand bone (points)… near the finger, deep inside, not on skin.",
      "Doctor, pain is in the bone itself (serious)… touching it gives deep soreness.",
    ],
  },

  // 8. SENSATION
  {
    category: "sensation",
    keywords: ["sensation", "how+sensation", "how+feel", "how+pain", "feels+like"],
    responses: [
      "It feels like deep aching and sore pain (uneasy)… as if bone itself is hurt.",
      "There is dull, deep pain (sensitive)… not sharp, but very uncomfortable from inside.",
    ],
  },

  // 9. AGGRAVATION / MODALITIES
  {
    category: "aggravation",
    keywords: [
      "when+worsen",
      "worse",
      "worsen",
      "aggravation",
      "when+aggravation",
      "aggravates",
      "worse+with",
      "triggers+pain",
      "pain+increases",
    ],
    responses: [
      "Pain gets worse when I use my hand (frustrated)… especially during work.",
      "Doctor, even slight movement increases pain (irritated)… pressure makes it worse.",
    ],
  },

  // 10. AMELIORATION
  {
    category: "amelioration",
    keywords: [
      "when+good",
      "feel+good",
      "amelioration",
      "ameliorates",
      "relief",
      "when+relief",
      "improve",
      "better",
      "rest",
    ],
    responses: [
      "Pain feels a little better with rest (relieved)… when I keep my hand still.",
      "Keeping the hand supported gives relief (hopeful)… but pain comes back again.",
    ],
  },

  // 11. CONCOMITANT SYMPTOMS
  {
    category: "concomitant",
    keywords: [
      "any+other+complaint",
      "other+symptom",
      "other+problem",
      "concomitant",
      "along+with",
      "also+suffer",
      "additional+symptom",
    ],
    responses: [
      "Along with pain, there is weakness in hand (low energy)… I feel tired easily.",
      "Sometimes swelling and soreness come together (worried)… especially after work.",
    ],
  },

  // 12. ONSET
  {
    category: "onset",
    keywords: ["onset", "when+start", "when+started", "when+begins", "how+happened"],
    responses: [
      "This injury happened in the factory (matter-of-fact)… I hit my hand hard on machinery.",
      "It started suddenly (regretful)… when I had an accident at work.",
    ],
  },

  // 13. DURATION
  {
    category: "duration",
    keywords: ["how+long", "how+many+days", "how+much+time", "duration", "since+when"],
    responses: [
      "It's been causing problems for several days now (tired)… the pain hasn't reduced much.",
      "Doctor, I've been suffering for a week (concerned)… and it's getting worse.",
    ],
  },

  // 14. PROGRESSION
  {
    category: "progression",
    keywords: ["progression", "how+increase", "how+progressive", "getting+worse"],
    responses: [
      "The pain is still intense (frustrated)… it hasn't improved despite rest.",
      "It feels like it's not healing (worried)… the soreness is still very deep.",
    ],
  },

  // 15. HISTORY OF PRESENT ILLNESS
  {
    category: "history",
    keywords: ["history", "any+history", "past", "in+past", "before+this"],
    responses: [
      "No major illness before (simple)… only small injuries from work.",
      "I never had bone problem earlier (thinking)… this is first time so serious.",
    ],
  },

  // 16. FAMILY HISTORY
  {
    category: "family",
    keywords: ["family", "parents", "partner", "family+history", "relatives", "hereditary"],
    responses: [
      "No bone disease in family (neutral)… everyone is generally healthy.",
      "Doctor, no such illness runs in family (calm)… this injury happened due to accident.",
    ],
  },

  // 17. APPETITE
  {
    category: "appetite",
    keywords: ["appetite", "hunger", "eat", "eating", "meal", "food", "hungry"],
    responses: [
      "My appetite is normal (okay)… but pain reduces my interest in food.",
      "I eat regularly (simple)… but sometimes pain distracts me.",
    ],
  },

  // 18. DESIRE
  {
    category: "desire",
    keywords: ["desire", "craving", "food+like", "like+eat", "cravings", "want+eat"],
    responses: [
      "I like simple home food (plain)… nothing special.",
      "No strong cravings (neutral)… just want to recover soon.",
    ],
  },

  // 19. AVERSION
  {
    category: "aversion",
    keywords: ["aversion", "dislike", "don't+like", "hate", "avoid"],
    responses: [
      "I don't like very spicy food (mild dislike)… it doesn't suit me.",
      "Oily food doesn't feel good (uneasy)… I avoid it.",
    ],
  },

  // 20. THIRST
  {
    category: "thirst",
    keywords: ["thirst", "thirsty", "water", "water+drink", "drink", "drinking"],
    responses: ["Thirst is normal (balanced)… I drink water regularly.", "No excess thirst (neutral)… normal habit."],
  },

  // 21. TONGUE
  {
    category: "tongue",
    keywords: ["tongue", "coated", "white", "red", "appearance"],
    responses: [
      "My tongue looks normal (straightforward)… nothing unusual.",
      "Doctor, tongue is fine (simple)… all normal.",
    ],
  },

  // 22. URINE
  {
    category: "urine",
    keywords: ["urine", "urinate", "urinates", "pass+urine", "urination"],
    responses: ["Urine is normal (simple)… no pain or burning.", "No urinary problem (calm)… everything normal."],
  },

  // 23. STOOL
  {
    category: "stool",
    keywords: ["stool", "bowel", "constipation", "motion", "loose"],
    responses: ["Stool is regular (normal)… no issues.", "No constipation or loose motion (okay)… normal."],
  },

  // 24. SWEAT
  {
    category: "sweat",
    keywords: ["sweat", "perspiration", "how+sweat", "sweating", "odour"],
    responses: ["I sweat normally (neutral)… especially during work.", "Sweat has no strong smell (okay)… usual."],
  },

  // 25. SLEEP
  {
    category: "sleep",
    keywords: ["sleep", "sleeping", "sleep+problem", "insomnia", "rest", "wake"],
    responses: [
      "Sleep is disturbed due to pain (tired)… turning hand hurts.",
      "At night pain troubles me (restless)… sleep breaks.",
    ],
  },

  // 26. DREAMS
  {
    category: "dreams",
    keywords: ["dream", "dreams", "dreaming", "nightmare", "bad+dream"],
    responses: ["No specific dreams (plain)… sleep is light.", "Sometimes dream of work (stress)… because of injury."],
  },

  // 27. THERMALS
  {
    category: "thermal",
    keywords: ["thermal", "cold", "heat", "fever", "chilly", "temperature"],
    responses: [
      "I feel comfortable normally (balanced)… no heat or cold problem.",
      "No sensitivity to temperature (neutral)… body is fine.",
    ],
  },

  // 28. MENTAL GENERALS (SYMPHYTUM CORE - KEY)
  {
    category: "mental",
    keywords: ["mental", "anger", "irritable", "anxiety", "anxious", "fear", "mood", "emotional"],
    responses: [
      "Mentally I feel frustrated (suppressed irritation)… I want to heal fast and go back to work.",
      "I feel quiet but worried (internal stress)… injury inside bone scares me.",
    ],
  },

  // 29. CASUAL GREETING RULE (MANDATORY)
  {
    category: "casual_greeting",
    keywords: ["h"],
    responses: [
      "Hello doctor!! (polite, slightly tired but respectful) Please ask me, my hand pain is troubling me a lot.",
    ],
  },

  // 30. FALLBACK
  {
    category: "fallback",
    keywords: [],
    responses: [
      "Doctor, I'm sorry... Could you please ask me more clearly? I'm having trouble understanding.",
      "I don't fully understand your question, doctor. Could you rephrase it?",
    ],
  },
]

// Helper function to get random response from a category
let lastFallbackIndex = -1

export function getRandomResponse(category: string): string {
  const found = CASE_10_KEYWORDS.find((kw) => kw.category === category)
  if (!found || found.responses.length === 0) {
    return "Doctor, I'm sorry... I don't understand what you're asking."
  }

  if (category === "fallback") {
    let idx = Math.floor(Math.random() * found.responses.length)
    if (found.responses.length > 1 && idx === lastFallbackIndex) {
      idx = (idx + 1) % found.responses.length
    }
    lastFallbackIndex = idx
    return found.responses[idx]
  }

  return found.responses[Math.floor(Math.random() * found.responses.length)]
}

// Helper function to detect keywords and get response
export function detectAndRespond(userInput: string): { category: string; response: string } {
  const normalized = userInput
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()

  // Check for single-word casual greetings (starts with 'h' or 'H')
  const words = normalized.split(" ").filter((w) => w.length > 0)

  if (words.length === 1) {
    const word = words[0]
    if (word.startsWith("h")) {
      return {
        category: "casual_greeting",
        response:
          "Hello doctor!! (polite, slightly tired but respectful) Please ask me, my hand pain is troubling me a lot.",
      }
    }
  }

  // Try to match specific keywords first (2+ keywords required)
  for (const keywordGroup of CASE_10_KEYWORDS) {
    if (keywordGroup.category === "fallback") continue

    for (const keyword of keywordGroup.keywords) {
      const keywordTokens = keyword.split("+")
      // All tokens must be present (2+ keywords requirement)
      if (keywordTokens.length >= 2) {
        const matches = keywordTokens.every((token) => normalized.includes(token))
        if (matches) {
          return {
            category: keywordGroup.category,
            response: getRandomResponse(keywordGroup.category),
          }
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
