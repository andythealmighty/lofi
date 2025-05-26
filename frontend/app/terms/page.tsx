import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function TermsPage() {
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
              <Link href="/auth/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Terms of Service</CardTitle>
              <p className="text-gray-600">Last updated: January 1, 2024</p>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing and using KoreaTravelHub ("the Service"), you accept and agree to be bound by the terms
                    and provision of this agreement. If you do not agree to abide by the above, please do not use this
                    service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                  <p className="text-gray-700 leading-relaxed">
                    KoreaTravelHub is a comprehensive travel platform that provides information, booking services, and
                    community features for travelers visiting South Korea. Our services include but are not limited to:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
                    <li>Travel planning and itinerary creation tools</li>
                    <li>Booking services for accommodations, transportation, and experiences</li>
                    <li>Currency exchange and SIM card services</li>
                    <li>Community forums and travel guides</li>
                    <li>Customer support and emergency assistance</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
                  <p className="text-gray-700 leading-relaxed">
                    To access certain features of the Service, you may be required to create an account. You are
                    responsible for maintaining the confidentiality of your account information and for all activities
                    that occur under your account.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Booking and Payment Terms</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>4.1 Booking Confirmation:</strong> All bookings are subject to availability and
                      confirmation. We reserve the right to refuse or cancel any booking at our discretion.
                    </p>
                    <p>
                      <strong>4.2 Payment:</strong> Payment is required at the time of booking unless otherwise
                      specified. We accept major credit cards and other payment methods as indicated on our platform.
                    </p>
                    <p>
                      <strong>4.3 Cancellation Policy:</strong> Cancellation policies vary by service provider. Please
                      review the specific cancellation terms for each booking before confirming your purchase.
                    </p>
                    <p>
                      <strong>4.4 Refunds:</strong> Refunds are processed according to the cancellation policy of each
                      service. Processing times may vary.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. User Conduct</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">You agree not to use the Service to:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Post false, misleading, or inappropriate content</li>
                    <li>Harass, abuse, or harm other users</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use the Service for any commercial purpose without our consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Privacy Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of
                    the Service, to understand our practices regarding the collection and use of your personal
                    information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The Service and its original content, features, and functionality are and will remain the exclusive
                    property of KoreaTravelHub and its licensors. The Service is protected by copyright, trademark, and
                    other laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">8. Disclaimer of Warranties</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The information, software, products, and services included in or available through the Service may
                    include inaccuracies or typographical errors. KoreaTravelHub makes no representations about the
                    suitability, reliability, availability, timeliness, and accuracy of the information, software,
                    products, services, and related graphics contained on the Service for any purpose.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed">
                    In no event shall KoreaTravelHub be liable for any direct, indirect, punitive, incidental, special,
                    consequential damages or any damages whatsoever including, without limitation, damages for loss of
                    use, data, or profits, arising out of or in any way connected with the use or performance of the
                    Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">10. Third-Party Services</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our Service may contain links to third-party websites or services that are not owned or controlled
                    by KoreaTravelHub. We have no control over, and assume no responsibility for, the content, privacy
                    policies, or practices of any third-party websites or services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">11. Emergency Situations</h2>
                  <p className="text-gray-700 leading-relaxed">
                    While we provide 24/7 customer support, in case of emergencies, please contact local emergency
                    services immediately. Our emergency assistance is supplementary and should not replace official
                    emergency services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify or replace these Terms at any time. If a revision is material, we
                    will try to provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="mt-3 text-gray-700">
                    <p>Email: legal@koreatravelhub.com</p>
                    <p>Phone: +82-2-1234-5678</p>
                    <p>Address: 123 Gangnam-daero, Gangnam-gu, Seoul, South Korea</p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
