import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  "Radiographie 3D cone beam (CBCT)",
  "Scanner intra-oral numérique",
  "Fauteuil connecté & monitoring patient",
  "Laser dentaire Er:YAG",
  "Chirurgie guidée par ordinateur",
  "Blanchiment LED professionnel",
];

export default function Technology() {
  return (
    <section className="py-24 bg-navy overflow-hidden">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image mosaic */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div
                  className="h-52 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80')",
                  }}
                />
                <div
                  className="h-36 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1588776814546-1ffbb6c6aa93?w=400&q=80')",
                  }}
                />
              </div>
              <div className="space-y-4 mt-8">
                <div
                  className="h-36 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80')",
                  }}
                />
                <div
                  className="h-52 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80')",
                  }}
                />
              </div>
            </div>
            {/* Gold badge */}
            <div className="absolute -bottom-6 -right-6 bg-gold text-white p-6 text-center">
              <p className="font-serif text-3xl font-semibold">3D</p>
              <p className="text-xs tracking-widest uppercase mt-1 text-white/80">Imagerie</p>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <p className="section-label">Nos équipements</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-white leading-tight mb-4">
              La technologie
              <br />
              <span className="text-gold italic">au service</span> de votre soin
            </h2>
            <div className="h-0.5 w-12 bg-gold mb-8" />
            <p className="text-white/60 leading-relaxed mb-8">
              Nous investissons continuellement dans les meilleures technologies
              dentaires pour vous offrir des diagnostics plus précis, des
              traitements moins invasifs et des résultats supérieurs.
            </p>

            <ul className="grid grid-cols-1 gap-3 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span className="text-white/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/technologies"
              className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:gap-4 transition-all group"
            >
              Découvrir nos technologies
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
