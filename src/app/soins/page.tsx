import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos soins dentaires | Cabinet Dentaire Le Croc Blanc",
  description: "Implantologie, orthodontie, dentisterie esthétique, chirurgie buccale, soins conservateurs et parodontologie. Découvrez l'ensemble de nos soins dentaires.",
};

const soins = [
  {
    category: "Chirurgie & Implantologie",
    items: [
      {
        title: "Implantologie",
        href: "/soins/implantologie",
        description: "Remplacement d'une dent manquante par un implant en titane, solution permanente et esthétique.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffbb6c6aa93?w=600&q=80",
      },
      {
        title: "Chirurgie buccale",
        href: "/soins/chirurgie",
        description: "Extractions complexes, greffes osseuses, freinectomie — interventions chirurgicales de précision.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
      },
    ],
  },
  {
    category: "Esthétique & Orthodontie",
    items: [
      {
        title: "Esthétique dentaire",
        href: "/soins/esthetique",
        description: "Facettes, blanchiment, composites — pour un sourire naturel et lumineux.",
        image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=600&q=80",
      },
      {
        title: "Orthodontie",
        href: "/soins/orthodontie",
        description: "Aligneurs transparents ou bagues, pour enfants et adultes.",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
      },
    ],
  },
  {
    category: "Soins courants",
    items: [
      {
        title: "Soins conservateurs",
        href: "/soins/conservateurs",
        description: "Caries, dévitalisations, couronnes — préserver vos dents naturelles au maximum.",
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
      },
      {
        title: "Parodontologie",
        href: "/soins/parodontologie",
        description: "Traitement des maladies des gencives pour protéger vos dents sur le long terme.",
        image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80",
      },
    ],
  },
];

export default function SoinsPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div className="bg-navy py-20 mb-16">
        <div className="container-site">
          <p className="section-label">Nos expertises</p>
          <h1 className="font-serif text-5xl text-white leading-tight mb-4">
            Tous nos soins dentaires
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Du soin courant à la chirurgie complexe, notre équipe pluridisciplinaire
            vous accompagne pour chaque besoin bucco-dentaire.
          </p>
        </div>
      </div>

      <div className="container-site">
        {soins.map((section) => (
          <div key={section.category} className="mb-16">
            <h2 className="font-serif text-2xl text-navy mb-8 pb-4 border-b border-ivory-dark">
              {section.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex gap-5 p-5 bg-ivory hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="w-24 h-24 shrink-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="font-serif text-lg text-navy mb-1.5 group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                    <div className="mt-2 flex items-center gap-1 text-gold text-xs font-medium group-hover:gap-2 transition-all">
                      <span>En savoir plus</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* RDV CTA */}
        <div className="bg-navy text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
          <div>
            <h3 className="font-serif text-2xl mb-2">Vous avez une question sur un soin ?</h3>
            <p className="text-white/60">Appelez-nous ou prenez rendez-vous pour une consultation.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a href="tel:+33400000000" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
              04 XX XX XX XX
            </a>
            <a href="https://www.doctolib.fr" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Prendre RDV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
