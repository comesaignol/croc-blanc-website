import type { Metadata } from "next";
import { CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dentisterie Esthétique | Cabinet Dentaire Le Croc Blanc",
  description: "Blanchiment dentaire, facettes céramiques, smile design — des traitements esthétiques pour sublimer votre sourire.",
};

const treatments = [
  {
    title: "Facettes en céramique",
    description: "Fines coques de céramique collées sur la face visible des dents. Solution durable (15-20 ans) pour corriger couleur, forme et légères malpositions.",
    image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=600&q=80",
    duration: "2 séances",
    anesthesia: "Optionnelle",
  },
  {
    title: "Composite direct",
    description: "Résine composite modelée directement sur la dent pour corriger éclats, fractures, diastèmes ou ameliorer la forme. Résultat immédiat en une séance.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    duration: "1 séance",
    anesthesia: "Non nécessaire",
  },
  {
    title: "Blanchiment professionnel",
    description: "Éclaircissement LED en cabinet ou gouttières sur mesure à domicile. Résultat jusqu'à 8 teintes plus clair, maintenu 2 à 5 ans avec une bonne hygiène.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    duration: "1 à 2 séances",
    anesthesia: "Aucune",
  },
  {
    title: "Couronnes esthétiques",
    description: "Couronne céramo-céramique entièrement en porcelaine, indiscernable d'une dent naturelle. Idéale pour les dents très abîmées ou après dévitalisation.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
    duration: "2 séances",
    anesthesia: "Oui",
  },
];

export default function EsthetiquePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="bg-navy py-20 mb-16">
        <div className="container-site">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
            <Link href="/soins" className="hover:text-gold transition-colors">Soins</Link>
            <span>/</span>
            <span className="text-white/70">Esthétique dentaire</span>
          </div>
          <p className="section-label">Esthétique & Orthodontie</p>
          <h1 className="font-serif text-5xl text-white leading-tight mb-4">Esthétique dentaire</h1>
          <p className="text-white/60 text-lg max-w-xl">
            Facettes, blanchiment, composites — transformez votre sourire avec nos solutions
            esthétiques sur mesure, naturelles et durables.
          </p>
        </div>
      </div>

      <div className="container-site">
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label">Notre approche</p>
          <h2 className="section-title gold-line-center mb-6">Un sourire naturel avant tout</h2>
          <p className="text-muted leading-relaxed">
            L&apos;esthétique dentaire ne doit jamais primer sur la santé. Notre philosophie :
            des traitements mini-invasifs, respectueux de votre dent naturelle, pour un
            résultat beau et durable. Nous réalisons une analyse du visage et du sourire
            avant chaque traitement — <em>mockup</em> numérique à l&apos;appui.
          </p>
        </div>

        {/* Treatments */}
        <div className="flex flex-col gap-12 mb-24">
          {treatments.map((t, i) => (
            <div key={t.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles size={16} className="text-gold" />
                  <span className="text-gold text-xs font-semibold tracking-widest uppercase">{t.title}</span>
                </div>
                <h2 className="font-serif text-3xl text-navy mb-4">{t.title}</h2>
                <div className="h-0.5 w-10 bg-gold mb-6" />
                <p className="text-muted leading-relaxed mb-6">{t.description}</p>
                <div className="flex gap-6">
                  <div className="bg-ivory p-4">
                    <p className="text-[10px] tracking-widest text-muted uppercase mb-1">Durée</p>
                    <p className="font-semibold text-navy text-sm">{t.duration}</p>
                  </div>
                  <div className="bg-ivory p-4">
                    <p className="text-[10px] tracking-widest text-muted uppercase mb-1">Anesthésie</p>
                    <p className="font-semibold text-navy text-sm">{t.anesthesia}</p>
                  </div>
                </div>
              </div>
              <div
                className={`h-80 bg-cover bg-center ${i % 2 === 1 ? "lg:col-start-1" : ""}`}
                style={{ backgroundImage: `url('${t.image}')` }}
              />
            </div>
          ))}
        </div>

        {/* Design sourire */}
        <div className="bg-ivory p-10 mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Smile Design</p>
              <h2 className="font-serif text-3xl text-navy mb-4">Votre sourire en prévisualisation</h2>
              <div className="h-0.5 w-10 bg-gold mb-6" />
              <p className="text-muted leading-relaxed mb-6">
                Avant tout traitement esthétique, nous réalisons un <strong>smile design numérique</strong> —
                simulation visuelle de votre futur sourire sur photo. Vous validez le résultat avant
                que nous commencions. Aucune surprise.
              </p>
              <ul className="flex flex-col gap-3">
                {["Analyse du visage et de la symétrie", "Simulation numérique 3D", "Mockup en composite provisoire", "Validation avant traitement définitif"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} className="text-gold shrink-0" />
                    <span className="text-sm text-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-72 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=800&q=80')" }} />
          </div>
        </div>

        <div className="bg-navy text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl mb-2">Transformez votre sourire</h3>
            <p className="text-white/60">Consultation esthétique avec simulation numérique incluse.</p>
          </div>
          <a href="https://www.doctolib.fr" target="_blank" rel="noopener noreferrer" className="btn-gold shrink-0">Prendre rendez-vous</a>
        </div>
      </div>
    </div>
  );
}
