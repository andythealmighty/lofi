"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Image, MapPin, Tag, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PostService, PostCreateInput } from "@/lib/services/post-service"
import { toast } from "sonner"

export default function CreatePostPage() {
  const router = useRouter()
  const [postType, setPostType] = useState("question")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [location, setLocation] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const availableTags = {
    cities: ["Seoul", "Busan", "Jeju", "Incheon", "Gyeongju", "Gangneung"],
    categories: ["Food", "Transportation", "Accommodation", "Shopping", "K-pop", "Hiking", "Budget", "Safety"],
    languages: ["English Support", "Chinese Support", "Japanese Support"]
  }
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim() || !content.trim()) {
      toast.error("제목과 내용을 모두 입력해주세요")
      return
    }
    
    try {
      setIsSubmitting(true)
      
      // 카테고리 ID 결정 (1: 질문, 2: 팁, 3: 경험)
      let categoryId = 1 // 기본값: 질문
      if (postType === "tip") categoryId = 2
      else if (postType === "experience") categoryId = 3
      
      const postData: PostCreateInput = {
        title: title,
        content: content,
        category_id: categoryId,
        is_anonymous: false
      }
      
      const createdPost = await PostService.createPost(postData)
      
      toast.success("게시물이 성공적으로 작성되었습니다!")
      router.push(`/community/post/${createdPost.id}`)
    } catch (err) {
      console.error('Failed to create post:', err)
      toast.error("게시물 작성 중 오류가 발생했습니다. 로그인이 필요할 수 있습니다.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/community" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-lg font-semibold">Back to Community</span>
            </Link>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Create a Post</h1>
          <p className="text-gray-600 mb-8">Share your experience, ask questions, or give tips to fellow travelers.</p>
          
          <form onSubmit={handleSubmit}>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Post Details</CardTitle>
                <CardDescription>Choose the type of post you want to create</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <RadioGroup value={postType} onValueChange={setPostType} className="grid grid-cols-3 gap-4">
                  <div className={`border rounded-lg p-4 text-center ${postType === 'question' ? 'border-blue-500 bg-blue-50' : ''}`}>
                    <RadioGroupItem value="question" id="question" className="sr-only" />
                    <Label htmlFor="question" className="cursor-pointer">
                      <div className="font-semibold mb-1">Question</div>
                      <div className="text-xs text-gray-500">Ask the community for help</div>
                    </Label>
                  </div>
                  <div className={`border rounded-lg p-4 text-center ${postType === 'tip' ? 'border-blue-500 bg-blue-50' : ''}`}>
                    <RadioGroupItem value="tip" id="tip" className="sr-only" />
                    <Label htmlFor="tip" className="cursor-pointer">
                      <div className="font-semibold mb-1">Tip</div>
                      <div className="text-xs text-gray-500">Share useful advice</div>
                    </Label>
                  </div>
                  <div className={`border rounded-lg p-4 text-center ${postType === 'experience' ? 'border-blue-500 bg-blue-50' : ''}`}>
                    <RadioGroupItem value="experience" id="experience" className="sr-only" />
                    <Label htmlFor="experience" className="cursor-pointer">
                      <div className="font-semibold mb-1">Experience</div>
                      <div className="text-xs text-gray-500">Share your adventures</div>
                    </Label>
                  </div>
                </RadioGroup>
                
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input 
                    id="title" 
                    placeholder={`${postType === 'question' ? 'Ask a question...' : postType === 'tip' ? 'Share a useful tip...' : 'Describe your experience...'}`}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea 
                    id="content" 
                    placeholder="Write your post content here..."
                    className="min-h-[200px]"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4" />
                    Location (Optional)
                  </Label>
                  <Input 
                    placeholder="Where did this happen? (e.g., Myeongdong, Seoul)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label className="flex items-center gap-2 mb-2">
                    <Tag className="h-4 w-4" />
                    Tags
                  </Label>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Cities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {availableTags.cities.map(city => (
                          <Badge 
                            key={city}
                            variant={selectedTags.includes(city) ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => toggleTag(city)}
                          >
                            {city}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Categories:</h4>
                      <div className="flex flex-wrap gap-2">
                        {availableTags.categories.map(category => (
                          <Badge 
                            key={category}
                            variant={selectedTags.includes(category) ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => toggleTag(category)}
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Languages:</h4>
                      <div className="flex flex-wrap gap-2">
                        {availableTags.languages.map(language => (
                          <Badge 
                            key={language}
                            variant={selectedTags.includes(language) ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => toggleTag(language)}
                          >
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="image">Image (Optional)</Label>
                  <div className="flex items-center gap-4">
                    <Button type="button" variant="outline" className="w-full h-32" onClick={() => document.getElementById("image")?.click()}>
                      {imagePreview ? (
                        <img src={imagePreview} alt="Preview" className="h-full object-cover" />
                      ) : (
                        <div className="flex flex-col items-center text-gray-500">
                          <Image className="h-8 w-8 mb-2" />
                          <span>Upload Image</span>
                        </div>
                      )}
                    </Button>
                    <input 
                      type="file" 
                      id="image" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button type="button" variant="ghost">Save Draft</Button>
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !title || !content}
                >
                  {isSubmitting ? "게시 중..." : "Publish Post"}
                </Button>
              </CardFooter>
            </Card>
          </form>
          
          <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-yellow-800 font-medium mb-2">
              <Info className="h-5 w-5" />
              <h3>Community Guidelines</h3>
            </div>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Be respectful and considerate of others</li>
              <li>• Share accurate and helpful information</li>
              <li>• Respect privacy - don&apos;t share others&apos; personal information</li>
              <li>• No spam, promotional content, or solicitation</li>
              <li>• English is our primary language, but we welcome content in other languages with translations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
