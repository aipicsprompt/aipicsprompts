"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Copy, ExternalLink, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface ImageCardProps {
  id: string
  url: string
  prompt: string
  alt: string
  index: number
}

export function ImageCard({ id, url, prompt, alt, index }: ImageCardProps) {
  const [copied, setCopied] = useState(false)

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      toast.success("Prompt copied to clipboard!")
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error("Failed to copy prompt")
    }
  }

  const openGemini = () => {
    window.open(`https://gemini.google.com/?q=${encodeURIComponent(prompt)}`, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-0">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={url}
              alt={alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={copyPrompt}
                  className="flex-1 bg-background/90 backdrop-blur-sm"
                >
                  {copied ? (
                    <Check className="h-4 w-4 mr-2" />
                  ) : (
                    <Copy className="h-4 w-4 mr-2" />
                  )}
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={openGemini}
                  className="bg-background/90 backdrop-blur-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="p-4 min-h-[80px]">
            <p className="text-sm text-muted-foreground line-clamp-3">
              {prompt}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}