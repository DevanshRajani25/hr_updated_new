// Case 5 (Ignatia Amara - Anjali Mehta) - Complete keyword-response mapping
// 28 keyword categories with 2-3 responses each for natural variation

export interface KeywordResponse {
  category: string
  keywords: string[]
  responses: string[]
}

export const CASE_5_KEYWORDS: KeywordResponse[] = [
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
    responses: ["My name is Anjali Mehta.", "I'm Anjali... Anjali Mehta.", "Anjali Mehta, doctor... I'm a teacher."],
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
    responses: ["I'm 29 years old.", "Twenty-nine, doctor.", "I'm 29... but I feel much older inside."],
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
      "I'm single right now.",
      "Not married, doctor... I live with my parents.",
      "Single... sometimes I wonder if that's part of why I feel so lonely.",
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
    ],
    responses: [
      "I'm a teacher... I teach young children.",
      "I work as a teacher, but lately, even that feels like a burden.",
      "Teaching is my profession... I used to love it, but now everything feels heavy.",
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
      "I live in Mumbai with my parents.",
      "My home is in Mumbai... Andheri area.",
      "I stay with my family in Mumbai.",
    ],
  },
  // 6. CHIEF COMPLAINT
  {
    category: "chief",
    keywords: ["chief+complaint", "main+complaint", "complaint", "problem", "matter"],
    responses: [
      "Doctor... I feel so low these days... nothing excites me anymore.",
      "The main problem is this constant sadness... I cry without reason.",
      "I just feel empty, doctor... like there's no light in my life.",
    ],
  },
  // 7. SADNESS / DEPRESSION / LOW MOOD
  {
    category: "sadness",
    keywords: [
      "sad",
      "sadness",
      "cry",
      "crying",
      "low",
      "hopeless",
      "depression",
      "unhappy",
      "tearful",
      "tears",
      "mood",
      "down",
      "empty",
    ],
    responses: [
      "Yes... I cry often without any reason... it feels like there's no light in my life.",
      "The sadness is overwhelming, doctor... I don't know how to explain it.",
      "I feel this deep emptiness inside... like nothing matters anymore.",
    ],
  },
  // 8. ONSET / WHEN STARTED
  {
    category: "onset",
    keywords: ["when+start", "when+started", "when+begins", "onset", "how+begin", "since+when"],
    responses: [
      "It started about three months ago... gradually got worse.",
      "I've been feeling this way for the past few months.",
      "It began slowly, doctor... now it feels unbearable.",
    ],
  },
  // 9. CAUSE / TRIGGER
  {
    category: "cause",
    keywords: ["cause", "reason", "why", "trigger", "happened", "grief", "loss", "trauma"],
    responses: [
      "I don't know exactly... maybe stress from work and life.",
      "There was no specific event, doctor... it just crept up on me.",
      "I lost a close friend last year... maybe that started it.",
    ],
  },
  // 10. SLEEP
  {
    category: "sleep",
    keywords: ["sleep", "sleeping", "night", "insomnia", "rest", "wake", "awake"],
    responses: [
      "I can't sleep well... I wake up at night and keep thinking about useless things.",
      "Sleep is very disturbed, doctor... I lie awake for hours.",
      "Even when I sleep, I wake up feeling tired and heavy.",
    ],
  },
  // 11. APPETITE / FOOD
  {
    category: "appetite",
    keywords: ["appetite", "hunger", "eat", "ate", "food", "meal", "diet", "eating", "hungry"],
    responses: [
      "I hardly feel hungry... sometimes I skip meals without noticing.",
      "My appetite has completely gone down, doctor.",
      "Food doesn't interest me anymore... I eat just because I have to.",
    ],
  },
  // 12. ENERGY / WORK / TIREDNESS
  {
    category: "energy",
    keywords: ["energy", "work", "teaching", "routine", "tired", "fatigue", "exhausted", "weak"],
    responses: [
      "Even teaching my students feels like a burden... I feel tired all the time.",
      "I have no energy, doctor... everything feels so exhausting.",
      "I used to love my work, but now I can barely get through the day.",
    ],
  },
  // 13. SUICIDAL THOUGHTS / FEAR
  {
    category: "suicide",
    keywords: ["fear", "suicide", "suicidal", "die", "death", "end+life", "harm", "kill", "thoughts"],
    responses: [
      "Doctor... sometimes I feel life is meaningless... but I don't have courage to end it.",
      "Yes... I've had such thoughts, but they scare me too.",
      "Sometimes I think it would be easier to just... stop. But I'm too afraid.",
    ],
  },
  // 14. CONSOLATION / SYMPATHY
  {
    category: "consolation",
    keywords: ["console", "consolation", "sympathy", "comfort", "support", "help+you"],
    responses: [
      "I don't like when people try to console me... it makes me feel worse.",
      "Sympathy doesn't help, doctor... it just makes me cry more.",
      "I prefer being alone... consolation irritates me somehow.",
    ],
  },
  // 15. SIGHING / BREATHING
  {
    category: "sighing",
    keywords: ["sigh", "sighing", "breath", "breathing", "deep+breath"],
    responses: [
      "Yes, I sigh a lot... like I can't take a full breath.",
      "I find myself sighing deeply all the time.",
      "It's like there's a weight on my chest... I keep sighing.",
    ],
  },
  // 16. MENTAL STATE / EMOTIONS
  {
    category: "mental",
    keywords: ["mental", "mind", "mood", "emotions", "emotional", "sensitive", "feeling"],
    responses: [
      "I'm very emotional, doctor... even small things make me cry.",
      "My mind feels foggy and heavy all the time.",
      "I've always been sensitive, but now it's unbearable.",
    ],
  },
  // 17. PAST HISTORY / ILLNESS HISTORY
  {
    category: "history",
    keywords: ["past", "before", "illness", "history", "earlier", "previous", "childhood"],
    responses: [
      "No major illness before... but I was always sensitive and emotional since childhood.",
      "I've been this way since I was young... sensitive to everything.",
      "No serious health problems in the past, just this emotional nature.",
    ],
  },
  // 18. FAMILY HISTORY
  {
    category: "family",
    keywords: [
      "family+history",
      "disease+in+family",
      "parents+health",
      "mother+illness",
      "father+illness",
      "hereditary",
      "genetic",
      "family+problem",
    ],
    responses: [
      "My mother also tends to be very emotional and sensitive.",
      "There's some anxiety in my family, doctor.",
      "My mother has similar tendencies... she worries a lot too.",
    ],
  },
  // 19. THIRST
  {
    category: "thirst",
    keywords: ["thirst", "drink", "thirsty", "water", "drinking"],
    responses: [
      "My thirst is normal, doctor.",
      "I drink water regularly... no issues there.",
      "Thirst is fine... nothing unusual.",
    ],
  },
  // 20. STOOL
  {
    category: "stool",
    keywords: ["stool", "bowel", "motion", "constipation", "loose"],
    responses: ["My bowel movements are regular.", "Stool is normal, doctor.", "No problems with bowel movements."],
  },
  // 21. URINE
  {
    category: "urine",
    keywords: ["urine", "urination", "pee", "bladder", "passing"],
    responses: ["Urination is normal.", "No problems with urine, doctor.", "Everything is fine with urination."],
  },
  // 22. SWEAT
  {
    category: "sweat",
    keywords: ["sweat", "sweating", "perspiration", "hot"],
    responses: [
      "I don't sweat much normally.",
      "Sweating is minimal, doctor.",
      "Not much perspiration... nothing unusual there.",
    ],
  },
  // 23. TONGUE
  {
    category: "tongue",
    keywords: ["tongue", "show+tongue", "coated", "color"],
    responses: ["My tongue looks normal, doctor.", "It's clean, no coating.", "Tongue appears normal to me."],
  },
  // 24. THERMALS
  {
    category: "thermal",
    keywords: ["hot", "cold", "temperature", "feel+hot", "feel+cold", "warmth"],
    responses: [
      "I don't have any particular preference for hot or cold.",
      "Temperature doesn't bother me much, doctor.",
      "I'm comfortable in normal weather.",
    ],
  },
  // 25. AGGRAVATION / WORSE
  {
    category: "aggravation",
    keywords: ["worse", "worsen", "aggravate", "increase", "trigger", "bad"],
    responses: [
      "It gets worse when I'm alone and start thinking too much.",
      "Consolation makes it worse... I prefer to be left alone.",
      "At night, when everything is quiet, the sadness feels heavier.",
    ],
  },
  // 26. AMELIORATION / BETTER
  {
    category: "amelioration",
    keywords: ["better", "relief", "improve", "ease", "less", "good"],
    responses: [
      "I feel slightly better when I'm busy with work.",
      "Distraction helps a bit, but it doesn't last.",
      "Sometimes being around students makes me forget for a while.",
    ],
  },
  // 27. CONCOMITANT / OTHER SYMPTOMS
  {
    category: "concomitant",
    keywords: ["other+complaint", "other+problem", "additional+symptom", "anything+else", "associated", "along+with"],
    responses: [
      "Just this sadness and sleeplessness, doctor... nothing else major.",
      "No other physical problems... just this emotional heaviness.",
      "Apart from feeling low, everything else seems fine physically.",
    ],
  },
  // 28. FALLBACK
  {
    category: "fallback",
    keywords: [],
    responses: [
      "I... I can't express it well, doctor. Please ask differently.",
      "Sorry... my mind feels foggy. What was that again?",
      "Could you rephrase that? I'm having trouble focusing.",
      "I'm sorry, I didn't understand... can you ask another way?",
    ],
  },
]

// Helper: Get response and avoid repetition
let lastFallbackIndex = -1

export function getRandomResponse(category: string): string {
  const found = CASE_5_KEYWORDS.find((kw) => kw.category === category)
  if (!found || found.responses.length === 0) {
    return "I'm finding it hard to think clearly right now."
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
  for (const keywordGroup of CASE_5_KEYWORDS) {
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
