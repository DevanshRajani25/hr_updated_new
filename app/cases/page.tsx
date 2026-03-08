"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Lock } from "lucide-react"
import { HomeoBackdrop } from "@/components/homeo-backdrop"

const CASES = Array.from({ length: 23 }).map((_, i) => ({
  caseNumber: i + 1,
  title:
    i + 1 === 1
      ? "Maria Johnson"
      : i + 1 === 2
        ? "Rajesh Mishra"
        : i + 1 === 3
          ? "Neha Shah"
          : i + 1 === 4
            ? "Ramesh Patel"
            : i + 1 === 5
              ? "Anjali Mehta"
              : i + 1 === 6
                ? "Ramesh Patel"
                : i + 1 === 7
                  ? "Rina Patel"
                  : i + 1 === 8
                    ? "Neha Patel"
                    : i + 1 === 9
                      ? "Rita Sharma"
                      : i + 1 === 10
                        ? "Rahul Patel"
                        : i + 1 === 11
                          ? "Ramesh Solanki"
                          : i + 1 === 12
                            ? "Rajshree Sharma"
                            : i + 1 === 13
                              ? "Anil Sharma"
                            : i + 1 === 14
                              ? "Vimal Pansuriya"
                            : i + 1 === 15
                              ? "Suresh Mehta"
                            : i + 1 === 16
                              ? "Priya Sharma"
                              : i + 1 === 17
                                ? "Keyli"
                                : i + 1 === 18
                                  ? "Case 18"
                              : i + 1 === 19
                                ? "Diya"
                                : i + 1 === 20
                                  ? "Case 20"
                                  : i + 1 === 21
                                    ? "Case 21"
                                    : i + 1 === 22
                                      ? "Case 22"
                                      : i + 1 === 23
                                        ? "Case 23"
                                        : `Case ${i + 1}`,
  isLocked: i + 1 > 23,
}))

export default function CaseListPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen relative p-6">
      <HomeoBackdrop theme="lemon" className="absolute inset-0 -z-10" />
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-extrabold text-indigo-700">Select a Case to Interact</h1>
          <Button onClick={() => router.push("/why")} variant="outline" className="rounded-full">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CASES.map((c) => {
            return (
              <Card
                key={c.caseNumber}
                className={`rounded-2xl border-0 shadow-lg card-float relative ${
                  c.isLocked ? "bg-gray-100/95" : "bg-white/95"
                }`}
              >
                <CardContent className="p-6 space-y-2">
                  <div className="text-sm text-gray-600">Case {c.caseNumber}</div>
                  <div className={`font-semibold ${c.isLocked ? "text-gray-500" : "text-sky-700"}`}>{c.title}</div>
                  {c.isLocked ? (
                    <div className="flex items-center gap-2 mt-3 text-gray-500 text-sm">
                      <Lock className="w-4 h-4" />
                      <span>Locked</span>
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      className="rounded-full mt-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white"
                      onClick={() => router.push(`/cases/${c.caseNumber}`)}
                    >
                      Open
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </main>
  )
}
