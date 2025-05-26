"use client"

import { useState } from "react"
import { ArrowLeft, Image, MapPin, Tag, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function CreatePostPage() {
  const [postType, setPostType] = useState("question")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [location, setLocation] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  
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
              
              <div className="flex items-center gap-2">
                <Button variant="outline" className="gap-2">
                  <Image className="h-4 w-4" />
                  Add Images
                </Button>
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between">
              <Button variant="ghost">Save Draft</Button>
              <Button disabled={!title || !content}>Publish Post</Button>
            </CardFooter>
          </Card>
          
          <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-yellow-800 font-medium mb-2">
              <Info className="h-5 w-5" />
              <h3>Community Guidelines</h3>
            </div>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Be respectful and considerate of others</li>
              <li>• Share accurate and helpful information</li>
              <li>• Respect privacy - don't share others' personal information</li>
              <li>• No spam, promotional content, or solicitation</li>
              <li>• English is our primary language, but we welcome content in other languages with translations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
