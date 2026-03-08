import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 8,
  patientName: "Neha Patel",
  age: 26,
  intro: "Doctor, I have multiple moles on my neck, some are dark and increasing.",
  image: "/images/cases/case-08.jpg",
  defaultResponse:
    "Please ask about the moles, itching, burning, heat sensitivity, sweating, cravings, or mental state…",
  keywords: [
    // Global Greeting Rules (Universal for all cases 1-9)
    {
      keywords: ["hi", "hello", "hey", "hii", "hmmm"],
      response: "Hello, doctor!",
    },
    {
      keywords: ["ok", "okay", "okk", "ohk"],
      response: "OKK!!",
    },

    // Patient Identification
    {
      keywords: ["name", "what+name", "who+you", "your+name", "introduce"],
      responses: ["My name is Neha Patel.", "I'm Neha… Neha Patel.", "People call me Neha Patel."],
    },
    {
      keywords: ["age", "your+age", "how+old", "years+old"],
      responses: ["I'm 26 years old.", "I'm in my mid-twenties, 26.", "Just turned 26."],
    },
    {
      keywords: ["sex", "gender", "female", "male"],
      responses: ["I'm female.", "I'm a woman.", "Female."],
    },
    {
      keywords: ["occupation", "job", "work", "profession", "what+do+you+do"],
      responses: [
        "I work in a private office, mostly desk work.",
        "I'm doing a job, sitting most of the day.",
        "Office job… nothing very active.",
      ],
    },
    {
      keywords: ["address", "where+live", "where+stay", "location", "place"],
      responses: ["I live in Ahmedabad.", "I stay in a city area, Ahmedabad.", "Urban area… Ahmedabad."],
    },
    {
      keywords: ["married", "marital", "husband", "spouse", "single"],
      responses: ["I'm unmarried.", "Not married yet.", "Single."],
    },

    // Chief Complaint
    {
      keywords: ["mole", "moles", "spot", "spots", "dark", "neck", "complaint", "problem"],
      responses: [
        "I have multiple moles on my neck, some are dark and increasing.",
        "These skin spots and moles bother me… especially on my neck.",
        "I'm worried about these dark moles, they keep appearing.",
      ],
    },

    // Location
    {
      keywords: ["location", "where", "affected", "neck", "body"],
      responses: ["Mostly on my neck and upper body.", "Neck area mainly.", "Around the neck."],
    },

    // Sensation
    {
      keywords: ["sensation", "feel", "itching", "itch", "burning", "burn"],
      responses: [
        "Sometimes itching and burning around the spots.",
        "There is burning, especially when I sweat.",
        "It feels hot and itchy at times.",
      ],
    },

    // Aggravation/Modalities (Heat makes worse)
    {
      keywords: ["worse", "aggravate", "heat", "summer", "sweat", "hot"],
      responses: ["It gets worse in heat.", "Heat and sweating make it worse.", "Summer really aggravates everything."],
    },

    // Amelioration (Cold/Air provides relief)
    {
      keywords: ["better", "relief", "cool", "air", "fresh", "improve"],
      responses: ["I feel better in open air.", "Fresh air gives relief.", "When it's cool, I feel fine."],
    },

    // Concomitant Symptoms
    {
      keywords: ["concomitant", "together", "along", "with", "also", "fever", "heat", "sweat"],
      responses: [
        "Along with this, I feel body heat and sweating.",
        "I also feel tired and uneasy.",
        "Heat, sweating, and irritation come together.",
      ],
    },

    // Family History
    {
      keywords: ["family", "mother", "father", "parents", "hereditary", "history"],
      responses: [
        "My mother also has skin problems like spots and itching.",
        "There is a history of skin issues in my family.",
        "Nothing serious, but yes… skin complaints run in my family.",
      ],
    },

    // Past Disease History
    {
      keywords: ["past", "before", "previous", "earlier", "eruption", "had"],
      responses: [
        "I had skin eruptions earlier also, they used to come and go.",
        "No major illness, but recurrent skin issues since a few years.",
        "I don't have any big disease, just these skin problems repeatedly.",
      ],
    },

    // History of Present Illness
    {
      keywords: ["started", "began", "how+long", "duration", "when", "onset"],
      responses: [
        "These moles started slowly, first one or two, now many… I ignored them earlier.",
        "It began a few months back, worse in heat, and slowly increased.",
        "At first I didn't care much, but now they're increasing and irritating.",
      ],
    },

    // Appetite
    {
      keywords: ["appetite", "eat", "eating", "food", "hungry", "hunger"],
      responses: ["My appetite is good, sometimes too much.", "I feel hungry often.", "I eat well, no issue there."],
    },

    // Tongue
    {
      keywords: ["tongue", "coating", "coated", "mouth"],
      responses: ["My tongue looks dry and coated.", "There is a white coating.", "Not very clean, coated."],
    },

    // Desire/Cravings
    {
      keywords: ["desire", "crave", "craving", "want", "sweet", "spicy", "like"],
      responses: ["I crave sweets and spicy food.", "I like sweets a lot.", "Sweet things attract me."],
    },

    // Aversion
    {
      keywords: ["aversion", "avoid", "dislike", "don't+like", "milk"],
      responses: ["I don't like milk much.", "Milk doesn't suit me.", "I avoid milk."],
    },

    // Thirst
    {
      keywords: ["thirst", "thirsty", "drink", "water"],
      responses: [
        "I feel thirsty but drink small sips.",
        "Thirsty, but not too much at once.",
        "I sip water frequently.",
      ],
    },

    // Stool
    {
      keywords: ["stool", "bowel", "constipation", "motion"],
      responses: ["Sometimes constipated, sometimes normal.", "Stool is irregular.", "Not very satisfactory."],
    },

    // Urine
    {
      keywords: ["urine", "urination", "pass+urine"],
      responses: ["Urine is normal.", "No major issue with urine.", "Seems fine."],
    },

    // Sweat/Perspiration
    {
      keywords: ["sweat", "perspiration", "sweating", "perspire"],
      responses: ["I sweat a lot, especially with heat.", "Sweating is excessive.", "I perspire easily."],
    },

    // Sleep
    {
      keywords: ["sleep", "sleeping", "night", "rest", "wake"],
      responses: ["Sleep is okay but not refreshing.", "I wake up feeling tired.", "Sleep feels incomplete."],
    },

    // Dreams
    {
      keywords: ["dream", "dreams", "nightmare"],
      responses: ["Dreams are confused and random.", "Strange dreams sometimes.", "Nothing very clear."],
    },

    // Thermal Preference (Hot Patient)
    {
      keywords: ["thermal", "temperature", "heat", "hot", "cold", "prefer"],
      responses: ["I'm a hot patient.", "I cannot tolerate heat.", "I prefer cool environment."],
    },

    // Mental State (Sulphur Personality - Confident, Careless, Indifferent)
    {
      keywords: ["mental", "mood", "emotion", "mind", "character", "personality"],
      responses: [
        "I'm confident, but honestly a bit careless.",
        "I overthink sometimes, but act relaxed.",
        "I know things, but I don't worry too much… things will be fine.",
      ],
    },
  ],
  vitals: {
    stats: [
      { label: "Temp", value: "Slightly warm" },
      { label: "Pulse", value: "Normal" },
      { label: "BP", value: "Normal" },
      { label: "General", value: "Hot patient, confident posture" },
    ],
    summary: [
      "Chief Complaint: Multiple moles on neck, some dark and increasing",
      "Sensation: Itching and burning around spots",
      "Modalities: Worse in heat/summer; Better in cool/open air",
      "Concomitant: Body heat, excessive sweating, fatigue",
      "Past History: Recurrent skin eruptions over years",
      "Family History: Mother has skin problems",
      "Generals: Good appetite, dry coated tongue, craves sweets, excessive sweating",
      "Thermal: Hot patient, cannot tolerate heat",
      "Mental: Confident, careless, indifferent yet expressive",
    ],
  },
  diagnosis: {
    provisional: "Facial eczema/dermatitis with chronic moles",
    correct: ["sulphur", "sulfur"],
    correctText: "✅ Excellent! The totality clearly points towards Sulphur.",
    wrongText: "❌ Incorrect. The correct remedy is Sulphur.",
    remedyInfo:
      "Sulphur – chronic eruptions with burning/itching worse in heat; hot patient; craves sweets; excessive sweating; confident, careless personality; history of recurrent skin issues; better in cool/open air.",
  },
  quiz: [
    {
      question: "Which thermal reaction best describes this patient?",
      options: ["Chilly patient", "Cannot tolerate cold", "Hot patient", "Sensitive to wind"],
      correctIndex: 2,
    },
    {
      question: "Which modality aggravates the patient's complaint?",
      options: ["Cold weather", "Night time", "Motion", "Heat"],
      correctIndex: 3,
    },
    {
      question: "Which craving supports the remedy selection?",
      options: ["Sour food", "Meat", "Salt", "Sweets"],
      correctIndex: 3,
    },
    {
      question: "Which mental state matches this patient most?",
      options: ["Fearful and anxious", "Mild and shy", "Careless yet confident", "Depressed and withdrawn"],
      correctIndex: 2,
    },
    {
      question: "Which keynote strongly indicates Sulphur in this case?",
      options: [
        "Cold patient with thirstless state",
        "Sudden violent symptoms",
        "Burning, heat aggravation, desire for open air",
        "Profuse salivation and offensive breath",
      ],
      correctIndex: 2,
    },
  ],
}

export default def
