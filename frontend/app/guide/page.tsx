"use client"

import { useState } from "react"
import { 
  ArrowLeft, Search, MapPin, Languages, CreditCard, Camera, Info, ExternalLink, BookOpen, 
  Clock, CalendarDays, Shield, Utensils, Train, Coffee, Hotel, Navigation, Smartphone, 
  AlertCircle, Heart, Star, Flame, Wine, Car, ShoppingBag, ShoppingCart, Check, Phone, 
  Banknote, Wallet, Music, X, Tag, Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { SponsoredContent } from "@/components/sponsored-content"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"

export default function GuidePage() {
  const [searchQuery, setSearchQuery] = useState("")

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
              <Button variant="outline">Sign In</Button>
              <Button>Download Guide</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 헤더 */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h1 className="text-4xl font-bold mb-3">Korea Travel Guide</h1>
              <p className="text-white/90 max-w-lg">
                Comprehensive information for travelers to South Korea. Everything you need to know for a smooth and enjoyable trip.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search the guide..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full md:w-80"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        </div>

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="essentials" className="w-full">
            <TabsList className="w-full mb-8 h-14 bg-white border">
              <TabsTrigger value="essentials" className="flex-1 h-full">Essentials</TabsTrigger>
              <TabsTrigger value="destinations" className="flex-1 h-full">Destinations</TabsTrigger>
              <TabsTrigger value="food" className="flex-1 h-full">Food & Dining</TabsTrigger>
              <TabsTrigger value="transport" className="flex-1 h-full">Transportation</TabsTrigger>
              <TabsTrigger value="culture" className="flex-1 h-full">Culture</TabsTrigger>
              <TabsTrigger value="safety" className="flex-1 h-full">Safety & Health</TabsTrigger>
              <TabsTrigger value="shopping" className="flex-1 h-full">Shopping</TabsTrigger>
          </TabsList>

            {/* 필수 정보 탭 */}
            <TabsContent value="essentials" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  {/* 비자 및 입국 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-red-500" />
                        Visa & Entry Requirements
                      </CardTitle>
                      <CardDescription>Important information about entering Korea</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg">
                        <div className="flex items-start gap-2">
                          <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-blue-700">
                            As of 2024, citizens from 112 countries can enter South Korea without a visa for tourism or short-term business for up to 30-90 days, depending on nationality.
                          </p>
                  </div>
                      </div>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="visa-free">
                          <AccordionTrigger>Visa-Free Entry</AccordionTrigger>
                          <AccordionContent className="text-gray-700">
                            <p className="mb-2">Major countries with visa-free entry include:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>United States (90 days)</li>
                              <li>Canada (180 days)</li>
                              <li>European Union countries (90 days)</li>
                              <li>United Kingdom (90 days)</li>
                              <li>Australia (90 days)</li>
                              <li>New Zealand (90 days)</li>
                              <li>Japan (90 days)</li>
                            </ul>
                            <p className="mt-2 text-sm text-gray-500">Always check the latest requirements as policies may change.</p>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="visa-required">
                          <AccordionTrigger>Countries Requiring Visa</AccordionTrigger>
                          <AccordionContent className="text-gray-700">
                            <p className="mb-2">Citizens from these countries (among others) need a visa:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>China</li>
                              <li>India</li>
                              <li>Vietnam</li>
                              <li>Philippines</li>
                              <li>Most African and Middle Eastern countries</li>
                            </ul>
                            <p className="mt-2">Visa applications can be made at Korean embassies or consulates.</p>
                            <Link href="https://www.visa.go.kr/" target="_blank" className="flex items-center gap-1 text-blue-600 mt-2">
                              <span>Official Visa Portal</span>
                              <ExternalLink className="h-3 w-3" />
                            </Link>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="k-eta">
                          <AccordionTrigger>K-ETA (Electronic Travel Authorization)</AccordionTrigger>
                          <AccordionContent className="text-gray-700">
                            <p className="mb-2">
                              Even if you're from a visa-free country, you may need to apply for K-ETA before your trip.
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Must be applied for at least 72 hours before departure</li>
                              <li>Valid for 2 years or until passport expiration</li>
                              <li>Costs approximately 10,000 KRW (about $8 USD)</li>
                            </ul>
                            <Link href="https://www.k-eta.go.kr/" target="_blank" className="flex items-center gap-1 text-blue-600 mt-2">
                              <span>Apply for K-ETA</span>
                              <ExternalLink className="h-3 w-3" />
                            </Link>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                  
                  {/* 언어 및 커뮤니케이션 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <Languages className="h-5 w-5 text-red-500" />
                        Language & Communication
                      </CardTitle>
                      <CardDescription>Essential phrases and language tips</CardDescription>
                </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="mb-4">
                        <p className="mb-2 text-gray-700">
                          While English is taught in schools, many Koreans may not be comfortable speaking it, especially outside major tourist areas. Learning a few basic Korean phrases can be helpful.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Essential Korean Phrases</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="border-b pb-2">
                            <div className="font-medium">안녕하세요 (An-nyeong-ha-se-yo)</div>
                            <div className="text-sm text-gray-500">Hello</div>
                          </div>
                          <div className="border-b pb-2">
                            <div className="font-medium">감사합니다 (Kam-sa-ham-ni-da)</div>
                            <div className="text-sm text-gray-500">Thank you</div>
                          </div>
                          <div className="border-b pb-2">
                            <div className="font-medium">실례합니다 (Shil-lye-ham-ni-da)</div>
                            <div className="text-sm text-gray-500">Excuse me</div>
                          </div>
                          <div className="border-b pb-2">
                            <div className="font-medium">얼마예요? (Eol-ma-ye-yo?)</div>
                            <div className="text-sm text-gray-500">How much is it?</div>
                          </div>
                          <div className="border-b pb-2">
                            <div className="font-medium">화장실이 어디예요? (Hwa-jang-shil-i eo-di-ye-yo?)</div>
                            <div className="text-sm text-gray-500">Where is the bathroom?</div>
                          </div>
                          <div className="border-b pb-2">
                            <div className="font-medium">영어 할 줄 아세요? (Yeong-eo hal jul a-se-yo?)</div>
                            <div className="text-sm text-gray-500">Do you speak English?</div>
                          </div>
                        </div>
                      </div>
                      
                  <div className="space-y-3">
                        <h4 className="font-medium">Communication Tips</h4>
                        <div className="flex gap-2 items-start">
                          <div className="bg-red-100 p-1 rounded-full mt-0.5">
                            <MapPin className="h-3 w-3 text-red-600" />
                    </div>
                          <p className="text-sm text-gray-700">
                            Download a translation app like Papago or Google Translate, which work well with Korean
                          </p>
                    </div>
                        <div className="flex gap-2 items-start">
                          <div className="bg-red-100 p-1 rounded-full mt-0.5">
                            <MapPin className="h-3 w-3 text-red-600" />
                    </div>
                          <p className="text-sm text-gray-700">
                            Take screenshots of addresses in Korean to show taxi drivers or locals when asking for directions
                          </p>
                    </div>
                        <div className="flex gap-2 items-start">
                          <div className="bg-red-100 p-1 rounded-full mt-0.5">
                            <MapPin className="h-3 w-3 text-red-600" />
                  </div>
                          <p className="text-sm text-gray-700">
                            Tourist information centers in major areas have English-speaking staff
                          </p>
                        </div>
                      </div>
                </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Download Phrasebook PDF
                      </Button>
                    </CardFooter>
              </Card>

                  {/* 통화 및 결제 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-red-500" />
                        Currency & Payments
                      </CardTitle>
                      <CardDescription>Money matters when traveling in Korea</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Korean Currency (KRW - ₩)</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h5 className="text-sm font-medium">Bills</h5>
                  <div className="flex items-center gap-2">
                              <div className="w-10 h-5 bg-blue-100 rounded"></div>
                              <span>₩1,000 (approx. $0.75 USD)</span>
                  </div>
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-5 bg-green-100 rounded"></div>
                              <span>₩5,000 (approx. $3.75 USD)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-5 bg-yellow-100 rounded"></div>
                              <span>₩10,000 (approx. $7.50 USD)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-5 bg-red-100 rounded"></div>
                              <span>₩50,000 (approx. $37.50 USD)</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h5 className="text-sm font-medium">Coins</h5>
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                              <span>₩10, ₩50, ₩100, ₩500</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Payment Methods</h4>
                  <div className="space-y-3">
                          <div className="flex items-start gap-3 p-3 border rounded-lg">
                            <div className="bg-blue-100 p-2 rounded-lg">
                              <CreditCard className="h-5 w-5 text-blue-600" />
                    </div>
                            <div>
                              <h5 className="font-medium">Credit Cards</h5>
                              <p className="text-sm text-gray-600">
                                Widely accepted in cities and tourist areas. Visa and Mastercard are most common. American Express has limited acceptance.
                              </p>
                    </div>
                    </div>
                          <div className="flex items-start gap-3 p-3 border rounded-lg">
                            <div className="bg-green-100 p-2 rounded-lg">
                              <Smartphone className="h-5 w-5 text-green-600" />
                    </div>
                            <div>
                              <h5 className="font-medium">Mobile Payments</h5>
                              <p className="text-sm text-gray-600">
                                Korean apps like Kakao Pay and Naver Pay are popular but require a Korean phone number. International travelers can use Apple Pay or Google Pay where supported.
                              </p>
                  </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 border rounded-lg">
                            <div className="bg-yellow-100 p-2 rounded-lg">
                              <CreditCard className="h-5 w-5 text-yellow-600" />
                            </div>
                            <div>
                              <h5 className="font-medium">Cash</h5>
                              <p className="text-sm text-gray-600">
                                Essential for small shops, street vendors, and rural areas. ATMs at convenience stores like 7-Eleven usually accept foreign cards.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg">
                        <div className="flex items-start gap-2">
                          <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-blue-800">Spice Level Advisory</h4>
                            <p className="text-sm text-blue-700 mt-1">
                              Many Korean dishes are spicy. If you have low spice tolerance, request "An-maewoyo" (not spicy) when ordering. Dishes like Bulgogi, Japchae, and Kimbap are good non-spicy options.
                            </p>
                          </div>
                        </div>
                      </div>
                </CardContent>
              </Card>
                  </div>
                
                <div className="space-y-6">
                  {/* 사이드바 위젯 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CalendarDays className="h-5 w-5 text-red-500" />
                        Best Time to Visit
                      </CardTitle>
                </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <div className="font-medium">Spring (Apr-Jun)</div>
                          <div className="text-sm text-gray-500">Cherry blossoms, mild weather</div>
                    </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Best</Badge>
                    </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <div className="font-medium">Summer (Jul-Aug)</div>
                          <div className="text-sm text-gray-500">Hot, humid, occasional rain</div>
                    </div>
                        <Badge variant="outline">Good</Badge>
                    </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <div className="font-medium">Fall (Sep-Nov)</div>
                          <div className="text-sm text-gray-500">Autumn colors, pleasant</div>
                  </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Best</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Winter (Dec-Mar)</div>
                          <div className="text-sm text-gray-500">Cold, ski season</div>
                        </div>
                        <Badge variant="outline">Fair</Badge>
                      </div>
                </CardContent>
              </Card>

            <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Camera className="h-5 w-5 text-red-500" />
                        What to Pack
                      </CardTitle>
              </CardHeader>
              <CardContent>
                      <Accordion type="multiple" className="w-full">
                        <AccordionItem value="spring">
                          <AccordionTrigger>Spring</AccordionTrigger>
                          <AccordionContent>
                            <ul className="text-sm space-y-1 text-gray-700">
                              <li>• Light jacket or cardigan</li>
                              <li>• Long and short sleeve shirts</li>
                              <li>• Comfortable walking shoes</li>
                              <li>• Umbrella or raincoat</li>
                              <li>• Allergy medication (pollen)</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="summer">
                          <AccordionTrigger>Summer</AccordionTrigger>
                          <AccordionContent>
                            <ul className="text-sm space-y-1 text-gray-700">
                              <li>• Lightweight, breathable clothing</li>
                              <li>• Sun hat and sunglasses</li>
                              <li>• Sunscreen (SPF 30+)</li>
                              <li>• Portable fan</li>
                              <li>• Umbrella (rain and sun)</li>
                              <li>• Light rain jacket</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="fall">
                          <AccordionTrigger>Fall</AccordionTrigger>
                          <AccordionContent>
                            <ul className="text-sm space-y-1 text-gray-700">
                              <li>• Medium-weight jacket</li>
                              <li>• Layerable clothing</li>
                              <li>• Light scarf</li>
                              <li>• Comfortable walking shoes</li>
                              <li>• Camera for fall foliage</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="winter">
                          <AccordionTrigger>Winter</AccordionTrigger>
                          <AccordionContent>
                            <ul className="text-sm space-y-1 text-gray-700">
                              <li>• Warm, insulated coat</li>
                              <li>• Thermal underwear</li>
                              <li>• Hat, gloves, and scarf</li>
                              <li>• Waterproof boots</li>
                              <li>• Lip balm and moisturizer</li>
                              <li>• Heat packs</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                        Common Scams to Avoid
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <h4 className="font-medium">Taxi Overcharging</h4>
                        <p className="text-sm text-gray-700">
                          Some taxis may take longer routes or claim the meter is broken. Use official taxis and insist on the meter.
                    </p>
                  </div>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="font-medium">"Tea Ceremony" Scam</h4>
                        <p className="text-sm text-gray-700">
                          Friendly locals invite you to an expensive traditional tea ceremony and leave you with the bill.
                        </p>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="font-medium">Counterfeit Goods</h4>
                        <p className="text-sm text-gray-700">
                          Be cautious of unusually cheap luxury items or electronics, especially in markets.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <SponsoredContent type="sidebar" />
                </div>
              </div>
            </TabsContent>
            
            {/* 목적지 탭 */}
            <TabsContent value="destinations" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  {/* 서울 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-red-500" />
                        Seoul
                      </CardTitle>
                      <CardDescription>South Korea's vibrant capital city</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                        <img 
                          src="/placeholder.svg?height=400&width=800" 
                          alt="Seoul Skyline" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <p className="text-gray-700">
                        Seoul is a dynamic metropolis blending ancient traditions with cutting-edge technology. As the capital and largest city of South Korea, it offers an incredible mix of historic palaces, bustling markets, serene temples, and modern shopping districts.
                      </p>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="seoul-highlights">
                          <AccordionTrigger>Top Attractions</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <div>
                              <h4 className="font-medium">Gyeongbokgung Palace</h4>
                              <p className="text-sm text-gray-700">The largest of the Five Grand Palaces built during the Joseon Dynasty. Don't miss the Royal Guard Changing Ceremony.</p>
                  </div>
                            <div>
                              <h4 className="font-medium">Bukchon Hanok Village</h4>
                              <p className="text-sm text-gray-700">A traditional Korean village featuring hundreds of hanok (traditional houses) dating back to the Joseon Dynasty.</p>
                </div>
                            <div>
                              <h4 className="font-medium">N Seoul Tower</h4>
                              <p className="text-sm text-gray-700">Located on Namsan Mountain, it offers panoramic views of the city. Popular for love locks and its rotating restaurant.</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Myeongdong</h4>
                              <p className="text-sm text-gray-700">A major shopping district known for cosmetics, fashion, and street food. Particularly lively in the evenings.</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Hongdae</h4>
                              <p className="text-sm text-gray-700">A vibrant area near Hongik University known for its youthful energy, street performances, indie music, and unique shops.</p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="seoul-when-to-visit">
                          <AccordionTrigger>When to Visit</AccordionTrigger>
                          <AccordionContent>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="bg-blue-50 p-3 rounded-lg">
                                <h4 className="font-medium text-blue-700 mb-1">Spring (April-May)</h4>
                                <p className="text-sm text-blue-700">Best time to visit for cherry blossoms and mild weather. Major parks like Yeouido and Namsan are particularly beautiful.</p>
                              </div>
                              <div className="bg-amber-50 p-3 rounded-lg">
                                <h4 className="font-medium text-amber-700 mb-1">Fall (Sept-Nov)</h4>
                                <p className="text-sm text-amber-700">Perfect for colorful foliage and pleasant temperatures. Ideal for outdoor activities and hiking nearby mountains.</p>
                              </div>
                              <div className="bg-red-50 p-3 rounded-lg">
                                <h4 className="font-medium text-red-700 mb-1">Summer (June-Aug)</h4>
                                <p className="text-sm text-red-700">Hot and humid with monsoon season in July. Good for indoor activities, shopping, and nightlife.</p>
                              </div>
                              <div className="bg-blue-50 p-3 rounded-lg">
                                <h4 className="font-medium text-blue-700 mb-1">Winter (Dec-Feb)</h4>
                                <p className="text-sm text-blue-700">Cold with occasional snow. Great for winter sports in nearby mountains and year-end festivities.</p>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="seoul-neighborhoods">
                          <AccordionTrigger>Neighborhoods Guide</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <div>
                              <h4 className="font-medium">Gangnam</h4>
                              <p className="text-sm text-gray-700">Upscale district with luxury shopping, fine dining, and modern architecture. The inspiration for the famous song.</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Itaewon</h4>
                              <p className="text-sm text-gray-700">Multicultural hub with international restaurants, bars, and clubs. Popular among expats and tourists.</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Insadong</h4>
                              <p className="text-sm text-gray-700">Traditional arts and crafts center with galleries, tea houses, and souvenir shops. Great for cultural experiences.</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Dongdaemun</h4>
                              <p className="text-sm text-gray-700">Fashion hub with 24-hour shopping and the iconic Dongdaemun Design Plaza (DDP) designed by Zaha Hadid.</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Yeouido</h4>
                              <p className="text-sm text-gray-700">Seoul's financial district on an island in the Han River. Home to the National Assembly and beautiful parks.</p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
              </CardContent>
            </Card>
                  
                  {/* 부산 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-blue-500" />
                        Busan
                      </CardTitle>
                      <CardDescription>Korea's vibrant second city and coastal gem</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                        <img 
                          src="/placeholder.svg?height=400&width=800" 
                          alt="Busan Coastline" 
                          className="w-full h-full object-cover"
                        />
                  </div>
                      
                      <p className="text-gray-700">
                        Busan is South Korea's second-largest city and main port, known for its beautiful beaches, fresh seafood, and vibrant atmosphere. With mountains meeting the sea, it offers both natural beauty and urban excitement.
                      </p>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="busan-highlights">
                          <AccordionTrigger>Top Attractions</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <div>
                              <h4 className="font-medium">Haeundae Beach</h4>
                              <p className="text-sm text-gray-700">Korea's most famous beach with soft sand and clear waters. Hosts numerous festivals and events throughout the year.</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Gamcheon Culture Village</h4>
                              <p className="text-sm text-gray-700">A hillside community transformed into a colorful art installation with narrow alleyways and street art.</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Jagalchi Fish Market</h4>
                              <p className="text-sm text-gray-700">Korea's largest seafood market where you can buy fresh seafood and have it cooked on the spot.</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Taejongdae</h4>
                              <p className="text-sm text-gray-700">A natural park on a cliff overlooking the ocean with hiking trails and a lighthouse offering stunning views.</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Haedong Yonggungsa Temple</h4>
                              <p className="text-sm text-gray-700">A unique Buddhist temple built on coastal rocks, offering a breathtaking setting unlike most Korean temples.</p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="busan-when-to-visit">
                          <AccordionTrigger>When to Visit</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <h4 className="font-medium text-blue-700 mb-1">September-October</h4>
                              <p className="text-sm text-blue-700">Ideal weather with warm days and cool evenings. The Busan International Film Festival is held in October.</p>
                            </div>
                            <div className="bg-red-50 p-3 rounded-lg">
                              <h4 className="font-medium text-red-700 mb-1">July-August</h4>
                              <p className="text-sm text-red-700">Beach season with hot and humid weather. Very crowded but great for swimming and water activities.</p>
                            </div>
                            <div className="bg-amber-50 p-3 rounded-lg">
                              <h4 className="font-medium text-amber-700 mb-1">April-May</h4>
                              <p className="text-sm text-amber-700">Pleasant spring weather with cherry blossoms and fewer tourists than summer.</p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="busan-getting-there">
                          <AccordionTrigger>Getting There</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <div>
                              <h4 className="font-medium">KTX (High-Speed Train)</h4>
                              <p className="text-sm text-gray-700">The fastest way to reach Busan from Seoul, taking about 2.5 hours. Trains depart frequently from Seoul Station.</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Domestic Flight</h4>
                              <p className="text-sm text-gray-700">55-minute flight from Seoul's Gimpo Airport to Busan's Gimhae International Airport.</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Express Bus</h4>
                              <p className="text-sm text-gray-700">More affordable option taking 4-5 hours from Seoul Express Bus Terminal. Comfortable with regular departures.</p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                  
                  {/* 제주도 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-green-500" />
                        Jeju Island
                      </CardTitle>
                      <CardDescription>Korea's tropical paradise and UNESCO World Heritage site</CardDescription>
                </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                        <img 
                          src="/placeholder.svg?height=400&width=800" 
                          alt="Jeju Island" 
                          className="w-full h-full object-cover"
                        />
                    </div>
                      
                      <p className="text-gray-700">
                        Jeju is South Korea's largest island and a popular holiday destination known for its volcanic landscapes, waterfalls, beaches, and unique cultural heritage. Often called "Korea's Hawaii," it offers a distinct atmosphere from mainland Korea.
                      </p>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="jeju-highlights">
                          <AccordionTrigger>Top Attractions</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <div>
                              <h4 className="font-medium">Mount Hallasan</h4>
                              <p className="text-sm text-gray-700">South Korea's highest mountain and an active volcano. Features stunning hiking trails and a crater lake at the summit.</p>
                    </div>
                            <div>
                              <h4 className="font-medium">Seongsan Ilchulbong (Sunrise Peak)</h4>
                              <p className="text-sm text-gray-700">A UNESCO World Heritage Site featuring a 182m high tuff cone created by hydrovolcanic eruptions. Famous for stunning sunrise views.</p>
                    </div>
                            <div>
                              <h4 className="font-medium">Cheonjeyeon Waterfall</h4>
                              <p className="text-sm text-gray-700">The "Pond of God" features three-tier waterfalls in a lush forest setting with a legend-inspired Seonimgyo Bridge.</p>
                    </div>
                            <div>
                              <h4 className="font-medium">Manjanggul Cave</h4>
                              <p className="text-sm text-gray-700">One of the longest lava tubes in the world with impressive volcanic structures and a huge lava column.</p>
                    </div>
                            <div>
                              <h4 className="font-medium">Jeju Folk Village</h4>
                              <p className="text-sm text-gray-700">An open-air museum showcasing traditional Jeju culture, houses, and daily life from the past.</p>
                  </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="jeju-unique">
                          <AccordionTrigger>Unique Experiences</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <div>
                              <h4 className="font-medium">Haenyeo (Female Divers) Performance</h4>
                              <p className="text-sm text-gray-700">Watch Jeju's famous female free-divers who harvest seafood without oxygen tanks, a tradition dating back centuries.</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Black Pork Street</h4>
                              <p className="text-sm text-gray-700">Try Jeju's famous black pork, considered some of the best in Korea, at specialized restaurants in Jeju City.</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Hallim Park</h4>
                              <p className="text-sm text-gray-700">Features beautiful botanical gardens, lava caves, folk village, and bird garden in one location.</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Osulloc Tea Museum</h4>
                              <p className="text-sm text-gray-700">Learn about Korean tea culture while enjoying scenic green tea fields and innovative tea-based desserts.</p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="jeju-getting-there">
                          <AccordionTrigger>Getting There</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <div>
                              <h4 className="font-medium">Flight</h4>
                              <p className="text-sm text-gray-700">The most common way to reach Jeju is by air. Hour-long flights depart frequently from Seoul, Busan, and other major Korean cities.</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Ferry</h4>
                              <p className="text-sm text-gray-700">Ferries operate from Mokpo, Wando, and Busan to Jeju, taking 2-5 hours depending on the departure point and vessel type.</p>
                            </div>
                            <div>
                              <h4 className="font-medium">Getting Around</h4>
                              <p className="text-sm text-gray-700">Renting a car is highly recommended for exploring Jeju efficiently. Bus services are available but less convenient for tourists.</p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                </CardContent>
              </Card>
                </div>

                {/* 사이드바 */}
                <div className="space-y-6">
                  <Card>
                <CardHeader>
                      <CardTitle>Plan Your Trip</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-medium text-red-700 flex items-center gap-1.5 mb-2">
                          <Clock className="h-4 w-4" />
                          Recommended Stay Duration
                        </h4>
                        <ul className="space-y-2 text-sm text-red-700">
                          <li className="flex items-center gap-2">
                            <Badge variant="outline" className="text-red-700 border-red-200">Seoul</Badge>
                            <span>4-5 days</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline" className="text-red-700 border-red-200">Busan</Badge>
                            <span>2-3 days</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline" className="text-red-700 border-red-200">Jeju Island</Badge>
                            <span>3-4 days</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline" className="text-red-700 border-red-200">Full Korea Tour</Badge>
                            <span>10-14 days</span>
                          </li>
                        </ul>
                  </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-700 flex items-center gap-1.5 mb-2">
                          <CalendarDays className="h-4 w-4" />
                          Best Time to Visit
                        </h4>
                        <p className="text-sm text-blue-700 mb-2">Korea has distinct four seasons:</p>
                        <ul className="space-y-2 text-sm text-blue-700">
                          <li className="flex items-center gap-2">
                            <Badge className="bg-pink-100 hover:bg-pink-100 text-pink-700">Spring</Badge>
                            <span>April-May (Cherry blossoms)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge className="bg-yellow-100 hover:bg-yellow-100 text-yellow-700">Summer</Badge>
                            <span>June-Aug (Hot & humid)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge className="bg-orange-100 hover:bg-orange-100 text-orange-700">Fall</Badge>
                            <span>Sept-Nov (Foliage)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge className="bg-blue-100 hover:bg-blue-100 text-blue-700">Winter</Badge>
                            <span>Dec-Feb (Cold & snowy)</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Other Notable Destinations</CardTitle>
                </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        <div className="p-4 hover:bg-gray-50 transition-colors">
                          <h4 className="font-medium mb-1">Gyeongju</h4>
                          <p className="text-sm text-gray-600">Ancient capital with historic sites and temples</p>
                    </div>
                        <div className="p-4 hover:bg-gray-50 transition-colors">
                          <h4 className="font-medium mb-1">Jeonju</h4>
                          <p className="text-sm text-gray-600">Traditional hanok village and food culture</p>
                    </div>
                        <div className="p-4 hover:bg-gray-50 transition-colors">
                          <h4 className="font-medium mb-1">Seoraksan National Park</h4>
                          <p className="text-sm text-gray-600">Stunning mountain landscapes and hiking</p>
                    </div>
                        <div className="p-4 hover:bg-gray-50 transition-colors">
                          <h4 className="font-medium mb-1">Andong</h4>
                          <p className="text-sm text-gray-600">UNESCO-listed folk village and mask dance</p>
                    </div>
                        <div className="p-4 hover:bg-gray-50 transition-colors">
                          <h4 className="font-medium mb-1">Sokcho</h4>
                          <p className="text-sm text-gray-600">Coastal city with beaches and seafood</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

                  <SponsoredContent
                    title="Plan Your Korea Adventure"
                    description="Get exclusive discounts on tours, accommodations, and experiences"
                    action="View Deals"
                    href="#"
                  />
                  </div>
              </div>
            </TabsContent>
            
            {/* 음식 탭 */}
            <TabsContent value="food" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  {/* 한국 음식 소개 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <Utensils className="h-5 w-5 text-red-500" />
                        Introduction to Korean Cuisine
                      </CardTitle>
                      <CardDescription>Essential dishes and dining culture</CardDescription>
                </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Korean cuisine is known for its bold flavors, extensive use of fermentation, and healthy ingredients. Meals typically consist of rice, soup, and various side dishes (banchan). The dining experience is often communal, with multiple shared dishes placed in the center of the table.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-medium mb-2 flex items-center gap-1.5">
                            <Flame className="h-4 w-4 text-red-500" />
                            Key Characteristics
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Strong, distinctive flavors</li>
                            <li>• Balance of spicy, sweet, sour, and salty</li>
                            <li>• Fermented foods (kimchi, doenjang)</li>
                            <li>• Extensive use of vegetables</li>
                            <li>• Meals served with multiple side dishes</li>
                            <li>• Communal dining culture</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-medium mb-2 flex items-center gap-1.5">
                            <AlertCircle className="h-4 w-4 text-amber-500" />
                            Dining Etiquette
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Wait for elders to start eating</li>
                            <li>• Use both hands when receiving food/drinks</li>
                            <li>• Don't leave chopsticks in rice bowl</li>
                            <li>• Slurping noodles is acceptable</li>
                            <li>• Korean BBQ: cook meat well-done</li>
                            <li>• Say "jal meokkessumnida" before eating</li>
                          </ul>
                        </div>
                      </div>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="must-try">
                          <AccordionTrigger>Must-Try Korean Dishes</AccordionTrigger>
                          <AccordionContent className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="border rounded-lg overflow-hidden">
                                <div className="h-32 bg-gray-100">
                                  <img 
                                    src="/placeholder.svg?height=128&width=256" 
                                    alt="Bibimbap" 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="p-3">
                                  <h4 className="font-medium">Bibimbap</h4>
                                  <p className="text-sm text-gray-600">Mixed rice bowl with vegetables, meat, egg, and spicy gochujang sauce</p>
                                </div>
                              </div>
                              
                              <div className="border rounded-lg overflow-hidden">
                                <div className="h-32 bg-gray-100">
                                  <img 
                                    src="/placeholder.svg?height=128&width=256" 
                                    alt="Kimchi" 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="p-3">
                                  <h4 className="font-medium">Kimchi</h4>
                                  <p className="text-sm text-gray-600">Fermented cabbage with chili, garlic, and other seasonings</p>
                                </div>
                              </div>
                              
                              <div className="border rounded-lg overflow-hidden">
                                <div className="h-32 bg-gray-100">
                                  <img 
                                    src="/placeholder.svg?height=128&width=256" 
                                    alt="Bulgogi" 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="p-3">
                                  <h4 className="font-medium">Bulgogi</h4>
                                  <p className="text-sm text-gray-600">Marinated beef slices, grilled or stir-fried with vegetables</p>
                                </div>
                              </div>
                              
                              <div className="border rounded-lg overflow-hidden">
                                <div className="h-32 bg-gray-100">
                                  <img 
                                    src="/placeholder.svg?height=128&width=256" 
                                    alt="Tteokbokki" 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="p-3">
                                  <h4 className="font-medium">Tteokbokki</h4>
                                  <p className="text-sm text-gray-600">Spicy rice cakes in gochujang sauce, popular street food</p>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="bbq">
                          <AccordionTrigger>Korean BBQ Guide</AccordionTrigger>
                          <AccordionContent className="space-y-4">
                            <p className="text-gray-700">
                              Korean BBQ (Gogi-gui) is a communal dining experience where meat is grilled at your table. It's typically enjoyed with various side dishes, dipping sauces, and vegetables for wrapping.
                            </p>
                            
                  <div className="space-y-3">
                              <h4 className="font-medium">Popular BBQ Meats:</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="bg-gray-50 p-3 rounded">
                                  <span className="font-medium">Samgyeopsal (삼겹살)</span>
                                  <p className="text-sm text-gray-600">Pork belly slices</p>
                    </div>
                                <div className="bg-gray-50 p-3 rounded">
                                  <span className="font-medium">Galbi (갈비)</span>
                                  <p className="text-sm text-gray-600">Marinated beef short ribs</p>
                    </div>
                                <div className="bg-gray-50 p-3 rounded">
                                  <span className="font-medium">Chadolbaegi (차돌박이)</span>
                                  <p className="text-sm text-gray-600">Thinly sliced beef brisket</p>
                    </div>
                                <div className="bg-gray-50 p-3 rounded">
                                  <span className="font-medium">Dak-galbi (닭갈비)</span>
                                  <p className="text-sm text-gray-600">Spicy marinated chicken</p>
                    </div>
                  </div>
                            </div>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">How to Enjoy Korean BBQ:</h4>
                              <ol className="list-decimal pl-4 space-y-1 text-sm text-gray-700">
                                <li>Wait for the grill to heat up before adding meat</li>
                                <li>Cut meat into bite-sized pieces with scissors</li>
                                <li>Wrap grilled meat in lettuce with rice, ssamjang (dipping sauce), and garlic</li>
                                <li>Create one-bite parcels to enjoy the full flavor combination</li>
                                <li>Pair with soju or Korean beer for the authentic experience</li>
                              </ol>
                            </div>
                            
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-sm text-blue-700">
                                <span className="font-medium">Pro tip:</span> When dining with Koreans, the youngest person at the table typically takes responsibility for grilling and serving the meat.
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="street-food">
                          <AccordionTrigger>Street Food Guide</AccordionTrigger>
                          <AccordionContent className="space-y-4">
                            <p className="text-gray-700">
                              Korean street food is affordable, delicious, and ubiquitous in markets, shopping areas, and tourist spots. Here are some favorites you shouldn't miss:
                            </p>
                            
                            <div className="space-y-3">
                              <div className="border-b pb-2">
                                <h4 className="font-medium">Hotteok (호떡)</h4>
                                <p className="text-sm text-gray-600">Sweet pancakes filled with brown sugar, cinnamon, and nuts. Especially popular in winter.</p>
                              </div>
                              <div className="border-b pb-2">
                                <h4 className="font-medium">Odeng/Eomuk (어묵)</h4>
                                <p className="text-sm text-gray-600">Fish cake skewers in hot broth, perfect for cold days.</p>
                              </div>
                              <div className="border-b pb-2">
                                <h4 className="font-medium">Bungeoppang (붕어빵)</h4>
                                <p className="text-sm text-gray-600">Fish-shaped pastries filled with sweet red bean paste.</p>
                              </div>
                              <div className="border-b pb-2">
                                <h4 className="font-medium">Gimbap (김밥)</h4>
                                <p className="text-sm text-gray-600">Seaweed rice rolls filled with vegetables, meat, and pickles.</p>
                              </div>
                              <div className="border-b pb-2">
                                <h4 className="font-medium">Mandu (만두)</h4>
                                <p className="text-sm text-gray-600">Korean dumplings, either steamed or fried.</p>
                              </div>
                              <div>
                                <h4 className="font-medium">Tornado Potato</h4>
                                <p className="text-sm text-gray-600">Spiral-cut potato on a skewer, fried and seasoned.</p>
                              </div>
                            </div>
                            
                            <p className="text-sm text-gray-700">
                              Best places to find street food include Myeongdong, Namdaemun Market, and Gwangjang Market in Seoul, as well as local markets in other cities.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                </CardContent>
              </Card>
            </div>

                {/* 사이드바 */}
                <div className="space-y-6">
            <Card>
              <CardHeader>
                      <CardTitle>Dietary Considerations</CardTitle>
              </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="bg-amber-50 p-3 rounded-lg">
                          <h4 className="font-medium text-amber-700 mb-1">Vegetarian/Vegan</h4>
                          <p className="text-sm text-amber-700">
                            Traditional Korean cuisine can be challenging for vegetarians as many dishes contain fish sauce or meat-based broths. Look for Buddhist temple food (사찰음식) for authentic vegetarian options.
                          </p>
                          <p className="text-sm text-amber-700 mt-1">
                            Useful phrase: "저는 채식주의자입니다" (I am vegetarian)
                          </p>
                        </div>
                        
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-medium text-blue-700 mb-1">Gluten-Free</h4>
                          <p className="text-sm text-blue-700">
                            Many Korean dishes are rice-based, but be cautious of soy sauce (contains wheat). Korean glass noodles (japchae) are made from sweet potato starch and are gluten-free.
                    </p>
                  </div>
                        
                        <div className="bg-red-50 p-3 rounded-lg">
                          <h4 className="font-medium text-red-700 mb-1">Spice Levels</h4>
                          <p className="text-sm text-red-700">
                            Korean food can be very spicy. If you have low spice tolerance, request "안 맵게 주세요" (not spicy please).
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Where to Eat</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border-b pb-3">
                        <h4 className="font-medium mb-1">Traditional Markets</h4>
                    <p className="text-sm text-gray-600">
                          Gwangjang Market (Seoul), Jagalchi Market (Busan)
                    </p>
                  </div>
                      <div className="border-b pb-3">
                        <h4 className="font-medium mb-1">Restaurant Districts</h4>
                        <p className="text-sm text-gray-600">
                          Myeongdong, Hongdae, Itaewon in Seoul; Seomyeon in Busan
                        </p>
                      </div>
                      <div className="border-b pb-3">
                        <h4 className="font-medium mb-1">Food Tours</h4>
                        <p className="text-sm text-gray-600">
                          Consider a guided food tour for your first days to get oriented to Korean cuisine
                        </p>
                      </div>
                      
                      {/* 추가: 상세 페이지 링크 */}
                      <div className="pt-2">
                        <Link href="/guide/food" className="text-red-600 hover:text-red-700 inline-flex items-center gap-1 font-medium">
                          <span>Want to see must-visit restaurants?</span>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                </div>
              </CardContent>
            </Card>
                  
                  <Card className="mt-4">
                    <CardHeader className="pb-2">
                      <CardTitle>Korean Food Trends</CardTitle>
                      <CardDescription>What's popular right now</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Coffee className="h-4 w-4 text-purple-500" />
                  </div>
                        <div>
                          <h4 className="font-medium text-sm">Specialty Cafes</h4>
                          <p className="text-xs text-gray-500">Themed cafes are huge in Korea</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Globe className="h-4 w-4 text-blue-500" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Fusion Cuisine</h4>
                          <p className="text-xs text-gray-500">Korean-Western fusion is trending</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Utensils className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Plant-Based Options</h4>
                          <p className="text-xs text-gray-500">Growing vegan scene in major cities</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <Link href="/guide/food" className="text-red-600 hover:text-red-700 text-sm inline-flex items-center gap-1">
                          <span>Explore food trends in detail</span>
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* 교통 탭 */}
            <TabsContent value="transport" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  {/* 대중교통 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <Train className="h-5 w-5 text-blue-500" />
                        Public Transportation
                      </CardTitle>
                      <CardDescription>Korea's efficient and modern transit system</CardDescription>
                </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        South Korea boasts one of the world's most efficient and modern public transportation systems. Major cities are well-connected by subway, bus, and train networks that are clean, punctual, and affordable.
                      </p>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="subway">
                          <AccordionTrigger>Subway Systems</AccordionTrigger>
                          <AccordionContent className="space-y-4">
                            <div className="space-y-2">
                              <h4 className="font-medium">Seoul Metro</h4>
                              <p className="text-sm text-gray-700">
                                One of the world's largest subway systems with 23 lines covering Seoul and surrounding areas. Stations are clearly marked in Korean and English, with announcements in multiple languages.
                              </p>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
                                <div className="bg-blue-100 text-blue-800 p-2 rounded text-center text-sm">Line 1</div>
                                <div className="bg-green-100 text-green-800 p-2 rounded text-center text-sm">Line 2</div>
                                <div className="bg-orange-100 text-orange-800 p-2 rounded text-center text-sm">Line 3</div>
                                <div className="bg-blue-100 text-blue-800 p-2 rounded text-center text-sm">Line 4</div>
                    </div>
                    </div>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Busan Metro</h4>
                              <p className="text-sm text-gray-700">
                                4 lines covering major areas of Busan, with connections to Gimhae Airport.
                              </p>
                    </div>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Other Cities</h4>
                              <p className="text-sm text-gray-700">
                                Daegu, Daejeon, Gwangju, and Incheon also have subway systems, though smaller than Seoul's.
                              </p>
                    </div>
                            
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <h4 className="font-medium text-blue-700 mb-1">Subway Tips</h4>
                              <ul className="text-sm space-y-1 text-blue-700">
                                <li>• Subway operates 5:30am to midnight (approx.)</li>
                                <li>• Priority seating for elderly, pregnant women, and disabled</li>
                                <li>• Free public WiFi available in stations and trains</li>
                                <li>• Most stations have numbered exits to help navigation</li>
                                <li>• Digital displays show train arrival times</li>
                              </ul>
                    </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="bus">
                          <AccordionTrigger>Bus System</AccordionTrigger>
                          <AccordionContent className="space-y-4">
                            <p className="text-sm text-gray-700">
                              Korean cities have extensive bus networks that complement the subway system and reach areas not covered by trains. Buses are color-coded by service type.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="border rounded-lg overflow-hidden">
                                <div className="bg-blue-500 p-2 text-white font-medium text-center">
                                  Blue Buses
                  </div>
                                <div className="p-3">
                                  <p className="text-sm text-gray-700">Main arterial routes, traveling long distances across the city</p>
                                </div>
                              </div>
                              
                              <div className="border rounded-lg overflow-hidden">
                                <div className="bg-green-500 p-2 text-white font-medium text-center">
                                  Green Buses
                                </div>
                                <div className="p-3">
                                  <p className="text-sm text-gray-700">Feeder routes, connecting residential areas to subway stations</p>
                                </div>
                              </div>
                              
                              <div className="border rounded-lg overflow-hidden">
                                <div className="bg-red-500 p-2 text-white font-medium text-center">
                                  Red Buses
                                </div>
                                <div className="p-3">
                                  <p className="text-sm text-gray-700">Express routes connecting suburbs to downtown areas</p>
                                </div>
                              </div>
                              
                              <div className="border rounded-lg overflow-hidden">
                                <div className="bg-yellow-500 p-2 text-white font-medium text-center">
                                  Yellow Buses
                                </div>
                                <div className="p-3">
                                  <p className="text-sm text-gray-700">Circular routes within downtown areas</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-amber-50 p-3 rounded-lg">
                              <h4 className="font-medium text-amber-700 mb-1">Bus Tips</h4>
                              <ul className="text-sm space-y-1 text-amber-700">
                                <li>• Pay when entering (in Seoul) or when exiting (in some other cities)</li>
                                <li>• Press stop button before your stop</li>
                                <li>• Some express buses have limited stops</li>
                                <li>• Digital displays and announcements indicate upcoming stops</li>
                                <li>• Apps like Kakao Map can help plan bus routes</li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="ktx">
                          <AccordionTrigger>KTX (High-Speed Rail)</AccordionTrigger>
                          <AccordionContent className="space-y-4">
                            <p className="text-sm text-gray-700">
                              The Korea Train eXpress (KTX) is South Korea's high-speed rail system, connecting major cities at speeds up to 305 km/h (190 mph). It's the fastest and most comfortable way to travel between cities.
                            </p>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Major Routes</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                <div className="flex justify-between bg-gray-50 p-2 rounded">
                                  <span>Seoul → Busan</span>
                                  <span className="text-gray-600">~2.5 hours</span>
                                </div>
                                <div className="flex justify-between bg-gray-50 p-2 rounded">
                                  <span>Seoul → Daejeon</span>
                                  <span className="text-gray-600">~1 hour</span>
                                </div>
                                <div className="flex justify-between bg-gray-50 p-2 rounded">
                                  <span>Seoul → Daegu</span>
                                  <span className="text-gray-600">~1.5 hours</span>
                                </div>
                                <div className="flex justify-between bg-gray-50 p-2 rounded">
                                  <span>Seoul → Gwangju</span>
                                  <span className="text-gray-600">~1.5 hours</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Ticket Information</h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li>Tickets can be purchased at stations, via mobile app, or online</li>
                                <li>Reserved seating is recommended, especially during peak travel times</li>
                                <li>First class and standard class options available</li>
                                <li>Korail Pass available for foreign tourists (unlimited travel for 1-5 days)</li>
                              </ul>
                            </div>
                            
                            <Link 
                              href="https://www.letskorail.com/ebizbf/EbizBfTicketSearch.do" 
                              target="_blank" 
                              className="text-blue-600 flex items-center text-sm hover:underline"
                            >
                              <span>Book KTX tickets online</span>
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </Link>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                </CardContent>
              </Card>

                  {/* 교통 카드 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-purple-500" />
                        Transportation Cards & Payments
                      </CardTitle>
                      <CardDescription>Convenient payment options for public transit</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <div className="aspect-video rounded-lg bg-gradient-to-r from-purple-400 to-blue-400 mb-3 flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                              <span className="text-white font-bold text-lg">T-money Card</span>
                  </div>
                          </div>
                          <h4 className="font-medium mb-1">T-money Card</h4>
                          <p className="text-sm text-gray-700 mb-2">
                            The most common transportation card, usable on buses, subways, and taxis throughout Korea. Also accepted at convenience stores and some vending machines.
                          </p>
                          <ul className="text-sm space-y-1 text-gray-700 list-disc pl-5">
                            <li>Purchase at convenience stores or subway stations (₩2,500-4,000)</li>
                            <li>Reloadable at machines in subway stations or convenience stores</li>
                            <li>Provides discounts on transfers between buses and subways</li>
                            <li>Available as cards, keychains, or phone accessories</li>
                          </ul>
                        </div>
                        
                        <div>
                          <div className="aspect-video rounded-lg bg-gradient-to-r from-green-400 to-teal-400 mb-3 flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                              <span className="text-white font-bold text-lg">Cashless Options</span>
                            </div>
                          </div>
                          <h4 className="font-medium mb-1">Other Payment Options</h4>
                          <p className="text-sm text-gray-700 mb-2">
                            Modern alternatives to physical transportation cards:
                          </p>
                          <ul className="text-sm space-y-1 text-gray-700 list-disc pl-5">
                            <li>Credit/debit cards with transportation functionality</li>
                            <li>Mobile T-money (through apps like T-money Pay)</li>
                            <li>Samsung Pay or other mobile payment systems</li>
                            <li>Korea Tour Card (specialized card for tourists with discounts)</li>
                            <li>Cashless payment on intercity buses and KTX</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-700 mb-2">How to Use T-money</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="bg-white rounded p-2 text-center text-sm text-blue-700">
                            <span className="inline-block bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center mb-1">1</span>
                            <p>Tap your card on the card reader when entering</p>
                          </div>
                          <div className="bg-white rounded p-2 text-center text-sm text-blue-700">
                            <span className="inline-block bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center mb-1">2</span>
                            <p>For buses, tap again when exiting (distance-based fare)</p>
                          </div>
                          <div className="bg-white rounded p-2 text-center text-sm text-blue-700">
                            <span className="inline-block bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center mb-1">3</span>
                            <p>For subways, tap again when entering (zone-based fare)</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-6">
                  {/* 사이드바 위젯 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Camera className="h-5 w-5 text-red-500" />
                        What to Pack
                      </CardTitle>
                </CardHeader>
                <CardContent>
                      <Accordion type="multiple" className="w-full">
                        <AccordionItem value="spring">
                          <AccordionTrigger>Spring</AccordionTrigger>
                          <AccordionContent>
                            <ul className="text-sm space-y-1 text-gray-700">
                              <li>• Light jacket or cardigan</li>
                              <li>• Long and short sleeve shirts</li>
                              <li>• Comfortable walking shoes</li>
                              <li>• Umbrella or raincoat</li>
                              <li>• Allergy medication (pollen)</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="summer">
                          <AccordionTrigger>Summer</AccordionTrigger>
                          <AccordionContent>
                            <ul className="text-sm space-y-1 text-gray-700">
                              <li>• Lightweight, breathable clothing</li>
                              <li>• Sun hat and sunglasses</li>
                              <li>• Sunscreen (SPF 30+)</li>
                              <li>• Portable fan</li>
                              <li>• Umbrella (rain and sun)</li>
                              <li>• Light rain jacket</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="fall">
                          <AccordionTrigger>Fall</AccordionTrigger>
                          <AccordionContent>
                            <ul className="text-sm space-y-1 text-gray-700">
                              <li>• Medium-weight jacket</li>
                              <li>• Layerable clothing</li>
                              <li>• Light scarf</li>
                              <li>• Comfortable walking shoes</li>
                              <li>• Camera for fall foliage</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="winter">
                          <AccordionTrigger>Winter</AccordionTrigger>
                          <AccordionContent>
                            <ul className="text-sm space-y-1 text-gray-700">
                              <li>• Warm, insulated coat</li>
                              <li>• Thermal underwear</li>
                              <li>• Hat, gloves, and scarf</li>
                              <li>• Waterproof boots</li>
                              <li>• Lip balm and moisturizer</li>
                              <li>• Heat packs</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                        Common Scams to Avoid
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <h4 className="font-medium">Taxi Overcharging</h4>
                        <p className="text-sm text-gray-700">
                          Some taxis may take longer routes or claim the meter is broken. Use official taxis and insist on the meter.
                        </p>
                    </div>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="font-medium">"Tea Ceremony" Scam</h4>
                        <p className="text-sm text-gray-700">
                          Friendly locals invite you to an expensive traditional tea ceremony and leave you with the bill.
                        </p>
                    </div>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="font-medium">Counterfeit Goods</h4>
                        <p className="text-sm text-gray-700">
                          Be cautious of unusually cheap luxury items or electronics, especially in markets.
                        </p>
                    </div>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Travel Apps</CardTitle>
                        <CardDescription>Essential apps for navigating Korea</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-yellow-100 p-2 rounded">
                            <Smartphone className="h-5 w-5 text-yellow-600" />
                    </div>
                          <div>
                            <h4 className="font-medium text-sm">Kakao Map</h4>
                            <p className="text-xs text-gray-500">Best for navigation and public transit</p>
                  </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded">
                            <Smartphone className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">Naver Map</h4>
                            <p className="text-xs text-gray-500">Detailed maps with English support</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-100 p-2 rounded">
                            <Smartphone className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">Subway Korea</h4>
                            <p className="text-xs text-gray-500">Dedicated subway app with offline maps</p>
                          </div>
                        </div>
                </CardContent>
              </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Long Distance Travel</CardTitle>
                        <CardDescription>Options for traveling between cities</CardDescription>
                </CardHeader>
                      <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">KTX (High-Speed)</span>
                          <Badge>Fastest</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">ITX/Saemaeul</span>
                          <Badge variant="outline">Mid-price</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">Mugunghwa</span>
                          <Badge variant="outline">Budget</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">Express Bus</span>
                          <Badge variant="outline">Flexible</Badge>
                    </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">Domestic Flight</span>
                          <Badge>Best for Jeju</Badge>
                  </div>
                        
                        <div className="mt-2 pt-2 border-t">
                          <a href="#" className="text-blue-600 hover:underline text-sm inline-flex items-center">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Book train tickets online
                          </a>
                        </div>
                </CardContent>
              </Card>
                    
                    <SponsoredContent
                      title="Private Car Service"
                      description="Explore Korea with a personal driver & guide"
                      action="Book Now"
                      href="#"
                    />
                  </div>
                </div>
            </div>
          </TabsContent>

            {/* 문화 탭 */}
            <TabsContent value="culture" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  {/* 문화적 특성 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-red-500" />
                        Cultural Etiquette
                      </CardTitle>
                      <CardDescription>Important customs and social norms</CardDescription>
                </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Understanding Korean cultural norms will enhance your travel experience and help you avoid unintentional offense. Koreans are generally forgiving of foreigners unfamiliar with local customs, but making an effort is always appreciated.
                      </p>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="respect">
                          <AccordionTrigger>Respect and Hierarchy</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <p className="text-sm text-gray-700">
                              Korean society is heavily influenced by Confucianism, which emphasizes respect for elders and social hierarchy. Age and social status significantly impact how people interact with each other.
                            </p>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Key Points:</h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li>Use both hands when giving or receiving items from elders</li>
                                <li>Allow elders to sit first and begin eating first</li>
                                <li>Younger people often pour drinks for elders</li>
                                <li>Koreans may ask your age early in conversation to establish social hierarchy</li>
                                <li>Different speech levels exist in Korean language based on relationship</li>
                              </ul>
                    </div>
                            
                            <div className="bg-amber-50 p-3 rounded-lg">
                              <p className="text-sm text-amber-700">
                                <span className="font-medium">Tip:</span> When receiving something from an elder, it's customary to support your right arm with your left hand as a sign of respect.
                              </p>
                    </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="greetings">
                          <AccordionTrigger>Greetings and Body Language</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <div className="space-y-2">
                              <h4 className="font-medium">Bowing</h4>
                              <p className="text-sm text-gray-700">
                                Bowing is the traditional Korean greeting, though handshakes are also common in business settings. The depth and duration of a bow often reflects the level of respect being shown.
                              </p>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li>Slight nod: Casual greeting between peers</li>
                                <li>15° bow: Standard polite greeting</li>
                                <li>30-45° bow: Shows greater respect to elders or in formal settings</li>
                                <li>90° bow: Very formal, used in ceremonies or for deep apologies</li>
                              </ul>
                    </div>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Physical Contact</h4>
                              <p className="text-sm text-gray-700">
                                Koreans are generally less physically expressive with strangers than Westerners, though this is changing among younger generations.
                              </p>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li>Limited public displays of affection</li>
                                <li>Friends of the same gender may link arms or hold hands</li>
                                <li>Avoid touching someone's head (considered sacred)</li>
                                <li>Personal space may be smaller in crowded situations</li>
                              </ul>
                    </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="dining">
                          <AccordionTrigger>Dining Etiquette</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <p className="text-sm text-gray-700">
                              Korean meals are typically communal affairs with multiple shared dishes. Following proper dining etiquette shows respect for both the food and your companions.
                            </p>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Table Manners</h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li>Wait for elders to start eating before you begin</li>
                                <li>Do not start eating until the eldest person has begun</li>
                                <li>Hold rice bowl in your hand; leave soup bowl on the table</li>
                                <li>Never stick chopsticks upright in rice (resembles funeral rituals)</li>
                                <li>Slurping noodles is acceptable and shows appreciation</li>
                                <li>Keep conversation light and positive during meals</li>
                              </ul>
                  </div>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Drinking Culture</h4>
                              <p className="text-sm text-gray-700">
                                Drinking plays an important role in Korean social life and business relationships.
                              </p>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li>Never pour your own drink; pour for others and they will reciprocate</li>
                                <li>Turn your head away slightly when drinking in presence of elders</li>
                                <li>Hold glass with both hands when receiving a pour from an elder</li>
                                <li>It's acceptable to politely decline alcohol if you don't drink</li>
                                <li>Drinking games are common in social settings</li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="shoes">
                          <AccordionTrigger>Shoes and Homes</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <p className="text-sm text-gray-700">
                              Removing shoes before entering homes, traditional restaurants, temples, and certain areas is a strictly observed custom in Korea.
                            </p>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">When to Remove Shoes</h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li>Private homes (always)</li>
                                <li>Traditional restaurants with floor seating</li>
                                <li>Temples and sacred places</li>
                                <li>Fitting rooms in clothing stores</li>
                                <li>Traditional hanok accommodations</li>
                                <li>Some guesthouses and hostels</li>
                              </ul>
                            </div>
                            
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-sm text-blue-700">
                                <span className="font-medium">Tip:</span> Look for shoe racks, slippers, or other people's shoes placed neatly at the entrance as indicators that you should remove your shoes. If slippers are provided, use them for walking around indoors, but remove them before stepping onto ondol (heated) floors with sitting cushions.
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                </CardContent>
              </Card>

                  {/* 축제 및 전통 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <CalendarDays className="h-5 w-5 text-amber-500" />
                        Festivals and Traditions
                      </CardTitle>
                      <CardDescription>Seasonal celebrations and cultural events</CardDescription>
                </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Korean festivals offer visitors a chance to experience traditional culture, modern entertainment, and seasonal beauty. Many festivals are tied to agricultural cycles or historical events.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border rounded-lg overflow-hidden">
                          <div className="aspect-video bg-pink-100">
                            <img 
                              src="/placeholder.svg?height=160&width=320" 
                              alt="Cherry Blossom Festival" 
                              className="w-full h-full object-cover"
                            />
                    </div>
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">Cherry Blossom Festivals</h4>
                              <Badge>April</Badge>
                    </div>
                            <p className="text-sm text-gray-700 mb-2">
                              Celebrations of spring when cherry trees bloom across the country. Major festivals in Jinhae, Yeouido (Seoul), and Gyeongju.
                            </p>
                            <div className="text-sm text-gray-500">
                              Features: Night illuminations, cultural performances, food stalls, photo zones
                    </div>
                    </div>
                  </div>
                        
                        <div className="border rounded-lg overflow-hidden">
                          <div className="aspect-video bg-blue-100">
                            <img 
                              src="/placeholder.svg?height=160&width=320" 
                              alt="Boryeong Mud Festival" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">Boryeong Mud Festival</h4>
                              <Badge>July</Badge>
                            </div>
                            <p className="text-sm text-gray-700 mb-2">
                              Korea's most famous summer festival featuring mud slides, mud wrestling, and mud baths using mineral-rich mud from Boryeong.
                            </p>
                            <div className="text-sm text-gray-500">
                              Features: Mud playground, beach concerts, fireworks, cosmetic experiences
                            </div>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg overflow-hidden">
                          <div className="aspect-video bg-amber-100">
                            <img 
                              src="/placeholder.svg?height=160&width=320" 
                              alt="Chuseok" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">Chuseok (Korean Thanksgiving)</h4>
                              <Badge>September/October</Badge>
                            </div>
                            <p className="text-sm text-gray-700 mb-2">
                              Major harvest festival and three-day holiday when families gather to honor ancestors and share traditional foods.
                            </p>
                            <div className="text-sm text-gray-500">
                              Features: Songpyeon rice cakes, ancestral ceremonies, folk games, family gatherings
                            </div>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg overflow-hidden">
                          <div className="aspect-video bg-red-100">
                            <img 
                              src="/placeholder.svg?height=160&width=320" 
                              alt="Busan International Film Festival" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">Busan International Film Festival</h4>
                              <Badge>October</Badge>
                            </div>
                            <p className="text-sm text-gray-700 mb-2">
                              One of Asia's most significant film festivals, showcasing movies from around the world with a focus on Asian cinema.
                            </p>
                            <div className="text-sm text-gray-500">
                              Features: Film screenings, red carpet events, guest appearances by celebrities, outdoor cinema
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Traditional Holidays</h4>
                        <div className="space-y-2">
                          <div className="border-b pb-2">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">Seollal (Lunar New Year)</span>
                              <Badge variant="outline">January/February</Badge>
                            </div>
                            <p className="text-sm text-gray-600">Three-day celebration with family gatherings, ancestral rites, and traditional games</p>
                          </div>
                          <div className="border-b pb-2">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">Dano Festival</span>
                              <Badge variant="outline">May/June</Badge>
                            </div>
                            <p className="text-sm text-gray-600">Traditional spring festival with shamanistic rituals, swing competitions, and washing hair with iris water</p>
                          </div>
                          <div className="border-b pb-2">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">Dongji (Winter Solstice)</span>
                              <Badge variant="outline">December</Badge>
                            </div>
                            <p className="text-sm text-gray-600">Celebration of the year's longest night with red bean porridge to ward off evil spirits</p>
                          </div>
                        </div>
                      </div>
                </CardContent>
              </Card>

                  {/* 한류와 현대 문화 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <Music className="h-5 w-5 text-blue-500" />
                        Hallyu (Korean Wave)
                      </CardTitle>
                      <CardDescription>Korea's global cultural influence</CardDescription>
                </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Hallyu refers to the global popularity of South Korean culture, including K-pop, K-dramas, movies, beauty products, and food. This cultural phenomenon has transformed Korea into a major soft power and tourist destination.
                      </p>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="k-pop">
                          <AccordionTrigger>K-Pop</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <p className="text-sm text-gray-700">
                              Korean pop music has achieved massive global popularity with its catchy tunes, synchronized choreography, high-production music videos, and carefully cultivated idol groups.
                            </p>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">K-Pop Experiences in Korea</h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li>Watch music shows like M Countdown, Music Bank, or Inkigayo (requires pre-registration)</li>
                                <li>Visit HYBE Insight, SM Town, or K-Star Road for exhibitions</li>
                                <li>Shop for merchandise at stores in Myeongdong and Hongdae</li>
                                <li>Take K-pop dance classes offered for tourists</li>
                                <li>Visit cafés owned by K-pop idols</li>
                              </ul>
                            </div>
                            
                            <div className="bg-purple-50 p-3 rounded-lg">
                              <p className="text-sm text-purple-700">
                                <span className="font-medium">Tip:</span> Check your favorite groups' official social media for pop-up events and exhibitions during your visit. Many are temporary but offer unique experiences for fans.
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="kdrama">
                          <AccordionTrigger>K-Dramas and Movies</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <p className="text-sm text-gray-700">
                              Korean television dramas and films have gained international acclaim for their compelling storytelling, high production quality, and emotional depth. Many tourists visit filming locations of their favorite shows.
                            </p>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Popular Filming Locations</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="bg-gray-50 p-3 rounded">
                      <span className="font-medium">Nami Island</span>
                                  <p className="text-xs text-gray-600">Featured in "Winter Sonata"</p>
                    </div>
                                <div className="bg-gray-50 p-3 rounded">
                                  <span className="font-medium">Bukchon Hanok Village</span>
                                  <p className="text-xs text-gray-600">Featured in numerous historical dramas</p>
                    </div>
                                <div className="bg-gray-50 p-3 rounded">
                                  <span className="font-medium">Gangnam</span>
                                  <p className="text-xs text-gray-600">"Itaewon Class" and other modern dramas</p>
                    </div>
                                <div className="bg-gray-50 p-3 rounded">
                      <span className="font-medium">Petite France</span>
                                  <p className="text-xs text-gray-600">"My Love From the Star"</p>
                    </div>
                  </div>
                            </div>
                            
                            <p className="text-sm text-gray-700">
                              The Korean Film Council offers self-guided tour maps of filming locations for major productions, available at tourist information centers.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="beauty">
                          <AccordionTrigger>K-Beauty</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <p className="text-sm text-gray-700">
                              Korean beauty products and skincare routines have revolutionized the global beauty industry with innovative ingredients, cute packaging, and the famous 10-step skincare regimen.
                            </p>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">K-Beauty Shopping Districts</h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li><span className="font-medium">Myeongdong:</span> Highest concentration of beauty stores with frequent sales and free samples</li>
                                <li><span className="font-medium">Hongdae:</span> Trendy beauty shops popular with younger Koreans</li>
                                <li><span className="font-medium">Gangnam:</span> High-end and luxury beauty brands</li>
                                <li><span className="font-medium">Duty-Free Shops:</span> Good deals on premium Korean brands</li>
                              </ul>
                            </div>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Popular K-Beauty Experiences</h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li>Get a personalized skin analysis at major brand stores</li>
                                <li>Try a Korean facial or sheet mask experience</li>
                                <li>Visit Olive Young for a comprehensive selection of brands</li>
                                <li>Create custom cosmetics at experience centers</li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                </CardContent>
              </Card>
                  
                  {/* 생활 방식 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <Coffee className="h-5 w-5 text-green-500" />
                        Modern Lifestyle
                      </CardTitle>
                      <CardDescription>Contemporary Korean culture and social trends</CardDescription>
                </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Beyond traditional culture, Korea has a vibrant contemporary lifestyle with unique social trends, cafés, nightlife, and technology that visitors find fascinating.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border rounded-lg overflow-hidden">
                          <div className="bg-amber-500 p-3 text-white font-medium">
                            Café Culture
                          </div>
                          <div className="p-4">
                            <p className="text-sm text-gray-700 mb-3">
                              Korea has one of the world's most developed café cultures, with themed cafés, dessert cafés, and unique concepts on nearly every street.
                            </p>
                            <ul className="text-sm space-y-1 text-gray-700 list-disc pl-5">
                              <li>Animal cafés (cat, dog, raccoon, sheep)</li>
                              <li>Themed cafés based on characters or concepts</li>
                              <li>Traditional tea houses in hanok buildings</li>
                              <li>Instagram-worthy dessert cafés</li>
                              <li>Study cafés where people work for hours</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg overflow-hidden">
                          <div className="bg-purple-500 p-3 text-white font-medium">
                            PC Bang & Gaming
                          </div>
                          <div className="p-4">
                            <p className="text-sm text-gray-700 mb-3">
                              Gaming is a major part of Korean culture, from casual mobile games to professional e-sports leagues that fill stadiums.
                            </p>
                            <ul className="text-sm space-y-1 text-gray-700 list-disc pl-5">
                              <li>PC Bang: Gaming cafés with high-end computers</li>
                              <li>E-sports arenas in Seoul and Busan</li>
                              <li>Game-themed attractions and museums</li>
                              <li>Arcades with unique games not found elsewhere</li>
                              <li>Nexon Computer Museum in Jeju</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg overflow-hidden">
                          <div className="bg-blue-500 p-3 text-white font-medium">
                            Jjimjilbang (Korean Spa)
                          </div>
                          <div className="p-4">
                            <p className="text-sm text-gray-700 mb-3">
                              Traditional Korean bathhouses evolved into massive spa complexes where people relax, socialize, eat, and even stay overnight.
                            </p>
                            <ul className="text-sm space-y-1 text-gray-700 list-disc pl-5">
                              <li>Gender-separated bathing areas</li>
                              <li>Common areas with heated floors for relaxing</li>
                              <li>Various saunas at different temperatures</li>
                              <li>Food courts serving Korean snacks</li>
                              <li>Affordable place to spend the night</li>
                            </ul>
                      </div>
                    </div>
                        
                        <div className="border rounded-lg overflow-hidden">
                          <div className="bg-red-500 p-3 text-white font-medium">
                            Noraebang (Karaoke Rooms)
                          </div>
                          <div className="p-4">
                            <p className="text-sm text-gray-700 mb-3">
                              Private singing rooms where friends gather to sing, dance, and socialize without the pressure of performing for strangers.
                            </p>
                            <ul className="text-sm space-y-1 text-gray-700 list-disc pl-5">
                              <li>Private rooms rented by the hour</li>
                              <li>Extensive song selections including English hits</li>
                              <li>Food and drink service available</li>
                              <li>Tambourines and simple instruments provided</li>
                              <li>Popular night activity for all age groups</li>
                      </ul>
                          </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
                </div>

                {/* 사이드바 */}
                <div className="space-y-6">
                  <Card>
                <CardHeader>
                      <CardTitle>Cultural Experiences</CardTitle>
                </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border-b pb-3">
                        <h4 className="font-medium mb-1">Try Traditional Hanbok</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Rent traditional Korean attire for a few hours and visit palaces or hanok villages. Many rental shops in Gyeongbokgung and Bukchon areas.
                        </p>
                        <div className="text-sm text-blue-600">
                          Bonus: Free entry to royal palaces when wearing hanbok
                    </div>
                    </div>
                      
                      <div className="border-b pb-3">
                        <h4 className="font-medium mb-1">Traditional Craft Workshops</h4>
                        <p className="text-sm text-gray-600">
                          Try hanji (paper) crafts, pottery making, or traditional dyeing in workshops throughout Seoul and other cities.
                        </p>
                    </div>
                      
                      <div className="border-b pb-3">
                        <h4 className="font-medium mb-1">Temple Stay Programs</h4>
                        <p className="text-sm text-gray-600">
                          Experience Buddhist monastic life with meditation, tea ceremonies, and temple food at locations throughout Korea.
                        </p>
                  </div>
                      
                      <div>
                        <h4 className="font-medium mb-1">Traditional Performances</h4>
                        <p className="text-sm text-gray-600">
                          Watch performances of Korean traditional music (Gugak), dance, or martial arts at venues like the National Gugak Center.
                        </p>
                      </div>
                </CardContent>
              </Card>

            <Card>
              <CardHeader>
                      <CardTitle>Survival Korean</CardTitle>
              </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="bg-gray-50 p-2 rounded flex justify-between">
                          <span className="text-sm">안녕하세요</span>
                          <span className="text-sm text-gray-500">An-nyeong-ha-se-yo</span>
                        </div>
                        <p className="text-xs text-gray-600">Hello / Good day</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="bg-gray-50 p-2 rounded flex justify-between">
                          <span className="text-sm">감사합니다</span>
                          <span className="text-sm text-gray-500">Kam-sa-ham-ni-da</span>
                        </div>
                        <p className="text-xs text-gray-600">Thank you</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="bg-gray-50 p-2 rounded flex justify-between">
                          <span className="text-sm">죄송합니다</span>
                          <span className="text-sm text-gray-500">Joe-song-ham-ni-da</span>
                        </div>
                        <p className="text-xs text-gray-600">I'm sorry</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="bg-gray-50 p-2 rounded flex justify-between">
                          <span className="text-sm">영어 할 줄 아세요?</span>
                          <span className="text-sm text-gray-500">Yeong-eo hal jul a-se-yo?</span>
                        </div>
                        <p className="text-xs text-gray-600">Do you speak English?</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="bg-gray-50 p-2 rounded flex justify-between">
                          <span className="text-sm">얼마예요?</span>
                          <span className="text-sm text-gray-500">Eol-ma-ye-yo?</span>
                        </div>
                        <p className="text-xs text-gray-600">How much is it?</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View More Phrases
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <SponsoredContent
                    title="Cultural Experience Package"
                    description="Immerse yourself in Korean culture with guided workshops and performances"
                    action="Book Now"
                    href="#"
                  />
                </div>
              </div>
            </TabsContent>
            
            {/* 안전 탭 */}
            <TabsContent value="safety" className="space-y-8">
              {/* 안전 및 건강 관련 내용 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  {/* 일반 안전 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-500" />
                        General Safety
                      </CardTitle>
                      <CardDescription>Korea is one of the safest countries for travelers</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        South Korea consistently ranks as one of the safest countries in the world for travelers. Violent crime is rare, and most visitors experience trouble-free trips. However, it's still important to take normal precautions.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-medium text-green-700 mb-2">Safety Highlights</h4>
                          <ul className="space-y-1.5 text-sm text-green-700">
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>Low crime rate, especially violent crime</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>Safe for solo travelers, including women</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>Lost items often returned intact</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>Extensive CCTV coverage in public areas</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>Police presence in tourist areas</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>Safe to use public transportation at night</span>
                            </li>
                    </ul>
                  </div>
                        
                        <div className="bg-amber-50 p-4 rounded-lg">
                          <h4 className="font-medium text-amber-700 mb-2">Common Concerns</h4>
                          <ul className="space-y-1.5 text-sm text-amber-700">
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>Pickpocketing in crowded tourist areas</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>Taxi scams (overcharging foreigners)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>Scams targeting tourists in nightlife districts</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>Language barriers during emergencies</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>Heavy drinking culture can lead to accidents</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>Occasional political tensions with North Korea</span>
                            </li>
                    </ul>
                  </div>
                </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Safety Tips</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                          <li>Keep a copy of your passport and travel insurance information</li>
                          <li>Store emergency contact numbers in your phone</li>
                          <li>Be cautious when drinking with strangers in nightlife districts</li>
                          <li>Use licensed taxis or established ride-hailing apps</li>
                          <li>Respect local customs and laws, especially regarding drugs (very strict)</li>
                          <li>Register with your country's embassy if staying for an extended period</li>
                        </ul>
                      </div>
              </CardContent>
            </Card>
                  
                  {/* 의료 및 건강 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="h-5 w-5 text-red-500" />
                        Healthcare & Medical Services
                      </CardTitle>
                      <CardDescription>World-class medical facilities for travelers</CardDescription>
                </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        South Korea boasts a world-class healthcare system with modern facilities and well-trained medical professionals. Many hospitals in major cities have international clinics with English-speaking staff.
                      </p>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="hospitals">
                          <AccordionTrigger>Hospitals & Clinics</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <p className="text-sm text-gray-700">
                              Korean hospitals are divided into several tiers:
                            </p>
                            
                            <div className="space-y-2">
                              <div className="border-b pb-2">
                                <h4 className="font-medium">University Hospitals</h4>
                                <p className="text-sm text-gray-600">Large medical centers with all specialties and advanced technology. Many have international clinics.</p>
                    </div>
                              <div className="border-b pb-2">
                                <h4 className="font-medium">General Hospitals</h4>
                                <p className="text-sm text-gray-600">Medium to large facilities with multiple departments. Good for serious conditions.</p>
                    </div>
                              <div className="border-b pb-2">
                                <h4 className="font-medium">Specialized Clinics</h4>
                                <p className="text-sm text-gray-600">Private practices focusing on specific medical fields. Good for non-emergency issues.</p>
                    </div>
                    <div>
                                <h4 className="font-medium">Pharmacies</h4>
                                <p className="text-sm text-gray-600">Widely available and marked with a green cross sign. Some in tourist areas have English-speaking staff.</p>
                    </div>
                  </div>
                            
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <h4 className="font-medium text-blue-700 mb-1">Recommended Hospitals with International Clinics</h4>
                              <ul className="space-y-1 text-sm text-blue-700">
                                <li><span className="font-medium">Seoul:</span> Severance Hospital, Seoul National University Hospital, Samsung Medical Center</li>
                                <li><span className="font-medium">Busan:</span> Pusan National University Hospital, Dong-A University Hospital</li>
                                <li><span className="font-medium">Jeju:</span> Jeju National University Hospital</li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="insurance">
                          <AccordionTrigger>Medical Insurance</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <p className="text-sm text-gray-700">
                              Travel insurance with medical coverage is highly recommended for all visitors to Korea. While healthcare is relatively affordable compared to countries like the USA, costs can still be significant for serious conditions.
                            </p>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Medical Costs (Approximate)</h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li>Doctor consultation: ₩15,000-30,000 ($12-25)</li>
                                <li>Emergency room visit: ₩100,000-200,000 ($80-160)</li>
                                <li>Hospital stay per day: ₩100,000-500,000 ($80-400)</li>
                                <li>Ambulance service: ₩30,000-100,000 ($25-80)</li>
                              </ul>
                            </div>
                            
                            <div className="bg-amber-50 p-3 rounded-lg">
                              <p className="text-sm text-amber-700">
                                <span className="font-medium">Important:</span> Many hospitals require upfront payment and do not directly bill foreign insurance companies. Keep all receipts for reimbursement claims.
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="pharmacy">
                          <AccordionTrigger>Medication & Pharmacies</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <p className="text-sm text-gray-700">
                              In Korea, there's a strict separation between prescribing and dispensing. Doctors prescribe medications, which you then take to a pharmacy to be filled.
                            </p>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Pharmacy Tips</h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li>Pharmacies are marked with a green cross sign (약국/Yakguk)</li>
                                <li>Most are open 9am-7pm on weekdays, with limited weekend hours</li>
                                <li>Some medications that are over-the-counter in other countries require prescriptions in Korea</li>
                                <li>Bring the generic name of medications you need, as brand names may differ</li>
                                <li>Many common medications are available, but formulations may vary</li>
                              </ul>
                            </div>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Bringing Medications to Korea</h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li>Bring enough prescription medications for your entire stay</li>
                                <li>Keep medications in original packaging with prescription labels</li>
                                <li>Bring a doctor's note for controlled substances or injectable medications</li>
                                <li>Some medications containing narcotics or psychotropics may be restricted</li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                </CardContent>
              </Card>

                  {/* 긴급 상황 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-red-500" />
                        Emergency Information
                      </CardTitle>
                      <CardDescription>Important contacts and procedures</CardDescription>
                </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border rounded-lg overflow-hidden">
                          <div className="bg-red-500 text-white p-3 font-medium">
                            Emergency Numbers
                          </div>
                          <div className="p-4 space-y-3">
                            <div className="flex justify-between items-center">
                    <div>
                                <span className="font-medium">Police</span>
                                <p className="text-xs text-gray-500">Crime reporting, emergencies</p>
                    </div>
                              <Badge variant="outline" className="text-lg">112</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                    <div>
                                <span className="font-medium">Fire / Ambulance</span>
                                <p className="text-xs text-gray-500">Medical emergencies, fires</p>
                    </div>
                              <Badge variant="outline" className="text-lg">119</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                    <div>
                                <span className="font-medium">Tourist Helpline</span>
                                <p className="text-xs text-gray-500">24/7 interpretation service</p>
                    </div>
                              <Badge variant="outline" className="text-lg">1330</Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg overflow-hidden">
                          <div className="bg-blue-500 text-white p-3 font-medium">
                            English-Speaking Services
                          </div>
                          <div className="p-4 space-y-3">
                    <div>
                              <span className="font-medium">Embassy of Korea</span>
                              <p className="text-xs text-gray-500">For emergencies, call +82 2 399 1114</p>
                            </div>
                            <div>
                              <span className="font-medium">Korean Red Cross</span>
                              <p className="text-xs text-gray-500">For medical assistance, call +82 2 399 1199</p>
                            </div>
                            <div>
                              <span className="font-medium">Tourist Police</span>
                              <p className="text-xs text-gray-500">For safety and legal assistance, call +82 2 399 1122</p>
                            </div>
                          </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
                </div>

                {/* 사이드바 */}
                <div className="space-y-6">
                  <Card>
                <CardHeader>
                      <CardTitle>Health Tips</CardTitle>
                </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Common Health Issues</h4>
                        <p className="text-sm text-gray-700">
                          Korea has a modern healthcare system, but travelers may still experience common health issues. Be prepared for minor illnesses, allergies, and minor injuries.
                        </p>
                    </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Medical Facilities</h4>
                        <p className="text-sm text-gray-700">
                          Hospitals and clinics are widely available in major cities. Emergency services are reliable, but medical staff may not speak English.
                        </p>
                    </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Emergency Contacts</h4>
                        <p className="text-sm text-gray-700">
                          Keep the following numbers handy:
                          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>Ambulance: 119</li>
                            <li>Police: 112</li>
                            <li>Fire: 119</li>
                            <li>Tourist Police: +82 2 399 1122</li>
                          </ul>
                        </p>
                    </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Travel Insurance</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Why You Need It</h4>
                        <p className="text-sm text-gray-700">
                          Medical emergencies can happen at any time, and having travel insurance can provide peace of mind. It covers medical expenses, lost luggage, and other unexpected situations.
                        </p>
                    </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Finding the Right Plan</h4>
                        <p className="text-sm text-gray-700">
                          Compare plans online to find one that meets your needs. Look for coverage in Korea and consider factors like pre-existing conditions, emergency evacuation, and medical repatriation.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Important Coverage</h4>
                        <p className="text-sm text-gray-700">
                          Ensure your policy includes:
                          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>Medical expenses</li>
                            <li>Emergency medical evacuation</li>
                            <li>Trip cancellation or interruption</li>
                            <li>Baggage loss or delay</li>
                            <li>Travel assistance services</li>
                          </ul>
                        </p>
                  </div>
                </CardContent>
              </Card>

            <Card>
              <CardHeader>
                      <CardTitle>Health and Safety Tips</CardTitle>
              </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Food Safety</h4>
                        <p className="text-sm text-gray-700">
                          Be cautious of street food and food carts. Always wash your hands before eating.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Water Safety</h4>
                        <p className="text-sm text-gray-700">
                          Drink only bottled water. Avoid tap water and ice in public places.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Sun Protection</h4>
                        <p className="text-sm text-gray-700">
                          Korea has a temperate climate, but UV rays can be strong. Use sunscreen, wear a hat, and avoid prolonged sun exposure.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                      </div>
                    </div>
            </TabsContent>

            {/* 쇼핑 탭 */}
            <TabsContent value="shopping" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  {/* 쇼핑 개요 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <ShoppingBag className="h-5 w-5 text-pink-500" />
                        Shopping in Korea
                      </CardTitle>
                      <CardDescription>From traditional markets to luxury malls</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Korea offers diverse shopping experiences, from massive modern malls to traditional markets and specialized shopping districts. Seoul is a shopping paradise, but other cities like Busan and Daegu also have excellent options.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border rounded-lg overflow-hidden">
                          <div className="aspect-video bg-gray-100">
                            <img 
                              src="/placeholder.svg?height=160&width=320" 
                              alt="Myeongdong Shopping District" 
                              className="w-full h-full object-cover"
                            />
                  </div>
                          <div className="p-4">
                            <h4 className="font-medium mb-1">Shopping Districts</h4>
                            <p className="text-sm text-gray-700 mb-2">
                              Specialized areas focusing on specific products or experiences
                            </p>
                            <ul className="text-sm space-y-1 text-gray-700 list-disc pl-5">
                              <li>Myeongdong: Beauty products, fashion, street food</li>
                              <li>Dongdaemun: 24-hour fashion market, wholesale</li>
                              <li>Hongdae: Indie fashion, unique gifts, art supplies</li>
                              <li>Gangnam: Luxury brands, high-end shopping</li>
                              <li>Insadong: Traditional crafts, souvenirs, tea houses</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg overflow-hidden">
                          <div className="aspect-video bg-gray-100">
                            <img 
                              src="/placeholder.svg?height=160&width=320" 
                              alt="Traditional Market" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="font-medium mb-1">Traditional Markets</h4>
                            <p className="text-sm text-gray-700 mb-2">
                              Authentic experiences with local vendors and unique finds
                            </p>
                            <ul className="text-sm space-y-1 text-gray-700 list-disc pl-5">
                              <li>Gwangjang Market: Food and textiles, oldest market</li>
                              <li>Namdaemun Market: Korea's largest traditional market</li>
                              <li>Tongin Market: Food alley with traditional lunchboxes</li>
                              <li>Noryangjin Fish Market: Fresh seafood, 24 hours</li>
                              <li>Mangwon Market: Local produce and street food</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="department">
                          <AccordionTrigger>Department Stores & Malls</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <p className="text-sm text-gray-700">
                              Korean department stores offer high-quality products, excellent customer service, and elaborate food courts. They're ideal for one-stop shopping in comfortable surroundings.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div className="bg-gray-50 p-3 rounded">
                                <h4 className="font-medium">Lotte Department Store</h4>
                                <p className="text-sm text-gray-600 mt-1">Korea's largest department store chain with branches nationwide. The flagship store in Myeongdong has duty-free shopping and a rooftop garden.</p>
                              </div>
                              <div className="bg-gray-50 p-3 rounded">
                                <h4 className="font-medium">Shinsegae</h4>
                                <p className="text-sm text-gray-600 mt-1">Luxury department store chain. The Gangnam branch is connected to Starfield COEX Mall, forming one of the largest shopping complexes in Korea.</p>
                              </div>
                              <div className="bg-gray-50 p-3 rounded">
                                <h4 className="font-medium">Hyundai Department Store</h4>
                                <p className="text-sm text-gray-600 mt-1">Upscale department store with excellent food courts. The COEX branch specializes in luxury brands.</p>
                              </div>
                              <div className="bg-gray-50 p-3 rounded">
                                <h4 className="font-medium">Times Square Mall</h4>
                                <p className="text-sm text-gray-600 mt-1">Massive shopping and entertainment complex in Yeongdeungpo with cinema, department store, and specialty shops.</p>
                              </div>
                            </div>
                            
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <h4 className="font-medium text-blue-700 mb-1">Department Store Tips</h4>
                              <ul className="text-sm space-y-1 text-blue-700">
                                <li>• Visit during major sale periods (January, July, and holidays)</li>
                                <li>• Food courts are typically on the basement levels (B1, B2)</li>
                                <li>• Most stores offer tax refunds for tourists (look for Tax Free signs)</li>
                                <li>• Luxury brands are often cheaper than in other countries</li>
                                <li>• Department stores often hold cultural events and exhibitions</li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="duty-free">
                          <AccordionTrigger>Duty-Free Shopping</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <p className="text-sm text-gray-700">
                              Korea is renowned for its extensive duty-free shopping options, offering savings on luxury goods, cosmetics, electronics, and local products.
                            </p>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Major Duty-Free Retailers</h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li><span className="font-medium">Lotte Duty Free:</span> Locations in Myeongdong, major department stores, and airports</li>
                                <li><span className="font-medium">Shilla Duty Free:</span> Flagship store in Dongdaemun and airport locations</li>
                                <li><span className="font-medium">Shinsegae Duty Free:</span> Located in Myeongdong and Gangnam</li>
                                <li><span className="font-medium">Airport Duty Free:</span> Extensive shopping at Incheon and Gimpo airports</li>
                              </ul>
                            </div>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">How It Works</h4>
                              <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                                <li>Bring your passport when shopping at duty-free stores</li>
                                <li>Some downtown duty-free stores offer "pickup on departure" - you shop in the city but collect items at the airport</li>
                                <li>There are purchase limits depending on the country you're returning to</li>
                                <li>Popular items include Korean cosmetics, luxury brands, ginseng, and electronics</li>
                                <li>Prices are often lower than other countries, even for international brands</li>
                              </ol>
                            </div>
                            
                            <div className="bg-amber-50 p-3 rounded-lg">
                              <p className="text-sm text-amber-700">
                                <span className="font-medium">Note:</span> Allow extra time at the airport if you need to pick up duty-free items before your departure. Some collection points are located after immigration but before your gate.
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="online">
                          <AccordionTrigger>Online Shopping</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <p className="text-sm text-gray-700">
                              Korea has a sophisticated online shopping ecosystem. While some platforms require a Korean phone number or address, there are options for tourists.
                            </p>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Tourist-Friendly Options</h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li><span className="font-medium">Global G-Market:</span> English interface available, ships to hotels</li>
                                <li><span className="font-medium">Coupang Global:</span> Some international shipping options</li>
                                <li><span className="font-medium">Olive Young Global:</span> International shipping for Korean cosmetics</li>
                                <li><span className="font-medium">Style Korean:</span> K-beauty focused with worldwide shipping</li>
                                <li><span className="font-medium">Gmarket Global:</span> Wide selection with English support</li>
                              </ul>
                            </div>
                            
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-sm text-blue-700">
                                <span className="font-medium">Tip:</span> If staying at an Airbnb or with friends, you can use their address for delivery. Many hotels will also accept packages for guests - check their policy in advance.
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                  
                  {/* 추천 구매 항목 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <ShoppingCart className="h-5 w-5 text-green-500" />
                        What to Buy
                      </CardTitle>
                      <CardDescription>Popular Korean souvenirs and products</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Korea offers unique shopping opportunities with products that combine quality, innovation, and cultural significance. Here are some of the most popular items to bring home.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                          <div className="aspect-video rounded-lg bg-gradient-to-r from-pink-100 to-pink-200 mb-3 flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                              <span className="text-pink-700 font-bold text-lg">K-Beauty</span>
                      </div>
                      </div>
                          <h4 className="font-medium mb-2">Korean Cosmetics & Skincare</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Korea is world-renowned for innovative skincare and makeup products, often featuring unique ingredients and cute packaging.
                          </p>
                          <ul className="text-sm space-y-1.5 text-gray-700 list-disc pl-5">
                            <li>Sheet masks (varieties for every skin concern)</li>
                            <li>Snail mucin products (popular for hydration)</li>
                            <li>Cushion compacts (foundation with applicator)</li>
                            <li>Skincare sets from major brands</li>
                            <li>Sunscreens (lightweight and effective)</li>
                            <li>Popular brands: Innisfree, Etude House, COSRX, Laneige</li>
                          </ul>
                      </div>
                        
                        <div>
                          <div className="aspect-video rounded-lg bg-gradient-to-r from-amber-100 to-amber-200 mb-3 flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                              <span className="text-amber-700 font-bold text-lg">Traditional Crafts</span>
                      </div>
                    </div>
                          <h4 className="font-medium mb-2">Traditional Korean Souvenirs</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Authentic cultural items that showcase Korea's artistic heritage and make meaningful gifts.
                          </p>
                          <ul className="text-sm space-y-1.5 text-gray-700 list-disc pl-5">
                            <li>Hanji (traditional paper) products</li>
                            <li>Celadon pottery (distinctive pale green glaze)</li>
                            <li>Hanbok accessories (traditional clothing elements)</li>
                            <li>Hangeul (Korean alphabet) items</li>
                            <li>Traditional masks and dolls</li>
                            <li>Best bought in: Insadong, Bukchon, folk villages</li>
                          </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
                </div>
                
                {/* 사이드바 */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Shopping Tips</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Tax Refunds</h4>
                        <p className="text-sm text-gray-700">
                          Korea has a tax-refund system for foreign tourists. Make sure to ask for a tax-refund form at participating stores and present your passport when leaving the country.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Best Time to Shop</h4>
                        <p className="text-sm text-gray-700">
                          Korea has several major sales periods throughout the year:
                          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>January: New Year sales</li>
                            <li>July: Mid-year sales</li>
                            <li>October: Korean Wave Festival</li>
                            <li>December: Year-end sales</li>
                          </ul>
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Where to Shop</h4>
                        <p className="text-sm text-gray-700">
                          Seoul has numerous shopping districts:
                          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>Myeongdong: Cosmetics, fashion, and electronics</li>
                            <li>Gwangjin: Traditional markets and clothing</li>
                            <li>Gangnam: Luxury brands and high-end shopping</li>
                            <li>Insadong: Traditional crafts and tea houses</li>
                            <li>Dongdaemun: Wholesale fashion and accessories</li>
                            <li>Hongdae: Indie fashion and street food</li>
                          </ul>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Shopping Etiquette</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Negotiating Prices</h4>
                        <p className="text-sm text-gray-700">
                          Korean sellers often expect customers to negotiate prices. Be prepared to haggle and don't be afraid to walk away if you're not satisfied.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Tax Inclusive Pricing</h4>
                        <p className="text-sm text-gray-700">
                          Prices in Korea often include tax. Make sure to check if the price you're quoted includes tax before agreeing to purchase.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Gift Giving</h4>
                        <p className="text-sm text-gray-700">
                          Korea is a great place to buy gifts for friends and family. Popular items include Korean cosmetics, traditional crafts, and local specialties.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </div>
  )
}
