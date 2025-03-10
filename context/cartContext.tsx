"use client"

import { createContext, useState, useContext, type ReactNode, useEffect } from "react"
import type { Product } from "../types"

// Type for the context value
interface CartContextType {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  getTotalPrice: () => number
  getTotalQuantity: () => number
}

// Create Cart Context
const CartContext = createContext<CartContextType | undefined>(undefined)

// Local storage key
const CART_STORAGE_KEY = "shopping-cart"

// CartProvider component to wrap the app and provide cart state
export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Initialize with empty array to ensure consistent server/client rendering
  const [cart, setCart] = useState<Product[]>([])

  // Flag to track if the component has mounted
  const [isLoaded, setIsLoaded] = useState(false)

  // Load cart from localStorage after component has mounted on the client
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY)
      if (storedCart) {
        setCart(JSON.parse(storedCart))
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error)
    }
    setIsLoaded(true)
  }, [])

  // Save cart to localStorage whenever it changes, but only after initial load
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
      } catch (error) {
        console.error("Error saving cart to localStorage:", error)
      }
    }
  }, [cart, isLoaded])

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id)
      if (productExists) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: (item.quantity ?? 0) + 1 } : item))
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  // Remove product from cart
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  // Update product quantity
  const updateQuantity = (id: number, quantity: number) => {
    // Log for debugging
    console.log(`Updating item ${id} to quantity ${quantity}`)

    if (quantity <= 0) {
      removeFromCart(id)
      return
    }

    setCart((prevCart) => {
      // Make sure we're finding the correct item
      const itemExists = prevCart.find((item) => item.id === id)
      if (!itemExists) {
        console.error(`Item with id ${id} not found in cart`)
        return prevCart
      }

      return prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    })
  }

  // Calculate total price of the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * (item.quantity ?? 1), 0)
  }

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + (item.quantity ?? 0), 0)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getTotalPrice, getTotalQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

// Custom hook to use the cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

