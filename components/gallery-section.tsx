"use client"

import { motion } from "framer-motion"
import { CategoryCard } from "@/components/category-card"
import { SkeletonCard } from "@/components/skeleton-card"
import { useState, useEffect } from "react"

interface Category {
  id: string
  name: string
  description: string
  imageCount: number
  thumbnail: string
}

interface GallerySectionProps {
  categories: Category[]
  loading?: boolean
}

export function GallerySection({ categories, loading = false }: GallerySectionProps) {
  const [isLoading, setIsLoading] = useState(loading)

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setIsLoading(false), 1500)
      return () => clearTimeout(timer)
    }
  }, [loading])

  if (isLoading) {
    return (
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    )
  }

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