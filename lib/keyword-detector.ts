// Supports 25+ keyword categories with fuzzy matching and priority ordering

export type KeywordCategory =
  | "name"
  | "age"
  | "marital"
  | "occupation"
  | "address"
  | "location"
  | "sensation"
  | "aggravation"
  | "amelioration"
  | "concomitant"
  | "chief"
  | "family"
  | "past"
  | "appetite"
  | "tongue"
  | "desire"
  | "aversion"
  | "thirst"
  | "stool"
  | "urine"
  | "sweat"
  | "sleep"
  | "dreams"
  | "thermal"
  | "mental"

export interface KeywordMatch {
  category: KeywordCategory
  priority: number
  confidence: number
}

export interface DetectionResult {
  matches: KeywordMatch[]
  primaryMatch: KeywordMatch | null
  detectedText: string
}

// Normalize text for matching
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

// Check if keyword phrase matches in normalized text
export function matchesKeyword(keyword: string, normalizedText: string): boolean {
  if (keyword.includes("+")) {
    const tokens = keyword.split("+").map((t) => t.trim())
    return tokens.every((tok) => normalizedText.includes(tok))
  }
  return normalizedText.includes(keyword)
}

// Priority order for keyword categories
const PRIORITY_ORDER: Record<KeywordCategory, number> = {
  chief: 100,
  sensation: 90,
  aggravation: 85,
  amelioration: 85,
  concomitant: 80,
  location: 75,
  appetite: 60,
  sleep: 60,
  thermal: 60,
  mental: 60,
  thirst: 55,
  stool: 55,
  urine: 55,
  sweat: 55,
  dreams: 55,
  tongue: 50,
  desire: 50,
  aversion: 50,
  family: 40,
  past: 40,
  name: 30,
  age: 30,
  marital: 30,
  occupation: 30,
  address: 30,
}

