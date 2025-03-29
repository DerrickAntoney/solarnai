"use client"

import type { ReactNode } from "react"
import { DeliveryAddressProvider } from "./delivery-address-context"
import { PaymentMethodProvider } from "./payment-method-context"
import { DeliveryMethodProvider } from "./delivery-method-context"
import { OrderProvider } from "./order-context"

export function CheckoutProvider({ children }: { children: ReactNode }) {
  return (
    <OrderProvider>
      <DeliveryAddressProvider>
        <PaymentMethodProvider>
          <DeliveryMethodProvider>{children}</DeliveryMethodProvider>
        </PaymentMethodProvider>
      </DeliveryAddressProvider>
    </OrderProvider>
  )
}

