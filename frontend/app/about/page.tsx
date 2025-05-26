import { ArrowLeft, Users, Globe, Shield, Award, Heart, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
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
              <Link href="/auth/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              KoreaTravelHub
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're passionate about making Korean travel accessible, authentic, and unforgettable for every visitor. Our
            mission is to bridge cultures and create meaningful connections through travel.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To provide comprehensive, trustworthy, and personalized travel services that help visitors discover the
                true essence of South Korea. We believe every traveler deserves authentic experiences, reliable support,
                and memories that last a lifetime.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To become the world's most trusted platform for Korean travel, fostering cultural understanding and
                creating a global community of Korea enthusiasts. We envision a world where language and cultural
                barriers never limit the joy of exploration.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <Card className="shadow-xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  KoreaTravelHub was born from a simple observation: despite Korea's incredible popularity worldwide,
                  many travelers still faced challenges navigating the country's unique culture, language, and systems.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Founded in 2020 by a team of Korean locals and international travel enthusiasts, we set out to create
                  a platform that would eliminate these barriers and make Korean travel accessible to everyone.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, we've helped over 50,000 travelers discover Korea, from K-pop fans experiencing their first
                  concert to families exploring ancient palaces. Our community spans 80+ countries, united by a shared
                  love for Korean culture and adventure.
                </p>
              </div>
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg h-64 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold mb-2">50,000+</div>
                  <div className="text-red-100">Happy Travelers</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trust & Safety</h3>
                <p className="text-gray-600">
                  Every service is verified, every guide is vetted, and every experience is designed with your safety in
                  mind.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Authentic Experiences</h3>
                <p className="text-gray-600">
                  We connect you with real Korean culture, not tourist traps. Every recommendation comes from locals who
                  know best.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community First</h3>
                <p className="text-gray-600">
                  Our platform thrives on shared experiences, mutual support, and the collective wisdom of our travel
                  community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Min-jun Kim",
                role: "CEO & Founder",
                specialty: "Local Expert",
                image: "from-blue-500 to-purple-500",
              },
              {
                name: "Sarah Johnson",
                role: "Head of Operations",
                specialty: "Travel Planning",
                image: "from-green-500 to-teal-500",
              },
              {
                name: "Yuki Tanaka",
                role: "Community Manager",
                specialty: "Cultural Bridge",
                image: "from-pink-500 to-red-500",
              },
              {
                name: "Alex Rodriguez",
                role: "Tech Lead",
                specialty: "Platform Innovation",
                image: "from-orange-500 to-yellow-500",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-24 h-24 bg-gradient-to-r ${member.image} rounded-full mx-auto mb-4`}></div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                  <Badge variant="secondary" className="mt-2">
                    {member.specialty}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <Card className="shadow-xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Our Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-3">
                  <Award className="h-8 w-8 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-3">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50,000+</div>
                <div className="text-gray-600">Happy Travelers</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-3">
                  <Globe className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">80+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-3">
                  <Shield className="h-8 w-8 text-purple-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-gray-600">Service Reliability</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Korea Tourism Organization",
              "Seoul Metropolitan Government",
              "Incheon International Airport",
              "KTO (Korea Travel Organization)",
              "Jeju Tourism Organization",
              "Busan Tourism Organization",
              "Korean Air",
              "Lotte Hotels",
            ].map((partner, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-500 font-medium text-sm">{partner}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white text-center">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Korean Adventure?</h2>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who have discovered the magic of Korea with our trusted platform. Your perfect
              Korean experience is just a click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/planning">
                <Button size="lg" variant="secondary" className="px-8">
                  Start Planning Your Trip
                </Button>
              </Link>
              <Link href="/community">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 text-white border-white hover:bg-white hover:text-red-600"
                >
                  Join Our Community
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
