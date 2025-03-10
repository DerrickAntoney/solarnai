"use client"

import Image from "next/image"
import { useState } from "react"
import { ProductCard } from "./product-card"

export function DailyBestSells() {
  const [cartCount, setCartCount] = useState(0)

  const products = [
    {
      name: "Starbucks Ground Coffee",
      category: "Tea, Coffee & Drinks",
      price: 13,
      rating: 4.7,
      reviews: 23,
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Crushed Tomatoes",
      category: "Fruits & Vegetables",
      price: 13,
      oldPrice: 15,
      rating: 4.5,
      reviews: 42,
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Golden Pineapple",
      category: "Fruits & Vegetables",
      price: 13,
      oldPrice: 15,
      rating: 4.5,
      reviews: 34,
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  const handleAddToCart = () => {
    setCartCount(cartCount + 1)
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Daily Best Sells</h2>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-gray-900 text-white rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1">100% Green energy, zero emmissions</h3>
            <p className="text-sm mb-4">Get the best deal before stock runs out.</p>
            <button className="bg-orange-500 text-white rounded py-1.5 px-4 text-sm">Shop Now</button>
          </div>
          <div className="px-6 pb-6">
            <Image
              src="/hero/hero1.jpg"
              alt="Coffee beans"
              width={300}
              height={200}
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} onAddToCart={handleAddToCart} showDetails={true} />
          ))}
        </div>
      </div>
    </div>
  )
}

