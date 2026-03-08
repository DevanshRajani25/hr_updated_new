// Case 1 (Belladonna - Maria Johnson) - Complete keyword-response mapping
// 28 keyword categories with 2 responses each for natural variation

export interface KeywordResponse {
  category: string
  keywords: string[]
  responses: string[]
}

export const CASE_1_KEYWORDS: KeywordResponse[] = [
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
    responses: ["My name is Maria Johnson.", "I'm Maria... the one struggling with this terrible throbbing headache."],
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
    responses: ["I'm 28 years old.", "I'm 28... still young, but this pain makes me feel so exhausted."],
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
    responses: ["Yes, I'm married.", "I'm married… my husband worries a lot when I get these sudden headaches."],
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
      "I'm a teacher by profession.",
      "I teach small kids… but when this pain starts, I can't even bear their voices.",
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
      "I stay in New York.",
      "I live in New York City… though I wish I could escape somewhere quiet when my head throbs like this.",
    ],
  },
  // 6. CHIEF COMPLAINT
  {
    category: "chief",
    keywords: ["chief+complaint", "main+complaint", "complaint"],
    responses: [
      "I'm suffering from a terrible throbbing headache.",
      "My head feels like it will burst… the throbbing is unbearable.",
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
      "The pain is mostly on the right side of my head.",
      "It feels as if the whole right side of my head is beating with each heartbeat.",
    ],
  },
  // 8. SENSATION
  {
    category: "sensation",
    keywords: ["sensation", "how+sensation", "how+feel", "how+pain"],
    responses: [
      "It feels like my head is pounding — like hammers striking inside.",
      "The pain throbs violently, especially when I move or touch my head.",
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
      "It gets worse with light and slightest noise.",
      "Even a little movement or bright light makes my head throb harder.",
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
    responses: ["I feel better when I rest in a dark, quiet room.", "A cold compress on my head gives some relief."],
  },
  // 11. CONCOMITANT SYMPTOM
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
      "Along with the headache, my eyes feel heavy and my face becomes red.",
      "I also feel my pupils dilate, and my face burns with heat during the pain.",
    ],
  },
  // 12. ONSET
  {
    category: "onset",
    keywords: ["onset", "when+begins", "when+started", "when+starts", "when+start", "when+onset"],
    responses: ["It starts suddenly, without any warning.", "The pain begins suddenly, like a storm inside my head."],
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
    responses: [
      "It lasts for a few hours but feels endless.",
      "Usually it stays for several hours, sometimes the whole day.",
    ],
  },
  // 14. PROGRESSION
  {
    category: "progression",
    keywords: ["progression", "progressive", "how+increase", "how+increases", "how+progress"],
    responses: [
      "It starts mild and quickly becomes intense and throbbing.",
      "The pain rises suddenly, like waves beating in my head.",
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
      "My mother also used to get such severe headaches.",
      "Yes, my mother suffered from similar headaches during her younger days.",
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
      "I used to get mild headaches before, but never this severe.",
      "I've had headaches before, but now they've become violent and throbbing.",
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
      "I've lost my appetite during these headaches.",
      "I don't feel like eating anything when the pain strikes.",
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
    responses: ["My tongue feels dry and hot.", "It looks red and dry when I get the headache."],
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
      "I crave something cold when I feel like this.",
      "I sometimes want cold water or cold drinks when my head throbs.",
    ],
  },
  // 20. AVERSION (FOOD DISLIKES)
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
    responses: ["I can't tolerate hot or spicy food.", "The smell of hot food worsens my headache."],
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
      "how+drink",
      "need+water",
      "do+you+drink",
      "drinking+habit",
      "do+you+feel+thirsty",
      "amount+of+water",
      "glass+water",
      "frequency+drink",
    ],
    responses: [
      "I feel very thirsty, especially when the pain is strong.",
      "I drink a lot of cold water; it soothes me a bit.",
    ],
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
    responses: ["My bowels are regular.", "Nothing unusual with my stool, it's normal."],
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
    responses: ["My urination is normal.", "I haven't noticed any change in urine."],
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
    responses: ["I don't sweat much, even when I feel feverish.", "My face feels hot, but I hardly sweat."],
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
    responses: ["I can't sleep when the headache starts.", "The pain wakes me up; I toss and turn restlessly."],
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
    responses: ["I dream about flashing lights sometimes.", "My dreams are disturbing when I have a headache."],
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
      "I feel burning heat in my face but chills elsewhere.",
      "My head feels hot, but my hands and feet are cold.",
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
      "I feel so irritable and restless when my headache starts.",
      "I become short-tempered and sensitive to everything — light, sound, even touch.",
    ],
  },
  // 29. FALLBACK
  {
    category: "fallback",
    keywords: [],
    responses: [
      "This pain makes it hard to think clearly.",
      "Could you repeat that? My head is pounding.",
      "I'm sorry, my head feels heavy right now.",
      "Please speak softly… the noise makes it worse.",
      "Everything seems too bright and loud.",
    ],
  },
]

// Helper: Get response and avoid repetition
let lastFallbackIndex = -1

export function getRandomResponse(category: string): string {
  const found = CASE_1_KEYWORDS.find((kw) => kw.category === category)
  if (!found || found.responses.length === 0) {
    return "I'm having trouble focusing right now."
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
  for (const keywordGroup of CASE_1_KEYWORDS) {
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
