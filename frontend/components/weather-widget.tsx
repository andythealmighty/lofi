"use client"

import { Cloud, Sun, CloudRain, Wind, Droplets } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockWeather } from "@/lib/mock-data"

export function WeatherWidget() {
  const { current, forecast } = mockWeather

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return <Sun className="h-6 w-6 text-yellow-500" />
      case "cloudy":
      case "partly cloudy":
        return <Cloud className="h-6 w-6 text-gray-500" />
      case "rain":
        return <CloudRain className="h-6 w-6 text-blue-500" />
      default:
        return <Sun className="h-6 w-6 text-yellow-500" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {getWeatherIcon(current.condition)}
          Seoul Weather
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Current Weather */}
          <div className="text-center">
            <div className="text-3xl font-bold">{current.temperature}°C</div>
            <div className="text-gray-600">{current.condition}</div>
          </div>

          {/* Current Details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-blue-500" />
              <span>{current.humidity}% Humidity</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="h-4 w-4 text-gray-500" />
              <span>{current.windSpeed} km/h</span>
            </div>
          </div>

          {/* 5-Day Forecast */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm">5-Day Forecast</h4>
            {forecast.map((day, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="w-12">
                  {index === 0 ? "Today" : new Date(day.date).toLocaleDateString("en", { weekday: "short" })}
                </span>
                <div className="flex items-center gap-2">
                  {getWeatherIcon(day.condition)}
                  <span className="w-16 text-xs">{day.condition}</span>
                </div>
                <span className="font-medium">
                  {day.high}°/{day.low}°
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
