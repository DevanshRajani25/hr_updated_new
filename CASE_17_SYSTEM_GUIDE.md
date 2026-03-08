# CASE 17 - KEYLI (PHOSPHORUS) - SYSTEM IMPLEMENTATION GUIDE

## OVERVIEW
Case 17 implements a **strict keyword-to-response detection engine** without AI generation or modification.

**Remedy**: PHOSPHORUS  
**Patient**: Keyli (Age 27, Designer, Mumbai)  
**Condition**: Diffuse hair fall after weakness & stress  
**System Mode**: KEYWORD → EXACT RESPONSE MAPPING

---

## SYSTEM ARCHITECTURE

### 1. KEYWORD DETECTION ENGINE
**File**: `/lib/keyword-detector.ts`  
**Function**: `detectCase17Keywords(userInput: string)`

**How it works**:
1. User sends message
2. System normalizes input (lowercase, removes punctuation)
3. Scans against CASE_17_KEYWORDS map
4. Returns best match category and exact response
5. If no match → returns default fallback

### 2. KEYWORDS STRUCTURE
Located in: `CASE_17_KEYWORDS` object

**Format**:
```typescript
greeting_hi: ["hi", "hello", "hey"],
name: ["name", "what+name"],
```

**Types**:
- **Single word**: Matches if word appears anywhere (e.g., "name")
- **Multi-word (+)**: All words must be present in any order (e.g., "what+name")

### 3. RESPONSE MAPPING
Located in: `CASE_17_RESPONSES` object

**Format**:
```typescript
greeting_hi: "Hello doctor.. (soft, hopeful tone)",
name: "My name is Keyli doctor… (open, emotional) I'm really worried seeing so much hair fall.",
```

**Rules**:
- Responses are EXACT and FIXED
- NO modifications
- NO rephrasing
- Emotional indicators in brackets (italic) are PART of response
- Must preserve exact punctuation and tone

---

## SPECIAL RULES FOR CASE 17

### RULE 1: GREETING DETECTION (Priority 1)
**Condition**: User types ONLY ONE WORD starting with:
- H/h → "Hello doctor.. (soft, hopeful tone)"
- O/o → "Okk doctor.. (polite, slightly anxious)"

**Example matches**:
- "hi" ✓
- "hello" ✓  
- "hey" ✓
- "ok" ✓
- "okk" ✓
- "okay" ✓

**Example NON-matches**:
- "hi doctor" (2 words)
- "hello how are you" (multiple words)

### RULE 2: MULTI-WORD KEYWORD MATCHING (Priority 2)
**Format**: word1 + word2 + word3  
**Meaning**: ALL words must be present (any order)

**Examples**:
- Keyword: `"how+old+you"`
- Matches: "how old are you", "how old you are", "how are you old"
- Does NOT match: "your age" (missing keywords)

### RULE 3: SINGLE WORD KEYWORD MATCHING (Priority 3)
**Matches** if word appears anywhere in input

**Example**:
- Keyword: "age"
- Matches: "age?", "your age", "tell me age"

### RULE 4: DEFAULT FALLBACK (No match)
```
"Please ask related case questions doctor.."
```
Triggered when user input doesn't match any keyword group.

---

## KEYWORD CATEGORIES (30 TOTAL)

