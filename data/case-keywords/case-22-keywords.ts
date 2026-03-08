// CASE 22 – RUTA GRAVEOLENS (Ganglion Cyst)
// BULLETPROOF KEYWORD DETECTION SYSTEM
// This system MUST detect keywords and respond with EXACT predefined responses

const CASE_22_KEYWORDS = {
  greeting_hi: ["hi", "hello", "hey"],
  greeting_ok: ["ok", "okk", "okay"],
  name: ["name", "what name", "what's name"],
  age: ["age", "how old", "how old are you", "how old you"],
  occupation: ["occupation", "what do", "doing", "do you do", "do you work"],
  marital: ["marriage", "married", "are you married", "single"],
  address: ["address", "where live", "where do you live", "living", "where you live"],
  chief_complaint: ["main complaint", "complaint", "chief complaint", "main complain"],
  location: ["where pain", "which side", "location pain", "where exactly", "where is pain"],
  sensation: ["sensation", "how sensation", "how feel", "how pain", "how does it feel"],
  aggravation: ["aggravation", "aggravates", "worse", "worsen", "when worsen", "when pain increase", "when increase", "modality"],
  amelioration: ["amelioration", "ameliorates", "relief", "feel good", "when relief", "when feel better"],
  concomitant: ["concomitant", "any other complaint", "other symptom", "other", "other complaint"],
  onset: ["onset", "when start", "when started", "when begins", "when did start"],
  duration: ["duration", "how long", "how many days", "how much time", "how long it"],
  progression: ["progression", "how increase", "how progressive", "is it increasing"],
  history: ["history", "any history", "past", "in past", "past history"],
  family_history: ["family", "parents", "partner", "family history"],
  appetite: ["appetite", "hunger", "eat", "eating", "meal"],
  thirst: ["thirst", "thirsty", "water", "water drink", "drinking water"],
  tongue: ["tongue"],
  urine: ["urine", "urinate", "urinates", "pass urine"],
  stool: ["stool", "bowel", "constipation"],
  desire: ["desire", "craving", "food like", "like eat", "like to eat"],
  aversion: ["aversion", "dislike", "don't like", "dislike food"],
  sweat: ["sweat", "perspiration", "how sweat"],
  sleep: ["sleep", "sleeping", "sleep problem", "sleep disturbance"],
  dreams: ["dream", "dreams", "dreaming"],
  thermals: ["thermal", "cold", "heat", "fever", "chilly"],
  mental: ["mental", "mentally", "anger", "any anger", "when angry", "angry", "how react", "irritable", "irritates", "anxiety", "anxious", "mood", "mind", "fear", "mood swings", "sad"],
}

const CASE_22_RESPONSES = {
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
}

// HELPER FUNCTION: Check if keyword matches
function matchesKeyword(keyword: string, normalizedInput: string): boolean {
  // Handle multi-word keywords (separated by +)
  if (keyword.includes("+")) {
    const words = keyword.split("+")
    // All words must be present in input
    return words.every(word => normalizedInput.includes(word))
  }
  // Single word keyword
  return normalizedInput.includes(keyword)
}

// MAIN DETECTION ENGINE FOR CASE 22
export function detectAndRespond(userInput: string): string {
  const normalized = userInput.toLowerCase().trim()
  const words = userInput.trim().split(/\s+/)

  // RULE 1: Single word greeting (highest priority)
  if (words.length === 1) {
    if (normalized.startsWith("h")) {
      return CASE_22_RESPONSES.greeting_hi
    }
    if (normalized.startsWith("o")) {
      return CASE_22_RESPONSES.greeting_ok
    }
  }

  // RULE 2: Multi-word keyword matching with best-match priority
  let bestMatch: { category: string; response: string } | null = null
  let bestMatchScore = 0

  for (const [category, keywords] of Object.entries(CASE_22_KEYWORDS)) {
    for (const keyword of keywords) {
      if (matchesKeyword(keyword, normalized)) {
        // Score based on keyword specificity (longer = more specific)
        const score = keyword.includes("+") ? keyword.split("+").length : 1
        if (score > bestMatchScore) {
          bestMatchScore = score
          bestMatch = {
            category,
            response: CASE_22_RESPONSES[category as keyof typeof CASE_22_RESPONSES] || "Doctor, please ask about my case symptoms.",
          }
        }
      }
    }
  }

  if (bestMatch) {
    return bestMatch.response
  }

  // RULE 3: No match - stay in character
  return "Doctor, please ask about my case symptoms."
}
