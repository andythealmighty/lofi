"use client"

import { useState } from "react"
import { ArrowLeft, Search, Filter, Star, MapPin, Globe, DollarSign, Utensils, Heart, ChevronsUpDown, Clock, AlertCircle, ExternalLink, Flame, Coffee, Wine, Building, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { SponsoredContent } from "@/components/sponsored-content"
import Link from "next/link"

export default function FoodGuidePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([1, 3])
  const [spicyLevel, setSpicyLevel] = useState<string[]>([])
  const [dietaryOptions, setDietaryOptions] = useState<string[]>([])
  
  const toggleDietaryOption = (value: string) => {
    setDietaryOptions(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }
  
  const toggleSpicyLevel = (value: string) => {
    setSpicyLevel(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }
  
  const foodCategories = [
    { id: "korean-bbq", name: "Korean BBQ", icon: <Flame className="h-4 w-4" /> },
    { id: "street-food", name: "Street Food", icon: <Utensils className="h-4 w-4" /> },
    { id: "stews-soups", name: "Stews & Soups", icon: <Coffee className="h-4 w-4" /> },
    { id: "seafood", name: "Seafood", icon: <Utensils className="h-4 w-4" /> },
    { id: "rice-dishes", name: "Rice Dishes", icon: <Utensils className="h-4 w-4" /> },
    { id: "noodles", name: "Noodles", icon: <Utensils className="h-4 w-4" /> },
    { id: "cafe-dessert", name: "Cafes & Dessert", icon: <Coffee className="h-4 w-4" /> },
    { id: "drinks-alcohol", name: "Traditional Drinks", icon: <Wine className="h-4 w-4" /> },
  ]
  
  const popularDishes = [
    {
      id: "bulgogi",
      name: "Bulgogi (불고기)",
      category: "korean-bbq",
      image: "from-orange-500 to-red-500",
      description: "Marinated beef or pork cooked on a grill, often served with rice and vegetables.",
      spicyLevel: "mild",
      price: "$$",
      dietaryOptions: ["contains-meat"]
    },
    {
      id: "bibimbap",
      name: "Bibimbap (비빔밥)",
      category: "rice-dishes",
      image: "from-green-500 to-yellow-500",
      description: "Mixed rice bowl with vegetables, meat, egg, and gochujang (red chili paste).",
      spicyLevel: "adjustable",
      price: "$$",
      dietaryOptions: ["vegetarian-option"]
    },
    {
      id: "tteokbokki",
      name: "Tteokbokki (떡볶이)",
      category: "street-food",
      image: "from-red-600 to-red-700",
      description: "Spicy rice cakes in a sweet and spicy sauce, a popular street food.",
      spicyLevel: "hot",
      price: "$",
      dietaryOptions: ["vegetarian"]
    },
    {
      id: "kimchi-jjigae",
      name: "Kimchi Jjigae (김치찌개)",
      category: "stews-soups",
      image: "from-red-500 to-orange-500",
      description: "Spicy kimchi stew with tofu, pork, and vegetables.",
      spicyLevel: "hot",
      price: "$$",
      dietaryOptions: ["contains-meat"]
    },
    {
      id: "japchae",
      name: "Japchae (잡채)",
      category: "noodles",
      image: "from-purple-500 to-indigo-500",
      description: "Sweet potato noodles stir-fried with vegetables and meat, seasoned with soy sauce.",
      spicyLevel: "mild",
      price: "$$",
      dietaryOptions: ["vegetarian-option"]
    },
    {
      id: "samgyeopsal",
      name: "Samgyeopsal (삼겹살)",
      category: "korean-bbq",
      image: "from-stone-500 to-stone-700",
      description: "Grilled pork belly, often eaten wrapped in lettuce with various side dishes.",
      spicyLevel: "mild",
      price: "$$$",
      dietaryOptions: ["contains-meat"]
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 네비게이션 */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/guide" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-lg font-semibold">Back to Guide</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Map View</Button>
              <Button>Download Food Guide</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 헤더 */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold mb-3">Korean Food Guide</h1>
          <p className="text-white/90 max-w-2xl">
            Discover Korea's rich and diverse culinary culture, from street food to traditional dishes and modern fusion cuisine.
          </p>
        </div>
      </div>

      {/* 검색 및 필터 섹션 */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search dishes, ingredients, or food types..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Food Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="bbq">Korean BBQ</SelectItem>
                    <SelectItem value="street">Street Food</SelectItem>
                    <SelectItem value="traditional">Traditional</SelectItem>
                    <SelectItem value="dessert">Desserts & Cafes</SelectItem>
                    <SelectItem value="seafood">Seafood</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {/* 음식 카테고리 */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Explore Korean Cuisine</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {foodCategories.map(category => (
                    <Card key={category.id} className="cursor-pointer hover:bg-gray-50 transition-colors">
                      <CardContent className="p-4 text-center">
                        <div className="bg-red-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <div className="text-red-600">{category.icon}</div>
                        </div>
                        <div className="font-medium text-sm">{category.name}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* 인기 요리 */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Popular Korean Dishes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {popularDishes.map(dish => (
                    <Card key={dish.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className={`h-32 bg-gradient-to-r ${dish.image}`}></div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">{dish.name}</h3>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500">
                            <Heart className="h-5 w-5" />
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{dish.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline">{dish.price}</Badge>
                          <Badge variant={dish.spicyLevel === 'hot' ? 'destructive' : 'outline'}>
                            {dish.spicyLevel === 'mild' ? 'Mild' : 
                             dish.spicyLevel === 'medium' ? 'Medium Spicy' : 
                             dish.spicyLevel === 'hot' ? 'Spicy' : 'Adjustable Spice'}
                          </Badge>
                          {dish.dietaryOptions.includes('vegetarian') && (
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Vegetarian</Badge>
                          )}
                          {dish.dietaryOptions.includes('vegetarian-option') && (
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Veg Option</Badge>
                          )}
                        </div>
                        <Button variant="outline" size="sm" className="w-full">Learn More</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* 지역별 맛집 */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Where to Eat in Seoul</h2>
                <Tabs defaultValue="myeongdong" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="myeongdong">Myeongdong</TabsTrigger>
                    <TabsTrigger value="hongdae">Hongdae</TabsTrigger>
                    <TabsTrigger value="gangnam">Gangnam</TabsTrigger>
                    <TabsTrigger value="itaewon">Itaewon</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="myeongdong" className="space-y-4 mt-4">
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-blue-800">About Myeongdong Food Scene</h4>
                          <p className="text-sm text-blue-700 mt-1">
                            Myeongdong is famous for its vibrant street food stalls and restaurants catering to tourists. Prices may be higher than other areas, but English menus are common.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[1, 2, 3].map(item => (
                        <Card key={item} className="overflow-hidden">
                          <div className="flex flex-col sm:flex-row">
                            <div className="sm:w-48 h-32 sm:h-auto bg-gray-200"></div>
                            <div className="p-4 flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-bold text-lg mb-1">
                                    {item === 1 ? "Myeongdong Kyoja" : 
                                     item === 2 ? "Isaac Toast Myeongdong" : 
                                     "Gogung Bibimbap"}
                                  </h3>
                                  <div className="flex items-center gap-1 mb-2">
                                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                    <span className="font-medium">{4.3 + (item * 0.1)}</span>
                                    <span className="text-gray-500 text-sm">({180 + item * 30} reviews)</span>
                                  </div>
                                </div>
                                <Badge>{item === 1 ? "$$" : item === 2 ? "$" : "$$"}</Badge>
                              </div>
                              
                              <p className="text-sm text-gray-600 mb-3">
                                {item === 1 ? "Famous for handmade kalguksu (knife-cut noodles) and mandu (dumplings)." : 
                                 item === 2 ? "Popular breakfast spot with Korean-style toast sandwiches. Quick and affordable." : 
                                 "Traditional bibimbap restaurant with various options including Jeonju-style bibimbap."}
                              </p>
                              
                              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  <span>Myeongdong Station Exit {item + 3}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  <span>
                                    {item === 1 ? "10:30 AM - 9:30 PM" : 
                                     item === 2 ? "8:00 AM - 10:00 PM" : 
                                     "11:00 AM - 10:00 PM"}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Globe className="h-4 w-4" />
                                  <Link href="#" className="text-blue-600 hover:underline">Website</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="hongdae" className="space-y-4 mt-4">
                    {/* 홍대 맛집 내용 */}
                  </TabsContent>
                  
                  <TabsContent value="gangnam" className="space-y-4 mt-4">
                    {/* 강남 맛집 내용 */}
                  </TabsContent>
                  
                  <TabsContent value="itaewon" className="space-y-4 mt-4">
                    {/* 이태원 맛집 내용 */}
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* 음식 예절 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Languages className="h-5 w-5 text-red-500" />
                    Korean Dining Etiquette
                  </CardTitle>
                  <CardDescription>Important customs to know when dining in Korea</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Accordion type="multiple" className="w-full">
                    <AccordionItem value="chopsticks">
                      <AccordionTrigger>Using Chopsticks & Spoons</AccordionTrigger>
                      <AccordionContent className="text-gray-700 space-y-2">
                        <p>
                          Koreans use metal chopsticks and a spoon for eating. The spoon is for rice and soup, while chopsticks are for everything else.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Don't stick chopsticks upright in rice (resembles funeral rituals)</li>
                          <li>Don't use chopsticks and spoon at the same time</li>
                          <li>Hold rice/soup bowls in your hand is considered impolite in Korea (unlike Japan/China)</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="elders">
                      <AccordionTrigger>Respect for Elders</AccordionTrigger>
                      <AccordionContent className="text-gray-700 space-y-2">
                        <p>
                          Age hierarchy is important in Korean culture, and this extends to dining etiquette.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Wait for elders to start eating before you begin</li>
                          <li>When drinking alcohol, turn away from elders while taking a sip</li>
                          <li>Pour drinks for others (especially elders) before filling your own glass</li>
                          <li>Accept drinks with both hands when served by an elder</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="banchan">
                      <AccordionTrigger>Banchan (Side Dishes)</AccordionTrigger>
                      <AccordionContent className="text-gray-700 space-y-2">
                        <p>
                          Banchan are small side dishes served with meals. They're meant to be shared among everyone at the table.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Take small portions from shared dishes to your personal plate</li>
                          <li>It's polite to try all the side dishes offered</li>
                          <li>Most banchan are refillable at no extra charge</li>
                          <li>Use the serving utensils provided, not your personal chopsticks</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="bbq">
                      <AccordionTrigger>Korean BBQ Etiquette</AccordionTrigger>
                      <AccordionContent className="text-gray-700 space-y-2">
                        <p>
                          Korean BBQ is a social dining experience with its own set of customs.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>The youngest person or server usually manages the grilling</li>
                          <li>Cut meat into bite-sized pieces before eating</li>
                          <li>Wrap meat in lettuce or perilla leaves with condiments</li>
                          <li>Eat each wrap in one bite if possible</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
            
            {/* 사이드바 */}
            <div className="space-y-6">
              {/* 필터 카드 */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Filters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="price-range">Price Range</Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        id="price-range"
                        defaultValue={priceRange}
                        max={4}
                        min={1}
                        step={1}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                        className="flex-1"
                      />
                      <div className="flex items-center gap-1 min-w-[60px]">
                        <span>{'$'.repeat(priceRange[0])}</span>
                        <span>-</span>
                        <span>{'$'.repeat(priceRange[1])}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Spice Level</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="spicy-none" 
                          checked={spicyLevel.includes('none')}
                          onCheckedChange={() => toggleSpicyLevel('none')}
                        />
                        <label htmlFor="spicy-none" className="text-sm">Not Spicy</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="spicy-mild" 
                          checked={spicyLevel.includes('mild')}
                          onCheckedChange={() => toggleSpicyLevel('mild')}
                        />
                        <label htmlFor="spicy-mild" className="text-sm">Mild</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="spicy-medium" 
                          checked={spicyLevel.includes('medium')}
                          onCheckedChange={() => toggleSpicyLevel('medium')}
                        />
                        <label htmlFor="spicy-medium" className="text-sm">Medium</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="spicy-hot" 
                          checked={spicyLevel.includes('hot')}
                          onCheckedChange={() => toggleSpicyLevel('hot')}
                        />
                        <label htmlFor="spicy-hot" className="text-sm">Hot</label>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label>Dietary Preferences</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="diet-vegetarian" 
                          checked={dietaryOptions.includes('vegetarian')}
                          onCheckedChange={() => toggleDietaryOption('vegetarian')}
                        />
                        <label htmlFor="diet-vegetarian" className="text-sm">Vegetarian</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="diet-vegan" 
                          checked={dietaryOptions.includes('vegan')}
                          onCheckedChange={() => toggleDietaryOption('vegan')}
                        />
                        <label htmlFor="diet-vegan" className="text-sm">Vegan</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="diet-gluten-free" 
                          checked={dietaryOptions.includes('gluten-free')}
                          onCheckedChange={() => toggleDietaryOption('gluten-free')}
                        />
                        <label htmlFor="diet-gluten-free" className="text-sm">Gluten Free</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="diet-halal" 
                          checked={dietaryOptions.includes('halal')}
                          onCheckedChange={() => toggleDietaryOption('halal')}
                        />
                        <label htmlFor="diet-halal" className="text-sm">Halal</label>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button className="w-full">Apply Filters</Button>
                </CardContent>
              </Card>
              
              {/* 식품 알레르기 정보 */}
              <Card className="bg-yellow-50 border-yellow-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    Food Allergy Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-yellow-800">
                    If you have food allergies, be aware that these ingredients are common in Korean cuisine:
                  </p>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>• <strong>Sesame:</strong> Oil and seeds used in many dishes</li>
                    <li>• <strong>Soy:</strong> Present in most sauces (ganjang, doenjang)</li>
                    <li>• <strong>Wheat:</strong> In noodles and some sauces</li>
                    <li>• <strong>Shellfish:</strong> Common in soups and stews</li>
                    <li>• <strong>Fish:</strong> Fish sauce and dried fish in many dishes</li>
                    <li>• <strong>Nuts:</strong> Often in desserts and some banchan</li>
                  </ul>
                  <div className="pt-2">
                    <p className="text-sm font-medium text-yellow-800">
                      Useful Korean phrases for allergies:
                    </p>
                    <div className="mt-1 text-sm text-yellow-800">
                      <p>"I am allergic to ___" - "저는 ___ 알레르기가 있어요" (Jeo-neun ___ al-le-reu-gi-ga i-sseo-yo)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* 추천 푸드 투어 */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Recommended Food Tours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-md"></div>
                    <div>
                      <h4 className="font-medium">Seoul Night Food Tour</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>3 hours</span>
                        <span className="mx-1">•</span>
                        <DollarSign className="h-3 w-3" />
                        <span>From $65</span>
                      </div>
                      <div className="mt-1">
                        <Badge variant="outline" className="text-xs">10+ tastings</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-md"></div>
                    <div>
                      <h4 className="font-medium">Korean Cooking Class</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>2 hours</span>
                        <span className="mx-1">•</span>
                        <DollarSign className="h-3 w-3" />
                        <span>From $45</span>
                      </div>
                      <div className="mt-1">
                        <Badge variant="outline" className="text-xs">Hands-on</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-md"></div>
                    <div>
                      <h4 className="font-medium">Korean BBQ Experience</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>2.5 hours</span>
                        <span className="mx-1">•</span>
                        <DollarSign className="h-3 w-3" />
                        <span>From $55</span>
                      </div>
                      <div className="mt-1">
                        <Badge variant="outline" className="text-xs">All-you-can-eat</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">View All Food Tours</Button>
                </CardContent>
              </Card>
              
              <SponsoredContent 
                type="sidebar" 
                title="Korean Cooking Class" 
                description="Learn authentic Korean recipes with local chefs" 
                action="Book Now" 
                href="/experiences/cooking-class" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* 추가: 맛집 추천 섹션 */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Must-Visit Restaurants</h2>
        <Tabs defaultValue="seoul" className="w-full">
          <TabsList className="mb-4 grid grid-cols-3 md:w-auto">
            <TabsTrigger value="seoul">Seoul</TabsTrigger>
            <TabsTrigger value="busan">Busan</TabsTrigger>
            <TabsTrigger value="jeju">Jeju</TabsTrigger>
          </TabsList>
          
          {/* 서울 맛집 */}
          <TabsContent value="seoul" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Myeongdong Kyoja",
                  category: "Noodles",
                  rating: 4.8,
                  price: "$$",
                  neighborhood: "Myeongdong",
                  specialties: ["Kalguksu", "Mandu"],
                  image: "from-blue-500 to-cyan-500"
                },
                {
                  name: "Gwangjang Market Food Stalls",
                  category: "Street Food",
                  rating: 4.7,
                  price: "$",
                  neighborhood: "Jongno",
                  specialties: ["Bindaetteok", "Mayak Gimbap"],
                  image: "from-amber-500 to-yellow-600"
                },
                {
                  name: "Tosokchon",
                  category: "Traditional",
                  rating: 4.6,
                  price: "$$",
                  neighborhood: "Gyeongbokgung",
                  specialties: ["Samgyetang"],
                  image: "from-stone-500 to-stone-600"
                },
                {
                  name: "Maple Tree House",
                  category: "Korean BBQ",
                  rating: 4.8,
                  price: "$$$",
                  neighborhood: "Itaewon",
                  specialties: ["Hanwoo Beef", "Galbi"],
                  image: "from-red-500 to-orange-500"
                }
              ].map(restaurant => (
                <Card key={restaurant.name} className="overflow-hidden">
                  <div className="h-32 bg-gradient-to-r flex items-center justify-center p-4 text-white" style={{backgroundImage: `linear-gradient(to right, var(--${restaurant.image.split('-')[1]}-500), var(--${restaurant.image.split('-')[3]}))`}}>
                    <h3 className="text-xl font-bold">{restaurant.name}</h3>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge>{restaurant.category}</Badge>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="font-medium">{restaurant.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{restaurant.neighborhood}</span>
                      <span className="mx-2">•</span>
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span>{restaurant.price}</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-sm font-medium">Famous for:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {restaurant.specialties.map(dish => (
                          <Badge key={dish} variant="outline">{dish}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button variant="outline" className="w-full">Show More Seoul Restaurants</Button>
          </TabsContent>
          
          {/* 부산 맛집 */}
          <TabsContent value="busan" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Jagalchi Fish Market Restaurants",
                  category: "Seafood",
                  rating: 4.6,
                  price: "$$",
                  neighborhood: "Nampo-dong",
                  specialties: ["Hoe (Raw Fish)", "Seafood Soup"],
                  image: "from-cyan-500 to-blue-600"
                },
                {
                  name: "Gukje Market Food Stalls",
                  category: "Street Food",
                  rating: 4.5,
                  price: "$",
                  neighborhood: "Jung-gu",
                  specialties: ["Ssiat Hotteok", "Bibim Dangmyeon"],
                  image: "from-amber-500 to-yellow-600"
                }
              ].map(restaurant => (
                <Card key={restaurant.name} className="overflow-hidden">
                  <div className="h-32 bg-gradient-to-r flex items-center justify-center p-4 text-white" style={{backgroundImage: `linear-gradient(to right, var(--${restaurant.image.split('-')[1]}-500), var(--${restaurant.image.split('-')[3]}))`}}>
                    <h3 className="text-xl font-bold">{restaurant.name}</h3>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge>{restaurant.category}</Badge>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="font-medium">{restaurant.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{restaurant.neighborhood}</span>
                      <span className="mx-2">•</span>
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span>{restaurant.price}</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-sm font-medium">Famous for:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {restaurant.specialties.map(dish => (
                          <Badge key={dish} variant="outline">{dish}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button variant="outline" className="w-full">Show More Busan Restaurants</Button>
          </TabsContent>
          
          {/* 제주 맛집 */}
          <TabsContent value="jeju" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Jeju Haenyeo Restaurant",
                  category: "Seafood",
                  rating: 4.7,
                  price: "$$",
                  neighborhood: "Jeju City",
                  specialties: ["Abalone", "Sea Urchin Soup"],
                  image: "from-teal-500 to-emerald-600"
                },
                {
                  name: "Dombe Kochen",
                  category: "Black Pork",
                  rating: 4.8,
                  price: "$$$",
                  neighborhood: "Seogwipo",
                  specialties: ["Jeju Black Pork", "Grilled Mackerel"],
                  image: "from-stone-600 to-stone-800"
                }
              ].map(restaurant => (
                <Card key={restaurant.name} className="overflow-hidden">
                  <div className="h-32 bg-gradient-to-r flex items-center justify-center p-4 text-white" style={{backgroundImage: `linear-gradient(to right, var(--${restaurant.image.split('-')[1]}-500), var(--${restaurant.image.split('-')[3]}))`}}>
                    <h3 className="text-xl font-bold">{restaurant.name}</h3>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge>{restaurant.category}</Badge>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="font-medium">{restaurant.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{restaurant.neighborhood}</span>
                      <span className="mx-2">•</span>
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span>{restaurant.price}</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-sm font-medium">Famous for:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {restaurant.specialties.map(dish => (
                          <Badge key={dish} variant="outline">{dish}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button variant="outline" className="w-full">Show More Jeju Restaurants</Button>
          </TabsContent>
        </Tabs>
      </div>

      {/* 추가: 식사 예절 팁 */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Dining Etiquette Guide</h2>
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-700 mb-2 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Essential Dining Etiquette
              </h3>
              <ul className="space-y-2 text-orange-700">
                <li className="flex items-start gap-2">
                  <div className="bg-orange-100 rounded-full p-1 mt-0.5">
                    <span className="block h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                  </div>
                  <span><strong>Wait for elders:</strong> Don't start eating until the eldest person at the table begins.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-orange-100 rounded-full p-1 mt-0.5">
                    <span className="block h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                  </div>
                  <span><strong>Use both hands:</strong> When receiving food, drinks, or passing items, use both hands as a sign of respect.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-orange-100 rounded-full p-1 mt-0.5">
                    <span className="block h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                  </div>
                  <span><strong>Pour drinks for others:</strong> It's polite to refill others' glasses and let them do the same for you.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-orange-100 rounded-full p-1 mt-0.5">
                    <span className="block h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                  </div>
                  <span><strong>Chopsticks etiquette:</strong> Don't stick chopsticks upright in rice (funeral connotation) or point with them.</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">Useful Phrases</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="font-medium">맛있게 드세요</span>
                    <span className="text-gray-600">Enjoy your meal</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">잘 먹겠습니다</span>
                    <span className="text-gray-600">I will eat well (before eating)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">잘 먹었습니다</span>
                    <span className="text-gray-600">I ate well (after eating)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">건배</span>
                    <span className="text-gray-600">Cheers!</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-700 mb-2">Table Manners</h3>
                <ul className="space-y-1 text-sm text-green-700">
                  <li>• Slurping noodles is acceptable and common</li>
                  <li>• Eating while walking is considered impolite</li>
                  <li>• It's okay to lift small rice and soup bowls</li>
                  <li>• Sharing dishes is the norm in Korean dining</li>
                  <li>• Finish all your rice if possible</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 추가: 한국 요리 체험 */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Korean Food Experiences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="h-40 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center p-4">
              <h3 className="text-xl font-bold text-white text-center">Cooking Classes</h3>
            </div>
            <CardContent className="p-4">
              <p className="text-gray-600 mb-3">
                Learn to make authentic Korean dishes from professional chefs. Most classes include market tours, hands-on cooking, and enjoying your creations.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Kimchi Making</span>
                  <Badge>Popular</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Bibimbap Workshop</span>
                  <Badge variant="outline">Beginner-friendly</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Temple Food Class</span>
                  <Badge variant="outline">Vegetarian</Badge>
                </div>
              </div>
              <Button className="w-full mt-4">Find Cooking Classes</Button>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-40 bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center p-4">
              <h3 className="text-xl font-bold text-white text-center">Food Tours</h3>
            </div>
            <CardContent className="p-4">
              <p className="text-gray-600 mb-3">
                Guided food tours take you to local favorites and hidden gems. Perfect for first-time visitors wanting to sample a variety of dishes.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Market Tour & Tasting</span>
                  <Badge>Best Value</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Street Food Adventure</span>
                  <Badge variant="outline">Most Popular</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Evening BBQ & Drinks</span>
                  <Badge variant="outline">Nightlife</Badge>
                </div>
              </div>
              <Button className="w-full mt-4">Explore Food Tours</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
