"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Camera, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <motion.footer 
      className="border-t bg-muted/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Top Section - Logo and Social Media */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link href="/" className="flex items-center space-x-2">
              <Camera className="h-6 w-6" />
              <span className="text-xl font-bold">AI Pics Prompts</span>
            </Link>
            
            <div className="flex space-x-3">
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

          {/* Middle Section - Page Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/terms-conditions" className="text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/contact-us" className="text-muted-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/about-us" className="text-muted-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/dmca-policy" className="text-muted-foreground hover:text-primary transition-colors">
              DMCA Policy
            </Link>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 AI Pics Prompts. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}