"use client"

import { ChevronRight } from "lucide-react"
import Image from "next/image"
import React, { useEffect, useState } from "react"

interface Slide {
  title: string
  description: string
  badge: string
  image: string
  color: string
}

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides: Slide[] = [
    {
      title: "Free Shipping on orders over $100",
      description: "Free Shipping to First-Time Customers Only. After promotions and discounts are applied.",
      badge: "Countrywide Shipping & Across East Africa",
      image: "/hero/hero1.jpg",
      color: "orange-500",
    },
    {
      title: "Solar Equipment & Products",
      description: "Get up to 30% off on your first order. Fresh produce delivered to your doorstep.",
      badge: "30% Off - first order",
      image: "/hero/hero2.jpg",
      color: "orange-500",
    },
    {
      title: "Organic Products for Healthy Living",
      description: "Discover our range of organic products. Certified and sustainably sourced.",
      badge: "Organic - certified products",
      image: "/hero/hero3.jpg",
      color: "blue-500",
    },
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden">
      <div className="absolute top-0 left-0 bg-yellow-400 text-xs py-1 px-2 rounded-br-lg z-10">
        {slides[currentSlide].badge}
      </div>

      <div className="relative h-[400px] md:h-[350px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="p-4 md:p-8 md:w-1/2 flex flex-col justify-center">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  {slide.title.split("$").map((part, i, arr) =>
                    i === 0 ? (
                      <React.Fragment key={i}>
                        {part}
                        {arr.length > 1 && <br />}
                      </React.Fragment>
                    ) : (
                      <React.Fragment key={i}>
                        <span className={`text-${slide.color}`}>${part}</span>
                      </React.Fragment>
                    ),
                  )}
                </h1>
                <p className="text-sm text-gray-600 mb-4">{slide.description}</p>
                <button className="bg-gray-800 text-white rounded py-1.5 px-4 text-sm w-fit flex items-center gap-1">
                  Shop Now <ChevronRight size={16} />
                </button>
              </div>
              <div className="md:w-1/2 h-[150px] md:h-auto">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 
              ${index === currentSlide ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

