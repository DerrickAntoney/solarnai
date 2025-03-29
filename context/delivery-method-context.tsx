"use client"

import type React from "react"
import { createContext, useContext, useState, type ReactNode, useEffect } from "react"

type DeliveryMethodType = "regular" | "express"

type DeliveryMethodContextType = {
  deliveryMethod: DeliveryMethodType
  setDeliveryMethod: React.Dispatch<React.SetStateAction<DeliveryMethodType>>
  getDeliveryFee: () => number
  getDeliveryDate: () => string
}

const DeliveryMethodContext = createContext<DeliveryMethodContextType | undefined>(undefined)

export function DeliveryMethodProvider({ children }: { children: ReactNode }) {
  // Initialize state from localStorage if available, otherwise use default
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethodType>(() => {
    if (typeof window !== "undefined") {
      const savedMethod = localStorage.getItem("deliveryMethod") as DeliveryMethodType
      return savedMethod || "regular"
    }
    return "regular"
  })

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("deliveryMethod", deliveryMethod)
    }
  }, [deliveryMethod])

  const getDeliveryFee = () => {
    return deliveryMethod === "regular" ? 300 : 1000
  }

  const getDeliveryDate = () => {
    const today = new Date()

    if (deliveryMethod === "express") {
      // Return today's date formatted
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
      }
      return today.toLocaleDateString("en-GB", options)
    } else {
      // Add 2 days for regular delivery
      today.setDate(today.getDate() + 2)
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
      }
      return today.toLocaleDateString("en-GB", options)
    }
  }

  return (
    <DeliveryMethodContext.Provider
      value={{
        deliveryMethod,
        setDeliveryMethod,
        getDeliveryFee,
        getDeliveryDate,
      }}
    >
      {children}
    </DeliveryMethodContext.Provider>
  )
}

export function useDeliveryMethod() {
  const context = useContext(DeliveryMethodContext)
  if (context === undefined) {
    throw new Error("useDeliveryMethod must be used within a DeliveryMethodProvider")
  }
  return context
}

