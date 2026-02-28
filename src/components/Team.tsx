import Link from "next/link";
import { ArrowRight } from "lucide-react";

const team = [
  {
    name: "Dr. [Prénom Nom]",
    role: "Chirurgien-Dentiste — Fondateur",
    specialty: "Implantologie & Esthétique",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    description:
      "Diplômé de la faculté de chirurgie dentaire, le Dr [Nom] exerce depuis plus de 15 ans avec une approche centrée sur l'excellence et le confort patient.",
  },
  {
    name: "Dr. [Prénom Nom]",
    role: "Chirurgien-Dentiste — Associée",
    specialty: "Orthodontie & Parodontologie",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    description:
      "Spécialisée en orthodontie invisalign et traitements parodontaux, elle accompagne patients enfants et adultes avec bienveillance.",
  },
  {
    name: "[Prénom]",
    role: "Assistante dentaire coordinatrice",
    specialty: "Accueil & coordination",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    description:
      "Votre premier contact au cabinet. Elle coordonne vos rendez-vous, vous renseigne sur les prises en charge et veille à votre confort.",
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-ivory">
      <div className="container-site">
        <div className="text-center mb-16">
          <p className="section-label">Vos praticiens</p>
          <h2 className="section-title gold-line-center">
            Une équipe passionnée<br />à votre service
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {team.map((member, i) => (
            <div key={i} className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-500">
              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-top transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${member.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-gold text-white text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1">
                    {member.specialty}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 border-l-2 border-transparent group-hover:border-gold transition-colors">
                <h3 className="font-serif text-lg text-navy mb-0.5">{member.name}</h3>
                <p className="text-gold text-xs font-medium tracking-wide mb-3">{member.role}</p>
                <p className="text-muted text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/equipe" className="btn-outline">
            Rencontrer toute l&apos;équipe
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
