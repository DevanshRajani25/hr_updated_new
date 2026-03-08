export function detectAndRespond(userInput: string): string {
  const input = userInput.trim().toLowerCase()

  // Casual greeting rule - single word starting with h/H
  const words = input.split(/\s+/)
  if (words.length === 1 && input.match(/^h/)) {
    return "Hello doctor… (slow, reserved) please ask gently, this swelling near my ear worries me a lot."
  }

  // Keyword detection system
  const keywords = {
    name: ["name", "what+name"],
    age: ["age", "how+old+you"],
    gender: ["gender", "male", "female"],
    occupation: ["occupation", "what+do", "doing", "do"],
    marital: ["marriage", "married", "are+you+married", "single"],
    address: ["address", "where+live", "living"],
    chiefComplaint: ["main+complain", "complaint", "chief+complaint"],
    location: ["where+pain", "which+side", "location+pain", "where+exactly+pain"],
    sensation: ["sensation", "how+sensation", "how+feel", "how+pain"],
    character: ["type", "nature", "character"],
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
    hormonal: ["menses", "menopause", "sexual"],
    mental: ["mental", "anger", "irritable", "anxiety", "anxious", "fear", "mood"],
  }

  const responses = {
    name: [
      "My name is Meena Joshi doctor (quiet)… I don't talk much.",
      "I am Meena Joshi (soft voice)… I feel uncomfortable speaking.",
    ],
    age: [
      "I am 48 years old doctor (slow)… weakness has increased.",
      "My age is 48 (calm)… body doesn't respond fast now.",
    ],
    gender: ["I am female doctor (simple).", "Yes doctor, woman (neutral)."],
    occupation: ["I am a housewife (plain)… mostly indoor work.", "I stay at home (slow)… not very active."],
    marital: [
      "I am married doctor (reserved)… family life is quiet.",
      "Yes married (low emotion)… children are settled.",
    ],
    address: ["I live in Ahmedabad (simple)… calm area.", "My address is Ahmedabad (neutral)."],
    chiefComplaint: [
      "My main complaint is hard swelling near ear (worried)… it doesn't move.",
      "This lump near neck troubles me (serious)… it is firm.",
    ],
    location: ["It is near ear and jaw side (points slowly).", "On side of neck (focused)… deep inside."],
    sensation: ["It feels hard and heavy (uneasy)… not sharp pain.", "There is pressure inside (dull feeling)."],
    character: ["It is hard, not soft (clear)… feels fixed.", "Swelling is firm (observing)… not inflamed."],
    aggravation: [
      "It gets worse on moving neck (careful)… stiffness increases.",
      "Turning head increases discomfort (slow).",
    ],
    amelioration: ["Keeping still gives relief (relieved).", "Rest helps a little (hopeful)."],
    concomitant: ["I feel weakness and heaviness (tired).", "Sometimes dizziness comes (slow)."],
    onset: ["It started gradually doctor (thinking).", "No sudden beginning (clear)."],
    duration: ["It is there since many months (worried).", "Long standing problem (serious)."],
    progression: ["It is slowly increasing (observant).", "Hardness increases with time (concerned)."],
    history: ["No major illness before (simple).", "I was healthy earlier (neutral)."],
    family: ["No such issue in family (neutral).", "Parents were healthy (calm)."],
    appetite: ["Appetite is low (slow)… eat little.", "I don't feel much hunger (plain)."],
    thirst: ["Thirst is moderate (balanced).", "I drink normal water (simple)."],
    tongue: ["Tongue looks pale (weak)… no coating."],
    stool: ["Stool is sluggish (slow)… not regular.", "Sometimes constipation (low activity)."],
    urine: ["Urine is normal (neutral).", "No burning or pain (calm)."],
    desire: ["No special cravings (neutral).", "Simple food only (plain)."],
    aversion: ["I avoid heavy food (uneasy).", "Oily food doesn't suit me (slow)."],
    sweat: ["Less sweating (dry feeling).", "No offensive smell (neutral)."],
    sleep: ["Sleep is disturbed (tired)… thoughts continue.", "Light sleep (restless)."],
    dreams: ["No clear dreams (dull).", "Sleep is shallow (blank)."],
    thermals: ["I feel more cold (chilly).", "Cold affects me more (sensitive)."],
    hormonal: ["Menopause has started (low vitality).", "Interest has reduced (withdrawn)."],
    mental: [
      "I like to stay alone (reserved)… don't enjoy company.",
      "I feel dull and slow (withdrawn)… thoughts are heavy.",
    ],
  }

  const fallback = [
    "I don't quite understand doctor… please rephrase.",
    "Can you ask again doctor… I'm anxious about this swelling.",
    "I'm not sure what you mean… but this troubles me.",
  ]

  function getRandomResponse(category: string[]): string {
    return category[Math.floor(Math.random() * category.length)]
  }

  function matchKeywords(userInput: string, keywordList: string[]): boolean {
    const normalized = userInput
      .toLowerCase()
      .split(/\s+/)
      .filter((w) => w.length > 1)
      .join("+")

    return keywordList.some((kw) => {
      if (kw.includes("+")) {
        const parts = kw.split("+")
        return parts.every((part) => normalized.includes(part))
      }
      return normalized.includes(kw)
    })
  }

  // Check each category for keyword matches
  for (const [category, keywordList] of Object.entries(keywords)) {
    if (matchKeywords(input, keywordList)) {
      const categoryResponses = responses[category as keyof typeof responses]
      if (categoryResponses) {
        return getRandomResponse(categoryResponses)
      }
    }
  }

  // Fallback if no keywords match
  return getRandomResponse(fallback)
}

export const case12Respond = detectAndRespond
