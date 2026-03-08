import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 10,
  patientName: "Rahul Patel",
  age: 26,
  intro: "Hello doctor!! (polite, slightly tired but respectful) Please ask me, my hand pain is troubling me a lot.",
  image: "/images/cases/case-10-fracture-xray.jpg",
  defaultResponse: "Doctor, I'm sorry... Could you please ask me more clearly? I'm having trouble understanding.",
  keywords: [
    // NAME
    {
      keywords: ["name", "what+name", "who+you", "your+name", "tell+name", "introduce"],
      responses: [
        "My name is Rahul Patel doctor (calm but slightly uncomfortable)… I work in a factory and this hand injury has made daily work very difficult.",
        "I am Rahul Patel (soft voice, cooperative)… please treat me well doctor, I really need my hand to heal properly.",
      ],
    },
    // AGE
    {
      keywords: ["age", "how+old", "your+age", "what+age", "years+old", "how+many+years"],
      responses: [
        "I am 26 years old doctor (simple, straightforward)… I'm still young but this injury makes me feel weak from inside.",
        "Doctor, my age is 26 (slightly worried)… at this age such bone pain is not normal, that's why I came.",
      ],
    },
    // MARITAL STATUS
    {
      keywords: ["married", "marital+status", "single", "husband", "spouse", "marriage"],
      responses: [
        "I am unmarried doctor (neutral, slightly shy)… but my family depends on my work.",
        "No doctor, I am not married yet (concerned)… because of this injury, everything feels delayed.",
      ],
    },
    // OCCUPATION
    {
      keywords: ["occupation", "job", "work", "profession", "what+do+you+do", "what+work", "service"],
      responses: [
        "I work as a factory worker (tired, honest)… I use my hands a lot, lifting and machine work, that's how this injury happened.",
        "Doctor, I do factory job (helpless)… without my hand working properly, I can't earn.",
      ],
    },
    // ADDRESS
    {
      keywords: ["address", "where+live", "where+stay", "home", "residence", "location"],
      responses: [
        "I live in Rajkot, Movdi area (simple)… nearby to the factory.",
        "My address is Rajkot, Movdi (calm)… I came here from there only.",
      ],
    },
    // CHIEF COMPLAINT
    {
      keywords: ["chief+complaint", "main+complaint", "complaint"],
      responses: [
        "Doctor, my main problem is severe pain in my hand bone (deep suffering)… after injury it feels sore deep inside.",
        "I am suffering from hand bone pain (distressed)… even after rest it doesn't feel fully healed.",
      ],
    },
    // LOCATION
    {
      keywords: ["where+pain", "location+pain", "which+side", "where+exactly+pain"],
      responses: [
        "The pain is exactly in this hand bone (points)… near the finger, deep inside, not on skin.",
        "Doctor, pain is in the bone itself (serious)… touching it gives deep soreness.",
      ],
    },
    // SENSATION
    {
      keywords: ["sensation", "how+sensation", "how+feel", "how+pain"],
      responses: [
        "It feels like deep aching and sore pain (uneasy)… as if bone itself is hurt.",
        "There is dull, deep pain (sensitive)… not sharp, but very uncomfortable from inside.",
      ],
    },
    // AGGRAVATION
    {
      keywords: ["aggravation", "aggravates", "worse", "worsen", "when+worsen", "when+pain+increase"],
      responses: [
        "Pain gets worse when I use my hand (frustrated)… especially during work.",
        "Doctor, even slight movement increases pain (irritated)… pressure makes it worse.",
      ],
    },
    // AMELIORATION
    {
      keywords: ["amelioration", "ameliorates", "relief", "feel+good", "when+relief"],
      responses: [
        "Pain feels a little better with rest (relieved)… when I keep my hand still.",
        "Keeping the hand supported gives relief (hopeful)… but pain comes back again.",
      ],
    },
    // CONCOMITANT SYMPTOMS
    {
      keywords: ["concomitant", "any+other+complaint", "other+symptom", "other+problem"],
      responses: [
        "Along with pain, there is weakness in hand (low energy)… I feel tired easily.",
        "Sometimes swelling and soreness come together (worried)… especially after work.",
      ],
    },
    // ONSET
    {
      keywords: ["onset", "when+start", "when+started", "when+begins"],
      responses: [
        "This injury happened in the factory (matter-of-fact)… I hit my hand hard on machinery.",
        "It started suddenly (regretful)… when I had an accident at work.",
      ],
    },
    // DURATION
    {
      keywords: ["duration", "how+long", "how+many+days", "how+much+time"],
      responses: [
        "It's been causing problems for several days now (tired)… the pain hasn't reduced much.",
        "Doctor, I've been suffering for a week (concerned)… and it's getting worse.",
      ],
    },
    // PROGRESSION
    {
      keywords: ["progression", "how+increase", "how+progressive"],
      responses: [
        "The pain is still intense (frustrated)… it hasn't improved despite rest.",
        "It feels like it's not healing (worried)… the soreness is still very deep.",
      ],
    },
    // HISTORY OF PRESENT ILLNESS
    {
      keywords: ["history", "any+history", "past", "in+past"],
      responses: [
        "No major illness before (simple)… only small injuries from work.",
        "I never had bone problem earlier (thinking)… this is first time so serious.",
      ],
    },
    // FAMILY HISTORY
    {
      keywords: ["family", "parents", "partner", "family+history"],
      responses: [
        "No bone disease in family (neutral)… everyone is generally healthy.",
        "Doctor, no such illness runs in family (calm)… this injury happened due to accident.",
      ],
    },
    // APPETITE
    {
      keywords: ["appetite", "hunger", "eat", "eating", "meal"],
      responses: [
        "My appetite is normal (okay)… but pain reduces my interest in food.",
        "I eat regularly (simple)… but sometimes pain distracts me.",
      ],
    },
    // THIRST
    {
      keywords: ["thirst", "thirsty", "water", "water+drink"],
      responses: ["Thirst is normal (balanced)… I drink water regularly.", "No excess thirst (neutral)… normal habit."],
    },
    // TONGUE
    {
      keywords: ["tongue"],
      responses: [
        "My tongue looks normal (straightforward)… nothing unusual.",
        "Doctor, tongue is fine (simple)… all normal.",
      ],
    },
    // URINE
    {
      keywords: ["urine", "urinate", "urinates", "pass+urine"],
      responses: ["Urine is normal (simple)… no pain or burning.", "No urinary problem (calm)… everything normal."],
    },
    // STOOL
    {
      keywords: ["stool", "bowel", "constipation"],
      responses: ["Stool is regular (normal)… no issues.", "No constipation or loose motion (okay)… normal."],
    },
    // DESIRE
    {
      keywords: ["desire", "craving", "food+like", "like+eat"],
      responses: [
        "I like simple home food (plain)… nothing special.",
        "No strong cravings (neutral)… just want to recover soon.",
      ],
    },
    // AVERSION
    {
      keywords: ["aversion", "dislike", "don't+like"],
      responses: [
        "I don't like very spicy food (mild dislike)… it doesn't suit me.",
        "Oily food doesn't feel good (uneasy)… I avoid it.",
      ],
    },
    // SWEAT
    {
      keywords: ["sweat", "perspiration", "how+sweat"],
      responses: ["I sweat normally (neutral)… especially during work.", "Sweat has no strong smell (okay)… usual."],
    },
    // SLEEP
    {
      keywords: ["sleep", "sleeping", "sleep+problem"],
      responses: [
        "Sleep is disturbed due to pain (tired)… turning hand hurts.",
        "At night pain troubles me (restless)… sleep breaks.",
      ],
    },
    // DREAMS
    {
      keywords: ["dream", "dreams", "dreaming"],
      responses: [
        "No specific dreams (plain)… sleep is light.",
        "Sometimes dream of work (stress)… because of injury.",
      ],
    },
    // THERMALS
    {
      keywords: ["thermal", "cold", "heat", "fever", "chilly"],
      responses: [
        "I feel comfortable normally (balanced)… no heat or cold problem.",
        "No sensitivity to temperature (neutral)… body is fine.",
      ],
    },
    // MENTAL GENERALS (SYMPHYTUM CORE)
    {
      keywords: ["mental", "anger", "irritable", "anxiety", "anxious", "fear", "mood"],
      responses: [
        "Mentally I feel frustrated (suppressed irritation)… I want to heal fast and go back to work.",
        "I feel quiet but worried (internal stress)… injury inside bone scares me.",
      ],
    },
    // CASUAL GREETING RULE
    {
      keywords: ["h"],
      response:
        "Hello doctor!! (polite, slightly tired but respectful) Please ask me, my hand pain is troubling me a lot.",
    },
  ],
  vitals: {
    stats: [
      { label: "Blood Pressure", value: "120/80 mmHg" },
      { label: "Pulse", value: "84/min" },
      { label: "Respiration", value: "18/min" },
      { label: "Temperature", value: "98.6°F" },
      { label: "SpO₂", value: "99%" },
    ],
    summary: [
      "Chief Complaint: Severe hand bone pain after injury (fracture of metacarpal bone)",
      "Nature: Deep bone injury, delayed healing, soreness on touch → SYMPHYTUM",
      "Aggravation: On movement and use; touch increases pain",
      "Amelioration: Rest and immobility provide relief",
      "Mental State: Frustrated, quiet, worried about healing and recovery",
      "Occupation: Factory worker; injury from machinery accident",
    ],
  },
  diagnosis: {
    provisional: "Fracture of metacarpal bone (hand) with delayed healing",
    correct: ["symphytum", "symphytum officinale"],
    correctText:
      "✅ Correct! Symphytum is THE remedy for bone fractures, deep bone injuries, and delayed bone healing.",
    wrongText: "❌ Incorrect. Think about the bone fracture, deep soreness, and the need for bone union.",
    remedyInfo:
      "Symphytum officinale (Comfrey): Deep bone injuries; Bone fractures with pain; Soreness on touch; Pain increases on movement; Delayed healing of bones; Patient wants rest and immobility; Mental state shows frustration with desire to return to work; No other remedy matches the deep bone pathology so precisely.",
  },
  quiz: [
    {
      question: "Rahul's injury is primarily:",
      options: ["Muscle strain", "Fracture of metacarpal bone", "Soft tissue damage only", "Nerve compression"],
      correctIndex: 1,
    },
    {
      question: "The KEY symptom indicating Symphytum in this case is:",
      options: [
        "Swelling and redness",
        "Deep bone pain worse on movement, better on rest",
        "Burning sensation in skin",
        "Loss of appetite",
      ],
      correctIndex: 1,
    },
    {
      question: "Symphytum's PRIMARY action in bone injuries is:",
      options: [
        "Reduce inflammation only",
        "Promote bone union and callus formation",
        "Increase pain temporarily",
        "Accelerate infection",
      ],
      correctIndex: 1,
    },
    {
      question: "Rahul's mental state (frustrated, quiet, worried about work) indicates:",
      options: [
        "He needs psychiatric treatment",
        "His concern about bone healing and livelihood is natural for the case",
        "He is malingering",
        "He has depression requiring medication",
      ],
      correctIndex: 1,
    },
    {
      question: "Which modality MOST suggests Symphytum?",
      options: [
        "Better with movement",
        "Pain only at night",
        "Worse on movement, better with complete rest and immobility",
        "Better with heat application",
      ],
      correctIndex: 2,
    },
  ],
}

export default def
