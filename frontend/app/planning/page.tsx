import { ArrowLeft, MapPin, Calendar, Users, Clock, Star, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function PlanningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold text-gray-900">KoreaTravelHub</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/auth/signin">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Plan Your Korean Adventure</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let us help you create the perfect itinerary for your trip to South Korea
          </p>
        </div>

        <Tabs defaultValue="quick-plan" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="quick-plan">Quick Planner</TabsTrigger>
            <TabsTrigger value="detailed-plan">Detailed Planner</TabsTrigger>
            <TabsTrigger value="templates">Trip Templates</TabsTrigger>
          </TabsList>

          {/* Quick Planner */}
          <TabsContent value="quick-plan" className="space-y-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Quick Trip Planner</CardTitle>
                <CardDescription>
                  Answer a few questions and we'll create a personalized itinerary for you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="duration">Trip Duration</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="How long will you stay?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3-5">3-5 days</SelectItem>
                          <SelectItem value="6-10">6-10 days</SelectItem>
                          <SelectItem value="11-14">11-14 days</SelectItem>
                          <SelectItem value="15+">15+ days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range (USD)</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget">Budget ($50-100/day)</SelectItem>
                          <SelectItem value="mid">Mid-range ($100-200/day)</SelectItem>
                          <SelectItem value="luxury">Luxury ($200+/day)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="travelers">Number of Travelers</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="How many people?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="solo">Solo traveler</SelectItem>
                          <SelectItem value="couple">Couple (2 people)</SelectItem>
                          <SelectItem value="small">Small group (3-5)</SelectItem>
                          <SelectItem value="large">Large group (6+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="season">Travel Season</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="When are you visiting?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="spring">Spring (Mar-May)</SelectItem>
                          <SelectItem value="summer">Summer (Jun-Aug)</SelectItem>
                          <SelectItem value="fall">Fall (Sep-Nov)</SelectItem>
                          <SelectItem value="winter">Winter (Dec-Feb)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="cities">Cities to Visit</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Which cities interest you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="seoul-only">Seoul only</SelectItem>
                          <SelectItem value="seoul-busan">Seoul + Busan</SelectItem>
                          <SelectItem value="seoul-jeju">Seoul + Jeju</SelectItem>
                          <SelectItem value="multi-city">Multiple cities</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="accommodation">Accommodation Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Where would you like to stay?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hostel">Hostels</SelectItem>
                          <SelectItem value="hotel">Hotels</SelectItem>
                          <SelectItem value="guesthouse">Guesthouses</SelectItem>
                          <SelectItem value="luxury">Luxury hotels</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">What interests you most? (Select all that apply)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                    {[
                      "K-pop & Entertainment",
                      "Traditional Culture",
                      "Food & Dining",
                      "Shopping",
                      "Nature & Hiking",
                      "Historical Sites",
                      "Nightlife",
                      "Art & Museums",
                      "Photography",
                      "Wellness & Spas",
                      "Technology",
                      "Local Experiences",
                    ].map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox id={interest} />
                        <Label htmlFor={interest} className="text-sm">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <Button size="lg" className="px-12">
                    Create My Itinerary
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Detailed Planner */}
          <TabsContent value="detailed-plan" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Trip Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="arrival">Arrival Date</Label>
                        <Input type="date" id="arrival" />
                      </div>
                      <div>
                        <Label htmlFor="departure">Departure Date</Label>
                        <Input type="date" id="departure" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="airport">Arrival Airport</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select airport" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="icn">Incheon International (ICN)</SelectItem>
                          <SelectItem value="gmp">Gimpo Airport (GMP)</SelectItem>
                          <SelectItem value="pus">Busan Airport (PUS)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Day-by-Day Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((day) => (
                        <div key={day} className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Day {day}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <Label className="text-sm">Morning</Label>
                              <Input placeholder="Add activity" className="mt-1" />
                            </div>
                            <div>
                              <Label className="text-sm">Afternoon</Label>
                              <Input placeholder="Add activity" className="mt-1" />
                            </div>
                            <div>
                              <Label className="text-sm">Evening</Label>
                              <Input placeholder="Add activity" className="mt-1" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Add Another Day
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Add</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <MapPin className="h-4 w-4 mr-2" />
                        Popular Attractions
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="h-4 w-4 mr-2" />
                        Experiences
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="h-4 w-4 mr-2" />
                        Events & Festivals
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Budget Tracker</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Accommodation</span>
                        <span className="text-sm font-medium">$0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Transportation</span>
                        <span className="text-sm font-medium">$0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Food</span>
                        <span className="text-sm font-medium">$0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Activities</span>
                        <span className="text-sm font-medium">$0</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-semibold">
                          <span>Total</span>
                          <span>$0</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Trip Templates */}
          <TabsContent value="templates" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-48 bg-gradient-to-r from-pink-500 to-purple-500 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">K-Pop Lover's Seoul</CardTitle>
                    <Badge>5 Days</Badge>
                  </div>
                  <CardDescription>Perfect for K-pop fans visiting Seoul</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>Seoul</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>5 days, 4 nights</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>4.9 (234 reviews)</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Use This Template
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-48 bg-gradient-to-r from-green-500 to-blue-500 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Cultural Heritage Tour</CardTitle>
                    <Badge>7 Days</Badge>
                  </div>
                  <CardDescription>Explore Korea's rich history and traditions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>Seoul, Gyeongju, Busan</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>7 days, 6 nights</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>4.8 (189 reviews)</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Use This Template
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-48 bg-gradient-to-r from-orange-500 to-red-500 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Foodie's Paradise</CardTitle>
                    <Badge>4 Days</Badge>
                  </div>
                  <CardDescription>A culinary journey through Korean cuisine</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>Seoul</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>4 days, 3 nights</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>4.9 (156 reviews)</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Use This Template
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-48 bg-gradient-to-r from-teal-500 to-green-500 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Nature & Adventure</CardTitle>
                    <Badge>10 Days</Badge>
                  </div>
                  <CardDescription>Hiking, beaches, and natural wonders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>Jeju, Seoraksan, Busan</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>10 days, 9 nights</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>4.7 (98 reviews)</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Use This Template
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Budget Backpacker</CardTitle>
                    <Badge>14 Days</Badge>
                  </div>
                  <CardDescription>Maximum experience, minimum budget</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>Multiple cities</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>14 days, 13 nights</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>4.6 (267 reviews)</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Use This Template
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Luxury Experience</CardTitle>
                    <Badge>6 Days</Badge>
                  </div>
                  <CardDescription>Premium accommodations and experiences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>Seoul, Jeju</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>6 days, 5 nights</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>4.9 (87 reviews)</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Use This Template
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need Personal Assistance?</h3>
              <p className="text-red-100 mb-6">
                Our travel experts can help you create a custom itinerary tailored to your preferences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Chat with Expert
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white hover:text-red-600"
                >
                  Schedule Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
