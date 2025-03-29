"use client"

import type React from "react"
import { createContext, useContext, useState, type ReactNode, useEffect } from "react"

type OrderItem = {
  id: string
  name: string
  price: number
  quantity: number
}

type OrderContextType = {
  items: OrderItem[]
  addItem: (item: OrderItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  getSubtotal: () => number
  getTax: () => number
  getTotal: () => number
  voucher: string
  setVoucher: React.Dispatch<React.SetStateAction<string>>
  savings: number
  setSavings: React.Dispatch<React.SetStateAction<number>>
}

// Sample items for demonstration
const sampleItems: OrderItem[] = [
  { id: "1", name: "Product 1", price: 4999, quantity: 1 },
  { id: "2", name: "Product 2", price: 3095, quantity: 1 },
]

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({ children }: { children: ReactNode }) {
  // Initialize state from localStorage if available, otherwise use default
  const [items, setItems] = useState<OrderItem[]>(() => {
    if (typeof window !== "undefined") {
      const savedItems = localStorage.getItem("orderItems")
      return savedItems ? JSON.parse(savedItems) : sampleItems
    }
    return sampleItems
  })

  const [voucher, setVoucher] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("orderVoucher") || ""
    }
    return ""
  })

  const [savings, setSavings] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const savedSavings = localStorage.getItem("orderSavings")
      return savedSavings ? Number.parseInt(savedSavings, 10) : 0
    }
    return 0
  })

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("orderItems", JSON.stringify(items))
    }
  }, [items])

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("orderVoucher", voucher)
    }
  }, [voucher])

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("orderSavings", savings.toString())
    }
  }, [savings])

  const addItem = (item: OrderItem) => {
    setItems((prev) => [...prev, item])
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const getSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTax = () => {
    return Math.round(getSubtotal() * 0.16) // 16% VAT
  }

  const getTotal = () => {
    return getSubtotal() + getTax() - savings + 99 // Adding store pickup fee
  }

  return (
    <OrderContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        getSubtotal,
        getTax,
        getTotal,
        voucher,
        setVoucher,
        savings,
        setSavings,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  const context = useContext(OrderContext)
  if (context === undefined) {
    throw new Error("useOrder must be used within an OrderProvider")
  }
  return context
}

