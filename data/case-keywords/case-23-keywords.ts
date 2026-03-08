import { detectCase23Keywords, CASE_23_RESPONSES } from "@/lib/keyword-detector"

export function detectAndRespond(userInput: string): string {
  const result = detectCase23Keywords(userInput)
  return result?.response || CASE_23_RESPONSES.default
}
