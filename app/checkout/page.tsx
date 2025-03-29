"use client"

import type { FormEvent } from "react"
import { useRouter } from "next/navigation"
import { useDeliveryAddress } from "../../context/delivery-address-context"
import { usePaymentMethod } from "../../context/payment-method-context"
import { useDeliveryMethod } from "../../context/delivery-method-context"
import { useOrder } from "../../context/order-context"

const Checkout = () => {
  const router = useRouter()
  const { deliveryAddress, setDeliveryAddress } = useDeliveryAddress()
  const { paymentMethod, setPaymentMethod } = usePaymentMethod()
  const { deliveryMethod, setDeliveryMethod, getDeliveryDate } = useDeliveryMethod()
  const { getSubtotal, getTax, getTotal, voucher, setVoucher, savings, setSavings } = useOrder()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Save all current state to localStorage before navigation
    localStorage.setItem("deliveryAddress", JSON.stringify(deliveryAddress))
    localStorage.setItem("paymentMethod", paymentMethod)
    localStorage.setItem("deliveryMethod", deliveryMethod)
    localStorage.setItem("orderVoucher", voucher)
    localStorage.setItem("orderSavings", savings.toString())
    localStorage.setItem("orderItems", JSON.stringify(getSubtotal()))

    // Navigate to order summary page
    router.push("/order-summary")
  }
  
  const formattedDate = getDeliveryDate();
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
      <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Cart
        </span>
      </li>

      <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Checkout
        </span>
      </li>

      <li className="flex shrink-0 items-center">
        <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        Order summary
      </li>
    </ol>

    <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
      <div className="min-w-0 flex-1 space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Delivery Address</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your name* </label>
              <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bonnie Green" value={deliveryAddress.name}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, name: e.target.value })}
                    required />
            </div>

            <div>
              <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your email* </label>
              <input type="email" id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@gmail.com" value={deliveryAddress.email}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, email: e.target.value })}
                    required />
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2">
                <label htmlFor="select-country-input-3" className="block text-sm font-medium text-gray-900 dark:text-white"> County* </label>
              </div>
              <select id="select-country-input-3" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" value={deliveryAddress.county}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, county: e.target.value })}>
                <option defaultValue="Nbo">Nairobi</option>
                <option value="Bar">Baringo</option>
                <option value="Bom">Bomet</option>
                <option value="Bun">Bungoma</option>
                <option value="Bus">Busia</option>
                <option value="Mar">Elgeyo-Marakwet</option>
                <option value="Emb">Embu</option>
                <option value="Gar">Garissa</option>
                <option value="Hom">Homa Bay</option>
                <option value="Isi">Isiolo</option>
                <option value="Kaj">Kajiado</option>
                <option value="Kak">Kakamega</option>
                <option value="Ker">Kericho</option>
                <option value="Kia">Kiambu</option>
                <option value="Kil">Kilifi</option>
                <option value="Kir">Kirinyaga</option>
                <option value="Ksi">Kisii</option>
                <option value="Ksm">Kisumu</option>
                <option value="Kit">Kitui</option>
                <option value="Kwa">Kwale</option>
                <option value="Lai">Laikipia</option>
                <option value="Lam">Lamu</option>
                <option value="Mach">Machakos</option>
                <option value="Mak">Makueni</option>
                <option value="Man">Mandera</option>
                <option value="Mar">Marsabit</option>
                <option value="Mer">Meru</option>
                <option value="Mig">Migori</option>
                <option value="Mom">Mombasa</option>
                <option value="Mur">Muranga</option>
                <option value="Nak">Nakuru</option>
                <option value="Nan">Nandi</option>
                <option value="Nar">Narok</option>
                <option value="Nyr">Nyamira</option>
                <option value="Nya">Nyandarua</option>
                <option value="Nye">Nyeri</option>
                <option value="Sam">Samburu</option>
                <option value="Sia">Siaya</option>
                <option value="Tva">Taita-Taveta</option>
                <option value="Tan">Tana River</option>
                <option value="Tha">Tharaka-Nithi</option>
                <option value="Tra">Trans Nzoia</option>
                <option value="Tur">Turkana</option>
                <option value="Uas">Uasin Gishu</option>
                <option value="Vih">Vihiga</option>
                <option value="Waj">Wajir</option>
                <option value="Wep">West Pokot</option>
              </select>
            </div>

            <div>
              <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> City/Town/Estate* </label>
              <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Utawala" value={deliveryAddress.city}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, city: e.target.value })}
                    required />
            </div>

            <div>
              <label htmlFor="phone-input-3" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Phone Number* </label>
              <div className="flex items-center">
                <button id="dropdown-phone-button-3" data-dropdown-toggle="dropdown-phone-3" className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700" type="button">
                  (+254)
                  <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                  </svg>
                </button>
                <div className="relative w-full">
                  <input type="text" id="phone-input" className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500" placeholder="0712345678"  value={deliveryAddress.phoneNumber}
                        onChange={(e) => setDeliveryAddress({ ...deliveryAddress, phoneNumber: e.target.value })}
                        required />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="phone-input-3" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Other Number</label>
              <div className="flex items-center">
                <button id="dropdown-phone-button-3" data-dropdown-toggle="dropdown-phone-3" className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700" type="button">
                  (+254)
                  <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                  </svg>
                </button>
                <div className="relative w-full">
                  <input type="text" id="phone-input" className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500" placeholder="0712345678" value={deliveryAddress.otherNumber}
                        onChange={(e) => setDeliveryAddress({ ...deliveryAddress, otherNumber: e.target.value })} />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                </svg>
                Add new address
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Payment</h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input id="credit-card" aria-describedby="credit-card-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"  checked={paymentMethod === "mpesa"}
                        onChange={() => setPaymentMethod("mpesa")} />
                </div>

                <div className="ms-4 text-sm">
                  <label htmlFor="credit-card" className="font-medium leading-none text-gray-900 dark:text-white"> Mpesa </label>
                  <p id="credit-card-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Pay with mpesa</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">View</button>

                <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Edit</button>
              </div>
            </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input id="pay-on-delivery" aria-describedby="pay-on-delivery-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked={paymentMethod === "delivery"}
                        onChange={() => setPaymentMethod("delivery")}/>
                </div>

                <div className="ms-4 text-sm">
                  <label htmlFor="pay-on-delivery" className="font-medium leading-none text-gray-900 dark:text-white"> Payment on delivery </label>
                  <p id="pay-on-delivery-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Address you provided will be used</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
              </div>
            </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input id="paypal-2" aria-describedby="paypal-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked={paymentMethod === "credit-card"}
                        onChange={() => setPaymentMethod("credit-card")} />
                </div>

                <div className="ms-4 text-sm">
                  <label htmlFor="paypal-2" className="font-medium leading-none text-gray-900 dark:text-white"> Credit card </label>
                  <p id="paypal-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Connect to your card</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">View</button>

                <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Edit</button>
              </div>
            </div>
            

            
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Delivery Methods</h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input id="dhl" aria-describedby="dhl-text" type="radio" name="delivery-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked={deliveryMethod === "regular"}
                        onChange={() => setDeliveryMethod("regular")} />
                </div>

                <div className="ms-4 text-sm">
                  <label htmlFor="dhl" className="font-medium leading-none text-gray-900 dark:text-white"> Kes 300 - 1500 Regular Delivery </label>
                  <p id="dhl-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400" suppressHydrationWarning>Get it by {formattedDate}</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input id="express" aria-describedby="express-text" type="radio" name="delivery-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked={deliveryMethod === "express"}
                        onChange={() => setDeliveryMethod("express")}/>
                </div>

                <div className="ms-4 text-sm">
                  <label htmlFor="express" className="font-medium leading-none text-gray-900 dark:text-white"> Kes 1000 - Express Delivery </label>
                  <p id="express-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Get it today</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Enter a gift card, voucher or promotional code </label>
          <div className="flex max-w-md items-center gap-4">
            <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder=""
                  value={voucher}
                  onChange={(e) => setVoucher(e.target.value)} />
            <button type="button" className="flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => {
                    if (voucher === "DISCOUNT10") {
                      setSavings(1000)
                    }
                  }}>Apply</button>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
        <div className="flow-root">
          <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">Kes{(getSubtotal() / 100).toFixed(2)}</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
              <dd className="text-base font-medium text-green-500">0</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Delivery Fee</dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">Kes 300</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">Kes{(getTax() / 100).toFixed(2)}</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">Kes{(getTotal() / 100).toFixed(2)}</dd>
            </dl>
          </div>
        </div>

        <div className="space-y-3">
          <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleSubmit}>Proceed to Payment</button>

          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">One or more items in your cart require an account. <a href="#" title="" className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Sign in or create an account now.</a>.</p>
        </div>
      </div>
    </div>
  </form>
</section>
  )
}

export default Checkout