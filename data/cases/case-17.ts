import type { CaseDefinition } from "@/types/case"

const def: CaseDefinition = {
  caseNumber: 17,
  patientName: "Keyli",
  age: 27,
  occupation: "Designer",
  address: "Mumbai",
  intro: "My main complaint is excessive hair fall doctor… (distressed) hair comes out every time I comb.",
  image: "/images/cases/case-17-hair-loss.jpg",
  defaultResponse: "Please ask more clearly.",
  
  keywords: [
    // CASUAL GREETING RULES
    { keywords: ["hi", "hello", "hey"], response: "Hello doctor.. (soft, hopeful tone)" },
    { keywords: ["ok", "okk", "okay"], response: "Okk doctor.. (polite, slightly anxious)" },
    
    // BASIC PATIENT INFO
    { keywords: ["name", "what name"], response: "My name is Keyli doctor… (open, emotional) I'm really worried seeing so much hair fall." },
    { keywords: ["age", "how old", "how old are you"], response: "I am 27 years old doctor… (concerned) this problem is making me anxious." },
    { keywords: ["occupation", "what do", "doing", "do you do"], response: "I work as a designer doctor… (mentally tired) long work hours make me feel weak and drained." },
    { keywords: ["marriage", "married", "are you married", "single"], response: "I am single doctor… (emotionally expressive) I share everything openly when I feel stressed." },
    { keywords: ["address", "where live", "where do you live", "living"], response: "I live in Mumbai doctor… (friendly but worried) stress and lifestyle here are heavy." },
    
    // CHIEF COMPLAINT
    { keywords: ["main complaint", "complaint", "chief complaint"], response: "My main complaint is excessive hair fall doctor… (distressed) hair comes out every time I comb." },
    
    // LOCATION
    { keywords: ["where pain", "which side", "location pain", "where exactly"], response: "It is from the whole scalp doctor… (concerned) more noticeable in the front area." },
    
    // SENSATION
    { keywords: ["sensation", "how sensation", "how feel", "how pain"], response: "My scalp feels sensitive and burning doctor… (uneasy) like heat on the skin." },
    
    // AGGRAVATION
    { keywords: ["aggravation", "aggravates", "worse", "worsen", "when worsen", "when increase"], response: "It becomes worse after stress and lack of sleep doctor… (emotionally affected) and when I get mentally upset." },
    
    // AMELIORATION
    { keywords: ["amelioration", "ameliorates", "relief", "feel good", "when relief"], response: "I feel better with rest and cool air doctor… (relieved) cold applications help." },
    
    // CONCOMITANT
    { keywords: ["concomitant", "any other complaint", "other symptom", "other"], response: "I also feel weakness and dizziness sometimes doctor… (fragile) and I feel uneasy when alone." },
    
    // ONSET
    { keywords: ["onset", "when start", "when started", "when begins"], response: "It started after a period of weakness doctor… (recalling) after that hair fall began." },
    
    // DURATION
    { keywords: ["duration", "how long", "how many days", "how much time"], response: "It has been about 2 months doctor… (worried) gradually increasing." },
    
    // PROGRESSION
    { keywords: ["progression", "how increase", "how progressive"], response: "Yes doctor it is increasing steadily… (fearful) that's why I came quickly." },
    
    // HISTORY OF PRESENT ILLNESS
    { keywords: ["history", "any history", "past", "in past"], response: "I had anemia and weakness earlier doctor… (soft tone) since then my hair became thin." },
    
    // FAMILY HISTORY
    { keywords: ["family", "parents", "partner", "family history"], response: "My mother had mild hair thinning doctor… (neutral) but not this much." },
    
    // APPETITE
    { keywords: ["appetite", "hunger", "eat", "eating", "meal"], response: "My appetite is variable doctor… (low energy) sometimes very hungry suddenly." },
    
    // THIRST
    { keywords: ["thirst", "thirsty", "water", "water drink"], response: "I feel very thirsty doctor… (keynote) I drink a lot of cold water." },
    
    // TONGUE
    { keywords: ["tongue"], response: "My tongue looks red and a bit dry doctor… (observing)" },
    
    // URINE
    { keywords: ["urine", "urinate", "urinates", "pass urine"], response: "Urine is normal doctor… (calm) no burning." },
    
    // STOOL
    { keywords: ["stool", "bowel", "constipation"], response: "Stool is mostly normal doctor… (plain) sometimes loose when stressed." },
    
    // DESIRE
    { keywords: ["desire", "craving", "food like", "like eat"], response: "I crave cold drinks and ice cream doctor… (clear keynote) I strongly want cold things." },
    
    // AVERSION
    { keywords: ["aversion", "dislike", "don't like"], response: "I don't like hot food doctor… (clear dislike) heat troubles me." },
    
    // SWEAT
    { keywords: ["sweat", "perspiration", "how sweat"], response: "Sweat is moderate doctor… (normal) more when anxious." },
    
    // SLEEP
    { keywords: ["sleep", "sleeping", "sleep problem"], response: "My sleep is light doctor… (sensitive) small sounds wake me." },
    
    // DREAMS
    { keywords: ["dream", "dreams", "dreaming"], response: "I get fearful dreams sometimes doctor… (restless mind)" },
    
    // THERMALS
    { keywords: ["thermal", "cold", "heat", "fever", "chilly"], response: "I feel more comfortable in cool air doctor… (keynote) heat makes me uneasy." },
    
    // MENTAL GENERALS
    { keywords: ["mental", "mentally", "anger", "any anger", "when angry", "angry", "how react", "irritable", "irritates", "anxiety", "anxious", "mood", "mind", "fear", "mood swings", "sad"], response: "I am very emotional and anxious doctor… (tearful, open) I feel fear when alone and I need reassurance." },
  ],
  
  vitals: {
    stats: [
      { label: "BP", value: "110/70 mmHg" },
      { label: "Pulse", value: "96/min" },
      { label: "Temperature", value: "98.6°F" },
      { label: "Respiration", value: "18/min" },
    ],
  },
  
  diagnosis: {
    provisional: "Diffuse telogen hair fall due to weakness & stress",
    correct: ["phosphorus", "phos"],
    correctText: "✅ Correct. PHOSPHORUS is the indicated remedy.",
    wrongText: "❌ Incorrect. The correct remedy is PHOSPHORUS.",
    remedyInfo: "PHOSPHORUS – Profuse hair fall after weakness; burning scalp; very thirsty for cold water; emotional and open nature; better from cool environment.",
  },
  
  quiz: [
    {
      question: "Most characteristic feature of this case:",
      options: ["Burning scalp", "Hard swelling", "Numbness", "Dry cough"],
      correctIndex: 0,
    },
    {
      question: "Thirst pattern observed:",
      options: ["Thirstless", "Warm drinks", "Cold water frequently", "Only sips"],
      correctIndex: 2,
    },
    {
      question: "Mental state of the patient:",
      options: ["Closed", "Emotional & open", "Suspicious", "Indifferent"],
      correctIndex: 1,
    },
    {
      question: "Thermal preference:",
      options: ["Chilly patient", "Hot patient", "Alternating", "Neutral"],
      correctIndex: 1,
    },
    {
      question: "Most suitable remedy:",
      options: ["Sepia", "Nat mur", "Phosphorus", "Silicea"],
      correctIndex: 2,
    },
  ],
}

export default def
