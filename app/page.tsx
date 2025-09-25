"use client"

import { useState } from 'react';
import { HeroSection } from '@/components/hero-section';
import { GallerySection } from '@/components/gallery-section';
import galleryData from '@/data/gallery.json';

export default function Home() {
  const [filteredCategories, setFilteredCategories] = useState(galleryData.categories);

  const handleSearch = (query: string) => {
    let filtered = galleryData.categories;

    // Filter by search query
    if (query.trim()) {
      const searchTerm = query.toLowerCase();
      filtered = filtered.filter(cat => {
        // Search in category name and description
        const categoryMatch = cat.name.toLowerCase().includes(searchTerm) ||
                            cat.description.toLowerCase().includes(searchTerm);
        
        // Search in image prompts
        const promptMatch = cat.images.some(image => 
          image.prompt.toLowerCase().includes(searchTerm) ||
          image.alt.toLowerCase().includes(searchTerm)
        );
        
        return categoryMatch || promptMatch;
      });
    } else {
      // If no search query, show all categories
      filtered = galleryData.categories;
    }

    setFilteredCategories(filtered);
  };

  return (
    <div className="min-h-screen">
      <HeroSection onSearch={handleSearch} />
      {filteredCategories.length > 0 ? (
        <GallerySection categories={filteredCategories} />
      ) : (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-semibold mb-4">No Results Found</h3>
            <p className="text-muted-foreground mb-6">
              We couldn't find any images matching your search criteria. Try different keywords or browse all categories.
            </p>
            <button 
              onClick={() => setFilteredCategories(galleryData.categories)}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Show All Categories
            </button>
          </div>
        </div>
      )}
    </div>
  );
}