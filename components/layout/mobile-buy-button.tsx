import { ShoppingCart } from "lucide-react"

export function MobileBuyButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button className="bg-orange-500 text-white rounded-full py-2 px-4 flex items-center gap-2 shadow-lg">
        <ShoppingCart size={18} />
        Buy Now
      </button>
    </div>
  )
}

