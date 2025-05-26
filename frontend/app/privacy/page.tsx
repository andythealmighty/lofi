import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PrivacyPage() {
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
              <CardTitle className="text-3xl">Privacy Policy</CardTitle>
              <p className="text-gray-600">Last updated: January 1, 2024</p>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    KoreaTravelHub ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your information when you use our travel
                    platform and services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">2.1 Personal Information</h3>
                      <p className="text-gray-700 leading-relaxed mb-2">
                        We may collect personal information that you provide directly to us, including:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Name, email address, and phone number</li>
                        <li>Passport information and nationality</li>
                        <li>Payment information and billing address</li>
                        <li>Travel preferences and itinerary details</li>
                        <li>Emergency contact information</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">2.2 Usage Information</h3>
                      <p className="text-gray-700 leading-relaxed mb-2">
                        We automatically collect certain information about your use of our services:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Device information and IP address</li>
                        <li>Browser type and operating system</li>
                        <li>Pages visited and time spent on our platform</li>
                        <li>Search queries and booking history</li>
                        <li>Location data (with your permission)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Providing and maintaining our travel services</li>
                    <li>Processing bookings and payments</li>
                    <li>Sending booking confirmations and travel updates</li>
                    <li>Providing customer support and emergency assistance</li>
                    <li>Personalizing your experience and recommendations</li>
                    <li>Improving our services and developing new features</li>
                    <li>Sending marketing communications (with your consent)</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>4.1 Service Providers:</strong> We may share your information with third-party service
                      providers who assist us in operating our platform, processing payments, or providing travel
                      services.
                    </p>
                    <p>
                      <strong>4.2 Business Partners:</strong> We may share information with hotels, tour operators, and
                      other travel service providers to fulfill your bookings.
                    </p>
                    <p>
                      <strong>4.3 Legal Requirements:</strong> We may disclose your information if required by law or in
                      response to valid legal requests.
                    </p>
                    <p>
                      <strong>4.4 Emergency Situations:</strong> We may share your information with emergency services
                      or relevant authorities if necessary for your safety.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction. However, no method
                    of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined
                    in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no
                    longer need your information, we will securely delete or anonymize it.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>7.1 Access and Update:</strong> You can access and update your personal information
                      through your account settings or by contacting us.
                    </p>
                    <p>
                      <strong>7.2 Data Portability:</strong> You have the right to request a copy of your personal data
                      in a structured, machine-readable format.
                    </p>
                    <p>
                      <strong>7.3 Deletion:</strong> You can request deletion of your personal information, subject to
                      certain legal limitations.
                    </p>
                    <p>
                      <strong>7.4 Marketing Communications:</strong> You can opt out of marketing emails by clicking the
                      unsubscribe link or updating your preferences.
                    </p>
                    <p>
                      <strong>7.5 Cookies:</strong> You can control cookie preferences through your browser settings.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your experience on our platform. These
                    technologies help us remember your preferences, analyze site traffic, and provide personalized
                    content. You can manage your cookie preferences through your browser settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your country of
                    residence. We ensure that such transfers comply with applicable data protection laws and implement
                    appropriate safeguards to protect your information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect
                    personal information from children under 13. If we become aware that we have collected such
                    information, we will take steps to delete it promptly.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by
                    posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you
                    to review this Privacy Policy periodically.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="text-gray-700">
                    <p>Email: privacy@koreatravelhub.com</p>
                    <p>Phone: +82-2-1234-5678</p>
                    <p>Address: 123 Gangnam-daero, Gangnam-gu, Seoul, South Korea</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">13. Data Protection Officer</h2>
                  <p className="text-gray-700 leading-relaxed">
                    For EU residents, you can contact our Data Protection Officer at dpo@koreatravelhub.com for any
                    privacy-related inquiries or to exercise your rights under GDPR.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
