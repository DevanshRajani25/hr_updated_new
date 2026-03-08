export function detectAndRespond(userInput: string): string {
  const input = userInput.trim().toLowerCase()
  const words = input.split(/\s+/)

  // Casual Greeting Rule 1: h/H
  if (words.length === 1 && input.match(/^h/)) {
    return "Hello doctor.."
  }

  // Casual Greeting Rule 2: o/O
  if (words.length === 1 && input.match(/^o/)) {
    return "Okk doctor.."
  }

  const keywords = {
    name: ["name", "what+name"],
    age: ["age", "how+old+you"],
    occupation: ["occupation", "what+do", "doing", "do"],
    marital: ["marriage", "married", "are+you+married", "single"],
    address: ["address", "where+live", "living"],
    chiefComplaint: ["main+complain", "complaint", "chief+complaint"],
    location: ["where+pain", "which+side", "location+pain", "where+exactly+pain"],
    sensation: ["sensation", "how+sensation", "how+feel", "how+pain"],
    aggravation: ["aggravation", "aggravates", "worse", "worsen", "when+worsen", "when+pain+increase", "modality"],
    amelioration: ["amelioration", "ameliorates", "relief", "feel+good", "when+relief", "modality"],
    concomitant: ["concomitant", "any+other+complaint", "other", "other+symptom"],
    onset: ["onset", "when+start", "when+started", "when+begins"],
    duration: ["duration", "how+long", "how+many+days", "how+much+time"],
    progression: ["progression", "how+increase", "how+progressive"],
    history: ["history", "any+history", "past", "in+past"],
    family: ["family", "parents", "partner", "family+history"],
    appetite: ["appetite", "hunger", "eat", "eating", "meal"],
    thirst: ["thirst", "thirsty", "water", "water+drink"],
    tongue: ["tongue"],
    stool: ["stool", "bowel", "constipation"],
    urine: ["urine", "urinate", "urinates", "pass+urine"],
    desire: ["desire", "craving", "food+like", "like+eat"],
    aversion: ["aversion", "dislike", "don't+like"],
    sweat: ["sweat", "perspiration", "how+sweat"],
    sleep: ["sleep", "sleeping", "sleep+problem"],
    dreams: ["dream", "dreams", "dreaming"],
    thermals: ["thermal", "cold", "heat", "fever", "chilly"],
    mental: ["mental", "mentals", "mentally", "anger", "any+anger", "angry", "how+react", "irritable", "irritates", "anxiety", "anxious", "mood", "mind", "fear", "mood+swings", "sad"],
  }

  const responses = {
    name: [
      "My name is Vimal doctor… I'm feeling very irritated because of this pain, even speaking makes me uncomfortable.",
      "I am Vimal doctor… please understand my pain is unbearable.",
    ],
    age: [
      "I am 32 years old doctor… I usually tolerate pain well, but this pain is unbearable.",
      "My age is 32 doctor… I've never felt such extreme pain.",
    ],
    occupation: [
      "I work in an office doctor… sitting and concentrating is difficult because my mind keeps going to this pain.",
      "I do office work doctor… but I can't focus at all.",
    ],
    marital: [
      "I am married doctor… my wife keeps telling me to get treatment because I've become very irritable.",
      "Yes I'm married doctor… my irritability is affecting my family.",
    ],
    address: [
      "I live in Surat doctor… and lately even normal air feels too cold for me.",
      "My address is Surat doctor.",
    ],
    chiefComplaint: [
      "My main complaint is this painful swelling in the beard area doctor… it feels like it will burst any time.",
      "This painful swelling below my jaw troubles me immensely doctor.",
    ],
    location: [
      "It is on the neck, just below the jaw on the beard area where I shave.",
      "The swelling is exactly where I get irritation from shaving.",
    ],
    sensation: [
      "The pain is sharp, like a splinter is stuck inside… even air touching it causes pain.",
      "There's extreme tenderness and sharp, jabbing sensation doctor.",
    ],
    aggravation: [
      "It becomes worse from touch and cold air doctor… even the fan increases the pain.",
      "Any contact makes it worse… cold is unbearable.",
    ],
    amelioration: [
      "Warmth gives me relief doctor… covering it or hot application feels soothing.",
      "Keeping it warm helps… that's the only relief I get.",
    ],
    concomitant: [
      "I feel feverish and extremely irritable… even small things make me angry.",
      "There's fever and I'm very irritable with everyone.",
    ],
    onset: [
      "It started after shaving doctor… first as a small pimple and then worsened.",
      "Right after I shaved, this painful lump appeared.",
    ],
    duration: [
      "It has been around 4–5 days doctor… and pain increases daily.",
      "This started few days ago and gets worse each day.",
    ],
    progression: [
      "Yes doctor, it is increasing fast… swelling and pain are both getting worse.",
      "The swelling is spreading and pain is intensifying.",
    ],
    history: [
      "I had similar boils earlier also doctor… but this one is much more painful.",
      "I've had such boils before but never this severe.",
    ],
    family: [
      "No one in my family has this problem doctor.",
      "No such illness in my family history doctor.",
    ],
    appetite: [
      "My appetite is reduced doctor… pain spoils my mood for eating.",
      "I don't feel like eating because of the pain.",
    ],
    thirst: [
      "I feel more thirsty doctor… I prefer warm water.",
      "Thirst is increased… I want warm water.",
    ],
    tongue: [
      "My tongue looks slightly coated doctor.",
      "Tongue appears coated with a slight white layer.",
    ],
    stool: [
      "Stool is normal doctor.",
      "No bowel issues doctor.",
    ],
    urine: [
      "Urine is normal doctor… no burning.",
      "Urination is normal, no problems.",
    ],
    desire: [
      "I prefer warm food doctor… cold things don't suit me.",
      "I want only warm food right now.",
    ],
    aversion: [
      "I don't like cold food or cold drinks doctor.",
      "Anything cold is unbearable for me.",
    ],
    sweat: [
      "Sweat is normal but I feel chilly easily.",
      "No excessive sweating but I'm always cold.",
    ],
    sleep: [
      "My sleep is disturbed doctor… pain wakes me up and I can't lie on that side.",
      "Pain prevents me from sleeping properly.",
    ],
    dreams: [
      "No particular dreams doctor… sleep is broken.",
      "Sleep is light and interrupted.",
    ],
    thermals: [
      "I am very sensitive to cold doctor… warmth always makes me feel better.",
      "Cold increases my discomfort… I need warmth always.",
    ],
    mental: [
      "I get angry very easily doctor… even small things irritate me. Pain makes me aggressive and restless.",
      "I'm extremely irritable now… everything bothers me. The pain makes my mood swing rapidly.",
    ],
  }

  function matchKeywords(input: string, keywordArray: string[]): boolean {
    for (const kw of keywordArray) {
      const parts = kw.split("+")
      if (parts.length === 1) {
        if (input.includes(parts[0])) return true
      } else {
        const allMatch = parts.every(part => input.includes(part))
        if (allMatch) return true
      }
    }
    return false
  }

  function getRandomResponse(category: keyof typeof responses): string {
    const categoryResponses = responses[category]
    return categoryResponses[Math.floor(Math.random() * categoryResponses.length)]
  }

  for (const [category, keywordArray] of Object.entries(keywords)) {
    if (matchKeywords(input, keywordArray)) {
      return getRandomResponse(category as keyof typeof responses)
    }
  }

  const fallbacks = [
    "Please tell me more about your symptoms.",
    "Can you explain that in detail?",
    "I need more information to understand your condition.",
    "Could you describe your discomfort better?",
    "Tell me more about what you're experiencing.",
  ]
  return fallbacks[Math.floor(Math.random() * fallbacks.length)]
}

export function detectAndRespondCase14(userInput: string): string {
  return detectAndRespond(userInput)
}
