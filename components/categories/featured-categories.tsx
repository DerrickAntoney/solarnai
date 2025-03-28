"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface Category {
  name: string
  image: string
}

export function FeaturedCategories() {
  const [categoryPage, setCategoryPage] = useState(0)
  const categoriesPerPage = {
    sm: 2,
    md: 3,
    lg: 4,
    xl: 6,
  }

  const categories: Category[] = [
    { name: "Batteries", image: "/hero/hero3.jpg" },
    { name: "Inverters", image: "/hero/hero1.jpg" },
    { name: "Charge Controllers", image: "/hero/hero2.jpg" },
    { name: "Solar Panels", image: "/hero/hero3.jpg" },
    { name: "Solar Floodlights", image: "/hero/hero1.jpg" },
    { name: "Street Lights", image: "/hero/hero2.jpg" },
    { name: "Home Lighting Systems", image: "/hero/hero3.jpg" },
  ]

  const nextCategory = () => {
    const maxPages = Math.ceil(categories.length / categoriesPerPage.xl) - 1
    setCategoryPage((prev) => (prev >= maxPages ? 0 : prev + 1))
  }

  const prevCategory = () => {
    const maxPages = Math.ceil(categories.length / categoriesPerPage.xl) - 1
    setCategoryPage((prev) => (prev <= 0 ? maxPages : prev - 1))
  }

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Featured Categories</h2>
        <div className="flex gap-2">
          <button className="border rounded-full p-1 hover:bg-gray-100" onClick={prevCategory}>
            <ChevronLeft size={18} />
          </button>
          <button className="border rounded-full p-1 hover:bg-gray-100" onClick={nextCategory}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories
          .slice(categoryPage * categoriesPerPage.xl, (categoryPage + 1) * categoriesPerPage.xl)
          .map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-lg p-4 mb-2 w-full flex justify-center">
                <Image src={category.image || "/placeholder.svg"} alt={category.name} width={120} height={80} className="w-full h-full object-cover"/>
              </div>
              <span className="text-xs text-center">{category.name}</span>
            </div>
          ))}
      </div>
    </div>
  )
}

