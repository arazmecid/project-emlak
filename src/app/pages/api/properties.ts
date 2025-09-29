import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
try {
if (req.method === 'GET') {
const properties = await prisma.property.findMany({ orderBy: { createdAt: 'desc' } })
return res.status(200).json(properties)
}


if (req.method === 'POST') {
const { title, description, price, address, city, images } = req.body
const prop = await prisma.property.create({ data: { title, description, price: Number(price), address, city, images } })
return res.status(201).json(prop)
}


return res.status(405).end()
} catch (err) {
console.error(err)
return res.status(500).json({ error: 'Server error' })
}
}