/**
 * CASE 15 - SURESH MEHTA (BRYONIA ALBA)
 * Chronic dry cough with chest pain
 * Patient: Irritable, serious, wants silence, hates disturbance
 * Remedy: BRYONIA ALBA - dry painful cough, worse from motion & talking, better by rest & pressure
 */

export function detectAndRespond(question: string): string {
  const q = question.toLowerCase().trim()

  // PRIORITY 1: CASUAL GREETING RULES (ONLY single word, no other logic)
  // Rule 1: Single word starting with h/H
  if (q.length === 1 && /^h/i.test(q)) {
    return "Hello doctor.."
  }

  // Rule 2: Single word starting with o/O
  if (q.length === 1 && /^o/i.test(q)) {
    return "Okk doctor.."
  }

  // All keyword responses - exact as specified
  const keywordResponses: Record<string, string[]> = {
    // NAME
    name: [
      "My name is Suresh doctor… (speaks slowly, holds chest) please ask briefly, talking increases my cough.",
      "Suresh Mehta… (irritated expression) even small conversation disturbs me.",
    ],
    // AGE
    age: [
      "I'm 38 years old doctor… (serious tone) I just want rest.",
      "38 doctor… (nods, avoids movement) movement worsens everything.",
    ],
    // OCCUPATION
    occupation: [
      "I'm an accountant doctor… (annoyed) sitting long hours with cough is painful.",
      "Office work doctor… (frowns) concentration is disturbed.",
    ],
    // MARITAL STATUS
    marriage: [
      "Yes doctor, married… (slightly irritated) everyone keeps asking questions.",
      "Married… (dry reply) I prefer to be left alone.",
    ],
    // ADDRESS
    address: [
      "I live in Surat doctor… (low voice) climate change affects me.",
      "Surat… (serious face) please continue.",
    ],
    // CHIEF COMPLAINT
    complaint: [
      "Dry cough with chest pain doctor… (presses chest) every cough hurts.",
      "Persistent dry cough… (irritated) pain increases on coughing.",
    ],
    // LOCATION
    location: [
      "Pain is in the chest doctor… (holds chest firmly) especially while coughing.",
      "Inside chest… (avoids deep breath) movement increases pain.",
    ],
    // SENSATION
    sensation: [
      "It feels stitching pain doctor… (grimaces) like something is tearing.",
      "Sharp pain with cough… (annoyed) very uncomfortable.",
    ],
    // AGGRAVATION
    aggravation: [
      "Movement makes it worse doctor… (stays still) even turning increases pain.",
      "Talking worsens cough… (irritated) I prefer silence.",
    ],
    // AMELIORATION
    amelioration: [
      "Rest gives relief doctor… (relaxes slightly) lying still helps.",
      "Pressing the chest helps doctor… (hand on chest) movement is bad.",
    ],
    // CONCOMITANT
    concomitant: [
      "I feel very irritable doctor… (short replies) don't like disturbance.",
      "Dry mouth and thirst doctor… (serious) want left alone.",
    ],
    // ONSET
    onset: [
      "It started gradually doctor… (thinking) worsened with time.",
      "Slow onset… (nods) became persistent.",
    ],
    // DURATION
    duration: [
      "Around 2–3 months doctor… (tired) not improving.",
      "Many weeks… (annoyed) same problem.",
    ],
    // PROGRESSION
    progression: [
      "Yes doctor, it is increasing… (concerned) pain is more now.",
      "Definitely worsening… (serious) especially with activity.",
    ],
    // HISTORY OF PRESENT ILLNESS
    history: [
      "No major illness before doctor… (irritated) this cough is the main issue now.",
    ],
    // FAMILY HISTORY
    family: [
      "No significant family illness doctor… (brief reply).",
    ],
    // APPETITE
    appetite: [
      "Appetite is normal doctor… (plain tone) no interest in food.",
      "Normal hunger… (indifferent) eating doesn't matter.",
    ],
    // THIRST
    thirst: [
      "I feel very thirsty doctor… (firm) drink large quantities.",
      "Excess thirst… (serious) prefer cold water.",
    ],
    // TONGUE
    tongue: [
      "Tongue looks dry doctor… (brief).",
    ],
    // URINE
    urine: [
      "Urine is normal doctor… (short answer).",
    ],
    // STOOL
    stool: [
      "Stool is dry doctor… (brief reply).",
      "Sometimes constipated… (annoyed).",
    ],
    // DESIRE
    desire: [
      "No special cravings doctor… (indifferent).",
    ],
    // AVERSION
    aversion: [
      "Don't like disturbance or talking doctor… (irritated).",
    ],
    // SWEAT
    sweat: [
      "Normal sweating doctor… (neutral).",
    ],
    // SLEEP
    sleep: [
      "Sleep disturbed doctor… (irritated) cough wakes me.",
      "Poor sleep… (tired) pain disturbs rest.",
    ],
    // DREAMS
    dream: [
      "No particular dreams doctor… (short reply).",
    ],
    // THERMALS
    thermal: [
      "I feel more comfortable in cool air doctor… (neutral).",
      "Heat worsens discomfort… (serious).",
    ],
    // MENTAL GENERALS
    mental: [
      "I get irritated easily doctor… (stern face) don't like being questioned.",
      "I want silence and rest… (firm tone) disturbance annoys me.",
    ],
  }

  // PRIORITY 2: Natural language keyword detection from user input
  // Maps various phrasings to response categories
  const keywordPatterns = [
    // NAME (what+name, name, etc.)
    { patterns: [/\bname\b/, /what.*name/, /who.*you/], category: "name" },
    // AGE (age, how+old+you, etc.)
    { patterns: [/\bage\b/, /how.*old/, /\byears\b.*old/], category: "age" },
    // OCCUPATION (occupation, what+do, doing, do)
    { patterns: [/occupation/, /what.*do/, /\bdoing\b/, /\bdo\b/, /work/], category: "occupation" },
    // MARITAL STATUS (marriage, married, single, etc.)
    { patterns: [/marri/, /married/, /single/, /spouse/], category: "marriage" },
    // ADDRESS (address, where+live, living)
    { patterns: [/address/, /where.*live/, /living/, /\bcity\b/, /\btown\b/], category: "address" },
    // CHIEF COMPLAINT (main+complain, complaint, chief+complaint)
    { patterns: [/main.*complaint/, /\bcomplaint\b/, /chief/, /problem/, /issue/], category: "complaint" },
    // LOCATION (where+pain, which+side, location+pain, etc.)
    { patterns: [/where.*pain/, /which.*side/, /location.*pain/, /where.*exactly/], category: "location" },
    // SENSATION (sensation, how+sensation, how+feel, how+pain)
    { patterns: [/sensation/, /how.*feel/, /how.*pain/, /how.*sensation/], category: "sensation" },
    // AGGRAVATION (aggravation, worse, worsen, modality)
    { patterns: [/aggravat/, /worse/, /worsen/, /modality/, /when.*worse/], category: "aggravation" },
    // AMELIORATION (amelioration, relief, better, modality)
    { patterns: [/ameliorat/, /relief/, /\bbetter\b/, /improve/, /when.*relief/], category: "amelioration" },
    // CONCOMITANT (concomitant, any+other+complaint, other)
    { patterns: [/concomitant/, /any.*other.*complain/, /other.*symptom/], category: "concomitant" },
    // ONSET (onset, when+start, when+started, when+begins)
    { patterns: [/onset/, /when.*start/, /when.*began/, /began/], category: "onset" },
    // DURATION (duration, how+long, how+many+days, how+much+time)
    { patterns: [/duration/, /how.*long/, /many.*day/, /much.*time/], category: "duration" },
    // PROGRESSION (progression, how+increase, how+progressive)
    { patterns: [/progression/, /how.*increas/, /progressive/, /worsening/], category: "progression" },
    // HISTORY OF PRESENT ILLNESS (history, any+history, past, in+past)
    { patterns: [/\bhistory\b/, /any.*history/, /\bpast\b/, /before/], category: "history" },
    // FAMILY HISTORY (family, parents, partner, family+history)
    { patterns: [/family/, /parents/, /partner/, /sibling/], category: "family" },
    // APPETITE (appetite, hunger, eat, eating, meal)
    { patterns: [/appetite/, /hunger/, /\beat\b/, /eating/, /meal/], category: "appetite" },
    // THIRST (thirst, thirsty, water, water+drink)
    { patterns: [/thirst/, /thirsty/, /water/, /drink/], category: "thirst" },
    // TONGUE (tongue)
    { patterns: [/tongue/], category: "tongue" },
    // URINE (urine, urinate, urinates, pass+urine)
    { patterns: [/urine/, /urinate/, /pass.*urine/], category: "urine" },
    // STOOL (stool, bowel, constipation)
    { patterns: [/stool/, /bowel/, /constipat/], category: "stool" },
    // DESIRE (desire, craving, food+like, like+eat)
    { patterns: [/desire/, /craving/, /like.*eat/, /fancy/], category: "desire" },
    // AVERSION (aversion, dislike, don't+like)
    { patterns: [/aversion/, /dislike/, /don't.*like/, /hate/], category: "aversion" },
    // SWEAT (sweat, perspiration, how+sweat)
    { patterns: [/sweat/, /perspir/, /moisture/], category: "sweat" },
    // SLEEP (sleep, sleeping, sleep+problem)
    { patterns: [/\bsleep\b/, /sleeping/, /sleep.*problem/, /rest/], category: "sleep" },
    // DREAMS (dream, dreams, dreaming)
    { patterns: [/\bdream/, /dreaming/, /nightmare/], category: "dream" },
    // THERMALS (thermal, cold, heat, fever, chilly)
    { patterns: [/thermal/, /cold/, /\bheat\b/, /fever/, /chilly/], category: "thermal" },
    // MENTAL GENERALS (extensive mental/emotional keywords)
    {
      patterns: [
        /mental/, /mentall/, /anger/, /any.*anger/, /angry/, /irritable/, /irritat/,
        /anxiety/, /anxious/, /mood/, /mind/, /fear/, /sad/, /emotion/,
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

  // PRIORITY 3: If no keyword match, check for cough-related terms (core pathology)
  if (/cough|dry|painful|pain|chest|thorax/.test(q)) {
    const coughResponses = [
      "Dry cough with chest pain doctor… (presses chest) every cough hurts.",
      "This persistent dry cough makes me very irritable doctor… I want silence.",
    ]
    return coughResponses[Math.floor(Math.random() * coughResponses.length)]
  }

  // PRIORITY 4: System never fails - fallback responses
  const allResponses: string[] = []
  for (const responseList of Object.values(keywordResponses)) {
    allResponses.push(...responseList)
  }

  if (allResponses.length > 0) {
    return allResponses[Math.floor(Math.random() * allResponses.length)]
  }

  // Final fallback - patient-appropriate default
  return "Please ask me more clearly doctor… I prefer brief conversations."
}
