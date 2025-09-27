"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Copy, ExternalLink, Check, Share2 } from "lucide-react"
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
  const [geminiProcessing, setGeminiProcessing] = useState(false)

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

  const copyAndUseInGemini = async () => {
    try {
      setGeminiProcessing(true)
      await navigator.clipboard.writeText(prompt)
      toast.success("Prompt copied and opening in Gemini!")
      // Open Gemini after copying
      window.open(`https://gemini.google.com/?q=${encodeURIComponent(prompt)}`, '_blank')
      setTimeout(() => setGeminiProcessing(false), 2000)
    } catch (err) {
      toast.error("Failed to copy prompt")
      setGeminiProcessing(false)
    }
  }

  const sharePrompt = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'AI Image Prompt',
          text: prompt,
          url: window.location.href
        })
        toast.success("Shared successfully!")
      } catch (err) {
        // User cancelled sharing or error occurred
        fallbackShare()
      }
    } else {
      fallbackShare()
    }
  }

  const fallbackShare = async () => {
    try {
      await navigator.clipboard.writeText(`Check out this AI prompt: ${prompt}\n\nFrom: ${window.location.href}`)
      toast.success("Share link copied to clipboard!")
    } catch (err) {
      toast.error("Failed to share")
    }
  }

  const handleImageClick = (e: React.MouseEvent) => {
    // Only trigger if the click is directly on the image, not on the buttons
    if (e.target === e.currentTarget.querySelector('img')) {
      // This will be handled by the parent's onClick
      return;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-0">
          <div 
            className="relative aspect-[3/4] overflow-hidden"
            onClick={handleImageClick}
          >
            <Image
              src={url}
              alt={alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            <div className="absolute bottom-4 left-4 right-4 transition-transform duration-300">
              <div className="flex justify-between gap-2">
                {/* Left side: Copy & Use in Gemini */}
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyAndUseInGemini();
                  }}
                  className="bg-background/90 backdrop-blur-sm"
                >
                  {geminiProcessing ? (
                    <Check className="h-4 w-4 mr-2" />
                  ) : (
                    <ExternalLink className="h-4 w-4 mr-2" />
                  )}
                  {geminiProcessing ? 'Opening...' : 'Copy & Use in Gemini'}
                </Button>

                {/* Right side: Copy and Share buttons */}
                <div className="flex gap-1">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyPrompt();
                    }}
                    className="bg-background/90 backdrop-blur-sm"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      sharePrompt();
                    }}
                    className="bg-background/90 backdrop-blur-sm"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
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
  );
}