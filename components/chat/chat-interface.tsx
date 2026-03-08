import { addMessage, currentCase } from "./path-to-your-functions" // Adjust the import path as necessary

const handleSend = (text: string) => {
  const input = text.toLowerCase().trim()

  // 1. Casual Greeting Rules
  if (/^h/i.test(input) && input.length <= 5 && !input.includes(" ")) {
    addMessage("Hello, doctor!", "bot")
    return
  }
  if (/^o/i.test(input) && (input === "ok" || input === "okay" || input === "okk" || input === "ohk")) {
    addMessage("OKK!!", "bot")
    return
  }

  // 2. Multi-Keyword and Global Keyword Scanning
  const matchKeyword = (keywords: string[]) => {
    return keywords.some((k) => {
      if (k.includes("+")) {
        const parts = k.split("+").map((p) => p.trim())
        return parts.every((p) => input.includes(p))
      }
      return input.includes(k)
    })
  }

  // Logic to find response based on mapped keywords from instructions
  if (matchKeyword(["name", "what+name"])) return addMessage(currentCase.responses.name, "bot")
  if (matchKeyword(["age", "how+old"])) return addMessage(currentCase.responses.age, "bot")
  if (matchKeyword(["occupation", "what+do", "doing"])) return addMessage(currentCase.responses.occupation, "bot")
  if (matchKeyword(["marriage", "married", "single"])) return addMessage(currentCase.responses.maritalStatus, "bot")
  if (matchKeyword(["address", "where+live"])) return addMessage(currentCase.responses.address, "bot")
  if (matchKeyword(["complaint", "main+complain", "chief+complaint"])) {
    const responses = currentCase.responses.chiefComplaint
    return addMessage(responses[Math.floor(Math.random() * responses.length)], "bot")
  }
  if (matchKeyword(["where+pain", "side", "location", "exactly+pain"])) {
    const responses = currentCase.responses.location
    return addMessage(responses[Math.floor(Math.random() * responses.length)], "bot")
  }
  if (matchKeyword(["sensation", "how+feel", "how+pain"])) {
    const responses = currentCase.responses.sensation
    return addMessage(responses[Math.floor(Math.random() * responses.length)], "bot")
  }
  if (matchKeyword(["aggravation", "worse", "worsen", "increase", "modality"]))
    return addMessage(currentCase.responses.aggravation[0], "bot")
  if (matchKeyword(["relief", "better", "amelioration", "feel+good"]))
    return addMessage(currentCase.responses.amelioration[0], "bot")
  // ... existing code for other mappings ...
}
