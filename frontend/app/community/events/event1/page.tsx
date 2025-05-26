"use client"

import { useState } from "react"
import { ArrowLeft, Calendar, MapPin, Clock, Users, Heart, Bookmark, Share2, ExternalLink, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useRouter } from "next/navigation"

// 이벤트 데이터 모킹 (실제로는 API에서 불러와야 함)
const mockEvent = {
  id: "event1",
  title: "Seoul Food Tour for Foreigners",
  description: "Join us for a culinary adventure through the vibrant streets of Seoul. We'll explore traditional markets, taste authentic Korean dishes, and learn about food culture.",
  longDescription: "This guided food tour is perfect for travelers who want to experience the authentic tastes of Korea. We'll start at Gwangjang Market, one of Seoul's oldest and most famous food markets, where you'll sample dishes like bindaetteok (mung bean pancakes), mayak gimbap (seaweed rice rolls), and various types of tteokbokki (spicy rice cakes).\n\nFrom there, we'll walk through the streets of Jongno, stopping at hidden food gems known only to locals. You'll learn about the history and cultural significance of Korean cuisine while enjoying generous tastings at 5-7 different food locations.\n\nThe tour is led by English-speaking guides who are passionate about Korean food and culture. They'll help you navigate menus, explain ingredients, and share tips on Korean eating etiquette.\n\nAll food samples are included in the ticket price. Please let us know in advance if you have any dietary restrictions or allergies.",
  date: "2025-06-15",
  time: "14:00 - 17:00",
  location: "Gwangjang Market, Seoul",
  meetingPoint: "Exit 8 of Jongno 5-ga Station (Line 1)",
  organizer: {
    name: "Jae Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Food tour guide and Korean cuisine enthusiast with 5+ years of experience introducing foreign visitors to Seoul's vibrant food scene."
  },
  attendees: 18,
  maxAttendees: 25,
  attendeesList: [
    { name: "Sarah", avatar: "/placeholder.svg?height=40&width=40" },
    { name: "Mike", avatar: "/placeholder.svg?height=40&width=40" },
    { name: "Emma", avatar: "/placeholder.svg?height=40&width=40" },
    { name: "John", avatar: "/placeholder.svg?height=40&width=40" },
    { name: "Lisa", avatar: "/placeholder.svg?height=40&width=40" }
  ],
  tags: ["Food", "Cultural", "Walking Tour"],
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600"
  ],
  price: "₩25,000",
  type: "paid",
  includes: [
    "Food tastings at 5-7 locations",
    "English-speaking guide",
    "Food culture insights",
    "Recipe cards to take home"
  ],
  comments: [
    {
      id: "comment1",
      author: { name: "Emma", avatar: "/placeholder.svg?height=40&width=40" },
      content: "I went on this tour last month and it was amazing! Jae is knowledgeable and took us to places I never would have found on my own.",
      timestamp: "2 weeks ago",
      likes: 5
    },
    {
      id: "comment2",
      author: { name: "Mike", avatar: "/placeholder.svg?height=40&width=40" },
      content: "Quick question - is this tour suitable for vegetarians?",
      timestamp: "1 week ago",
      likes: 1,
      replies: [
        {
          id: "reply1",
          author: { name: "Jae Kim", avatar: "/placeholder.svg?height=40&width=40" },
          content: "Yes, we can definitely accommodate vegetarians! Just let me know when you sign up so I can plan alternative tastings.",
          timestamp: "6 days ago",
          likes: 2
        }
      ]
    }
  ]
};

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isAttending, setIsAttending] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(mockEvent.comments);
  const [likedComments, setLikedComments] = useState<Record<string, boolean>>({});
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const handleJoinEvent = () => {
    setIsAttending(true);
    // 실제로는 API 호출을 통해 참가 처리를 해야 함
  };
  
  const handleSaveEvent = () => {
    setIsSaved(!isSaved);
  };
  
  const handleSubmitComment = () => {
    if (!commentText.trim()) return;
    
    const newComment = {
      id: `comment${Date.now()}`,
      author: { name: "You", avatar: "/placeholder.svg?height=40&width=40" },
      content: commentText,
      timestamp: "Just now",
      likes: 0
    };
    
    setComments([...comments, newComment]);
    setCommentText("");
  };
  
  const handleLikeComment = (commentId: string) => {
    setLikedComments(prev => {
      const newState = { ...prev, [commentId]: !prev[commentId] };
      
      // 댓글의 좋아요 수 업데이트
      setComments(prevComments => 
        prevComments.map(comment => {
          if (comment.id === commentId) {
            const likeDelta = newState[commentId] ? 1 : -1;
            return { ...comment, likes: comment.likes + likeDelta };
          }
          
          // 대댓글 확인
          if (comment.replies) {
            const updatedReplies = comment.replies.map(reply => {
              if (reply.id === commentId) {
                const likeDelta = newState[commentId] ? 1 : -1;
                return { ...reply, likes: reply.likes + likeDelta };
              }
              return reply;
            });
            return { ...comment, replies: updatedReplies };
          }
          
          return comment;
        })
      );
      
      return newState;
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 네비게이션 */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/community/events" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-xl font-bold text-gray-900">Back to Events</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={handleSaveEvent}>
                <Bookmark className={`h-5 w-5 ${isSaved ? "fill-primary text-primary" : ""}`} />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {/* 이벤트 정보 */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={mockEvent.images[activeImageIndex]}
                alt={mockEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 bg-black/50">
                <div className="flex space-x-2">
                  {mockEvent.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === activeImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{mockEvent.title}</h1>
                <Badge variant={mockEvent.type === "free" ? "secondary" : "default"} className="text-sm">
                  {mockEvent.price}
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                  {mockEvent.date}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-gray-500" />
                  {mockEvent.time}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                  {mockEvent.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2 text-gray-500" />
                  {mockEvent.attendees}/{mockEvent.maxAttendees} Attendees
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {mockEvent.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Tabs defaultValue="details">
              <TabsList className="w-full">
                <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
                <TabsTrigger value="attendees" className="flex-1">Attendees</TabsTrigger>
                <TabsTrigger value="discussion" className="flex-1">Discussion</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="space-y-6 pt-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3">이벤트 소개</h3>
                  <p className="text-gray-700 whitespace-pre-line">{mockEvent.longDescription}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">포함 사항</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {mockEvent.includes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">집합 장소</h3>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-gray-700">{mockEvent.meetingPoint}</p>
                      <a 
                        href={`https://maps.google.com/?q=${encodeURIComponent(mockEvent.meetingPoint)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary mt-1 hover:underline"
                      >
                        지도에서 보기
                        <ExternalLink className="h-3.5 w-3.5 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="attendees" className="pt-4">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">참가자 ({mockEvent.attendees}/{mockEvent.maxAttendees})</h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {mockEvent.attendeesList.map((attendee, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={attendee.avatar} alt={attendee.name} />
                          <AvatarFallback>{attendee.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm mt-1">{attendee.name}</span>
                      </div>
                    ))}
                    
                    {Array.from({ length: Math.min(10, mockEvent.attendees - mockEvent.attendeesList.length) }).map((_, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>?</AvatarFallback>
                        </Avatar>
                        <span className="text-sm mt-1">Guest</span>
                      </div>
                    ))}
                    
                    {mockEvent.attendees < mockEvent.maxAttendees && (
                      <div className="flex flex-col items-center">
                        <div className="h-12 w-12 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                          +{mockEvent.maxAttendees - mockEvent.attendees}
                        </div>
                        <span className="text-sm mt-1 text-gray-500">자리 남음</span>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="discussion" className="pt-4">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">토론 및 질문</h3>
                  
                  {/* 댓글 입력 폼 */}
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="You" />
                      <AvatarFallback>YOU</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Textarea
                        placeholder="질문이나 의견을 남겨주세요..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="resize-none mb-2"
                      />
                      <div className="flex justify-end">
                        <Button onClick={handleSubmitComment} disabled={!commentText.trim()}>
                          <Send className="h-4 w-4 mr-2" />
                          댓글 등록
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* 댓글 목록 */}
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className="border rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                            <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium">{comment.author.name}</h4>
                                <p className="text-sm text-gray-500">{comment.timestamp}</p>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => handleLikeComment(comment.id)}
                              >
                                <Heart
                                  className={`h-4 w-4 ${
                                    likedComments[comment.id] ? "fill-red-500 text-red-500" : ""
                                  }`}
                                />
                              </Button>
                            </div>
                            <p className="mt-2 text-gray-700">{comment.content}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="text-sm text-gray-500">
                                <Heart className="h-3.5 w-3.5 inline mr-1" />
                                {comment.likes}
                              </span>
                              <button
                                className="text-sm text-gray-500 hover:text-gray-900"
                                onClick={() => setCommentText(`@${comment.author.name} `)}
                              >
                                <MessageCircle className="h-3.5 w-3.5 inline mr-1" />
                                댓글
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* 대댓글 */}
                        {comment.replies && comment.replies.length > 0 && (
                          <div className="mt-3 pl-12 space-y-3">
                            {comment.replies.map((reply) => (
                              <div key={reply.id} className="border-t pt-3">
                                <div className="flex items-start gap-3">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src={reply.author.avatar} alt={reply.author.name} />
                                    <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <h4 className="font-medium text-sm">{reply.author.name}</h4>
                                        <p className="text-xs text-gray-500">{reply.timestamp}</p>
                                      </div>
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-6 w-6"
                                        onClick={() => handleLikeComment(reply.id)}
                                      >
                                        <Heart
                                          className={`h-3.5 w-3.5 ${
                                            likedComments[reply.id] ? "fill-red-500 text-red-500" : ""
                                          }`}
                                        />
                                      </Button>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-700">{reply.content}</p>
                                    <div className="flex items-center gap-4 mt-1">
                                      <span className="text-xs text-gray-500">
                                        <Heart className="h-3 w-3 inline mr-1" />
                                        {reply.likes}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* 사이드바 */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>이벤트 등록</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center text-2xl font-bold">{mockEvent.price}</div>
                <div className="flex items-center justify-between text-sm">
                  <span>자리 현황:</span>
                  <span className="font-medium">{mockEvent.attendees}/{mockEvent.maxAttendees} 참가자</span>
                </div>
                <progress
                  className="w-full h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-primary"
                  value={mockEvent.attendees}
                  max={mockEvent.maxAttendees}
                />
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  disabled={isAttending || mockEvent.attendees >= mockEvent.maxAttendees}
                  onClick={handleJoinEvent}
                >
                  {isAttending
                    ? "참가 신청 완료"
                    : mockEvent.attendees >= mockEvent.maxAttendees
                    ? "마감됨"
                    : "이벤트 참가하기"}
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>주최자 정보</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar>
                    <AvatarImage src={mockEvent.organizer.avatar} alt={mockEvent.organizer.name} />
                    <AvatarFallback>{mockEvent.organizer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{mockEvent.organizer.name}</h4>
                    <p className="text-sm text-gray-500">주최자</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{mockEvent.organizer.bio}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  메시지 보내기
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>공유하기</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="icon">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
