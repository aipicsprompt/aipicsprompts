"use client"

import { motion } from "framer-motion"
import { Camera, Users, Lightbulb, Target, Award, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutUs() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Camera className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About AI Pics Prompts</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're passionate about democratizing AI art creation by providing the world's most comprehensive collection of high-quality AI image prompts.
            </p>
          </div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  To empower creators, artists, and enthusiasts worldwide by providing them with expertly crafted AI prompts that unlock the full potential of artificial intelligence in visual art creation.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously explore new techniques and styles to bring you cutting-edge AI prompts that push creative boundaries.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Community</h3>
                  <p className="text-muted-foreground">
                    We believe in the power of community and strive to create a platform where creators can learn, share, and grow together.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Quality</h3>
                  <p className="text-muted-foreground">
                    Every prompt in our collection is carefully curated and tested to ensure it produces exceptional results across different AI platforms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    AI Pics Prompts was born from a simple observation: while AI image generation tools were becoming incredibly powerful, many users struggled to create effective prompts that would produce the results they envisioned.
                  </p>
                  <p>
                    Founded in 2024 by a team of AI enthusiasts, artists, and technologists, we set out to bridge this gap by creating a comprehensive library of proven prompts that anyone could use to create stunning AI-generated artwork.
                  </p>
                  <p>
                    Today, we serve thousands of creators worldwide, from professional artists and designers to hobbyists and students, all united by their passion for AI-powered creativity.
                  </p>
                </div>
              </div>
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                      <div className="text-sm text-muted-foreground">Active Users</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">AI Prompts</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Categories</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Curated Prompts</div>
                  <p className="text-sm text-muted-foreground">
                    Hand-picked and tested prompts for various styles and subjects
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Easy Copy</div>
                  <p className="text-sm text-muted-foreground">
                    One-click copying to use prompts in your favorite AI tools
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Regular Updates</div>
                  <p className="text-sm text-muted-foreground">
                    New prompts added weekly to keep your creativity flowing
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Free Access</div>
                  <p className="text-sm text-muted-foreground">
                    All prompts are completely free for personal and commercial use
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Ready to unlock your creative potential with AI? Start exploring our collection of prompts and join thousands of creators who are already making amazing art.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    Explore Prompts
                  </a>
                  <a href="/contact-us" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
                    Get in Touch
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
