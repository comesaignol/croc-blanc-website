import type { Metadata } from "next";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orthodontie — Aligneurs & Bagues | Cabinet Dentaire Le Croc Blanc",
  description: "Orthodontie adulte et enfant : aligneurs transparents, bagues céramique et métallique. Souriez en toute confiance.",
};

const faq = [
  {
    q: "À quel âge peut-on commencer un traitement orthodontique ?",
    a: "Le traitement interceptif peut démarrer dès 7-8 ans. Pour les adultes, il n'y a pas d'âge limite — l'orthodontie invisible est particulièrement adaptée aux adultes actifs.",
  },
  {
    q: "Aligneurs transparents ou bagues : quelle différence ?",
    a: "Les aligneurs (Invisalign, etc.) sont amovibles, quasi-invisibles et plus confortables. Les bagues sont fixes, plus efficaces pour les cas complexes. Votre praticien vous conseille selon votre malocclusion.",
  },
  {
    q: "Combien de temps dure un traitement ?",
    a: "De 6 à 24 mois selon la complexité. Les cas légers en aligneurs peuvent se régler en 6 à 12 mois. Un traitement adulte complet dure en moyenne 18 mois.",
  },
  {
    q: "L'orthodontie est-elle remboursée ?",
    a: "Pour les moins de 16 ans, la Sécurité Sociale rembourse 6 semestres de traitement. Pour les adultes, le remboursement dépend de votre mutuelle. Nous vous aidons à optimiser votre prise en charge.",
  },
];

const options = [
  {
    title: "Aligneurs transparents",
    tag: "Invisible",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    points: ["Amovibles pour manger et brosser", "Quasi-invisibles", "Confort supérieur", "Contrôle digital de la progression"],
  },
  {
    title: "Bagues céramiques",
    tag: "Discret",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    points: ["Couleur proche des dents", "Fixe = compliance garantie", "Efficace sur cas complexes", "Moins visible que les bagues métal"],
  },
  {
    title: "Bagues métalliques",
    tag: "Efficace",
    image: "https://images.unsplash.com/photo-1588776814546-1ffbb6c6aa93?w=600&q=80",
    points: ["Solution la plus robuste", "Idéale pour les corrections importantes", "Adaptée aux enfants et adolescents", "Coût le plus accessible"],
  },
];

export default function OrthodontiePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="bg-navy py-20 mb-16">
        <div className="container-site">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
            <Link href="/soins" className="hover:text-gold transition-colors">Soins</Link>
            <span>/</span>
            <span className="text-white/70">Orthodontie</span>
          </div>
          <p className="section-label">Esthétique & Orthodontie</p>
          <h1 className="font-serif text-5xl text-white leading-tight mb-4">Orthodontie</h1>
          <p className="text-white/60 text-lg max-w-xl">
            Aligneurs transparents ou bagues, pour enfants et adultes. Un sourire droit,
            une occlusion saine, une confiance retrouvée.
          </p>
        </div>
      </div>

      <div className="container-site">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="section-label">Pourquoi traiter ?</p>
            <h2 className="section-title gold-line mb-6">Au-delà de l&apos;esthétique</h2>
            <p className="text-muted leading-relaxed mb-4">
              Un sourire mal aligné n&apos;est pas qu&apos;une question d&apos;apparence. Les malocclusions
              favorisent les caries (zones difficiles à brosser), les problèmes articulaires
              (ATM), les maux de tête et l&apos;usure prématurée des dents.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Un traitement orthodontique bien conduit améliore la santé bucco-dentaire
              globale, la fonction masticatoire et bien sûr le sourire.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {["Correction des dents serrées", "Fermeture des diastèmes", "Correction de la supraclusion", "Alignement de l'arcade", "Correction du prognathisme", "Traitement après 18 ans"].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-navy">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80')" }} />
        </div>

        {/* Options */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="section-label">Solutions disponibles</p>
            <h2 className="section-title gold-line-center">Quelle option pour vous ?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {options.map((opt) => (
              <div key={opt.title} className="bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${opt.image}')` }} />
                  <span className="absolute top-4 left-4 bg-gold text-white text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1">{opt.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-navy text-lg mb-4">{opt.title}</h3>
                  <ul className="flex flex-col gap-2">
                    {opt.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-muted">
                        <ArrowRight size={13} className="text-gold shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="section-label">Questions fréquentes</p>
            <h2 className="section-title gold-line-center">FAQ Orthodontie</h2>
          </div>
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {faq.map((item) => (
              <div key={item.q} className="border border-gray-100 p-6">
                <h3 className="font-serif text-navy text-base mb-3">{item.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-navy text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl mb-2">Découvrez votre plan de traitement</h3>
            <p className="text-white/60">Bilan orthodontique gratuit sur rendez-vous.</p>
          </div>
          <a href="https://www.doctolib.fr" target="_blank" rel="noopener noreferrer" className="btn-gold shrink-0">Prendre rendez-vous</a>
        </div>
      </div>
    </div>
  );
}
