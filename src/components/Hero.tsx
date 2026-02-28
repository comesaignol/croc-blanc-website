"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Star, Shield, Award } from "lucide-react";

const stats = [
  { value: "15+", label: "Années d'expérience" },
  { value: "98%", label: "Patients satisfaits" },
  { value: "5000+", label: "Sourires transformés" },
];

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      bgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-dark pt-24">
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 to-navy/60" />

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold" />

      <div className="container-site relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
              Cabinet Dentaire de Référence
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] mb-6">
            Votre sourire,{" "}
            <span className="text-gold italic">notre passion</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Le Cabinet Dentaire Le Croc Blanc vous accueille dans un espace
            moderne et bienveillant. Des soins personnalisés, des technologies
            de pointe, une équipe à votre écoute.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            {[
              { icon: Shield, text: "Soins sans douleur" },
              { icon: Award, text: "Certifié HAS" },
              { icon: Star, text: "Noté 4.9/5" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-2">
                <Icon size={14} className="text-gold" />
                <span className="text-white/80 text-xs font-medium">{text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="https://www.doctolib.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-2"
            >
              Prendre rendez-vous
              <ArrowRight size={16} />
            </a>
            <Link href="/soins" className="btn-outline border-white/30 text-white hover:bg-white hover:text-navy">
              Découvrir nos soins
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 pt-8 border-t border-white/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl text-gold font-semibold">{stat.value}</p>
                <p className="text-white/50 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] tracking-widest uppercase">Défiler</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
