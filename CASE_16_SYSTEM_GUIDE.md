# CASE 16 SYSTEM GUIDE - RUHI SHARMA (PULSATILLA NIGRICANS)

## Overview
Case 16 is a virtual patient simulation for **Ruhi Sharma**, a 23-year-old female student from Surat with **PCOD (Polycystic Ovarian Disease)**. The case uses a sophisticated keyword detection system that maps user questions to predefined emotional patient responses.

---

## Patient Profile

### Fixed Identity (NEVER CHANGES)
- **Name:** Ruhi Sharma
- **Age:** 23 years
- **Gender:** Female
- **Occupation:** Student
- **Location:** Surat
- **Disease:** PCOD (Polycystic Ovarian Disease)
- **Nature:** Mild, emotional, tearful, reassurance-seeking
- **Thermal:** Better in fresh air
- **Thirst:** Very low/thirstless
- **Remedy:** PULSATILLA NIGRICANS

### Key Characteristics
- Speaks softly with emotional undertones
- Seeks consolation and reassurance
- Emotional facial expressions (tearful eyes, sad smile)
- Body language: gentle gestures, nods slowly
- Never aggressive or irritable
- Better when comforted by kind words

---

## Core System Rules

### 1. ALWAYS Behave Like The Patient
- System ALWAYS responds as Ruhi (patient)
- Never answer like a doctor, teacher, or system
- Always include emotional tone indicators in parentheses
- Example: ✅ "I'm 23 years old doctor… (gentle tone)"
- Example: ❌ "The patient is 23 years old" (WRONG - sounds like doctor/teacher)

### 2. No New Responses Generated
- Responses are ONLY selected from the mapped keyword blocks
- Do NOT create new responses based on user input
- Do NOT modify response text
- Do NOT modify keywords
- ALL responses are predefined and fixed

### 3. Flexible Keyword Detection
- Keyword detection must work with ANY sentence structure
- User can ask in many different ways
- Keywords are detected as substrings in lowercase
- Example: "What is your age?" matches "age" keyword
- Example: "How old are you?" matches "age" + "old" keywords

### 4. No Fixed Sequence Required
- User can ask ANY question in ANY order
- No predetermined flow or sequence
- System handles all questions immediately
- Jumping between topics is allowed

### 5. System Never Fails
- System NEVER says "I don't know"
- System ALWAYS provides a response
- If no exact keyword match, falls back to pathology-related responses
- If still no match, uses random response from all blocks

---

## Keyword Detection System

### Priority Levels (in order)

#### PRIORITY 1: Casual Greeting Rules (APPLIES FIRST)
- **Rule 1:** If user sends ONLY one letter "h" or "H"
  - Response: `"Hello doctor.. (soft smile, gentle tone)"`
- **Rule 2:** If user sends ONLY one letter "o" or "O"
  - Response: `"Okk doctor.. (nods slowly, calm face)"`

These rules apply BEFORE all other logic and are designed for single-word greetings.

#### PRIORITY 2: Exact Keyword Mapping
Maps user input to 28 keyword categories:

```
NAME → Questions about name/identity
AGE → Questions about age/years old
OCCUPATION → Questions about job/work/studies
MARRIAGE → Questions about marital status/single
ADDRESS → Questions about location/city/home
COMPLAINT → Questions about main problem/PCOD
LOCATION → Questions about where pain is
SENSATION → Questions about how pain feels
AGGRAVATION → Questions about what worsens symptoms
AMELIORATION → Questions about what improves symptoms
CONCOMITANT → Questions about other symptoms
ONSET → Questions about when problem started
DURATION → Questions about how long problem lasts
PROGRESSION → Questions about if problem is worsening
HISTORY → Questions about past illnesses
FAMILY → Questions about family history
APPETITE → Questions about hunger/eating
THIRST → Questions about thirst/drinking water
TONGUE → Questions about tongue appearance
URINE → Questions about urination
STOOL → Questions about bowel/constipation
DESIRE → Questions about food cravings
AVERSION → Questions about disliking foods
SWEAT → Questions about sweating/perspiration
SLEEP → Questions about sleep quality
DREAMS → Questions about dreams
THERMALS → Questions about temperature/heat/cold
MENTAL → Questions about emotions/mood/anxiety
```

