// Case 6 (Belladonna - Ramesh Patel) - Complete keyword-response mapping
// Acute Tonsillitis with sudden onset, high fever, red throat

export interface KeywordResponse {
  category: string
  keywords: string[]
  responses: string[]
}

export const CASE_6_KEYWORDS: KeywordResponse[] = [
  // 1. NAME
  {
    category: "name",
    keywords: [
      "name",
      "what+name",
      "what's+name",
      "who+you",
      "your+name",
      "tell+name",
      "may+i+know+name",
      "who+are+you",
      "introduce",
      "introduction",
      "identity",
    ],
    responses: ["My name is Ramesh Patel.", "I am Ramesh."],
  },
  // 2. AGE
  {
    category: "age",
    keywords: [
      "age",
      "your+age",
      "what+age",
      "how+old",
      "what's+age",
      "tell+age",
      "may+i+know+age",
      "years+old",
      "how+many+years",
      "current+age",
    ],
    responses: ["I am 32 years old.", "I'm in my early thirties."],
  },
  // 3. MARITAL STATUS
  {
    category: "marital",
    keywords: [
      "married",
      "marital+status",
      "single",
      "husband",
      "spouse",
      "your+marriage",
      "what+marital",
      "are+you+married",
      "marriage",
      "unmarried",
    ],
    responses: ["Yes, I'm married.", "I'm married, doctor."],
  },
  // 4. OCCUPATION
  {
    category: "occupation",
    keywords: [
      "occupation",
      "job",
      "work",
      "profession",
      "service",
      "what+do+you+do",
      "what+work",
      "what+is+your+job",
      "tell+job",
      "what+profession",
      "are+you+working",
      "where+you+work",
      "what+service",
      "your+occupation",
      "what+you+do+in+life",
    ],
    responses: ["I work as a shopkeeper.", "I run a small business."],
  },
  // 5. ADDRESS
  {
    category: "address",
    keywords: [
      "address",
      "house",
      "home",
      "where+live",
      "where+stay",
      "your+house",
      "residence",
      "location",
      "place",
      "where+from",
      "your+address",
      "living+place",
      "current+address",
      "home+address",
      "present+address",
    ],
    responses: ["I live in Ahmedabad, Gujarat.", "I stay in a city area."],
  },
  // 6. CHIEF COMPLAINT
  {
    category: "chief",
    keywords: ["chief+complaint", "main+complaint", "complaint"],
    responses: [
      "I have severe throat pain with redness and fever.",
      "My throat feels very painful and burning.",
      "Suddenly my throat became very bad.",
    ],
  },
  // 7. LOCATION
  {
    category: "location",
    keywords: [
      "where+pain",
      "where+problem",
      "which+part+pain",
      "pain+area",
      "affected+part",
      "which+side",
      "complaint+location",
      "where+ache",
      "your+suffering",
      "which+place+hurt",
      "body+part+pain",
      "exact+pain+place",
      "where+trouble",
      "location+complaint",
      "site+pain",
    ],
    responses: ["The pain is mainly in my throat and tonsils.", "Pain is deep inside the throat."],
  },
  // 8. SENSATION
  {
    category: "sensation",
    keywords: ["sensation", "how+sensation", "how+feel", "how+pain"],
    responses: ["It feels burning and throbbing.", "There is heat and pulsating pain.", "As if my throat is on fire."],
  },
  // 9. AGGRAVATION
  {
    category: "aggravation",
    keywords: [
      "when+worsen",
      "worse",
      "worsen",
      "aggravation",
      "when+aggravation",
      "aggravated+with",
      "aggravates",
      "worse+with",
      "worsen+with",
      "triggers+pain",
      "pain+increases",
      "pain+worse",
      "hurts+more",
      "pain+aggravated",
      "gets+worse",
      "pain+trigger",
    ],
    responses: ["It gets worse on swallowing.", "Pain increases at night.", "Light and noise make me uncomfortable."],
  },
  // 10. AMELIORATION
  {
    category: "amelioration",
    keywords: [
      "when+good",
      "feel+good",
      "amelioration",
      "ameliorates",
      "ameliorates+with",
      "modalities",
      "relief",
      "when+relief",
      "improve",
      "lessen+pain",
      "relieved+with",
      "reduces+pain",
      "pain+eases",
      "pain+decreases",
      "rest",
      "quiet+place",
    ],
    responses: ["I feel slightly better by resting quietly.", "Cold air gives some relief."],
  },
  // 11. CONCOMITANT
  {
    category: "concomitant",
    keywords: [
      "any+other+complaint",
      "other+illness",
      "concomitant",
      "concomitant+complaint",
      "other+problem",
      "any+additional+symptom",
      "other+symptoms",
      "additional+complaint",
      "any+other+issue",
      "coexisting+problem",
      "associated+complaint",
      "also+suffer",
      "other+discomfort",
      "additional+symptom+present",
      "anything+else+wrong",
    ],
    responses: [
      "I have high fever and dryness of mouth.",
      "My face feels hot and red.",
      "I feel restless with headache.",
    ],
  },
  // 12. ONSET
  {
    category: "onset",
    keywords: ["onset", "when+begins", "when+started", "when+starts", "when+start", "when+onset"],
    responses: ["It started suddenly.", "It came very fast without warning."],
  },
  // 13. DURATION
  {
    category: "duration",
    keywords: [
      "how+many+time",
      "duration+pain",
      "how+many+days",
      "how+many+day",
      "how+long",
      "duration",
      "duration+disease",
      "duration+suffering",
    ],
    responses: ["It started since yesterday evening.", "It has been there for one day."],
  },
  // 14. PROGRESSION
  {
    category: "progression",
    keywords: ["progression", "progressive", "how+increase", "how+increases", "how+progress"],
    responses: ["It is getting worse quickly.", "Pain and fever are increasing."],
  },
  // 15. FAMILY HISTORY
  {
    category: "family",
    keywords: [
      "family+history",
      "disease+in+family",
      "parents+health",
      "mother+illness",
      "father+illness",
      "sibling+health",
      "hereditary",
      "genetic+issue",
      "any+illness+in+family",
      "family+disease",
      "family+problem",
      "anyone+sick+home",
      "relatives+illness",
      "family+suffering",
      "runs+in+family",
    ],
    responses: [
      "There is no major illness in my family.",
      "My parents are generally healthy.",
      "No serious disease runs in my family.",
    ],
  },
  // 16. ILLNESS HISTORY (PAST HISTORY)
  {
    category: "past",
    keywords: [
      "past+history",
      "illness+history",
      "medical+history",
      "previous+disease",
      "any+illness+before",
      "childhood+disease",
      "suffered+before",
      "old+health+issue",
      "disease+suffered",
      "previous+complaint",
      "any+treatment+before",
      "past+suffering",
      "earlier+illness",
      "history+of+sickness",
      "before+this+illness",
    ],
    responses: [
      "I did not have any serious illness before.",
      "I usually fall sick rarely.",
      "I had common fever sometimes, nothing major.",
    ],
  },
  // 17. HISTORY (PRESENT ILLNESS)
  {
    category: "history",
    keywords: ["history", "present+history", "illness+started", "how+happen", "what+happened"],
    responses: [
      "I was completely fine, then suddenly this started.",
      "The pain and fever came all of a sudden.",
      "It started with throat pain first, then fever increased.",
    ],
  },
  // 18. APPETITE
  {
    category: "appetite",
    keywords: [
      "appetite",
      "hunger",
      "eat",
      "ate",
      "how+eat",
      "food",
      "meal",
      "diet",
      "eating+habit",
      "like+to+eat",
      "what+you+eat",
      "hungry",
      "taste+for+food",
      "desire+to+eat",
    ],
    responses: ["My appetite is reduced.", "I don't feel like eating."],
  },
  // 19. TONGUE
  {
    category: "tongue",
    keywords: [
      "tongue",
      "show+tongue",
      "coated",
      "tongue+coated",
      "white+tongue",
      "red+tongue",
      "dry+tongue",
      "how+tongue",
      "see+tongue",
      "look+tongue",
      "tongue+feel",
    ],
    responses: ["My tongue is dry and reddish.", "Tongue feels hot."],
  },
  // 20. DESIRE
  {
    category: "desire",
    keywords: [
      "desire",
      "any+desire",
      "craving",
      "cravings",
      "any+cravings",
      "food+like",
      "like+to+eat",
      "want+to+eat",
      "feel+like+eating",
      "particular+food",
      "any+favorite+food",
      "longing",
      "wish+to+eat",
      "special+desire",
      "taste+for",
    ],
    responses: ["I want cold drinks.", "I like cold things."],
  },
  // 21. AVERSION
  {
    category: "aversion",
    keywords: [
      "aversion",
      "aversions+from",
      "aversion+for",
      "don't+like",
      "doesn't+like",
      "dislike",
      "any+dislike",
      "what+don't+like",
      "not+fond+of",
      "don't+prefer",
      "hate+to+eat",
      "any+food+hate",
      "don't+enjoy",
      "refuse+to+eat",
      "strong+dislike",
    ],
    responses: ["I don't want hot food.", "I dislike warm things."],
  },
  // 22. THIRST
  {
    category: "thirst",
    keywords: [
      "thirst",
      "how+drink",
      "thirsty",
      "how+thirsty",
      "water",
      "how+water",
      "drink",
      "need+water",
      "do+you+drink",
      "drinking+habit",
      "do+you+feel+thirsty",
      "amount+of+water",
      "glass+water",
      "frequency+drink",
    ],
    responses: ["I feel very thirsty.", "I want frequent sips of water."],
  },
  // 23. STOOL
  {
    category: "stool",
    keywords: [
      "stool",
      "how+stool",
      "how+passes",
      "passing+stool",
      "bowel",
      "motion",
      "motions",
      "how+bowel",
      "your+stool",
      "pass+stool",
      "loose+stool",
      "hard+stool",
      "constipation",
      "diarrhea",
      "frequency+stool",
    ],
    responses: ["My stools are normal.", "No major problem in stool."],
  },
  // 24. URINE
  {
    category: "urine",
    keywords: [
      "urine",
      "how+urinates",
      "urination",
      "urinates",
      "passing+urine",
      "pass+urine",
      "how+urine",
      "your+urine",
      "pee",
      "passing+pee",
      "micturition",
      "frequency+urine",
      "burning+urine",
      "pain+urine",
      "urine+problem",
    ],
    responses: ["Urine is slightly dark.", "Nothing unusual."],
  },
  // 25. SWEAT
  {
    category: "sweat",
    keywords: [
      "sweat",
      "how+sweat",
      "sweaty",
      "odour",
      "smell",
      "perspiration",
      "any+sweat",
      "sweating",
      "how+perspiration",
      "sweat+much",
      "profuse+sweat",
      "sweat+problem",
      "excessive+sweating",
      "body+odour",
      "smelly+sweat",
    ],
    responses: ["I sweat less than usual.", "My skin feels dry."],
  },
  // 26. SLEEP
  {
    category: "sleep",
    keywords: [
      "sleep",
      "sleep+cycle",
      "how+sleep",
      "any+sleep",
      "do+sleep",
      "sleeping",
      "sleep+well",
      "sleep+problem",
      "disturbed+sleep",
      "night+sleep",
      "day+sleep",
      "sleepiness",
      "can't+sleep",
      "difficulty+sleep",
      "sleep+pattern",
    ],
    responses: ["My sleep is disturbed.", "Pain wakes me up at night."],
  },
  // 27. DREAMS
  {
    category: "dreams",
    keywords: [
      "dreams",
      "dreaming",
      "any+dream",
      "nightmare",
      "bad+dream",
      "dream+last+night",
      "sleep+dream",
      "dream+type",
      "dream+repeated",
      "frightening+dream",
      "pleasant+dream",
      "dream+remembered",
      "dreams+at+night",
      "dreams+during+sleep",
      "dream+situation",
    ],
    responses: ["I don't remember my dreams.", "Sleep is too disturbed."],
  },
  // 28. THERMALS
  {
    category: "thermals",
    keywords: [
      "how+you+feel",
      "cold",
      "fever",
      "heat",
      "thermals",
      "temperature",
      "warmth",
      "cold+body",
      "sweating+heat",
      "thermal",
      "body+temperature",
      "feel+cold",
      "feel+hot",
      "sensitive+to+heat",
      "sensitive+to+cold",
    ],
    responses: ["I feel hot.", "I cannot tolerate heat."],
  },
  // 29. MENTAL GENERALS
  {
    category: "mental",
    keywords: [
      "mental",
      "mental+state",
      "mind",
      "mood",
      "emotions",
      "restless",
      "anxious",
      "fear",
      "irritable",
      "angry",
      "sad",
      "grief",
      "confused",
      "panic",
      "nervous",
      "stress",
      "tension",
      "mood+swings",
    ],
    responses: ["I feel irritable and restless.", "Small things make me angry.", "I don't want anyone to talk much."],
  },
]

// Helper: Get response and avoid repetition
let lastFallbackIndex = -1

export function getRandomResponse(category: string): string {
  const found = CASE_6_KEYWORDS.find((kw) => kw.category === category)
  if (!found || found.responses.length === 0) {
    return "My throat hurts too much right now..."
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

// Helper: Detect keywords and return response
export function detectAndRespond(userInput: string): { category: string; response: string } {
  const normalized = userInput
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()

  const words = normalized.split(" ").filter((w) => w.length > 0)

  // Check for single-word greetings
  if (words.length === 1) {
    const word = words[0]
    const greetings = ["hi", "hii", "hiii", "hello", "hellow", "hyy", "hyyy", "heyy", "hey"]
    if (greetings.includes(word)) {
      return { category: "casual_greeting", response: "Hii doctor" }
    }

    // Check for single-word acknowledgements
    const acknowledgements = ["ok", "okk", "okkk", "okay", "okayy", "ohk", "ohkk"]
    if (acknowledgements.includes(word)) {
      return { category: "casual_ack", response: "Okk!!" }
    }
  }

  // Try to match specific keywords first
  for (const keywordGroup of CASE_6_KEYWORDS) {
    if (keywordGroup.category === "fallback") continue

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
