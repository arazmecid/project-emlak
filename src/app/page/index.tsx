import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PropertyCard from '../components/PropertyCard'


export default function Home() {
const [properties, setProperties] = useState<any[]>([])


useEffect(() => {
axios.get('/api/properties').then(r => setProperties(r.data))
}, [])


return (
<main className="p-6">
<h1 className="text-3xl font-bold mb-4">Emlak elanları</h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{properties.map(p => (
<PropertyCard key={p.id} property={p} />
))}
</div>
</main>
)
}