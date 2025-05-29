"use client"

import { useState, FormEvent, useEffect } from "react"
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { toast } from "sonner"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

function SignInPageInner() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)
  const [loginError, setLoginError] = useState("")

  // Redirect authenticated users to dashboard
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard")
    }
  }, [status, router])

  // Show loading while checking authentication
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500 mx-auto"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Don't show signin form if authenticated (redirecting)
  if (status === "authenticated") {
    return null
  }

  const handleEmailSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setLoginError("") // Clear previous errors

    try {
      // First verify credentials with our backend
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 401) {
          setLoginError("Invalid email or password")
        } else {
          setLoginError(data.error || "Failed to sign in")
        }
        return
      }

      // Store the token in localStorage for API calls
      localStorage.setItem("access_token", data.access_token)
      
      toast.success("Successfully signed in!")
      
      // Get callback URL from search params or default to dashboard
      const searchParams = new URLSearchParams(window.location.search)
      const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
      
      // Navigate to the callback URL
      router.push(callbackUrl)
    } catch (error) {
      console.error("Sign in error:", error)
      setLoginError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true)
    try {
      // Get callback URL from search params or default to dashboard
      const searchParams = new URLSearchParams(window.location.search)
      const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
      
      // Let NextAuth handle the redirect flow
      await signIn("google", { callbackUrl })
    } catch (error) {
      console.error("Google signin error:", error)
      toast.error("Failed to sign in with Google. Please try again.")
    }
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
      
      {/* Login card */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
              <CardDescription className="text-center">
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <div className="space-y-4 p-6">
              {/* Google Sign In */}
              <div className="flex flex-col md:flex-row gap-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex-1"
                  onClick={handleGoogleSignIn}
                  disabled={isGoogleLoading}
                >
                  {isGoogleLoading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </div>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5 mr-2">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                      </svg>
                      Sign in with Google
                    </>
                  )}
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-white text-sm text-gray-500">or continue with</span>
                </div>
              </div>
              
              {/* Email/Password Sign In */}
              <form onSubmit={handleEmailSignIn} className="space-y-4">
                {/* Error Message */}
                {loginError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-sm text-red-600">{loginError}</p>
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                      type="email"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/auth/reset-password" className="text-sm text-blue-600 hover:text-blue-800">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="pl-10 pr-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      type="button"
                      className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
              
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link href="/auth/signup" className="text-blue-600 hover:text-blue-800">
                  Sign up
                </Link>
              </div>
            </div>
          </Card>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>By signing in, you agree to our <Link href="/terms" className="underline">Terms of Service</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SignInPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <SignInPageInner />
}
