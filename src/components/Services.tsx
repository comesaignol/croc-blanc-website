import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "implantologie",
    title: "Implantologie",
    description:
      "Retrouvez une dentition complète et fonctionnelle avec nos solutions implantaires de dernière génération. Résultat esthétique et durabilité garantis.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffbb6c6aa93?w=600&q=80",
    href: "/soins/implantologie",
    tag: "Spécialité",
  },
  {
    id: "orthodontie",
    title: "Orthodontie",
    description:
      "Aligneurs transparents ou bagues traditionnelles, nous corrigeons vos malocclusions avec précision pour un sourire aligné et harmonieux.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    href: "/soins/orthodontie",
    tag: "Pour tous",
  },
  {
    id: "esthetique",
    title: "Esthétique dentaire",
    description:
      "Facettes, blanchiment, composite — transformez votre sourire avec nos solutions esthétiques sur mesure, naturelles et durables.",
    image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=600&q=80",
    href: "/soins/esthetique",
    tag: "Sourire parfait",
  },
  {
    id: "chirurgie",
    title: "Chirurgie buccale",
    description:
      "Extractions complexes, greffes osseuses, freinectomie — des actes chirurgicaux réalisés avec douceur dans notre bloc opératoire équipé.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    href: "/soins/chirurgie",
    tag: "Expertise",
  },
  {
    id: "conservateurs",
    title: "Soins conservateurs",
    description:
      "Caries, dévitalisations, couronnes — nous préservons vos dents naturelles avec des traitements efficaces et des matériaux biocompatibles.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
    href: "/soins/conservateurs",
    tag: "Essentiel",
  },
  {
    id: "parodontologie",
    title: "Parodontologie",
    description:
      "Gingivites, maladies parodontales — nous traitons les pathologies des gencives pour protéger vos dents sur le long terme.",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80",
    href: "/soins",
    tag: "Prévention",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label">Nos traitements</p>
            <h2 className="section-title gold-line">
              Une expertise complète<br />pour votre santé dentaire
            </h2>
          </div>
          <Link
            href="/soins"
            className="btn-outline self-start md:self-auto shrink-0"
          >
            Tous nos soins
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative overflow-hidden bg-ivory h-72 flex flex-col justify-end"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/60 to-transparent" />
              {/* Tag */}
              <span className="absolute top-4 left-4 bg-gold text-white text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1">
                {service.tag}
              </span>
              {/* Content */}
              <div className="relative p-6">
                <h3 className="font-serif text-xl text-white mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mb-3">
                  {service.description}
                </p>
                <div className="flex items-center gap-1.5 text-gold text-xs font-medium group-hover:gap-3 transition-all">
                  <span>En savoir plus</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
