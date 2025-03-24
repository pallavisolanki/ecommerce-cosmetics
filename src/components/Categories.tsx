"use client";
import { useCallback } from "react";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { name: "All", img: "/images/all.png" },
  { name: "Face", img: "/images/face.png" },
  { name: "Lips", img: "/images/lips.png" },
  { name: "Eyes", img: "/images/eyes.png" },
  { name: "Nails", img: "/images/nails.png" },
  { name: "Brush & Tools", img: "/images/brush.png" },
  { name: "Gifts", img: "/images/gifts.png" },
];

const Categories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const imageWidth = 180;
  const visibleImages = 6;
  const gap = 24;
  const scrollAmount = imageWidth + gap;

  // Wrap the function in useCallback to prevent unnecessary re-renders
  const checkButtonsVisibility = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    setShowLeft(container.scrollLeft > 0);
    setShowRight(container.scrollLeft + container.clientWidth + scrollAmount <= container.scrollWidth);
  }, [scrollAmount]);


  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    checkButtonsVisibility();
    const container = scrollRef.current;
    container?.addEventListener("scroll", checkButtonsVisibility);
  
    return () => {
      container?.removeEventListener("scroll", checkButtonsVisibility);
    };
  }, [checkButtonsVisibility]);

  return (
    <div className="relative w-full px-6">
      {/* Centered Title */}
      <div className="flex justify-center mb-4">
        <h2 className="text-xl font-semibold mb-4 top-categories-title">Top Categories</h2>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Left Button */}
        {showLeft && (
          <button
            className="absolute left-0 bg-white shadow-md rounded-full p-2 z-10"
            onClick={scrollLeft}
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Scrollable Container with Space */}
        <div
          ref={scrollRef}
          className="scroll-container scrollbar-hide overflow-hidden"
          style={{
            width: `${(imageWidth + gap) * visibleImages - gap}px`,
          }}
        >
          {categories.slice(0, visibleImages).map((category, index) => (
            <div key={index} className="min-w-[180px] image-wrapper flex-shrink-0">
              <div className="relative w-44 h-44 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src={category.img}
                  alt={category.name}
                  width={176}
                  height={176}
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="text-center mt-2">{category.name}</p>
            </div>
          ))}

          {/* Right Button */}
          {showRight && (
            <button
              className="absolute right-0 -top-3 -translate-x-1/2 bg-white shadow-md rounded-full p-2 z-10"
              onClick={scrollRight}
            >
              <ChevronRight size={24} />
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default Categories;