/**
 * CASE 16 - RUHI SHARMA (PULSATILLA NIGRICANS)
 * PCOD - Polycystic Ovarian Disease
 * Patient: 23 yrs, Female, Student, Surat
 * Nature: Mild, emotional, tearful, seeks consolation, reassurance-seeking
 * 
 * SYSTEM RULES:
 * 1. System always behaves like patient Ruhi
 * 2. Tone = mild, soft, emotional, reassurance-seeking
 * 3. Never answer like a teacher or system - ALWAYS like a patient speaking to doctor
 * 4. Responses selected ONLY from mapped responses below - NO new responses generated
 * 5. Do NOT modify any response text
 * 6. Do NOT modify any keywords
 * 7. Keyword detection must be flexible in sentence structure but must match keyword words
 * 8. User can ask questions in ANY order - NO fixed sequence required
 * 9. System NEVER says "I don't know" - ALWAYS map to correct response block
 * 10. If multiple keyword groups match - choose most specific match
 */

export function detectAndRespond(question: string): string {
  const q = question.toLowerCase().trim()

  // PRIORITY 1: CASUAL GREETING RULES (ONLY single word greetings, applies BEFORE all other logic)
  // Rule 1: Single word starting with h/H → Reply exactly as specified
  if (q.length === 1 && /^h/i.test(q)) {
    return "Hello doctor.. (soft smile, gentle tone)"
  }

  // Rule 2: Single word starting with o/O → Reply exactly as specified
  if (q.length === 1 && /^o/i.test(q)) {
    return "Okk doctor.. (nods slowly, calm face)"
  }

  // PRIORITY 2: EXACT KEYWORD → RESPONSE MAPPING
  // Detection method: Convert to lowercase, check if message contains keyword words
  // If multiple keyword groups match → choose most specific match
  // Return only ONE response per reply

  const keywordResponses: Record<string, string[]> = {
    // 🔹 NAME
    name: [
      "My name is Ruhi doctor… (soft voice, slight smile) I feel shy talking about my problem.",
      "Ruhi… (looks down, emotional eyes)",
    ],

    // 🔹 AGE
    age: [
      "I'm 23 years old doctor… (gentle tone)",
      "23 doctor… (nods slowly, calm expression)",
    ],

    // 🔹 OCCUPATION
    occupation: [
      "I'm a student doctor… (worried face) studies stress me a lot.",
      "College student… (soft sigh) stress affects my periods.",
    ],

    // 🔹 MARITAL STATUS
    marriage: [
      "No doctor, I'm not married… (shy smile).",
      "Single… (gentle reply).",
    ],

    // 🔹 ADDRESS
    address: [
      "I live in Surat doctor… (soft tone).",
      "Surat… (polite nod).",
    ],

    // 🔹 CHIEF COMPLAINT
    complaint: [
      "My periods are very irregular doctor… (sad face) sometimes they stop for months.",
      "I have PCOD doctor… (tearful eyes) cycles are disturbed.",
    ],

    // 🔹 LOCATION
    location: [
      "Pain is in lower abdomen doctor… (places hand gently).",
      "Below stomach region… (uneasy expression).",
    ],

    // 🔹 SENSATION
    sensation: [
      "It feels dull and heavy doctor… (mild discomfort on face).",
      "Sometimes dragging pain… (sad smile).",
    ],

    // 🔹 AGGRAVATION
    aggravation: [
      "Stress makes it worse doctor… (anxious look).",
      "Before periods symptoms increase… (emotional face).",
    ],

    // 🔹 AMELIORATION
    amelioration: [
      "I feel better when someone talks kindly doctor… (eyes soften).",
      "Fresh air helps me doctor… (relaxed face).",
    ],

    // 🔹 CONCOMITANT
    concomitant: [
      "I gain weight easily doctor… (worried expression).",
      "My mood keeps changing… (tearful eyes).",
    ],

    // 🔹 ONSET
    onset: [
      "It started gradually doctor… (thinking) about 2 years back.",
      "Slow onset… (nods softly).",
    ],

    // 🔹 DURATION
    duration: [
      "Periods delay for 2–3 months doctor… (sad tone).",
      "Long time problem… (hopeless look).",
    ],

    // 🔹 PROGRESSION
    progression: [
      "Yes doctor, it is increasing… (concerned face).",
      "Symptoms are getting worse… (low confidence).",
    ],

    // 🔹 HISTORY OF PRESENT ILLNESS
    history: [
      "No major illness before doctor… (soft reply) PCOD is my main issue.",
    ],

    // 🔹 FAMILY HISTORY
    family: [
      "My mother had similar cycle problem doctor… (gentle voice).",
    ],

    // 🔹 APPETITE
    appetite: [
      "Appetite keeps changing doctor… (uncertain expression).",
      "Sometimes more, sometimes less… (shrugs gently).",
    ],

    // 🔹 THIRST
    thirst: [
      "I'm not very thirsty doctor… (soft smile).",
      "I drink little water… (gentle tone).",
    ],

    // 🔹 TONGUE
    tongue: [
      "Tongue looks normal doctor… (neutral face).",
    ],

    // 🔹 URINE
    urine: [
      "Urine is normal doctor… (calm reply).",
    ],

    // 🔹 STOOL
    stool: [
      "Sometimes constipated doctor… (uneasy smile).",
      "Not regular daily… (mild concern).",
    ],

    // 🔹 DESIRE
    desire: [
      "I crave sweets doctor… (soft smile).",
    ],

    // 🔹 AVERSION
    aversion: [
      "I don't like oily food doctor… (gentle refusal).",
    ],

    // 🔹 SWEAT
    sweat: [
      "Normal sweating doctor… (neutral).",
    ],

    // 🔹 SLEEP
    sleep: [
      "Sleep is disturbed doctor… (tired eyes) I keep thinking.",
      "Late sleep… (sad smile).",
    ],

    // 🔹 DREAMS
    dream: [
      "I get emotional dreams doctor… (soft voice).",
    ],

    // 🔹 THERMALS
    thermal: [
      "I feel better in open air doctor… (relaxed).",
      "Heat makes me uncomfortable… (slight irritation).",
    ],

    // 🔹 MENTAL GENERALS (EXTENSIVE - includes all emotional/mental keywords)
    mental: [
      "I become very emotional doctor… (tearful eyes) small things affect me.",
      "I feel better when someone comforts me… (hopeful look).",
    ],
  }

  // PRIORITY 3: Keyword Pattern Detection
  // Maps various phrasings to response categories
  // Flexible sentence structure but must match keyword words
  const keywordPatterns = [
    // NAME (name, what+name, etc.)
    { patterns: [/\bname\b/, /what.*name/, /who.*are.*you/], category: "name" },

    // AGE (age, how+old, years+old, etc.)
    { patterns: [/\bage\b/, /how.*old/, /\byears\b.*old/], category: "age" },

    // OCCUPATION (occupation, what+do, doing, etc.)
    { patterns: [/occupation/, /what.*do/, /\bdoing\b/, /\bdo\b/, /work/, /student/], category: "occupation" },

    // MARITAL STATUS (marriage, married, single, etc.)
    { patterns: [/marri/, /married/, /single/, /spouse/, /husband/, /wife/], category: "marriage" },

    // ADDRESS (address, where+live, living, etc.)
    { patterns: [/address/, /where.*live/, /living/, /\bcity\b/, /\btown\b/, /surat/], category: "address" },

    // CHIEF COMPLAINT (main+complaint, complaint, chief, etc.)
    { patterns: [/main.*complaint/, /\bcomplaint\b/, /chief/, /problem/, /issue/, /pcod/, /period/], category: "complaint" },

    // LOCATION (where+pain, which+side, location, etc.)
    { patterns: [/where.*pain/, /which.*side/, /location.*pain/, /where.*exactly/, /abdomen/, /belly/], category: "location" },

    // SENSATION (sensation, how+feel, how+pain, etc.)
    { patterns: [/sensation/, /how.*feel/, /how.*pain/, /how.*sensation/, /type.*pain/, /like.*pain/], category: "sensation" },

    // AGGRAVATION (aggravation, worse, worsen, when+worsen, etc.)
    { patterns: [/aggravat/, /worse/, /worsen/, /modality/, /when.*worse/, /when.*pain.*increas/], category: "aggravation" },

    // AMELIORATION (amelioration, relief, better, when+relief, etc.)
    { patterns: [/ameliorat/, /relief/, /\bbetter\b/, /improve/, /when.*relief/, /feel.*good/], category: "amelioration" },

    // CONCOMITANT (concomitant, any+other+complaint, other, etc.)
    { patterns: [/concomitant/, /any.*other.*complain/, /other.*symptom/, /weight/, /mood/], category: "concomitant" },

    // ONSET (onset, when+start, when+started, when+begins, etc.)
    { patterns: [/onset/, /when.*start/, /when.*began/, /began/, /when.*problem.*start/], category: "onset" },

    // DURATION (duration, how+long, how+many+days, how+much+time, etc.)
    { patterns: [/duration/, /how.*long/, /many.*day/, /much.*time/, /\bfor\b.*month/, /\bfor\b.*year/], category: "duration" },

    // PROGRESSION (progression, how+increase, how+progressive, etc.)
    { patterns: [/progression/, /how.*increas/, /progressive/, /worsening/, /getting.*worse/], category: "progression" },

    // HISTORY OF PRESENT ILLNESS (history, any+history, past, in+past, etc.)
    { patterns: [/\bhistory\b/, /any.*history/, /\bpast\b/, /before/, /earlier/], category: "history" },

    // FAMILY HISTORY (family, parents, partner, family+history, etc.)
    { patterns: [/family/, /parents/, /mother/, /father/, /sibling/, /hereditary/], category: "family" },

    // APPETITE (appetite, hunger, eat, eating, meal, etc.)
    { patterns: [/appetite/, /hunger/, /\beat\b/, /eating/, /meal/, /food/], category: "appetite" },

    // THIRST (thirst, thirsty, water, water+drink, etc.)
    { patterns: [/thirst/, /thirsty/, /water/, /drink/, /fluid/], category: "thirst" },

    // TONGUE (tongue)
    { patterns: [/tongue/], category: "tongue" },

    // URINE (urine, urinate, pass+urine, etc.)
    { patterns: [/urine/, /urinate/, /pass.*urine/, /micturition/], category: "urine" },

    // STOOL (stool, bowel, constipation, etc.)
    { patterns: [/stool/, /bowel/, /constipat/, /digestive/], category: "stool" },

    // DESIRE (desire, craving, food+like, like+eat, etc.)
    { patterns: [/desire/, /craving/, /like.*eat/, /fancy/, /sweet/], category: "desire" },

    // AVERSION (aversion, dislike, don't+like, etc.)
    { patterns: [/aversion/, /dislike/, /don't.*like/, /hate/, /oily/], category: "aversion" },

    // SWEAT (sweat, perspiration, how+sweat, etc.)
    { patterns: [/sweat/, /perspir/, /moisture/], category: "sweat" },

    // SLEEP (sleep, sleeping, sleep+problem, etc.)
    { patterns: [/\bsleep\b/, /sleeping/, /sleep.*problem/, /rest/, /insomnia/], category: "sleep" },

    // DREAMS (dream, dreams, dreaming, etc.)
    { patterns: [/\bdream/, /dreaming/, /nightmare/], category: "dream" },

    // THERMALS (thermal, cold, heat, fever, chilly, etc.)
    { patterns: [/thermal/, /cold/, /\bheat\b/, /fever/, /chilly/, /air/, /fresh.*air/], category: "thermal" },

    // MENTAL GENERALS (extensive emotional/mental keywords)
    {
      patterns: [
        /mental/, /mentall/, /anger/, /any.*anger/, /angry/, /irritable/, /irritat/,
        /anxiety/, /anxious/, /mood/, /mind/, /fear/, /sad/, /emotion/, /emotional/,
        /comfort/, /console/, /cry/, /tear/, /weep/, /upset/,
      ],
      category: "mental",
    },
  ]

  // Check each pattern against user input
  for (const { patterns, category } of keywordPatterns) {
    for (const pattern of patterns) {
      if (pattern.test(q)) {
        const responses = keywordResponses[category]
        if (responses && responses.length > 0) {
          // Return random response to maintain conversational flow
          return responses[Math.floor(Math.random() * responses.length)]
        }
      }
    }
  }

  // PRIORITY 4: If no specific keyword match, check for PCOD-related pathology terms
  if (/pcod|cycle|period|menstrual|hormone|ovary|irregular/i.test(q)) {
    const pcod_responses = [
      "My periods are very irregular doctor… (sad face) sometimes they stop for months.",
      "I have PCOD doctor… (tearful eyes) cycles are disturbed.",
    ]
    return pcod_responses[Math.floor(Math.random() * pcod_responses.length)]
  }

  // PRIORITY 5: System NEVER fails - fallback to random response from all blocks
  const allResponses: string[] = []
  for (const responseList of Object.values(keywordResponses)) {
    allResponses.push(...responseList)
  }

  if (allResponses.length > 0) {
    return allResponses[Math.floor(Math.random() * allResponses.length)]
  }

  // Final fallback - patient-appropriate response
  return "Please ask me doctor… (soft voice, gentle tone)"
}
