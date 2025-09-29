import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          🏠 EmlakApp
        </Link>
        <div className="flex gap-6">
          <Link href="/properties" className="hover:text-blue-500">Elanlar</Link>
          <Link href="/add-property" className="hover:text-blue-500">Elan əlavə et</Link>
          <Link href="/login" className="hover:text-blue-500">Daxil ol</Link>
        </div>
      </div>
    </nav>
  )
}
