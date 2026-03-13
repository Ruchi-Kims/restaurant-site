"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Accueil", href: "/" },
    { label: "À Propos", href: "/apropos" },
    { label: "Menu", href: "/menu" },
    { label: "Réservation", href: "/reservation" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-black text-white px-6 md:px-10 py-5 flex justify-between items-center border-b border-yellow-600 relative z-50">

      {/* Logo */}
      <Link href="/" className="text-xl md:text-2xl font-serif font-bold tracking-widest text-yellow-500 hover:text-yellow-300 transition">
        ✦ CHEZ CLAUDE
      </Link>

      {/* Liens desktop */}
      <ul className="hidden md:flex gap-10 text-sm tracking-widest uppercase">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`transition border-b-2 pb-1 ${
                pathname === link.href
                  ? "text-yellow-500 border-yellow-500"
                  : "text-white border-transparent hover:text-yellow-500 hover:border-yellow-500"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Bouton burger mobile */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-yellow-600 flex flex-col items-center py-6 gap-6 md:hidden z-50">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm uppercase tracking-widest transition ${
                pathname === link.href
                  ? "text-yellow-500 border-b border-yellow-500 pb-1"
                  : "text-white hover:text-yellow-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

    </nav>
  );
}