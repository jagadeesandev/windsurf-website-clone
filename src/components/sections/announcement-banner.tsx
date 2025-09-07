"use client";

import { X, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div 
      className="bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white py-3 px-4 relative"
      data-announcement
    >
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center gap-3 text-sm font-medium">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span>
            🚀 Currently available for new opportunities - Product Engineer with 3.9 years experience
          </span>
          <a 
            href="#contact"
            className="inline-flex items-center gap-1 underline hover:no-underline transition-all duration-200"
          >
            CONTACT ME
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 rounded-full hover:bg-white/20 transition-colors duration-200"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}