// Case 4 (Ferrum Phosphoricum - Ramesh Patel) - Complete keyword-response mapping
// 28 keyword categories with 2-3 responses each for natural variation

export interface KeywordResponse {
  category: string
  keywords: string[]
  responses: string[]
}

export const CASE_4_KEYWORDS: KeywordResponse[] = [
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
      "My name is Ramesh Patel.",
      "I'm Ramesh Patel... the one with sudden nosebleed.",
      "Ramesh Patel here, doctor.",
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
    responses: ["I'm 27 years old.", "Twenty-seven, doctor.", "I'm 27... feeling weak after the bleeding."],
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
    responses: ["I'm single right now.", "Not married yet, doctor.", "Single... I live with my parents at the moment."],
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
      "I work as a software developer.",
      "I'm in IT... mostly desk work, but I get these bleeds suddenly.",
      "Software developer by profession... wasn't doing anything strenuous when it started.",
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
      "I live in Pune, Maharashtra.",
      "My home is in Pune... near Kothrud area.",
      "I stay in Pune with my family.",
    ],
  },
  // 6. CHIEF COMPLAINT
  {
    category: "chief",
    keywords: ["chief+complaint", "main+complaint", "complaint", "problem"],
    responses: [
      "My nose suddenly started bleeding a few minutes ago.",
      "The main problem is this sudden nosebleed... bright red blood.",
      "This nosebleed started without any reason, doctor.",
    ],
  },
  // 7. LOCATION OF COMPLAINT
  {
    category: "location",
    keywords: [
      "where+pain",
      "where+problem",
      "which+part",
      "pain+area",
      "affected+part",
      "which+side",
      "complaint+location",
      "where+bleed",
      "nostril",
      "nose",
      "location",
      "site",
    ],
    responses: [
      "The blood is mostly coming from my right nostril.",
      "It's mainly the right side of my nose that's bleeding.",
      "Right nostril, doctor... that's where the bleeding is.",
    ],
  },
  // 8. SENSATION
  {
    category: "sensation",
    keywords: ["sensation", "how+feel", "how+pain", "blood+like", "color+blood"],
    responses: [
      "It's bright red and fresh blood.",
      "The blood looks very red... fresh and bright.",
      "Feels like it's coming from inside... bright red blood flowing out.",
    ],
  },
  // 9. ONSET / WHEN STARTED
  {
    category: "onset",
    keywords: ["when+start", "when+started", "when+begins", "onset", "how+begin", "since", "when+happen", "time"],
    responses: [
      "It suddenly started just a few minutes ago while I was sitting.",
      "Started suddenly, doctor... I was just working on my laptop.",
      "It began all of a sudden about 10 minutes back.",
    ],
  },
  // 10. CAUSE / INJURY
  {
    category: "cause",
    keywords: ["cause", "injury", "hurt", "trauma", "hit", "reason", "why", "trigger"],
    responses: [
      "No, I didn't get hurt. It just started on its own.",
      "No injury, doctor... no trauma at all.",
      "There was no reason... no blow or fall. It just happened suddenly.",
    ],
  },
  // 11. WEAKNESS / DIZZY
  {
    category: "weakness",
    keywords: ["weak", "weakness", "dizzy", "dizziness", "faint", "tired", "energy"],
    responses: [
      "Yes, I'm feeling a little weak after the bleeding.",
      "I feel slightly dizzy now... probably from the blood loss.",
      "There's some weakness, doctor... I feel tired suddenly.",
    ],
  },
  // 12. HEADACHE / FEVER
  {
    category: "headache",
    keywords: ["headache", "fever", "temperature", "head+pain", "hot"],
    responses: [
      "No headache or fever right now.",
      "I don't have fever, doctor... just the bleeding.",
      "No headache... just feeling weak from the nosebleed.",
    ],
  },
  // 13. HISTORY / PAST / SUMMER
  {
    category: "history",
    keywords: ["history", "past", "before", "earlier", "summer", "hot", "season", "previous"],
    responses: [
      "I get nosebleeds often in summer when the weather is hot.",
      "Yes, this happens to me... especially during hot weather.",
      "I've had nosebleeds before, mostly in summer or when it's very warm.",
    ],
  },
  // 14. FAMILY HISTORY
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
      "My father also used to get nosebleeds when he was younger.",
      "Some family members have anemia issues, doctor.",
      "Yes, there's a family tendency... my father had similar bleeding problems.",
    ],
  },
  // 15. APPETITE
  {
    category: "appetite",
    keywords: ["appetite", "hunger", "eat", "food", "meal", "diet", "hungry"],
    responses: [
      "My appetite is normal, doctor.",
      "I eat regularly... no issues with appetite.",
      "Food intake is fine, nothing unusual there.",
    ],
  },
  // 16. THIRST
  {
    category: "thirst",
    keywords: ["thirst", "drink", "thirsty", "water", "drinking"],
    responses: [
      "I feel moderately thirsty.",
      "Thirst is normal... I drink water regularly.",
      "Not too thirsty, just the usual amount of water.",
    ],
  },
  // 17. STOOL
  {
    category: "stool",
    keywords: ["stool", "bowel", "motion", "constipation", "loose"],
    responses: ["My bowel movements are regular.", "Stool is normal, doctor.", "No issues with bowel movements."],
  },
  // 18. URINE
  {
    category: "urine",
    keywords: ["urine", "urination", "pee", "bladder", "passing"],
    responses: ["Urination is normal.", "No problems with urine, doctor.", "Everything is fine with urination."],
  },
  // 19. SLEEP
  {
    category: "sleep",
    keywords: ["sleep", "sleeping", "rest", "night", "tired"],
    responses: ["I sleep well normally.", "Sleep is fine, doctor... no disturbances.", "I get adequate rest at night."],
  },
  // 20. MENTAL STATE
  {
    category: "mental",
    keywords: ["mental", "mood", "emotions", "anxious", "worried", "stress", "tension"],
    responses: [
      "I'm a bit worried about the bleeding, but otherwise okay.",
      "Feeling anxious now because of the sudden bleeding.",
      "Mentally I'm fine, just concerned about this nosebleed.",
    ],
  },
  // 21. CONCOMITANT SYMPTOMS
  {
    category: "concomitant",
    keywords: ["other+complaint", "other+problem", "additional+symptom", "anything+else", "associated", "along+with"],
    responses: [
      "Just the bleeding and slight weakness, nothing else.",
      "No other symptoms, doctor... only the nosebleed.",
      "Apart from feeling weak, there's nothing else bothering me.",
    ],
  },
  // 22. DURATION
  {
    category: "duration",
    keywords: ["how+long", "duration", "how+many+minutes", "time", "since+when"],
    responses: [
      "It's been about 10-15 minutes now.",
      "Started about a quarter hour ago.",
      "Maybe 10 minutes or so since it began.",
    ],
  },
  // 23. TONGUE
  {
    category: "tongue",
    keywords: ["tongue", "show+tongue", "coated", "color"],
    responses: ["My tongue looks normal, doctor.", "It's clean, no coating.", "Tongue appears normal to me."],
  },
  // 24. SWEAT
  {
    category: "sweat",
    keywords: ["sweat", "sweating", "perspiration", "hot"],
    responses: [
      "I don't sweat much normally.",
      "Sweating is minimal, doctor.",
      "Not much perspiration... I generally don't sweat heavily.",
    ],
  },
  // 25. THERMALS
  {
    category: "thermal",
    keywords: ["hot", "cold", "temperature", "feel+hot", "feel+cold", "warmth"],
    responses: [
      "I generally feel warm... heat bothers me.",
      "I prefer cool environments, doctor.",
      "I'm more comfortable in cooler weather.",
    ],
  },
  // 26. AGGRAVATION
  {
    category: "aggravation",
    keywords: ["worse", "worsen", "aggravate", "increase", "trigger"],
    responses: [
      "It gets worse in hot weather.",
      "Heat makes it more likely to happen.",
      "During summer or when I'm in warm places, it happens more.",
    ],
  },
  // 27. AMELIORATION
  {
    category: "amelioration",
    keywords: ["better", "relief", "improve", "ease", "less"],
    responses: [
      "It usually stops on its own after some time.",
      "Applying cold helps a bit, doctor.",
      "Rest and staying calm seems to help it stop.",
    ],
  },
  // 28. FALLBACK
  {
    category: "fallback",
    keywords: [],
    responses: [
      "Could you ask that in a different way, doctor?",
      "I'm not sure I understand... can you rephrase?",
      "Hmm... I'm feeling a bit weak. What was that again?",
      "Sorry, I'm a bit distracted by the bleeding. Can you repeat?",
    ],
  },
]

// Helper: Get response and avoid repetition
let lastFallbackIndex = -1

export function getRandomResponse(category: string): string {
  const found = CASE_4_KEYWORDS.find((kw) => kw.category === category)
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
  for (const keywordGroup of CASE_4_KEYWORDS) {
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
