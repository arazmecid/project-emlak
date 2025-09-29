import PropertyCard from "./PropertyCard"

type Property = {
  id: number
  title: string
  description: string
  price: number
  address: string
  city: string
  images: string[]
}

export default function PropertyList({ properties }: { properties: Property[] }) {
  if (!properties?.length) {
    return <p className="text-gray-500">Hələ ki elan yoxdur.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {properties.map((p) => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  )
}
