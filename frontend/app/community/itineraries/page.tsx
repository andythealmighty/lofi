"use client"

import { useState } from "react"
import { ArrowLeft, Calendar, MapPin, Clock, ThumbsUp, MessageSquare, Share2, Search, Filter, Star, Route, User, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { mockItinerary } from "@/lib/mock-data"
import Link from "next/link"

export default function ItinerariesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [duration, setDuration] = useState("all")
  const [destination, setDestination] = useState("all")
  
  // Mock 여행 일정 데이터
  const itineraries = [
    {
      id: "itin1",
      title: "Seoul & Busan: 10-Day Adventure",
      author: {
        name: "Emily Chen",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      duration: "10 days",
      destinations: ["Seoul", "Busan"],
      description: "A perfect blend of city exploration, cultural immersion, and coastal beauty. This itinerary covers the best of Korea's two largest cities.",
      highlights: ["Gyeongbokgung Palace", "Haeundae Beach", "Bukchon Hanok Village"],
      likes: 142,
      comments: 24,
      image: "from-blue-500 to-purple-500"
    },
    {
      id: "itin2",
      title: "K-pop Fan's Dream: 7-Day Seoul Tour",
      author: {
        name: "David Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      duration: "7 days",
      destinations: ["Seoul"],
      description: "Dedicated to K-pop lovers! Visit entertainment companies, K-pop themed cafes, attend concerts, and shop at official merchandise stores.",
      highlights: ["HYBE Insight", "K-Star Road", "SMTown Coex Artium"],
      likes: 219,
      comments: 42,
      image: "from-pink-500 to-purple-500"
    },
    {
      id: "itin3",
      title: "Korea Food Journey: 14-Day Culinary Adventure",
      author: {
        name: "Soo-jin Park",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      duration: "14 days",
      destinations: ["Seoul", "Jeonju", "Busan", "Jeju"],
      description: "A mouth-watering expedition through Korea's diverse food scenes, from street food to fine dining and everything in between.",
      highlights: ["Gwangjang Market", "Jeonju Bibimbap", "Jeju Seafood"],
      likes: 176,
      comments: 38,
      image: "from-yellow-500 to-red-500"
    },
  ];
  
  // 필터링된 여행 일정
  const filteredItineraries = itineraries.filter(itin => {
    const matchesSearch = searchQuery === "" || 
      itin.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      itin.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDuration = duration === "all" || 
      (duration === "short" && parseInt(itin.duration) <= 7) ||
      (duration === "medium" && parseInt(itin.duration) > 7 && parseInt(itin.duration) <= 14) ||
      (duration === "long" && parseInt(itin.duration) > 14);
    
    const matchesDestination = destination === "all" || 
      itin.destinations.includes(destination);
    
    return matchesSearch && matchesDuration && matchesDestination;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 네비게이션 */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/community" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-lg font-semibold">Back to Community</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/planning">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Itinerary
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Travel Itineraries</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover and share detailed travel plans for your Korean adventure
            </p>
          </div>

          {/* 검색 및 필터 */}
          <Card className="mb-8 overflow-hidden border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search itineraries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Duration</SelectItem>
                      <SelectItem value="short">Short (1-7 days)</SelectItem>
                      <SelectItem value="medium">Medium (8-14 days)</SelectItem>
                      <SelectItem value="long">Long (15+ days)</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={destination} onValueChange={setDestination}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Destinations</SelectItem>
                      <SelectItem value="Seoul">Seoul</SelectItem>
                      <SelectItem value="Busan">Busan</SelectItem>
                      <SelectItem value="Jeju">Jeju Island</SelectItem>
                      <SelectItem value="Gyeongju">Gyeongju</SelectItem>
                      <SelectItem value="Jeonju">Jeonju</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 탭 */}
          <Tabs defaultValue="featured" className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="popular">Most Popular</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="saved">My Saved</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* 여행 일정 목록 */}
          <div className="space-y-6">
            {filteredItineraries.length > 0 ? (
              filteredItineraries.map((itinerary) => (
                <Link href={`/community/itineraries/${itinerary.id}`} key={itinerary.id}>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex flex-col md:flex-row">
                      <div className={`md:w-1/3 h-48 md:h-auto bg-gradient-to-r ${itinerary.image}`}></div>
                      <div className="p-6 flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="flex gap-2 mb-2">
                              {itinerary.destinations.map((dest, i) => (
                                <Badge key={i} variant="outline">{dest}</Badge>
                              ))}
                              <Badge variant="secondary">{itinerary.duration}</Badge>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">{itinerary.title}</h2>
                          </div>
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={itinerary.author.avatar} />
                              <AvatarFallback>{itinerary.author.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-gray-500 ml-2">{itinerary.author.name}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{itinerary.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {itinerary.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center gap-1 text-sm text-gray-500">
                              <Star className="h-3 w-3 text-amber-500" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-gray-500">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{itinerary.likes}</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-500">
                            <MessageSquare className="h-4 w-4" />
                            <span>{itinerary.comments}</span>
                          </div>
                          <Button variant="outline" size="sm" className="ml-auto">
                            View Plan
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border">
                <Route className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">No itineraries found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
                <Button variant="outline" onClick={() => {
                  setSearchQuery("");
                  setDuration("all");
                  setDestination("all");
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
          
          {/* 추천 여행 제목 */}
          <div className="mt-12 p-6 bg-white rounded-lg border">
            <h2 className="text-xl font-bold mb-4">Popular Itinerary Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <h3 className="font-medium">First-time Visitor</h3>
                </div>
                <p className="text-sm text-gray-600">7-day itinerary covering Seoul's major attractions</p>
              </div>
              <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-green-500" />
                  <h3 className="font-medium">Nature Lover</h3>
                </div>
                <p className="text-sm text-gray-600">10-day journey through Korea's national parks</p>
              </div>
              <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-purple-500" />
                  <h3 className="font-medium">Food Explorer</h3>
                </div>
                <p className="text-sm text-gray-600">14-day culinary adventure across multiple cities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
