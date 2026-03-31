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
    { label: "Galerie", href: "/galerie" },
    { label: "Menu", href: "/menu" },
    { label: "Réservation", href: "/reservation" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* ── Navbar sticky ── */}
      <nav className="sticky top-0 z-50 bg-black text-white px-6 md:px-10 py-5 flex justify-between items-center border-b border-cyan-600 relative">

        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-serif font-bold tracking-widest text-cyan-500 hover:text-cyan-300 transition">
          ✦ L'Assiette Restaurant
        </Link>

        {/* Liens desktop */}
        <ul className="hidden md:flex gap-10 text-sm tracking-widest uppercase">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition border-b-2 pb-1 ${
                  pathname === link.href
                    ? "text-cyan-500 border-cyan-500"
                    : "text-white border-transparent hover:text-cyan-500 hover:border-cyan-500"
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
          <span className={`block w-6 h-0.5 bg-cyan-500 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-cyan-500 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-cyan-500 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Menu mobile déroulant */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-t border-cyan-600 flex flex-col items-center py-6 gap-6 md:hidden z-50">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm uppercase tracking-widest transition ${
                  pathname === link.href
                    ? "text-cyan-500 border-b border-cyan-500 pb-1"
                    : "text-white hover:text-cyan-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

      </nav>

      {/* ── Bouton WhatsApp flottant ── */}
      <a
        href="https://wa.me/+242069032222"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#1ebe5d] transition-all duration-300"
        aria-label="Nous contacter sur WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.544 5.874L0 24l6.326-1.52A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.727.896.944-3.617-.235-.372A9.818 9.818 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
        </svg>
      </a>
    </>
  );
}