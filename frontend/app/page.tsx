"use client"

import { useState } from "react"
import { ArrowRight, Shield, Users, Globe, CreditCard, Search, MapPin, Calendar, ArrowDownToLine, Star, Bell, LogOut, User as UserIcon, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { RealTimeChat, ChatButton } from "@/components/real-time-chat"
import { WeatherWidget } from "@/components/weather-widget"
import { CurrencyConverter } from "@/components/currency-converter"
import { EmergencyContacts } from "@/components/emergency-contacts"
import { SponsoredContent } from "@/components/sponsored-content"
import { useSession, signOut } from "next-auth/react"
import Link from "next/link"

export default function HomePage() {
  const { data: session, status } = useSession()
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [searchDestination, setSearchDestination] = useState("")
  const [searchDates, setSearchDates] = useState("")

  // Handle sign out for both NextAuth and regular auth
  const handleSignOut = async () => {
    if (session) {
      // NextAuth session
      await signOut({ callbackUrl: "/" })
    } else {
      // Regular auth - clear localStorage token
      localStorage.removeItem("access_token")
      window.location.href = "/"
    }
  }

  // Check if user is authenticated (either NextAuth session or localStorage token)
  const isAuthenticated = () => {
    if (status === "loading") return false
    if (status === "authenticated") return true
    
    // Check localStorage token only on client side
    if (typeof window !== "undefined") {
      return !!localStorage.getItem("access_token")
    }
    
    return false
  }

  const userAuthenticated = isAuthenticated()

  // Get user info for display
  const getUserInfo = () => {
    if (session?.user) {
      return {
        name: session.user.name || "User",
        email: session.user.email || "",
        avatar: session.user.image || undefined
      }
    }
    return {
      name: "User",
      email: "",
      avatar: undefined
    }
  }

  const userInfo = getUserInfo()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold text-gray-900">KoreaTravelHub</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-gray-900 transition-colors">
                Community
              </Link>
              <Link href="/guide" className="text-gray-600 hover:text-gray-900 transition-colors">
                Travel Guide
              </Link>
              
              {/* Conditional Navigation based on authentication */}
              {userAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                  </Button>
                  {/* Temporary Sign Out Button for Testing */}
                  <Button variant="outline" onClick={handleSignOut} className="text-red-600 border-red-200 hover:bg-red-50">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out (Test)
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={userInfo.avatar} />
                          <AvatarFallback>
                            {userInfo.name.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard">
                          <UserIcon className="mr-2 h-4 w-4" />
                          <span>Dashboard</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleSignOut}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Sign out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <>
                  <Link href="/auth/signin">
                    <Button variant="outline">Sign In</Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button>Get Started</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background design elements */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red-500 filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-72 h-72 rounded-full bg-blue-500 filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Hero Content */}
            <div className="lg:col-span-2">
              <div className="max-w-3xl">
                <Badge variant="outline" className="mb-4 text-red-600 border-red-200 bg-red-50">
                  Your Ultimate Korea Travel Companion
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Discover the Soul of
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                    {" "}South Korea
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Everything you need for an amazing Korean adventure. From essential services to local insights, 
                  we connect you with authentic experiences and trusted information.
                </p>
                
                {/* Enhanced Search Box */}
                <Card className="mb-8 shadow-lg border-0">
                  <CardContent className="p-0">
                    <Tabs defaultValue="experiences" className="w-full">
                      <TabsList className="w-full rounded-t-lg h-14 bg-gray-50">
                        <TabsTrigger value="experiences" className="flex-1 h-full">Experiences</TabsTrigger>
                        <TabsTrigger value="guides" className="flex-1 h-full">Local Guides</TabsTrigger>
                        <TabsTrigger value="services" className="flex-1 h-full">Services</TabsTrigger>
                      </TabsList>
                      
                      {/* Experience Search */}
                      <TabsContent value="experiences" className="mt-0 p-4">
                        <div className="flex flex-col md:flex-row gap-3">
                          <div className="relative flex-1">
                            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input 
                              placeholder="Where in Korea?"
                              className="pl-10"
                              value={searchDestination}
                              onChange={e => setSearchDestination(e.target.value)}
                            />
                          </div>
                          <div className="relative md:w-40">
                            <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input 
                              type="date"
                              className="pl-10"
                              value={searchDates}
                              onChange={e => setSearchDates(e.target.value)}
                            />
                          </div>
                          <Link href={`/experiences?location=${searchDestination}&date=${searchDates}`}>
                            <Button className="w-full md:w-auto">
                              <Search className="h-4 w-4 mr-2" /> Find Experiences
                            </Button>
                          </Link>
                        </div>
                      </TabsContent>
                      
                      {/* Guide Search */}
                      <TabsContent value="guides" className="mt-0 p-4">
                        <div className="flex flex-col md:flex-row gap-3">
                          <div className="relative flex-1">
                            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input placeholder="City or region" className="pl-10" />
                          </div>
                          <Select>
                            <SelectTrigger className="md:w-40">
                              <SelectValue placeholder="Language" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="english">English</SelectItem>
                              <SelectItem value="chinese">Chinese</SelectItem>
                              <SelectItem value="japanese">Japanese</SelectItem>
                              <SelectItem value="spanish">Spanish</SelectItem>
                            </SelectContent>
                          </Select>
                          <Link href="/services/local-guide">
                            <Button className="w-full md:w-auto">
                              <Search className="h-4 w-4 mr-2" /> Find Guides
                            </Button>
                          </Link>
                        </div>
                      </TabsContent>
                      
                      {/* Service Search */}
                      <TabsContent value="services" className="mt-0 p-4">
                        <div className="flex flex-col md:flex-row gap-3">
                          <div className="flex-1">
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="exchange">Currency Exchange</SelectItem>
                                <SelectItem value="sim">SIM Cards</SelectItem>
                                <SelectItem value="transport">Transportation</SelectItem>
                                <SelectItem value="accommodation">Accommodation</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Link href="/services">
                            <Button className="w-full md:w-auto">
                              <Search className="h-4 w-4 mr-2" /> Browse Services
                            </Button>
                          </Link>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/planning/custom">
                    <Button size="lg" className="text-lg px-8 py-6">
                      Custom Travel Plan <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/community">
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                      Join Community
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Widgets */}
            <div className="space-y-6">
              <WeatherWidget />
              <CurrencyConverter />
              
              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ArrowDownToLine className="h-5 w-5 text-red-500" />
                    Travel Guide PDF
                  </CardTitle>
                  <CardDescription>Free comprehensive guide</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Our 50-page guide covers everything from transportation to cultural etiquette.
                  </p>
                  <Button variant="outline" className="w-full bg-white hover:bg-white">
                    Download Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Top Experiences Carousel */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Top Experiences</h2>
            <Link href="/experiences">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent>
              {['K-Pop Dance Class', 'Temple Stay Experience', 'Korean Cooking Class', 'Seoul Night Tour', 'Jeju Island Hiking'].map((exp, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                    <div className={`h-48 bg-gradient-to-r ${
                      index % 5 === 0 ? 'from-purple-500 to-pink-500' : 
                      index % 5 === 1 ? 'from-blue-500 to-purple-500' : 
                      index % 5 === 2 ? 'from-green-500 to-blue-500' : 
                      index % 5 === 3 ? 'from-yellow-500 to-red-500' : 
                      'from-red-500 to-orange-500'
                    } rounded-t-lg`}></div>
                    <CardContent className="p-4">
                      <Badge className="mb-2">{
                        index % 5 === 0 ? 'K-pop' : 
                        index % 5 === 1 ? 'Culture' : 
                        index % 5 === 2 ? 'Food' : 
                        index % 5 === 3 ? 'City' : 
                        'Nature'
                      }</Badge>
                      <h3 className="font-semibold text-lg mb-1">{exp}</h3>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{4.7 + (index * 0.1) % 0.3}</span>
                        <span className="text-gray-500 text-sm">({50 + index * 20})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold">${30 + index * 15}</span>
                        <Button size="sm">Book Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>
      
      {/* Community Highlights */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Community Highlights</h2>
              <p className="text-gray-600">Recent conversations from our travel community</p>
            </div>
            <Link href="/community">
              <Button variant="outline">Join Community</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">
                          {i === 1 ? 'Sarah Johnson' : i === 2 ? 'Min-jun Kim' : 'Anna Lopez'}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {i === 1 ? 'Traveler' : i === 2 ? 'Local Expert' : 'K-pop Fan'}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-2">
                    <Badge>
                      {i === 1 ? 'Question' : i === 2 ? 'Tip' : 'Experience'}
                    </Badge>
                    <Badge variant="outline">
                      {i === 1 ? 'Seoul' : i === 2 ? 'Food' : 'K-pop'}
                    </Badge>
                  </div>
                  <h3 className="font-semibold">
                    {i === 1 ? 'Best areas to stay in Seoul?' : 
                    i === 2 ? 'Hidden gem Korean BBQ spot' : 
                    'My first K-pop concert experience!'}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {i === 1 ? 'I\'m planning my first trip to Seoul next month and wondering about the best neighborhoods to stay in...' : 
                    i === 2 ? 'Found this amazing local BBQ place in Hongdae that most tourists don\'t know about...' : 
                    'What an incredible experience! The energy was absolutely amazing. For anyone planning to attend...'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sponsored Banner */}
      <SponsoredContent type="banner" className="container mx-auto my-10 px-4" />
      
      {/* Trust Indicators */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Verified Information</h3>
              <p className="text-gray-600 text-sm">All content verified by local experts and updated regularly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Active Community</h3>
              <p className="text-gray-600 text-sm">Connect with fellow travelers and locals for real-time tips</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock assistance in multiple languages</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure Transactions</h3>
              <p className="text-gray-600 text-sm">Safe and secure payment processing for all services</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Chat Components */}
      {isChatOpen ? (
        <RealTimeChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      ) : (
        <ChatButton onClick={() => setIsChatOpen(true)} />
      )}
    </div>
  )
}
