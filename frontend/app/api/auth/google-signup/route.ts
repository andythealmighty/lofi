import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!body.email || !body.username || !body.nationality || !body.google_id) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/google-signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.detail || "Failed to create account" },
        { status: response.status }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error during Google signup:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
} 