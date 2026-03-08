/**
 * Standardized keyword → response rules for the Interaction page (cases 3–20).
 * - Uses ONLY the categories and keywords you specified.
 * - "+" means all tokens must appear somewhere in the user's question (order-independent).
 * - The engine picks the first matching rule and returns a random response from that rule.
 */

export type InteractionRule = {
  category: string
  keywords: string[] // keep '+' tokens to indicate multi-word matching
  responses: string[]
}

export type CaseInteractionMap = Record<number, InteractionRule[]>

function kw(s: string) {
  return s
    .split(",")
    .map((x) => x.trim().toLowerCase())
    .filter(Boolean)
}

// Standardized keyword sets (ONLY these are used for cases 3–20)
const K = {
  // 1 NAME – 15
  name: kw(
    "name,what+name,who,called,first+name,last+name,full+name,identity,introduce,title,personal,mention,known,register,nick",
  ),
  // 2 AGE – 10
  age: kw("age,what+age,how+old,old,years,birth,dob,date+of+birth,years+old,tell+age"),
  // 3 SEX – 10
  sex: kw("who+you,sex,gender,male,female,boy,girl,man,woman,identity"),
  // 4 OCCUPATION – 25
  occupation: kw(
    "occupation,work,job,duty,career,service,profession,business,task,role,post,office,company,shop,field,industry,employment,livelihood,earning,income,labor,worker,position,responsibility,activity,doing,do",
  ),
  // 5 ADDRESS – 15
  address: kw(
    "where+living,living,what+address,address,location,place,stay,house,home,village,city,town,area,reside,residing",
  ),
  // 6 CHIEF COMPLAINT – 16
  chief: kw(
    "complaint,what+complaint,main+complaint,chief+complaint,main+problem,issue,trouble,suffering,difficulty,illness,condition,matter,disease,pain,concern,problem",
  ),
  // 7 LOCATION OF COMPLAINT – 15
  location: kw(
    "where+pain,where+complaint,location+pain,location+complaint,body+part,affected+part,which+side,which+part,exact+place,affected+area,seat+of+pain,point+of+pain,site+of+complaint,which+region,where+exactly",
  ),
  // 8 SENSATION – 15
  sensation: kw(
    "sensation,how+feel,how+sensation,how+feeling,what+type+pain,character+pain,nature+pain,describe+pain,what+kind+pain,how+pain,what+feeling,type+of+sensation,kind+of+sensation,character+complaint,how+exactly+feel",
  ),
  // 9 AGGRAVATION – 20
  aggravation: kw(
    "aggravation,aggravates,worse,worsen,when+worsen,when+worse,what+worsen,what+worse,worse+time,worse+night,intensifies,flare,increase,bad,stronger,heightened,severe,escalation,triggers,peak",
  ),
  // 10 AMELIORATION – 15
  amelioration: kw(
    "amelioration,ameliorate,when+ameliorates,when+good,good,well,when+well,feel+well,better,relief,improves,ease,soothing,comfort,lessen",
  ),
  // 11 CONCOMITANT – 15
  concomitant: kw(
    "concomitant,any+other,any+concomitant,other+symptoms,along+with,together+with,associated,accompanying,additional,together,along,also+have,besides,along+symptom,together+symptom",
  ),
  // 12 HISTORY – 20
  history: kw(
    "history,past+history,disease+history,family+history,past,past+happened,before,earlier,previous,prior,old,past+disease,family+disease,past+illness,illness+history,suffered,suffering+before,any+past,medical+history,old+complaint",
  ),
  // 13 APPETITE – 20
  appetite: kw(
    "appetite,how+appetite,hunger,eat,eating,stomach,hungry,starving,craving,meals,mealtime,breakfast,lunch,dinner,diet,food,fasting,digestion,belly,emptiness",
  ),
  // 14 THIRST – 20
  thirst: kw(
    "thirst,thirsty,water,drink,how+water,drink+water,drinking,liquids,beverage,sip,sips,gulp,intake,fluid,glass+water,cold+water,warm+water,hot+water,how+often+drink,how+much+water",
  ),
  // 15 STOOL – 20
  stool: kw(
    "stool,how+stool,motion,motions,bowel,bowels,potty,poop,shit,feces,toilet,defecation,loose+motion,constipation,diarrhea,dysentery,hard+stool,watery+stool,pass+stool,passing+stool",
  ),
  // 16 URINE – 15
  urine: kw(
    "urine,pass+urine,urinate,urinates,urination,micturition,pee,peeing,piss,toilet+urine,frequency+urine,bladder,stream,output,flow",
  ),
  // 17 SLEEP – 15
  sleep: kw(
    "sleep,sleeping,sleep+cycle,nap,napping,bedtime,rest,resting,slumber,sleepless,insomnia,awake,awaken,drowsy,tired",
  ),
  // 18 THERMAL – 15
  thermal: kw(
    "thermal,hot,heat,warm,warmth,cold,chilly,clill,cool,temperature,sweating+hot,sweating+cold,sensitive+heat,sensitive+cold,body+temperature".replace(
      "clill",
      "chill",
    ),
  ),
  // 19 MENTAL GENERALS – 20
  mental_generals: kw(
    "mental+generals,mentally,mind,nature,nature+mind,mood,emotions,anxious,restless,irritable,worried,nervous,stressed,depressed,fearful,tension,agitation,panic,concentration,memory",
  ),
}

