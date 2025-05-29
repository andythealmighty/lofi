import { getSession } from "next-auth/react"

export interface AuthUser {
  id?: string
  name?: string | null
  email?: string | null
  image?: string | null
  googleId?: string
  isGoogleUser?: boolean
}

// Check if user is authenticated (either NextAuth session or localStorage token)
export const isAuthenticated = async (): Promise<boolean> => {
  // Check NextAuth session first
  const session = await getSession()
  if (session) return true
  
  // Check localStorage token for regular auth
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token")
    return !!token
  }
  
  return false
}

// Get user info from either NextAuth session or API call for regular auth
export const getAuthUser = async (): Promise<AuthUser | null> => {
  // Try NextAuth session first
  const session = await getSession()
  if (session?.user) {
    return {
      id: session.user.googleId,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      googleId: session.user.googleId,
      isGoogleUser: true
    }
  }
  
  // Try regular auth with localStorage token
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token")
    if (token) {
      try {
        // Call backend to get user info
        const response = await fetch("http://localhost:8000/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        
        if (response.ok) {
          const user = await response.json()
          return {
            id: user.id,
            name: user.username,
            email: user.email,
            isGoogleUser: false
          }
        }
      } catch (error) {
        console.error("Error fetching user info:", error)
        // Token might be invalid, remove it
        localStorage.removeItem("access_token")
      }
    }
  }
  
  return null
}

// Sign out from both NextAuth and regular auth
export const signOutUser = async (redirectUrl = "/") => {
  const session = await getSession()
  
  if (session) {
    // NextAuth session
    const { signOut } = await import("next-auth/react")
    await signOut({ callbackUrl: redirectUrl })
  } else {
    // Regular auth
    localStorage.removeItem("access_token")
    window.location.href = redirectUrl
  }
}

// Get authorization header for API calls
export const getAuthHeader = async (): Promise<Record<string, string> | null> => {
  // Try NextAuth session first
  const session = await getSession()
  if (session) {
    // For NextAuth, we might not need additional headers for internal API calls
    return null
  }
  
  // Try regular auth token
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token")
    if (token) {
      return {
        Authorization: `Bearer ${token}`
      }
    }
  }
  
  return null
} 