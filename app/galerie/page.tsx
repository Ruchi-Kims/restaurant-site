"use client";
import { useState } from "react";

const categories = ["Tout", "Ambiance", "Plats", "Vue & Terrasse"];

const images = [
  // Ambiance
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Salle principale du restaurant",
    category: "Ambiance",
  },
  {
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80",
    alt: "Ambiance tamisée en soirée",
    category: "Ambiance",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Table dressée avec élégance",
    category: "Ambiance",
  },
  {
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80",
    alt: "Bar et lounge",
    category: "Ambiance",
  },

  // Plats
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    alt: "Plat signature du chef",
    category: "Plats",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
    alt: "Entrée fraîcheur",
    category: "Plats",
  },
  {
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80",
    alt: "Dessert maison",
    category: "Plats",
  },
  {
    src: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80",
    alt: "Sélection de vins",
    category: "Plats",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    alt: "Pizza au feu de bois",
    category: "Plats",
  },

  // Vue & Terrasse
  {
    src: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800&q=80",
    alt: "Terrasse en soirée",
    category: "Vue & Terrasse",
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    alt: "Vue panoramique",
    category: "Vue & Terrasse",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
    alt: "Terrasse de jour",
    category: "Vue & Terrasse",
  },
];

export default function Galerie() {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered =
    activeCategory === "Tout"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div
      className="relative text-white min-h-screen py-20 px-8"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Titre */}
        <p className="text-yellow-500 tracking-[0.4em] uppercase text-sm text-center mb-4">
          Notre Univers
        </p>
        <h1 className="text-4xl font-serif font-bold text-center mb-16">
          Galerie
        </h1>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 uppercase tracking-[0.25em] text-xs border transition-all duration-300 rounded-full ${
                activeCategory === cat
                  ? "border-yellow-500 bg-yellow-500 text-black"
                  : "border-gray-600 text-gray-400 hover:border-yellow-500 hover:text-yellow-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille uniforme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((img, i) => (
            <div
              key={i}
              className="cursor-pointer overflow-hidden rounded-2xl group relative aspect-[4/3]"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300 rounded-2xl flex flex-col justify-end p-5">
                <p className="text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {img.alt}
                </p>
                <span className="text-yellow-500 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 translate-y-2 group-hover:translate-y-0 mt-1">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-8 text-white text-3xl font-light hover:text-yellow-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <img
            src={selectedImage}
            alt="Image agrandie"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}