"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Stethoscope } from "lucide-react"
import { useRouter } from "next/navigation"
import { HomeoBackdrop } from "@/components/homeo-backdrop"

const Page = () => {
  const router = useRouter()
  return (
    <main className="min-h-screen relative p-6 grid place-items-center">
      <HomeoBackdrop theme="blue" className="absolute inset-0 -z-10" />
      <div className="text-center space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/70 rounded-full shadow-sm">
          <Stethoscope className="w-5 h-5 text-sky-500" />
          <span className="text-sky-700 font-semibold">Homeopathy Training</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700">Heyy skill crafter</h1>
        <p className="text-xl text-gray-700">Welcome to</p>

        <Card className="bg-white/90 rounded-3xl shadow-2xl border-4 border-indigo-100">
          <CardContent className="p-8">
            <div className="text-4xl md:text-5xl font-extrabold text-indigo-700 tracking-wide">Homeo Reaches</div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-center gap-3">
          <Button
            onClick={() => router.push("/why")}
            className="btn-bounce px-10 py-4 text-lg rounded-full text-white bg-gradient-to-r from-sky-500 to-indigo-500"
          >
            Continue <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </main>
  )
}

export default Page
