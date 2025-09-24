"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Camera, Instagram, MessageCircle, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <motion.footer 
      className="border-t bg-muted/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Camera className="h-6 w-6" />
              <span className="text-xl font-bold">AI Pics Prompts</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Discover and create amazing AI-generated images. Get inspired by our curated 
              collection and start your own creative journey.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Telegram
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/portraits" className="text-muted-foreground hover:text-primary transition-colors">AI Portraits</Link></li>
              <li><Link href="/category/landscapes" className="text-muted-foreground hover:text-primary transition-colors">Landscapes</Link></li>
              <li><Link href="/category/abstract" className="text-muted-foreground hover:text-primary transition-colors">Abstract Art</Link></li>
              <li><Link href="/category/architecture" className="text-muted-foreground hover:text-primary transition-colors">Architecture</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Google Gemini</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">AI Tools</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 AI Pics Prompts. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using Next.js & Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  )
}