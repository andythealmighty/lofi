"use client"

import { useState } from "react"
import { ArrowRight, Shield, Users, Globe, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RealTimeChat, ChatButton } from "@/components/real-time-chat"
import { WeatherWidget } from "@/components/weather-widget"
import { CurrencyConverter } from "@/components/currency-converter"
import { EmergencyContacts } from "@/components/emergency-contacts"
import Link from "next/link"

export default function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
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
              <Link href="/auth/signin">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Hero Content */}
            <div className="lg:col-span-2">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Your Trusted Guide to
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                    {" "}
                    South Korea
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Everything you need for an amazing Korean adventure. From essential services to local insights, we've
                  got you covered with trusted information and a supportive community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/planning">
                    <Button size="lg" className="text-lg px-8 py-6">
                      Start Planning <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Widgets */}
            <div className="space-y-6">
              <WeatherWidget />
              <CurrencyConverter />
            </div>
          </div>
        </div>
      </section>

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

      {/* Main Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need in One Place</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From essential travel services to cultural experiences, discover Korea with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 text-sm">🏥</span>
                  </div>
                  Healthcare Guide
                </CardTitle>
                <CardDescription>
                  Find trusted hospitals, clinics, and pharmacies with English-speaking staff
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/guide?tab=healthcare">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 text-sm">🎭</span>
                  </div>
                  K-Culture Experiences
                </CardTitle>
                <CardDescription>
                  Discover K-pop concerts, dance classes, and authentic cultural experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/experiences?tab=culture">
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 text-sm">🍜</span>
                  </div>
                  Food & Dining
                </CardTitle>
                <CardDescription>Best restaurants, street food spots, and dietary-friendly options</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/guide?tab=food">
                  <Button variant="outline" className="w-full">
                    Discover
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-sm">🛍️</span>
                  </div>
                  Shopping Guide
                </CardTitle>
                <CardDescription>From luxury districts to local markets, find the best shopping spots</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/guide?tab=shopping">
                  <Button variant="outline" className="w-full">
                    Shop
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-sm">🗺️</span>
                  </div>
                  Tourism Hotspots
                </CardTitle>
                <CardDescription>Must-visit attractions, hidden gems, and local recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/guide?tab=tourism">
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-600 text-sm">💬</span>
                  </div>
                  Community Hub
                </CardTitle>
                <CardDescription>Connect with travelers, share experiences, and get real-time advice</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/community">
                  <Button variant="outline" className="w-full">
                    Join
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto">
            <EmergencyContacts />
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-500 to-red-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Essential Travel Services</h2>
            <p className="text-xl text-red-100 mb-8">
              Currency exchange, SIM cards, transportation tickets, and more - all in one convenient platform
            </p>
            <Link href="/services">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="text-xl font-bold">KoreaTravelHub</span>
              </div>
              <p className="text-gray-400">Your trusted companion for exploring South Korea</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Currency Exchange
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    SIM Cards
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Transportation
                  </Link>
                </li>
                <li>
                  <Link href="/booking" className="hover:text-white transition-colors">
                    Accommodation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Information</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/guide" className="hover:text-white transition-colors">
                    Travel Guide
                  </Link>
                </li>
                <li>
                  <Link href="/guide?tab=healthcare" className="hover:text-white transition-colors">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="/guide?tab=culture" className="hover:text-white transition-colors">
                    Culture
                  </Link>
                </li>
                <li>
                  <Link href="/guide?tab=food" className="hover:text-white transition-colors">
                    Food & Dining
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <button onClick={() => setIsChatOpen(true)} className="hover:text-white transition-colors text-left">
                    Live Chat
                  </button>
                </li>
                <li>
                  <Link href="/community" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Emergency
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <button onClick={() => setIsChatOpen(true)} className="hover:text-white transition-colors text-left">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KoreaTravelHub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Components */}
      <RealTimeChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      {!isChatOpen && <ChatButton onClick={() => setIsChatOpen(true)} />}
    </div>
  )
}
