import { ArrowLeft, MapPin, Utensils, ShoppingBag, Heart, Music, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function GuidePage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Complete Travel Guide</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know for an amazing Korean adventure, curated by local experts
          </p>
        </div>

        <Tabs defaultValue="tourism" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="tourism">Tourism</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
            <TabsTrigger value="shopping">Shopping</TabsTrigger>
            <TabsTrigger value="culture">K-Culture</TabsTrigger>
            <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
            <TabsTrigger value="practical">Practical</TabsTrigger>
          </TabsList>

          {/* Tourism Tab */}
          <TabsContent value="tourism" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <CardTitle>Seoul Must-Visits</CardTitle>
                  </div>
                  <CardDescription>Essential attractions in the capital city</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Gyeongbokgung Palace</span>
                      <Badge variant="secondary">Historical</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Bukchon Hanok Village</span>
                      <Badge variant="secondary">Cultural</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">N Seoul Tower</span>
                      <Badge variant="secondary">Landmark</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Hongdae District</span>
                      <Badge variant="secondary">Nightlife</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Seoul Spots
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-green-600" />
                    <CardTitle>Jeju Island</CardTitle>
                  </div>
                  <CardDescription>Natural beauty and unique experiences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Hallasan National Park</span>
                      <Badge variant="secondary">Nature</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Seongsan Ilchulbong</span>
                      <Badge variant="secondary">UNESCO</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Manjanggul Cave</span>
                      <Badge variant="secondary">Adventure</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Jungmun Beach</span>
                      <Badge variant="secondary">Beach</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Explore Jeju
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-purple-600" />
                    <CardTitle>Busan Highlights</CardTitle>
                  </div>
                  <CardDescription>Coastal city with beaches and culture</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Gamcheon Culture Village</span>
                      <Badge variant="secondary">Colorful</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Haeundae Beach</span>
                      <Badge variant="secondary">Beach</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Jagalchi Fish Market</span>
                      <Badge variant="secondary">Food</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Beomeosa Temple</span>
                      <Badge variant="secondary">Temple</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Discover Busan
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Travel Tips for Tourism</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Spring (April-May) and Fall (September-November) offer the best weather and beautiful scenery.
                    </p>

                    <h4 className="font-semibold mb-2">Transportation</h4>
                    <p className="text-sm text-gray-600">
                      Get a T-money card for seamless subway and bus travel. KTX trains connect major cities
                      efficiently.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cultural Etiquette</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Bow when greeting, remove shoes when entering homes, and use both hands when receiving items.
                    </p>

                    <h4 className="font-semibold mb-2">Language</h4>
                    <p className="text-sm text-gray-600">
                      Download translation apps. Many signs have English, especially in tourist areas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Food Tab */}
          <TabsContent value="food" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-red-600" />
                    <CardTitle>Must-Try Dishes</CardTitle>
                  </div>
                  <CardDescription>Essential Korean foods for every traveler</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Korean BBQ (Galbi)</span>
                      <Badge variant="secondary">Meat</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Bibimbap</span>
                      <Badge variant="secondary">Rice Bowl</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Kimchi Jjigae</span>
                      <Badge variant="secondary">Stew</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Bulgogi</span>
                      <Badge variant="secondary">Beef</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Tteokbokki</span>
                      <Badge variant="secondary">Street Food</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Food Guide
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    <CardTitle>Best Food Areas</CardTitle>
                  </div>
                  <CardDescription>Top neighborhoods for food exploration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Myeongdong</span>
                      <Badge variant="secondary">Street Food</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Gangnam</span>
                      <Badge variant="secondary">Fine Dining</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Hongdae</span>
                      <Badge variant="secondary">Trendy</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Insadong</span>
                      <Badge variant="secondary">Traditional</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Itaewon</span>
                      <Badge variant="secondary">International</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Find Restaurants
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-green-600" />
                    <CardTitle>Dietary Options</CardTitle>
                  </div>
                  <CardDescription>Options for special dietary needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Vegetarian Restaurants</span>
                      <Badge variant="secondary">Plant-based</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Halal Food</span>
                      <Badge variant="secondary">Muslim-friendly</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Gluten-Free Options</span>
                      <Badge variant="secondary">Celiac-safe</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Vegan Cafes</span>
                      <Badge variant="secondary">100% Vegan</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Special Diets
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Food Culture Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Dining Etiquette</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Wait for the eldest to start eating, don't stick chopsticks upright in rice, and it's polite to
                      pour drinks for others.
                    </p>

                    <h4 className="font-semibold mb-2">Ordering Tips</h4>
                    <p className="text-sm text-gray-600">
                      Many restaurants have picture menus. Use translation apps or point to what others are eating.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Payment</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Most places accept cards. Tipping is not expected in Korea.
                    </p>

                    <h4 className="font-semibold mb-2">Spice Levels</h4>
                    <p className="text-sm text-gray-600">
                      Korean food can be spicy. Ask for "덜 맵게" (deol maepge) for less spicy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Shopping Tab */}
          <TabsContent value="shopping" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5 text-purple-600" />
                    <CardTitle>Shopping Districts</CardTitle>
                  </div>
                  <CardDescription>Best areas for retail therapy</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Myeongdong</span>
                      <Badge variant="secondary">Cosmetics</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Gangnam COEX Mall</span>
                      <Badge variant="secondary">Luxury</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Hongdae</span>
                      <Badge variant="secondary">Trendy</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Dongdaemun</span>
                      <Badge variant="secondary">Fashion</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Insadong</span>
                      <Badge variant="secondary">Traditional</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Shopping Guide
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-pink-600" />
                    <CardTitle>K-Beauty & Fashion</CardTitle>
                  </div>
                  <CardDescription>Korean cosmetics and fashion trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Olive Young</span>
                      <Badge variant="secondary">Drugstore</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Sephora Korea</span>
                      <Badge variant="secondary">Premium</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Stylenanda</span>
                      <Badge variant="secondary">Fashion</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Aland</span>
                      <Badge variant="secondary">Streetwear</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Beauty Guide
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <CardTitle>Markets & Malls</CardTitle>
                  </div>
                  <CardDescription>Traditional markets and modern shopping</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Namdaemun Market</span>
                      <Badge variant="secondary">Traditional</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Lotte World Mall</span>
                      <Badge variant="secondary">Modern</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Express Bus Terminal</span>
                      <Badge variant="secondary">Underground</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Noryangjin Market</span>
                      <Badge variant="secondary">Seafood</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Market Guide
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* K-Culture Tab */}
          <TabsContent value="culture" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Music className="h-5 w-5 text-purple-600" />
                    <CardTitle>K-Pop Experiences</CardTitle>
                  </div>
                  <CardDescription>Live the K-pop dream</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Concert Venues</span>
                      <Badge variant="secondary">Live Shows</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Dance Classes</span>
                      <Badge variant="secondary">Learn</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Recording Studios</span>
                      <Badge variant="secondary">Experience</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Fan Cafes</span>
                      <Badge variant="secondary">Community</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    K-Pop Guide
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-red-600" />
                    <CardTitle>Traditional Culture</CardTitle>
                  </div>
                  <CardDescription>Experience authentic Korean heritage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Hanbok Rental</span>
                      <Badge variant="secondary">Costume</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Tea Ceremony</span>
                      <Badge variant="secondary">Ritual</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Calligraphy Class</span>
                      <Badge variant="secondary">Art</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Temple Stay</span>
                      <Badge variant="secondary">Spiritual</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Cultural Experiences
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-pink-600" />
                    <CardTitle>K-Drama Locations</CardTitle>
                  </div>
                  <CardDescription>Visit famous filming spots</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Nami Island</span>
                      <Badge variant="secondary">Winter Sonata</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Dae Jang Geum Park</span>
                      <Badge variant="secondary">Historical</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Banpo Bridge</span>
                      <Badge variant="secondary">Romance</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Petite France</span>
                      <Badge variant="secondary">European</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Drama Tours
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Healthcare Tab */}
          <TabsContent value="healthcare" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Emergency Information</CardTitle>
                  <CardDescription>Important numbers and procedures</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Emergency Numbers</h4>
                      <div className="space-y-1 text-sm">
                        <p>
                          <strong>Emergency:</strong> 119 (Fire/Ambulance)
                        </p>
                        <p>
                          <strong>Police:</strong> 112
                        </p>
                        <p>
                          <strong>Tourist Hotline:</strong> 1330
                        </p>
                        <p>
                          <strong>Medical Emergency:</strong> 1339
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What to Do</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Keep your passport and insurance info handy</li>
                        <li>• Download translation apps for medical terms</li>
                        <li>• Know your hotel address in Korean</li>
                        <li>• Contact your embassy if needed</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Hospitals & Clinics</CardTitle>
                  <CardDescription>English-speaking medical facilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="border rounded-lg p-3">
                      <h4 className="font-semibold">Seoul National University Hospital</h4>
                      <p className="text-sm text-gray-600">International clinic with English staff</p>
                      <p className="text-xs text-gray-500">Jongno-gu, Seoul</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-semibold">Severance Hospital</h4>
                      <p className="text-sm text-gray-600">International healthcare center</p>
                      <p className="text-xs text-gray-500">Seodaemun-gu, Seoul</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-semibold">Samsung Medical Center</h4>
                      <p className="text-sm text-gray-600">Advanced medical care</p>
                      <p className="text-xs text-gray-500">Gangnam-gu, Seoul</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Find Nearby Hospitals
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Health Tips for Travelers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Before You Go</h4>
                    <ul className="text-sm text-gray-600 space-y-1 mb-4">
                      <li>• Get travel insurance with medical coverage</li>
                      <li>• Bring prescription medications in original containers</li>
                      <li>• Check if vaccinations are needed</li>
                      <li>• Carry a medical information card</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Common Issues</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Air pollution - consider masks</li>
                      <li>• Spicy food sensitivity</li>
                      <li>• Jet lag and fatigue</li>
                      <li>• Seasonal allergies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Practical Tab */}
          <TabsContent value="practical" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Money & Banking</CardTitle>
                  <CardDescription>Financial essentials for travelers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm">Currency</h4>
                      <p className="text-sm text-gray-600">Korean Won (KRW)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">ATMs</h4>
                      <p className="text-sm text-gray-600">Available at convenience stores, banks</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Cards</h4>
                      <p className="text-sm text-gray-600">Widely accepted, especially Visa/Mastercard</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Tipping</h4>
                      <p className="text-sm text-gray-600">Not expected in Korea</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Communication</CardTitle>
                  <CardDescription>Stay connected during your trip</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm">WiFi</h4>
                      <p className="text-sm text-gray-600">Free in most cafes, hotels, subway</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">SIM Cards</h4>
                      <p className="text-sm text-gray-600">Available at airports and stores</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Useful Apps</h4>
                      <p className="text-sm text-gray-600">Papago, Citymapper, KakaoMap</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Language</h4>
                      <p className="text-sm text-gray-600">English in tourist areas, learn basic Korean</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Transportation</CardTitle>
                  <CardDescription>Getting around Korea efficiently</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm">Subway</h4>
                      <p className="text-sm text-gray-600">Efficient, clean, English announcements</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Buses</h4>
                      <p className="text-sm text-gray-600">Extensive network, use T-money card</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Taxis</h4>
                      <p className="text-sm text-gray-600">Regular, deluxe, and international taxis</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">KTX Trains</h4>
                      <p className="text-sm text-gray-600">High-speed rail between major cities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Essential Korean Phrases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Basic Greetings</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Hello</span>
                        <span className="text-gray-600">안녕하세요 (Annyeonghaseyo)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Thank you</span>
                        <span className="text-gray-600">감사합니다 (Gamsahamnida)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Excuse me</span>
                        <span className="text-gray-600">실례합니다 (Sillyehamnida)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sorry</span>
                        <span className="text-gray-600">죄송합니다 (Joesonghamnida)</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Useful Phrases</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Do you speak English?</span>
                        <span className="text-gray-600">영어 하세요? (Yeongeo haseyo?)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>How much?</span>
                        <span className="text-gray-600">얼마예요? (Eolmayeyo?)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Where is...?</span>
                        <span className="text-gray-600">어디예요? (Eodiyeyo?)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Help!</span>
                        <span className="text-gray-600">도와주세요! (Dowajuseyo!)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
