"use client"
import { useRouter } from "next/navigation"
import { clearStorageItems } from "./utils/storage-utils"

export default function ClearCheckoutButton() {
  const router = useRouter()

  const handleClearCheckout = () => {
    // Clear all checkout-related data from localStorage
    clearStorageItems([
      "deliveryAddress",
      "paymentMethod",
      "deliveryMethod",
      "orderItems",
      "orderVoucher",
      "orderSavings",
    ])

    // Redirect to checkout page
    router.push("/")

    // Force a refresh to ensure all components re-render with default values
    window.location.reload()
  }

  return (
    <button
      onClick={handleClearCheckout}
      className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
    >
      Start New Checkout
    </button>
  )
}