#### PRIORITY 3: Pathology-Related Fallback
If no exact keyword matches, checks for PCOD-related terms:
- Keywords: `pcod`, `cycle`, `period`, `menstrual`, `hormone`, `ovary`, `irregular`
- Returns appropriate PCOD response

#### PRIORITY 4: System Fallback
- Returns random response from all keyword blocks
- Ensures system never fails to respond

---

## Keyword → Response Mapping Details

### Example: NAME Block
**Keywords:** `["name"]`

**Responses:**
1. `"My name is Ruhi doctor… (soft voice, slight smile) I feel shy talking about my problem."`
2. `"Ruhi… (looks down, emotional eyes)"`

**Detection Logic:**
- User: "What is your name?" → detects "name" keyword → returns random response from NAME block
- User: "Tell me your name" → detects "name" keyword → returns random response from NAME block
- User: "Your name?" → detects "name" keyword → returns random response from NAME block

### Example: AGE Block
**Keywords:** `["age", "how", "old"]`

**Responses:**
1. `"I'm 23 years old doctor… (gentle tone)"`
2. `"23 doctor… (nods slowly, calm expression)"`

**Detection Logic:**
- User: "What is your age?" → detects "age" → returns random response
- User: "How old are you?" → detects "old" or "how" → returns random response
- User: "Your years?" → detects nothing specific, may fall back to pathology or system response

---

## All 28 Keyword Blocks and Responses

### 1. NAME
- **Keywords:** `name`
- **Response 1:** `My name is Ruhi doctor… (soft voice, slight smile) I feel shy talking about my problem.`
- **Response 2:** `Ruhi… (looks down, emotional eyes)`

### 2. AGE
- **Keywords:** `age`, `how`, `old`
- **Response 1:** `I'm 23 years old doctor… (gentle tone)`
- **Response 2:** `23 doctor… (nods slowly, calm expression)`

### 3. OCCUPATION
- **Keywords:** `occupation`, `what`, `do`, `doing`
- **Response 1:** `I'm a student doctor… (worried face) studies stress me a lot.`
- **Response 2:** `College student… (soft sigh) stress affects my periods.`

### 4. MARRIAGE
- **Keywords:** `marriage`, `married`, `single`
- **Response 1:** `No doctor, I'm not married… (shy smile).`
- **Response 2:** `Single… (gentle reply).`

### 5. ADDRESS
- **Keywords:** `address`, `where`, `live`, `living`
- **Response 1:** `I live in Surat doctor… (soft tone).`
- **Response 2:** `Surat… (polite nod).`

### 6. CHIEF COMPLAINT
- **Keywords:** `main`, `complaint`, `chief`
- **Response 1:** `My periods are very irregular doctor… (sad face) sometimes they stop for months.`
- **Response 2:** `I have PCOD doctor… (tearful eyes) cycles are disturbed.`

### 7. LOCATION
- **Keywords:** `where`, `pain`, `which`, `side`, `location`
- **Response 1:** `Pain is in lower abdomen doctor… (places hand gently).`
- **Response 2:** `Below stomach region… (uneasy expression).`

### 8. SENSATION
- **Keywords:** `sensation`, `how`, `feel`, `sharp`
- **Response 1:** `It feels dull and heavy doctor… (mild discomfort on face).`
- **Response 2:** `Sometimes dragging pain… (sad smile).`

### 9. AGGRAVATION
- **Keywords:** `aggravation`, `worse`, `worsen`, `when`, `increase`, `modality`
- **Response 1:** `Stress makes it worse doctor… (anxious look).`
- **Response 2:** `Before periods symptoms increase… (emotional face).`

### 10. AMELIORATION
- **Keywords:** `amelioration`, `relief`, `better`, `good`
- **Response 1:** `I feel better when someone talks kindly doctor… (eyes soften).`
- **Response 2:** `Fresh air helps me doctor… (relaxed face).`

### 11. CONCOMITANT
- **Keywords:** `concomitant`, `other`, `complaint`, `symptom`
- **Response 1:** `I gain weight easily doctor… (worried expression).`
- **Response 2:** `My mood keeps changing… (tearful eyes).`

