export type KeywordEntry = {
  keywords: string[]
  response: string
}

export type VitalStat = {
  label: string
  value?: string
  note?: string
}

export type CaseDiagnosis = {
  provisional: string
  correct: string[] // normalized lower-case variants accepted
  correctText?: string
  wrongText?: string
  remedyInfo?: string
}

export type CaseQuizQuestion = {
  question: string
  options: string[]
  correctIndex: number
}

export type CaseDefinition = {
  caseNumber: number
  patientName: string
  age?: number | string
  intro: string
  image: string // public path e.g. /images/cases/case-03.jpg
  defaultResponse: string
  keywords: KeywordEntry[] // match same keywords system; choose response of this case only
  vitals?: {
    stats?: VitalStat[]
    summary?: string[] // bullet summary lines
  }
  diagnosis?: CaseDiagnosis
  quiz?: CaseQuizQuestion[]
}
