import { Bell, Grid, Heart, Search, ShoppingCart } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  cartCount: number
}

export function Header({ cartCount }: HeaderProps) {
  return (
    <header className="border-b py-3 px-4">
      <div className="container mx-auto flex items-center gap-4">
        <Link href="/" className="flex items-center gap-1">
          <div className="bg-orange-500 text-white p-1 rounded">
            <Grid size={18} />
          </div>
          <span className="font-bold text-xl text-orange-500">FreshCart</span>
        </Link>

        <div className="relative flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full py-2 px-4 pr-10 border rounded-md text-sm"
          />
          <Search size={18} className="absolute right-3 top-2.5 text-gray-400" />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Heart size={20} />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
          <div className="relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          </div>
          <Bell size={20} />
        </div>
      </div>
    </header>
  )
}

