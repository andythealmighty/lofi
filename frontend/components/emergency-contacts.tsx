"use client"

import { Phone, AlertTriangle, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { mockEmergencyContacts } from "@/lib/mock-data"

export function EmergencyContacts() {
  const handleCall = (number: string) => {
    window.open(`tel:${number}`, "_self")
  }

  return (
    <Card className="border-red-200">
      <CardHeader className="bg-red-50">
        <CardTitle className="flex items-center gap-2 text-red-800">
          <AlertTriangle className="h-5 w-5" />
          Emergency Contacts
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          {mockEmergencyContacts.map((contact, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
              <div className="flex-1">
                <div className="font-medium text-sm">{contact.service}</div>
                <div className="text-xs text-gray-600">{contact.description}</div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {contact.number}
                </Badge>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleCall(contact.number)}
                  className="text-red-600 border-red-200 hover:bg-red-50"
                >
                  <Phone className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 text-blue-800 text-sm font-medium mb-2">
            <MapPin className="h-4 w-4" />
            Your Location
          </div>
          <div className="text-sm text-blue-700">Myeongdong, Jung-gu, Seoul</div>
          <div className="text-xs text-blue-600 mt-1">
            Nearest hospital: Seoul National University Hospital (2.3 km)
          </div>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
          <div className="flex items-center gap-2 text-yellow-800 text-sm font-medium mb-2">
            <Clock className="h-4 w-4" />
            Important Note
          </div>
          <div className="text-xs text-yellow-700">
            Keep your passport and emergency contact information easily accessible. Download a translation app for
            medical emergencies.
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
