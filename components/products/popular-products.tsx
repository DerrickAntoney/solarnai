"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"

export function PopularProducts() {
  const [cartCount, setCartCount] = useState(0)

  const products = [
    {
      name: "Haldiram's Sev Bhujia",
      category: "Snacks & Beverages",
      price: 18,
      oldPrice: 24,
      rating: 4.5,
      reviews: 149,
      image: "/placeholder.svg?height=150&width=150",
      discount: "25%",
    },
    {
      name: "Britannia Digestive",
      category: "Snacks & Biscuits",
      price: 24,
      rating: 4.2,
      reviews: 55,
      image: "/placeholder.svg?height=150&width=150",
      discount: "15%",
    },
    {
      name: "Cadbury's Silk Chocolate",
      category: "Snacks & Chocolate",
      price: 32,
      oldPrice: 38,
      rating: 4.8,
      reviews: 546,
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Crispy Potato Chips",
      category: "Snacks & Beverages",
      price: 3,
      oldPrice: 5,
      rating: 4.4,
      reviews: 55,
      image: "/placeholder.svg?height=150&width=150",
      discount: "40%",
    },
    {
      name: "Salted Butter Popcorn",
      category: "Instant Food",
      price: 13,
      oldPrice: 18,
      rating: 4.5,
      reviews: 149,
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  const handleAddToCart = () => {
    setCartCount(cartCount + 1)
  }

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-xl font-bold mb-4">Popular Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  )
}

