import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      )
    }

    // Call our FastAPI backend for authentication
    const response = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: email,
        password: password,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json(
        { error: errorData.detail || "Invalid credentials" },
        { status: 401 }
      )
    }

    const data = await response.json()
    
    return NextResponse.json({
      access_token: data.access_token,
      token_type: data.token_type,
    })
  } catch (error) {
    console.error("Signin error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
} 