| Category | Keywords | Response |
|----------|----------|----------|
| greeting_hi | hi, hello, hey | Hello doctor.. (soft, hopeful tone) |
| greeting_ok | ok, okk, okay | Okk doctor.. (polite, slightly anxious) |
| name | name, what+name | My name is Keyli doctor… (open, emotional) I'm really worried seeing so much hair fall. |
| age | age, how+old+you | I am 27 years old doctor… (concerned) this problem is making me anxious. |
| occupation | occupation, what+do, doing, do | I work as a designer doctor… (mentally tired) long work hours make me feel weak and drained. |
| marital | marriage, married, are+you+married, single | I am single doctor… (emotionally expressive) I share everything openly when I feel stressed. |
| address | address, where+live, living | I live in Mumbai doctor… (friendly but worried) stress and lifestyle here are heavy. |
| chief_complaint | main+complain, complaint, chief+complaint | My main complaint is excessive hair fall doctor… (distressed) hair comes out every time I comb. |
| location | where+pain, which+side, location+pain, where+exactly+pain | It is from the whole scalp doctor… (concerned) more noticeable in the front area. |
| sensation | sensation, how+sensation, how+feel, how+pain | My scalp feels sensitive and burning doctor… (uneasy) like heat on the skin. |
| aggravation | aggravation, aggravates, worse, worsen, when+worsen, when+pain+increase, modality | It becomes worse after stress and lack of sleep doctor… (emotionally affected) and when I get mentally upset. |
| amelioration | amelioration, ameliorates, relief, feel+good, when+relief | I feel better with rest and cool air doctor… (relieved) cold applications help. |
| concomitant | concomitant, any+other+complaint, other, other+symptom | I also feel weakness and dizziness sometimes doctor… (fragile) and I feel uneasy when alone. |
| onset | onset, when+start, when+started, when+begins | It started after a period of weakness doctor… (recalling) after that hair fall began. |
| duration | duration, how+long, how+many+days, how+much+time | It has been about 2 months doctor… (worried) gradually increasing. |
| progression | progression, how+increase, how+progressive | Yes doctor it is increasing steadily… (fearful) that's why I came quickly. |
| history | history, any+history, past, in+past | I had anemia and weakness earlier doctor… (soft tone) since then my hair became thin. |
| family_history | family, parents, partner, family+history | My mother had mild hair thinning doctor… (neutral) but not this much. |
| appetite | appetite, hunger, eat, eating, meal | My appetite is variable doctor… (low energy) sometimes very hungry suddenly. |
| thirst | thirst, thirsty, water, water+drink | I feel very thirsty doctor… (keynote) I drink a lot of cold water. |
| tongue | tongue | My tongue looks red and a bit dry doctor… (observing) |
| urine | urine, urinate, urinates, pass+urine | Urine is normal doctor… (calm) no burning. |
| stool | stool, bowel, constipation | Stool is mostly normal doctor… (plain) sometimes loose when stressed. |
| desire | desire, craving, food+like, like+eat | I crave cold drinks and ice cream doctor… (clear keynote) I strongly want cold things. |
| aversion | aversion, dislike, don't+like | I don't like hot food doctor… (clear dislike) heat troubles me. |
| sweat | sweat, perspiration, how+sweat | Sweat is moderate doctor… (normal) more when anxious. |
| sleep | sleep, sleeping, sleep+problem | My sleep is light doctor… (sensitive) small sounds wake me. |
| dreams | dream, dreams, dreaming | I get fearful dreams sometimes doctor… (restless mind) |
| thermals | thermal, cold, heat, fever, chilly | I feel more comfortable in cool air doctor… (keynote) heat makes me uneasy. |
| mental | mental, mentally, anger, any+anger, when+angry, angry, how+react, irritable, irritates, anxiety, anxious, mood, mind, fear, mood+swings, sad | I am very emotional and anxious doctor… (tearful, open) I feel fear when alone and I need reassurance. |

---

## VITALS PAGE (Static Display)

**File**: `/app/cases/[id]/vitals/page.tsx`

**Display Format**:
```
BP: 110/70 mmHg
Pulse: 96 /min
Temperature: 98.6°F
Respiration: 18 /min
General Condition: Weak, sensitive, emotionally expressive
Local Exam: Diffuse scalp hair thinning with sensitivity
```

**Rules**:
- Static display (no calculation)
- No modification of values
- Display exactly as written
- Not keyword-triggered

---

## DIAGNOSIS PAGE

**Diagnosis**: Diffuse telogen hair fall due to weakness & stress  
**Indicated Remedy**: **PHOSPHORUS**

