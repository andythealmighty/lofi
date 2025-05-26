import Link from "next/link"
import { ArrowRight, Shield, Users, Globe, Building2 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Your Trusted Platform for
          <span className="text-primary"> Foreigners in Korea</span>
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Navigate Korea with confidence. Get fair currency exchange rates,
          expert marketing consulting, and connect with a supportive community.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Why Choose Our Platform?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
              <p className="text-muted-foreground">
                Trusted currency exchange with transparent rates and secure
                transactions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Support</h3>
              <p className="text-muted-foreground">
                Connect with fellow foreigners and share experiences.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-language</h3>
              <p className="text-muted-foreground">
                Available in English, Korean, Chinese, Japanese, and Vietnamese.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Consulting</h3>
              <p className="text-muted-foreground">
                Professional marketing and business consulting services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Ready to Get Started?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-8">
            Join our community today and experience the best services for
            foreigners in Korea.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Sign Up Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
} 