"use client"

import { useState } from "react"
import { ArrowLeft, Ticket, Bus, Train, Plane, Calendar, Clock, CreditCard, Users, Search, MapPin, ExternalLink, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { DatePicker } from "@/components/ui/date-picker"
import { Separator } from "@/components/ui/separator"
import { SponsoredContent } from "@/components/sponsored-content"
import Link from "next/link"

export default function TransportPage() {
  const [transportType, setTransportType] = useState("ktx")
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    date: null,
    passengers: 1
  })
  
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
              <Button variant="outline">My Bookings</Button>
              <Button>Help</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold mb-3">Korea Transport Tickets</h1>
          <p className="text-white/90 max-w-2xl">
            Book train, bus, subway tickets and airport transfers for seamless travel throughout Korea
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Transport Type Tabs */}
          <Tabs defaultValue="ktx" onValueChange={setTransportType} className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="ktx" className="flex items-center gap-2">
                <Train className="h-4 w-4" />
                <span>KTX</span>
              </TabsTrigger>
              <TabsTrigger value="bus" className="flex items-center gap-2">
                <Bus className="h-4 w-4" />
                <span>Bus</span>
              </TabsTrigger>
              <TabsTrigger value="airport" className="flex items-center gap-2">
                <Plane className="h-4 w-4" />
                <span>Airport</span>
              </TabsTrigger>
              <TabsTrigger value="subway" className="flex items-center gap-2">
                <Ticket className="h-4 w-4" />
                <span>Subway</span>
              </TabsTrigger>
            </TabsList>
            
            {/* KTX Content */}
            <TabsContent value="ktx">
              <Card>
                <CardHeader>
                  <CardTitle>KTX High-Speed Rail</CardTitle>
                  <CardDescription>Book tickets for Korea's bullet train service connecting major cities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="from-station">Departure Station</Label>
                      <Select>
                        <SelectTrigger id="from-station">
                          <SelectValue placeholder="Select departure station" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="seoul">Seoul Station</SelectItem>
                          <SelectItem value="yongsan">Yongsan Station</SelectItem>
                          <SelectItem value="daejeon">Daejeon Station</SelectItem>
                          <SelectItem value="daegu">Daegu Station</SelectItem>
                          <SelectItem value="busan">Busan Station</SelectItem>
                          <SelectItem value="gwangju">Gwangju Station</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="to-station">Arrival Station</Label>
                      <Select>
                        <SelectTrigger id="to-station">
                          <SelectValue placeholder="Select arrival station" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="seoul">Seoul Station</SelectItem>
                          <SelectItem value="yongsan">Yongsan Station</SelectItem>
                          <SelectItem value="daejeon">Daejeon Station</SelectItem>
                          <SelectItem value="daegu">Daegu Station</SelectItem>
                          <SelectItem value="busan">Busan Station</SelectItem>
                          <SelectItem value="gwangju">Gwangju Station</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Departure Date</Label>
                      <div className="flex items-center mt-1.5">
                        <div className="border rounded p-2 flex items-center gap-2 w-full">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-500">Select date</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label>Passengers</Label>
                      <div className="flex items-center gap-2 mt-1.5">
                        <Button variant="outline" size="icon" type="button">-</Button>
                        <Input type="number" min="1" max="10" value="1" className="text-center" />
                        <Button variant="outline" size="icon" type="button">+</Button>
                      </div>
                    </div>
                  </div>
                  
                  <RadioGroup defaultValue="standard" className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="standard" id="standard" />
                      <Label htmlFor="standard">Standard Class</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="first" id="first" />
                      <Label htmlFor="first">First Class (+30%)</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Search Trains</Button>
                </CardFooter>
              </Card>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Major KTX Routes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Seoul → Busan</span>
                      <span className="text-gray-500">2h 15m</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>Seoul → Daejeon</span>
                      <span className="text-gray-500">50m</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>Seoul → Gwangju</span>
                      <span className="text-gray-500">1h 30m</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>Seoul → Mokpo</span>
                      <span className="text-gray-500">2h 30m</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">KTX Travel Tips</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-blue-500 mt-0.5" />
                      <span>Arrive 20 minutes before departure</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CreditCard className="h-4 w-4 text-blue-500 mt-0.5" />
                      <span>Reserved seats are recommended during peak times</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Ticket className="h-4 w-4 text-blue-500 mt-0.5" />
                      <span>Show e-ticket or pickup at station kiosks</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5" />
                      <span>Tickets can be changed up to 3 hours before departure</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">KTX Amenities</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      <span>Free WiFi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      <span>Power outlets at seats</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      <span>Onboard cafe</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      <span>Luggage storage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      <span>Wheelchair accessible</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Bus Content */}
            <TabsContent value="bus">
              <Card>
                <CardHeader>
                  <CardTitle>Express & Intercity Buses</CardTitle>
                  <CardDescription>Book tickets for express and intercity buses connecting all regions of Korea</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="from-terminal">Departure Terminal</Label>
                      <Select>
                        <SelectTrigger id="from-terminal">
                          <SelectValue placeholder="Select departure terminal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="seoul">Seoul Express Bus Terminal</SelectItem>
                          <SelectItem value="east-seoul">East Seoul Terminal</SelectItem>
                          <SelectItem value="sangbong">Sangbong Terminal</SelectItem>
                          <SelectItem value="daejeon">Daejeon Terminal</SelectItem>
                          <SelectItem value="busan">Busan Terminal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="to-terminal">Arrival Terminal</Label>
                      <Select>
                        <SelectTrigger id="to-terminal">
                          <SelectValue placeholder="Select arrival terminal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="busan">Busan Terminal</SelectItem>
                          <SelectItem value="daegu">Daegu Terminal</SelectItem>
                          <SelectItem value="gwangju">Gwangju Terminal</SelectItem>
                          <SelectItem value="gangneung">Gangneung Terminal</SelectItem>
                          <SelectItem value="sokcho">Sokcho Terminal</SelectItem>
                          <SelectItem value="jeonju">Jeonju Terminal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Departure Date</Label>
                      <div className="flex items-center mt-1.5">
                        <div className="border rounded p-2 flex items-center gap-2 w-full">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-500">Select date</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label>Passengers</Label>
                      <div className="flex items-center gap-2 mt-1.5">
                        <Button variant="outline" size="icon" type="button">-</Button>
                        <Input type="number" min="1" max="10" value="1" className="text-center" />
                        <Button variant="outline" size="icon" type="button">+</Button>
                      </div>
                    </div>
                  </div>
                  
                  <RadioGroup defaultValue="express" className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="express" id="express" />
                      <Label htmlFor="express">Express Bus (Faster, fewer stops)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="intercity" id="intercity" />
                      <Label htmlFor="intercity">Intercity Bus (More stops, lower price)</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Search Buses</Button>
                </CardFooter>
              </Card>
              
              <div className="mt-6">
                <SponsoredContent
                  title="Premium Express Bus"
                  description="Travel in luxury with wider seats, more legroom, and onboard entertainment"
                  action="Learn More"
                  href="#"
                />
              </div>
            </TabsContent>
            
            {/* Airport Content */}
            <TabsContent value="airport">
              <Card>
                <CardHeader>
                  <CardTitle>Airport Transfers & Shuttles</CardTitle>
                  <CardDescription>Book private transfers, shared shuttles, and airport limousine services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup defaultValue="arrival" className="mb-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="arrival" id="arrival" />
                      <Label htmlFor="arrival">Airport to Hotel</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="departure" id="departure" />
                      <Label htmlFor="departure">Hotel to Airport</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="roundtrip" id="roundtrip" />
                      <Label htmlFor="roundtrip">Round Trip</Label>
                    </div>
                  </RadioGroup>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="airport">Airport</Label>
                      <Select>
                        <SelectTrigger id="airport">
                          <SelectValue placeholder="Select airport" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="icn">Incheon International Airport (ICN)</SelectItem>
                          <SelectItem value="gmp">Gimpo International Airport (GMP)</SelectItem>
                          <SelectItem value="pus">Busan Gimhae Airport (PUS)</SelectItem>
                          <SelectItem value="cju">Jeju International Airport (CJU)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="destination">Destination</Label>
                      <Select>
                        <SelectTrigger id="destination">
                          <SelectValue placeholder="Select destination area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="myeongdong">Myeongdong</SelectItem>
                          <SelectItem value="hongdae">Hongdae</SelectItem>
                          <SelectItem value="gangnam">Gangnam</SelectItem>
                          <SelectItem value="dongdaemun">Dongdaemun</SelectItem>
                          <SelectItem value="itaewon">Itaewon</SelectItem>
                          <SelectItem value="jongno">Jongno</SelectItem>
                          <SelectItem value="custom">Enter custom address</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Arrival Date & Time</Label>
                      <div className="flex items-center mt-1.5">
                        <div className="border rounded p-2 flex items-center gap-2 w-full">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-500">Select date & time</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label>Passengers & Luggage</Label>
                      <div className="flex items-center gap-2 mt-1.5">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Passengers" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Passenger</SelectItem>
                            <SelectItem value="2">2 Passengers</SelectItem>
                            <SelectItem value="3">3 Passengers</SelectItem>
                            <SelectItem value="4">4 Passengers</SelectItem>
                            <SelectItem value="5+">5+ Passengers</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Luggage" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Bag</SelectItem>
                            <SelectItem value="2">2 Bags</SelectItem>
                            <SelectItem value="3">3 Bags</SelectItem>
                            <SelectItem value="4+">4+ Bags</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <Card className="border-2 border-blue-100 hover:border-blue-200 cursor-pointer">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <Badge>Most Popular</Badge>
                          <h3 className="text-lg font-bold mt-2">Shared Shuttle</h3>
                          <p className="text-sm text-gray-500 mb-2">Economical option</p>
                          <p className="font-bold text-lg">$15</p>
                          <p className="text-xs text-gray-500">per person</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-2 border-purple-100 hover:border-purple-200 cursor-pointer">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <Badge variant="outline">Best Value</Badge>
                          <h3 className="text-lg font-bold mt-2">Private Sedan</h3>
                          <p className="text-sm text-gray-500 mb-2">Up to 3 passengers</p>
                          <p className="font-bold text-lg">$60</p>
                          <p className="text-xs text-gray-500">per vehicle</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-2 border-amber-100 hover:border-amber-200 cursor-pointer">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <Badge variant="outline">Premium</Badge>
                          <h3 className="text-lg font-bold mt-2">Luxury Van</h3>
                          <p className="text-sm text-gray-500 mb-2">Up to 7 passengers</p>
                          <p className="font-bold text-lg">$90</p>
                          <p className="text-xs text-gray-500">per vehicle</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Search Transfers</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Subway Content */}
            <TabsContent value="subway">
              <Card>
                <CardHeader>
                  <CardTitle>Subway & Public Transport Passes</CardTitle>
                  <CardDescription>Purchase T-money cards and transportation passes for subway, bus, and other public transit options</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">T-money Card</h3>
                            <p className="text-sm text-gray-600">Reloadable transportation card</p>
                          </div>
                          <Badge>Essential</Badge>
                        </div>
                        <div className="space-y-2 mb-3">
                          <div className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                            <span className="text-sm">Valid for subway, bus, and taxi in most cities</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                            <span className="text-sm">Discounted transfers between transportation</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                            <span className="text-sm">Can be used at convenience stores</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold">₩4,000</span>
                            <span className="text-xs text-gray-500 ml-1">(card only, no balance)</span>
                          </div>
                          <Button size="sm">Purchase</Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">Discover Seoul Pass</h3>
                            <p className="text-sm text-gray-600">Sightseeing + transportation</p>
                          </div>
                          <Badge variant="outline">Best Value</Badge>
                        </div>
                        <div className="space-y-2 mb-3">
                          <div className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                            <span className="text-sm">Unlimited public transportation</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                            <span className="text-sm">Free entry to major attractions</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                            <span className="text-sm">Discounts at restaurants and shops</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">24hr - ₩35,000</Button>
                          <Button variant="outline" size="sm" className="flex-1">48hr - ₩55,000</Button>
                          <Button variant="outline" size="sm" className="flex-1">72hr - ₩70,000</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">Korea Tour Card</h3>
                            <p className="text-sm text-gray-600">For international tourists</p>
                          </div>
                          <Badge variant="outline">Tourist Favorite</Badge>
                        </div>
                        <div className="space-y-2 mb-3">
                          <div className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                            <span className="text-sm">T-money functions + tourist discounts</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                            <span className="text-sm">Discounts at tourist attractions</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                            <span className="text-sm">Airport pickup available</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold">₩8,000</span>
                            <span className="text-xs text-gray-500 ml-1">(₩4,000 pre-loaded)</span>
                          </div>
                          <Button size="sm">Purchase</Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">Airport Railroad Pass</h3>
                            <p className="text-sm text-gray-600">AREX train to/from Incheon Airport</p>
                          </div>
                        </div>
                        <div className="space-y-2 mb-3">
                          <div className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                            <span className="text-sm">Connects Incheon Airport to Seoul Station</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                            <span className="text-sm">Express train (43 min) or All-stop train (66 min)</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">One-way - ₩9,000</Button>
                          <Button variant="outline" size="sm" className="flex-1">Round-trip - ₩16,000</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-blue-800">Pickup Information</h3>
                        <p className="text-sm text-blue-700">
                          All transportation cards and passes can be picked up at major airports, tourist information centers, and select convenience stores. Show your booking confirmation at the pickup location.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View All Transportation Passes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* FAQ Section */}
          <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">How far in advance should I book transportation?</h3>
                <p className="text-sm text-gray-600">
                  For KTX trains and express buses, we recommend booking 1-3 days in advance during regular periods, and 7-14 days ahead during peak travel seasons (holidays, summer, etc.).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I cancel or change my ticket?</h3>
                <p className="text-sm text-gray-600">
                  Most tickets can be changed or cancelled with varying fees depending on how close to departure time. KTX tickets typically allow changes up to 3 hours before departure with minimal fees.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How do I use e-tickets?</h3>
                <p className="text-sm text-gray-600">
                  E-tickets can be shown on your mobile device or printed. For KTX and buses, you can also pick up physical tickets at station kiosks using your booking reference.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What's the difference between express and intercity buses?</h3>
                <p className="text-sm text-gray-600">
                  Express buses travel on highways with minimal stops, offering faster travel times. Intercity buses make more stops at smaller towns along the route and are usually less expensive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
