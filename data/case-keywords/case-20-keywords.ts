import { detectCase20Keywords } from "@/lib/keyword-detector"

/**
 * Case 20 - Ramesh (SECALE CORNUTUM - Peripheral Circulation)
 * Wrapper function for compatibility with existing case structure
 * Delegates to strict keyword detection engine
 */
export function detectAndRespond(userInput: string): string | null {
  const match = detectCase20Keywords(userInput)
  if (match) {
    return match.response
  }
  return null
}
