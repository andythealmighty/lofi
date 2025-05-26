"use client"

import { useState, useEffect } from "react"
import { ArrowUpDown, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { mockServices } from "@/lib/mock-data"

export function CurrencyConverter() {
  const [amount, setAmount] = useState("100")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [result, setResult] = useState(0)

  const currencyService = mockServices.find((s) => s.type === "currency")
  const rates = currencyService?.rates || {}

  useEffect(() => {
    if (amount && fromCurrency && rates[fromCurrency as keyof typeof rates]) {
      const rate = rates[fromCurrency as keyof typeof rates].rate
      setResult(Number.parseFloat(amount) * rate)
    }
  }, [amount, fromCurrency, rates])

  const handleSwap = () => {
    // In a real app, this would swap currencies
    setAmount(result.toString())
    setResult(Number.parseFloat(amount))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-600" />
          Currency Converter
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium">Amount</label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>

          <div>
            <label className="text-sm font-medium">From</label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD - US Dollar</SelectItem>
                <SelectItem value="EUR">EUR - Euro</SelectItem>
                <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                <SelectItem value="CNY">CNY - Chinese Yuan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-center">
            <Button variant="ghost" size="sm" onClick={handleSwap}>
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>

          <div>
            <label className="text-sm font-medium">To KRW</label>
            <div className="p-3 bg-gray-50 rounded-md">
              <div className="text-2xl font-bold text-green-600">₩{result.toLocaleString()}</div>
              <div className="text-sm text-gray-600">
                Rate: 1 {fromCurrency} = ₩{rates[fromCurrency as keyof typeof rates]?.rate.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="text-sm text-gray-600 mb-3">Live Exchange Rates</div>
          <div className="space-y-2">
            {Object.entries(rates).map(([currency, data]) => (
              <div key={currency} className="flex justify-between text-sm">
                <span>1 {currency}</span>
                <span>₩{data.rate.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full">Find Exchange Locations</Button>
      </CardContent>
    </Card>
  )
}
