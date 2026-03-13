import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white">

  {/* Hero */}
<section className="relative text-center py-24 md:py-40 px-6 md:px-8 border-b border-yellow-600 overflow-hidden">

  {/* Vidéo en background */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source
      src="/video-hero.mp4"
      type="video/mp4"
    />
  </video>

  {/* Overlay sombre */}
  <div className="absolute inset-0 bg-black opacity-60"></div>

  {/* Contenu */}
  <div className="relative z-10">
    <p className="text-yellow-500 tracking-[0.3em] md:tracking-[0.4em] uppercase text-sm md:text-lg mb-4 md:mb-6">
      Une expérience unique
    </p>
    <h1 className="text-3xl md:text-7xl font-serif font-bold mb-4 md:mb-8 leading-tight">
      L'Art de la Cuisine <br /> du Monde
    </h1>
    <p className="text-gray-300 text-base md:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
      Voyagez à travers les saveurs du monde entier,
      sublimées par notre chef dans un cadre raffiné.
    </p>
    <Link
      href="/menu"
      className="border-2 border-yellow-500 text-yellow-500 px-8 md:px-12 py-3 md:py-4 rounded-full uppercase tracking-widest text-sm md:text-lg hover:scale-110 hover:bg-yellow-500 hover:text-white transition-all duration-300 inline-block"
    >
      Découvrir le Menu
    </Link>
  </div>

</section>

      {/* Section Pourquoi nous choisir */}
<section className="py-24 px-8" style={{ backgroundColor: "#1c1410" }}>
  <div className="w-full px-6 text-center">
    <p className="text-yellow-500 tracking-[0.4em] uppercase text-xl mb-4">
      Notre Promesse
    </p>
    <h2 className="text-5xl font-serif font-bold text-white mb-16">
      Pourquoi nous choisir ?
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">

  {/* Carte 1 — Chefs */}
  <div
    className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 transition-opacity duration-300"></div>
    <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
      <h3 className="text-yellow-500 uppercase tracking-widest text-sm mb-3 font-semibold">
        Chefs Experts
      </h3>
      <p className="text-gray-200 text-sm leading-relaxed">
        Une équipe passionnée avec 20 ans d'expérience internationale
      </p>
    </div>
  </div>

  {/* Carte 2 — Saveurs */}
  <div
    className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 transition-opacity duration-300"></div>
    <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className="text-yellow-500 uppercase tracking-widest text-sm mb-3 font-semibold">
        Saveurs du Monde
      </h3>
      <p className="text-gray-200 text-sm leading-relaxed">
        Des recettes authentiques venues des quatre coins du globe
      </p>
    </div>
  </div>

  {/* Carte 3 — Excellence */}
  <div
    className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 transition-opacity duration-300"></div>
    <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
      <h3 className="text-yellow-500 uppercase tracking-widest text-sm mb-3 font-semibold">
        Excellence
      </h3>
      <p className="text-gray-200 text-sm leading-relaxed">
        Noté 5 étoiles par nos clients depuis 10 ans
      </p>
    </div>
  </div>

  {/* Carte 4 — Ambiance */}
  <div
    className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-40 transition-opacity duration-300"></div>
    <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      <h3 className="text-yellow-500 uppercase tracking-widest text-sm mb-3 font-semibold">
        Ambiance Unique
      </h3>
      <p className="text-gray-200 text-sm leading-relaxed">
        Un cadre raffiné et chaleureux pour tous vos moments précieux
      </p>
    </div>
  </div>

</div>
  </div>
</section>

{/* Section Notre Histoire */}
<section className="py-24 px-8" style={{ backgroundColor: "#0d0b09" }}>
  <div className="max-w-4xl mx-auto text-center">

    <p className="text-yellow-500 tracking-[0.4em] uppercase text-xl mb-4">
      Notre Histoire
    </p>
    <h2 className="text-5xl font-serif font-bold text-white mb-12">
      Pourquoi Chez Claude ?
    </h2>

    {/* Ligne dorée décorative */}
    <div className="flex items-center justify-center gap-4 mb-12">
      <div className="h-px w-24 bg-yellow-600"></div>
      <span className="text-yellow-500 text-xl">✦</span>
      <div className="h-px w-24 bg-yellow-600"></div>
    </div>

    <p className="text-gray-300 text-lg leading-relaxed mb-8">
      Tout a commencé en 2014, lorsque <span className="text-yellow-500 font-semibold">Claude Martin</span>, 
      chef passionné et grand voyageur, est rentré d'un périple de trois ans à travers 
      l'Asie, l'Afrique et l'Amérique latine. Dans ses valises, il rapportait bien plus 
      que des souvenirs — des saveurs, des techniques, des rencontres qui allaient 
      changer sa vision de la cuisine pour toujours.
    </p>

    <p className="text-gray-300 text-lg leading-relaxed mb-8">
      Son rêve était simple mais ambitieux : <span className="text-yellow-500 font-semibold">
      créer un lieu où le monde entier se retrouve dans une assiette.</span> Un endroit 
      où un dîner devient un voyage, où chaque plat raconte une histoire, 
      où l'élégance rencontre l'authenticité.
    </p>

    <p className="text-gray-300 text-lg leading-relaxed mb-12">
      Depuis 10 ans, <span className="text-yellow-500 font-semibold">Chez Claude</span> est 
      devenu bien plus qu'un restaurant. C'est un lieu de vie, de partage et de découverte, 
      où chaque convive repart avec le sourire et l'envie de revenir explorer 
      de nouvelles saveurs.
    </p>

    {/* Citation */}
    <div className="border-l-4 border-yellow-500 pl-8 text-left max-w-2xl mx-auto">
      <p className="text-gray-300 text-xl font-serif italic leading-relaxed mb-4">
        "La cuisine est le seul langage universel. 
        Chaque plat est une invitation au voyage."
      </p>
      <p className="text-yellow-500 uppercase tracking-widest text-sm">
        — Claude Martin, Chef Fondateur
      </p>
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
    <h2 className="text-5xl font-serif font-bold text-white mb-6">
      Une table vous attend
    </h2>
    <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
      Offrez-vous une expérience culinaire inoubliable. <br />
      Réservez votre table en quelques clics.
    </p>
    <Link
      href="/reservation"
      className="border-2 border-yellow-500 text-yellow-500 px-12 py-4 rounded-full uppercase tracking-widest text-lg hover:scale-110 hover:bg-yellow-500 hover:text-black transition-all duration-300 inline-block"
    >
      Réserver une table
    </Link>
  </div>
</section>

    </div>
  );
}