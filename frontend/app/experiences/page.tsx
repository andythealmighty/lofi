"use client"

import { useState } from "react"
import { ArrowLeft, Star, Clock, Users, MapPin, Heart, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingFlow } from "@/components/booking-flow"
import { mockExperiences } from "@/lib/mock-data"
import Link from "next/link"

export default function ExperiencesPage() {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("popular")
  const [priceRange, setPriceRange] = useState("all")
  const [wishlist, setWishlist] = useState<string[]>([])

  const toggleWishlist = (experienceId: string) => {
    setWishlist((prev) =>
      prev.includes(experienceId) ? prev.filter((id) => id !== experienceId) : [...prev, experienceId],
    )
  }

  const filteredExperiences = mockExperiences.filter((exp) => {
    const matchesSearch =
      exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "budget" && exp.price <= 50) ||
      (priceRange === "mid" && exp.price > 50 && exp.price <= 100) ||
      (priceRange === "luxury" && exp.price > 100)

    return matchesSearch && matchesPrice
  })

  const sortedExperiences = [...filteredExperiences].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "duration":
        return a.duration.localeCompare(b.duration)
      default: // popular
        return b.reviewCount - a.reviewCount
    }
  })

  const handleBookingComplete = (bookingData: any) => {
    setSelectedExperience(null)
    // In a real app, this would save to database and redirect to confirmation
    alert(`Booking confirmed! Booking ID: ${bookingData.id}`)
  }

  if (selectedExperience) {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="border-b bg-white sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button onClick={() => setSelectedExperience(null)} className="flex items-center space-x-2">
                <ArrowLeft className="h-5 w-5" />
                <span className="text-lg font-semibold">Back to Experiences</span>
              </button>
            </div>
          </div>
        </nav>
        <BookingFlow
          experienceId={selectedExperience}
          onComplete={handleBookingComplete}
          onCancel={() => setSelectedExperience(null)}
        />
      </div>
    )
  }

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
              <Link href="/auth/signin">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/dashboard">
                <Button>My Bookings</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Korean Experiences</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in authentic Korean culture with our curated experiences
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="budget">Budget ($0-50)</SelectItem>
                <SelectItem value="mid">Mid-range ($51-100)</SelectItem>
                <SelectItem value="luxury">Luxury ($100+)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="kpop">K-Pop</TabsTrigger>
            <TabsTrigger value="culture">Culture</TabsTrigger>
            <TabsTrigger value="food">Food Tours</TabsTrigger>
            <TabsTrigger value="nature">Nature</TabsTrigger>
            <TabsTrigger value="wellness">Wellness</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedExperiences.map((experience) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  isWishlisted={wishlist.includes(experience.id)}
                  onToggleWishlist={() => toggleWishlist(experience.id)}
                  onBook={() => setSelectedExperience(experience.id)}
                />
              ))}
            </div>
          </TabsContent>

          {["kpop", "culture", "food", "nature", "wellness"].map((category) => (
            <TabsContent key={category} value={category} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedExperiences
                  .filter((exp) => exp.category === category)
                  .map((experience) => (
                    <ExperienceCard
                      key={experience.id}
                      experience={experience}
                      isWishlisted={wishlist.includes(experience.id)}
                      onToggleWishlist={() => toggleWishlist(experience.id)}
                      onBook={() => setSelectedExperience(experience.id)}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Custom Experience CTA */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
                <p className="text-red-100 mb-6">
                  Our local experts can create custom experiences tailored to your interests
                </p>
                <Button variant="secondary" size="lg">
                  Request Custom Experience
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ExperienceCard({
  experience,
  isWishlisted,
  onToggleWishlist,
  onBook,
}: {
  experience: any
  isWishlisted: boolean
  onToggleWishlist: () => void
  onBook: () => void
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className={`h-48 bg-gradient-to-r ${experience.image} rounded-t-lg`}></div>
        {experience.badge && <Badge className="absolute top-4 left-4">{experience.badge}</Badge>}
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-4 right-4 ${isWishlisted ? "text-red-500" : "text-white"} hover:bg-white/20`}
          onClick={onToggleWishlist}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
        </Button>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{experience.title}</CardTitle>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{experience.rating}</span>
            <span className="text-sm text-gray-500">({experience.reviewCount})</span>
          </div>
        </div>
        <CardDescription>{experience.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span>Max {experience.maxParticipants} people</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{experience.location}</span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold">${experience.price}</span>
            <Button onClick={onBook}>Book Now</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
