"use client"

import { useState } from "react"
import { ArrowLeft, Calendar, Clock, MapPin, Ticket, Smartphone, CreditCard, Check, ArrowUpRight, Bell, Settings, LogOut, User, Heart, History, Star, AlertCircle, FileText, MoreHorizontal, Download, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { mockBookings } from "@/lib/mock-data"

export default function DashboardPage() {
  const [filter, setFilter] = useState("all")

  // 필터링된 예약 목록
  const filteredBookings = filter === "all" 
    ? mockBookings 
    : mockBookings.filter(booking => booking.status === filter)

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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* 상단 요약 정보 */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
              <p className="text-gray-600">Welcome back, John! Manage your bookings and travel plans.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                View Travel Calendar
              </Button>
              <Link href="/planning">
                <Button>
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Plan New Trip
                </Button>
              </Link>
            </div>
          </div>

          {/* 여행 상태 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-white rounded-full mb-3">
                    <Calendar className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="font-bold text-2xl">2</h3>
                  <p className="text-gray-600">Upcoming Trips</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-white rounded-full mb-3">
                    <Ticket className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="font-bold text-2xl">5</h3>
                  <p className="text-gray-600">Active Bookings</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-white rounded-full mb-3">
                    <CreditCard className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="font-bold text-2xl">₩350K</h3>
                  <p className="text-gray-600">Credits Available</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-white rounded-full mb-3">
                    <Star className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="font-bold text-2xl">Gold</h3>
                  <p className="text-gray-600">Member Status</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 다가오는 여행 카드 */}
          <Card className="mb-8 border-0 shadow-sm">
            <CardHeader className="border-b bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Upcoming Trip</CardTitle>
                  <CardDescription>Your next travel plans</CardDescription>
                </div>
                <Button variant="outline" size="sm">View All Trips</Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-6 border-b">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg overflow-hidden w-24 h-24 bg-gradient-to-r from-red-400 to-red-600 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg mb-1">Seoul & Busan Adventure</h3>
                        <div className="flex items-center gap-2 text-gray-600 mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>May 15 - May 22, 2024</span>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">7 days until trip</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline">Seoul</Badge>
                      <Badge variant="outline">Busan</Badge>
                      <Badge variant="outline">Culture</Badge>
                      <Badge variant="outline">Food</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <FileText className="mr-1 h-4 w-4" />
                        View Itinerary
                      </Button>
                      <Button size="sm">
                        <Check className="mr-1 h-4 w-4" />
                        Check-in
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-blue-50">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-blue-700">
                    <strong>Travel Alert:</strong> Check our updated health guidelines before traveling.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 예약 목록 */}
          <div className="mb-8">
            <Tabs defaultValue="bookings" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="bookings">My Bookings</TabsTrigger>
                <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              
              <TabsContent value="bookings">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Active Reservations</h3>
                  <div className="flex items-center gap-2">
                    <Select value={filter} onValueChange={setFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Filter" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Bookings</SelectItem>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="upcoming">Upcoming</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {filteredBookings.map((booking) => (
                    <Card key={booking.id} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-3 bg-gradient-to-b from-red-500 to-red-600"></div>
                        <div className="p-4 sm:p-6 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-semibold text-lg">{booking.title}</h3>
                                    <Badge variant={
                                      booking.status === 'confirmed' ? 'default' : 
                                      booking.status === 'pending' ? 'secondary' : 
                                      'outline'
                                    }>
                                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-gray-600 mb-3">
                                    {booking.description}
                                  </p>
                                </div>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <MoreHorizontal className="h-5 w-5" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem>View Details</DropdownMenuItem>
                                    <DropdownMenuItem>Contact Provider</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-600">Cancel Booking</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                              
                              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4 text-gray-400" />
                                  <span>{booking.serviceDate}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4 text-gray-400" />
                                  <span>{booking.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <CreditCard className="h-4 w-4 text-gray-400" />
                                  <span>${booking.price.toFixed(2)}</span>
                                </div>
                                {booking.provider && (
                                  <div className="flex items-center gap-1">
                                    <Building className="h-4 w-4 text-gray-400" />
                                    <span>{booking.provider}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            <div className="flex flex-row sm:flex-col gap-2 justify-end">
                              <Button size="sm">
                                {booking.type === 'sim-card' ? (
                                  <>
                                    <Download className="mr-1 h-4 w-4" />
                                    QR Code
                                  </>
                                ) : (
                                  <>
                                    <Ticket className="mr-1 h-4 w-4" />
                                    E-Ticket
                                  </>
                                )}
                              </Button>
                              <Button variant="outline" size="sm">Details</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="wishlist">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <Card key={item} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative">
                        <div className="h-48 bg-gradient-to-r from-gray-300 to-gray-400"></div>
                        <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 text-red-500 rounded-full">
                          <Heart className="h-5 w-5 fill-current" />
                        </Button>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-1">
                          {item === 1 ? 'Jeju Island Hiking Tour' : 
                           item === 2 ? 'K-Pop Dance Workshop' : 
                           item === 3 ? 'Traditional Hanbok Experience' : 
                           'Seoul Night Food Tour'}
                        </h3>
                        <div className="flex items-center gap-1 mb-3">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-medium">{4.7 + (item * 0.1) % 0.3}</span>
                          <span className="text-gray-500 text-sm">({50 + item * 20} reviews)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-bold">${30 + item * 15}</span>
                          <Button size="sm">Book Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="history">
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <Card key={item} className="overflow-hidden border-0 shadow-sm">
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-3 bg-gradient-to-b from-gray-300 to-gray-400"></div>
                        <div className="p-4 sm:p-6 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-1">
                                {item === 1 ? 'Seoul City Tour' : 
                                 item === 2 ? 'Korea SIM Card' : 
                                 'Korean Cooking Class'}
                              </h3>
                              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm mb-3">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4 text-gray-400" />
                                  <span>
                                    {item === 1 ? 'Jan 15, 2024' : 
                                     item === 2 ? 'Feb 02, 2024' : 
                                     'Feb 28, 2024'}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4 text-gray-400" />
                                  <span>
                                    {item === 1 ? 'Seoul' : 
                                     item === 2 ? 'Incheon Airport' : 
                                     'Hongdae, Seoul'}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <CreditCard className="h-4 w-4 text-gray-400" />
                                  <span>${item === 1 ? '65.00' : item === 2 ? '25.00' : '45.00'}</span>
                                </div>
                              </div>
                              <Badge variant="outline">Completed</Badge>
                            </div>
                            
                            <div className="flex flex-row sm:flex-col gap-2 justify-end">
                              <Button variant="outline" size="sm">
                                <History className="mr-1 h-4 w-4" />
                                Receipt
                              </Button>
                              <Button size="sm">
                                <Star className="mr-1 h-4 w-4" />
                                Review
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* 추천 서비스 */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recommended for You</h3>
              <Button variant="link">View All</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-r from-blue-400 to-blue-600 p-6 flex items-end">
                  <div>
                    <Badge className="bg-white/90 text-blue-700 hover:bg-white/90 mb-2">Limited Offer</Badge>
                    <h3 className="text-xl font-bold text-white">4G/5G SIM Cards</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600 mb-3">
                    Stay connected with high-speed data during your entire stay in Korea.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">From $25</span>
                    <Link href="/services/sim">
                      <Button size="sm">Get a SIM</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-r from-green-400 to-green-600 p-6 flex items-end">
                  <div>
                    <Badge className="bg-white/90 text-green-700 hover:bg-white/90 mb-2">Best Rate</Badge>
                    <h3 className="text-xl font-bold text-white">Currency Exchange</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600 mb-3">
                    Exchange your currency to Korean won at the best rates, with no hidden fees.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Save up to 5%</span>
                    <Link href="/services/exchange">
                      <Button size="sm">Exchange</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-r from-purple-400 to-purple-600 p-6 flex items-end">
                  <div>
                    <Badge className="bg-white/90 text-purple-700 hover:bg-white/90 mb-2">New</Badge>
                    <h3 className="text-xl font-bold text-white">Local Guides</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600 mb-3">
                    Explore Korea with a knowledgeable local guide who speaks your language.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">From $45/hour</span>
                    <Link href="/services/local-guide">
                      <Button size="sm">Find Guides</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
