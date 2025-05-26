"use client"

import { ArrowLeft, Mail, Lock, User, Eye, EyeOff, Github, Flag, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useState } from "react"

export default function SignUpPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [nationality, setNationality] = useState("")
  const [step, setStep] = useState(1)
  
  const handleNextStep = () => {
    if (step === 1 && email && password) {
      setStep(2)
    }
  }
  
  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1)
    }
  }
  
  const popularCountries = [
    "United States", "United Kingdom", "Canada", "Australia", 
    "Germany", "France", "Japan", "China", "Singapore", "India"
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 네비게이션 */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/" className="flex items-center space-x-2 w-fit">
          <ArrowLeft className="h-5 w-5" />
          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="text-xl font-bold text-gray-900">KoreaTravelHub</span>
        </Link>
      </div>
      
      {/* 회원가입 카드 */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
              <CardDescription className="text-center">
                Join KoreaTravelHub to plan your perfect Korean adventure
              </CardDescription>
              
              {/* 단계 표시기 */}
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
            
            <CardContent className="space-y-4">
              {step === 1 ? (
                <>
                  <div className="flex flex-col md:flex-row gap-4">
                    <Button variant="outline" className="flex-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5 mr-2">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Github className="h-5 w-5 mr-2" />
                      GitHub
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-2 bg-white text-sm text-gray-500">or with email</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          placeholder="name@example.com"
                          type="email"
                          className="pl-10"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          className="pl-10 pr-10"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
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
                      <p className="text-xs text-gray-500">
                        Password must be at least 8 characters long with letters and numbers
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the <Link href="/terms" className="text-blue-600 hover:text-blue-800">Terms of Service</Link> and <Link href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link>
                      </label>
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="pl-10"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="nationality">Nationality</Label>
                    <div className="relative">
                      <Flag className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Select value={nationality} onValueChange={setNationality}>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Select a country</SelectItem>
                          {popularCountries.map(country => (
                            <SelectItem key={country} value={country.toLowerCase().replace(/\s+/g, '-')}>
                              {country}
                            </SelectItem>
                          ))}
                          {/* 여기에 더 많은 국가 추가 */}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Travel Interests</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="interest-culture" />
                        <label htmlFor="interest-culture" className="text-sm">Culture & History</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="interest-food" />
                        <label htmlFor="interest-food" className="text-sm">Food & Culinary</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="interest-kpop" />
                        <label htmlFor="interest-kpop" className="text-sm">K-Pop & Entertainment</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="interest-nature" />
                        <label htmlFor="interest-nature" className="text-sm">Nature & Outdoor</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="interest-shopping" />
                        <label htmlFor="interest-shopping" className="text-sm">Shopping</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="interest-nightlife" />
                        <label htmlFor="interest-nightlife" className="text-sm">Nightlife</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Communication Preferences</Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pref-newsletter" />
                      <label htmlFor="pref-newsletter" className="text-sm">
                        Send me travel tips, deals, and updates about Korea
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              {step === 1 ? (
                <>
                  <Button className="w-full" onClick={handleNextStep} disabled={!email || !password}>
                    Continue
                  </Button>
                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <Link href="/auth/signin" className="text-blue-600 hover:text-blue-800">
                      Sign in
                    </Link>
                  </div>
                </>
              ) : (
                <div className="flex gap-3 w-full">
                  <Button variant="outline" className="flex-1" onClick={handlePrevStep}>
                    Back
                  </Button>
                  <Button className="flex-1">
                    Create Account
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>By creating an account, you agree to our <Link href="/terms" className="underline">Terms of Service</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
