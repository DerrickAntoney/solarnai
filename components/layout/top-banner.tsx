import { ChevronDown, Globe } from "lucide-react"

export function TopBanner() {
  return (
    <div className="bg-gray-100 py-1 px-4 text-xs flex justify-between items-center">
      <div>Super Value Deals - Save more with coupons</div>
      <div className="flex items-center gap-1">
        <Globe size={14} className="text-pink-600" />
        <span>English</span>
        <ChevronDown size={14} />
      </div>
    </div>
  )
}