// Master keyword list for all categories
export const MASTER_KEYWORDS: Record<KeywordCategory, string[]> = {
  name: [
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
  age: [
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
  marital: [
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
  occupation: [
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
  address: [
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
  location: [
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
  sensation: [
    "throbbing",
    "beating",
    "bursting",
    "pulsating",
    "hammering",
    "stabbing",
    "sharp+pain",
    "splitting",
    "headache+pain",
    "painful",
    "hurting",
    "pounding",
    "intense+headache",
    "ache+throbbing",
    "pressing",
  ],
  aggravation: [
    "when+worse",
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
    "pounding+increases",
    "throbbing+worse",
    "pain+aggravated",
    "gets+worse",
    "intense+headache",
    "pain+trigger",
  ],
  amelioration: [
    "when+good",
    "feel+good",
    "amelioration",
    "ameliorates",
    "ameliorates+with",
    "modalities",
    "relief",
    "eases",
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
  concomitant: [
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
  chief: [
    "chief+complaint",
    "main+problem",
    "primary+issue",
    "main+complaint",
    "what+suffering",
    "problem",
    "complaint",
    "issue",
    "headache",
    "pain+head",
    "throbbing+headache",
    "forehead+pain",
    "temples+pain",
    "intense+headache",
    "worst+pain",
  ],
  family: [
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
  past: [
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
  appetite: [
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
    "craving",
  ],
  tongue: [
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
  desire: [
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
  aversion: [
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
  thirst: [
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
  stool: [
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
  urine: [
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
  sweat: [
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
  sleep: [
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
  dreams: [
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
  thermal: [
    "chill",
    "cold",
    "fever",
    "heat",
    "hot",
    "temperature",
    "warmth",
    "cold+body",
    "sweating+heat",
    "shivering",
    "body+temperature",
    "feel+cold",
    "feel+hot",
    "sensitive+to+heat",
    "sensitive+to+cold",
  ],
  mental: [
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
}

// CASE 17 SPECIFIC KEYWORDS (PHOSPHORUS - Hair Fall)
export const CASE_17_KEYWORDS: Record<string, string[]> = {
  greeting_hi: ["hi", "hello", "hey"],
  greeting_ok: ["ok", "okk", "okay"],
  name: ["name", "what+name"],
  age: ["age", "how+old+you"],
  occupation: ["occupation", "what+do", "doing", "do"],
  marital: ["marriage", "married", "are+you+married", "single"],
  address: ["address", "where+live", "living"],
  chief_complaint: ["main+complain", "complaint", "chief+complaint"],
  location: ["where+pain", "which+side", "location+pain", "where+exactly+pain"],
  sensation: ["sensation", "how+sensation", "how+feel", "how+pain"],
  aggravation: ["aggravation", "aggravates", "worse", "worsen", "when+worsen", "when+pain+increase", "modality"],
  amelioration: ["amelioration", "ameliorates", "relief", "feel+good", "when+relief"],
  concomitant: ["concomitant", "any+other+complaint", "other", "other+symptom"],
  onset: ["onset", "when+start", "when+started", "when+begins"],
  duration: ["duration", "how+long", "how+many+days", "how+much+time"],
  progression: ["progression", "how+increase", "how+progressive"],
  history: ["history", "any+history", "past", "in+past"],
  family_history: ["family", "parents", "partner", "family+history"],
  appetite: ["appetite", "hunger", "eat", "eating", "meal"],
  thirst: ["thirst", "thirsty", "water", "water+drink"],
  tongue: ["tongue"],
  urine: ["urine", "urinate", "urinates", "pass+urine"],
  stool: ["stool", "bowel", "constipation"],
  desire: ["desire", "craving", "food+like", "like+eat"],
  aversion: ["aversion", "dislike", "don't+like"],
  sweat: ["sweat", "perspiration", "how+sweat"],
  sleep: ["sleep", "sleeping", "sleep+problem"],
  dreams: ["dream", "dreams", "dreaming"],
  thermals: ["thermal", "cold", "heat", "fever", "chilly"],
  mental: ["mental", "mentally", "anger", "any+anger", "when+angry", "angry", "how+react", "irritable", "irritates", "anxiety", "anxious", "mood", "mind", "fear", "mood+swings", "sad"],
}

// CASE 17 RESPONSES (EXACT - DO NOT MODIFY)
export const CASE_17_RESPONSES: Record<string, string> = {
  greeting_hi: "Hello doctor.. (soft, hopeful tone)",
  greeting_ok: "Okk doctor.. (polite, slightly anxious)",
  name: "My name is Keyli doctor… (open, emotional) I'm really worried seeing so much hair fall.",
  age: "I am 27 years old doctor… (concerned) this problem is making me anxious.",
  occupation: "I work as a designer doctor… (mentally tired) long work hours make me feel weak and drained.",
  marital: "I am single doctor… (emotionally expressive) I share everything openly when I feel stressed.",
  address: "I live in Mumbai doctor… (friendly but worried) stress and lifestyle here are heavy.",
  chief_complaint: "My main complaint is excessive hair fall doctor… (distressed) hair comes out every time I comb.",
  location: "It is from the whole scalp doctor… (concerned) more noticeable in the front area.",
  sensation: "My scalp feels sensitive and burning doctor… (uneasy) like heat on the skin.",
  aggravation: "It becomes worse after stress and lack of sleep doctor… (emotionally affected) and when I get mentally upset.",
  amelioration: "I feel better with rest and cool air doctor… (relieved) cold applications help.",
  concomitant: "I also feel weakness and dizziness sometimes doctor… (fragile) and I feel uneasy when alone.",
  onset: "It started after a period of weakness doctor… (recalling) after that hair fall began.",
  duration: "It has been about 2 months doctor… (worried) gradually increasing.",
  progression: "Yes doctor it is increasing steadily… (fearful) that's why I came quickly.",
  history: "I had anemia and weakness earlier doctor… (soft tone) since then my hair became thin.",
  family_history: "My mother had mild hair thinning doctor… (neutral) but not this much.",
  appetite: "My appetite is variable doctor… (low energy) sometimes very hungry suddenly.",
  thirst: "I feel very thirsty doctor… (keynote) I drink a lot of cold water.",
  tongue: "My tongue looks red and a bit dry doctor… (observing)",
  urine: "Urine is normal doctor… (calm) no burning.",
  stool: "Stool is mostly normal doctor… (plain) sometimes loose when stressed.",
  desire: "I crave cold drinks and ice cream doctor… (clear keynote) I strongly want cold things.",
  aversion: "I don't like hot food doctor… (clear dislike) heat troubles me.",
  sweat: "Sweat is moderate doctor… (normal) more when anxious.",
  sleep: "My sleep is light doctor… (sensitive) small sounds wake me.",
  dreams: "I get fearful dreams sometimes doctor… (restless mind)",
  thermals: "I feel more comfortable in cool air doctor… (keynote) heat makes me uneasy.",
  mental: "I am very emotional and anxious doctor… (tearful, open) I feel fear when alone and I need reassurance.",
  default: "Please ask related case questions doctor..",
}

// CASE 17 DETECTION ENGINE (STRICT KEYWORD → RESPONSE MAPPING)
export function detectCase17Keywords(userInput: string): { category: string; response: string } | null {
  const normalized = normalize(userInput)
  const trimmed = userInput.trim()
  const words = trimmed.split(/\s+/)

  // RULE 1: Single word greeting (SPECIAL CASE - checks BEFORE other keywords)
  if (words.length === 1) {
    const singleWord = normalized
    if (singleWord.startsWith("h")) {
      return { category: "greeting_hi", response: CASE_17_RESPONSES.greeting_hi }
    }
    if (singleWord.startsWith("o")) {
      return { category: "greeting_ok", response: CASE_17_RESPONSES.greeting_ok }
    }
  }

  // RULE 2: Multi-word keyword detection with priority
  let bestMatch: { category: string; response: string } | null = null
  let bestMatchCount = 0

  for (const [category, keywords] of Object.entries(CASE_17_KEYWORDS)) {
    for (const keyword of keywords) {
      if (matchesKeyword(keyword, normalized)) {
        // Count how many word-parts matched (for priority)
        const parts = keyword.includes("+") ? keyword.split("+").length : 1
        if (parts > bestMatchCount) {
          bestMatchCount = parts
          bestMatch = { category, response: CASE_17_RESPONSES[category] || CASE_17_RESPONSES.default }
        }
      }
    }
  }

  // Return best match or default
  if (bestMatch) {
    return bestMatch
  }

  // RULE 3: No keyword match - return default fallback
  return { category: "default", response: CASE_17_RESPONSES.default }
}

// CASE 18 KEYWORDS (NATRUM MURIATICUM - Chronic Headache)
export const CASE_18_KEYWORDS: Record<string, string[]> = {
  greeting_hi: ["hi", "hello", "hey"],
  greeting_ok: ["ok", "okk", "okay"],
  name: ["name", "what+name"],
  age: ["age", "how+old+you"],
  occupation: ["occupation", "what+do", "doing", "do"],
  marital: ["marriage", "married", "are+you+married", "single"],
  address: ["address", "where+live", "living"],
  chief_complaint: ["main+complain", "complaint", "chief+complaint"],
  location: ["where+pain", "which+side", "location+pain", "where+exactly+pain"],
  sensation: ["sensation", "how+sensation", "how+feel", "how+pain"],
  aggravation: ["aggravation", "aggravates", "worse", "worsen", "when+worsen", "when+pain+increase", "modality"],
  amelioration: ["amelioration", "ameliorates", "relief", "feel+good", "when+relief"],
  concomitant: ["concomitant", "any+other+complaint", "other", "other+symptom"],
  onset: ["onset", "when+start", "when+started", "when+begins"],
  duration: ["duration", "how+long", "how+many+days", "how+much+time"],
  progression: ["progression", "how+increase", "how+progressive"],
  history: ["history", "any+history", "past", "in+past"],
  family_history: ["family", "parents", "partner", "family+history"],
  appetite: ["appetite", "hunger", "eat", "eating", "meal"],
  thirst: ["thirst", "thirsty", "water", "water+drink"],
  tongue: ["tongue"],
  urine: ["urine", "urinate", "urinates", "pass+urine"],
  stool: ["stool", "bowel", "constipation"],
  desire: ["desire", "craving", "food+like", "like+eat"],
  aversion: ["aversion", "dislike", "don't+like"],
  sweat: ["sweat", "perspiration", "how+sweat"],
  sleep: ["sleep", "sleeping", "sleep+problem"],
  dreams: ["dream", "dreams", "dreaming"],
  thermals: ["thermal", "cold", "heat", "fever", "chilly"],
  mental: ["mental", "mentally", "anger", "any+anger", "when+angry", "angry", "how+react", "irritable", "irritates", "anxiety", "anxious", "mood", "mind", "fear", "mood+swings", "sad"],
}

// CASE 18 RESPONSES (EXACT - DO NOT MODIFY)
export const CASE_18_RESPONSES: Record<string, string> = {
  greeting_hi: "Hello doctor.. (soft, reserved tone)",
  greeting_ok: "Okk doctor.. (polite, quiet tone)",
  name: "My name is Arjun doctor… (reserved) I usually keep my problems to myself.",
  age: "I am 32 years old doctor… (tired tone) this headache keeps returning.",
  occupation: "I am a software engineer doctor… (mentally strained) long screen work worsens it.",
  marital: "I am unmarried doctor… (emotionally closed) I don't like discussing personal matters.",
  address: "I live in Mumbai doctor… (plain tone) heat and sun affect me.",
  chief_complaint: "My main complaint is chronic headache doctor… (serious) it comes again and again.",
  location: "Pain is mostly in the forehead and temples doctor… (focused) like tight pressure.",
  sensation: "It feels like bursting and hammering doctor… (disturbed) as if head will split.",
  aggravation: "It becomes worse in sun and mental work doctor… (clear) and from emotional stress.",
  amelioration: "I feel better in a quiet dark room doctor… (prefers alone) lying down helps.",
  concomitant: "I get dryness of lips and weakness doctor… (low tone) and I don't want anyone near.",
  onset: "It started after a period of emotional stress doctor… (controlled tone).",
  duration: "It has been for about 1 year doctor… (chronic) comes repeatedly.",
  progression: "Yes doctor frequency is increasing… (concerned but controlled).",
  history: "I had a long period of grief and disappointment doctor… (closed emotion).",
  family_history: "My father also had headaches doctor… (neutral).",
  appetite: "Appetite is normal doctor… (plain).",
  thirst: "I feel quite thirsty doctor… (Nat Mur keynote) I drink more water.",
  tongue: "My tongue is dry doctor… (simple).",
  urine: "Urine is normal doctor… (plain).",
  stool: "Sometimes constipated doctor… (not expressive).",
  desire: "I like salty food doctor… (keynote desire).",
  aversion: "I don't like consolation doctor… (important mental keynote).",
  sweat: "Sweat is less doctor… (dry type).",
  sleep: "Sleep is disturbed doctor… (mind active).",
  dreams: "I dream about past events doctor… (grief recall).",
  thermals: "Sun and heat trouble me doctor… (worse sun — keynote).",
  mental: "I keep emotions inside doctor… (Nat Mur state) I don't like consolation and prefer to be alone.",
  default: "Please ask related case questions doctor..",
}

// CASE 18 DETECTION ENGINE (STRICT KEYWORD → RESPONSE MAPPING)
export function detectCase18Keywords(userInput: string): { category: string; response: string } | null {
  const normalized = normalize(userInput)
  const trimmed = userInput.trim()
  const words = trimmed.split(/\s+/)

  // RULE 1: Single word greeting
  if (words.length === 1) {
    const singleWord = normalized
    if (singleWord.startsWith("h")) {
      return { category: "greeting_hi", response: CASE_18_RESPONSES.greeting_hi }
    }
    if (singleWord.startsWith("o")) {
      return { category: "greeting_ok", response: CASE_18_RESPONSES.greeting_ok }
    }
  }

  // RULE 2: Multi-word keyword detection with priority
  let bestMatch: { category: string; response: string } | null = null
  let bestMatchCount = 0

  for (const [category, keywords] of Object.entries(CASE_18_KEYWORDS)) {
    for (const keyword of keywords) {
      if (matchesKeyword(keyword, normalized)) {
        const parts = keyword.includes("+") ? keyword.split("+").length : 1
        if (parts > bestMatchCount) {
          bestMatchCount = parts
          bestMatch = { category, response: CASE_18_RESPONSES[category] || CASE_18_RESPONSES.default }
        }
      }
    }
  }

  if (bestMatch) {
    return bestMatch
  }

  // RULE 3: No keyword match - return default fallback
  return { category: "default", response: CASE_18_RESPONSES.default }
}

// CASE 19 KEYWORDS (SULPHUR - Chronic Acne)
export const CASE_19_KEYWORDS: Record<string, string[]> = {
  greeting_hi: ["hi", "hello", "hey"],
  greeting_ok: ["ok", "okk", "okay"],
  name: ["name", "what+name"],
  age: ["age", "how+old+you"],
  occupation: ["occupation", "what+do", "doing", "do"],
  marital: ["marriage", "married", "are+you+married", "single"],
  address: ["address", "where+live", "living"],
  chief_complaint: ["main+complain", "complaint", "chief+complaint"],
  location: ["where+pimple", "which+area", "location"],
  sensation: ["sensation", "how+feel", "pain+how"],
  aggravation: ["aggravation", "worse", "worsen", "when+increase", "modality"],
  amelioration: ["amelioration", "relief", "better+when"],
  concomitant: ["concomitant", "other+symptom", "other"],
  onset: ["onset", "when+start", "started"],
  duration: ["duration", "how+long"],
  progression: ["progression", "increasing"],
  history: ["history", "past"],
  family_history: ["family", "family+history"],
  appetite: ["appetite", "hunger"],
  thirst: ["thirst", "water"],
  tongue: ["tongue"],
  urine: ["urine"],
  stool: ["stool", "bowel"],
  desire: ["desire", "craving"],
  aversion: ["aversion", "dislike"],
  sweat: ["sweat", "perspiration"],
  sleep: ["sleep"],
  dreams: ["dream"],
  thermals: ["thermal", "heat", "cold"],
  mental: ["mental", "anger", "mood", "mind", "irritable"],
}

// CASE 19 RESPONSES (EXACT - DO NOT MODIFY)
export const CASE_19_RESPONSES: Record<string, string> = {
  greeting_hi: "Hello doctor.. (casual but confident tone)",
  greeting_ok: "Okk doctor.. (simple tone)",
  name: "My name is Rohan doctor… I get these pimples again and again.",
  age: "I am 21 years old doctor… pimples started from last few years.",
  occupation: "I am a college student doctor… (casual) stress and irregular routine.",
  marital: "I am unmarried doctor… (normal tone).",
  address: "I live in Ahmedabad doctor… heat troubles my skin.",
  chief_complaint: "My main complaint is repeated face pimples doctor… red and painful.",
  location: "Mostly on face doctor… cheeks and forehead mainly.",
  sensation: "They burn and itch doctor… sometimes painful on touch.",
  aggravation: "Worse from heat and sweating doctor… and after washing face.",
  amelioration: "Better in cool air doctor… scratching gives temporary relief.",
  concomitant: "Skin becomes oily and itchy doctor… sometimes burning.",
  onset: "It started in teenage doctor… gradually increasing.",
  duration: "Since about 3 years doctor… comes again and again.",
  progression: "Yes doctor… frequency and severity both increasing.",
  history: "I had oily skin since long doctor… pimples keep recurring.",
  family_history: "My elder brother also had acne doctor.",
  appetite: "Appetite is good doctor… I feel hungry often.",
  thirst: "Thirst is increased doctor… I drink more water.",
  tongue: "Tongue is reddish doctor.",
  urine: "Urine is normal doctor.",
  stool: "Sometimes burning stool doctor.",
  desire: "I like sweets and spicy food doctor.",
  aversion: "I don't like bathing often doctor… (Sulphur keynote).",
  sweat: "Sweat is offensive doctor… more in heat.",
  sleep: "Sleep is okay doctor… but body feels hot at night.",
  dreams: "No specific dreams doctor.",
  thermals: "I feel more heat doctor… can't tolerate warmth.",
  mental: "I am confident doctor… but careless about cleanliness and routine.",
  default: "Please ask related case questions doctor..",
}

// CASE 19 DETECTION ENGINE (STRICT KEYWORD → RESPONSE MAPPING)
export function detectCase19Keywords(userInput: string): { category: string; response: string } | null {
  const normalized = normalize(userInput)
  const trimmed = userInput.trim()
  const words = trimmed.split(/\s+/)

  // RULE 1: Single word greeting
  if (words.length === 1) {
    const singleWord = normalized
    if (singleWord.startsWith("h")) {
      return { category: "greeting_hi", response: CASE_19_RESPONSES.greeting_hi }
    }
    if (singleWord.startsWith("o")) {
      return { category: "greeting_ok", response: CASE_19_RESPONSES.greeting_ok }
    }
  }

  // RULE 2: Multi-word keyword detection with priority
  let bestMatch: { category: string; response: string } | null = null
  let bestMatchCount = 0

  for (const [category, keywords] of Object.entries(CASE_19_KEYWORDS)) {
    for (const keyword of keywords) {
      if (matchesKeyword(keyword, normalized)) {
        const parts = keyword.includes("+") ? keyword.split("+").length : 1
        if (parts > bestMatchCount) {
          bestMatchCount = parts
          bestMatch = { category, response: CASE_19_RESPONSES[category] || CASE_19_RESPONSES.default }
        }
      }
    }
  }

  if (bestMatch) {
    return bestMatch
  }

  // RULE 3: No keyword match - return default fallback
  return { category: "default", response: CASE_19_RESPONSES.default }
}

// CASE 20 KEYWORDS (SECALE CORNUTUM - Peripheral Circulation)
export const CASE_20_KEYWORDS: Record<string, string[]> = {
  greeting_hi: ["hi", "hello", "hey"],
  greeting_ok: ["ok", "okk", "okay"],
  name: ["name", "what+name"],
  age: ["age", "how+old+you"],
  occupation: ["occupation", "what+do", "doing", "do"],
  marital: ["marriage", "married", "are+you+married", "single"],
  address: ["address", "where+live", "living"],
  chief_complaint: ["main+complain", "complaint", "chief+complaint"],
  location: ["where+pain", "which+side", "location+pain", "where+exactly"],
  sensation: ["sensation", "how+sensation", "how+feel", "how+pain"],
  aggravation: ["aggravation", "aggravates", "worse", "worsen", "when+worsen", "when+increase", "modality"],
  amelioration: ["amelioration", "ameliorates", "relief", "feel+good", "when+relief"],
  concomitant: ["concomitant", "any+other+complaint", "other", "other+symptom"],
  onset: ["onset", "when+start", "when+started", "when+begins"],
  duration: ["duration", "how+long", "how+many+days", "how+much+time"],
  progression: ["progression", "how+increase", "how+progressive"],
  history: ["history", "any+history", "past", "in+past"],
  family_history: ["family", "parents", "partner", "family+history"],
  appetite: ["appetite", "hunger", "eat", "eating", "meal"],
  thirst: ["thirst", "thirsty", "water", "water+drink"],
  tongue: ["tongue"],
  urine: ["urine", "urinate", "urinates", "pass+urine"],
  stool: ["stool", "bowel", "constipation"],
  desire: ["desire", "craving", "food+like", "like+eat"],
  aversion: ["aversion", "dislike", "don't+like"],
  sweat: ["sweat", "perspiration", "how+sweat"],
  sleep: ["sleep", "sleeping", "sleep+problem"],
  dreams: ["dream", "dreams", "dreaming"],
  thermals: ["thermal", "cold", "heat", "fever", "chilly"],
  mental: ["mental", "mentally", "anger", "any+anger", "when+angry", "angry", "how+react", "irritable", "irritates", "anxiety", "anxious", "mood", "mind", "fear", "mood+swings", "sad"],
}

// CASE 20 RESPONSES (EXACT - DO NOT MODIFY)
export const CASE_20_RESPONSES: Record<string, string> = {
  greeting_hi: "Hello doctor… (weak but alert tone)",
  greeting_ok: "Okk doctor… (restless but polite tone)",
  name: "My name is Ramesh doctor… (low energy) my feet condition is worrying me.",
  age: "I am 58 years old doctor… (frail tone) weakness is increasing these days.",
  occupation: "I am a farmer doctor… (tired) long standing in fields makes pain worse.",
  marital: "Yes doctor I am married… (short reply) family is concerned about my feet.",
  address: "I live in Gujarat doctor… (plain tone) cold nights affect circulation.",
  chief_complaint: "My main complaint is dark painful toes doctor… (concerned) skin looks dry and blackish.",
  location: "Pain is in my toes doctor… (specific) especially the smaller ones.",
  sensation: "It is burning pain doctor… (peculiar) but I want cold air on them.",
  aggravation: "It becomes worse from heat and covering doctor… (keynote) warmth increases burning.",
  amelioration: "I feel better with cold applications doctor… (strange) I keep feet uncovered.",
  concomitant: "My skin is very dry and shriveled doctor… (observing) and I feel very weak.",
  onset: "It started with numbness doctor… (recalling) then color slowly changed.",
  duration: "It has been for about 3 months doctor… (progressive).",
  progression: "Yes doctor it is slowly spreading… (worried but restless).",
  history: "I have diabetes for many years doctor… (important cause).",
  family_history: "My mother had circulation trouble doctor… (neutral).",
  appetite: "Appetite is low doctor… (weak feeling).",
  thirst: "I am very thirsty doctor… (frequent sips).",
  tongue: "My tongue is dry doctor… (pale and dry).",
  urine: "Urine is frequent doctor… (diabetic pattern).",
  stool: "Sometimes loose stool doctor… (offensive).",
  desire: "I like sour things doctor… (mild craving).",
  aversion: "I don't like warm food doctor… (prefers cool things).",
  sweat: "Sweat is cold and sticky doctor… (clammy).",
  sleep: "Sleep is disturbed doctor… (restless from burning pain).",
  dreams: "I dream of danger doctor… (anxious state).",
  thermals: "I feel cold inside doctor… but I cannot tolerate covering.",
  mental: "I feel anxious about my health doctor… (restless) keep checking my feet repeatedly.",
  default: "Please ask related case questions doctor..",
}

// CASE 20 DETECTION ENGINE (STRICT KEYWORD → RESPONSE MAPPING)
export function detectCase20Keywords(userInput: string): { category: string; response: string } | null {
  const normalized = normalize(userInput)
  const trimmed = userInput.trim()
  const words = trimmed.split(/\s+/)

  // RULE 1: Single word greeting
  if (words.length === 1) {
    const singleWord = normalized
    if (singleWord.startsWith("h")) {
      return { category: "greeting_hi", response: CASE_20_RESPONSES.greeting_hi }
    }
    if (singleWord.startsWith("o")) {
      return { category: "greeting_ok", response: CASE_20_RESPONSES.greeting_ok }
    }
  }

  // RULE 2: Multi-word keyword detection with priority
  let bestMatch: { category: string; response: string } | null = null
  let bestMatchCount = 0

  for (const [category, keywords] of Object.entries(CASE_20_KEYWORDS)) {
    for (const keyword of keywords) {
      if (matchesKeyword(keyword, normalized)) {
        const parts = keyword.includes("+") ? keyword.split("+").length : 1
        if (parts > bestMatchCount) {
          bestMatchCount = parts
          bestMatch = { category, response: CASE_20_RESPONSES[category] || CASE_20_RESPONSES.default }
        }
      }
    }
  }

  if (bestMatch) {
    return bestMatch
  }

  // RULE 3: No keyword match - return default fallback
  return { category: "default", response: CASE_20_RESPONSES.default }
}

// CASE 21 KEYWORDS (PULSATILLA NIGRICANS - PCOD)
export const CASE_21_KEYWORDS: Record<string, string[]> = {
  greeting_hi: ["hi", "hello", "hey"],
  greeting_ok: ["ok", "okk", "okay"],
  name: ["name", "what+name"],
  age: ["age", "how+old+you"],
  occupation: ["occupation", "what+do", "doing", "do"],
  marital: ["marriage", "married", "are+you+married", "single"],
  address: ["address", "where+live", "living"],
  chief_complaint: ["main+complain", "complaint", "chief+complaint"],
  location: ["where+pain", "which+side", "location+pain", "where+exactly"],
  sensation: ["sensation", "how+sensation", "how+feel", "how+pain"],
  aggravation: ["aggravation", "aggravates", "worse", "worsen", "when+worsen", "when+increase", "modality"],
  amelioration: ["amelioration", "ameliorates", "relief", "feel+good", "when+relief"],
  concomitant: ["concomitant", "any+other+complaint", "other", "other+symptom"],
  onset: ["onset", "when+start", "when+started", "when+begins"],
  duration: ["duration", "how+long", "how+many+days", "how+much+time"],
  progression: ["progression", "how+increase", "how+progressive"],
  history: ["history", "any+history", "past", "in+past"],
  family_history: ["family", "parents", "partner", "family+history"],
  appetite: ["appetite", "hunger", "eat", "eating", "meal"],
  thirst: ["thirst", "thirsty", "water", "water+drink"],
  tongue: ["tongue"],
  urine: ["urine", "urinate", "urinates", "pass+urine"],
  stool: ["stool", "bowel", "constipation"],
  desire: ["desire", "craving", "food+like", "like+eat"],
  aversion: ["aversion", "dislike", "don't+like"],
  sweat: ["sweat", "perspiration", "how+sweat"],
  sleep: ["sleep", "sleeping", "sleep+problem"],
  dreams: ["dream", "dreams", "dreaming"],
  thermals: ["thermal", "cold", "heat", "fever", "chilly"],
  mental: ["mental", "mentally", "anger", "any+anger", "when+angry", "angry", "how+react", "irritable", "irritates", "anxiety", "anxious", "mood", "mind", "fear", "mood+swings", "sad"],
}

// CASE 21 RESPONSES (EXACT - DO NOT MODIFY)
export const CASE_21_RESPONSES: Record<string, string> = {
  greeting_hi: "Hello doctor… (soft emotional tone) I was waiting to talk to you…",
  greeting_ok: "Okk doctor… (gentle and obedient tone)",
  name: "My name is Chandni Shah doctor… (soft voice) I feel very disturbed because of my periods…",
  age: "I am 23 years old doctor… (innocent tone) my cycle has been irregular for many months…",
  occupation: "I am a student doctor… (mild) stress of studies makes me more emotional.",
  marital: "No doctor… I am not married yet… (shy tone) but I worry about my future health.",
  address: "I live in Gujarat doctor… (calm tone) I feel better when I sit in open air.",
  chief_complaint: "My main complaint is irregular and delayed periods doctor… (slightly teary) sometimes they stop for 2–3 months…",
  location: "Pain is in my lower abdomen doctor… (holding stomach gently) shifting from side to side.",
  sensation: "It feels like cramping and heaviness doctor… (changeable description) sometimes mild, sometimes more.",
  aggravation: "It becomes worse in warm room doctor… (soft) I feel suffocated in heat.",
  amelioration: "I feel better in open air doctor… (relieved tone) cool fresh air makes me comfortable.",
  concomitant: "I have white discharge sometimes doctor… (embarrassed) and I cry easily without reason.",
  onset: "It started about one year ago doctor… (thinking softly) after emotional stress.",
  duration: "It has been irregular for almost one year doctor… (mildly worried).",
  progression: "Yes doctor… sometimes it improves, sometimes again delays… (changeable nature).",
  history: "I had normal cycles before doctor… (softly) this problem started gradually.",
  family_history: "My mother also had irregular periods doctor… (gentle tone).",
  appetite: "Appetite is normal doctor… (mild) but I don't feel very hungry sometimes.",
  thirst: "I am not very thirsty doctor… (keynote) I drink very little water.",
  tongue: "My tongue looks normal doctor… (soft tone).",
  urine: "Urine is normal doctor… nothing special.",
  stool: "Stool is normal doctor… sometimes slightly delayed.",
  desire: "I like sweets and ice cream doctor… (gentle smile).",
  aversion: "I don't like fatty food doctor… (mild dislike).",
  sweat: "Sweat is not much doctor… (normal).",
  sleep: "Sleep is disturbed doctor… (emotional) I think too much and cry at night.",
  dreams: "I dream of being alone doctor… (weepy feeling).",
  thermals: "I cannot tolerate heat doctor… (important) I always want fresh cool air.",
  mental: "I feel very emotional doctor… (tearful voice) I cry easily and want someone to console me.",
  default: "Please ask related case questions doctor..",
}

// CASE 21 DETECTION ENGINE (STRICT KEYWORD → RESPONSE MAPPING)
export function detectCase21Keywords(userInput: string): { category: string; response: string } | null {
  const normalized = normalize(userInput)
  const trimmed = userInput.trim()
  const words = trimmed.split(/\s+/)

  // RULE 1: Single word greeting
  if (words.length === 1) {
    const singleWord = normalized
    if (singleWord.startsWith("h")) {
      return { category: "greeting_hi", response: CASE_21_RESPONSES.greeting_hi }
    }
    if (singleWord.startsWith("o")) {
      return { category: "greeting_ok", response: CASE_21_RESPONSES.greeting_ok }
    }
  }

  // RULE 2: Multi-word keyword detection with priority
  let bestMatch: { category: string; response: string } | null = null
  let bestMatchCount = 0

  for (const [category, keywords] of Object.entries(CASE_21_KEYWORDS)) {
    for (const keyword of keywords) {
      if (matchesKeyword(keyword, normalized)) {
        const parts = keyword.includes("+") ? keyword.split("+").length : 1
        if (parts > bestMatchCount) {
          bestMatchCount = parts
          bestMatch = { category, response: CASE_21_RESPONSES[category] || CASE_21_RESPONSES.default }
        }
      }
    }
  }

  if (bestMatch) {
    return bestMatch
  }

  // RULE 3: No keyword match - return default fallback
  return { category: "default", response: CASE_21_RESPONSES.default }
}

// CASE 22 KEYWORDS (RUTA GRAVEOLENS - Ganglion cyst)
export const CASE_22_KEYWORDS: Record<string, string[]> = {
  greeting_hi: ["hi", "hello", "hey"],
  greeting_ok: ["ok", "okk", "okay"],
  name: ["name", "what+name"],
  age: ["age", "how+old+you"],
  occupation: ["occupation", "what+do", "doing", "do"],
  marital: ["marriage", "married", "are+you+married", "single"],
  address: ["address", "where+live", "living"],
  chief_complaint: ["main+complain", "complaint", "chief+complaint"],
  location: ["where+pain", "which+side", "location+pain", "where+exactly"],
  sensation: ["sensation", "how+sensation", "how+feel", "how+pain"],
  aggravation: ["aggravation", "aggravates", "worse", "worsen", "when+worsen", "when+increase", "modality"],
  amelioration: ["amelioration", "ameliorates", "relief", "feel+good", "when+relief"],
  concomitant: ["concomitant", "any+other+complaint", "other", "other+symptom"],
  onset: ["onset", "when+start", "when+started", "when+begins"],
  duration: ["duration", "how+long", "how+many+days", "how+much+time"],
  progression: ["progression", "how+increase", "how+progressive"],
  history: ["history", "any+history", "past", "in+past"],
  family_history: ["family", "parents", "partner", "family+history"],
  appetite: ["appetite", "hunger", "eat", "eating", "meal"],
  thirst: ["thirst", "thirsty", "water", "water+drink"],
  tongue: ["tongue"],
  urine: ["urine", "urinate", "urinates", "pass+urine"],
  stool: ["stool", "bowel", "constipation"],
  desire: ["desire", "craving", "food+like", "like+eat"],
  aversion: ["aversion", "dislike", "don't+like"],
  sweat: ["sweat", "perspiration", "how+sweat"],
  sleep: ["sleep", "sleeping", "sleep+problem"],
  dreams: ["dream", "dreams", "dreaming"],
  thermals: ["thermal", "cold", "heat", "fever", "chilly"],
  mental: ["mental", "mentally", "anger", "any+anger", "when+angry", "angry", "how+react", "irritable", "irritates", "anxiety", "anxious", "mood", "mind", "fear", "mood+swings", "sad"],
}

// CASE 22 RESPONSES (EXACT - DO NOT MODIFY)
export const CASE_22_RESPONSES: Record<string, string> = {
  greeting_hi: "Hello doctor… (slight discomfort but respectful tone)",
  greeting_ok: "Okk doctor… (mild pain tone)",
  name: "My name is Suresh doctor… (normal tone) this wrist swelling is disturbing my work.",
  age: "I am 32 years old doctor… (working age) I depend on my hands daily.",
  occupation: "I am a carpenter doctor… (important cause) I use my wrist continuously for heavy tools.",
  marital: "Yes doctor I am married… (simple tone) my work is getting affected.",
  address: "I live in Gujarat doctor… (plain tone).",
  chief_complaint: "My main complaint is this round swelling on my wrist doctor… (concerned) it feels hard.",
  location: "The swelling is on the back side of my right wrist doctor… (showing area).",
  sensation: "It feels like deep aching pain doctor… (as if bruised) especially when I move it.",
  aggravation: "It becomes worse from motion and overuse doctor… (keynote) lifting tools increases pain.",
  amelioration: "I feel better when I keep my wrist at rest doctor… (important modality).",
  concomitant: "I feel stiffness in the joint doctor… (tendon tightness) like it is strained.",
  onset: "It started after continuous heavy work doctor… (strain history).",
  duration: "It has been for about 2 months doctor… (persistent swelling).",
  progression: "Yes doctor it is slowly becoming more noticeable… (gradual increase).",
  history: "I had similar strain pain earlier doctor… (recurrent tendon weakness).",
  family_history: "No major family problem doctor… (neutral).",
  appetite: "Appetite is normal doctor… (healthy worker).",
  thirst: "I drink normal amount of water doctor… (nothing unusual).",
  tongue: "My tongue is normal doctor… (no coating).",
  urine: "Urine is normal doctor… (no complaint).",
  stool: "Stool is regular doctor… (no issue).",
  desire: "I like simple home food doctor… (normal desire).",
  aversion: "I don't have any special aversion doctor…",
  sweat: "Sweat is normal doctor… (during work mainly).",
  sleep: "Sleep is slightly disturbed doctor… (pain when turning wrist).",
  dreams: "No particular dreams doctor…",
  thermals: "I feel generally chilly doctor… (Ruta patient often sensitive to cold air).",
  mental: "I feel irritated when I cannot work doctor… (practical worker mindset).",
  default: "Doctor, please ask about my case symptoms.",
}

// CASE 22 DETECTION ENGINE (STRICT KEYWORD → RESPONSE MAPPING)
export function detectCase22Keywords(userInput: string): { category: string; response: string } | null {
  const normalized = normalize(userInput)
  const trimmed = userInput.trim()
  const words = trimmed.split(/\s+/)

  // RULE 1: Single word greeting
  if (words.length === 1) {
    const singleWord = normalized
    if (singleWord.startsWith("h")) {
      return { category: "greeting_hi", response: CASE_22_RESPONSES.greeting_hi }
    }
    if (singleWord.startsWith("o")) {
      return { category: "greeting_ok", response: CASE_22_RESPONSES.greeting_ok }
    }
  }

  // RULE 2: Multi-word keyword detection with priority
  let bestMatch: { category: string; response: string } | null = null
  let bestMatchCount = 0

  for (const [category, keywords] of Object.entries(CASE_22_KEYWORDS)) {
    for (const keyword of keywords) {
      if (matchesKeyword(keyword, normalized)) {
        const parts = keyword.includes("+") ? keyword.split("+").length : 1
        if (parts > bestMatchCount) {
          bestMatchCount = parts
          bestMatch = { category, response: CASE_22_RESPONSES[category] || CASE_22_RESPONSES.default }
        }
      }
    }
  }

  if (bestMatch) {
    return bestMatch
  }

  // RULE 3: No keyword match - return default fallback
  return { category: "default", response: CASE_22_RESPONSES.default }
}

// CASE 23 KEYWORDS (CALCAREA FLUORICA - Plantar fasciitis)
export const CASE_23_KEYWORDS: Record<string, string[]> = {
  greeting_hi: ["hi", "hello", "hey"],
  greeting_ok: ["ok", "okk", "okay"],
  name: ["name", "what+name"],
  age: ["age", "how+old+you"],
  occupation: ["occupation", "what+do", "doing", "do"],
  marital: ["marriage", "married", "are+you+married", "single"],
  address: ["address", "where+live", "living"],
  chief_complaint: ["main+complain", "complaint", "chief+complaint"],
  location: ["where+pain", "which+side", "location+pain", "where+exactly"],
  sensation: ["sensation", "how+sensation", "how+feel", "how+pain"],
  aggravation: ["aggravation", "aggravates", "worse", "worsen", "when+worsen", "when+increase", "modality"],
  amelioration: ["amelioration", "ameliorates", "relief", "feel+good", "when+relief"],
  concomitant: ["concomitant", "any+other+complaint", "other", "other+symptom"],
  onset: ["onset", "when+start", "when+started", "when+begins"],
  duration: ["duration", "how+long", "how+many+days", "how+much+time"],
  progression: ["progression", "how+increase", "how+progressive"],
  history: ["history", "any+history", "past", "in+past"],
  family_history: ["family", "parents", "partner", "family+history"],
  appetite: ["appetite", "hunger", "eat", "eating", "meal"],
  thirst: ["thirst", "thirsty", "water", "water+drink"],
  tongue: ["tongue"],
  urine: ["urine", "urinate", "urinates", "pass+urine"],
  stool: ["stool", "bowel", "constipation"],
  desire: ["desire", "craving", "food+like", "like+eat"],
  aversion: ["aversion", "dislike", "don't+like"],
  sweat: ["sweat", "perspiration", "how+sweat"],
  sleep: ["sleep", "sleeping", "sleep+problem"],
  dreams: ["dream", "dreams", "dreaming"],
  thermals: ["thermal", "cold", "heat", "fever", "chilly"],
  mental: ["mental", "mentally", "anger", "any+anger", "when+angry", "angry", "how+react", "irritable", "irritates", "anxiety", "anxious", "mood", "mind", "fear", "mood+swings", "sad"],
}

// CASE 23 RESPONSES (EXACT - DO NOT MODIFY)
export const CASE_23_RESPONSES: Record<string, string> = {
  greeting_hi: "Hello doctor… (polite tone) my heel pain is troubling me while walking.",
  greeting_ok: "Okk doctor… (calm tone) I will answer your questions.",
  name: "My name is Mahesh doctor… (normal tone) heel pain is disturbing my daily work.",
  age: "I am 46 years old doctor… (calm tone) the pain started a few months ago.",
  occupation: "I run a small shop doctor… (explaining) I have to stand for long hours.",
  marital: "Yes doctor I am married… (simple reply) my family asked me to check this pain.",
  address: "I live in Gujarat doctor… (plain tone).",
  chief_complaint: "My main complaint is severe pain in the heel doctor… especially when I walk.",
  location: "The pain is in my heel doctor… mostly at the bottom of the foot.",
  sensation: "It feels like sharp stabbing pain doctor… especially when I step on the foot.",
  aggravation: "Pain becomes worse when I start walking or stand for long time doctor.",
  amelioration: "I feel better after some rest doctor… and when I sit down.",
  concomitant: "There is stiffness in the foot doctor… especially in the morning.",
  onset: "It started slowly doctor… first mild pain then gradually increased.",
  duration: "It has been about 4 months doctor.",
  progression: "Yes doctor it slowly became worse… now walking long distance is difficult.",
  history: "I usually stand for long hours doctor… maybe that caused this pain.",
  family_history: "No major disease in family doctor.",
  appetite: "Appetite is normal doctor.",
  thirst: "I drink moderate water doctor.",
  tongue: "My tongue looks normal doctor.",
  urine: "Urine is normal doctor.",
  stool: "Stool is regular doctor.",
  desire: "I like spicy food doctor.",
  aversion: "I don't like very sour food doctor.",
  sweat: "Sweat is normal doctor.",
  sleep: "Sleep is good doctor.",
  dreams: "No particular dreams doctor.",
  thermals: "I feel comfortable in normal temperature doctor.",
  mental: "I feel worried because the pain affects my work doctor.",
  default: "Doctor, please ask about my case symptoms.",
}

// CASE 23 DETECTION ENGINE (STRICT KEYWORD → RESPONSE MAPPING)
export function detectCase23Keywords(userInput: string): { category: string; response: string } | null {
  const normalized = normalize(userInput)
  const trimmed = userInput.trim()
  const words = trimmed.split(/\s+/)

  // RULE 1: Single word greeting
  if (words.length === 1) {
    const singleWord = normalized
    if (singleWord.startsWith("h")) {
      return { category: "greeting_hi", response: CASE_23_RESPONSES.greeting_hi }
    }
    if (singleWord.startsWith("o")) {
      return { category: "greeting_ok", response: CASE_23_RESPONSES.greeting_ok }
    }
  }

  // RULE 2: Multi-word keyword detection with priority
  let bestMatch: { category: string; response: string } | null = null
  let bestMatchCount = 0

  for (const [category, keywords] of Object.entries(CASE_23_KEYWORDS)) {
    for (const keyword of keywords) {
      if (matchesKeyword(keyword, normalized)) {
        const parts = keyword.includes("+") ? keyword.split("+").length : 1
        if (parts > bestMatchCount) {
          bestMatchCount = parts
          bestMatch = { category, response: CASE_23_RESPONSES[category] || CASE_23_RESPONSES.default }
        }
      }
    }
  }

  if (bestMatch) {
    return bestMatch
  }

  // RULE 3: No keyword match - return default fallback
  return { category: "default", response: CASE_23_RESPONSES.default }
}

// Detect keywords in user input
export function detectKeywords(userInput: string): DetectionResult {
  const normalized = normalize(userInput)
  const matches: KeywordMatch[] = []

  for (const [category, keywords] of Object.entries(MASTER_KEYWORDS)) {
    for (const keyword of keywords) {
      if (matchesKeyword(keyword, normalized)) {
        matches.push({
          category: category as KeywordCategory,
          priority: PRIORITY_ORDER[category as KeywordCategory],
          confidence: 0.9,
        })
        break // Only count once per category
      }
    }
  }

  // Sort by priority (descending)
  matches.sort((a, b) => b.priority - a.priority)

  return {
    matches,
    primaryMatch: matches[0] || null,
    detectedText: normalized,
  }
}

// Log detection for analytics
export function logDetection(caseId: number, userInput: string, result: DetectionResult, response: string) {
  const log = {
    timestamp: new Date().toISOString(),
    caseId,
    userInput,
    detectedCategories: result.matches.map((m) => m.category),
    primaryCategory: result.primaryMatch?.category || null,
    response,
  }

  // Store in localStorage for analytics (max 100 entries)
  const existing = JSON.parse(localStorage.getItem("hr_detection_logs") || "[]")
  const updated = [log, ...existing].slice(0, 100)
  localStorage.setItem("hr_detection_logs", JSON.stringify(updated))
}
