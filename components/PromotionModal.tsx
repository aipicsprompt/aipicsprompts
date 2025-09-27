'use client';

import { useState, useEffect } from 'react';
import { X, Sparkles, Zap, Gift, Clock, Send, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

export function PromotionModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already closed the modal in this session
    const hasClosedModal = sessionStorage.getItem('promotionModalClosed');
    if (hasClosedModal) return;

    // Show modal after 1 minute (60000 milliseconds)
    const timer = setTimeout(() => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }, 60000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
    sessionStorage.setItem('promotionModalClosed', 'true');
  };

  useEffect(() => {
    if (isOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY;
      // Prevent scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        // Restore scrolling and position when modal is closed
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <Card className="w-full max-w-md relative overflow-hidden">
        {/* Gradient top border */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        
        <CardHeader className="text-center pt-10 pb-6 relative">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
            <Sparkles className="h-7 w-7 text-white" />
          </div>
          
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Join Our Community
          </CardTitle>
          
          <CardDescription className="text-gray-600 dark:text-gray-300 mt-2">
            Get exclusive AI art prompts and resources
          </CardDescription>
        </CardHeader>
        
        <CardContent className="px-6 pb-8">
          <div className="space-y-4 mb-8">
            {[
              {
                icon: <Zap className="h-5 w-5 text-blue-500" />,
                title: "Exclusive Content",
                description: "Premium AI art prompts and resources"
              },
              {
                icon: <Gift className="h-5 w-5 text-purple-500" />,
                title: "Special Offers",
                description: "Early access to new features"
              },
              {
                icon: <Clock className="h-5 w-5 text-green-500" />,
                title: "24/7 Access",
                description: "Unlimited access to our library"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <div className="flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-3">
            <Button
              asChild
              className="w-full bg-[#0088cc] hover:bg-[#0077b3] text-white font-medium py-4 text-base"
            >
              <a
                href="https://t.me/aipicsprompts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Join Telegram</span>
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white font-medium py-4 hover:opacity-90"
            >
              <a
                href="https://www.instagram.com/aipicsprompts/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2"
              >
                <Instagram className="h-5 w-5" />
                <span>Follow on Instagram</span>
              </a>
            </Button>
          </div>
          
          <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-6">
            Join 5,000+ AI artists already creating amazing art! ✨
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
