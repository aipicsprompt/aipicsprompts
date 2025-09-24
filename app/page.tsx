"use client"

import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/hero-section';
import { GallerySection } from '@/components/gallery-section';
import galleryData from '@/data/gallery.json';

export default function Home() {
  const [filteredCategories, setFilteredCategories] = useState(galleryData.categories);

  const handleSearch = (query: string, category: string) => {
    let filtered = galleryData.categories;

    if (category !== 'all') {
      filtered = filtered.filter(cat => cat.id === category);
    }

    if (query.trim()) {
      filtered = filtered.filter(cat => 
        cat.name.toLowerCase().includes(query.toLowerCase()) ||
        cat.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredCategories(filtered);
  };

  return (
    <div className="min-h-screen">
      <HeroSection onSearch={handleSearch} />
      <GallerySection categories={filteredCategories} />
    </div>
  );
}