**Correct Answers**: "phosphorus", "phos"  
**Wrong Answer Message**: "❌ Incorrect. The correct remedy is PHOSPHORUS."

---

## QUIZ PAGE (5 MCQs)

**Q1**: Most characteristic feature:
- A) Burning scalp ✔️
- B) Hard swelling
- C) Numbness
- D) Dry cough

**Q2**: Thirst pattern:
- A) Thirstless
- B) Warm drinks
- C) Cold water frequently ✔️
- D) Only sips

**Q3**: Mental state:
- A) Closed
- B) Emotional & open ✔️
- C) Suspicious
- D) Indifferent

**Q4**: Thermal preference:
- A) Chilly
- B) Hot patient ✔️
- C) Alternating
- D) Neutral

**Q5**: Most suitable remedy:
- A) Sepia
- B) Nat mur
- C) Phosphorus ✔️
- D) Silicea

---

## REMEDY RESULT PAGE

**Medicine Given**: PHOSPHORUS  
**Results**:
- Hair fall reduced
- Energy improved
- Scalp burning reduced
- Anxiety decreased

---

## IMPLEMENTATION FILES

1. **Case Data**: `/data/cases/case-17.ts`
   - Patient info
   - Vitals data
   - Diagnosis info
   - Quiz questions

2. **Keyword Detection**: `/lib/keyword-detector.ts`
   - `CASE_17_KEYWORDS` object
   - `CASE_17_RESPONSES` object
   - `detectCase17Keywords()` function

3. **Interaction Map**: `/data/interaction-map.ts`
   - Case 17 interaction rules
   - Keyword categories and responses

4. **Case Page**: `/app/cases/[id]/page.tsx`
   - `stdRespond()` function modified for case 17
   - Single word greeting check
   - Keyword detection logic

---

## TESTING EXAMPLES

### Example 1: Greeting
**User Input**: "hi"  
**Detection**: Single word starting with "h"  
**Response**: "Hello doctor.. (soft, hopeful tone)"

### Example 2: Multi-word Keyword
**User Input**: "How old are you doctor?"  
**Detection**: "how", "old", "you" all present → age category  
**Response**: "I am 27 years old doctor… (concerned) this problem is making me anxious."

### Example 3: Single Word Keyword
**User Input**: "Tell me about your sleep pattern"  
**Detection**: "sleep" keyword found  
**Response**: "My sleep is light doctor… (sensitive) small sounds wake me."

### Example 4: No Match
**User Input**: "What's the weather like?"  
**Detection**: No keywords match  
**Response**: "Please ask related case questions doctor.."

---

## IMPORTANT RULES

✅ **DO**:
- Match keywords exactly as specified
- Return responses exactly as written
- Preserve emotional tone indicators
- Keep punctuation
- Use strict keyword detection

❌ **DON'T**:
- Generate new responses
- Modify existing responses
- Summarize or rephrase
- Add AI explanations
- Change remedy information
- Skip emotional indicators

---

## FLOW DIAGRAM

```
User Input
   ↓
Check if single word (h or o)?
   ↓ YES → Return greeting response
   ↓ NO
Normalize input (lowercase, remove punctuation)
   ↓
Scan CASE_17_KEYWORDS
   ↓
Multi-word match (+ keywords)?
   ↓ YES → Return that response
   ↓ NO
Single word match?
   ↓ YES → Return that response
   ↓ NO
Return default: "Please ask related case questions doctor.."
```

---

## SYSTEM LOCK

**This case is locked to**:
- Remedy = PHOSPHORUS
- Patient = Keyli
- Case Type = Hair fall
- System must NOT output another remedy unless through Diagnosis/Remedy section

---

**Last Updated**: February 6, 2026  
**Status**: IMPLEMENTED & TESTED  
**System Mode**: STRICT KEYWORD → RESPONSE ENGINE (NO AI GENERATION)
