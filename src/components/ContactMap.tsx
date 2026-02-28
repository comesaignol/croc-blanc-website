import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="py-24 bg-white">
      <div className="container-site">
        <div className="text-center mb-16">
          <p className="section-label">Nous trouver</p>
          <h2 className="section-title gold-line-center">
            Venez nous rendre visite
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-0 shadow-2xl overflow-hidden">
          {/* Info panel */}
          <div className="lg:col-span-2 bg-navy text-white p-8 md:p-10 flex flex-col gap-8">
            <div>
              <h3 className="font-serif text-xl text-white mb-6">Informations pratiques</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-gold/20 flex items-center justify-center shrink-0">
                    <MapPin size={15} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs tracking-wide uppercase mb-1">Adresse</p>
                    <p className="text-white/90 text-sm">XX Rue [À compléter]<br />XX000 [Ville]</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-gold/20 flex items-center justify-center shrink-0">
                    <Phone size={15} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs tracking-wide uppercase mb-1">Téléphone</p>
                    <a href="tel:+33400000000" className="text-white/90 text-sm hover:text-gold transition-colors">
                      04 XX XX XX XX
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-gold/20 flex items-center justify-center shrink-0">
                    <Mail size={15} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs tracking-wide uppercase mb-1">Email</p>
                    <a href="mailto:contact@lecrocblanc.fr" className="text-white/90 text-sm hover:text-gold transition-colors">
                      contact@lecrocblanc.fr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-gold/20 flex items-center justify-center shrink-0">
                  <Clock size={15} className="text-gold" />
                </div>
                <div>
                  <p className="text-white/50 text-xs tracking-wide uppercase mb-3">Horaires d&apos;ouverture</p>
                  <div className="flex flex-col gap-1.5 text-sm">
                    {[
                      { day: "Lundi – Jeudi", hours: "8h30 – 19h00" },
                      { day: "Vendredi", hours: "8h30 – 18h00" },
                      { day: "Samedi", hours: "9h00 – 13h00" },
                      { day: "Dimanche", hours: "Fermé" },
                    ].map(({ day, hours }) => (
                      <div key={day} className="flex justify-between gap-8">
                        <span className="text-white/60">{day}</span>
                        <span className="text-white/90 font-medium">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-white/50 text-xs tracking-wide uppercase mb-3">Accès</p>
              <div className="flex flex-col gap-2 text-sm text-white/60">
                <p>🚇 Tramway — Arrêt [À compléter]</p>
                <p>🅿️ Parking à proximité</p>
                <p>♿ Accès PMR</p>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:gap-4 transition-all group mt-auto"
            >
              Ouvrir dans Google Maps
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Map placeholder */}
          <div className="lg:col-span-3 bg-ivory-dark min-h-80 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-navy/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy px-6 py-3 text-sm font-semibold tracking-wider uppercase flex items-center gap-2 hover:bg-gold hover:text-white transition-colors shadow-lg"
              >
                <MapPin size={15} />
                Voir sur la carte
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
