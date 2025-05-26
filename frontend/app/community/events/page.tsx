"use client"

import { useState } from "react"
import { ArrowLeft, Calendar, MapPin, Clock, Users, Heart, Bookmark, Share2, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

// 이벤트 데이터 모킹
const mockEvents = [
  {
    id: "event1",
    title: "Seoul Food Tour for Foreigners",
    description: "Join us for a culinary adventure through the vibrant streets of Seoul. We'll explore traditional markets, taste authentic Korean dishes, and learn about food culture.",
    date: "2025-06-15",
    time: "14:00 - 17:00",
    location: "Gwangjang Market, Seoul",
    organizer: {
      name: "Jae Kim",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    attendees: 18,
    maxAttendees: 25,
    tags: ["Food", "Cultural", "Walking Tour"],
    image: "/placeholder.svg?height=200&width=400",
    price: "₩25,000",
    type: "paid"
  },
  {
    id: "event2",
    title: "K-Pop Dance Workshop",
    description: "Learn the iconic dance moves from the latest K-Pop hits with professional dancers. No experience needed, just bring your enthusiasm!",
    date: "2025-06-20",
    time: "18:30 - 20:30",
    location: "Dance Studio K, Hongdae, Seoul",
    organizer: {
      name: "Min Park",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    attendees: 12,
    maxAttendees: 20,
    tags: ["K-Pop", "Dance", "Workshop"],
    image: "/placeholder.svg?height=200&width=400",
    price: "₩30,000",
    type: "paid"
  },
  {
    id: "event3",
    title: "Expat Networking Meetup",
    description: "Monthly casual gathering for expats and travelers in Korea. Share experiences, make friends, and exchange travel tips over drinks.",
    date: "2025-06-10",
    time: "19:00 - 22:00",
    location: "The Boot Pub, Itaewon, Seoul",
    organizer: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    attendees: 34,
    maxAttendees: 50,
    tags: ["Social", "Networking", "Expat"],
    image: "/placeholder.svg?height=200&width=400",
    price: "Free",
    type: "free"
  },
  {
    id: "event4",
    title: "Busan Beach Cleanup & BBQ",
    description: "Join our community initiative to keep Haeundae Beach clean while meeting fellow travelers. Followed by a Korean-style BBQ gathering!",
    date: "2025-07-05",
    time: "10:00 - 14:00",
    location: "Haeundae Beach, Busan",
    organizer: {
      name: "Min-ho Lee",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    attendees: 22,
    maxAttendees: 40,
    tags: ["Volunteer", "Beach", "Social"],
    image: "/placeholder.svg?height=200&width=400",
    price: "₩10,000 (for BBQ)",
    type: "paid"
  },
  {
    id: "event5",
    title: "Traditional Korean Tea Ceremony",
    description: "Experience the tranquility of a traditional Korean tea ceremony. Learn about tea culture and history in this hands-on workshop.",
    date: "2025-06-25",
    time: "15:00 - 16:30",
    location: "Bukchon Hanok Village, Seoul",
    organizer: {
      name: "Ji-young Kim",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    attendees: 8,
    maxAttendees: 12,
    tags: ["Cultural", "Tea", "Workshop"],
    image: "/placeholder.svg?height=200&width=400",
    price: "₩35,000",
    type: "paid"
  },
  {
    id: "event6",
    title: "Language Exchange Night",
    description: "Practice Korean with locals while helping them with English. All language levels welcome in this fun, casual setting.",
    date: "2025-06-18",
    time: "19:00 - 21:00",
    location: "Seoul Global Cultural Center, Myeongdong",
    organizer: {
      name: "Hyun-woo Park",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    attendees: 27,
    maxAttendees: 30,
    tags: ["Language", "Cultural", "Social"],
    image: "/placeholder.svg?height=200&width=400",
    price: "Free",
    type: "free"
  }
];

export default function EventsPage() {
  const [events, setEvents] = useState(mockEvents);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("upcoming");
  const [savedEvents, setSavedEvents] = useState<Record<string, boolean>>({});
  
  // 이벤트 저장 토글 함수
  const toggleSaveEvent = (eventId: string) => {
    setSavedEvents(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };
  
  // 이벤트 필터링
  const filteredEvents = events.filter(event => {
    // 검색어 필터
    const matchesSearch = searchQuery === "" || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // 타입 필터
    const matchesType = typeFilter === "all" || event.type === typeFilter;
    
    // 날짜 필터 (실제로는 더 복잡한 날짜 비교 로직이 필요하지만 예시로 간단하게 구현)
    const isUpcoming = new Date(event.date) >= new Date();
    const matchesDate = dateFilter === "all" || 
                        (dateFilter === "upcoming" && isUpcoming) ||
                        (dateFilter === "past" && !isUpcoming);
    
    return matchesSearch && matchesType && matchesDate;
  });
  
  // 참가 신청 처리 함수
  const handleJoinEvent = (eventId: string) => {
    setEvents(prev => prev.map(event => {
      if (event.id === eventId && event.attendees < event.maxAttendees) {
        return { ...event, attendees: event.attendees + 1 };
      }
      return event;
    }));
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 네비게이션 */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/community" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-xl font-bold text-gray-900">Community Events</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/community/events/create">
                <Button>Create Event</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Events</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover meetups, workshops, and activities to connect with fellow travelers and locals in Korea
          </p>
        </div>
        
        {/* 필터 및 검색 */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search events..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Event type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="free">Free Events</SelectItem>
                <SelectItem value="paid">Paid Events</SelectItem>
              </SelectContent>
            </Select>
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Dates</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="past">Past Events</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* 이벤트 탭 */}
        <Tabs defaultValue="grid" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredEvents.length} Events Found
            </h2>
            <TabsList>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>
          </div>
          
          {/* 그리드 뷰 */}
          <TabsContent value="grid">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden transition-all hover:shadow-md">
                  <div className="relative h-48 bg-gray-100">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                        onClick={() => toggleSaveEvent(event.id)}
                      >
                        <Bookmark
                          className={`h-4 w-4 ${
                            savedEvents[event.id] ? "fill-primary text-primary" : "text-gray-600"
                          }`}
                        />
                      </Button>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <Badge variant={event.type === "free" ? "secondary" : "default"}>
                        {event.price}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pt-4 pb-2">
                    <Link href={`/community/events/${event.id}`}>
                      <CardTitle className="text-lg hover:text-primary transition-colors">
                        {event.title}
                      </CardTitle>
                    </Link>
                  </CardHeader>
                  <CardContent className="pb-2 space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-gray-400" />
                      {event.attendees}/{event.maxAttendees} Attendees
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {event.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button
                      className="w-full"
                      variant={event.attendees >= event.maxAttendees ? "outline" : "default"}
                      disabled={event.attendees >= event.maxAttendees}
                      onClick={() => handleJoinEvent(event.id)}
                    >
                      {event.attendees >= event.maxAttendees ? "Fully Booked" : "Join Event"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* 리스트 뷰 */}
          <TabsContent value="list">
            <div className="space-y-4">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-64 h-40 md:h-auto bg-gray-100 relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                          onClick={() => toggleSaveEvent(event.id)}
                        >
                          <Bookmark
                            className={`h-4 w-4 ${
                              savedEvents[event.id] ? "fill-primary text-primary" : "text-gray-600"
                            }`}
                          />
                        </Button>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <Badge variant={event.type === "free" ? "secondary" : "default"}>
                          {event.price}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="mb-2">
                        <Link href={`/community/events/${event.id}`}>
                          <h3 className="text-xl font-bold hover:text-primary transition-colors">
                            {event.title}
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                          {event.description}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2 text-gray-400" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2 text-gray-400" />
                          {event.attendees}/{event.maxAttendees} Attendees
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {event.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          variant={event.attendees >= event.maxAttendees ? "outline" : "default"}
                          disabled={event.attendees >= event.maxAttendees}
                          onClick={() => handleJoinEvent(event.id)}
                        >
                          {event.attendees >= event.maxAttendees ? "Fully Booked" : "Join Event"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
