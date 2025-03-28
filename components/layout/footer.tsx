import { Clock, Gift, Heart, Package, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const footerCategories = [
    {
      title: "Categories",
      links: [
        "Home Lighting Systems",
        "Street Lights",
        "Charge Controllers",
        "Solar Panels",
      ],
    },
    {
      title: "Get to know us",
      links: ["Company", "About", "Blog", "Help Center", "Our Value"],
    },
    {
      title: "For Consumers",
      links: ["Payments", "Shipping", "Product Returns", "FAQ", "Shop Checkout"],
    },
    {
      title: "Become a Shopper",
      links: ["Shopper Opportunities", "Become a Shopper", "Earnings", "Ideas & Guides", "New Retailers"],
    },
    {
      title: "Freshcart programs",
      links: ["Freshcart programs", "Gift Cards", "Promos & Coupons", "Freshcart Ads", "Careers"],
    },
    {
      title: "More Categories",
      links: [
        "Inverters",
        "Batteries",
        "Solar Floodlights",
      ],
    },
  ]

  return (
    <footer className="bg-white pt-10 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {footerCategories.map((category, index) => (
            <div key={index}>
              <h4 className="font-medium mb-4 text-sm">{category.title}</h4>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href="#" className="text-gray-600 text-xs hover:text-orange-500">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-4 border-t flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-gray-600 mb-4 md:mb-0">
            © 2024-{new Date().getFullYear()} Solarmania. All rights reserved. Powered by Codescandy.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs">Payment Partners</span>
            <div className="flex gap-2">
              <Image src="/placeholder.svg?height=20&width=30" alt="Visa" width={30} height={20} />
              <Image src="/placeholder.svg?height=20&width=30" alt="Mastercard" width={30} height={20} />
              <Image src="/placeholder.svg?height=20&width=30" alt="PayPal" width={30} height={20} />
            </div>
            <div className="flex items-center gap-2 ml-4">
              <span className="text-xs">Get deliveries with FreshCart</span>
              <Image src="/placeholder.svg?height=30&width=100" alt="App Store" width={100} height={30} />
              <Image src="/placeholder.svg?height=30&width=100" alt="Google Play" width={100} height={30} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4 grid grid-cols-4 gap-2">
        <Link href="#" className="flex flex-col items-center text-orange-500">
          <Clock size={20} />
          <span className="text-xs">10 min</span>
        </Link>
        <Link href="#" className="flex flex-col items-center text-gray-500">
          <Gift size={20} />
          <span className="text-xs">Offers</span>
        </Link>
        <Link href="#" className="flex flex-col items-center text-gray-500">
          <Package size={20} />
          <span className="text-xs">Categories</span>
        </Link>
        <Link href="#" className="flex flex-col items-center text-gray-500">
          <Heart size={20} />
          <span className="text-xs">Returns</span>
        </Link>
      </div>

      {/* Buy Now Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-orange-500 text-white rounded-full py-2 px-4 flex items-center gap-2 shadow-lg">
          <ShoppingCart size={18} />
          Buy Now
        </button>
      </div>
    </footer>
  )
}

