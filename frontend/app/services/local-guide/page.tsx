"use client"

import { useState } from "react"
import { ArrowLeft, Star, Calendar, Clock, MapPin, Search, Filter, ChevronDown, Phone, Mail, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SponsoredContent } from "@/components/sponsored-content"
import Link from "next/link"

export default function LocalGuidePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("")
  
  // 실제 앱에서는 API 호출로 가이드 목록을 가져옴
  const guides = [
    {
      id: "guide1",
      name: "Min-ji Kim",
      avatar: "/placeholder.svg",
      languages: ["English", "Korean", "Japanese"],
      specialties: ["Food", "Culture", "History"],
      cities: ["Seoul", "Incheon"],
      rating: 4.9,
      reviewCount: 128,
      hourlyRate: 50,
      availability: ["2024-06-10", "2024-06-11", "2024-06-12"],
      intro: "Professional guide with 7+ years experience. Passionate about Korean food and cultural history. Former museum curator with deep knowledge of Korean traditions.",
      verified: true
    },
    {
      id: "guide2",
      name: "Tae-woo Park",
      avatar: "/placeholder.svg",
      languages: ["English", "Korean", "Chinese"],
      specialties: ["K-pop", "Modern Culture", "Shopping"],
      cities: ["Seoul", "Busan"],
      rating: 4.8,
      reviewCount: 87,
      hourlyRate: 45,
      availability: ["2024-06-09", "2024-06-10", "2024-06-13"],
      intro: "K-pop enthusiast and trend expert. I'll take you to the hottest spots in Seoul and show you the latest Korean trends. Great for shopping and entertainment experiences!",
      verified: true
    },
    {
      id: "guide3",
      name: "Soo-jin Lee",
      avatar: "/placeholder.svg",
      languages: ["English", "Korean", "Spanish"],
      specialties: ["Traditional Arts", "Nature", "Photography"],
      cities: ["Seoul", "Gyeongju", "Gangneung"],
      rating: 5.0,
      reviewCount: 56,
      hourlyRate: 60,
      availability: ["2024-06-11", "2024-06-12", "2024-06-14"],
      intro: "Professional photographer and traditional arts specialist. I'll help you discover hidden gems and take amazing photos of your Korean adventure.",
      verified: true
    }
  ]
  
  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         guide.intro.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCity = !selectedCity || guide.cities.includes(selectedCity)
    const matchesLanguage = !selectedLanguage || guide.languages.includes(selectedLanguage)
    
    return matchesSearch && matchesCity && matchesLanguage
  })

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
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Local Expert Guides</h1>
          <p className="text-gray-600 mb-8">Connect with verified local guides for authentic Korean experiences</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search guides, specialties..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    
                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                      <SelectTrigger className="w-full md:w-40">
                        <SelectValue placeholder="City" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Cities</SelectItem>
                        <SelectItem value="Seoul">Seoul</SelectItem>
                        <SelectItem value="Busan">Busan</SelectItem>
                        <SelectItem value="Jeju">Jeju</SelectItem>
                        <SelectItem value="Gyeongju">Gyeongju</SelectItem>
                        <SelectItem value="Incheon">Incheon</SelectItem>
                        <SelectItem value="Gangneung">Gangneung</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                      <SelectTrigger className="w-full md:w-40">
                        <SelectValue placeholder="Language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Languages</SelectItem>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Chinese">Chinese</SelectItem>
                        <SelectItem value="Japanese">Japanese</SelectItem>
                        <SelectItem value="Spanish">Spanish</SelectItem>
                        <SelectItem value="French">French</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-4">
                {filteredGuides.length > 0 ? (
                  filteredGuides.map(guide => (
                    <Card key={guide.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row">
                          <div className="p-4 sm:p-6 flex-1">
                            <div className="flex items-start gap-4">
                              <Avatar className="h-16 w-16 border">
                                <AvatarImage src={guide.avatar} />
                                <AvatarFallback>{guide.name.substring(0, 2)}</AvatarFallback>
                              </Avatar>
                              
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <h3 className="font-semibold text-lg">{guide.name}</h3>
                                  {guide.verified && (
                                    <Badge variant="secondary" className="bg-green-100 text-green-800">Verified</Badge>
                                  )}
                                </div>
                                
                                <div className="flex items-center gap-1 mt-1">
                                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                  <span className="font-medium">{guide.rating}</span>
                                  <span className="text-gray-500 text-sm">({guide.reviewCount} reviews)</span>
                                </div>
                                
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {guide.specialties.map(specialty => (
                                    <Badge key={specialty} variant="outline">{specialty}</Badge>
                                  ))}
                                </div>
                                
                                <div className="mt-2 text-sm text-gray-600 line-clamp-2">
                                  {guide.intro}
                                </div>
                                
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-sm">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3 text-gray-400" />
                                    <span>{guide.cities.join(", ")}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Languages className="h-3 w-3 text-gray-400" />
                                    <span>{guide.languages.join(", ")}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3 text-gray-400" />
                                    <span>${guide.hourlyRate}/hour</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-4 sm:w-48 flex flex-col justify-center items-center">
                            <Select>
                              <SelectTrigger className="mb-3 w-full">
                                <SelectValue placeholder="Select date" />
                              </SelectTrigger>
                              <SelectContent>
                                {guide.availability.map(date => (
                                  <SelectItem key={date} value={date}>{date}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <Button className="w-full">Book Guide</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No guides found matching your criteria.</p>
                    <Button variant="outline" className="mt-4" onClick={() => {
                      setSearchQuery("")
                      setSelectedCity("")
                      setSelectedLanguage("")
                    }}>
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Why Choose Our Guides?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Star className="h-3 w-3 text-green-600" />
                      </div>
                      <span>All guides are thoroughly vetted for knowledge and professionalism</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Star className="h-3 w-3 text-green-600" />
                      </div>
                      <span>Multilingual options to match your language preferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Star className="h-3 w-3 text-green-600" />
                      </div>
                      <span>Specialty guides for specific interests (K-pop, food, history, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Star className="h-3 w-3 text-green-600" />
                      </div>
                      <span>Secure payment through our platform with satisfaction guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Star className="h-3 w-3 text-green-600" />
                      </div>
                      <span>Access to exclusive local spots and authentic experiences</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Accordion type="single" collapsible className="bg-white rounded-lg border">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="px-4">How does booking work?</AccordionTrigger>
                  <AccordionContent className="px-4 text-sm">
                    Choose your guide, select a date, and request a booking. The guide will respond within 24 hours to confirm. Payment is only processed after confirmation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="px-4">What if I need to cancel?</AccordionTrigger>
                  <AccordionContent className="px-4 text-sm">
                    Free cancellation up to 48 hours before your scheduled time. Cancellations within 48 hours incur a 50% fee.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="px-4">Are transportation costs included?</AccordionTrigger>
                  <AccordionContent className="px-4 text-sm">
                    Guide fees only cover their time and expertise. Transportation, food, and attraction tickets are separate expenses.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <SponsoredContent type="sidebar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
