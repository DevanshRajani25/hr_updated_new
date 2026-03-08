import { detectCase19Keywords } from "@/lib/keyword-detector"

/**
 * Case 19 - Rohan (SULPHUR - Chronic Acne)
 * Wrapper function for compatibility with existing case structure
 * Delegates to strict keyword detection engine
 */
export function detectAndRespond(userInput: string): string | null {
  const match = detectCase19Keywords(userInput)
  if (match) {
    return match.response
  }
  return null
}
