import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface SponsoredContentProps {
  type: 'sidebar' | 'inline' | 'banner'
  category?: string
  className?: string
}

export function SponsoredContent({ type, category, className = '' }: SponsoredContentProps) {
  // 카테고리별 맞춤형 광고 콘텐츠 선택 로직
  const getContent = () => {
    // 실제 구현에서는 카테고리와 타입에 따라 다양한 광고 표시
    if (category === 'food') {
      return {
        title: "Seoul Food Tour",
        description: "Discover the best Korean flavors with expert guides",
        image: "from-red-500 to-orange-500",
        cta: "Book Now",
        sponsor: "SeoulFoodAdventures",
        link: "/experiences/food-tour-special"
      }
    }
    
    if (category === 'kpop') {
      return {
        title: "K-pop Dance Workshop",
        description: "Learn from professional K-pop choreographers",
        image: "from-purple-500 to-pink-500",
        cta: "Join Workshop",
        sponsor: "K-dance Academy",
        link: "/experiences/kpop-workshop"
      }
    }
    
    // 기본 광고
    return {
      title: "Korea Rail Pass",
      description: "Unlimited train travel across Korea - 30% OFF",
      image: "from-blue-500 to-green-500",
      cta: "Get Discount",
      sponsor: "KoRail",
      link: "/services/rail-pass"
    }
  }
  
  const content = getContent()
  
  if (type === 'sidebar') {
    return (
      <Card className={`shadow-md ${className}`}>
        <div className={`h-32 bg-gradient-to-r ${content.image} rounded-t-lg`}></div>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">{content.title}</CardTitle>
            <Badge variant="outline" className="text-xs">Ad</Badge>
          </div>
          <CardDescription>{content.description}</CardDescription>
        </CardHeader>
        <CardFooter className="pt-0">
          <div className="w-full space-y-2">
            <Link href={content.link}>
              <Button size="sm" className="w-full">{content.cta}</Button>
            </Link>
            <div className="text-xs text-gray-500 text-center">Sponsored by {content.sponsor}</div>
          </div>
        </CardFooter>
      </Card>
    )
  }
  
  if (type === 'banner') {
    return (
      <div className={`bg-gradient-to-r ${content.image} text-white p-4 rounded-lg ${className}`}>
        <div className="flex justify-between items-center">
          <div>
            <Badge variant="outline" className="text-xs text-white border-white mb-1">Sponsored</Badge>
            <h3 className="font-bold text-xl">{content.title}</h3>
            <p className="text-white/90">{content.description}</p>
          </div>
          <Link href={content.link}>
            <Button variant="secondary">{content.cta}</Button>
          </Link>
        </div>
      </div>
    )
  }
  
  // inline 타입
  return (
    <div className={`flex items-center gap-4 border p-3 rounded-lg bg-gray-50 ${className}`}>
      <div className={`w-16 h-16 bg-gradient-to-r ${content.image} rounded-md flex-shrink-0`}></div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{content.title}</h3>
          <Badge variant="outline" className="text-xs">Ad</Badge>
        </div>
        <p className="text-sm text-gray-600">{content.description}</p>
      </div>
      <Link href={content.link}>
        <Button size="sm" variant="outline">{content.cta}</Button>
      </Link>
    </div>
  )
}
