import { detectCase17Keywords, CASE_17_RESPONSES } from "@/lib/keyword-detector"

/**
 * Case 17 - Keyli (PHOSPHORUS - Hair Fall)
 * Wrapper function for compatibility with existing case structure
 * Delegates to strict keyword detection engine
 */
export function detectAndRespond(userInput: string): string | null {
  const match = detectCase17Keywords(userInput)
  if (match) {
    return match.response
  }
  return null
}
