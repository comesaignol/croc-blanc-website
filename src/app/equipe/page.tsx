import type { Metadata } from "next";
import { GraduationCap, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Notre Équipe | Cabinet Dentaire Le Croc Blanc",
  description: "Rencontrez nos praticiens et l'équipe du cabinet dentaire Le Croc Blanc — des professionnels passionnés à votre service.",
};

const practitioners = [
  {
    name: "Dr. [Prénom Nom]",
    title: "Chirurgien-Dentiste — Fondateur",
    specialty: "Implantologie & Esthétique dentaire",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    formations: [
      "Doctorat en Chirurgie Dentaire — Université [Ville]",
      "DU d'Implantologie — Université [Ville]",
      "Formation continue en chirurgie guidée par ordinateur",
      "Membre de la SFBD (Société Française de Biomatériaux Dentaires)",
    ],
  },
  {
    name: "Dr. [Prénom Nom]",
    title: "Chirurgien-Dentiste — Associée",
    specialty: "Orthodontie & Parodontologie",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    formations: [
      "Doctorat en Chirurgie Dentaire — Université [Ville]",
      "DU d'Orthodontologie — Université [Ville]",
      "Certifiée Invisalign® Provider",
      "Formation en parodontologie avancée",
    ],
  },
];

const support = [
  {
    name: "[Prénom]",
    role: "Assistante dentaire coordinatrice",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
  },
  {
    name: "[Prénom]",
    role: "Assistante dentaire",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "[Prénom]",
    role: "Secrétaire médicale",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
];

export default function EquipePage() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div className="bg-navy py-20 mb-16">
        <div className="container-site">
          <p className="section-label">Vos praticiens</p>
          <h1 className="font-serif text-5xl text-white leading-tight mb-4">
            Notre équipe
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Des professionnels passionnés, engagés pour votre santé et votre confort.
            Formation continue et approche humaine sont nos maîtres mots.
          </p>
        </div>
      </div>

      {/* Practitioners */}
      <div className="container-site mb-24">
        <div className="flex flex-col gap-16">
          {practitioners.map((p, i) => (
            <div key={p.name} className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div
                  className="h-96 bg-cover bg-center bg-top"
                  style={{ backgroundImage: `url('${p.image}')` }}
                />
              </div>
              <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-2">{p.specialty}</p>
                <h2 className="font-serif text-3xl text-navy mb-1">{p.name}</h2>
                <p className="text-muted text-sm mb-6">{p.title}</p>
                <div className="h-0.5 w-10 bg-gold mb-6" />
                <p className="text-muted leading-relaxed mb-8">{p.bio}</p>
                <div>
                  <p className="flex items-center gap-2 text-navy text-sm font-semibold mb-4">
                    <GraduationCap size={16} className="text-gold" />
                    Formations & qualifications
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {p.formations.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                        <Award size={14} className="text-gold shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support team */}
      <div className="bg-ivory py-16">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-label">Notre équipe support</p>
            <h2 className="section-title gold-line-center">
              Votre accueil, notre priorité
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {support.map((member) => (
              <div key={member.name} className="text-center">
                <div
                  className="w-32 h-32 rounded-full bg-cover bg-center mx-auto mb-4 border-4 border-white shadow-lg"
                  style={{ backgroundImage: `url('${member.image}')` }}
                />
                <h3 className="font-serif text-navy text-lg">{member.name}</h3>
                <p className="text-muted text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
