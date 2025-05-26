import { Calendar, MapPin, CreditCard, Bell, Settings, Heart, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold text-gray-900">KoreaTravelHub</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Manage your Korean travel plans and bookings</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Bookings</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Trip Days</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Clock className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Spent</p>
                  <p className="text-2xl font-bold">$1,247</p>
                </div>
                <CreditCard className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Saved Items</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <Heart className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="bookings" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>SIM Card - Tourist Plan</CardTitle>
                    <Badge className="bg-green-100 text-green-800">Confirmed</Badge>
                  </div>
                  <CardDescription>7 days unlimited data + 100 min calls</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>Pickup: March 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>Incheon Airport (ICN)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CreditCard className="h-4 w-4 text-gray-500" />
                      <span>$25.00</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" className="mr-2">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Download QR
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>K-Pop Dance Class</CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">Upcoming</Badge>
                  </div>
                  <CardDescription>Learn choreography from your favorite K-pop songs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>March 17, 2024 at 2:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>Hongdae, Seoul</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CreditCard className="h-4 w-4 text-gray-500" />
                      <span>$45.00</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" className="mr-2">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Street Food Tour</CardTitle>
                    <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                  </div>
                  <CardDescription>Taste authentic Korean street food with a local guide</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>March 19, 2024 at 6:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>Myeongdong, Seoul</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CreditCard className="h-4 w-4 text-gray-500" />
                      <span>$75.00</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" className="mr-2">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Contact Guide
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Itinerary Tab */}
          <TabsContent value="itinerary" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Korean Adventure</CardTitle>
                <CardDescription>March 15-26, 2024 • 12 days in Seoul</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      day: 1,
                      date: "Mar 15",
                      activities: ["Arrive at ICN Airport", "Check into hotel", "Explore Myeongdong"],
                    },
                    {
                      day: 2,
                      date: "Mar 16",
                      activities: ["Gyeongbokgung Palace", "Bukchon Hanok Village", "Insadong shopping"],
                    },
                    {
                      day: 3,
                      date: "Mar 17",
                      activities: ["K-Pop Dance Class", "Hongdae nightlife", "Korean BBQ dinner"],
                    },
                    {
                      day: 4,
                      date: "Mar 18",
                      activities: ["N Seoul Tower", "Namsan Park", "Traditional tea ceremony"],
                    },
                    {
                      day: 5,
                      date: "Mar 19",
                      activities: ["Street Food Tour", "Dongdaemun shopping", "Han River walk"],
                    },
                  ].map((day) => (
                    <div key={day.day} className="border-l-4 border-red-500 pl-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {day.day}
                        </div>
                        <h4 className="font-semibold">
                          Day {day.day} - {day.date}
                        </h4>
                      </div>
                      <ul className="space-y-1 ml-11">
                        {day.activities.map((activity, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t">
                  <Button>Add Activity</Button>
                  <Button variant="outline" className="ml-2">
                    Edit Itinerary
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Jeju Island Day Trip",
                  type: "Experience",
                  price: "$120",
                  image: "from-green-500 to-blue-500",
                },
                {
                  title: "Korean Cooking Class",
                  type: "Experience",
                  price: "$60",
                  image: "from-orange-500 to-red-500",
                },
                { title: "DMZ Tour", type: "Tour", price: "$110", image: "from-blue-500 to-purple-500" },
                { title: "Hanbok Rental", type: "Service", price: "$25", image: "from-pink-500 to-purple-500" },
                { title: "Temple Stay", type: "Experience", price: "$80", image: "from-green-600 to-teal-600" },
                {
                  title: "Busan KTX Ticket",
                  type: "Transportation",
                  price: "$45",
                  image: "from-indigo-500 to-blue-500",
                },
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className={`h-32 bg-gradient-to-r ${item.image} rounded-t-lg`}></div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">{item.price}</span>
                      <div className="space-x-2">
                        <Button size="sm">Book Now</Button>
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Reviews</CardTitle>
                <CardDescription>Share your experiences to help other travelers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">K-Pop Dance Class</h4>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-yellow-400">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Amazing experience! The instructor was so patient and the choreography was fun to learn. Highly
                      recommend for any K-pop fan visiting Seoul.
                    </p>
                    <div className="text-xs text-gray-500">Reviewed on March 18, 2024</div>
                  </div>

                  <div className="border rounded-lg p-4 border-dashed">
                    <h4 className="font-semibold mb-2">Street Food Tour</h4>
                    <p className="text-sm text-gray-600 mb-3">You haven't reviewed this experience yet.</p>
                    <Button size="sm">Write Review</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg?height=64&width=64" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">John Doe</h3>
                      <p className="text-sm text-gray-600">john.doe@example.com</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Change Photo
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">Phone Number</label>
                      <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Nationality</label>
                      <p className="text-sm text-gray-600">United States</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Emergency Contact</label>
                      <p className="text-sm text-gray-600">Jane Doe - +1 (555) 987-6543</p>
                    </div>
                  </div>
                  <Button>Edit Profile</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Travel Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Interests</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">K-pop</Badge>
                      <Badge variant="secondary">Food</Badge>
                      <Badge variant="secondary">Culture</Badge>
                      <Badge variant="secondary">Shopping</Badge>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Budget Range</label>
                    <p className="text-sm text-gray-600">Mid-range ($100-200/day)</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Accommodation Type</label>
                    <p className="text-sm text-gray-600">Hotels</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Language</label>
                    <p className="text-sm text-gray-600">English</p>
                  </div>
                  <Button variant="outline">Update Preferences</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
