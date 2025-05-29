"use client"

import { useState, FormEvent, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { ArrowLeft, User, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"

export default function CompleteProfilePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { data: session } = useSession()
  const [username, setUsername] = useState("")
  const [nationality, setNationality] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isCheckingUsername, setIsCheckingUsername] = useState(false)
  const [errors, setErrors] = useState<{ username?: string }>({})

  // Get data from URL params or session
  const email = searchParams.get("email") || session?.user?.email || ""
  const googleId = searchParams.get("googleId") || session?.user?.googleId || ""
  const name = searchParams.get("name") || session?.user?.name || ""
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"

  useEffect(() => {
    // If no email or googleId, redirect back to signup
    if (!email || !googleId) {
      toast.error("Missing authentication data. Please try again.")
      router.push("/auth/signup")
    }
  }, [email, googleId, router])

  const validateUsername = (username: string) => {
    return username.length >= 3 && username.length <= 15 && /^[a-zA-Z0-9_-]+$/.test(username)
  }

  const checkUsernameUniqueness = async (username: string) => {
    if (!username || !validateUsername(username)) return

    setIsCheckingUsername(true)
    try {
      const response = await fetch("/api/auth/check-username", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username })
      })

      const data = await response.json()
      
      if (data.exists) {
        setErrors(prev => ({ 
          ...prev, 
          username: "This username is already taken" 
        }))
      } else {
        setErrors(prev => ({ ...prev, username: undefined }))
      }
    } catch (error) {
      setErrors(prev => ({ 
        ...prev, 
        username: "Unable to verify username. Please try again." 
      }))
    } finally {
      setIsCheckingUsername(false)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (username && validateUsername(username)) {
        checkUsernameUniqueness(username)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [username])

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setUsername(value)
    if (value && !validateUsername(value)) {
      setErrors(prev => ({ 
        ...prev, 
        username: "Username must be 3-15 characters long and can only contain letters, numbers, underscores, and hyphens" 
      }))
    } else {
      if (!value || validateUsername(value)) {
        setErrors(prev => ({ ...prev, username: undefined }))
      }
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!username || !nationality) {
      toast.error("Please fill in all required fields")
      return
    }

    if (!validateUsername(username)) {
      setErrors(prev => ({ 
        ...prev, 
        username: "Username must be 3-15 characters long and can only contain letters, numbers, underscores, and hyphens" 
      }))
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/auth/google-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          google_id: googleId,
          username,
          nationality
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to create account")
      }

      // Store the JWT token in localStorage
      if (data.access_token) {
        localStorage.setItem("access_token", data.access_token)
      }

      // Sign out the temporary Google session and redirect
      await signOut({ redirect: false })
      toast.success("Account created successfully! Welcome to KoreaTravelHub!")
      router.push(callbackUrl)
    } catch (error) {
      console.error("Signup error:", error)
      toast.error(error instanceof Error ? error.message : "Failed to create account")
    } finally {
      setIsLoading(false)
    }
  }

  const popularCountries = [
    "United States", "United Kingdom", "Canada", "Australia", 
    "Germany", "France", "Japan", "China", "Singapore", "India"
  ]

  const isFormValid = () => {
    return username && 
           validateUsername(username) && 
           nationality && 
           !isLoading &&
           !isCheckingUsername &&
           !errors.username
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/" className="flex items-center space-x-2 w-fit">
          <ArrowLeft className="h-5 w-5" />
          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="text-xl font-bold text-gray-900">KoreaTravelHub</span>
        </Link>
      </div>
      
      {/* Profile completion card */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Complete Your Profile</CardTitle>
              <CardDescription className="text-center">
                Welcome {name ? name.split(' ')[0] : 'there'}! Complete your profile to finish setting up your account.
              </CardDescription>
              {email && (
                <p className="text-sm text-gray-600 text-center">
                  Signing up with: {email}
                </p>
              )}
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="johndoe123"
                      className={`pl-10 ${errors.username ? 'border-red-500' : ''}`}
                      value={username}
                      onChange={handleUsernameChange}
                      required
                      autoComplete="username"
                      maxLength={15}
                    />
                    {isCheckingUsername && (
                      <div className="absolute right-3 top-3">
                        <svg className="animate-spin h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                  {errors.username && (
                    <p className="text-sm text-red-500">{errors.username}</p>
                  )}
                  <p className="text-xs text-gray-500">
                    Username must be 3-15 characters and can contain letters, numbers, underscores, and hyphens
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationality</Label>
                  <div className="relative">
                    <Flag className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                    <Select value={nationality} onValueChange={setNationality} required>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Select your nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        {popularCountries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={!isFormValid()}
                >
                  {isLoading ? "Creating Account..." : "Complete Sign Up"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
} 