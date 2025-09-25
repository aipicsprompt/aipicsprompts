"use client"

import { motion } from "framer-motion"
import { CategoryCard } from "@/components/category-card"

interface Category {
  id: string
  name: string
  description: string
  imageCount: number
  thumbnail: string
}

interface GallerySectionProps {
  categories: Category[]
}

export function GallerySection({ categories }: GallerySectionProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              {...category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}