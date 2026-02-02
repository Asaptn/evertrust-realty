"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* TEXT LOGO */}
       {/* --- UPDATED LOGO SECTION --- */}
<Link href="/" className="flex items-center shrink-0 min-w-max">
  <span className="font-bold text-xl sm:text-2xl flex flex-wrap items-center">
    <span className="bg-gradient-to-r from-green-600 to-green-500 text-white px-2 py-1 rounded-l-md">
      Ever
    </span>
    <span className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-2 py-1 rounded-r-md ml-0.5">
      Trust
    </span>
    <span className="ml-2 text-gray-900 hidden xs:inline-block tracking-tighter">
      REALTY
    </span>
  </span>
</Link>
        

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <Link href="/" className="hover:text-green-300">Home</Link>
          <Link href="/about" className="hover:text-green-300">About</Link>
          <Link href="/services" className="hover:text-green-300">Services</Link>
          <Link href="/contact" className="hover:text-green-300">Contact</Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm px-6 pb-6">
          <nav className="flex flex-col gap-4 pt-4 text-white font-medium">
            <Link onClick={() => setOpen(false)} href="/">Home</Link>
            <Link onClick={() => setOpen(false)} href="/about">About</Link>
            <Link onClick={() => setOpen(false)} href="/services">Services</Link>
            <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
