"use client"
import { useRouter } from "next/navigation"
import { useDeliveryAddress } from "../../context/delivery-address-context"
import { usePaymentMethod } from "../../context/payment-method-context"
import { useDeliveryMethod } from "../../context/delivery-method-context"
import { useOrder } from "../../context/order-context"
import { CheckCircle } from "lucide-react"
import ClearCheckoutButton from "../../components/order/clear-checkout-button"

const OrderSummary = () => {
  const router = useRouter()
  const { deliveryAddress } = useDeliveryAddress()
  const { paymentMethod } = usePaymentMethod()
  const { deliveryMethod, getDeliveryDate } = useDeliveryMethod()
  const { items, getSubtotal, getTax, getTotal, savings } = useOrder()

  const getPaymentMethodText = () => {
    switch (paymentMethod) {
      case "mpesa":
        return "Mpesa"
      case "delivery":
        return "Payment on delivery"
      case "credit-card":
        return "Credit card"
      default:
        return "Not selected"
    }
  }

  const getDeliveryMethodText = () => {
    switch (deliveryMethod) {
      case "regular":
        return "Regular Delivery (Kes 300 - 1500)"
      case "express":
        return "Express Delivery (Kes 1000)"
      default:
        return "Not selected"
    }
  }

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
          <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <svg
                className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Cart
            </span>
          </li>

          <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <svg
                className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Checkout
            </span>
          </li>

          <li className="flex shrink-0 items-center text-primary-700 dark:text-primary-500">
            <svg
              className="me-2 h-4 w-4 sm:h-5 sm:w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Order summary
          </li>
        </ol>

        <div className="mt-12 flex flex-col items-center">
          <div className="mb-6 flex flex-col items-center justify-center text-center">
            <div className="mb-4 rounded-full bg-green-100 p-3 text-green-500 dark:bg-green-900 dark:text-green-300">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              Thank you for your order!
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Your order has been placed successfully. You will be contacted for any update.
            </p>
          </div>

          <div className="w-full max-w-3xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Order #ORD-
                  {Math.floor(Math.random() * 10000)
                    .toString()
                    .padStart(4, "0")}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400" suppressHydrationWarning>
                  Placed on {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 17h.01m.39-3a3.999 3.999 0 0 1-7.98 0M7 14a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H7Zm.01 3h.01m9.98 0h.01M5 10h14v4H5v-4Z"
                  />
                </svg>
                Print receipt
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Shipping Information</h3>
                <address className="text-sm font-normal not-italic text-gray-500 dark:text-gray-400">
                  <div className="mb-2">{deliveryAddress.name}</div>
                  <div className="mb-2">
                    {deliveryAddress.city}, {deliveryAddress.county}
                  </div>
                  <div className="mb-2">Phone: +254 {deliveryAddress.phoneNumber}</div>
                  <div>{deliveryAddress.email}</div>
                </address>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Order Details</h3>
                <dl className="grid grid-cols-1 gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex justify-between">
                    <dt>Payment Method:</dt>
                    <dd className="font-medium text-gray-900 dark:text-white">{getPaymentMethodText()}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Delivery Method:</dt>
                    <dd className="font-medium text-gray-900 dark:text-white">{getDeliveryMethodText()}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Estimated Delivery:</dt>
                    <dd className="font-medium text-gray-900 dark:text-white">{getDeliveryDate()}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Order Summary</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        Product
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Quantity
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id} className="border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                        >
                          {item.name}
                        </th>
                        <td className="px-4 py-3">{item.quantity}</td>
                        <td className="px-4 py-3">${(item.price / 100).toFixed(2)}</td>
                        <td className="px-4 py-3">${((item.price * item.quantity) / 100).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 space-y-3 border-t border-gray-200 pt-6 dark:border-gray-700">
                <div className="flex justify-between">
                  <span className="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    ${(getSubtotal() / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</span>
                  <span className="text-base font-medium text-green-500">-${(savings / 100).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">$0.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    ${(getTax() / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base font-bold text-gray-900 dark:text-white">Total</span>
                  <span className="text-base font-bold text-gray-900 dark:text-white">
                    ${(getTotal() / 100).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => router.push("/")}
                className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Continue Shopping
              </button>
              <ClearCheckoutButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderSummary

