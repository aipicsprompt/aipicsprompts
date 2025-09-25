"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"

interface CategoryCardProps {
  id: string
  name: string
  description: string
  imageCount: number
  thumbnail: string
  index: number
}

// Function to format numbers with K notation
const formatViewCount = (count: number): string => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'K'
  }
  return count.toString()
}

// Function to generate random view count based on category
const generateViewCount = (categoryId: string): number => {
  // Use category ID as seed for consistent random numbers
  const seed = categoryId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const random = (seed * 9301 + 49297) % 233280 / 233280
  
  // Generate view counts between 1.2K to 8.9K
  return Math.floor(1200 + random * 7700)
}

export function CategoryCard({ id, name, description, imageCount, thumbnail, index }: CategoryCardProps) {
  const viewCount = generateViewCount(id)
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={`/category/${id}`}>
        <Card className="overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/80">
          <CardContent className="p-0">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={thumbnail}
                alt={name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <Badge className="absolute top-4 right-4 bg-background  flex items-center justify-center text-foreground">
                  {imageCount} Pics
                </Badge>

            </div>

            <div className="p-6">
              <h3 className=" flex justify-between items-center text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {name}


                <Badge className="bg-background  flex items-center justify-center text-foreground">
                 <Eye className="h-4 w-4 mr-2" /> {formatViewCount(viewCount)}
                </Badge>

              </h3>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}