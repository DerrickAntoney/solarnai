import Image from "next/image"

export function PromoBanners() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-100 rounded-lg p-6 flex">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1">Fruits & Vegetables</h3>
            <p className="text-sm mb-4">Get upto 30% off</p>
            <button className="bg-gray-800 text-white rounded py-1.5 px-4 text-sm">Shop Now</button>
          </div>
          <div className="w-1/2">
            <Image
              src="/hero/hero1.jpg"
              alt="Fruits and vegetables"
              width={200}
              height={150}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-6 flex">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1">Freshly Baked Buns</h3>
            <p className="text-sm mb-4">Get upto 25% off</p>
            <button className="bg-gray-800 text-white rounded py-1.5 px-4 text-sm">Shop Now</button>
          </div>
          <div className="w-1/2">
            <Image
              src="/hero/hero2.jpg"
              alt="Freshly baked bread"
              width={200}
              height={150}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

