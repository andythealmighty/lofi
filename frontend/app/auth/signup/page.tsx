"use client"

import { ArrowLeft, Mail, Lock, User, Eye, EyeOff, Flag, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useState, FormEvent, useEffect } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { signIn, useSession } from "next-auth/react"

function SignUpPageInner() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [nationality, setNationality] = useState("")
  const [step, setStep] = useState(1)
  const [termsAgreed, setTermsAgreed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isCheckingUsername, setIsCheckingUsername] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formErrors, setFormErrors] = useState<{
    email?: string;
    password?: string;
    username?: string;
  }>({})
  
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

  // Don't show signup form if authenticated (redirecting)
  if (status === "authenticated") {
    return null
  }

  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  }

  const validatePassword = (password: string) => {
    return password.length >= 8 && /[A-Za-z]/.test(password) && /[0-9]/.test(password)
  }

  const validateUsername = (username: string) => {
    return username.length >= 3 && username.length <= 15 && /^[a-zA-Z0-9_-]+$/.test(username)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    if (value && !validateEmail(value)) {
      setFormErrors(prev => ({ ...prev, email: "Please enter a valid email address" }))
    } else {
      setFormErrors(prev => ({ ...prev, email: undefined }))
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    if (value && !validatePassword(value)) {
      setFormErrors(prev => ({ 
        ...prev, 
        password: "Password must be at least 8 characters long with letters and numbers" 
      }))
    } else {
      setFormErrors(prev => ({ ...prev, password: undefined }))
    }
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
        setFormErrors(prev => ({ 
          ...prev, 
          username: "This username is already taken" 
        }))
      } else {
        setFormErrors(prev => ({ ...prev, username: undefined }))
      }
    } catch (error) {
      setFormErrors(prev => ({ 
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
      setFormErrors(prev => ({ 
        ...prev, 
        username: "Username must be 3-15 characters long and can only contain letters, numbers, underscores, and hyphens" 
      }))
    } else {
      if (!value || validateUsername(value)) {
        setFormErrors(prev => ({ ...prev, username: undefined }))
      }
    }
  }
  
  const handleNextStep = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!email || !password) {
      setFormErrors({
        email: !email ? "Email is required" : undefined,
        password: !password ? "Password is required" : undefined
      })
      return
    }

    if (!validateEmail(email)) {
      setFormErrors(prev => ({ ...prev, email: "Please enter a valid email address" }))
      return
    }

    if (!validatePassword(password)) {
      setFormErrors(prev => ({ 
        ...prev, 
        password: "Password must be at least 8 characters long with letters and numbers" 
      }))
      return
    }

    if (!termsAgreed) {
      toast.error("Please agree to the Terms of Service and Privacy Policy")
      return
    }

    setIsLoading(true)
    try {
      const checkResponse = await fetch("/api/auth/check-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      })

      const data = await checkResponse.json()
      
      if (data.exists) {
        setFormErrors(prev => ({ ...prev, email: "This email is already registered" }))
        return
      }

      setStep(2)
    } catch (error) {
      setFormErrors(prev => ({ 
        ...prev, 
        email: "Unable to verify email. Please try again." 
      }))
    } finally {
      setIsLoading(false)
    }
  }
  
  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!username || !nationality) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!validateUsername(username)) {
      setFormErrors(prev => ({ 
        ...prev, 
        username: "Username must be 3-15 characters long and can only contain letters, numbers, underscores, and hyphens" 
      }));
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          username,
          nationality
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create account");
      }

      // Auto sign-in after successful signup
      const signinResponse = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (signinResponse.ok) {
        const signinData = await signinResponse.json();
        localStorage.setItem("access_token", signinData.access_token);
        
        toast.success("Account created successfully! Welcome to KoreaTravelHub!");
        router.push("/dashboard");
      } else {
        toast.success("Account created successfully! Please sign in.");
      router.push("/auth/signin");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to create account");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1)
    }
  }
  
  const popularCountries = [
    "United States", "United Kingdom", "Canada", "Australia", 
    "Germany", "France", "Japan", "China", "Singapore", "India"
  ]

  const isFormValid = () => {
    return email && 
           password && 
           validateEmail(email) && 
           validatePassword(password) && 
           termsAgreed
  }

  const isSecondStepValid = () => {
    return username && 
           validateUsername(username) && 
           nationality && 
           !isLoading &&
           !isCheckingUsername &&
           !formErrors.username
  }

  const handleGoogleSignup = async () => {
    setIsGoogleLoading(true)
    try {
      // Default to dashboard as the callback URL after completing signup process
      await signIn("google", { callbackUrl: "/dashboard" })
    } catch (error) {
      console.error("Google signup error:", error)
      toast.error("Failed to sign up with Google. Please try again.")
      setIsGoogleLoading(false)
    }
    // Don't set loading to false here - NextAuth will redirect
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
      
      {/* Signup card */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
              <CardDescription className="text-center">
                Join KoreaTravelHub to plan your perfect Korean adventure
              </CardDescription>
              
              {/* Step indicator */}
              <div className="flex justify-center items-center mt-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-red-500 text-white' : 'bg-green-100 text-green-600'}`}>
                  {step > 1 ? <Check className="h-5 w-5" /> : "1"}
                </div>
                <div className={`h-1 w-10 ${step === 1 ? 'bg-gray-200' : 'bg-green-500'}`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  2
                </div>
              </div>
            </CardHeader>

            {step === 1 ? (
              <form onSubmit={handleNextStep}>
                <CardContent className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="flex-1"
                      onClick={handleGoogleSignup}
                      disabled={isGoogleLoading}
                    >
                      {isGoogleLoading ? (
                        <div className="flex items-center">
                          <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Signing up...
                        </div>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5 mr-2">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                          </svg>
                          Sign up with Google
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

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        className={`pl-10 ${formErrors.email ? 'border-red-500' : ''}`}
                        value={email}
                        onChange={handleEmailChange}
                        required
                        autoComplete="email"
                      />
                    </div>
                    {formErrors.email && (
                      <p className="text-sm text-red-500">{formErrors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className={`pl-10 pr-10 ${formErrors.password ? 'border-red-500' : ''}`}
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        autoComplete="new-password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    {formErrors.password && (
                      <p className="text-sm text-red-500">{formErrors.password}</p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      name="terms"
                      checked={termsAgreed}
                      onCheckedChange={(checked) => setTermsAgreed(checked as boolean)}
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-gray-600"
                    >
                      I agree to the{" "}
                      <Link href="/terms" className="text-blue-600 hover:text-blue-800">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={!isFormValid() || isLoading}
                  >
                    {isLoading ? "Checking..." : "Continue"}
                  </Button>
                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <Link href="/auth/signin" className="text-blue-600 hover:text-blue-800">
                      Sign in
                    </Link>
                  </div>
                </CardFooter>
              </form>
            ) : (
              <form onSubmit={handleSignup}>
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
                        className={`pl-10 ${formErrors.username ? 'border-red-500' : ''}`}
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
                    {formErrors.username && (
                      <p className="text-sm text-red-500">{formErrors.username}</p>
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
                  <div className="flex gap-4 w-full">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={handlePrevStep}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1"
                      disabled={!isSecondStepValid()}
                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </div>
                </CardFooter>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function SignUpPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <SignUpPageInner />
}
