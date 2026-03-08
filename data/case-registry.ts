import type { CaseDefinition } from "@/types/case"

export async function loadCaseByNumber(n: number): Promise<CaseDefinition | null> {
  switch (n) {
    case 3:
      return (await import("./cases/case-03")).default
    case 4:
      return (await import("./cases/case-04")).default
    case 5:
      return (await import("./cases/case-05")).default
    case 6:
      return (await import("./cases/case-06")).default
    case 7:
      return (await import("./cases/case-07")).default
    case 8:
      return (await import("./cases/case-08")).default
    case 9:
      return (await import("./cases/case-09")).default
    case 10:
      return (await import("./cases/case-10")).default
    case 11:
      return (await import("./cases/case-11")).default
    case 12:
      return (await import("./cases/case-12")).default
    case 13:
      return (await import("./cases/case-13")).default
    case 14:
      return (await import("./cases/case-14")).default
    case 15:
      return (await import("./cases/case-15")).default
    case 16:
      return (await import("./cases/case-16")).default
    case 17:
      return (await import("./cases/case-17")).default
    case 18:
      return (await import("./cases/case-18")).default
    case 19:
      return (await import("./cases/case-19")).default
    case 20:
      return (await import("./cases/case-20")).default
    default:
      return null
  }
}
