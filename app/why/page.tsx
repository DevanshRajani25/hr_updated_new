/* Why Choose Page */
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import { HomeoBackdrop } from "@/components/homeo-backdrop"

export default function Why() {
  const router = useRouter()
  return (
    <main className="min-h-screen relative p-6 grid place-items-center">
      <HomeoBackdrop theme="mint" className="absolute inset-0 -z-10" />
      <div className="w-full max-w-3xl">
        <Card className="bg-white/90 rounded-3xl shadow-xl card-float">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl font-extrabold text-sky-700 text-center">Why Choose Homeo Reaches</h2>
            <div className="space-y-3 text-gray-800">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-violet-500 mt-1" />
                <p>1. Play the role of a Homoeopathic doctor.</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-emerald-500 mt-1" />
                <p>2. Treat virtual patients through guided case-taking.</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-rose-500 mt-1" />
                <p>3. Learn to select the most suitable remedy with clarity.</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-500 mt-1" />
                <p>4. Best for students and interns — practical, interactive, and fast.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-emerald-50 p-4 rounded-xl border">
              <p className="text-gray-700 text-sm">
                Ask questions according to the case format. This is a learning tool to help you identify keynotes,
                improve totality-building, and make confident remedy choices.
              </p>
            </div>

            <div className="flex justify-between">
              <Button onClick={() => router.push("/")} variant="outline" className="btn-bounce rounded-full px-6">
                <ArrowLeft className="mr-2 w-4 h-4" /> Home
              </Button>
              <Button
                onClick={() => router.push("/cases")}
                className="btn-bounce px-8 py-3 rounded-full text-white bg-gradient-to-r from-emerald-500 to-sky-500"
              >
                Let&apos;s Take Cases <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
