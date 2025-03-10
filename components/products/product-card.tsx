"use client"

import Image from "next/image"

interface ProductCardProps {
  product: {
    name: string
    category: string
    price: number
    oldPrice?: number
    rating: number
    reviews: number
    image: string
    discount?: string
  }
  onAddToCart: () => void
  showDetails?: boolean
}

export function ProductCard({ product, onAddToCart, showDetails = false }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-3 relative">
      {product.discount && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
          {product.discount}
        </div>
      )}
      <div className="flex justify-center mb-3">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} width={150} height={150} />
      </div>
      <div className="text-xs text-gray-500 mb-1">{product.category}</div>
      <h3 className="text-sm font-medium mb-1 line-clamp-2">{product.name}</h3>
      <div className="flex items-center mb-1">
        <div className="flex text-yellow-400">
          {"★".repeat(Math.floor(product.rating))}
          {"☆".repeat(5 - Math.floor(product.rating))}
        </div>
        <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className="font-medium">${product.price}</span>
        {product.oldPrice && <span className="text-gray-400 text-sm line-through">${product.oldPrice}</span>}
      </div>
      <button
        className="bg-orange-500 text-white rounded w-full py-1 text-sm flex items-center justify-center gap-1"
        onClick={onAddToCart}
      >
        + {showDetails ? "Add to Cart" : "Add"}
      </button>

      {showDetails && (
        <div className="grid grid-cols-4 gap-2 mt-4 text-center">
          <div className="text-xs">
            <div className="font-medium">13/13</div>
            <div className="text-gray-500">Stock</div>
          </div>
          <div className="text-xs">
            <div className="font-medium">5</div>
            <div className="text-gray-500">Sold</div>
          </div>
          <div className="text-xs">
            <div className="font-medium">{product.rating}</div>
            <div className="text-gray-500">Rating</div>
          </div>
          <div className="text-xs">
            <div className="font-medium">{product.reviews}</div>
            <div className="text-gray-500">Reviews</div>
          </div>
        </div>
      )}
    </div>
  )
}

