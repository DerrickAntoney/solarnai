import { Clock, Gift, Heart, Package } from "lucide-react"

export function FeatureSection() {
  const features = [
    {
      icon: <Clock className="text-orange-500" size={24} />,
      title: "10 minute grocery now",
      description: "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.",
    },
    {
      icon: <Gift className="text-orange-500" size={24} />,
      title: "Best Prices & Offers",
      description:
        "Compare prices from local supermarkets. Freshcart helps you to save on grocery, top-up, and get best prices & offers.",
    },
    {
      icon: <Package className="text-orange-500" size={24} />,
      title: "Wide Assortment",
      description:
        "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.",
    },
    {
      icon: <Heart className="text-orange-500" size={24} />,
      title: "Easy Returns",
      description:
        "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 border-t">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="bg-orange-100 p-2 rounded-full">{feature.icon}</div>
            <div>
              <h3 className="font-bold mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

