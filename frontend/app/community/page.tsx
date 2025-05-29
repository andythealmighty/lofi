"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, MessageSquare, Users, TrendingUp, Heart, Share2, MessageCircle, Search, Filter, Bell, Bookmark, ThumbsUp, PlusCircle, Tag, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { SponsoredContent } from "@/components/sponsored-content"
import Link from "next/link"
import { PostService, Post, PostCreateInput } from "@/lib/services/post-service"
import { toast } from "sonner"

// Post UI 타입 정의
interface PostUI {
  id: string;
  author: {
    name: string;
    avatar: string;
    badge: string;
    location: string;
  };
  timestamp: string;
  type: string;
  tags: string[];
  title: string;
  content: string;
  likes: number;
  replies: number;
  hasLiked: boolean;
  image?: string;  // 옵션으로 추가
}

// 백엔드 Post 타입을 프론트엔드 UI에 맞게 변환하는 함수
const mapPostToUI = (post: Post, username: string = "Anonymous", additionalTags: string[] = []) => {
  return {
    id: post.id.toString(),
    author: {
      name: post.is_anonymous ? "Anonymous" : username,
      avatar: "/placeholder.svg?height=40&width=40",
      badge: "Traveler",
      location: "KoreaTravelHub User",
    },
    timestamp: new Date(post.created_at).toLocaleDateString(),
    type: post.category_id === 1 ? "question" : 
          post.category_id === 2 ? "tip" : "experience",
    tags: additionalTags,
    title: post.title,
    content: post.content,
    likes: 0,
    replies: post.comments?.length || 0,
    hasLiked: false
  };
};

