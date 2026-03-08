// Case 2 (Ledum Palustre - Rajesh Mishra) - Complete keyword-response mapping
// Right knee bruise with pain and swelling - emotional tone reflecting Ledum Palustre features

export interface KeywordResponse {
  keywords: string[]
  responses: string[]
  category: string
}

export const CASE_2_KEYWORDS: KeywordResponse[] = [
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
    responses: [
      "My name is Rajesh Mishra… I hurt my right knee badly a few days back.",
      "I'm Rajesh Mishra… still limping from this bruise pain.",
      "Rajesh Mishra… yeah, that's me.",
    ],
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
    responses: [
      "I'm 35 years old… this injury is making me feel older though.",
      "Thirty-five… and this knee pain makes every step hard.",
      "I'm 35 years old.",
    ],
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
    responses: [
      "Yes, I'm married… my wife keeps telling me to keep it cold, not warm.",
      "Married… she's worried because I can't walk properly.",
      "I'm married.",
    ],
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
      "how+happen",
      "how+happens",
      "how+happened",
    ],
    responses: [
      "I work as a delivery man… slipped while lifting a parcel.",
      "I'm into delivery work… my right knee got bruised during work.",
      "I deliver packages for a living.",
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
    responses: [
      "I live in Surat… near the station area.",
      "My home's in Surat… not far from my workplace.",
      "I live in Surat.",
    ],
  },
  // 6. CHIEF COMPLAINT
  {
    category: "chief",
    keywords: ["chief+complaint", "main+complaint", "complaint"],
    responses: [
      "This bruise on my right knee… it's swollen and sore.",
      "The main trouble is this knee pain — feels deep, bruised, and stiff.",
      "My chief complaint is the bruise.",
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
    responses: [
      "The pain is right on my knee… especially on the right side.",
      "It's mainly the right knee — feels bruised deep inside.",
      "My right knee is where it hurts.",
    ],
  },
  // 8. SENSATION
  {
    category: "sensation",
    keywords: ["sensation", "how+sensation", "how+feel", "how+pain"],
    responses: [
      "Feels like someone punched it hard — sore and bruised.",
      "The pain is dull, but deep… like the bone's hurt.",
      "It throbs when I move.",
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
      "aggravated+with",
      "aggravates",
      "worse+with",
      "worsen+with",
      "triggers+pain",
      "pain+increases",
      "pain+worse",
      "hurts+more",
      "headache+worse",
      "pain+aggravated",
      "gets+worse",
      "pain+trigger",
    ],
    responses: [
      "It gets worse when the area feels warm or I try to move.",
      "The pain shoots up if I cover it or sit near heat.",
      "Walking and movement make it worse.",
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
      "headache+better",
      "relieved+with",
      "reduces+pain",
      "pain+eases",
      "pain+decreases",
      "rest",
      "quiet+place",
      "dark+room",
      "cold+compress",
      "calms+down",
    ],
    responses: [
      "It feels much better when I put something cold on it.",
      "Cold things soothe it… warmth makes it throb again.",
      "Rest and cold compress help.",
    ],
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
      "There's a little stiffness around my ankle too.",
      "Sometimes my foot feels numb… like the cold travels down.",
      "Just the bruise and some stiffness.",
    ],
  },
  // 12. ONSET
  {
    category: "onset",
    keywords: ["onset", "when+begins", "when+started", "when+starts", "when+start", "when+onset"],
    responses: [
      "It started after I hit my knee against a bike last week.",
      "The pain began the same evening I fell.",
      "It started from the injury.",
    ],
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
    responses: ["It's been around a week now.", "Seven days… not much relief yet.", "About a week."],
  },
  // 14. PROGRESSION
  {
    category: "progression",
    keywords: ["progression", "progressive", "how+increase", "how+increases", "how+progress"],
    responses: [
      "It was swelling at first… now it's just stiff and painful.",
      "The swelling went down a bit, but the soreness stayed.",
      "It's gradually getting better.",
    ],
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
      "No, no one else in the family has anything like this.",
      "We're all healthy at home — this is just from the fall.",
      "Nothing hereditary.",
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
      "I've had minor injuries before, but nothing like this pain.",
      "No past illness, just some sprains during work.",
      "I was healthy before this.",
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
    responses: [
      "Not much appetite lately… pain makes me lose interest.",
      "I eat less these days, just simple food.",
      "Appetite is okay.",
    ],
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
    responses: ["My tongue looks normal, maybe a bit pale.", "It's fine, not dry or coated.", "Tongue is normal."],
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
    responses: [
      "I mostly like cool drinks these days.",
      "Just want something cold or light — nothing spicy.",
      "I desire cold things.",
    ],
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
    responses: [
      "Don't feel like eating oily or heavy food.",
      "Avoiding spicy things — they make me feel uneasy.",
      "I dislike hot food.",
    ],
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
    responses: ["I don't feel very thirsty.", "Drink just a few sips at a time.", "Normal thirst."],
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
    responses: ["It's normal, no trouble there.", "Regular… no constipation or diarrhea.", "Normal."],
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
    responses: ["Normal urine, no pain or burning.", "Everything's fine in that part.", "Normal."],
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
      "how+perspiration",
      "sweat+much",
      "profuse+sweat",
      "sweat+problem",
      "excessive+sweating",
      "body+odour",
      "smelly+sweat",
    ],
    responses: [
      "Not much sweat, only a little when I move.",
      "Hardly sweat — I usually feel cold there.",
      "Minimal sweating.",
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
      "Sleep is disturbed from the pain.",
      "Can't sleep well — pain wakes me at night.",
      "Sleep is affected.",
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
    responses: [
      "Haven't noticed any dreams… just pain all night.",
      "No dreams, I sleep little anyway.",
      "Don't recall any.",
    ],
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
    responses: [
      "I prefer cold air — warmth makes it ache more.",
      "Cold things give relief; heat makes it unbearable.",
      "I like cold.",
    ],
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
      "I get irritated easily since this injury.",
      "Feel low and tired — the pain drains me.",
      "I'm calm but the pain bothers me.",
    ],
  },
  // 29. FALLBACK - Random responses when no keyword detected
  {
    category: "fallback",
    keywords: [],
    responses: [
      "Hmm… I'm just trying to rest my knee…",
      "Ahh… it still aches when I move.",
      "Cold makes it better… warmth makes it throb again.",
    ],
  },
]

// Helper function to get random response from a category
let lastFallbackIndex = -1

export function getRandomResponse(category: string): string {
  const found = CASE_2_KEYWORDS.find((kw) => kw.category === category)
  if (!found || found.responses.length === 0) {
    return "I'm feeling uncomfortable."
  }

  if (category === "fallback") {
    let idx = Math.floor(Math.random() * found.responses.length)
    // Avoid same response twice in a row
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
  for (const keywordGroup of CASE_2_KEYWORDS) {
    if (keywordGroup.category === "fallback") continue // Skip fallback in first pass

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

  // If no keyword matched, return a random symptom response from fallback
  return {
    category: "fallback",
    response: getRandomResponse("fallback"),
  }
}
