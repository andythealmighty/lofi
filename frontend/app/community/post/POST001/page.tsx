"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { ArrowLeft, Heart, Share2, MessageCircle, Send, Bookmark, MoreHorizontal, Reply } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { mockCommunityPosts } from "@/lib/mock-data"
import Link from "next/link"

export default function PostDetailPage() {
  const params = useParams()
  const postId = params.id as string
  
  const [post, setPost] = useState<any>(null)
  const [comments, setComments] = useState<any[]>([])
  const [commentText, setCommentText] = useState("")
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [replyToId, setReplyToId] = useState<string | null>(null)
  const [replyToName, setReplyToName] = useState<string | null>(null)
  const [likedComments, setLikedComments] = useState<Record<string, boolean>>({})
  
  // 포스트 데이터 로드
  useEffect(() => {
    // 실제 앱에서는 API 호출로 포스트 데이터를 가져옴
    const foundPost = mockCommunityPosts.find(p => p.id === postId)
    if (foundPost) {
      setPost(foundPost)
      setIsLiked(foundPost.hasLiked || false)
      
      // Mock 댓글 생성
      const mockComments = [
        {
          id: "c1",
          author: {
            name: "Emily Chen",
            avatar: "/placeholder.svg?height=40&width=40",
            badge: "Regular Visitor",
          },
          timestamp: "1 hour ago",
          content: "I would recommend staying in Hongdae if you're interested in nightlife and a younger crowd. It's very vibrant with lots of street performances and good food options.",
          likes: 8,
          isLiked: false,
        },
        {
          id: "c2",
          author: {
            name: "Soo-jin Park",
            avatar: "/placeholder.svg?height=40&width=40",
            badge: "Local Expert",
          },
          timestamp: "45 minutes ago",
          content: "For first-time visitors, I think Myeongdong is a great choice. It's central, has lots of shopping, and is well-connected by public transportation. If you prefer something quieter but still convenient, try Insadong.",
          likes: 15,
          isLiked: true,
        },
      ]
      
      setComments(mockComments)
      
      // 좋아요 상태 초기화
      const initialLikedComments: Record<string, boolean> = {}
      mockComments.forEach(comment => {
        initialLikedComments[comment.id] = false
        if (comment.replies) {
          comment.replies.forEach((reply: any) => {
            initialLikedComments[reply.id] = false
          })
        }
      })
      setLikedComments(initialLikedComments)
    }
  }, [postId])
  
  // 좋아요 토글
  const toggleLike = () => {
    setIsLiked(!isLiked)
    setPost(prev => ({
      ...prev,
      likes: isLiked ? prev.likes - 1 : prev.likes + 1,
      hasLiked: !isLiked
    }))
  }
  
  // 북마크 토글
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }
  
  // 댓글 좋아요 토글
  const toggleCommentLike = (commentId: string) => {
    setLikedComments(prev => {
      const newState = { ...prev, [commentId]: !prev[commentId] }
      
      // 댓글의 좋아요 수 업데이트
      setComments(prevComments => 
        prevComments.map(comment => {
          if (comment.id === commentId) {
            const likeDelta = newState[commentId] ? 1 : -1
            return { ...comment, likes: comment.likes + likeDelta }
          }
          
          // 대댓글 확인
          if (comment.replies) {
            const updatedReplies = comment.replies.map((reply: any) => {
              if (reply.id === commentId) {
                const likeDelta = newState[commentId] ? 1 : -1
                return { ...reply, likes: reply.likes + likeDelta }
              }
              return reply
            })
            return { ...comment, replies: updatedReplies }
          }
          
          return comment
        })
      )
      
      return newState
    })
  }
  
  // 댓글 작성
  const handleSubmitComment = () => {
    if (!commentText.trim()) return
    
    if (replyToId) {
      // 대댓글 작성
      const newReply = {
        id: `reply${Date.now()}`,
        author: {
          name: "You",
          avatar: "/placeholder.svg?height=40&width=40",
          badge: "Traveler"
        },
        content: commentText,
        timestamp: "방금 전",
        likes: 0
      }
      
      setComments(prevComments => 
        prevComments.map(comment => {
          if (comment.id === replyToId) {
            return {
              ...comment,
              replies: [...(comment.replies || []), newReply]
            }
          }
          return comment
        })
      )
    } else {
      // 일반 댓글 작성
      const newComment = {
        id: `comment${Date.now()}`,
        author: {
          name: "You",
          avatar: "/placeholder.svg?height=40&width=40",
          badge: "Traveler"
        },
        content: commentText,
        timestamp: "방금 전",
        likes: 0
      }
      
      setComments([...comments, newComment])
    }
    
    setCommentText("")
    setReplyToId(null)
    setReplyToName(null)
  }
  
  // 대댓글 모드 설정
  const setReplyMode = (commentId: string, authorName: string) => {
    setReplyToId(commentId)
    setReplyToName(authorName)
    setCommentText(`@${authorName} `)
    
    // 댓글 입력 영역으로 스크롤
    setTimeout(() => {
      document.getElementById("comment-input")?.focus()
    }, 100)
  }
  
  // 대댓글 모드 취소
  const cancelReplyMode = () => {
    setReplyToId(null)
    setReplyToName(null)
    setCommentText("")
  }
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-gray-400">
            <MessageCircle className="h-12 w-12 mx-auto" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Post not found</h2>
          <p className="text-gray-500 mb-4">The post you're looking for doesn't exist or has been removed.</p>
          <Link href="/community">
            <Button>Back to Community</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 네비게이션 */}
      <nav className="border-b bg-white sticky top-0 z-50">
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
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Link href="/auth/signin">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/community/create">
                <Button>New Post</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Travel Community</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with fellow travelers, share experiences, and get real-time advice from locals and experts
          </p>
        </div>

        {/* 커뮤니티 통계 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">15,847</div>
              <div className="text-sm text-gray-600">Active Members</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{mockCommunityPosts.length.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Community Posts</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Helpful Responses</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 메인 피드 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 검색 및 필터 */}
            <Card className="overflow-hidden border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search posts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Select value={postType} onValueChange={setPostType}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Post Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Posts</SelectItem>
                        <SelectItem value="question">Questions</SelectItem>
                        <SelectItem value="tip">Tips</SelectItem>
                        <SelectItem value="experience">Experiences</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recent">Most Recent</SelectItem>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="discussed">Most Discussed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 포스트 작성 */}
            <Card>
              <CardHeader>
                <CardTitle>Share Your Experience</CardTitle>
                <CardDescription>Ask questions, share tips, or tell us about your Korean adventure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea 
                  placeholder="What's on your mind? Share your travel tips, ask questions, or tell us about your Korean experience..." 
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  className="min-h-[100px]"
                />
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Badge 
                      variant={selectedTags.includes("Question") ? "default" : "outline"} 
                      className="cursor-pointer"
                      onClick={() => toggleTag("Question")}
                    >
                      Question
                    </Badge>
                    <Badge 
                      variant={selectedTags.includes("Tip") ? "default" : "outline"} 
                      className="cursor-pointer"
                      onClick={() => toggleTag("Tip")}
                    >
                      Tip
                    </Badge>
                    <Badge 
                      variant={selectedTags.includes("Experience") ? "default" : "outline"} 
                      className="cursor-pointer"
                      onClick={() => toggleTag("Experience")}
                    >
                      Experience
                    </Badge>
                    
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm" className="h-6">
                          <Tag className="h-3 w-3 mr-1" />
                          More Tags
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <div className="grid grid-cols-2 gap-2">
                          {["Seoul", "Busan", "Jeju", "Food", "K-pop", "Transport", "Budget", "Safety"].map(tag => (
                            <div key={tag} className="flex items-center space-x-2">
                              <Checkbox 
                                id={`tag-${tag}`} 
                                checked={selectedTags.includes(tag)}
                                onCheckedChange={() => toggleTag(tag)}
                              />
                              <label htmlFor={`tag-${tag}`} className="text-sm cursor-pointer">
                                {tag}
                              </label>
                            </div>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <Button 
                    onClick={handleCreatePost}
                    disabled={!postContent.trim()}
                  >
                    Post
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 포스트 피드 */}
            <div className="space-y-6">
              {sortedPosts.length > 0 ? (
                sortedPosts.map((post) => (
                  <PostCard 
                    key={post.id} 
                    post={post} 
                    isLiked={likedPosts[post.id] || false}
                    isBookmarked={bookmarkedPosts[post.id] || false}
                    onLikeToggle={() => toggleLike(post.id)}
                    onBookmarkToggle={() => toggleBookmark(post.id)}
                  />
                ))
              ) : (
                <div className="text-center py-8 bg-white rounded-lg border">
                  <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No posts found</h3>
                  <p className="text-gray-500">Try adjusting your search or filters</p>
                </div>
              )}
              
              {filteredPosts.length > 0 && (
                <div className="text-center pt-4">
                  <Button variant="outline">Load More</Button>
                </div>
              )}
            </div>
          </div>
          
          {/* 사이드바 */}
          <div className="space-y-6">
            {/* 인기 주제 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Trending Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="cursor-pointer" onClick={() => setSearchQuery("Seoul")}>Seoul</Badge>
                  <Badge className="cursor-pointer" onClick={() => setSearchQuery("COVID")}>COVID Updates</Badge>
                  <Badge className="cursor-pointer" onClick={() => setSearchQuery("cherry blossom")}>Cherry Blossoms</Badge>
                  <Badge className="cursor-pointer" onClick={() => setSearchQuery("transportation")}>Transportation</Badge>
                  <Badge className="cursor-pointer" onClick={() => setSearchQuery("Jeju")}>Jeju Island</Badge>
                  <Badge className="cursor-pointer" onClick={() => setSearchQuery("budget")}>Budget Travel</Badge>
                  <Badge className="cursor-pointer" onClick={() => setSearchQuery("K-pop")}>K-pop Events</Badge>
                  <Badge className="cursor-pointer" onClick={() => setSearchQuery("food")}>Food Tours</Badge>
                </div>
              </CardContent>
            </Card>
            
            {/* 활발한 멤버 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Active Members</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Min-jun Kim", role: "Local Expert", avatar: "MK" },
                  { name: "Emily Chen", role: "Regular Visitor", avatar: "EC" },
                  { name: "David Wilson", role: "K-Culture Expert", avatar: "DW" },
                  { name: "Soo-jin Park", role: "Food Specialist", avatar: "SP" },
                ].map((member, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{member.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            {/* 이벤트 및 모임 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Community Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between mb-1">
                    <h3 className="font-medium">Seoul Street Food Tour</h3>
                    <Badge variant="outline">June 15</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Group meetup to explore Myeongdong street food</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Users className="h-3 w-3" />
                    <span>12 going</span>
                  </div>
                </div>
                
                <div className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between mb-1">
                    <h3 className="font-medium">Korean Language Exchange</h3>
                    <Badge variant="outline">Weekly</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Practice Korean with locals in Hongdae</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Users className="h-3 w-3" />
                    <span>25 going</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">View All Events</Button>
              </CardContent>
            </Card>
            
            {/* 광고 콘텐츠 */}
            <SponsoredContent type="sidebar" />
            
            {/* 커뮤니티 가이드라인 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p>• Be respectful and constructive</p>
                <p>• Share authentic experiences and information</p>
                <p>• Respect privacy - no personal contact info</p>
                <p>• No spam or promotional content</p>
                <Link href="/community/guidelines" className="text-blue-600 hover:underline block mt-2">
                  Read full guidelines →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// 포스트 카드 컴포넌트
interface PostCardProps {
  post: any;
  isLiked: boolean;
  isBookmarked: boolean;
  onLikeToggle: () => void;
  onBookmarkToggle: () => void;
}

function PostCard({ post, isLiked, isBookmarked, onLikeToggle, onBookmarkToggle }: PostCardProps) {
  const [showFullContent, setShowFullContent] = useState(false);
  const isLongContent = post.content.length > 300;
  
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-start gap-3">
          <Avatar>
            <AvatarImage src={post.author.avatar} />
            <AvatarFallback>{post.author.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold">{post.author.name}</span>
              <Badge variant="secondary">{post.author.badge}</Badge>
              <span className="text-sm text-gray-500">{post.timestamp}</span>
            </div>
            <p className="text-sm text-gray-600">{post.author.location}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={onBookmarkToggle}>
                {isBookmarked ? "Remove Bookmark" : "Bookmark"}
              </DropdownMenuItem>
              <DropdownMenuItem>Report Post</DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex gap-2">
            <Badge>
              {post.type === "question" ? "Question" : 
               post.type === "tip" ? "Tip" : "Experience"}
            </Badge>
            {post.tags.map((tag: string, index: number) => (
              tag !== "Question" && tag !== "Tip" && tag !== "Experience" && (
                <Badge key={index} variant="outline">{tag}</Badge>
              )
            ))}
          </div>
          <h3 className="font-semibold text-lg">{post.title}</h3>
          <div className="text-gray-700">
            {isLongContent && !showFullContent ? (
              <>
                <p>{post.content.substring(0, 300)}...</p>
                <Button 
                  variant="link" 
                  className="px-0 h-auto font-normal"
                  onClick={() => setShowFullContent(true)}
                >
                  Read more
                </Button>
              </>
            ) : (
              <p>{post.content}</p>
            )}
          </div>
          
          {post.details && (
            <div className="bg-gray-50 p-3 rounded-lg">
              {Object.entries(post.details).map(([key, value]) => (
                <p key={key} className="text-sm">
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value as string}
                </p>
              ))}
            </div>
          )}
          
          <div className="flex items-center gap-4 pt-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`gap-2 ${isLiked ? 'text-red-500' : ''}`}
              onClick={onLikeToggle}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              {post.likes}
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              {post.replies} {post.replies === 1 ? 'reply' : 'replies'}
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <div className="ml-auto">
              <Button 
                variant="ghost" 
                size="sm" 
                className={isBookmarked ? 'text-blue-600' : ''}
                onClick={onBookmarkToggle}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
