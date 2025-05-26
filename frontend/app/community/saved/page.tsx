"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Search, Filter, Bookmark, Heart, MessageCircle, ThumbsUp, Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { mockCommunityPosts } from "@/lib/mock-data"

// 이벤트 데이터 모킹 (실제 구현에서는 이 부분을 mock-data.ts에 추가)
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
  }
];

export default function SavedItemsPage() {
  const [savedType, setSavedType] = useState("posts");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  
  // 모의 저장된 아이템
  const [savedPosts, setSavedPosts] = useState(() => {
    // 실제로는 로컬 스토리지나 API에서 불러올 것임
    return mockCommunityPosts.slice(0, 5).map(post => ({
      ...post,
      savedAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString()
    }));
  });
  
  const [savedEvents, setSavedEvents] = useState(() => {
    return mockEvents.map(event => ({
      ...event,
      savedAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString()
    }));
  });
  
  // 저장 취소 함수
  const removeFromSaved = (itemId: string, type: "posts" | "events") => {
    if (type === "posts") {
      setSavedPosts(savedPosts.filter(post => post.id !== itemId));
    } else {
      setSavedEvents(savedEvents.filter(event => event.id !== itemId));
    }
  };
  
  // 검색 및 정렬
  const filteredPosts = savedPosts.filter(post => 
    searchQuery === "" || 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredEvents = savedEvents.filter(event => 
    searchQuery === "" || 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // 정렬
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.savedAt).getTime() - new Date(b.savedAt).getTime();
    } else if (sortBy === "popular") {
      return b.likes - a.likes;
    }
    return 0;
  });
  
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.savedAt).getTime() - new Date(b.savedAt).getTime();
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 네비게이션 */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/community" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-xl font-bold text-gray-900">Saved Items</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">저장한 항목</h1>
          <p className="text-gray-600">
            나중에 다시 볼 수 있도록 저장한 커뮤니티 게시물과 이벤트
          </p>
        </div>
        
        {/* 검색 및 필터 */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search saved items..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={savedType} onValueChange={setSavedType}>
              <SelectTrigger>
                <SelectValue placeholder="Item type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="posts">커뮤니티 게시물</SelectItem>
                <SelectItem value="events">이벤트</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">최근 저장순</SelectItem>
                <SelectItem value="oldest">오래된 저장순</SelectItem>
                {savedType === "posts" ? (
                  <SelectItem value="popular">인기순</SelectItem>
                ) : (
                  <SelectItem value="date">이벤트 날짜순</SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* 저장된 아이템 */}
        <Tabs value={savedType} onValueChange={setSavedType}>
          <TabsList className="w-full mb-6">
            <TabsTrigger value="posts" className="flex-1">
              커뮤니티 게시물 ({filteredPosts.length})
            </TabsTrigger>
            <TabsTrigger value="events" className="flex-1">
              이벤트 ({filteredEvents.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts">
            {sortedPosts.length === 0 ? (
              <div className="text-center py-12">
                <Bookmark className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">저장된 게시물이 없습니다</h3>
                <p className="text-gray-500 mb-4">관심있는 게시물을 북마크하여 나중에 다시 볼 수 있습니다</p>
                <Button asChild>
                  <Link href="/community">커뮤니티 둘러보기</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {sortedPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex-1 p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={post.author.avatar} alt={post.author.name} />
                            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{post.author.name}</p>
                            <p className="text-xs text-gray-500">{post.timestamp}</p>
                          </div>
                          <Badge variant="outline" className="ml-auto">
                            {post.type === "question"
                              ? "질문"
                              : post.type === "tip"
                              ? "여행 팁"
                              : "경험담"}
                          </Badge>
                        </div>
                        
                        <Link href={`/community/post/${post.id}`}>
                          <h3 className="text-xl font-bold hover:text-primary transition-colors mb-2">
                            {post.title}
                          </h3>
                        </Link>
                        
                        <p className="text-gray-700 mb-4 line-clamp-2">{post.content}</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex space-x-4">
                            <span className="flex items-center">
                              <Heart className="h-4 w-4 mr-1" />
                              {post.likes}
                            </span>
                            <span className="flex items-center">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              {post.replies}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-gray-400 mr-2">저장: {new Date(post.savedAt).toLocaleDateString()}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-gray-400 hover:text-red-500"
                              onClick={() => removeFromSaved(post.id, "posts")}
                            >
                              <Bookmark className="h-4 w-4 fill-current" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="events">
            {sortedEvents.length === 0 ? (
              <div className="text-center py-12">
                <Bookmark className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">저장된 이벤트가 없습니다</h3>
                <p className="text-gray-500 mb-4">관심있는 이벤트를 북마크하여 나중에 다시 볼 수 있습니다</p>
                <Button asChild>
                  <Link href="/community/events">이벤트 둘러보기</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {sortedEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-64 h-40 md:h-auto bg-gray-100 relative">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-3 left-3">
                          <Badge variant={event.type === "free" ? "secondary" : "default"}>
                            {event.price}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Link href={`/community/events/${event.id}`}>
                            <h3 className="text-xl font-bold hover:text-primary transition-colors">
                              {event.title}
                            </h3>
                          </Link>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-400 hover:text-red-500"
                            onClick={() => removeFromSaved(event.id, "events")}
                          >
                            <Bookmark className="h-4 w-4 fill-current" />
                          </Button>
                        </div>
                        
                        <p className="text-gray-700 mb-4 line-clamp-2">{event.description}</p>
                        
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-3 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-gray-400" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-gray-400" />
                            {event.attendees}/{event.maxAttendees} 참가자
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
                          <div className="text-xs text-gray-400">
                            저장: {new Date(event.savedAt).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
