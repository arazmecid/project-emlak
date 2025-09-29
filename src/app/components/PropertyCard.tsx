import Image from "next/image"

type Property = {
  id: number
  title: string
  description: string
  price: number
  address: string
  city: string
  images: string[]
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="border rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">
      <Image
        src={property.images?.[0] ?? "/placeholder.jpg"}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-sm text-gray-600">
          {property.city} — {property.address}
        </p>
        <p className="mt-2 font-bold text-blue-600">{property.price} AZN</p>
      </div>
    </article>
  )
}
