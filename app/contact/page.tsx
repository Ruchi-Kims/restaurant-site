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

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Titre */}
        <p className="text-yellow-500 tracking-[0.4em] uppercase text-sm text-center mb-4">
          Nous Trouver
        </p>
        <h1 className="text-4xl font-serif font-bold text-center mb-16">
          Contact
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Informations */}
          <div
            className="space-y-6 rounded-xl p-8"
            style={{ backgroundColor: "rgba(0,0,0,0.82)" }}
          >
            <div>
              <h3 className="text-yellow-500 uppercase tracking-widest text-xs mb-2">Adresse</h3>
              <p className="text-gray-400 text-sm">12 Rue des Saveurs<br />75001 Paris, France</p>
            </div>
            <div>
              <h3 className="text-yellow-500 uppercase tracking-widest text-xs mb-2">Horaires</h3>
              <p className="text-gray-400 text-sm">
                Lundi — Vendredi : 12h – 22h<br />
                Samedi — Dimanche : 11h – 23h
              </p>
            </div>
            <div>
              <h3 className="text-yellow-500 uppercase tracking-widest text-xs mb-2">Téléphone</h3>
              <p className="text-gray-400 text-sm">+33 1 23 45 67 89</p>
            </div>
            <div>
              <h3 className="text-yellow-500 uppercase tracking-widest text-xs mb-2">Email</h3>
              <p className="text-gray-400 text-sm">contact@chezclaude.fr</p>
            </div>
          </div>

          {/* Formulaire */}
          <div
            className="space-y-4 rounded-xl p-8"
            style={{ backgroundColor: "rgba(0,0,0,0.82)" }}
          >

            {/* Nom */}
            <div>
              <label className="text-yellow-500 uppercase tracking-widest text-xs block mb-2">
                Nom <span className="text-red-400">*</span>
              </label>
              <input
                name="nom"
                value={form.nom}
                onChange={handleChange}
                type="text"
                placeholder="Votre nom"
                className={`w-full bg-transparent border text-white px-4 py-3 text-sm focus:outline-none transition ${
                  errors.nom ? "border-red-500" : "border-gray-700 focus:border-yellow-500"
                }`}
              />
              {errors.nom && <p className="text-red-400 text-xs mt-1">⚠️ {errors.nom}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="text-yellow-500 uppercase tracking-widest text-xs block mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Votre email"
                className={`w-full bg-transparent border text-white px-4 py-3 text-sm focus:outline-none transition ${
                  errors.email ? "border-red-500" : "border-gray-700 focus:border-yellow-500"
                }`}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">⚠️ {errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="text-yellow-500 uppercase tracking-widest text-xs block mb-2">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Votre message..."
                className={`w-full bg-transparent border text-white px-4 py-3 text-sm focus:outline-none transition resize-none ${
                  errors.message ? "border-red-500" : "border-gray-700 focus:border-yellow-500"
                }`}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">⚠️ {errors.message}</p>}
            </div>

            <p className="text-gray-500 text-xs">
              <span className="text-red-400">*</span> Champs obligatoires
            </p>

            {/* Bouton */}
            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full border-2 border-yellow-500 text-yellow-500 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-yellow-500 hover:text-black transition-all duration-300 disabled:opacity-50"
            >
              {status === "loading" ? "Envoi en cours..." : "Envoyer"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-center text-sm tracking-widest uppercase">
                ✅ Message envoyé avec succès !
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center text-sm tracking-widest uppercase">
                ❌ Une erreur est survenue, réessayez.
              </p>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}