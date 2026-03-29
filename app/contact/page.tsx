"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.nom.trim()) newErrors.nom = "Le nom est obligatoire";
    if (!form.email.trim()) newErrors.email = "L'email est obligatoire";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email invalide";
    if (!form.message.trim()) newErrors.message = "Le message est obligatoire";
    return newErrors;
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) setForm({ nom: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleWhatsApp = () => {
    const phone = "+212695891235";
    const messageWA = form.nom || form.message
      ? `Bonjour Chez Claude !\n${form.nom ? `Je m'appelle ${form.nom}.\n` : ""}${form.message || ""}`
      : "Bonjour Chez Claude ! Je souhaite vous contacter.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(messageWA)}`, "_blank");
  };

  return (
    <div
      className="relative text-white min-h-screen py-20 px-8"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Titre */}
        <p className="text-yellow-500 tracking-[0.4em] uppercase text-sm text-center mb-4">
          Nous Trouver
        </p>
        <h1 className="text-4xl font-serif font-bold text-center mb-16">
          Contact
        </h1>

        {/* Grid encadré */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] border border-yellow-600/20">

          {/* ── Colonne Infos ── */}
          <div className="flex flex-col justify-between p-12 border-b md:border-b-0 md:border-r border-yellow-600/20 bg-white[0.015]">

            <div className="space-y-0">
              <div>
                <h3 className="text-yellow-500 uppercase tracking-[0.4em] text-xs mb-2">Adresse</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">12 Rue des Saveurs<br />75001 Paris, France</p>
              </div>
              <div className="w-8 h-px bg-yellow-600/30 my-7" />
              <div>
                <h3 className="text-yellow-500 uppercase tracking-[0.4em] text-xs mb-2">Horaires</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Lun — Ven &nbsp;&nbsp;&nbsp; 12h – 22h<br />
                  Sam — Dim &nbsp; 11h – 23h
                </p>
              </div>
              <div className="w-8 h-px bg-yellow-600/30 my-7" />
              <div>
                <h3 className="text-yellow-500 uppercase tracking-[0.4em] text-xs mb-2">Téléphone</h3>
                <p className="text-gray-400 text-sm font-light">+33 1 23 45 67 89</p>
              </div>
              <div className="w-8 h-px bg-yellow-600/30 my-7" />
              <div>
                <h3 className="text-yellow-500 uppercase tracking-[0.4em] text-xs mb-2">Email</h3>
                <p className="text-gray-400 text-sm font-light">contact@chezclaude.fr</p>
              </div>
            </div>

            {/* WhatsApp en bas */}
            <div className="mt-10 pt-8 border-t border-yellow-600/15">
              <h3 className="text-yellow-500 uppercase tracking-[0.4em] text-xs mb-2">Contact rapide</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed mb-5">
                Vous préférez WhatsApp ?<br />Écrivez-nous, on répond rapidement.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-3 border border-green-500/30 text-green-400 py-4 uppercase tracking-[0.25em] text-xs font-medium hover:bg-green-500/10 hover:border-green-400 transition-all duration-300"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.544 5.874L0 24l6.326-1.52A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.727.896.944-3.617-.235-.372A9.818 9.818 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
                </svg>
                Écrire sur WhatsApp
              </button>
            </div>
          </div>

          {/* ── Colonne Formulaire ── */}
          <div className="p-12 space-y-7">

            <p className="font-serif text-2xl font-light italic text-gray-200 mb-10">
              Laissez-nous un message
            </p>

            {/* Nom + Email côte à côte */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              <div>
                <label className="text-yellow-500 uppercase tracking-[0.4em] text-xs block mb-3">
                  Nom <span className="text-red-400/70">*</span>
                </label>
                <input
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  type="text"
                  placeholder="Votre nom"
                  className={`w-full bg-transparent border-b text-white text-sm font-light py-2 focus:outline-none transition placeholder:text-gray-700 ${
                    errors.nom ? "border-red-500/60" : "border-white/10 focus:border-yellow-500"
                  }`}
                />
                {errors.nom && <p className="text-red-400/80 text-xs mt-2">{errors.nom}</p>}
              </div>

              <div>
                <label className="text-yellow-500 uppercase tracking-[0.4em] text-xs block mb-3">
                  Email <span className="text-red-400/70">*</span>
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Votre email"
                  className={`w-full bg-transparent border-b text-white text-sm font-light py-2 focus:outline-none transition placeholder:text-gray-700 ${
                    errors.email ? "border-red-500/60" : "border-white/10 focus:border-yellow-500"
                  }`}
                />
                {errors.email && <p className="text-red-400/80 text-xs mt-2">{errors.email}</p>}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-yellow-500 uppercase tracking-[0.4em] text-xs block mb-3">
                Message <span className="text-red-400/70">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Votre message..."
                className={`w-full bg-transparent border-b text-white text-sm font-light py-2 focus:outline-none transition resize-none placeholder:text-gray-700 ${
                  errors.message ? "border-red-500/60" : "border-white/10 focus:border-yellow-500"
                }`}
              />
              {errors.message && <p className="text-red-400/80 text-xs mt-2">{errors.message}</p>}
            </div>

            <p className="text-gray-700 text-xs">
              <span className="text-red-400/70">*</span> Champs obligatoires
            </p>

            {/* Bouton Email */}
            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full border border-yellow-500/50 text-yellow-500 py-4 uppercase tracking-[0.3em] text-xs font-medium hover:bg-yellow-500 hover:text-black transition-all duration-300 disabled:opacity-40"
            >
              {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
            </button>

            {status === "success" && (
              <p className="text-green-500/80 text-center text-xs tracking-[0.2em] uppercase">
                ✦ Message envoyé avec succès
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400/80 text-center text-xs tracking-[0.2em] uppercase">
                Une erreur est survenue, réessayez.
              </p>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}