import { ArrowLeft, CreditCard, Smartphone, Ticket, MapPin, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Currency Exchange */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>
                Currency Exchange
                <Badge variant="secondary">Best Rates</Badge>
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
              <Button className="w-full">Exchange Now</Button>
            </CardContent>
          </Card>

          {/* Prepaid SIM Cards */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                Prepaid SIM Cards
                <Badge variant="secondary">5G Ready</Badge>
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
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">Data Only - 14 Days</h4>
                      <p className="text-sm text-gray-600">50GB high-speed data</p>
                    </div>
                    <span className="font-bold text-lg">$35</span>
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
              <Button className="w-full">Order SIM Card</Button>
            </CardContent>
          </Card>

          {/* Transportation Tickets */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Ticket className="h-6 w-6 text-purple-600" />
                </div>
                Transportation Tickets
                <Badge variant="secondary">Skip Lines</Badge>
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
                  <Button variant="outline" className="w-full mt-3">
                    Book KTX Ticket
                  </Button>
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

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Airport Transfer</h4>
                  <p className="text-sm text-gray-600 mb-3">Private car or shared shuttle</p>
                  <Button variant="outline" className="w-full">
                    Book Transfer
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Services */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                Additional Services
                <Badge variant="secondary">Popular</Badge>
              </CardTitle>
              <CardDescription>Extra services to enhance your Korean travel experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div>
                    <h4 className="font-semibold">Luggage Storage</h4>
                    <p className="text-sm text-gray-600">Secure storage at key locations</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Book
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div>
                    <h4 className="font-semibold">Pocket WiFi Rental</h4>
                    <p className="text-sm text-gray-600">Unlimited internet on-the-go</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Rent
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div>
                    <h4 className="font-semibold">Travel Insurance</h4>
                    <p className="text-sm text-gray-600">Comprehensive coverage</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Get Quote
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div>
                    <h4 className="font-semibold">Language Translator</h4>
                    <p className="text-sm text-gray-600">Handheld translation device</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Rent
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div>
                    <h4 className="font-semibold">Emergency Assistance</h4>
                    <p className="text-sm text-gray-600">24/7 multilingual support</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

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
