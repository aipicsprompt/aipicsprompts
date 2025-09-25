"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Card className="overflow-hidden shadow-lg">
        <CardContent className="p-0">
          {/* Image placeholder */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Skeleton className="h-full w-full" />
          </div>
          
          {/* Content placeholder */}
          <div className="p-4 min-h-[80px] space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
            <Skeleton className="h-3 w-4/6" />
          </div>
          
          {/* Buttons placeholder */}
          <div className="p-4 pt-0">
            <div className="flex justify-between gap-2">
              <Skeleton className="h-9 w-40 rounded-md" />
              <div className="flex gap-2">
                <Skeleton className="h-9 w-9 rounded-md" />
                <Skeleton className="h-9 w-9 rounded-md" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}