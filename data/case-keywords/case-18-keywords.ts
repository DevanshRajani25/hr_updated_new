import { detectCase18Keywords } from "@/lib/keyword-detector"

/**
 * Case 18 - Arjun (NATRUM MURIATICUM - Chronic Headache)
 * Wrapper function for compatibility with existing case structure
 * Delegates to strict keyword detection engine
 */
export function detectAndRespond(userInput: string): string | null {
  const match = detectCase18Keywords(userInput)
  if (match) {
    return match.response
  }
  return null
}
