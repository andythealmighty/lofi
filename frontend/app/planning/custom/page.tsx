"use client"

import { useState } from "react"
import { ArrowLeft, Calendar, Clock, Users, MapPin, Plane, HelpCircle, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { SponsoredContent } from "@/components/sponsored-content"
import Link from "next/link"

export default function CustomPlanningPage() {
  const [step, setStep] = useState(1)
  const [travelDates, setTravelDates] = useState({ start: "", end: "" })
  const [travelers, setTravelers] = useState(2)
  const [budget, setBudget] = useState("medium") // budget, medium, luxury
  const [interests, setInterests] = useState<string[]>([])
  const [customRequests, setCustomRequests] = useState("")
  const [destinations, setDestinations] = useState([{ city: "seoul", days: 3 }])
  
  const budgetRanges = {
    budget: "₩50,000-100,000 per day",
    medium: "₩100,000-200,000 per day",
    luxury: "₩200,000+ per day"
  }
  
  const interestOptions = [
    { id: "food", label: "Food & Culinary" },
    { id: "culture", label: "Culture & History" },
    { id: "nature", label: "Nature & Outdoor" },
    { id: "kpop", label: "K-pop & Entertainment" },
    { id: "shopping", label: "Shopping" },
    { id: "wellness", label: "Wellness & Spa" },
    { id: "nightlife", label: "Nightlife" },
    { id: "photography", label: "Photography Spots" }
  ]

  const toggleInterest = (id: string) => {
    setInterests(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }
  
  const addDestination = () => {
    setDestinations([...destinations, { city: "seoul", days: 2 }])
  }
  
  const removeDestination = (index: number) => {
    setDestinations(destinations.filter((_, i) => i !== index))
  }
  
  const updateDestination = (index: number, field: 'city' | 'days', value: any) => {
    const newDestinations = [...destinations]
    newDestinations[index][field] = value
    setDestinations(newDestinations)
  }
  
  const getTotalDays = () => {
    return destinations.reduce((total, dest) => total + dest.days, 0)
  }
  
  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/planning" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-lg font-semibold">Back to Planning</span>
            </Link>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Custom Travel Planning</h1>
          <p className="text-gray-600 mb-8">Our travel experts will create a personalized itinerary just for you</p>
          
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step === i ? 'bg-blue-600 text-white' : step > i ? 'bg-green-100 text-green-600 border border-green-600' : 'bg-gray-100 text-gray-400'}`}>
                    {step > i ? '✓' : i}
                  </div>
                  <span className={`text-sm ${step === i ? 'font-medium text-blue-600' : 'text-gray-500'}`}>
                    {i === 1 ? 'Trip Details' : i === 2 ? 'Preferences' : 'Review & Submit'}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -translate-y-1/2"></div>
              <div className={`absolute left-0 top-1/2 h-0.5 bg-blue-600 -translate-y-1/2 transition-all ${step === 1 ? 'w-0' : step === 2 ? 'w-1/2' : 'w-full'}`}></div>
            </div>
          </div>
          
          {step === 1 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Trip Details</CardTitle>
                <CardDescription>Tell us about your upcoming trip to Korea</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input 
                      id="start-date" 
                      type="date" 
                      value={travelDates.start}
                      onChange={e => setTravelDates({...travelDates, start: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="end-date">End Date</Label>
                    <Input 
                      id="end-date" 
                      type="date" 
                      value={travelDates.end}
                      onChange={e => setTravelDates({...travelDates, end: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="travelers">Number of Travelers</Label>
                  <div className="flex items-center gap-4">
                    <Slider 
                      id="travelers"
                      value={[travelers]} 
                      onValueChange={([value]) => setTravelers(value)}
                      min={1}
                      max={10}
                      step={1}
                      className="flex-1"
                    />
                    <span className="w-8 text-center font-medium">{travelers}</span>
                  </div>
                </div>
                
                <div>
                  <Label>Your Destinations</Label>
                  <div className="space-y-3 mt-2">
                    {destinations.map((dest, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Select value={dest.city} onValueChange={(value) => updateDestination(index, 'city', value)}>
                          <SelectTrigger className="flex-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="seoul">Seoul</SelectItem>
                            <SelectItem value="busan">Busan</SelectItem>
                            <SelectItem value="jeju">Jeju Island</SelectItem>
                            <SelectItem value="gyeongju">Gyeongju</SelectItem>
                            <SelectItem value="incheon">Incheon</SelectItem>
                            <SelectItem value="gangneung">Gangneung</SelectItem>
                            <SelectItem value="jeonju">Jeonju</SelectItem>
                          </SelectContent>
                        </Select>
                        
                        <div className="w-20">
                          <div className="flex items-center gap-1">
                            <Input
                              type="number"
                              min={1}
                              value={dest.days}
                              onChange={(e) => updateDestination(index, 'days', parseInt(e.target.value) || 1)}
                              className="w-12"
                            />
                            <span className="text-sm text-gray-500">days</span>
                          </div>
                        </div>
                        
                        {destinations.length > 1 && (
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => removeDestination(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={addDestination}
                    className="mt-2"
                  >
                    <Plus className="h-4 w-4 mr-1" /> Add Destination
                  </Button>
                  
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Total: {getTotalDays()} days</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button onClick={nextStep} disabled={!travelDates.start || !travelDates.end}>
                  Continue
                </Button>
              </CardFooter>
            </Card>
          )}
          
          {step === 2 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Travel Preferences</CardTitle>
                <CardDescription>Help us understand what you're looking for</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <Label>Budget Level</Label>
                  <RadioGroup value={budget} onValueChange={setBudget} className="grid grid-cols-3 gap-4 mt-2">
                    {(['budget', 'medium', 'luxury'] as const).map(level => (
                      <div key={level} className={`border rounded-lg p-3 text-center ${budget === level ? 'border-blue-500 bg-blue-50' : ''}`}>
                        <RadioGroupItem value={level} id={level} className="sr-only" />
                        <Label htmlFor={level} className="cursor-pointer">
                          <div className="font-semibold mb-1 capitalize">{level}</div>
                          <div className="text-xs text-gray-500">{budgetRanges[level]}</div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div>
                  <Label>Travel Interests</Label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {interestOptions.map(option => (
                      <div key={option.id} className="flex items-start space-x-2">
                        <Checkbox 
                          id={option.id}
                          checked={interests.includes(option.id)}
                          onCheckedChange={() => toggleInterest(option.id)}
                        />
                        <Label htmlFor={option.id} className="cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="custom-requests">Additional Requests</Label>
                  <Textarea
                    id="custom-requests"
                    placeholder="Any special requirements or things you'd like to experience..."
                    className="h-32"
                    value={customRequests}
                    onChange={e => setCustomRequests(e.target.value)}
                  />
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  Back
                </Button>
                <Button onClick={nextStep}>
                  Continue
                </Button>
              </CardFooter>
            </Card>
          )}
          
          {step === 3 && (
            <>
              <Card className="shadow-lg mb-6">
                <CardHeader>
                  <CardTitle>Review Your Request</CardTitle>
                  <CardDescription>Check the details before submitting</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Trip Details</h3>
                      <div className="grid grid-cols-2 gap-4 mt-1">
                        <div>
                          <span className="text-sm text-gray-500">Dates:</span>
                          <div className="font-medium">{travelDates.start} to {travelDates.end}</div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Travelers:</span>
                          <div className="font-medium">{travelers} {travelers === 1 ? 'person' : 'people'}</div>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Destinations</h3>
                      <div className="space-y-2 mt-1">
                        {destinations.map((dest, index) => (
                          <div key={index} className="flex items-center">
                            <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="font-medium capitalize">{dest.city}</span>
                            <span className="text-gray-500 ml-2">({dest.days} {dest.days === 1 ? 'day' : 'days'})</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Preferences</h3>
                      <div className="mt-1">
                        <div className="flex items-center gap-1">
                          <span className="text-sm text-gray-500">Budget:</span>
                          <span className="font-medium capitalize">{budget}</span>
                        </div>
                        
                        <div className="mt-2">
                          <span className="text-sm text-gray-500">Interests:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {interests.length > 0 ? interests.map(interest => (
                              <Badge key={interest} variant="secondary" className="capitalize">
                                {interest.replace('-', ' ')}
                              </Badge>
                            )) : (
                              <span className="text-gray-400">No specific interests selected</span>
                            )}
                          </div>
                        </div>
                        
                        {customRequests && (
                          <div className="mt-2">
                            <span className="text-sm text-gray-500">Additional Requests:</span>
                            <p className="mt-1 text-gray-700">{customRequests}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button>
                    Submit Request
                  </Button>
                </CardFooter>
              </Card>
              
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                <div className="flex gap-3">
                  <div className="rounded-full bg-blue-100 p-2 flex-shrink-0">
                    <HelpCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800 mb-1">What happens next?</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Our travel experts will review your request within 24 hours</li>
                      <li>• You'll receive a custom itinerary proposal by email</li>
                      <li>• Request revisions or approve the itinerary</li>
                      <li>• Once approved, we'll help with bookings and reservations</li>
                      <li>• Service fee will only be charged after you approve the itinerary</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
          
          <SponsoredContent type="banner" className="mt-8" />
        </div>
      </div>
    </div>
  )
}
