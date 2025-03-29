"use client"

import type React from "react"
import { createContext, useContext, useState, type ReactNode, useEffect } from "react"

type PaymentMethodType = "mpesa" | "delivery" | "credit-card"

type PaymentMethodContextType = {
  paymentMethod: PaymentMethodType
  setPaymentMethod: React.Dispatch<React.SetStateAction<PaymentMethodType>>
}

const PaymentMethodContext = createContext<PaymentMethodContextType | undefined>(undefined)

export function PaymentMethodProvider({ children }: { children: ReactNode }) {
  // Initialize state from localStorage if available, otherwise use default
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>(() => {
    if (typeof window !== "undefined") {
      const savedMethod = localStorage.getItem("paymentMethod") as PaymentMethodType
      return savedMethod || "mpesa"
    }
    return "mpesa"
  })

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("paymentMethod", paymentMethod)
    }
  }, [paymentMethod])

  return (
    <PaymentMethodContext.Provider value={{ paymentMethod, setPaymentMethod }}>
      {children}
    </PaymentMethodContext.Provider>
  )
}

export function usePaymentMethod() {
  const context = useContext(PaymentMethodContext)
  if (context === undefined) {
    throw new Error("usePaymentMethod must be used within a PaymentMethodProvider")
  }
  return context
}

