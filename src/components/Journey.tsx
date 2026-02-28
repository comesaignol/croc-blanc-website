const steps = [
  {
    number: "01",
    title: "Consultation initiale",
    description:
      "Bilan bucco-dentaire complet, radiographies numériques et échange approfondi pour cerner vos besoins et élaborer votre plan de traitement personnalisé.",
    duration: "60 min",
  },
  {
    number: "02",
    title: "Plan de traitement",
    description:
      "Présentation claire de vos options thérapeutiques, devis détaillé, plan de financement et planning des soins — sans surprise, en toute transparence.",
    duration: "30 min",
  },
  {
    number: "03",
    title: "Soins & traitements",
    description:
      "Prise en charge par votre praticien dédié dans un environnement technologique de pointe. Anesthésie adaptée pour un confort optimal.",
    duration: "Variable",
  },
  {
    number: "04",
    title: "Suivi & prévention",
    description:
      "Contrôles réguliers, détartrage professionnel, conseils personnalisés — nous assurons la pérennité de vos soins sur le long terme.",
    duration: "Continu",
  },
];

export default function Journey() {
  return (
    <section className="py-24 bg-white">
      <div className="container-site">
        <div className="text-center mb-16">
          <p className="section-label">Votre parcours</p>
          <h2 className="section-title gold-line-center">
            Du premier contact<br />à un sourire parfait
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-0 right-0 h-px bg-ivory-dark hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative group">
                {/* Step number */}
                <div className="relative z-10 w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-ivory group-hover:bg-navy transition-colors duration-500">
                  <span className="font-serif text-3xl text-navy group-hover:text-white transition-colors font-semibold">
                    {step.number}
                  </span>
                  {/* Gold corner accent */}
                  <div className="absolute top-0 right-0 w-4 h-4 bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-center">
                  <div className="inline-block bg-gold/12 text-gold text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 mb-3">
                    {step.duration}
                  </div>
                  <h3 className="font-serif text-lg text-navy mb-3">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency strip */}
        <div className="mt-16 bg-navy/5 border border-navy/10 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-serif text-navy text-lg mb-1">Urgence dentaire ?</p>
            <p className="text-muted text-sm">
              Douleurs intenses, dent cassée, abcès — nous réservons des créneaux d&apos;urgence chaque jour.
            </p>
          </div>
          <a
            href="tel:+33400000000"
            className="btn-primary shrink-0"
          >
            Appeler maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
