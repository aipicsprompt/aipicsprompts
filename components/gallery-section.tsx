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
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Explore Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into carefully curated categories of AI-generated masterpieces
          </p>
        </motion.div>

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