"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    treatment: "Implant dentaire",
    rating: 5,
    text: "J'avais beaucoup d'appréhension avant mon implant. Le Dr [Nom] a pris le temps de tout m'expliquer, l'anesthésie était parfaite et je n'ai ressenti aucune douleur. Résultat impeccable, je recommande vivement !",
    avatar: "ML",
  },
  {
    name: "Thomas R.",
    treatment: "Aligneurs transparents",
    rating: 5,
    text: "Après 14 mois d'aligneurs, mon sourire est transformé. Le suivi était très professionnel, les RDV toujours à l'heure. L'équipe est adorable et le cabinet moderne. Je suis ravi du résultat.",
    avatar: "TR",
  },
  {
    name: "Sophie K.",
    treatment: "Blanchiment & facettes",
    rating: 5,
    text: "Un accueil chaleureux dès le premier rendez-vous. Le traitement esthétique a complètement changé mon rapport à mon sourire. Naturel, lumineux — exactement ce que je voulais. Merci à toute l'équipe !",
    avatar: "SK",
  },
  {
    name: "Pierre M.",
    treatment: "Soins d'urgence",
    rating: 5,
    text: "Prise en charge le jour même pour une douleur insupportable. Efficacité, rapidité et gentillesse. Le Dr a identifié le problème immédiatement et l'a résolu sans douleur. Cabinet de grande qualité.",
    avatar: "PM",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24 bg-navy-dark overflow-hidden">
      <div className="container-site">
        <div className="text-center mb-16">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">Témoignages</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-white leading-tight">
            Ils nous font confiance
          </h2>
          <div className="h-0.5 w-12 bg-gold mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Quote */}
          <div className="relative bg-white/5 border border-white/10 p-8 md:p-12 mb-8">
            <Quote size={40} className="absolute top-6 left-6 text-gold/20" />
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-8 relative z-10">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold flex items-center justify-center">
                <span className="font-serif text-white font-semibold">{t.avatar}</span>
              </div>
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-gold text-xs font-medium tracking-wide">{t.treatment}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-0.5 transition-all duration-300 ${
                    i === current ? "w-8 bg-gold" : "w-4 bg-white/20"
                  }`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors"
                aria-label="Précédent"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors"
                aria-label="Suivant"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Google rating */}
          <div className="mt-12 flex items-center justify-center gap-4 text-white/40 text-sm">
            <div className="flex items-center gap-1.5">
              <span className="text-3xl font-serif text-white font-semibold">4.9</span>
              <div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-xs text-white/40">sur Google (127 avis)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
