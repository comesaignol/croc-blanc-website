import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const soinsLinks = [
  { label: "Implantologie", href: "/soins/implantologie" },
  { label: "Orthodontie", href: "/soins/orthodontie" },
  { label: "Esthétique dentaire", href: "/soins/esthetique" },
  { label: "Chirurgie buccale", href: "/soins/chirurgie" },
  { label: "Soins conservateurs", href: "/soins/conservateurs" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* CTA Banner */}
      <div className="bg-gold py-10">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-white mb-1">
              Prenez soin de votre sourire
            </h3>
            <p className="text-white/80 text-sm">
              Consultez nos praticiens dès aujourd&apos;hui — premier RDV disponible cette semaine.
            </p>
          </div>
          <a
            href="https://www.doctolib.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gold px-8 py-3.5 text-sm font-semibold tracking-widest uppercase hover:bg-ivory transition-colors shrink-0"
          >
            Prendre rendez-vous
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-site py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-white/10 p-1.5">
              <Image
                src="/logo.jpeg"
                alt="Le Croc Blanc"
                width={34}
                height={34}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-[9px] tracking-[0.25em] text-white/40 uppercase">Cabinet Dentaire</p>
              <p className="font-serif text-white text-sm font-semibold">Le Croc Blanc</p>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            Des soins dentaires d&apos;excellence dans un environnement moderne
            et chaleureux, pour toute la famille.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="w-8 h-8 bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={14} />
            </a>
          </div>
        </div>

        {/* Soins */}
        <div>
          <h4 className="text-[10px] font-semibold tracking-[0.25em] text-gold uppercase mb-5">
            Nos soins
          </h4>
          <ul className="flex flex-col gap-2.5">
            {soinsLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[10px] font-semibold tracking-[0.25em] text-gold uppercase mb-5">
            Informations
          </h4>
          <ul className="flex flex-col gap-2.5">
            {[
              { label: "L'équipe", href: "/equipe" },
              { label: "Technologies", href: "/technologies" },
              { label: "Conseils & Blog", href: "/conseils" },
              { label: "Contact", href: "/contact" },
              { label: "Urgences dentaires", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[10px] font-semibold tracking-[0.25em] text-gold uppercase mb-5">
            Contact
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
              <span className="text-sm text-white/50">
                XX Rue [À compléter]<br />XX000 [Ville]
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-gold shrink-0" />
              <a href="tel:+33400000000" className="text-sm text-white/50 hover:text-gold transition-colors">
                04 XX XX XX XX
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-gold shrink-0" />
              <a href="mailto:contact@lecrocblanc.fr" className="text-sm text-white/50 hover:text-gold transition-colors">
                contact@lecrocblanc.fr
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={14} className="text-gold shrink-0 mt-0.5" />
              <div className="text-sm text-white/50">
                <p>Lun – Ven : 8h30 – 19h00</p>
                <p>Sam : 9h00 – 13h00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/8">
        <div className="container-site py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Cabinet Dentaire Le Croc Blanc. Tous droits réservés.</p>
          <div className="flex items-center gap-5">
            <Link href="/mentions-legales" className="hover:text-white/60 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white/60 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
