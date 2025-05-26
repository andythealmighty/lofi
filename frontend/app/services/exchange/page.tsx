"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight, Info, CreditCard, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function ExchangePage() {
  const [fromCurrency, setFromCurrency] = useState("usd")
  const [amount, setAmount] = useState<number>(100)
  const [conversionRate, setConversionRate] = useState(1320)
  const [serviceFee, setServiceFee] = useState(0.05) // 5% 수수료
  const [pickupLocation, setPickupLocation] = useState("")
  
  const calculatedAmount = amount * conversionRate
  const feeAmount = calculatedAmount * serviceFee
  const finalAmount = calculatedAmount - feeAmount
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/services" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-lg font-semibold">Back to Services</span>
            </Link>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Premium Currency Exchange</h1>
          <p className="text-gray-600 mb-8">Get the best rates with our secure and fast currency exchange service.</p>
          
          <Tabs defaultValue="online" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="online">Online Exchange</TabsTrigger>
              <TabsTrigger value="pickup">Pickup Locations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="online" className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Currency Exchange Calculator</CardTitle>
                  <CardDescription>Get a real-time quote for your exchange</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="from-currency">From Currency</Label>
                      <Select value={fromCurrency} onValueChange={setFromCurrency}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD - US Dollar</SelectItem>
                          <SelectItem value="eur">EUR - Euro</SelectItem>
                          <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
                          <SelectItem value="cny">CNY - Chinese Yuan</SelectItem>
                          <SelectItem value="gbp">GBP - British Pound</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="to-currency">To Currency</Label>
                      <Select defaultValue="krw" disabled>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="krw">KRW - Korean Won</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="amount">Amount to Exchange</Label>
                    <Input 
                      id="amount" 
                      placeholder="Enter amount" 
                      type="number" 
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                    />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Current Exchange Rate:</span>
                      <span className="font-semibold">1 {fromCurrency.toUpperCase()} = {conversionRate.toLocaleString()} KRW</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Base Amount:</span>
                      <span className="font-semibold">₩{calculatedAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-gray-600">Service Fee (5%):</span>
                        <Info className="h-4 w-4 text-gray-400" />
                      </div>
                      <span className="font-semibold text-red-500">-₩{feeAmount.toLocaleString()}</span>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">You'll Receive:</span>
                        <span className="font-bold text-lg text-green-600">₩{finalAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="pickup-location">Pickup Location</Label>
                    <Select value={pickupLocation} onValueChange={setPickupLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pickup location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="icn">Incheon Airport (ICN)</SelectItem>
                        <SelectItem value="gmp">Gimpo Airport (GMP)</SelectItem>
                        <SelectItem value="myeongdong">Myeongdong Tourism Center</SelectItem>
                        <SelectItem value="hongdae">Hongdae Branch</SelectItem>
                        <SelectItem value="itaewon">Itaewon Global Village Center</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                
                <CardFooter className="flex flex-col space-y-4">
                  <div className="flex gap-2 w-full">
                    <Button className="w-full">Place Order</Button>
                    <Button variant="outline" className="w-full">Save Quote</Button>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    <span>Secure payment processing with no hidden fees</span>
                  </div>
                </CardFooter>
              </Card>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-medium text-blue-800 mb-2">Why use our Exchange Service?</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Better rates than airport exchanges and most banks</li>
                  <li>• Guaranteed exchange rate at the time of booking</li>
                  <li>• Convenient pickup locations throughout Seoul</li>
                  <li>• ID verification only - no Korean bank account needed</li>
                  <li>• Available in emergency situations with expedited service</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="pickup" className="space-y-6">
              {/* 픽업 위치 상세 내용 */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
