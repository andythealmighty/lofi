import { ArrowLeft, MessageSquare, Users, TrendingUp, Heart, Share2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
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
              <Button variant="outline">Sign In</Button>
              <Button>Join Community</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Travel Community</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with fellow travelers, share experiences, and get real-time advice from locals and experts
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
              <div className="text-2xl font-bold text-gray-900">2,341</div>
              <div className="text-sm text-gray-600">Posts This Week</div>
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
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card>
              <CardHeader>
                <CardTitle>Share Your Experience</CardTitle>
                <CardDescription>Ask questions, share tips, or tell us about your Korean adventure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea placeholder="What's on your mind? Share your travel tips, ask questions, or tell us about your Korean experience..." />
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Badge variant="outline">Question</Badge>
                    <Badge variant="outline">Tip</Badge>
                    <Badge variant="outline">Experience</Badge>
                  </div>
                  <Button>Post</Button>
                </div>
              </CardContent>
            </Card>

            {/* Posts Feed */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Sarah Johnson</span>
                        <Badge variant="secondary">Verified Traveler</Badge>
                        <span className="text-sm text-gray-500">2 hours ago</span>
                      </div>
                      <p className="text-sm text-gray-600">First-time visitor from USA</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Badge>Question</Badge>
                      <Badge variant="outline">Seoul</Badge>
                    </div>
                    <h3 className="font-semibold">Best areas to stay in Seoul for first-time visitors?</h3>
                    <p className="text-gray-700">
                      I'm planning my first trip to Seoul next month and wondering about the best neighborhoods to stay
                      in. I'm interested in being close to tourist attractions, good food, and easy transportation. Any
                      recommendations?
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Heart className="h-4 w-4" />
                        24
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <MessageCircle className="h-4 w-4" />
                        12 replies
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Min-jun Kim</span>
                        <Badge variant="secondary">Local Expert</Badge>
                        <span className="text-sm text-gray-500">4 hours ago</span>
                      </div>
                      <p className="text-sm text-gray-600">Seoul Local Guide</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Badge>Tip</Badge>
                      <Badge variant="outline">Food</Badge>
                      <Badge variant="outline">Budget</Badge>
                    </div>
                    <h3 className="font-semibold">Hidden gem: Best Korean BBQ under $15 per person</h3>
                    <p className="text-gray-700">
                      Found this amazing local BBQ place in Hongdae that most tourists don't know about. Incredible
                      quality meat, unlimited banchan, and the owner speaks English! Perfect for budget travelers who
                      want authentic Korean BBQ experience.
                    </p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm">
                        <strong>Location:</strong> 123 Hongik-ro, Mapo-gu
                      </p>
                      <p className="text-sm">
                        <strong>Hours:</strong> 5 PM - 2 AM daily
                      </p>
                      <p className="text-sm">
                        <strong>Price:</strong> ₩12,000-15,000 per person
                      </p>
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Heart className="h-4 w-4" />
                        67
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <MessageCircle className="h-4 w-4" />
                        23 replies
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>AL</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Anna Lopez</span>
                        <Badge variant="secondary">Frequent Visitor</Badge>
                        <span className="text-sm text-gray-500">6 hours ago</span>
                      </div>
                      <p className="text-sm text-gray-600">K-pop enthusiast from Spain</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Badge>Experience</Badge>
                      <Badge variant="outline">K-pop</Badge>
                      <Badge variant="outline">Concert</Badge>
                    </div>
                    <h3 className="font-semibold">Just attended my first K-pop concert in Seoul! 🎤</h3>
                    <p className="text-gray-700">
                      What an incredible experience! The energy was absolutely amazing. For anyone planning to attend
                      concerts, here are some tips: arrive early for merchandise, bring a portable charger, and learn
                      some fan chants beforehand. The Korean fans were so welcoming and helped me with everything!
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Heart className="h-4 w-4" />
                        89
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <MessageCircle className="h-4 w-4" />
                        31 replies
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Topics */}
            <Card>
              <CardHeader>
                <CardTitle>Trending Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">#SeoulFood</span>
                    <span className="text-xs text-gray-500">234 posts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">#BudgetTravel</span>
                    <span className="text-xs text-gray-500">189 posts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">#KpopConcerts</span>
                    <span className="text-xs text-gray-500">156 posts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">#JejuIsland</span>
                    <span className="text-xs text-gray-500">142 posts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">#TransportationTips</span>
                    <span className="text-xs text-gray-500">98 posts</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Be respectful and helpful to fellow travelers</p>
                  <p>• Share accurate and up-to-date information</p>
                  <p>• Use relevant tags for better discoverability</p>
                  <p>• No spam or promotional content</p>
                  <p>• Report inappropriate content</p>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Read Full Guidelines
                </Button>
              </CardContent>
            </Card>

            {/* Featured Members */}
            <Card>
              <CardHeader>
                <CardTitle>Featured Contributors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JL</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Jenny Lee</p>
                      <p className="text-xs text-gray-500">Seoul Food Expert</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>DK</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">David Kim</p>
                      <p className="text-xs text-gray-500">Transportation Guide</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>EM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Emma Martinez</p>
                      <p className="text-xs text-gray-500">K-culture Enthusiast</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
