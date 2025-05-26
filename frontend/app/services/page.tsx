import { ArrowLeft, CreditCard, Smartphone, Ticket, MapPin, Shield, Clock, ExternalLink, Wallet, Globe, Luggage, Wifi, HeartPulse, Languages, Hotel, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function ServicesPage() {
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
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Essential Travel Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for a smooth Korean adventure, all in one secure platform
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex justify-center items-center gap-8 mb-12 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Secure & Verified</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Instant Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Pickup Locations</span>
          </div>
        </div>

        {/* Service Tabs */}
        <Tabs defaultValue="featured" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="all">All Services</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
          </TabsList>
          
          {/* Featured Services */}
          <TabsContent value="featured">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Currency Exchange */}
              <Card className="shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Badge variant="secondary" className="backdrop-blur-sm bg-black/10">Best Rates</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-green-600" />
                    </div>
                    Currency Exchange
                  </CardTitle>
                  <CardDescription>Get the best exchange rates with instant quotes and secure transactions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="from-currency">From</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="USD" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD - US Dollar</SelectItem>
                          <SelectItem value="eur">EUR - Euro</SelectItem>
                          <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
                          <SelectItem value="cny">CNY - Chinese Yuan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="to-currency">To</Label>
                      <Select defaultValue="krw">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="krw">KRW - Korean Won</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input id="amount" placeholder="Enter amount" type="number" />
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Exchange Rate:</span>
                      <span className="font-semibold">1 USD = 1,320 KRW</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-600">You'll receive:</span>
                      <span className="font-bold text-lg text-green-600">₩1,320,000</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex gap-2">
                    <Button className="flex-1">Exchange Now</Button>
                    <Link href="/services/exchange" className="flex-1">
                      <Button variant="outline" className="w-full flex items-center gap-1">
                        <span>More Options</span>
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>

              {/* Prepaid SIM Cards */}
              <Card className="shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Badge variant="secondary" className="backdrop-blur-sm bg-black/10">5G Ready</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-blue-600" />
                    </div>
                    Prepaid SIM Cards
                  </CardTitle>
                  <CardDescription>Stay connected with high-speed data plans from major Korean carriers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Tourist Plan - 7 Days</h4>
                          <p className="text-sm text-gray-600">Unlimited data + 100 min calls</p>
                        </div>
                        <span className="font-bold text-lg">$25</span>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Extended Stay - 30 Days</h4>
                          <p className="text-sm text-gray-600">Unlimited data + 300 min calls</p>
                        </div>
                        <span className="font-bold text-lg">$65</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="pickup-location">Pickup Location</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pickup location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="icn">Incheon Airport (ICN)</SelectItem>
                        <SelectItem value="gmp">Gimpo Airport (GMP)</SelectItem>
                        <SelectItem value="seoul-station">Seoul Station</SelectItem>
                        <SelectItem value="myeongdong">Myeongdong Tourist Info</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex gap-2">
                    <Button className="flex-1">Order SIM Card</Button>
                    <Link href="/services/sim" className="flex-1">
                      <Button variant="outline" className="w-full flex items-center gap-1">
                        <span>More Options</span>
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>

              {/* Local Guides */}
              <Card className="shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Badge variant="secondary" className="backdrop-blur-sm bg-black/10">Multilingual</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    Local Guides
                  </CardTitle>
                  <CardDescription>Explore Korea with experienced local guides who speak your language</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Seoul City Explorer</h4>
                          <p className="text-sm text-gray-600">6 hours with local guide, customizable</p>
                        </div>
                        <span className="font-bold text-lg">$120</span>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Food & Market Tour</h4>
                          <p className="text-sm text-gray-600">4 hours, includes 5 food tastings</p>
                        </div>
                        <span className="font-bold text-lg">$85</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-800">
                      Our guides speak English, Chinese, Japanese, Spanish, and more. All guides are certified professionals with extensive knowledge of Korean culture and history.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex gap-2">
                    <Button className="flex-1">Find a Guide</Button>
                    <Link href="/services/local-guide" className="flex-1">
                      <Button variant="outline" className="w-full flex items-center gap-1">
                        <span>View All Tours</span>
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>

              {/* Transportation Tickets */}
              <Card className="shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Badge variant="secondary" className="backdrop-blur-sm bg-black/10">Skip Lines</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Ticket className="h-6 w-6 text-amber-600" />
                    </div>
                    Transportation Tickets
                  </CardTitle>
                  <CardDescription>Book train tickets, subway passes, and airport transfers in advance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">KTX High-Speed Rail</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label htmlFor="departure">From</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Seoul" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="seoul">Seoul Station</SelectItem>
                              <SelectItem value="yongsan">Yongsan Station</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="arrival">To</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Busan" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="busan">Busan Station</SelectItem>
                              <SelectItem value="daegu">Daegu Station</SelectItem>
                              <SelectItem value="gwangju">Gwangju Station</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">T-money Card (Subway Pass)</h4>
                      <p className="text-sm text-gray-600 mb-3">Unlimited subway and bus rides</p>
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          1-Day Pass - $5
                        </Button>
                        <Button variant="outline" className="flex-1">
                          7-Day Pass - $25
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex gap-2">
                    <Button className="flex-1">Book Tickets</Button>
                    <Link href="/services/transport" className="flex-1">
                      <Button variant="outline" className="w-full flex items-center gap-1">
                        <span>More Options</span>
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          {/* All Services */}
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Currency Exchange",
                  description: "Best rates guaranteed with no hidden fees",
                  icon: <Wallet className="h-6 w-6 text-green-600" />,
                  color: "bg-green-100",
                  link: "/services/exchange"
                },
                {
                  title: "SIM Cards & eSIMs",
                  description: "Stay connected with unlimited data plans",
                  icon: <Smartphone className="h-6 w-6 text-blue-600" />,
                  color: "bg-blue-100",
                  link: "/services/sim"
                },
                {
                  title: "Local Guide Service",
                  description: "Explore with knowledgeable local guides",
                  icon: <Users className="h-6 w-6 text-purple-600" />,
                  color: "bg-purple-100",
                  link: "/services/local-guide"
                },
                {
                  title: "Transportation",
                  description: "Train tickets, transfers, and subway passes",
                  icon: <Ticket className="h-6 w-6 text-amber-600" />,
                  color: "bg-amber-100",
                  link: "/services/transport"
                },
                {
                  title: "Luggage Services",
                  description: "Storage, delivery, and airport pickup",
                  icon: <Luggage className="h-6 w-6 text-stone-600" />,
                  color: "bg-stone-100",
                  link: "/services/luggage"
                },
                {
                  title: "Pocket WiFi",
                  description: "Portable WiFi hotspots for unlimited devices",
                  icon: <Wifi className="h-6 w-6 text-sky-600" />,
                  color: "bg-sky-100",
                  link: "/services/wifi"
                },
                {
                  title: "Translation Services",
                  description: "Professional translators and rental devices",
                  icon: <Languages className="h-6 w-6 text-indigo-600" />,
                  color: "bg-indigo-100",
                  link: "/services/translation"
                },
                {
                  title: "Medical Assistance",
                  description: "Emergency support and hospital referrals",
                  icon: <HeartPulse className="h-6 w-6 text-red-600" />,
                  color: "bg-red-100",
                  link: "/services/medical"
                },
                {
                  title: "Accommodation",
                  description: "Handpicked hotels, guesthouses, and homestays",
                  icon: <Hotel className="h-6 w-6 text-emerald-600" />,
                  color: "bg-emerald-100",
                  link: "/services/accommodation"
                },
                {
                  title: "Cultural Experiences",
                  description: "Authentic Korean cultural activities",
                  icon: <Globe className="h-6 w-6 text-pink-600" />,
                  color: "bg-pink-100",
                  link: "/services/experiences"
                }
              ].map((service, index) => (
                <Link href={service.link} key={index} className="block">
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center`}>
                          {service.icon}
                        </div>
                        {service.title}
                      </CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="outline" className="w-full flex items-center justify-between">
                        <span>Learn More</span>
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
          
          {/* Premium Services */}
          <TabsContent value="premium">
            <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-2">Premium Travel Services</h2>
              <p className="text-amber-800 mb-4">
                Exclusive services designed for travelers seeking the ultimate Korean experience
              </p>
              <Badge variant="secondary" className="bg-amber-200 text-amber-900">Members Only</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "VIP Airport Service",
                  description: "Skip all lines with expedited immigration, luggage handling, and private transportation",
                  price: "$150",
                  perks: ["Fast-track immigration", "Priority baggage claim", "Lounge access", "Private transfer"]
                },
                {
                  title: "Private City Tour",
                  description: "Explore Korean cities with a private guide and luxury vehicle at your own pace",
                  price: "$350",
                  perks: ["Customizable itinerary", "Luxury vehicle", "Professional guide", "Skip all lines"]
                },
                {
                  title: "Concierge Service",
                  description: "Personal concierge available 24/7 to handle all your travel needs during your stay",
                  price: "$75/day",
                  perks: ["Restaurant reservations", "Show tickets", "Shopping assistance", "24/7 availability"]
                },
                {
                  title: "Helicopter Tours",
                  description: "See Korea's breathtaking landscapes from above with private helicopter tours",
                  price: "$500",
                  perks: ["Multiple routes available", "Professional pilot", "Photo opportunities", "Champagne service"]
                }
              ].map((service, index) => (
                <Card key={index} className="shadow-lg border-amber-200">
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-amber-100 text-amber-900 hover:bg-amber-200">Premium</Badge>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-xl font-bold">{service.price}</span>
                      <span className="text-gray-500 text-sm">Premium members save 15%</span>
                    </div>
                    <div className="space-y-2">
                      {service.perks.map((perk, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                          <span className="text-sm">{perk}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700">
                      Inquire Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Interested in our premium services? Join our membership program for exclusive access and benefits.</p>
              <Button variant="outline" className="mx-auto">Learn About Membership</Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Support Section */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-6">Our support team is available 24/7 to assist you</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">Live Chat</Button>
              <Button variant="outline">Call Support</Button>
              <Button variant="outline">Email Us</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