### 12. ONSET
- **Keywords:** `onset`, `when`, `start`, `started`, `begins`
- **Response 1:** `It started gradually doctor… (thinking) about 2 years back.`
- **Response 2:** `Slow onset… (nods softly).`

### 13. DURATION
- **Keywords:** `duration`, `how`, `long`, `days`, `time`
- **Response 1:** `Periods delay for 2–3 months doctor… (sad tone).`
- **Response 2:** `Long time problem… (hopeless look).`

### 14. PROGRESSION
- **Keywords:** `progression`, `increase`, `progressive`
- **Response 1:** `Yes doctor, it is increasing… (concerned face).`
- **Response 2:** `Symptoms are getting worse… (low confidence).`

### 15. HISTORY
- **Keywords:** `history`, `past`
- **Response:** `No major illness before doctor… (soft reply) PCOD is my main issue.`

### 16. FAMILY
- **Keywords:** `family`, `parents`, `partner`
- **Response:** `My mother had similar cycle problem doctor… (gentle voice).`

### 17. APPETITE
- **Keywords:** `appetite`, `hunger`, `eat`, `eating`, `meal`
- **Response 1:** `Appetite keeps changing doctor… (uncertain expression).`
- **Response 2:** `Sometimes more, sometimes less… (shrugs gently).`

### 18. THIRST
- **Keywords:** `thirst`, `thirsty`, `water`, `drink`
- **Response 1:** `I'm not very thirsty doctor… (soft smile).`
- **Response 2:** `I drink little water… (gentle tone).`

### 19. TONGUE
- **Keywords:** `tongue`
- **Response:** `Tongue looks normal doctor… (neutral face).`

### 20. URINE
- **Keywords:** `urine`, `urinate`
- **Response:** `Urine is normal doctor… (calm reply).`

### 21. STOOL
- **Keywords:** `stool`, `bowel`, `constipation`
- **Response 1:** `Sometimes constipated doctor… (uneasy smile).`
- **Response 2:** `Not regular daily… (mild concern).`

### 22. DESIRE
- **Keywords:** `desire`, `craving`, `like`
- **Response:** `I crave sweets doctor… (soft smile).`

### 23. AVERSION
- **Keywords:** `aversion`, `dislike`, `don't`
- **Response:** `I don't like oily food doctor… (gentle refusal).`

### 24. SWEAT
- **Keywords:** `sweat`, `perspiration`
- **Response:** `Normal sweating doctor… (neutral).`

### 25. SLEEP
- **Keywords:** `sleep`, `sleeping`, `problem`
- **Response 1:** `Sleep is disturbed doctor… (tired eyes) I keep thinking.`
- **Response 2:** `Late sleep… (sad smile).`

### 26. DREAMS
- **Keywords:** `dream`, `dreams`, `dreaming`
- **Response:** `I get emotional dreams doctor… (soft voice).`

### 27. THERMALS
- **Keywords:** `thermal`, `cold`, `heat`, `fever`, `chilly`
- **Response 1:** `I feel better in open air doctor… (relaxed).`
- **Response 2:** `Heat makes me uncomfortable… (slight irritation).`

### 28. MENTAL GENERALS
- **Keywords:** `mental`, `anger`, `irritable`, `anxiety`, `mood`, `mind`, `fear`, `sad`
- **Response 1:** `I become very emotional doctor… (tearful eyes) small things affect me.`
- **Response 2:** `I feel better when someone comforts me… (hopeful look).`

---

## Vitals Page Data

```
BP: 110/70 mmHg
Pulse: 76/min
Temperature: 98.2°F
Respiration: 18/min
General Condition: Mild, emotional, seeks reassurance, tearful eyes
Abdominal Exam: Mild pelvic tenderness, hormonal imbalance signs
```

---

## Diagnosis Page

**Provisional Diagnosis:** Polycystic Ovarian Disease (PCOD)

**Correct Answer:** PULSATILLA NIGRICANS

**Why PULSATILLA?**
- Irregular delayed menses
- Mild, emotional, tearful nature
- Better by consolation and fresh air
- Thirstless constitution
- Hormonal imbalance
- Classic emotional female remedy

---

## Quiz Questions (Exam-Oriented)

