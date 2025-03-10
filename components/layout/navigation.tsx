import { Grid } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="border-b py-2 px-4">
      <div className="container mx-auto">
        <div
          className="flex items-center gap-1 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <button className="bg-orange-500 text-white px-3 py-1.5 rounded-md text-sm flex items-center gap-1 shrink-0">
            <Grid size={16} />
            All Catergories
          </button>
          <Link href="/" className="text-sm font-medium px-3 py-1.5 bg-gray-100 text-orange-500 rounded-md shrink-0">
            Batteries
          </Link>
          <Link href="#" className="text-sm font-medium px-3 py-1.5 hover:bg-gray-100 rounded-md shrink-0">
            Inverters
          </Link>
          <Link href="#" className="text-sm font-medium px-3 py-1.5 hover:bg-gray-100 rounded-md shrink-0">
            Charge Controllers
          </Link>
          <Link href="#" className="text-sm font-medium px-3 py-1.5 hover:bg-gray-100 rounded-md shrink-0">
            Solar Panels
          </Link>
          <Link href="#" className="text-sm font-medium px-3 py-1.5 hover:bg-gray-100 rounded-md shrink-0">
            Solar Floodlights
          </Link>
          <Link href="#" className="text-sm font-medium px-3 py-1.5 hover:bg-gray-100 rounded-md shrink-0">
            Snacks
          </Link>
          <Link href="#" className="text-sm font-medium px-3 py-1.5 hover:bg-gray-100 rounded-md shrink-0">
            Streetlights
          </Link>
          <Link href="#" className="text-sm font-medium px-3 py-1.5 hover:bg-gray-100 rounded-md shrink-0">
            Home Lighting Systems
          </Link>
        </div>
      </div>
    </nav>
  )
}

