"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageCard } from "@/components/image-card"
import { SkeletonCard } from "@/components/skeleton-card"
import { useState, useEffect } from "react"

interface Category {
  id: string
  name: string
  description: string
  imageCount: number
  thumbnail: string
  images: Array<{
    id: string
    url: string
    prompt: string
    alt: string
  }>
}

interface CategoryDetailProps {
  category: Category
}

export function CategoryDetail({ category }: CategoryDetailProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Gallery
          </Link>
          
          <div className="relative p-6 mb-6 rounded-xl border border-border/50 bg-card/50 overflow-hidden">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full [transition:transform_0.8s_ease-in-out] pointer-events-none" />
            
            <div className="relative">
              <h1 className="text-3xl lg:text-4xl font-bold mb-3">
                {category.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {category.description}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{category.images.length} {category.images.length === 1 ? 'image' : 'images'}</span>
            <span>•</span>
            <span>AI Generated</span>
            <span>•</span>
            <span>High Quality</span>
          </div>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }, (_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {category.images.map((image, index) => (
              <ImageCard
                key={image.id}
                {...image}
                index={index}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}