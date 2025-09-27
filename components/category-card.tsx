"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"

// Function to format numbers with k, M, etc.
const formatViewCount = (count: number): string => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M';
  }
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k';
  }
  return count.toString();
};

  // Function to get or initialize view count from localStorage
const getInitialViewCount = (id: string): number => {
  if (typeof window === 'undefined') return 1300; // Default for server-side rendering
  
  const storedCounts = JSON.parse(localStorage.getItem('categoryViewCounts') || '{}');
  if (storedCounts[id]) {
    return storedCounts[id];
  }
  // Start from 1.3k for new categories
  const newCount = 1500 + Math.floor(Math.random() * 700); // Random between 1300-2000
  storedCounts[id] = newCount;
  localStorage.setItem('categoryViewCounts', JSON.stringify(storedCounts));
  return newCount;
};

// Function to update view count in localStorage
const updateViewCount = (id: string, count: number): void => {
  if (typeof window === 'undefined') return;
  
  const storedCounts = JSON.parse(localStorage.getItem('categoryViewCounts') || '{}');
  storedCounts[id] = count;
  localStorage.setItem('categoryViewCounts', JSON.stringify(storedCounts));
};

interface CategoryCardProps {
  id: string
  name: string
  description: string
  imageCount: number
  thumbnail: string
  index: number
}

export function CategoryCard({ id, name, description, imageCount, thumbnail, index }: CategoryCardProps) {
  const [viewCount, setViewCount] = useState(0);

  // Initialize view count from localStorage on component mount
  useEffect(() => {
    const count = getInitialViewCount(id);
    // Add a random increment between 20 and 100 on each page load
    const increment = Math.floor(Math.random() * 81) + 20;
    const newCount = count + increment;
    
    setViewCount(newCount);
    updateViewCount(id, newCount);
  }, [id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={`/category/${id}`}>
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/80">
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
              
              <div className="absolute top-4 right-4 flex items-center gap-1">
                <Badge className="bg-background/90 backdrop-blur-sm text-foreground">
                <Eye className="h-4 w-4 text-white" /> &nbsp;
                  {formatViewCount(viewCount)}
                </Badge>
              </div>

            </div>

            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {name}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}