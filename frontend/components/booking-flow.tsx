"use client"

import { useState } from "react"
import { Calendar, Clock, Users, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { mockExperiences } from "@/lib/mock-data"

interface BookingFlowProps {
  experienceId: string
  onComplete: (bookingData: any) => void
  onCancel: () => void
}

export function BookingFlow({ experienceId, onComplete, onCancel }: BookingFlowProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    experience: null as any,
    selectedDate: "",
    selectedTime: "",
    participants: 1,
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      nationality: "",
    },
    payment: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardName: "",
      billingAddress: "",
    },
    specialRequests: "",
    agreeToTerms: false,
    marketingConsent: false,
  })

  const experience = mockExperiences.find((exp) => exp.id === experienceId)

  if (!experience) {
    return <div>Experience not found</div>
  }

  const totalSteps = 4
  const stepTitles = ["Select Date & Time", "Personal Information", "Payment Details", "Confirmation"]

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = () => {
    const booking = {
      id: `BK${Date.now()}`,
      experienceId,
      experience,
      ...bookingData,
      bookingDate: new Date().toISOString(),
      status: "confirmed",
      totalAmount: experience.price * bookingData.participants,
    }
    onComplete(booking)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return bookingData.selectedDate && bookingData.selectedTime
      case 2:
        return bookingData.personalInfo.firstName && bookingData.personalInfo.lastName && bookingData.personalInfo.email
      case 3:
        return (
          bookingData.payment.cardNumber &&
          bookingData.payment.expiryDate &&
          bookingData.payment.cvv &&
          bookingData.agreeToTerms
        )
      default:
        return true
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {stepTitles.map((title, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index + 1 <= currentStep ? "bg-red-600 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {index + 1 <= currentStep ? <CheckCircle className="h-4 w-4" /> : index + 1}
              </div>
              {index < stepTitles.length - 1 && (
                <div className={`w-24 h-1 mx-2 ${index + 1 < currentStep ? "bg-red-600" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>
        <h2 className="text-xl font-semibold">{stepTitles[currentStep - 1]}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              {/* Step 1: Date & Time Selection */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="date">Select Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={bookingData.selectedDate}
                      onChange={(e) => setBookingData({ ...bookingData, selectedDate: e.target.value })}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div>
                    <Label>Available Times</Label>
                    <div className="grid grid-cols-3 gap-3 mt-2">
                      {experience.schedule.map((time) => (
                        <Button
                          key={time}
                          variant={bookingData.selectedTime === time ? "default" : "outline"}
                          onClick={() => setBookingData({ ...bookingData, selectedTime: time })}
                          className="justify-center"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="participants">Number of Participants</Label>
                    <Select
                      value={bookingData.participants.toString()}
                      onValueChange={(value) =>
                        setBookingData({ ...bookingData, participants: Number.parseInt(value) })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: experience.maxParticipants }, (_, i) => (
                          <SelectItem key={i + 1} value={(i + 1).toString()}>
                            {i + 1} {i === 0 ? "person" : "people"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={bookingData.personalInfo.firstName}
                        onChange={(e) =>
                          setBookingData({
                            ...bookingData,
                            personalInfo: { ...bookingData.personalInfo, firstName: e.target.value },
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={bookingData.personalInfo.lastName}
                        onChange={(e) =>
                          setBookingData({
                            ...bookingData,
                            personalInfo: { ...bookingData.personalInfo, lastName: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={bookingData.personalInfo.email}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          personalInfo: { ...bookingData.personalInfo, email: e.target.value },
                        })
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={bookingData.personalInfo.phone}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          personalInfo: { ...bookingData.personalInfo, phone: e.target.value },
                        })
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="nationality">Nationality</Label>
                    <Select
                      value={bookingData.personalInfo.nationality}
                      onValueChange={(value) =>
                        setBookingData({
                          ...bookingData,
                          personalInfo: { ...bookingData.personalInfo, nationality: value },
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                        <SelectItem value="cn">China</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="requests">Special Requests (Optional)</Label>
                    <textarea
                      id="requests"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      rows={3}
                      value={bookingData.specialRequests}
                      onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
                      placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={bookingData.payment.cardNumber}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          payment: { ...bookingData.payment, cardNumber: e.target.value },
                        })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        value={bookingData.payment.expiryDate}
                        onChange={(e) =>
                          setBookingData({
                            ...bookingData,
                            payment: { ...bookingData.payment, expiryDate: e.target.value },
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={bookingData.payment.cvv}
                        onChange={(e) =>
                          setBookingData({
                            ...bookingData,
                            payment: { ...bookingData.payment, cvv: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input
                      id="cardName"
                      value={bookingData.payment.cardName}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          payment: { ...bookingData.payment, cardName: e.target.value },
                        })
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="billing">Billing Address</Label>
                    <Input
                      id="billing"
                      value={bookingData.payment.billingAddress}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          payment: { ...bookingData.payment, billingAddress: e.target.value },
                        })
                      }
                    />
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={bookingData.agreeToTerms}
                        onCheckedChange={(checked) => setBookingData({ ...bookingData, agreeToTerms: !!checked })}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the Terms of Service and Privacy Policy
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="marketing"
                        checked={bookingData.marketingConsent}
                        onCheckedChange={(checked) => setBookingData({ ...bookingData, marketingConsent: !!checked })}
                      />
                      <Label htmlFor="marketing" className="text-sm">
                        I'd like to receive travel tips and special offers
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                    <p className="text-gray-600">Your booking has been successfully processed.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Booking Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Booking ID:</span>
                        <span className="font-medium">BK{Date.now()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Experience:</span>
                        <span className="font-medium">{experience.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date & Time:</span>
                        <span className="font-medium">
                          {bookingData.selectedDate} at {bookingData.selectedTime}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Participants:</span>
                        <span className="font-medium">{bookingData.participants}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Amount:</span>
                        <span className="font-medium">${experience.price * bookingData.participants}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-4">
                      A confirmation email has been sent to {bookingData.personalInfo.email}
                    </p>
                    <Button onClick={handleComplete} className="w-full">
                      Go to My Bookings
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Booking Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${experience.image} rounded-lg`}></div>
                  <div>
                    <h4 className="font-semibold">{experience.title}</h4>
                    <p className="text-sm text-gray-600">{experience.location}</p>
                  </div>
                </div>

                {bookingData.selectedDate && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{bookingData.selectedDate}</span>
                    </div>
                    {bookingData.selectedTime && (
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{bookingData.selectedTime}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4" />
                      <span>
                        {bookingData.participants} participant{bookingData.participants > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span>Price per person:</span>
                    <span>${experience.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Participants:</span>
                    <span>{bookingData.participants}</span>
                  </div>
                  <div className="flex justify-between items-center font-semibold text-lg">
                    <span>Total:</span>
                    <span>${experience.price * bookingData.participants}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            {currentStep > 1 && (
              <Button variant="outline" onClick={handlePrevious} className="flex-1">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
            )}
            {currentStep < totalSteps ? (
              <Button onClick={handleNext} disabled={!canProceed()} className="flex-1">
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={handleComplete} className="flex-1">
                Complete Booking
              </Button>
            )}
          </div>

          <Button variant="ghost" onClick={onCancel} className="w-full">
            Cancel Booking
          </Button>
        </div>
      </div>
    </div>
  )
}
