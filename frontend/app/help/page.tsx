import { ArrowLeft, Search, MessageCircle, Phone, Mail, Clock, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function HelpPage() {
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
              <Button>Contact Support</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to your questions or get in touch with our support team
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input placeholder="Search for help articles..." className="pl-10 py-6 text-lg" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm mb-4">Get instant help from our support team</p>
              <Button className="w-full">Start Chat</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Call Support</h3>
              <p className="text-gray-600 text-sm mb-4">Speak directly with our experts</p>
              <Button variant="outline" className="w-full">
                +82-2-1234-5678
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-4">Send us a detailed message</p>
              <Button variant="outline" className="w-full">
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Frequently Asked Questions
                </CardTitle>
                <CardDescription>Find quick answers to common questions</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I book services on KoreaTravelHub?</AccordionTrigger>
                    <AccordionContent>
                      Booking services is easy! Simply browse our services page, select what you need, choose your
                      preferred date and time, and complete the payment process. You'll receive a confirmation email
                      with all the details.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent>
                      We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and local Korean
                      payment methods like KakaoPay and Samsung Pay for your convenience.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I cancel or modify my booking?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can cancel or modify most bookings up to 24 hours before your scheduled service. Some
                      services may have different cancellation policies, which will be clearly stated during booking.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Do you provide services in English?</AccordionTrigger>
                    <AccordionContent>
                      All our services are available in English, and our staff and guides are fluent English speakers.
                      We also provide multilingual support for other languages upon request.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>What if I need emergency assistance during my trip?</AccordionTrigger>
                    <AccordionContent>
                      We provide 24/7 emergency assistance for all our customers. You can reach our emergency hotline at
                      +82-2-1234-5678 or use our mobile app's emergency feature for immediate help.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger>How do I pick up my SIM card or other services?</AccordionTrigger>
                    <AccordionContent>
                      Pickup locations are available at major airports, train stations, and tourist information centers.
                      You'll receive detailed pickup instructions and a QR code after booking.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7">
                    <AccordionTrigger>Is travel insurance included with your services?</AccordionTrigger>
                    <AccordionContent>
                      Basic coverage is included with some services, but we highly recommend purchasing comprehensive
                      travel insurance. We can help you find the right insurance plan for your needs.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8">
                    <AccordionTrigger>How do I join the community forum?</AccordionTrigger>
                    <AccordionContent>
                      Simply create a free account on our platform and you'll automatically have access to our community
                      forum where you can ask questions, share experiences, and connect with other travelers.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Support Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Support Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-medium">Live Chat & Phone</p>
                      <p className="text-sm text-gray-600">24/7 Available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-sm text-gray-600">Response within 2 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Contacts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-red-600">Emergency Hotline</p>
                    <p className="text-sm">+82-2-1234-5678</p>
                  </div>
                  <div>
                    <p className="font-medium">Korean Emergency Services</p>
                    <p className="text-sm">Police: 112</p>
                    <p className="text-sm">Fire/Ambulance: 119</p>
                    <p className="text-sm">Tourist Hotline: 1330</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popular Help Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href="#" className="block text-sm text-blue-600 hover:text-blue-700">
                    Currency Exchange Rates
                  </Link>
                  <Link href="#" className="block text-sm text-blue-600 hover:text-blue-700">
                    SIM Card Activation
                  </Link>
                  <Link href="#" className="block text-sm text-blue-600 hover:text-blue-700">
                    Transportation Guide
                  </Link>
                  <Link href="#" className="block text-sm text-blue-600 hover:text-blue-700">
                    Cultural Etiquette Tips
                  </Link>
                  <Link href="#" className="block text-sm text-blue-600 hover:text-blue-700">
                    Language Translation Help
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Still Need Help?</CardTitle>
              <CardDescription>Send us a message and we'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent className="max-w-2xl mx-auto">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Please describe your issue or question in detail..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
