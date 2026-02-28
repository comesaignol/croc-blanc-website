"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  {
    label: "Soins",
    href: "/soins",
    submenu: [
      { label: "Implantologie", href: "/soins/implantologie" },
      { label: "Orthodontie", href: "/soins/orthodontie" },
      { label: "Esthétique dentaire", href: "/soins/esthetique" },
      { label: "Chirurgie buccale", href: "/soins/chirurgie" },
      { label: "Soins conservateurs", href: "/soins/conservateurs" },
      { label: "Parodontologie", href: "/soins/parodontologie" },
    ],
  },
  { label: "Technologies", href: "/technologies" },
  { label: "L'équipe", href: "/equipe" },
  { label: "Conseils", href: "/conseils" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-sm border-b border-gray-100" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <div className="bg-navy text-white text-xs py-2 hidden md:block">
        <div className="container-site flex justify-between items-center">
          <span className="text-white/60">Cabinet dentaire — Lun–Jeu : 8h30–19h · Ven : 8h30–18h · Sam : 9h–13h</span>
          <div className="flex items-center gap-6">
            <a
              href="tel:+33400000000"
              className="flex items-center gap-1.5 text-gold hover:text-gold-light transition-colors"
            >
              <Phone size={12} />
              <span>04 XX XX XX XX</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-site flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.jpeg"
            alt="Le Croc Blanc — Cabinet Dentaire"
            width={40}
            height={40}
            className="object-contain"
          />
          <div className="hidden sm:block">
            <p className="text-[9px] tracking-[0.28em] text-muted uppercase font-sans leading-tight">
              Cabinet Dentaire
            </p>
            <p className="font-serif text-navy text-sm font-semibold leading-tight">
              Le Croc Blanc
            </p>
          </div>
        </Link>

        {/* Desktop nav — submenu uses CSS group-hover, no JS state */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <Link
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-sm text-navy group-hover:text-gold transition-colors font-medium"
              >
                {link.label}
                {link.submenu && (
                  <ChevronDown
                    size={13}
                    className="opacity-50 mt-px transition-transform duration-200 group-hover:rotate-180"
                  />
                )}
              </Link>

              {link.submenu && (
                <div className="absolute top-full left-0 min-w-[220px] bg-white shadow-xl border-t-2 border-gold py-2 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 pointer-events-none group-hover:pointer-events-auto">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-5 py-2.5 text-sm text-navy hover:bg-ivory hover:text-gold transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <a
          href="https://www.doctolib.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-gold py-2.5 px-5 text-xs"
        >
          Prendre RDV
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-navy"
          aria-label="Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="container-site py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileSubmenuOpen(
                          mobileSubmenuOpen === link.label ? null : link.label
                        )
                      }
                      className="w-full flex items-center justify-between py-3 px-2 text-navy font-medium border-b border-gray-50 hover:text-gold transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          mobileSubmenuOpen === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileSubmenuOpen === link.label && (
                      <div className="pl-4 py-1 bg-ivory">
                        <Link
                          href={link.href}
                          onClick={() => { setIsOpen(false); setMobileSubmenuOpen(null); }}
                          className="block py-2 px-2 text-sm text-navy font-medium hover:text-gold transition-colors"
                        >
                          Tous les soins
                        </Link>
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => { setIsOpen(false); setMobileSubmenuOpen(null); }}
                            className="block py-2 px-2 text-sm text-muted hover:text-gold transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-2 text-navy font-medium border-b border-gray-50 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="https://www.doctolib.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-4 justify-center text-center"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