export default function CommunityPage() {
  // 상태 관리
  const [posts, setPosts] = useState<PostUI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [postType, setPostType] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [postContent, setPostContent] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Record<string, boolean>>({});
  
  // 게시물 로드
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const fetchedPosts = await PostService.getPosts();
        
        if (fetchedPosts && Array.isArray(fetchedPosts) && fetchedPosts.length > 0) {
          const uiPosts = fetchedPosts.map((post: Post) => mapPostToUI(post));
          setPosts(uiPosts);
          
          // 좋아요 및 북마크 상태 초기화
          const initialLikedPosts: Record<string, boolean> = {};
          const initialBookmarkedPosts: Record<string, boolean> = {};
          
          uiPosts.forEach((post) => {
            initialLikedPosts[post.id] = post.hasLiked || false;
            initialBookmarkedPosts[post.id] = false;
          });
          
          setLikedPosts(initialLikedPosts);
          setBookmarkedPosts(initialBookmarkedPosts);
        } else {
          throw new Error("No posts returned");
        }
      } catch (err) {
        console.error('Failed to fetch posts:', err);
        setError('게시물을 불러오는 중 오류가 발생했습니다.');
        // 임시 조치: 에러 발생시에도 UI가 보이도록 모의 데이터 사용
        import("@/lib/mock-data").then(({ mockCommunityPosts }) => {
          setPosts(mockCommunityPosts as PostUI[]);  // 타입 캐스팅 추가
          
          const initialLikedPosts: Record<string, boolean> = {};
          const initialBookmarkedPosts: Record<string, boolean> = {};
          
          mockCommunityPosts.forEach(post => {
            initialLikedPosts[post.id] = post.hasLiked || false;
            initialBookmarkedPosts[post.id] = false;
          });
          
          setLikedPosts(initialLikedPosts);
          setBookmarkedPosts(initialBookmarkedPosts);
        });
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);
  
  // 좋아요 토글 함수
  const toggleLike = (postId: string) => {
    // 실제 API 연동 시 여기서 API 호출
    setLikedPosts(prev => {
      const newState = { ...prev, [postId]: !prev[postId] };
      
      // 실제 posts 배열에서도 좋아요 수 업데이트
      setPosts(prevPosts => 
        prevPosts.map(post => {
          if (post.id === postId) {
            const likeDelta = newState[postId] ? 1 : -1;
            return { 
              ...post, 
              likes: post.likes + likeDelta,
              hasLiked: newState[postId]
            };
          }
          return post;
        })
      );
      
      return newState;
    });
  };
  
  // 북마크 토글 함수
  const toggleBookmark = (postId: string) => {
    // 실제 API 연동 시 여기서 API 호출
    setBookmarkedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };
  
  // 새 포스트 작성 함수
  const handleCreatePost = async () => {
    if (!postContent.trim()) return;
    
    try {
      // 첫 줄을 제목으로 사용
      const lines = postContent.split('\n');
      const title = lines[0];
      const content = lines.length > 1 ? lines.slice(1).join('\n') : '';
      
      // 카테고리 ID 결정 (1: 질문, 2: 팁, 3: 경험)
      let categoryId = 3; // 기본값: 경험
      if (selectedTags.includes("Question")) categoryId = 1;
      else if (selectedTags.includes("Tip")) categoryId = 2;
      
      const postData: PostCreateInput = {
        title: title,
        content: content || title, // 내용이 없으면 제목을 내용으로 사용
        category_id: categoryId,
        is_anonymous: false
      };
      
      setLoading(true);
      
      // API 호출
      const createdPost = await PostService.createPost(postData);
      
      // 태그 필터링
      const filteredTags = selectedTags.filter(tag => 
        tag !== "Question" && tag !== "Tip" && tag !== "Experience"
      );
      
      // UI 업데이트를 위해 포스트 변환 (태그 전달)
      const uiPost = mapPostToUI(createdPost, "Anonymous", filteredTags);
      
      // 상태 업데이트
      setPosts([uiPost, ...posts]);
      setPostContent("");
      setSelectedTags([]);
      
      toast.success("게시물이 성공적으로 작성되었습니다!");
    } catch (err) {
      console.error('Failed to create post:', err);
      toast.error("게시물 작성 중 오류가 발생했습니다. 로그인이 필요할 수 있습니다.");
    } finally {
      setLoading(false);
    }
  };
  
  // 태그 토글 함수
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };
  
  // 포스트 필터링
  const filteredPosts = posts.filter(post => {
    // 검색어 필터
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    // 포스트 타입 필터
    const matchesType = postType === "all" || post.type === postType;
    
    return matchesSearch && matchesType;
  });
  
  // 포스트 정렬
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "recent") {
      // 날짜 기반 정렬
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    } else if (sortBy === "popular") {
      return b.likes - a.likes;
    } else if (sortBy === "discussed") {
      return b.replies - a.replies;
    }
    return 0;
  });

  // 렌더링 핸들링
  if (loading && posts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
          <p className="text-gray-600">게시물을 불러오는 중...</p>
        </div>
      </div>
    );
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
              <div className="text-2xl font-bold text-gray-900">{posts.length.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Community Posts</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">24</div>
              <div className="text-sm text-gray-600">Upcoming Events</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-amber-600 mx-auto mb-2" />
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
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-4">
                  {error}
                </div>
              )}
              
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
                  <h3 className="text-lg font-medium text-gray-900 mb-1">게시물이 없습니다</h3>
                  <p className="text-gray-500">첫 번째 게시물을 작성해보세요!</p>
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
            
            {/* 커뮤니티 이벤트 섹션 */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Community Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-0">
                <Link href="/community/events/event1">
                  <div className="hover:bg-gray-50 transition-colors p-4 border-b">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-blue-600">Seoul Street Food Tour</h4>
                      <Badge>June 15</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Group meetup to explore Myeongdong street food</p>
                    <div className="text-xs text-gray-500 flex items-center">
                      <Users className="h-3.5 w-3.5 mr-1" />
                      12 going
                    </div>
                  </div>
                </Link>
                <Link href="/community/events/event2">
                  <div className="hover:bg-gray-50 transition-colors p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-blue-600">Korean Language Exchange</h4>
                      <Badge variant="outline">Weekly</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Practice Korean with locals in Hongdae</p>
                    <div className="text-xs text-gray-500 flex items-center">
                      <Users className="h-3.5 w-3.5 mr-1" />
                      25 going
                    </div>
                  </div>
                </Link>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/community/events">View All Events</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* 광고 콘텐츠 */}
            <SponsoredContent 
              type="sidebar" 
              title="Korea Travel Guide" 
              description="Essential tips for your journey in Korea" 
              action="Learn More" 
              href="/guide" 
            />
            
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

            {/* 커뮤니티 네비게이션 - 깔끔한 디자인으로 변경 */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Community Navigation</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-2 divide-x">
                  <Link href="/community/events" className="p-4 text-center hover:bg-gray-50 transition-colors">
                    <Calendar className="h-5 w-5 mx-auto mb-2 text-purple-500" />
                    <span className="text-sm font-medium">Events</span>
                  </Link>
                  <Link href="/community/saved" className="p-4 text-center hover:bg-gray-50 transition-colors">
                    <Bookmark className="h-5 w-5 mx-auto mb-2 text-blue-500" />
                    <span className="text-sm font-medium">Saved Items</span>
                  </Link>
                </div>
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
  post: PostUI;
  isLiked: boolean;
  isBookmarked: boolean;
  onLikeToggle: () => void;
  onBookmarkToggle: () => void;
}

function PostCard({ post, isLiked, isBookmarked, onLikeToggle, onBookmarkToggle }: PostCardProps) {
  const [showFullContent, setShowFullContent] = useState(false);
  const isLongContent = post.content.length > 300;
  
  return (
    <Card className="mb-4 overflow-hidden">
      <CardContent className="p-6">
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
        <div>
          <Link href={`/community/post/${post.id}`}>
            <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
              {post.title}
            </h3>
          </Link>
          <p className="text-gray-700 mb-4 line-clamp-3">{post.content}</p>
          
          {/* 포스트 이미지 (있을 경우) */}
          {post.image && (
            <div className="mb-4 rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full object-cover" />
            </div>
          )}
          
          {/* 반응 버튼 */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className={isLiked ? "text-red-500" : ""}
              onClick={(e) => {
                e.preventDefault();
                onLikeToggle();
              }}
            >
              <Heart className={`h-4 w-4 mr-1 ${isLiked ? "fill-red-500" : ""}`} />
              <span>{post.likes}</span>
            </Button>
            
            {/* 댓글 버튼 추가 */}
            <Button
              variant="ghost"
              size="sm"
              asChild
            >
              <Link href={`/community/post/${post.id}#comments`}>
                <MessageCircle className="h-4 w-4 mr-1" />
                <span>{post.replies}</span>
              </Link>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className={isBookmarked ? "text-primary" : ""}
              onClick={(e) => {
                e.preventDefault();
                onBookmarkToggle();
              }}
            >
              <Bookmark className={`h-4 w-4 mr-1 ${isBookmarked ? "fill-primary" : ""}`} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
