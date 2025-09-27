import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CategoryDetail } from '@/components/category-detail';
import galleryData from '@/data/gallery.json';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return galleryData.categories.map((category) => ({
    id: category.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = galleryData.categories.find(cat => cat.id === params.id);
  
  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} - AI Pics Prompts`,
    description: `${category.description}. Browse ${category.images.length} stunning AI-generated images in the ${category.name} category.`,
    openGraph: {
      title: `${category.name} - AI Pics Prompts`,
      description: category.description,
      images: [category.thumbnail],
    },
  };
}

export default function CategoryPage({ params }: PageProps) {
  const category = galleryData.categories.find(cat => cat.id === params.id);

  if (!category) {
    notFound();
  }

  // Add imageCount to the category object
  const categoryWithCount = {
    ...category,
    imageCount: category.images.length
  };

  return <CategoryDetail category={categoryWithCount} />;
}