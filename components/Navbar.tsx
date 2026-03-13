"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-black text-white px-10 py-5 flex justify-between items-center border-b border-yellow-600">
      <Link href="/" className="text-2xl font-serif font-bold tracking-widest text-yellow-500 hover:text-yellow-300 transition">
        ✦ CHEZ CLAUDE
      </Link>
      <ul className="flex gap-10 text-sm tracking-widest uppercase">
        <li><Link href="/" className={`transition ${pathname === "/" ? "text-yellow-500 border-b border-yellow-500 pb-1" : "hover:text-yellow-500"}`}>Accueil</Link></li>
        <li><Link href="/apropos" className={`transition ${pathname === "/apropos" ? "text-yellow-500 border-b border-yellow-500 pb-1" : "hover:text-yellow-500"}`}>À Propos</Link></li>
        <li><Link href="/menu" className={`transition ${pathname === "/menu" ? "text-yellow-500 border-b border-yellow-500 pb-1" : "hover:text-yellow-500"}`}>Menu</Link></li>
        <li><Link href="/reservation" className={`transition ${pathname === "/reservation" ? "text-yellow-500 border-b border-yellow-500 pb-1" : "hover:text-yellow-500"}`}>Réservation</Link></li>
        <li><Link href="/contact" className={`transition ${pathname === "/contact" ? "text-yellow-500 border-b border-yellow-500 pb-1" : "hover:text-yellow-500"}`}>Contact</Link></li>
      </ul>
    </nav>
  );
}