// Case 3 (Sulphur - Neha Shah) - Complete keyword-response mapping
// Itchy, burning red patches on neck - emotional tone reflecting Sulphur features

export interface KeywordResponse {
  keywords: string[]
  responses: string[]
  category: string
}

export const CASE_3_KEYWORDS: KeywordResponse[] = [
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
    responses: ["My name is Neha Shah.", "I'm Neha Shah… suffering from these itchy patches on my neck."],
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
    responses: ["I'm 31 years old.", "Thirty-one… and this itching is driving me crazy."],
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
    responses: ["Yes, I'm married.", "I'm married… my husband suggests I wash with cold water when it burns."],
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
    responses: [
      "I work in a textile shop.",
      "I'm a sales assistant at a cloth store… standing all day makes me sweat, which worsens the itching.",
    ],
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
    responses: ["I live in Ahmedabad.", "My home is in Ahmedabad… near the old city area."],
  },
  // 6. CHIEF COMPLAINT
  {
    category: "chief",
    keywords: ["chief+complaint", "main+complaint", "complaint"],
    responses: [
      "I have these red, itchy patches on my neck since 2 weeks.",
      "The itching is unbearable, especially at night… and it burns too.",
    ],
  },
  // 7. LOCATION OF COMPLAINT
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
    responses: ["The patches are on my neck.", "It's mainly on my neck… spreading to the sides now."],
  },
  // 8. SENSATION
  {
    category: "sensation",
    keywords: ["sensation", "how+sensation", "how+feel", "how+pain"],
    responses: ["It itches constantly and burns badly.", "The burning sensation is intense, like my skin is on fire."],
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
      "aggravated+with",
      "aggravates",
      "worse+with",
      "worsen+with",
      "triggers+pain",
      "pain+increases",
      "pain+worse",
      "hurts+more",
      "gets+worse",
      "pain+trigger",
    ],
    responses: [
      "The itching is worse at night and from sweating.",
      "It gets unbearable when I'm warm or when I sweat.",
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
      "cold+compress",
      "calms+down",
    ],
    responses: ["Cold water wash gives me some relief.", "I feel better when I apply something cold to it."],
  },
  // 11. CONCOMITANT SYMPTOMS
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
      "Sometimes my eyes burn when the itching is severe.",
      "Along with the itching, my eyes feel irritated and burning.",
    ],
  },
  // 12. ONSET
  {
    category: "onset",
    keywords: ["onset", "when+begins", "when+started", "when+starts", "when+start", "when+onset"],
    responses: ["This problem started about 2 weeks ago.", "It began suddenly around two weeks back."],
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
    responses: ["It's been 2 weeks now.", "Two weeks of constant itching and burning."],
  },
  // 14. PROGRESSION
  {
    category: "progression",
    keywords: ["progression", "progressive", "how+increase", "how+increases", "how+progress"],
    responses: [
      "Yes, it is slowly spreading to the sides of my neck.",
      "The patches are getting bigger and more itchy.",
    ],
  },
  // 15. FAMILY HISTORY
  {
    category: "family",
    keywords: [
      "family+history",
      "history",
      "family",
      "any+history",
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
      "Yes doctor, there is a family history… my father had skin issues and acidity problems.",
      "Some problems do run in my family, especially digestion and skin complaints.",
      "I think my family members also had similar issues, mostly related to heat and stomach.",
    ],
  },
  // 16. ILLNESS HISTORY
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
      "I had similar skin eruptions on my arms last year.",
      "I've had skin problems before, but they keep coming back.",
    ],
  },
  // 17. APPETITE
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
    responses: ["My appetite is normal.", "I eat regularly, no problems with appetite."],
  },
  // 18. TONGUE
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
      "burning+tongue",
      "inflamed+tongue",
      "rough+tongue",
      "tongue+colour",
    ],
    responses: ["My tongue looks slightly coated.", "It's a bit white-coated, doctor."],
  },
  // 19. DESIRE
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
    responses: ["I like cold drinks and sweets.", "I crave cold things, especially when I'm itching."],
  },
  // 20. AVERSION
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
    responses: ["I don't like spicy or oily food.", "Hot and spicy things make me uncomfortable."],
  },
  // 21. THIRST
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
    responses: ["I feel very thirsty and drink water frequently.", "My thirst is increased, I keep drinking water."],
  },
  // 22. STOOL
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
    responses: ["My bowel movements are irregular, sometimes constipated.", "I have some constipation issues."],
  },
  // 23. URINE
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
    responses: ["Urination is normal, no issues.", "No problem with urine."],
  },
  // 24. SWEAT
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
      "sweats",
      "sweates",
      "perspirates",
      "perspirating",
      "perspire",
      "how+perspiration",
      "sweat+much",
      "profuse+sweat",
      "sweat+problem",
      "excessive+sweating",
      "body+odour",
      "smelly+sweat",
    ],
    responses: [
      "I sweat a lot, especially on my head and upper body… even without much work.",
      "Yes doctor, there is excessive sweating, mostly feels warm and uncomfortable.",
      "Perspiration is more when I feel heat, and sometimes it has an unpleasant smell.",
    ],
  },
  // 25. SLEEP
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
    responses: [
      "My sleep is disturbed because itching is worse at night.",
      "I can't sleep well, the itching keeps me awake.",
    ],
  },
  // 26. DREAMS
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
    responses: ["I don't remember my dreams much.", "No specific dreams that I recall."],
  },
  // 27. THERMALS
  {
    category: "thermal",
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
    responses: ["I feel hot and prefer cool air.", "Warmth makes me uncomfortable, I like coolness."],
  },
  // 28. MENTAL GENERALS
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
    responses: [
      "I feel very irritable and restless because of this constant itching.",
      "This itching makes me so frustrated and angry.",
    ],
  },
  // 29. FALLBACK
  {
    category: "fallback",
    keywords: [],
    responses: [
      "The itching is really bothering me right now.",
      "Could you ask me more specifically?",
      "I'm finding it hard to focus because of the itching.",
    ],
  },
]

// Helper function to get random response from a category
let lastFallbackIndex = -1

export function getRandomResponse(category: string): string {
  const found = CASE_3_KEYWORDS.find((kw) => kw.category === category)
  if (!found || found.responses.length === 0) {
    return "I'm feeling uncomfortable."
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

  // Check for single-word casual greetings/acknowledgements
  const words = normalized.split(" ").filter((w) => w.length > 0)

  if (words.length === 1) {
    const word = words[0]
    const greetings = ["hi", "hii", "hiii", "hello", "hellow", "hyy", "hyyy", "heyy", "hey"]
    if (greetings.includes(word)) {
      return { category: "casual_greeting", response: "Hii doctor" }
    }

    const acknowledgements = ["ok", "okk", "okkk", "okay", "okayy", "ohk", "ohkk"]
    if (acknowledgements.includes(word)) {
      return { category: "casual_ack", response: "Okk!!" }
    }
  }

  // Try to match specific keywords first
  for (const keywordGroup of CASE_3_KEYWORDS) {
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
