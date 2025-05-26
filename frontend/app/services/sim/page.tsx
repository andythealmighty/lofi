"use client"

import { useState } from "react"
import { ArrowLeft, Smartphone, Wifi, CheckCircle2, ShieldCheck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function SimCardPage() {
  const [selectedPlan, setSelectedPlan] = useState("")
  const [pickupLocation, setPickupLocation] = useState("")
  const [arrivalDate, setArrivalDate] = useState("")
  
  const plans = [
    {
      id: "basic-7",
      name: "Basic 7-Day",
      features: ["10GB High-speed Data", "100 Min Local Calls", "10 Min International Calls"],
      price: 25,
      recommended: false
    },
    {
      id: "tourist-15",
      name: "Tourist 15-Day",
      features: ["Unlimited Data (5GB/day high-speed)", "200 Min Local Calls", "20 Min International Calls"],
      price: 45,
      recommended: true
    },
    {
      id: "extended-30",
      name: "Extended 30-Day",
      features: ["Unlimited Data (10GB/day high-speed)", "Unlimited Local Calls", "50 Min International Calls"],
      price: 65,
      recommended: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/services" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-lg font-semibold">Back to Services</span>
            </Link>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900">Korea SIM Card</h1>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">5G Ready</Badge>
          </div>
          <p className="text-gray-600 mb-8">Stay connected during your entire Korean journey with our prepaid SIM cards.</p>
          
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Choose Your Plan</CardTitle>
                <CardDescription>Select the plan that best fits your travel duration and needs</CardDescription>
              </CardHeader>
              
              <CardContent>
                <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="space-y-4">
                  {plans.map(plan => (
                    <div key={plan.id} className={`border rounded-lg p-4 transition-all ${selectedPlan === plan.id ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'}`}>
                      <RadioGroupItem value={plan.id} id={plan.id} className="peer sr-only" />
                      <Label htmlFor={plan.id} className="w-full cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold">{plan.name}</h4>
                              {plan.recommended && (
                                <Badge variant="secondary" className="bg-green-100 text-green-800">Recommended</Badge>
                              )}
                            </div>
                            <ul className="mt-2 space-y-1">
                              {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <span className="font-bold text-lg">${plan.price}</span>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Pickup Details</CardTitle>
                <CardDescription>Tell us when and where you'll arrive in Korea</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="arrival-date">Arrival Date</Label>
                  <Input type="date" id="arrival-date" value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} />
                </div>
                
                <div>
                  <Label htmlFor="pickup-location">Pickup Location</Label>
                  <Select value={pickupLocation} onValueChange={setPickupLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select pickup location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="icn-t1">Incheon Airport Terminal 1</SelectItem>
                      <SelectItem value="icn-t2">Incheon Airport Terminal 2</SelectItem>
                      <SelectItem value="gmp">Gimpo Airport</SelectItem>
                      <SelectItem value="seoul-station">Seoul Station</SelectItem>
                      <SelectItem value="myeongdong">Myeongdong Tourist Information</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              
              <CardFooter className="flex-col space-y-4">
                <Button className="w-full" disabled={!selectedPlan || !pickupLocation || !arrivalDate}>
                  Order SIM Card
                </Button>
                
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Wifi className="h-4 w-4" />
                    <span>Fast 5G</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Smartphone className="h-4 w-4" />
                    <span>All phones compatible</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Secure</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-medium mb-2">How It Works</h3>
              <ol className="text-sm text-gray-700 space-y-2 list-decimal pl-4">
                <li>Place your order and pay online</li>
                <li>We'll prepare your SIM card for your arrival date</li>
                <li>Pick up your ready-to-use SIM at your chosen location</li>
                <li>Insert the SIM and you're connected immediately</li>
                <li>Enjoy seamless connectivity throughout Korea</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
