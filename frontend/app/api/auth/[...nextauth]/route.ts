import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        return true
      }
      return true
    },
    async redirect({ url, baseUrl }) {
      // For Google auth, always redirect to our handler page first
      // Extract callbackUrl from the URL if present
      let callbackUrl = '/dashboard' // default
      
      try {
        const urlObj = new URL(url, baseUrl)
        const urlCallbackUrl = urlObj.searchParams.get('callbackUrl')
        if (urlCallbackUrl) {
          callbackUrl = urlCallbackUrl
        }
      } catch (error) {
        // If URL parsing fails, use default
      }
      
      // Always redirect to google-handler for Google OAuth
      return `${baseUrl}/auth/google-handler?callbackUrl=${encodeURIComponent(callbackUrl)}`
    },
    async session({ session, token }) {
      if (token.googleId) {
        session.user.googleId = token.googleId as string
      }
      return session
    },
    async jwt({ token, user, account }) {
      if (account?.provider === "google" && user) {
        token.googleId = account.providerAccountId
      }
      return token
    }
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  debug: process.env.NODE_ENV === "development",
})

export const GET = handlers.GET
export const POST = handlers.POST 