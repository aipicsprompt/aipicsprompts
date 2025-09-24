"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CategoryCardProps {
  id: string
  name: string
  description: string
  imageCount: number
  thumbnail: string
  index: number
}

export function CategoryCard({ id, name, description, imageCount, thumbnail, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={`/category/${id}`}>
        <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/80">
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
              <Badge className="absolute top-4 right-4 bg-background/80 text-foreground">
                {imageCount} images
              </Badge>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {name}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {description}
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}