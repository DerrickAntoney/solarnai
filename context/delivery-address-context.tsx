"use client"

import type React from "react"
import { createContext, useContext, useState, type ReactNode, useEffect } from "react"

type DeliveryAddressType = {
  name: string
  email: string
  county: string
  city: string
  phoneNumber: string
  otherNumber: string
}

type DeliveryAddressContextType = {
  deliveryAddress: DeliveryAddressType
  setDeliveryAddress: React.Dispatch<React.SetStateAction<DeliveryAddressType>>
}

const defaultAddress: DeliveryAddressType = {
  name: "",
  email: "",
  county: "Nairobi",
  city: "",
  phoneNumber: "",
  otherNumber: "",
}

const DeliveryAddressContext = createContext<DeliveryAddressContextType | undefined>(undefined)

export function DeliveryAddressProvider({ children }: { children: ReactNode }) {
  // Initialize state from localStorage if available, otherwise use default
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddressType>(() => {
    if (typeof window !== "undefined") {
      const savedAddress = localStorage.getItem("deliveryAddress")
      return savedAddress ? JSON.parse(savedAddress) : defaultAddress
    }
    return defaultAddress
  })

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("deliveryAddress", JSON.stringify(deliveryAddress))
    }
  }, [deliveryAddress])

  return (
    <DeliveryAddressContext.Provider value={{ deliveryAddress, setDeliveryAddress }}>
      {children}
    </DeliveryAddressContext.Provider>
  )
}

export function useDeliveryAddress() {
  const context = useContext(DeliveryAddressContext)
  if (context === undefined) {
    throw new Error("useDeliveryAddress must be used within a DeliveryAddressProvider")
  }
  return context
}

