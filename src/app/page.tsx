import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [showAdmin, setShowAdmin] = useState(false);

  // function downloadCSV(items) {
  //   const header = ["id,title,city,price,type,rooms,area,description"];
  //   const rows = items.map((p) =>
  //     [
  //       p.id,
  //       p.title,
  //       p.city,
  //       p.price,
  //       p.type,
  //       p.rooms,
  //       p.area,
  //       '"' + (p.description || "") + '"',
  //     ].join(",")
  //   );
  //   const csv = header.concat(rows).join("\n");
  //   const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(blob);
  //   link.download = "properties.csv";
  //   link.click();
  // }

  // const filtered = useMemo(() => {
  //   let res = properties.filter((p) => {
  //     if (
  //       query &&
  //       !`${p.title} ${p.description} ${p.city}`
  //         .toLowerCase()
  //         .includes(query.toLowerCase())
  //     )
  //       return false;
  //     if (city && p.city !== city) return false;
  //     if (typeFilter && p.type !== typeFilter) return false;
  //     if (minPrice && p.price < Number(minPrice)) return false;
  //     if (maxPrice && p.price > Number(maxPrice)) return false;
  //     if (rooms && p.rooms !== Number(rooms)) return false;
  //     return true;
  //   });
  //   if (sortBy === "price_asc") res.sort((a, b) => a.price - b.price);
  //   if (sortBy === "price_desc") res.sort((a, b) => b.price - a.price);
  //   return res;
  // }, [properties, query, city, typeFilter, minPrice, maxPrice, rooms, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="max-w-7xl mx-auto p-4">
        {/* Admin add form */}
        {showAdmin && (
          <section className="bg-white p-4 rounded-md shadow mb-4">
            <h2 className="font-bold mb-2">Yeni elan əlavə et (Admin mock)</h2>
            <form
              // onSubmit={handleAddProperty}
              className="grid grid-cols-1 md:grid-cols-3 gap-2"
            >
              <input
                name="title"
                placeholder="Başlıq"
                required
                className="p-2 border rounded"
              />
              <input
                name="city"
                placeholder="Şəhər"
                required
                className="p-2 border rounded"
              />
              <input
                name="price"
                placeholder="Qiymət (AZN)"
                required
                className="p-2 border rounded"
              />
              <select name="type" className="p-2 border rounded">
                <option value="satış">Satış</option>
                <option value="icarə">İcarə</option>
              </select>
              <input
                name="rooms"
                placeholder="Otaq sayı"
                required
                className="p-2 border rounded"
              />
              <input
                name="area"
                placeholder="Sahə (m²)"
                required
                className="p-2 border rounded"
              />
              <input
                name="image"
                placeholder="Şəkil URL (istəyə bağlı)"
                className="p-2 border rounded col-span-2"
              />
              <textarea
                name="description"
                placeholder="Qısa təsvir"
                className="p-2 border rounded col-span-3"
              />
              <div className="col-span-3 flex gap-2">
                <button className="px-3 py-2 bg-blue-600 text-white rounded">
                  Elanı əlavə et
                </button>
                <button
                  type="button"
                  onClick={() => setShowAdmin(false)}
                  className="px-3 py-2 border rounded"
                >
                  Ləğv et
                </button>
              </div>
            </form>
          </section>
        )}

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            {/* Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[].map((p) => (
                <article
                  key={p.id}
                  className="bg-white rounded shadow overflow-hidden"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold">{p.title}</h3>
                      <div className="text-right">
                        <div className="text-lg font-semibold">
                          {p.price} {p.type === "satış" ? "AZN" : "AZN/ay"}
                        </div>
                        <div className="text-sm text-gray-500">
                          {p.city} • {p.rooms} otaq
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-700">
                      {p.description.slice(0, 120)}...
                    </p>
                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={() => setSelected(p)}
                        className="px-3 py-1 border rounded"
                      >
                        Detallar
                      </button>
                      <button
                        onClick={() =>
                          alert("Telefon: +994 XX XXX XX XX (nümunə)")
                        }
                        className="px-3 py-1 border rounded"
                      >
                        Əlaqə
                      </button>
                    </div>
                  </div>
                </article>
              ))}

              {filtered.length === 0 && (
                <div className="col-span-full bg-white p-4 rounded shadow text-center">
                  Heç bir nəticə tapılmadı.
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-4">
            {/* Map placeholder */}
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold mb-2">Xəritə (placeholder)</h4>
              <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                Leaflet / Google Maps inteqrasiyası əlavə edin
              </div>
            </div>

            {/* Quick stats */}
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold mb-2">Statistika</h4>
              <div>
                Ümumi elanlar: <strong>{properties.length}</strong>
              </div>
              <div>
                Filtr nəticəsi: <strong>{filtered.length}</strong>
              </div>
              <div>
                Şəhərlər: <strong>{cities.join(", ")}</strong>
              </div>
            </div>
            {/* Contact form */}
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold mb-2">Təcili əlaqə</h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Mesaj göndərildi (demo).");
                }}
              >
                <input
                  name="name"
                  placeholder="Adınız"
                  required
                  className="w-full p-2 border rounded mb-2"
                />
                <input
                  name="phone"
                  placeholder="Telefon"
                  required
                  className="w-full p-2 border rounded mb-2"
                />
                <textarea
                  name="msg"
                  placeholder="Qısa mesaj"
                  required
                  className="w-full p-2 border rounded mb-2"
                />
                <button className="w-full px-3 py-2 bg-green-600 text-white rounded">
                  Göndər
                </button>
              </form>
            </div>
          </aside>
        </section>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-3xl w-full overflow-auto">
              <div className="flex justify-between items-start p-3 border-b">
                <h3 className="font-bold">{selected.title}</h3>
                <button
                  onClick={() => setSelected(null)}
                  className="px-2 py-1 border rounded"
                >
                  Bağla
                </button>
              </div>
              <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-64 object-cover rounded"
                />
                <div>
                  <div className="text-xl font-semibold mb-2">
                    {selected.price}{" "}
                    {selected.type === "satış" ? "AZN" : "AZN/ay"}
                  </div>
                  <div>Şəhər: {selected.city}</div>
                  <div>Otaqlar: {selected.rooms}</div>
                  <div>Sahə: {selected.area} m²</div>
                  <p className="mt-3">{selected.description}</p>

                  <div className="mt-4">
                    <h4 className="font-bold mb-2">Mesaj göndər</h4>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        alert("Mesaj göndərildi sahibinə (demo)");
                      }}
                    >
                      <input
                        name="name"
                        placeholder="Adınız"
                        required
                        className="w-full p-2 border rounded mb-2"
                      />
                      <input
                        name="phone"
                        placeholder="Telefon"
                        required
                        className="w-full p-2 border rounded mb-2"
                      />
                      <textarea
                        name="msg"
                        placeholder="Sualınız"
                        required
                        className="w-full p-2 border rounded mb-2"
                      />
                      <button className="px-3 py-2 bg-blue-600 text-white rounded">
                        Sahibə yaz
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

//#region A
// import React from "react";

// const Home = () => {
//   return (
//     <div className="bg-red-400 container">
//       <h1>home</h1>

//       <button className="btn">click</button>
//     </div>
//   );
// };

// export default Home;
//#endregion
