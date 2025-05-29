"use client";

import { useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  let title = "Authentication Error";
  let message = "An unknown error occurred. Please try again.";

  if (error === "OAuthSignin") {
    title = "Google Sign-in Error";
    message = "There was a problem signing in with Google. Please check your Google credentials and try again.";
  } else if (error === "OAuthCallback") {
    title = "OAuth Callback Error";
    message = "There was a problem during the OAuth callback. Please try again.";
  } else if (error === "AccessDenied") {
    title = "Access Denied";
    message = "Access denied. Please try a different account.";
  } else if (error === "Configuration") {
    title = "Configuration Error";
    message = "There is a configuration issue. Please contact support.";
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/" className="flex items-center space-x-2 w-fit">
          <ArrowLeft className="h-5 w-5" />
          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="text-xl font-bold text-gray-900">KoreaTravelHub</span>
        </Link>
      </div>
      
      {/* Error card */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-red-600">{title}</CardTitle>
              <CardDescription className="text-center">
                {message}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-4">
                <p className="text-sm text-gray-600">
                  Error code: {error || "UNKNOWN"}
                </p>
                <div className="flex flex-col space-y-2">
                  <Button asChild>
                    <Link href="/auth/signin">
                      Back to Sign In
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/">
                      Go Home
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}