import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* Hero */}
<section className="relative text-center py-24 md:py-40 px-6 md:px-8 border-b border-cyan-600 overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/video-hero.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black opacity-60"></div>
  <div className="relative z-10">
    <p className="text-yellow-500 tracking-[0.3em] md:tracking-[0.4em] uppercase text-sm md:text-lg mb-4 md:mb-6">
      Saveurs de la vie
    </p>
    <h1 className="text-3xl md:text-7xl font-serif font-bold text-cyan-700 mb-4 md:mb-8 leading-tight">
      L'Assiette Restaurant <br /> 
    </h1>
    <p className="text-gray-400 text-base md:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
      L'Assiette est un établissement multifonctionnel situé au centre-ville de Brazzaville qui combine plusieurs services pour couvrir tous les moments de la journée.
    </p>
    
    {/* Groupe de boutons */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
      <Link
        href="/menu"
        className="w-full md:w-auto border-2 border-cyan-500 text-cyan-500 px-8 md:px-12 py-3 md:py-4 rounded-full uppercase tracking-widest text-sm md:text-lg hover:scale-105 hover:bg-cyan-500 hover:text-black transition-all duration-300 inline-block"
      >
        Découvrir le Menu
      </Link>
      
      <Link
        href="/reservation"
        className="w-full md:w-auto bg-cyan-600 border-2 border-cyan-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-full uppercase tracking-widest text-sm md:text-lg hover:scale-105 hover:bg-transparent hover:text-cyan-500 transition-all duration-300 inline-block"
      >
        Réserver maintenant
      </Link>
    </div>
  </div>
</section>

      {/* Section Pourquoi nous choisir */}
      <section className="py-24 px-8" style={{ backgroundColor: "#1c1410" }}>
        <div className="w-full px-6 text-center">
          <p className="text-cyan-500 tracking-[0.4em] uppercase text-xl mb-4">
            Notre Promesse
          </p>
          <h2 className="text-5xl font-serif font-bold text-white mb-16">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-gray-400 text-base md:text-2xl  mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Nous proposons plusieurs services bien traités par notre equipe experte
             depuis 4 ans et dans un cadre agreable, ambiant et apaisant. </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">

            <div
              className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer"
              style={{
                backgroundImage: "url('/assiette.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                </svg>
                <h3 className="text-yellow-500 uppercase tracking-widest text-sm mb-3 font-semibold">Restaurant & Lounge Bar</h3>
                <p className="text-gray-200 text-sm leading-relaxed">Propose une cuisine variée allant de la gastronomie raffinée au snacking chic.</p>
              </div>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer"
              style={{
                backgroundImage: "url('/patisserie.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-yellow-500 uppercase tracking-widest text-sm mb-3 font-semibold">Pâtisserie & Boulangerie</h3>
                <p className="text-gray-200 text-sm leading-relaxed">Spécialisée dans les viennoiseries (croissants), gâteaux de fête et douceurs chocolatées.</p>
              </div>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer"
              style={{
                backgroundImage: "url('/glacier.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <h3 className="text-yellow-500 uppercase tracking-widest text-sm mb-3 font-semibold">Glacier</h3>
                <p className="text-gray-200 text-sm leading-relaxed">Offre des glaces artisanales et des desserts rafraîchissants.</p>
              </div>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer"
              style={{
                backgroundImage: "url('/evenement.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <h3 className="text-yellow-500 uppercase tracking-widest text-sm mb-3 font-semibold">Événements & Buffets</h3>
                <p className="text-gray-200 text-sm leading-relaxed"> : Organise des buffets à volonté chaque vendredi et samedi soir, ainsi que des buffets thématiques (ex: Journée des droits de la femme, Saint-Valentin)</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section Notre Histoire */}
      <section className="py-24 px-8" style={{ backgroundColor: "#0d0b09" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cyan-500 tracking-[0.4em] uppercase text-xl mb-4">Notre Histoire</p>
          <h2 className="text-5xl font-serif font-bold text-white mb-12">Pourquoi L'Assiette ?</h2>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-24 bg-cyan-600"></div>
            <span className="text-cyan-500 text-xl">✦</span>
            <div className="h-px w-24 bg-cyan-600"></div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Tout commence par une promesse:  <span className="text-cyan-500 font-semibold">celle de transformer chaque instant de la journée en une expérience sensorielle unique.</span><br></br>
            Née de la passion pour la haute pâtisserie et le raffinement culinaire, 
            L’Assiette s'est imposée comme l'escale incontournable du centre-ville de Brazzaville.
             Plus qu’un restaurant, c’est un lieu de vie hybride où l’élégance 
             d’un Lounge Bar rencontre la gourmandise d’une pâtisserie fine.

          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            De l’odeur des croissants chauds dès l’aube, aux déjeuners d’affaires rythmés,
             jusqu’aux soirées tamisées portées par une cuisine cosmopolite,
              notamment notre célèbre <span className="text-cyan-500 font-semibold">souris d'agneau et nos buffets signatures </span>, 
              nous avons conçu un écrin 'cosy' pour les épicuriens de la capitale.
               
            créer un lieu où le monde entier se retrouve dans une assiette. 
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            Depuis 2023, <span className="text-cyan-500 font-semibold">À L’Assiette</span>,
            nous ne servons pas que des plats ; nous cultivons l'art de la rencontre et le plaisir
             du partage, dans un cadre chic qui bat au rythme de Brazza."
          </p>
          <div className="border-l-4 border-cyan-500 pl-8 text-left max-w-2xl mx-auto">
            <p className="text-gray-300 text-xl font-serif italic leading-relaxed mb-4">
              "La cuisine est le seul langage universel.
              Chaque plat est une invitation au voyage."
            </p>
            <p className="text-cyan-500 uppercase tracking-widest text-sm">
              — Notre équipe.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section Galerie ── */}
      <section className="py-24 px-8" style={{ backgroundColor: "#1c1410" }}>
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-cyan-500 tracking-[0.4em] uppercase text-sm mb-4">
              Notre Univers
            </p>
            <h2 className="text-5xl font-serif font-bold text-white mb-6">
              Notre Galerie
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-cyan-600"></div>
              <span className="text-cyan-500 text-xl">✦</span>
              <div className="h-px w-24 bg-cyan-600"></div>
            </div>
          </div>

          {/* Grille marketing asymétrique */}
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-130">

            {/* Grande image gauche — pleine hauteur */}
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="/assiette2.jpg"
                alt="Salle principale"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-24">
                <span className="text-cyan-500 text-xs uppercase tracking-widest">Ambiance</span>
                <p className="text-white font-serif text-xl mt-1">Une salle hors du temps</p>
              </div>
            </div>

            {/* Image haut droite 1 */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="/italien.jpg"
                alt="Plat signature"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-cyan-500 text-xs uppercase tracking-widest">Plats</span>
                <p className="text-white text-sm mt-0.5">Saveur italien</p>
              </div>
            </div>

            {/* Image haut droite 2 */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="/pizza.jpg"
                alt="Entrée fraîcheur"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-cyan-500 text-xs uppercase tracking-widest">Plats</span>
                <p className="text-white text-sm mt-0.5">Pizza à la saveur</p>
              </div>
            </div>

            {/* Image bas droite 1 */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="/salade.jpg"
                alt="Terrasse en soirée"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-cyan-500 text-xs uppercase tracking-widest">Plats</span>
                <p className="text-white text-sm mt-0.5">Plats d'entrées</p>
              </div>
            </div>

            {/* Image bas droite 2 — avec lien vers galerie */}
            <Link href="/galerie" className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer block">
              <img
                src="/frites.jpg"
                alt="Voir toute la galerie"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-50 group-hover:brightness-40"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="text-cyan-500 text-3xl">✦</span>
                <p className="text-white text-sm uppercase tracking-[0.2em] font-medium text-center px-4">
                  Voir toute<br />la galerie
                </p>
                <div className="border border-cyan-500/60 text-cyan-500 text-xs uppercase tracking-widest px-4 py-2 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                  Explorer →
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Section Call to Action — Réservation */}
      <section
        className="relative py-24 px-8 text-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10">
          <p className="text-yellow-500 tracking-[0.4em] uppercase text-sm mb-4">
            Réservez dès maintenant
          </p>
          <h2 className="text-5xl font-serif font-bold text-cyan-500 mb-6">
            Une table vous attend
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Offrez-vous une expérience culinaire inoubliable. <br />
            Réservez votre table en quelques clics.
          </p>
          <Link
            href="/reservation"
            className="border-2 border-cyan-500 text-cyan-500 px-12 py-4 rounded-full uppercase tracking-widest text-lg hover:scale-110 hover:bg-cyan-500 hover:text-black transition-all duration-300 inline-block"
          >
            Réserver une table
          </Link>
        </div>
      </section>

    </div>
  );
}