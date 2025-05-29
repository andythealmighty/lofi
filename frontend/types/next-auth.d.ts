import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    googleId?: string
  }
  
  interface Session {
    user: User & {
      googleId?: string
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    googleId?: string
  }
} 