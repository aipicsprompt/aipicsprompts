"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Camera, Instagram, MessageCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/20 supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Camera className="h-6 w-6" />
            </motion.div>
            <span className="text-xl font-bold">AI Pics Prompts</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                Telegram
              </a>
            </Button>
          </nav>
          
          <div className="flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  )
}