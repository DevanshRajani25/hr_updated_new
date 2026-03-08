export function detectAndRespond(userInput: string): string {
  const input = userInput.trim().toLowerCase()

  // Casual greeting rule - single word starting with h/H
  const words = input.split(/\s+/)
  if (words.length === 1 && input.match(/^h/)) {
    return "Hello doctor!! (polite, calm but slightly uneasy) Please ask me, my eye looks very bad but honestly it doesn't pain much."
  }

  // Keyword detection system
  const keywords = {
    name: ["name", "what+name"],
    age: ["age", "how+old+you"],
    occupation: ["occupation", "what+do", "doing", "do"],
    marital: ["marriage", "married", "are+you+married", "single"],
    address: ["address", "where+live", "living"],
    chiefComplaint: ["main+complain", "complaint", "chief+complaint"],
    location: ["where+pain", "which+side", "location+pain", "where+exactly"],
    sensation: ["sensation", "how+feel", "how+pain"],
    aggravation: ["aggravation", "worse", "worsen", "when+worsen", "modality"],
    amelioration: ["amelioration", "relief", "feel+good", "when+relief"],
    concomitant: ["concomitant", "any+other+complaint", "other", "other+symptom"],
    onset: ["onset", "when+start", "when+started", "when+begins"],
    duration: ["duration", "how+long", "how+many+days", "how+much+time"],
    progression: ["progression", "increasing", "how+increase"],
    history: ["history", "past", "in+past"],
    family: ["family", "parents", "partner", "family+history"],
    appetite: ["appetite", "hunger", "eat", "meal"],
    thirst: ["thirst", "thirsty", "water", "water+drink"],
    tongue: ["tongue"],
    urine: ["urine", "urinate", "pass+urine"],
    stool: ["stool", "bowel", "constipation"],
    desire: ["desire", "craving", "food+like"],
    aversion: ["aversion", "dislike", "don't+like"],
    sweat: ["sweat", "perspiration"],
    sleep: ["sleep", "sleeping", "sleep+problem"],
    dream: ["dream", "dreams"],
    thermal: ["thermal", "cold", "heat", "fever", "chilly"],
    mental: ["mental", "anger", "irritable", "anxiety", "fear", "mood"],
  }

  const responses = {
    name: [
      "My name is Ramesh Solanki doctor (calm, respectful)… I work in a factory, this eye issue happened suddenly.",
      "I am Ramesh Solanki (soft but steady voice)… it looks scary but I feel mostly okay.",
    ],
    age: [
      "I am 32 years old doctor (normal tone)… I don't fall sick often.",
      "Doctor, my age is 32 (slightly surprised)… such bleeding never happened before.",
    ],
    occupation: [
      "I work as a factory worker (tired but strong)… strain is common in my job.",
      "Doctor, I do factory work (honest)… dust and pressure are part of daily work.",
    ],
    marital: [
      "I am married doctor (responsible)… my family got worried seeing my eye.",
      "Yes doctor, I am married (concerned)… they forced me to come.",
    ],
    address: [
      "I live in Rajkot, Gondal Road area (simple)… near my work.",
      "My address is Gondal Road, Rajkot (calm)… I came from there only.",
    ],
    chiefComplaint: [
      "Doctor, my main problem is bleeding in the eye (slightly worried)… but pain is very less.",
      "There is red blood patch in my eye (uneasy)… it looks serious but I feel fine.",
    ],
    location: [
      "The blood is on the white part of eye (points)… not inside vision.",
      "Doctor, it is on outer part of the eye (serious face)… not deep inside.",
    ],
    sensation: [
      "It feels bruised and sore (mild discomfort)… like light injury.",
      "There is heaviness but no sharp pain (calm)… only discomfort.",
    ],
    aggravation: [
      "When I touch or rub the eye it feels worse (irritated)… so I avoid touching.",
      "Bright light troubles me a little (uneasy)… eye feels sensitive.",
    ],
    amelioration: [
      "Keeping the eye closed gives relief (relieved)… rest helps.",
      "When nobody touches it, it feels better (protective)… I leave it alone.",
    ],
    concomitant: [
      "There is mild headache also (dull feeling)… maybe due to strain.",
      "I feel body tiredness (low energy)… work pressure is high.",
    ],
    onset: [
      "It started suddenly after work (clear memory)… maybe rubbing eye.",
      "It began after strain (thinking)… I noticed blood later.",
    ],
    duration: [
      "It started today itself (calm)… sudden.",
      "Doctor, it's been few hours only (observing)… still looks bad.",
    ],
    progression: [
      "It is not increasing much (relieved)… just looks same.",
      "Bleeding stopped spreading (calm)… appearance only scares.",
    ],
    history: [
      "No such problem earlier (simple)… first time.",
      "I never had eye bleeding before (thinking)… sudden thing.",
    ],
    family: [
      "No eye disease in family (neutral)… all are healthy.",
      "No bleeding problem in family (calm)… this is accidental.",
    ],
    appetite: ["My appetite is normal (okay)… no change.", "I eat regularly (simple)… food is fine."],
    thirst: ["My thirst is normal (balanced)… regular water intake.", "No excess thirst (neutral)… normal habit."],
    tongue: ["Tongue looks normal (simple)… nothing unusual.", "No coating or dryness (neutral)… feels normal."],
    urine: ["Urine is normal (simple)… no burning.", "No urinary problem (calm)… all fine."],
    stool: ["Stool is regular (normal)… no problem.", "No bowel issue (okay)… normal."],
    desire: [
      "I like simple home food (plain)… nothing special.",
      "No strong cravings (neutral)… just want this to heal.",
    ],
    aversion: ["I don't like oily food much (mild dislike).", "Very spicy food doesn't suit me (uneasy)."],
    sweat: ["I sweat normally (neutral)… more during work.", "No strong smell in sweat (okay)."],
    sleep: [
      "Sleep is okay (slightly disturbed)… eye worries me.",
      "I sleep lightly thinking about eye (uneasy)… but pain is less.",
    ],
    dream: ["No specific dreams (plain)… sleep is light.", "Sometimes dream about work accidents (stress)."],
    thermal: ["I feel normal with temperature (balanced).", "No heat or cold sensitivity (neutral)."],
    mental: [
      "I keep saying I'm fine (defensive calm)… but seeing blood worries me inside.",
      "I don't like too much checking (protective)… I feel it will heal on its own.",
    ],
  }

  const fallback = [
    "I don't quite understand doctor… please rephrase your question.",
    "Can you ask me again doctor… I'm a bit anxious about my eye.",
    "I'm not sure what you mean doctor… but my eye is still worrying me.",
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

  // Detect keywords and respond
  for (const [category, keywordList] of Object.entries(keywords)) {
    if (matchKeywords(input, keywordList)) {
      const categoryResponses = responses[category as keyof typeof responses]
      if (categoryResponses) {
        return getRandomResponse(categoryResponses as string[])
      }
    }
  }

  // Fallback if no keywords match
  return getRandomResponse(fallback)
}