// Helper to pick a random response
export function pick(responses: string[]) {
  if (!responses.length) return ""
  if (responses.length === 1) return responses[0]
  const i = Math.floor(Math.random() * responses.length)
  return responses[i]
}

/**
 * INTERACTION_MAP:
 * - Each case defines ordered rules for ONLY the standardized categories above.
 * - Earlier definitions and keywords are fully removed per your instruction.
 */
export const INTERACTION_MAP: CaseInteractionMap = {
  // 3 – Neha Shah (Neck eczema)
  3: [
    { category: "name", keywords: K.name, responses: ["Doctor, my name is Neha Shah.", "I am Neha Shah, Doctor."] },
    { category: "age", keywords: K.age, responses: ["Doctor, I am 31 years old.", "My age is 31 years, Doctor."] },
    { category: "sex", keywords: K.sex, responses: ["I am a female, Doctor.", "Yes Doctor, I am a woman."] },
    {
      category: "occupation",
      keywords: K.occupation,
      responses: ["I am a teacher, Doctor.", "Doctor, I work as a teacher."],
    },
    {
      category: "address",
      keywords: K.address,
      responses: ["I live in [Fill by user], Doctor.", "My address is [Fill by user], Doctor."],
    },
    {
      category: "chief",
      keywords: K.chief,
      responses: [
        "Doctor, I have red, itchy patches on my neck that burn.",
        "Yes Doctor, my neck is covered with these irritating eruptions.",
      ],
    },
    {
      category: "location",
      keywords: K.location,
      responses: [
        "The itching and redness are on my neck, Doctor.",
        "Yes Doctor, the patches are mainly around my neck.",
      ],
    },
    {
      category: "sensation",
      keywords: K.sensation,
      responses: [
        "It itches terribly and burns badly, Doctor.",
        "Doctor, the sensation is burning and scratching constantly.",
      ],
    },
    {
      category: "aggravation",
      keywords: K.aggravation,
      responses: [
        "The itching is much worse at night and from sweating.",
        "Doctor, it flares up especially in the evenings.",
      ],
    },
    {
      category: "amelioration",
      keywords: K.amelioration,
      responses: ["Cold water wash gives me some relief.", "Doctor, applying lotion helps a little."],
    },
    {
      category: "concomitant",
      keywords: K.concomitant,
      responses: [
        "Sometimes my eyes burn when the itching is severe.",
        "Doctor, the irritation also affects my eyes occasionally.",
      ],
    },
    {
      category: "history",
      keywords: K.history,
      responses: ["This problem started about 2 weeks ago.", "Doctor, it began around two weeks back."],
    },
    {
      category: "appetite",
      keywords: K.appetite,
      responses: ["My appetite is normal, Doctor.", "Yes, I am eating fine, Doctor."],
    },
    {
      category: "thirst",
      keywords: K.thirst,
      responses: [
        "I feel very thirsty and drink water frequently, Doctor.",
        "Doctor, I am drinking a lot of water because I feel thirsty.",
      ],
    },
    {
      category: "stool",
      keywords: K.stool,
      responses: ["My stools are normal, Doctor.", "Doctor, bowel movements are regular."],
    },
    {
      category: "urine",
      keywords: K.urine,
      responses: ["My urine is normal, Doctor.", "Doctor, there is no problem with urination."],
    },
    {
      category: "sleep",
      keywords: K.sleep,
      responses: [
        "My sleep is disturbed because of itching at night.",
        "Doctor, I am unable to sleep well due to burning and itching.",
      ],
    },
    {
      category: "thermal",
      keywords: K.thermal,
      responses: ["I feel hot most of the time, Doctor.", "Doctor, my body feels warmer than usual."],
    },
    {
      category: "mental_generals",
      keywords: K.mental_generals,
      responses: [
        "I feel very irritable and restless because of this constant itching, Doctor.",
        "Doctor, I am anxious and frustrated due to the burning and itchiness.",
      ],
    },
  ],

  // 4 – Ramesh Patel (Epistaxis)
  4: [
    {
      category: "name",
      keywords: K.name,
      responses: ["Doctor, my name is Ramesh Patel.", "I am Ramesh Patel, Doctor."],
    },
    { category: "age", keywords: K.age, responses: ["Doctor, I am 27 years old.", "My age is 27, Doctor."] },
    { category: "sex", keywords: K.sex, responses: ["I am a male, Doctor.", "Yes Doctor, I am a man."] },
    {
      category: "occupation",
      keywords: K.occupation,
      responses: ["I am an office worker, Doctor.", "Doctor, I work in an office."],
    },
    {
      category: "address",
      keywords: K.address,
      responses: ["I live in [Fill by user], Doctor.", "Doctor, my address is [Fill by user]."],
    },
    {
      category: "chief",
      keywords: K.chief,
      responses: [
        "It suddenly started just a few minutes ago while I was sitting.",
        "Blood is mostly coming from my right nostril.",
      ],
    },
    {
      category: "location",
      keywords: K.location,
      responses: ["The bleeding is mainly from my right nostril.", "It’s coming from the inside of my right nostril."],
    },
    {
      category: "sensation",
      keywords: K.sensation,
      responses: ["It’s bright red and fresh, Doctor.", "The blood flows suddenly and heavily, I feel weak."],
    },
    {
      category: "aggravation",
      keywords: K.aggravation,
      responses: ["It seems worse when I bend forward or strain.", "Bleeding feels heavier when I stand up suddenly."],
    },
    {
      category: "amelioration",
      keywords: K.amelioration,
      responses: [
        "Sitting upright and pinching my nose gives some relief.",
        "Leaning forward and applying cold helps a bit.",
      ],
    },
    {
      category: "concomitant",
      keywords: K.concomitant,
      responses: ["Yes, I feel a little weak and dizzy after the bleeding.", "I feel tired and shaky, Doctor."],
    },
    {
      category: "history",
      keywords: K.history,
      responses: [
        "It suddenly started just a few minutes ago.",
        "Doctor, it began while I was sitting a short time back.",
      ],
    },
    {
      category: "appetite",
      keywords: K.appetite,
      responses: ["My appetite is normal, Doctor.", "Yes, I am eating fine, Doctor."],
    },
    {
      category: "thirst",
      keywords: K.thirst,
      responses: [
        "I feel thirsty, Doctor, and drink water frequently.",
        "Doctor, I am drinking water because I feel thirsty.",
      ],
    },
    {
      category: "stool",
      keywords: K.stool,
      responses: ["My stools are normal, Doctor.", "Doctor, bowel movements are regular."],
    },
    {
      category: "urine",
      keywords: K.urine,
      responses: ["My urine is normal, Doctor.", "Doctor, there is no problem with urination."],
    },
    {
      category: "sleep",
      keywords: K.sleep,
      responses: ["My sleep is normal, Doctor.", "Doctor, I am able to sleep well despite the bleeding."],
    },
    {
      category: "thermal",
      keywords: K.thermal,
      responses: ["I feel normal in temperature, Doctor.", "Doctor, I don’t feel too hot or too cold."],
    },
    {
      category: "mental_generals",
      keywords: K.mental_generals,
      responses: [
        "I feel anxious and restless because of this sudden bleeding, Doctor.",
        "Doctor, I am worried and a bit scared due to the nosebleed.",
      ],
    },
  ],

  // 5 – Anjali Mehta (Depressive tone)
  5: [
    {
      category: "name",
      keywords: K.name,
      responses: ["Doctor… my name is Anjali Mehta.", "I am Anjali Mehta, Doctor…"],
    },
    { category: "age", keywords: K.age, responses: ["Doctor… I am 29 years old.", "I am 29, Doctor…"] },
    { category: "sex", keywords: K.sex, responses: ["I am a female, Doctor…", "Yes Doctor… I am a woman."] },
    {
      category: "occupation",
      keywords: K.occupation,
      responses: ["Doctor… I work as a teacher.", "I am a teacher, Doctor…"],
    },
    {
      category: "address",
      keywords: K.address,
      responses: ["I live in [Fill by user], Doctor…", "My address is [Fill by user], Doctor…"],
    },
    {
      category: "chief",
      keywords: K.chief,
      responses: [
        "(tearful voice) I don’t know why… but tears just come without reason. I feel helpless.",
        "Doctor… I feel sad all the time… nothing excites me anymore.",
      ],
    },
    {
      category: "sleep",
      keywords: K.sleep,
      responses: [
        "I can’t sleep well… I wake up at night and keep thinking about useless things.",
        "Doctor… sleep is disturbed… I toss and turn all night.",
      ],
    },
    {
      category: "appetite",
      keywords: K.appetite,
      responses: [
        "I hardly feel hungry… sometimes I skip meals without noticing.",
        "Doctor… I have very little appetite these days.",
      ],
    },
    {
      category: "history",
      keywords: K.history,
      responses: [
        "No major illness before… but I was always sensitive and emotional since childhood.",
        "Doctor… I have always been emotional and delicate, even as a child.",
      ],
    },
    {
      category: "thirst",
      keywords: K.thirst,
      responses: ["I rarely feel thirsty, Doctor…", "Doctor… I drink water, but not often enough."],
    },
    {
      category: "stool",
      keywords: K.stool,
      responses: ["My bowel movements are normal, Doctor…", "Doctor… stools are regular, nothing unusual."],
    },
    {
      category: "urine",
      keywords: K.urine,
      responses: ["Urination is normal, Doctor…", "Doctor… no issue with urine."],
    },
    {
      category: "thermal",
      keywords: K.thermal,
      responses: [
        "Doctor… I feel cold most of the time and cannot get warm easily.",
        "I feel a constant chill, Doctor… my body seems colder than usual.",
      ],
    },
    {
      category: "mental_generals",
      keywords: K.mental_generals,
      responses: [
        "I feel very low, anxious, and restless, Doctor… everything seems heavy on my mind.",
        "Doctor… I am frustrated, worried, and sad all the time… I cannot focus or feel happy.",
      ],
    },
  ],

  // 6 – Ramesh Patel (Tonsillitis)
  6: [
    {
      category: "name",
      keywords: K.name,
      responses: ["Doctor, my name is Ramesh Patel.", "I am Ramesh Patel, Doctor."],
    },
    { category: "age", keywords: K.age, responses: ["Doctor, I am 22 years old.", "My age is 22 years, Doctor."] },
    { category: "sex", keywords: K.sex, responses: ["I am a male, Doctor.", "Yes Doctor, I am a man."] },
    {
      category: "occupation",
      keywords: K.occupation,
      responses: ["I am a student, Doctor.", "Doctor, I study at college."],
    },
    {
      category: "address",
      keywords: K.address,
      responses: ["I live in [Fill by user], Doctor.", "My address is [Fill by user], Doctor."],
    },
    {
      category: "chief",
      keywords: K.chief,
      responses: [
        "Doctor, my throat hurts so much… it’s red and swollen. I can hardly swallow.",
        "Yes Doctor, my throat is painful and swallowing is difficult.",
      ],
    },
    {
      category: "location",
      keywords: K.location,
      responses: [
        "The pain is mainly in my throat and tonsils, Doctor.",
        "Yes Doctor, my tonsils are swollen, especially on the right side.",
      ],
    },
    {
      category: "sensation",
      keywords: K.sensation,
      responses: [
        "It feels like knives when I try to swallow, Doctor.",
        "Even drinking water makes it burn badly, Doctor.",
      ],
    },
    {
      category: "aggravation",
      keywords: K.aggravation,
      responses: [
        "The pain is worse when I swallow food or drink cold water, Doctor.",
        "Doctor, it flares up especially in the evenings and when I eat.",
      ],
    },
    {
      category: "amelioration",
      keywords: K.amelioration,
      responses: [
        "Warm drinks help a little and give some relief, Doctor.",
        "Doctor, swallowing warm water makes it slightly better.",
      ],
    },
    {
      category: "concomitant",
      keywords: K.concomitant,
      responses: [
        "I feel feverish and weak along with the throat pain, Doctor.",
        "Doctor, sometimes my eyes water and I feel tired too.",
      ],
    },
    {
      category: "history",
      keywords: K.history,
      responses: [
        "The pain started suddenly since yesterday evening, Doctor.",
        "Doctor, it has been increasing overnight since it began.",
      ],
    },
    {
      category: "appetite",
      keywords: K.appetite,
      responses: ["My appetite is normal, Doctor.", "Yes, I am eating fine, Doctor."],
    },
    {
      category: "thirst",
      keywords: K.thirst,
      responses: [
        "I feel very thirsty and drink water frequently, Doctor.",
        "Doctor, I keep drinking warm water to ease the throat pain.",
      ],
    },
    {
      category: "stool",
      keywords: K.stool,
      responses: ["My stools are normal, Doctor.", "Doctor, bowel movements are regular."],
    },
    {
      category: "urine",
      keywords: K.urine,
      responses: ["My urine is normal, Doctor.", "Doctor, there is no problem with urination."],
    },
    {
      category: "sleep",
      keywords: K.sleep,
      responses: [
        "My sleep is disturbed because of throat pain, Doctor.",
        "Doctor, I am unable to sleep well due to discomfort while swallowing.",
      ],
    },
    {
      category: "thermal",
      keywords: K.thermal,
      responses: ["I feel hot most of the time, Doctor.", "Doctor, my body feels warmer than usual and feverish."],
    },
    {
      category: "mental_generals",
      keywords: K.mental_generals,
      responses: [
        "I feel very irritable and restless because of this constant throat pain, Doctor.",
        "Doctor, I am anxious and frustrated due to the discomfort and fever.",
      ],
    },
  ],

  // 7 – Rina Patel (Sun headache)
  7: [
    { category: "name", keywords: K.name, responses: ["Doctor, my name is Rina Patel.", "I am Rina Patel, Doctor."] },
    { category: "age", keywords: K.age, responses: ["Doctor, I am 26 years old.", "My age is 26 years, Doctor."] },
    { category: "sex", keywords: K.sex, responses: ["I am a female, Doctor.", "Yes Doctor, I am a woman."] },
    {
      category: "occupation",
      keywords: K.occupation,
      responses: ["I am a student, Doctor.", "Doctor, I study full-time."],
    },
    {
      category: "address",
      keywords: K.address,
      responses: ["I live in [Fill by user], Doctor.", "My address is [Fill by user], Doctor."],
    },
    {
      category: "chief",
      keywords: K.chief,
      responses: [
        "My head feels like it will burst… such a heavy throbbing, I can’t tolerate it.",
        "Doctor, the pain is intense and pulsating, especially in my temples.",
      ],
    },
    {
      category: "aggravation",
      keywords: K.aggravation,
      responses: [
        "As soon as I go out in the sun, it feels unbearable… I feel like fainting.",
        "Doctor, bright sunlight makes the pain so severe, I can hardly stay upright.",
      ],
    },
    {
      category: "amelioration",
      keywords: K.amelioration,
      responses: [
        "If I lie down in a cool, dark room, it eases a little.",
        "Doctor, resting in darkness gives some relief from the pounding headache.",
      ],
    },
    {
      category: "history",
      keywords: K.history,
      responses: [
        "I get these headaches every summer, especially in bright sun.",
        "Doctor, this happens to me in sunny weather every year.",
      ],
    },
    {
      category: "appetite",
      keywords: K.appetite,
      responses: ["My appetite is normal, Doctor.", "Yes, I am eating fine, Doctor."],
    },
    {
      category: "thirst",
      keywords: K.thirst,
      responses: [
        "I feel very thirsty and drink water frequently, Doctor.",
        "Doctor, I am drinking a lot of water because I feel thirsty.",
      ],
    },
    {
      category: "stool",
      keywords: K.stool,
      responses: ["My stools are normal, Doctor.", "Doctor, bowel movements are regular."],
    },
    {
      category: "urine",
      keywords: K.urine,
      responses: ["My urine is normal, Doctor.", "Doctor, there is no problem with urination."],
    },
    {
      category: "sleep",
      keywords: K.sleep,
      responses: [
        "My sleep is disturbed because of headache in sunlight.",
        "Doctor, I am unable to sleep well due to throbbing pain.",
      ],
    },
    {
      category: "thermal",
      keywords: K.thermal,
      responses: ["I feel hot most of the time, Doctor.", "Doctor, my body feels warmer than usual."],
    },
    {
      category: "mental_generals",
      keywords: K.mental_generals,
      responses: [
        "I feel restless and irritated; the heat makes me mad.",
        "Doctor, I am anxious and sensitive; bright light upsets me.",
      ],
    },
  ],

  // 8 – Neha Patel (Facial eczema)
  8: [
    { category: "name", keywords: K.name, responses: ["Doctor, my name is Neha Patel.", "I am Neha Patel, Doctor."] },
    { category: "age", keywords: K.age, responses: ["Doctor, I am 26 years old.", "My age is 26 years, Doctor."] },
    { category: "sex", keywords: K.sex, responses: ["I am a female, Doctor.", "Yes Doctor, I am a woman."] },
    {
      category: "occupation",
      keywords: K.occupation,
      responses: ["I am a housewife, Doctor.", "Doctor, I manage household work."],
    },
    {
      category: "address",
      keywords: K.address,
      responses: ["I live in [Fill by user], Doctor.", "My address is [Fill by user], Doctor."],
    },
    {
      category: "chief",
      keywords: K.chief,
      responses: [
        "Doctor, I have red, itchy patches on my face that burn after scratching 😣.",
        "Yes Doctor, my cheeks and forehead are covered with irritating eruptions 😢.",
      ],
    },
    {
      category: "location",
      keywords: K.location,
      responses: [
        "The eruptions are mainly on my cheeks and forehead, Doctor 😔.",
        "Yes Doctor, the itchy patches cover my face 😣.",
      ],
    },
    {
      category: "sensation",
      keywords: K.sensation,
      responses: [
        "It itches terribly and burns after scratching, Doctor 😣.",
        "Doctor, the sensation is irritating and painful, especially at night 😢.",
      ],
    },
    {
      category: "aggravation",
      keywords: K.aggravation,
      responses: [
        "The itching is much worse at night and from heat of bed 😢.",
        "Doctor, it flares up especially after scratching or sweating 😣.",
      ],
    },
    {
      category: "amelioration",
      keywords: K.amelioration,
      responses: ["Cold water gives me some relief, Doctor 🙏.", "Doctor, applying cold lotion helps a little 😌."],
    },
    {
      category: "concomitant",
      keywords: K.concomitant,
      responses: [
        "I feel ashamed to go outside… people look at my face 😔.",
        "Doctor, I weep easily and feel embarrassed in society 😢.",
      ],
    },
    {
      category: "history",
      keywords: K.history,
      responses: [
        "Sometimes I have constipation with hard stools, Doctor 😣.",
        "Doctor, I get constipated at times and it’s uncomfortable 😢.",
      ],
    },
    {
      category: "appetite",
      keywords: K.appetite,
      responses: ["My appetite is normal, Doctor 😊.", "Yes, I am eating fine, Doctor."],
    },
    {
      category: "thirst",
      keywords: K.thirst,
      responses: ["My thirst is moderate, Doctor.", "Doctor, I drink water normally."],
    },
    {
      category: "stool",
      keywords: K.stool,
      responses: ["Yes Doctor, I am constipated sometimes 😣.", "Doctor, my stools are hard and irregular."],
    },
    {
      category: "sleep",
      keywords: K.sleep,
      responses: [
        "My sleep is disturbed because of itching at night 😢.",
        "Doctor, I cannot sleep well due to burning and itchiness 😣.",
      ],
    },
    {
      category: "thermal",
      keywords: K.thermal,
      responses: ["I feel chilly most of the time, Doctor ❄️.", "Doctor, my body feels colder than usual."],
    },
    {
      category: "mental_generals",
      keywords: K.mental_generals,
      responses: [
        "I weep easily and feel embarrassed about my skin, Doctor 😢.",
        "Doctor, I am irritable and frustrated due to constant itching 😣",
      ],
    },
  ],

  // 17 – Keyli (Hair loss - PHOSPHORUS)
  // Remedy: PHOSPHORUS | Case Type: Diffuse hair fall after weakness / stress
  // Patient Nature: Sensitive, emotional, anxious, open, easily exhausted, fearful when alone
  17: [
    // CASUAL GREETING RULES
    { category: "greeting_hi", keywords: ["hi", "hello", "hey"], responses: ["Hello doctor.. (soft, hopeful tone)"] },
    { category: "greeting_ok", keywords: ["ok", "okk", "okay"], responses: ["Okk doctor.. (polite, slightly anxious)"] },

    // BASIC PATIENT INFO
    { category: "name", keywords: ["name", "what name"], responses: ["My name is Keyli doctor… (open, emotional) I'm really worried seeing so much hair fall."] },
    { category: "age", keywords: ["age", "how old", "how old are you"], responses: ["I am 27 years old doctor… (concerned) this problem is making me anxious."] },
    { category: "occupation", keywords: ["occupation", "what do", "doing", "do you do"], responses: ["I work as a designer doctor… (mentally tired) long work hours make me feel weak and drained."] },
    { category: "marital", keywords: ["marriage", "married", "are you married", "single"], responses: ["I am single doctor… (emotionally expressive) I share everything openly when I feel stressed."] },
    { category: "address", keywords: ["address", "where live", "where do you live", "living"], responses: ["I live in Mumbai doctor… (friendly but worried) stress and lifestyle here are heavy."] },

    // CHIEF COMPLAINT
    { category: "chief_complaint", keywords: ["main complaint", "complaint", "chief complaint"], responses: ["My main complaint is excessive hair fall doctor… (distressed) hair comes out every time I comb."] },

    // LOCATION OF PAIN/COMPLAINT
    { category: "location", keywords: ["where pain", "which side", "location pain", "where exactly"], responses: ["It is from the whole scalp doctor… (concerned) more noticeable in the front area."] },

    // SENSATION
    { category: "sensation", keywords: ["sensation", "how sensation", "how feel", "how pain"], responses: ["My scalp feels sensitive and burning doctor… (uneasy) like heat on the skin."] },

    // AGGRAVATION (Modalities)
    { category: "aggravation", keywords: ["aggravation", "aggravates", "worse", "worsen", "when worsen", "when increase"], responses: ["It becomes worse after stress and lack of sleep doctor… (emotionally affected) and when I get mentally upset."] },

    // AMELIORATION (Modalities)
    { category: "amelioration", keywords: ["amelioration", "ameliorates", "relief", "feel good", "when relief"], responses: ["I feel better with rest and cool air doctor… (relieved) cold applications help."] },

    // CONCOMITANT SYMPTOMS
    { category: "concomitant", keywords: ["concomitant", "any other complaint", "other symptom", "other"], responses: ["I also feel weakness and dizziness sometimes doctor… (fragile) and I feel uneasy when alone."] },

    // ONSET
    { category: "onset", keywords: ["onset", "when start", "when started", "when begins"], responses: ["It started after a period of weakness doctor… (recalling) after that hair fall began."] },

    // DURATION
    { category: "duration", keywords: ["duration", "how long", "how many days", "how much time"], responses: ["It has been about 2 months doctor… (worried) gradually increasing."] },

    // PROGRESSION
    { category: "progression", keywords: ["progression", "how increase", "how progressive"], responses: ["Yes doctor it is increasing steadily… (fearful) that's why I came quickly."] },

    // HISTORY OF PRESENT ILLNESS
    { category: "history", keywords: ["history", "any history", "past", "in past"], responses: ["I had anemia and weakness earlier doctor… (soft tone) since then my hair became thin."] },

    // FAMILY HISTORY
    { category: "family_history", keywords: ["family", "parents", "partner", "family history"], responses: ["My mother had mild hair thinning doctor… (neutral) but not this much."] },

    // APPETITE
    { category: "appetite", keywords: ["appetite", "hunger", "eat", "eating", "meal"], responses: ["My appetite is variable doctor… (low energy) sometimes very hungry suddenly."] },

    // THIRST (KEYNOTE SYMPTOM)
    { category: "thirst", keywords: ["thirst", "thirsty", "water", "water drink"], responses: ["I feel very thirsty doctor… (keynote) I drink a lot of cold water."] },

    // TONGUE
    { category: "tongue", keywords: ["tongue"], responses: ["My tongue looks red and a bit dry doctor… (observing)"] },

    // URINE
    { category: "urine", keywords: ["urine", "urinate", "urinates", "pass urine"], responses: ["Urine is normal doctor… (calm) no burning."] },

    // STOOL
    { category: "stool", keywords: ["stool", "bowel", "constipation"], responses: ["Stool is mostly normal doctor… (plain) sometimes loose when stressed."] },

    // DESIRE (CRAVINGS) - KEYNOTE
    { category: "desire", keywords: ["desire", "craving", "food like", "like eat"], responses: ["I crave cold drinks and ice cream doctor… (clear keynote) I strongly want cold things."] },

    // AVERSION
    { category: "aversion", keywords: ["aversion", "dislike", "don't like"], responses: ["I don't like hot food doctor… (clear dislike) heat troubles me."] },

    // SWEAT
    { category: "sweat", keywords: ["sweat", "perspiration", "how sweat"], responses: ["Sweat is moderate doctor… (normal) more when anxious."] },

    // SLEEP
    { category: "sleep", keywords: ["sleep", "sleeping", "sleep problem"], responses: ["My sleep is light doctor… (sensitive) small sounds wake me."] },

    // DREAMS
    { category: "dreams", keywords: ["dream", "dreams", "dreaming"], responses: ["I get fearful dreams sometimes doctor… (restless mind)"] },

    // THERMALS (KEYNOTE)
    { category: "thermals", keywords: ["thermal", "cold", "heat", "fever", "chilly"], responses: ["I feel more comfortable in cool air doctor… (keynote) heat makes me uneasy."] },

    // MENTAL STATE (KEYNOTE) - Emotional, anxious, fearful
    { category: "mental", keywords: ["mental", "mentally", "anger", "any anger", "when angry", "angry", "how react", "irritable", "irritates", "anxiety", "anxious", "mood", "mind", "fear", "mood swings", "sad"], responses: ["I am very emotional and anxious doctor… (tearful, open) I feel fear when alone and I need reassurance."] },
  ],
}
