import Footer from "../components/Footer";
import Header3 from "../components/Header3";
import SEO from "../components/SEO";

export default function Inscription() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header3 />

      <SEO
        title="Inscription au club"
        url="https://oissel-badminton-club.vercel.app/inscription"
        description="Rejoignez Oissel Badminton et inscrivez-vous directement en ligne via MyFFBaD."
      />

      <main className="flex-1">
        {/* HERO */}
        <section className="mx-auto w-[90%] max-w-7xl pt-16 md:pt-24">
          <h1
            className="
              w-full
              text-left
              font-[SharpGITB]
              !text-3xl
              leading-[0.95]
              tracking-tight
              md:text-center
              md:!text-6xl
            "
          >
            <span className="text-orange-400">/ </span>
            INSCRIPTION
          </h1>

          <p className="mx-auto mt-6 w-4/5 text-justify text-sm leading-7 text-slate-600 md:text-center md:text-base">
            Vous souhaitez pratiquer le badminton dans une ambiance conviviale,
            dynamique et sportive ? <br/> Rejoignez Oissel Badminton pour une nouvelle
            saison placée sous le signe du jeu, de la progression et du partage.
          </p>
        </section>

        {/* CONTENT */}
        <section className="mx-auto mt-14 w-[90%] max-w-7xl md:mt-20">
          <div
            className="
              grid
              grid-cols-1
              gap-8
              md:grid-cols-[1fr_0.9fr]
              md:items-start
              md:gap-14
            "
          >
            {/* INFOS */}
            <div>

              <h2 className="mt-3 font-[SharpGITB] text-3xl md:text-5xl">
                VOUS SOUHAITEZ REJOINDRE O'BAD ?
              </h2>

              <div className="mt-8 space-y-8">
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-[11px] font-bold tracking-[0.15em] text-orange-400">
                    ÉTAPE 01
                  </p>

                  <h3 className="mt-2 font-[SharpGITB] text-xl">
                    ACCÉDER À MyFFBaD
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                    L&apos;inscription se fait désormais directement en ligne via
                    la plateforme officielle MyFFBaD.
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <p className="text-[11px] font-bold tracking-[0.15em] text-orange-400">
                    ÉTAPE 02
                  </p>

                  <h3 className="mt-2 font-[SharpGITB] text-xl">
COMPLÉTER VOTRE DOSSIER                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                    Suivez les différentes étapes indiquées sur la plateforme et
                    renseignez les informations nécessaires à votre adhésion.
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <p className="text-[11px] font-bold tracking-[0.15em] text-orange-400">
                    ÉTAPE 03
                  </p>

                  <h3 className="mt-2 font-[SharpGITB] text-xl">
                    FINALISER VOTRE INSCRIPTION
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                    Une fois votre demande complétée, vous pourrez finaliser
                    votre adhésion au club selon les indications fournies.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <aside
              className="
                bg-slate-950
                p-7
                text-white
                md:sticky
                md:top-32
                md:p-10
              "
            >
              <p className="text-[11px] font-bold tracking-[0.17em] text-orange-300 md:text-xs">
                INSCRIPTION EN LIGNE
              </p>

              <h2 className="mt-3 font-[SharpGITB] text-3xl leading-none md:text-4xl">
                PRÊTE OU PRÊT À NOUS REJOINDRE ?
              </h2>

              <p className="mt-6 text-sm leading-7 text-slate-300 md:text-base">
                Accédez directement à la page d&apos;adhésion Oissel Badminton
                sur MyFFBaD.
              </p>

              <a
                href="https://www.myffbad.fr/adherer/OBAD76"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  flex
                  min-h-12
                  w-full
                  items-center
                  justify-center
                  bg-orange-400
                  px-6
                  py-4
                  text-center
                  font-[SharpGITB]
                  text-sm
                  !text-white
                  transition-colors
                  duration-200
                  hover:bg-orange-300
                "
              >
                S&apos;INSCRIRE SUR MYFFBAD ↗
              </a>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                (Redirection vers la plateforme officielle MyFFBaD)
              </p>
            </aside>
          </div>
        </section>

        {/* RAPPEL */}
        <section className="mx-auto my-20 w-[90%] max-w-7xl border-t border-slate-200 pt-10 md:my-28 md:pt-14">
          <div className="max-w-6xl">
            <p className="text-[11px] font-bold tracking-[0.17em] text-slate-500 md:text-xs">
              <span className="text-orange-400">BESOIN D'AIDE</span> 
            </p>

            <h2 className="mt-3 font-[SharpGITB] text-3xl md:text-5xl">
              UNE QUESTION ? LE CLUB PEUT VOUS ÉCLAIRER
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
              Si vous avez une question concernant l&apos;adhésion, les créneaux
              ou le fonctionnement du club, vous pouvez contacter le bureau
              directement.
            </p>

            <a
              href="/infos/contact"
              className="
                mt-7
                inline-flex
                items-center
                font-[SharpGITB]
                text-sm
                text-slate-900
                transition-colors
                hover:text-orange-400
              "
            >
              CONTACTER LE CLUB →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}