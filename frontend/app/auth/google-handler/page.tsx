"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"

export default function GoogleHandlerPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'

  useEffect(() => {
    const handleGoogleAuth = async () => {
      if (status === "loading") return
      
      if (status === "unauthenticated") {
        console.log("Google handler: User not authenticated, redirecting to signin")
        router.push("/auth/signin")
        return
      }

      if (status === "authenticated" && session?.user?.email) {
        console.log("Google handler: User authenticated, checking existence for:", session.user.email)
        try {
          // Check if user exists in our database
          const response = await fetch("/api/auth/check-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: session.user.email })
          })
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          
          const data = await response.json()
          console.log("Google handler: User existence check result:", data)
          
          if (data.exists) {
            // Existing user - redirect to intended destination (scenarios 2 & 4)
            console.log("Google handler: Existing user, redirecting to:", callbackUrl)
            toast.success("Welcome back!")
            router.push(callbackUrl)
          } else {
            // New user - redirect to complete profile (scenarios 1 & 3)
            const googleId = (session.user as any).googleId || ''
            const completeProfileUrl = `/auth/signup/complete-profile?email=${encodeURIComponent(session.user.email)}&googleId=${encodeURIComponent(googleId)}&name=${encodeURIComponent(session.user.name || '')}&callbackUrl=${encodeURIComponent(callbackUrl)}`
            console.log("Google handler: New user, redirecting to complete profile:", completeProfileUrl)
            router.push(completeProfileUrl)
          }
        } catch (error) {
          console.error("Google handler: Error checking user existence:", error)
          toast.error("Something went wrong. Please try again.")
          router.push("/auth/signin")
        }
      }
    }

    handleGoogleAuth()
  }, [status, session, router, callbackUrl])

  // Show loading while processing
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500 mx-auto"></div>
        <p className="text-gray-600">Setting up your account...</p>
      </div>
    </div>
  )
} 