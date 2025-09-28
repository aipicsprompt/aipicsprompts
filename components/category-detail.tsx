"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { ImageCard } from "@/components/image-card"
import { SkeletonCard } from "@/components/skeleton-card"
import { ImageModal } from "@/components/image-modal"
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
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null)

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
          
       
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span> Total {category.images.length === 1 ? 'image' : 'images'} : {category.images.length}</span>
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
              <div key={image.id} onClick={() => setSelectedImage({ url: image.url, alt: image.alt || image.prompt })} className="cursor-pointer">
                <ImageCard
                  {...image}
                  index={index}
                />
              </div>
            ))}
          </motion.div>
        )}

        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageUrl={selectedImage?.url || ''}
          altText={selectedImage?.alt || 'AI Generated Image'}
        />
      </div>
    </div>
  )
}