import { detectCase21Keywords } from "@/lib/keyword-detector"

/**
 * Case 21 - Chandni Shah (PULSATILLA NIGRICANS - PCOD)
 * Wrapper function for compatibility with existing case structure
 * Delegates to strict keyword detection engine
 */
export function detectAndRespond(userInput: string): string | null {
  const match = detectCase21Keywords(userInput)
  if (match) {
    return match.response
  }
  return null
}
