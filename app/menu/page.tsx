"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const plats = [
  {
    categorie: "✦ Entrées",
    items: [
      {
        nom: "Salade César",
        description: "Laitue romaine, parmesan affiné, croûtons dorés, sauce césar maison",
        prix: "5000 FCFA",
        image: "/salade.webp",
        tag: "Végétarien",
      },
      {
        nom: "Pasta Carbonara",
        description: "Oignons caramélisés, bouillon bœuf, gratinée au comté",
        prix: "3000 FCFA",
        image: "/carbonara.webp",
        tag: "Signature",
      },
      {
        nom: "Bruschetta",
        description: "Pain grillé, tomates fraîches, basilic, huile d'olive extra vierge",
        prix: "4000 FCFA",
        image: "/passion.webp",
        tag: "Végétarien",
      },
      {
        nom: "Tartare de Saumon",
        description: "Saumon frais, avocat, citron vert, coriandre, huile de sésame",
        prix: "4000 FCFA",
        image: "/citron.webp",
        tag: "Chef's pick",
      },
    ],
  },
  {
    categorie: "✦ Plats Principaux",
    items: [
      {
        nom: "Entrecôte grillée",
        description: "Entrecôte 300g, sauce au poivre, frites maison, salade verte",
        prix: "5000 FCFA",
        image: "/plat1.webp",
        tag: "Best-seller",
      },
      {
        nom: "Crevetes",
        description: "Filet de saumon Label Rouge, légumes de saison, beurre citronné",
        prix: "6000 FCFA",
        image: "/plat2.webp",
        tag: "Signature",
      },
      {
        nom: "Pizza Italien",
        description: "Spaghetti artisanaux, lardons fumés, parmesan 24 mois, œuf fermier",
        prix: "3000 FCFA",
        image: "/plat3.webp",
        tag: "Classique",
      },
      {
        nom: "Burger",
        description: "Poulet mariné aux épices indiennes, riz basmati, raïta menthe",
        prix: "4500 FCFA",
        image: "/burger.webp",
        tag: "Chef's pick",
      },
    ],
  },
  {
    categorie: "✦ Desserts",
    items: [
      {
        nom: "Creme gourmandise",
        description: "Mascarpone crémeux, café espresso, biscuits savoiardi, cacao",
        prix: "1500 FCFA",
        image: "/dessert1.webp",
        tag: "Classique",
      },
      {
        nom: "Crème brûlée",
        description: "Crème onctueuse à la vanille de Madagascar, caramel croustillant",
        prix: "2000 FCFA",
        image: "/dessert2.webp",
        tag: "Signature",
      },
      {
        nom: "Galettes au crème",
        description: "Chocolat noir Valrhona 70%, cœur coulant, glace vanille maison",
        prix: "1200 FCFA",
        image: "/dessert3.webp",
        tag: "Best-seller",
      },
      {
        nom: "Chocolat-Chantilly",
        description: "Crème vanillée, coulis de framboises fraîches, menthe poivrée",
        prix: "2500 FCFA",
        image: "/dessert4.webp",
        tag: "Classique",
      },
    ],
  },
];

const tagColors: Record<string, string> = {
  "Végétarien": "bg-green-800 text-green-300",
  "Signature": "bg-yellow-900 text-yellow-400",
  "Chef's pick": "bg-purple-900 text-purple-300",
  "Best-seller": "bg-red-900 text-red-300",
  "Classique": "bg-gray-800 text-gray-300",
};

function AnimatedCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="opacity-0 translate-y-12 transition-all duration-700 ease-out">
      {children}
    </div>
  );
}

export default function Menu() {
  return (
    <div
      className="relative text-white min-h-screen py-20 px-8"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Titre */}
        <p className="text-yellow-500 tracking-[0.4em] uppercase text-sm text-center mb-4">
          Notre Sélection
        </p>
        <h1 className="text-4xl font-serif font-bold text-center mb-16 text-cyan-500">
          Le Menu
        </h1>
        

        {plats.map((categorie) => (
          <div key={categorie.categorie} className="mb-20">

            {/* Titre catégorie */}
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-cyan-600 opacity-30"></div>
              <h2 className="text-cyan-500 uppercase tracking-widest text-base font-semibold">
                {categorie.categorie}
              </h2>
              <div className="h-px flex-1 bg-cyan-600 opacity-30"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {categorie.items.map((plat, index) => (
                <AnimatedCard key={plat.nom} delay={index * 100}>
                  <div
                    className="group rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300"
                    style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                  >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={plat.image}
                        alt={plat.nom}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay gradient sur image */}
                      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60"></div>
                      {/* Tag */}
                      <span className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full font-medium ${tagColors[plat.tag]}`}>
                        {plat.tag}
                      </span>
                    </div>

                    {/* Infos */}
                    <div className="p-5">
                      <h3 className="text-white font-serif font-semibold text-lg mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                        {plat.nom}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed mb-4">
                        {plat.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-500 font-bold text-xl">{plat.prix}</span>
                        <Link href="/reservation" className="text-gray-600 text-xs uppercase tracking-widest group-hover:text-yellow-500 transition-colors duration-300">
                          Réserver →
                        </Link>
                      </div>
                    </div>

                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}