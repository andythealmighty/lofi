"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { 
  ArrowLeft, Heart, Share2, MessageCircle, Send, Bookmark, 
  MoreHorizontal, Bell, Users, Search, TrendingUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
  DropdownMenuLabel, DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select"
import { 
  Popover, PopoverContent, PopoverTrigger 
} from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { SponsoredContent } from "@/components/sponsored-content"
import { mockCommunityPosts } from "@/lib/mock-data"
import Link from "next/link"

// 타입 정의
interface CommentAuthor {
  name: string;
  avatar: string;
  badge: string;
}

interface CommentReply {
  id: string;
  author: CommentAuthor;
  content: string;
  timestamp: string;
  likes: number;
}

interface Comment {
  id: string;
  author: CommentAuthor;
  timestamp: string;
  content: string;
  likes: number;
  isLiked: boolean;
  replies?: CommentReply[];
}

// mockCommunityPosts 구조에 맞게 Post 인터페이스 정의
interface PostAuthor {
  name: string;
  avatar: string;
  badge: string;
  location: string;
}

interface PostDetails {
  location?: string;
  hours?: string;
  price?: string;
  [key: string]: string | undefined;
}

interface Post {
  id: string;
  author: PostAuthor;
  timestamp: string;
  type: string;
  tags: string[];
  title: string;
  content: string;
  likes: number;
  replies: number;
  hasLiked: boolean;
  details?: PostDetails;
}

interface PostCardProps {
  post: Post;
  isLiked: boolean;
  isBookmarked: boolean;
  onLikeToggle: () => void;
  onBookmarkToggle: () => void;
}

interface SponsoredContentProps {
  title: string;
  description: string;
  action: string;
  href: string;
}

