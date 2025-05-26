"use client"

import { useState } from "react"
import { ArrowLeft, Wifi, Calendar, CreditCard, MapPin, Check, AlertCircle, Globe, Signal, BatteryFull, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// frontend/app/services/wifi/page.tsx (계속)
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SponsoredContent } from "@/components/sponsored-content"
import Link from "next/link"

export default function WifiRentalPage() {
  const [selectedPlan, setSelectedPlan] = useState("unlimited")
  const [pickupLocation, setPickupLocation] = useState("")
  const [returnLocation, setReturnLocation] = useState("")
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/services" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-xl font-semibold">Back to Services</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline">My Rentals</Button>
              <Button>Help</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold mb-3">Pocket WiFi Rental</h1>
          <p className="text-white/90 max-w-2xl">
            Stay connected throughout Korea with portable WiFi hotspots. Unlimited data, multiple devices, no roaming charges.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Booking Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Book Your Pocket WiFi</CardTitle>
                  <CardDescription>Select your rental period and pickup details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">1. Select Rental Period</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Pickup Date</Label>
                        <div className="flex items-center mt-1.5">
                          <div className="border rounded p-2 flex items-center gap-2 w-full">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-500">Select pickup date</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label>Return Date</Label>
                        <div className="flex items-center mt-1.5">
                          <div className="border rounded p-2 flex items-center gap-2 w-full">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-500">Select return date</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="font-medium">2. Choose Data Plan</h3>
                    <RadioGroup defaultValue="unlimited" onValueChange={setSelectedPlan} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className={`border rounded-lg p-4 cursor-pointer ${selectedPlan === "basic" ? "border-2 border-blue-500 bg-blue-50" : ""}`}>
                        <RadioGroupItem value="basic" id="basic" className="sr-only" />
                        <Label htmlFor="basic" className="cursor-pointer">
                          <div className="text-center">
                            <h4 className="font-medium">Basic</h4>
                            <p className="text-sm text-gray-500 mb-2">1GB/day</p>
                            <p className="font-bold text-lg">$5/day</p>
                          </div>
                        </Label>
                      </div>
                      
                      <div className={`border rounded-lg p-4 cursor-pointer ${selectedPlan === "standard" ? "border-2 border-blue-500 bg-blue-50" : ""}`}>
                        <RadioGroupItem value="standard" id="standard" className="sr-only" />
                        <Label htmlFor="standard" className="cursor-pointer">
                          <div className="text-center">
                            <h4 className="font-medium">Standard</h4>
                            <p className="text-sm text-gray-500 mb-2">3GB/day</p>
                            <p className="font-bold text-lg">$7/day</p>
                          </div>
                        </Label>
                      </div>
                      
                      <div className={`border rounded-lg p-4 cursor-pointer ${selectedPlan === "unlimited" ? "border-2 border-blue-500 bg-blue-50" : ""}`}>
                        <Badge className="absolute -mt-2 -mr-2">Most Popular</Badge>
                        <RadioGroupItem value="unlimited" id="unlimited" className="sr-only" />
                        <Label htmlFor="unlimited" className="cursor-pointer">
                          <div className="text-center">
                            <h4 className="font-medium">Unlimited</h4>
                            <p className="text-sm text-gray-500 mb-2">Unlimited data</p>
                            <p className="font-bold text-lg">$9/day</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="font-medium">3. Pickup & Return Details</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Label htmlFor="pickup-location">Pickup Location</Label>
                        <Select value={pickupLocation} onValueChange={setPickupLocation}>
                          <SelectTrigger id="pickup-location">
                            <SelectValue placeholder="Select pickup location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="icn-t1">Incheon Airport Terminal 1</SelectItem>
                            <SelectItem value="icn-t2">Incheon Airport Terminal 2</SelectItem>
                            <SelectItem value="gimpo">Gimpo Airport</SelectItem>
                            <SelectItem value="myeongdong">Myeongdong Tourist Center</SelectItem>
                            <SelectItem value="hongdae">Hongdae Pickup Point</SelectItem>
                            <SelectItem value="hotel">Hotel Delivery (Seoul only)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="return-location">Return Location</Label>
                        <Select value={returnLocation} onValueChange={setReturnLocation}>
                          <SelectTrigger id="return-location">
                            <SelectValue placeholder="Select return location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="icn-t1">Incheon Airport Terminal 1</SelectItem>
                            <SelectItem value="icn-t2">Incheon Airport Terminal 2</SelectItem>
                            <SelectItem value="gimpo">Gimpo Airport</SelectItem>
                            <SelectItem value="myeongdong">Myeongdong Tourist Center</SelectItem>
                            <SelectItem value="hongdae">Hongdae Pickup Point</SelectItem>
                            <SelectItem value="hotel-pickup">Hotel Pickup (Seoul only)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    {pickupLocation === "hotel" && (
                      <div>
                        <Label htmlFor="hotel-address">Hotel Address</Label>
                        <Input id="hotel-address" placeholder="Enter your hotel name and address" />
                        <p className="text-xs text-gray-500 mt-1">Delivery fee: $5</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Rental Period:</span>
                      <span>7 days</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm font-medium">Daily Rate:</span>
                      <span>$9/day (Unlimited)</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between items-center font-bold">
                      <span>Total:</span>
                      <span>$63.00</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Book Now</Button>
                </CardFooter>
              </Card>
              
              {/* WiFi Device Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Device Specifications</CardTitle>
                  <CardDescription>Our pocket WiFi devices are compact, reliable and easy to use</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Signal className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Network Coverage</h4>
                          <p className="text-sm text-gray-600">
                            Full 4G/LTE coverage throughout Korea, including rural areas and Jeju Island.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Multiple Connections</h4>
                          <p className="text-sm text-gray-600">
                            Connect up to 5 devices simultaneously (phones, tablets, laptops, etc.).
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Secure Connection</h4>
                          <p className="text-sm text-gray-600">
                            WPA2 encryption for secure browsing and personal data protection.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <BatteryFull className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Battery Life</h4>
                          <p className="text-sm text-gray-600">
                            8-10 hours of continuous use. Includes USB charging cable.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Wifi className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Fast Speeds</h4>
                          <p className="text-sm text-gray-600">
                            Average download speeds of 30-40 Mbps for smooth streaming and browsing.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CreditCard className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Transparent Pricing</h4>
                          <p className="text-sm text-gray-600">
                            No hidden fees or charges. Pay only for your rental period.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Why Rent Pocket WiFi?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <p className="text-sm">
                      <span className="font-medium">Save Money</span> - Much cheaper than international roaming charges
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <p className="text-sm">
                      <span className="font-medium">Stay Connected</span> - Access maps, translation apps, and social media
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <p className="text-sm">
                      <span className="font-medium">Share Connection</span> - Connect multiple devices on one rental
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <p className="text-sm">
                      <span className="font-medium">Convenience</span> - Airport pickup and drop-off available
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <p className="text-sm">
                      <span className="font-medium">Reliability</span> - Consistent connection throughout your trip
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Customer Reviews</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-b pb-3">
                    <div className="flex items-center mb-1">
                      <div className="flex text-yellow-400">
                        {Array(5).fill(0).map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm font-medium ml-2">James T. - USA</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      "Excellent service and fast internet speed. The device was waiting for me at the airport and made my trip so much easier!"
                    </p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <div className="flex items-center mb-1">
                      <div className="flex text-yellow-400">
                        {Array(5).fill(0).map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm font-medium ml-2">Lin M. - Singapore</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      "Battery lasted all day and the unlimited data plan was perfect for our family trip. Highly recommend!"
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-1">
                      <div className="flex text-yellow-400">
                        {Array(4).fill(0).map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        ))}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-300">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium ml-2">Maria L. - Australia</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      "Good connection in Seoul but had some issues in rural areas. Customer service was very helpful though!"
                    </p>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-2">View All Reviews</Button>
                </CardContent>
              </Card>
              
              <SponsoredContent
                title="Bundle & Save"
                description="Add SIM card & airport transfer for 15% off"
                action="View Bundle"
                href="#"
              />
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">How does the pocket WiFi work?</h3>
                <p className="text-sm text-gray-600">
                  The device creates a WiFi hotspot using local 4G/LTE networks. Just turn it on, connect your devices to the WiFi network using the provided password, and you're ready to go!
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What happens if I lose or damage the device?</h3>
                <p className="text-sm text-gray-600">
                  There is a replacement fee of $100 for lost devices. For damaged devices, the fee depends on the extent of damage and ranges from $20-100.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I extend my rental period?</h3>
                <p className="text-sm text-gray-600">
                  Yes, you can extend your rental by contacting our customer service at least 24 hours before your scheduled return date. Extension is subject to availability.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Are there any areas with no coverage?</h3>
                <p className="text-sm text-gray-600">
                  Our devices have excellent coverage throughout Korea, but connection quality may vary in very remote mountainous areas or underground locations.
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-blue-800">Need More Help?</h3>
                  <p className="text-sm text-blue-700">
                    Our customer service team is available 24/7 to assist you with any questions about our WiFi rental service.
                  </p>
                  <Button variant="link" className="text-blue-600 p-0 h-auto mt-1">Contact Support</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


