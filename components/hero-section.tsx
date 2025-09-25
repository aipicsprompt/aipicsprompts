"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onSearch: (query: string) => void
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    onSearch(searchQuery)
  }

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                AI Pics Prompts
              </span>{" "}
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Explore thousands of stunning AI-created images across various categories. 
              Find inspiration and copy prompts to create your own masterpieces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative flex gap-3 p-3 sm:p-4 rounded-lg md:rounded-3xl bg-card border shadow-lg overflow-hidden">
              {/* Shine animation border */}
              <div className="absolute inset-0 rounded-lg md:rounded-3xl pointer-events-none">
                <div className="absolute inset-0 rounded-lg md:rounded-3xl bg-gradient-to-r from-transparent via-primary/20 to-transparent bg-[length:200%_100%] animate-shine opacity-60"></div>
              </div>
              <div className="flex-1 relative z-10">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 z-10" />
                <Input
                  placeholder="Search for images..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-0 bg-transparent text-base h-12 relative z-10"
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              
              <Button onClick={handleSearch} className="h-12 px-8 text-white font-medium relative z-10 rounded-2xl">
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}