1. **Mental nature of patient:**
   - A. Aggressive
   - B. Reserved
   - C. Emotional ✅ (CORRECT)
   - D. Fearful

2. **Thirst in this case:**
   - A. Excessive
   - B. Normal
   - C. Thirstless ✅ (CORRECT)
   - D. Increased at night

3. **Best modality:**
   - A. Warm room
   - B. Rest alone
   - C. Consolation ✅ (CORRECT)
   - D. Pressure

4. **Menstrual pattern:**
   - A. Regular
   - B. Profuse
   - C. Irregular delayed ✅ (CORRECT)
   - D. Painful scanty

5. **Best indicated remedy:**
   - A. Sepia
   - B. Nat mur
   - C. Pulsatilla ✅ (CORRECT)
   - D. Calcarea

---

## Implementation Files

### 1. `/data/cases/case-16.ts`
- Contains CaseDefinition object with patient data
- Stores all 28 keyword blocks with responses
- Contains vitals, diagnosis, and quiz data
- Imported and loaded dynamically

### 2. `/data/case-keywords/case-16-keywords.ts`
- Contains `detectAndRespond(question: string): string` function
- Implements all 5 priority levels of keyword detection
- Maps user input to correct response blocks
- Returns appropriate patient response

### 3. `/app/cases/[id]/page.tsx`
- Imports Case 16 response handler
- Adds Case 16 initialization in useEffect
- Adds `case16Respond(question)` function
- Routes case 16 user input to response handler
- Adds Case 16 to chat routing logic

---

## How User Questions Flow

```
User Input: "What is your name?"
    ↓
Convert to lowercase: "what is your name?"
    ↓
Check Priority 1: Single word "h" or "o"? → NO
    ↓
Check Priority 2: Match against 28 keyword blocks
    - Pattern: /\bname\b/ matches "name" in question
    - Category: "name" found
    ↓
Select response from NAME block:
    - Option 1: "My name is Ruhi doctor… (soft voice, slight smile) I feel shy talking about my problem."
    - Option 2: "Ruhi… (looks down, emotional eyes)"
    ↓
Return random choice to user
```

---

## Response Selection Logic

1. **Random Selection:** If a keyword block has multiple responses, one is chosen randomly to maintain conversational variety
2. **No Repetition:** Same response may be returned multiple times (not tracked per user)
3. **Always Single Response:** Only ONE response is returned per question (not merged)
4. **Specific Match Preferred:** If multiple categories match, most specific is chosen

---

## Testing Case 16

### Test Greeting Rules
- Input: `h` → Expected: `Hello doctor.. (soft smile, gentle tone)`
- Input: `o` → Expected: `Okk doctor.. (nods slowly, calm face)`
- Input: `hi` → Expected: Should NOT trigger greeting rule (more than 1 letter)

### Test Keyword Detection
- Input: `What is your name?` → Should return NAME response
- Input: `How old are you?` → Should return AGE response
- Input: `Do you have pain?` → Should detect "pain" → return LOCATION response
- Input: `Tell me about stress.` → Should match AGGRAVATION (stress keyword)

### Test Fallback
- Input: `Random text with no keywords` → Should return random response from all blocks
- Input: `Please help` → Should return default response

### Test PCOD Focus
- Input: `Tell me about your cycle?` → Should trigger PCOD pathology response
- Input: `How are your periods?` → Should trigger PCOD pathology response

---

## Important Notes

⚠️ **DO NOT:**
- Modify response text
- Add new responses
- Modify keywords
- Change patient characteristics
- Use doctor's voice
- Answer systemetically
- Say "I don't know"

✅ **ALWAYS:**
- Speak as patient Ruhi
- Include emotional tone indicators
- Use soft, gentle language
- Be emotional and reassurance-seeking
- Maintain single identity
- Respond to any question
- Use predefined responses only

---

## Version History
- **v1.0** - Initial Case 16 implementation (Feb 2026)
- Complete keyword-response system
- All 28 categories mapped
- Emotional patient simulation active

---

*Case 16 System Guide - RUHI SHARMA (PULSATILLA NIGRICANS)*
*PCOD Virtual Patient Simulation*
*Last Updated: February 2026*
