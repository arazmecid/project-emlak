"use client";
import React, { useState } from "react";

const Header = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">Emlak Bazaar</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowAdmin((s) => !s)}
            className="px-3 py-1 border rounded-md text-sm"
          >
            {showAdmin ? "Bağla" : "Admin: Yeni Elan"}
          </button>
          <button
            // onClick={() => downloadCSV(filtered)}
            className="px-3 py-1 border rounded-md text-sm"
          >
            CSV Yüklə
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
