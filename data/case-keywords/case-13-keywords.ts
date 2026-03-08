export function detectAndRespond(userInput: string): string {
  const input = userInput.trim().toLowerCase()

  const words = input.split(/\s+/)
  if (words.length === 1 && input.match(/^h/)) {
    return "Hello doctor… please look at my hand carefully, this cut is deep and burning, I'm worried about infection."
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
    mental: ["mental", "anger", "irritable", "anxiety", "anxious", "fear", "mood"],
  }

  const responses = {
    name: ["My name is Rakesh Verma doctor.", "I am Rakesh Verma doctor."],
    age: ["I am 32 years old doctor.", "My age is 32."],
    occupation: ["I work in a factory doctor.", "Factory work is my job."],
    marital: ["I am married doctor.", "Yes, I'm married."],
    address: ["I live in Surat.", "My address is in Surat."],
    chiefComplaint: [
      "My main complaint is a deep cut on my hand with active bleeding and burning pain.",
      "I have a severe lacerated wound with intense burning sensation.",
    ],
    location: ["The cut is on my palm near the thumb side.", "The wound is on the inner part of my hand."],
    sensation: ["There is burning, raw and sore pain doctor.", "The pain is sharp, burning and very sore."],
    aggravation: ["Touching and moving the hand makes it worse.", "Any movement increases the burning sensation."],
    amelioration: ["Cleaning and covering the wound gives some relief.", "Keeping the hand still helps a little."],
    concomitant: [
      "I feel anxious and worried about infection.",
      "There is concern about the wound not healing properly.",
    ],
    onset: ["It started suddenly today due to an accident.", "The cut happened just hours ago."],
    duration: ["This injury is only a few hours old.", "It's a fresh injury, very recent."],
    progression: ["Pain and bleeding increase if the hand is used.", "The pain gets worse with any activity."],
    history: [
      "There is no past illness, only this present injury from a sharp object.",
      "I was healthy before this accident.",
    ],
    family: ["No significant illness in the family.", "My family is generally healthy."],
    appetite: ["My appetite is reduced after the injury.", "I don't feel like eating right now."],
    thirst: ["Thirst is normal.", "I drink water normally."],
    tongue: ["Tongue looks normal and moist.", "Tongue appears healthy."],
    stool: ["Stool is normal.", "No bowel problems."],
    urine: ["Urine is normal.", "No urinary issues."],
    desire: ["No special food desires.", "No particular cravings."],
    aversion: ["I don't like anyone touching the wound.", "I prefer the wound left undisturbed."],
    sweat: ["Sweating is normal.", "No excessive sweating."],
    sleep: ["Sleep is disturbed due to pain and anxiety.", "The pain keeps me awake."],
    dreams: ["No specific dreams.", "Sleep is light and interrupted."],
    thermals: ["I feel normal to both heat and cold.", "No temperature sensitivity."],
    mental: [
      "I am anxious and fearful about proper healing and infection.",
      "I'm worried about this deep wound and infection risk.",
    ],
  }

  function getRandomResponse(category: string): string {
    const categoryResponses = responses[category as keyof typeof responses]
    if (Array.isArray(categoryResponses)) {
      return categoryResponses[Math.floor(Math.random() * categoryResponses.length)]
    }
    return categoryResponses || "I'm here to help answer your questions."
  }

  function matchesKeyword(input: string, keywordList: string[]): boolean {
    return keywordList.some((keyword) => {
      const parts = keyword.split("+")
      return parts.every((part) => input.includes(part))
    })
  }

  for (const [category, keywordList] of Object.entries(keywords)) {
    if (matchesKeyword(input, keywordList)) {
      return getRandomResponse(category)
    }
  }

  // Fallback responses if no keywords match
  const fallbacks = [
    "Can you please clarify your question?",
    "I'm not sure I understood that. Could you ask again?",
    "Please ask me more clearly, doctor.",
  ]

  return fallbacks[Math.floor(Math.random() * fallbacks.length)]
}