export default function PostDetailPage() {
  const params = useParams()
  const postId = params.id as string
  
  const [post, setPost] = useState<Post | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [commentText, setCommentText] = useState("")
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [replyToId, setReplyToId] = useState<string | null>(null)
  const [replyToName, setReplyToName] = useState<string | null>(null)
  const [likedComments, setLikedComments] = useState<Record<string, boolean>>({})
  
  // 임시 상태 변수 (검색 필터링용)
  const [searchQuery, setSearchQuery] = useState("")
  const [postType, setPostType] = useState("all")
  const [sortBy, setSortBy] = useState("recent")
  const [postContent, setPostContent] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  
  // 태그 토글 함수
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }
  
  // 포스트 데이터 로드
  useEffect(() => {
    // 실제 앱에서는 API 호출로 포스트 데이터를 가져옴
    const foundPost = mockCommunityPosts.find(p => p.id === postId)
    if (foundPost) {
      setPost(foundPost as Post)
      setIsLiked(foundPost.hasLiked || false)
      
      // Mock 댓글 생성
      const mockComments: Comment[] = [
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
          replies: []
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
          replies: []
        },
      ]
      
      setComments(mockComments)
      
      // 좋아요 상태 초기화
      const initialLikedComments: Record<string, boolean> = {}
      mockComments.forEach(comment => {
        initialLikedComments[comment.id] = false
        if (comment.replies) {
          comment.replies.forEach(reply => {
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
    setPost((prev: Post | null) => {
      if (!prev) return prev
      return {
        ...prev,
        likes: isLiked ? prev.likes - 1 : prev.likes + 1,
        hasLiked: !isLiked
      }
    })
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
          if (comment.replies && comment.replies.length > 0) {
            const updatedReplies = comment.replies.map(reply => {
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
      const newReply: CommentReply = {
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
      const newComment: Comment = {
        id: `comment${Date.now()}`,
        author: {
          name: "You",
          avatar: "/placeholder.svg?height=40&width=40",
          badge: "Traveler"
        },
        content: commentText,
        timestamp: "방금 전",
        likes: 0,
        isLiked: false,
        replies: []
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

  // 간소화된 UI 렌더링 (원래의 복잡한 UI 대신 간단한 구조로 변경)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 네비게이션 */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/community" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-xl font-bold text-gray-900">Back to Community</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleBookmark}>
                <Bookmark className={`h-5 w-5 ${isBookmarked ? "fill-primary text-primary" : ""}`} />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 게시물 내용 */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{post.author.name}</span>
                      <Badge variant="outline" className="text-xs">{post.author.badge}</Badge>
                    </div>
                    <p className="text-sm text-gray-500">{post.timestamp} · {post.author.location}</p>
                  </div>
                </div>

                <div>
                  <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
                </div>

                {post.details && (
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    {post.details.location && (
                      <div className="flex items-start gap-2">
                        <div className="text-gray-700 font-medium">Location:</div>
                        <div className="text-gray-600">{post.details.location}</div>
                      </div>
                    )}
                    {post.details.hours && (
                      <div className="flex items-start gap-2">
                        <div className="text-gray-700 font-medium">Hours:</div>
                        <div className="text-gray-600">{post.details.hours}</div>
                      </div>
                    )}
                    {post.details.price && (
                      <div className="flex items-start gap-2">
                        <div className="text-gray-700 font-medium">Price:</div>
                        <div className="text-gray-600">{post.details.price}</div>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-4 pt-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={toggleLike}
                    className={`flex items-center gap-1 ${isLiked ? "text-red-500" : ""}`}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? "fill-red-500" : ""}`} />
                    <span>{post.likes}</span>
                  </Button>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageCircle className="h-5 w-5" />
                    <span>{comments.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 댓글 섹션 */}
            <Card>
              <CardHeader>
                <CardTitle>Comments ({comments.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {comments.map(comment => (
                  <div key={comment.id} className="border-b last:border-0 pb-4 last:pb-0">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                        <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{comment.author.name}</span>
                          <Badge variant="outline" className="text-xs">{comment.author.badge}</Badge>
                          <span className="text-xs text-gray-500">{comment.timestamp}</span>
                        </div>
                        <p className="mt-1 text-gray-700">{comment.content}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => toggleCommentLike(comment.id)}
                            className={`flex items-center gap-1 h-6 px-2 ${likedComments[comment.id] ? "text-red-500" : ""}`}
                          >
                            <Heart className={`h-3.5 w-3.5 ${likedComments[comment.id] ? "fill-red-500" : ""}`} />
                            <span className="text-xs">{comment.likes}</span>
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => setReplyMode(comment.id, comment.author.name)}
                            className="flex items-center gap-1 h-6 px-2"
                          >
                            <MessageCircle className="h-3.5 w-3.5" />
                            <span className="text-xs">Reply</span>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* 대댓글 표시 */}
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="ml-10 mt-3 space-y-3">
                        {comment.replies.map(reply => (
                          <div key={reply.id} className="flex items-start gap-3">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={reply.author.avatar} alt={reply.author.name} />
                              <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm">{reply.author.name}</span>
                                <Badge variant="outline" className="text-xs">{reply.author.badge}</Badge>
                                <span className="text-xs text-gray-500">{reply.timestamp}</span>
                              </div>
                              <p className="mt-1 text-sm text-gray-700">{reply.content}</p>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={() => toggleCommentLike(reply.id)}
                                className={`flex items-center gap-1 h-5 px-2 mt-1 ${likedComments[reply.id] ? "text-red-500" : ""}`}
                              >
                                <Heart className={`h-3 w-3 ${likedComments[reply.id] ? "fill-red-500" : ""}`} />
                                <span className="text-xs">{reply.likes}</span>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* 댓글 작성 폼 */}
                <div className="pt-4">
                  {replyToId && (
                    <div className="bg-gray-50 p-2 mb-2 rounded flex justify-between items-center">
                      <span className="text-sm">Replying to {replyToName}</span>
                      <Button variant="ghost" size="sm" onClick={cancelReplyMode}>
                        Cancel
                      </Button>
                    </div>
                  )}
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="You" />
                      <AvatarFallback>Y</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Textarea 
                        id="comment-input"
                        placeholder="Write a comment..." 
                        value={commentText}
                        onChange={e => setCommentText(e.target.value)}
                        className="min-h-[80px]"
                      />
                      <div className="flex justify-end mt-2">
                        <Button onClick={handleSubmitComment} disabled={!commentText.trim()}>
                          Comment
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 사이드바 */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Popular Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Seoul</span>
                  <Badge>2,541 posts</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Food</span>
                  <Badge>1,873 posts</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Transportation</span>
                  <Badge>1,254 posts</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Jeju Island</span>
                  <Badge>987 posts</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">K-pop</span>
                  <Badge>842 posts</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Be respectful and inclusive</p>
                <p>• Share authentic experiences</p>
                <p>• Provide helpful information</p>
                <p>• Respect privacy and copyright</p>
                <p>• No spam or self-promotion</p>
              </CardContent>
            </Card>

            <SponsoredContent
              title="Korean Language Course"
              description="Learn essential phrases for your trip"
              action="Learn More"
              href="#"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
