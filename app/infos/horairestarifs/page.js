"use client";

import Footer from "../../components/Footer";
import Header3 from "../../components/Header3";
import SEO from "../../components/SEO";

import Image from "next/image";
import Link from "next/link";

const tarifs = [
  {
    type: "LOISIR",
    montant: "90€",
    dark: false,
    description: [
      "Accès aux salles en jeu libre",
      "Participation aux entraînements dirigés",
      "Participation aux tournois internes du club",
    ],
  },
  {
    type: "COMPÉTITION",
    montant: "150€",
    dark: true,
    description: [
      "Accès aux salles en jeu libre",
      "Participation aux entraînements dirigés",
      "Participation aux tournois internes du club",
      "Obtention d'une licence fédérale",
      "Participation aux interclubs néo",
      "Tournois privés",
      "Duos de Seine-Maritime",
      "Et plus encore...",
    ],
  },
];

const horaires = [
  {
    jour: "Lundi",
    horaire: "18h00 — 21h00",
    lieu: "Complexe sportif Germinal",
  },
  {
    jour: "Jeudi",
    horaire: "20h45 — 22h45",
    lieu: "Complexe sportif Germinal",
  },
  {
    jour: "Dimanche",
    horaire: "16h30 — 18h30",
    lieu: "Complexe sportif Germinal",
  },
];

const rules = [
  {
    image: "/images/shoesbad.png",
    alt: "Chaussures de salle",
    title: "CHAUSSURES DE SALLE",
    description: (
      <>
        Jouer avec des chaussures de salle{" "}
        <span className="font-semibold text-indigo-400">
          non utilisées à l&apos;extérieur.
        </span>
      </>
    ),
  },
  {
    image: "/images/upcourt.png",
    alt: "Montage et démontage des terrains de badminton",
    title: "INSTALLER LES TERRAINS",
    description: (
      <>
        Aider à{" "}
        <span className="font-semibold text-indigo-400">
          monter et démonter les terrains.
        </span>
      </>
    ),
  },
  {
    image: "/images/rotation2.png",
    alt: "Rotation des joueurs sur les terrains",
    title: "FAIRE TOURNER",
    description: (
      <>
        <span className="font-semibold text-indigo-400">
          Libérer le terrain
        </span>{" "}
        à chaque fin de set afin de permettre à tout le monde de jouer.
      </>
    ),
  },
];

export default function HorairesTarifs() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header3 />

      <SEO
        title="Horaires, tarifs et lieux de pratique"
        url="https://oissel-badminton-club.vercel.app/infos/contact"
        description="Découvrez les horaires, tarifs et lieux de pratique du club de badminton de Oissel."
      />

      <main className="flex-1">
        {/* =========================
            INTRO
        ========================== */}
        <section className=" mx-auto w-[90%] pt-16 md:pt-24">

          <h1 className="font-[SharpGITB] leading-[0.95] tracking-tight !text-3xl md:!text-6xl self-start md:text-center">
          <span className="text-indigo-400">/ </span>HORAIRES,TARIFS & LIEUX
          </h1>

          <p className="mt-12 text-justify leading-7 text-slate-600 md:text-center">
            Les entraînements sont ouverts de{" "}
            <span className="font-semibold text-indigo-400">
              septembre à juillet
            </span>
            , sauf indisponibilité de la salle. Les règles principales des
            entraînements sont les suivantes :
          </p>
        </section>

        {/* =========================
            REGLES
        ========================== */}
        <section className="mx-auto mt-16 w-[90%] max-w-7xl md:mt-24">
          <p className="text-[11px] font-bold tracking-[0.17em] text-slate-500 md:text-xs">
            <span className="text-indigo-400">AVANT DE JOUER</span> 
          </p>

          <h2 className="mt-3 font-[SharpGITB] text-3xl md:text-5xl">
            LES RÈGLES DU CLUB
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-0 md:mt-12 md:grid-cols-3 md:gap-10 justify-center">
            {rules.map((rule) => (
              <article
              key={rule.title}
              className="
                flex
                flex-col
                items-center
                justify-center
                border-t
                border-slate-200
                py-6
                text-center
                md:py-8
              "
            >
                {/* IMAGE */}
<div
className="
  relative
  h-24
  w-24
  shrink-0
  md:mb-8
  md:h-36
  md:w-36
"
>
                  <Image
                    src={rule.image}
                    alt={rule.alt}
                    fill
                    className="object-contain md:object-left"
                  />
                </div>

                <div>
                  <h3 className="font-[SharpGITB] text-lg leading-tight">
                    {rule.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
                    {rule.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================
            COACHING
        ========================== */}
        <section className="relative mt-16 overflow-hidden text-white md:mt-24">
          <Image
            src="/images/badmminton-coaching-bw.png"
            alt="Séance de coaching de badminton"
            fill
            className="object-cover object-center"
          />

          {/* Voile général */}
          <div className="absolute inset-0 bg-slate-950/35" />

          {/* Assombri côté droit car texte à droite */}
          <div className="absolute inset-0 bg-gradient-to-l from-slate-950/90 via-slate-950/55 to-transparent" />

          <div
            className="
              relative
              z-10
              mx-auto
              flex
              min-h-[440px]
              w-[90%]
              max-w-7xl
              items-center
              justify-end
              py-16
              md:min-h-[520px]
              md:py-24
            "
          >
            <div className="w-full max-w-lg md:max-w-xl">
              <p className="text-[11px] font-bold tracking-[0.17em] text-orange-300 md:text-xs">
                UNE ENVIE DE PROGRESSER ?
              </p>

              <h2 className="mt-3 font-[SharpGIT] !text-4xl leading-none md:!text-6xl">
                COACHING
              </h2>

              <div className="my-6 h-[3px] w-14 bg-orange-400" />

              <p className="text-sm leading-7 text-slate-100 md:text-base">
                Depuis quelques temps le{" "}
                <span className="font-[SharpGITB] font-bold text-white">
                  Coach Veasna
                </span>{" "}
                intervient auprès de notre club afin de permettre une évolution
                de la pratique de chacun.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-100 md:text-base">
                Tous les joueurs du club peuvent bénéficier
                d&apos;entraînements individuels et/ou collectifs.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            HORAIRES
        ========================== */}
        <section className="mx-auto mt-20 w-[90%] max-w-7xl md:mt-28">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-bold tracking-[0.17em] text-slate-500 md:text-xs">
                <span className="text-indigo-400">QUAND VENIR</span> 
              </p>

              <h2 className="mt-3 font-[SharpGITB] text-3xl md:text-5xl">
                HORAIRES
              </h2>
            </div>

            
          </div>

          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {horaires.map((item) => (
              <div
                key={item.jour}
                className="
                  grid
                  grid-cols-1
                  gap-1
                  py-5
                  md:grid-cols-[0.7fr_1fr_1.5fr]
                  md:items-center
                  md:gap-8
                "
              >
                <p className="font-[SharpGITB] text-xl md:text-lg                   text-indigo-600
">
                  {item.jour.toUpperCase()}
                </p>

                <p className="font-medium">
                  {item.horaire}
                </p>

                <p className="text-sm text-slate-500 md:text-base">
                  {item.lieu}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            TARIFS
        ========================== */}
        <section className="mx-auto mt-20 w-[90%] max-w-7xl md:mt-28">
          <p className="text-[11px] font-bold tracking-[0.17em] text-slate-500 md:text-xs">
            <span className="text-indigo-400">CHOISIR SA FORMULE</span> 
          </p>

          <h2 className="mt-3 font-[SharpGITB] text-3xl md:text-5xl">
            TARIFS
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
            {tarifs.map((tarif) => (
              <article
                key={tarif.type}
                className={`
                  relative
                  p-7
                  md:p-10
                  ${
                    tarif.dark
                      ? "bg-slate-900 text-white"
                      : "border border-slate-200 bg-white text-slate-900"
                  }
                `}
              >
                <p
                  className={`
                    text-[11px]
                    font-bold
                    tracking-[0.16em]
                    ${
                      tarif.dark
                        ? "text-indigo-400"
                        : "text-indigo-500"
                    }
                  `}
                >
                  FORMULE
                </p>

                <h3 className="mt-2 font-[SharpGITB] text-3xl md:text-4xl text-indigo-400">
                  {tarif.type}
                </h3>

                <p className="mt-8 text-5xl font-black tracking-tight md:text-6xl">
                  {tarif.montant}
                </p>

                <p
                  className={`
                    mt-1
                    text-sm
                    ${
                      tarif.dark
                        ? "text-indigo-400"
                        : "text-indigo-500"
                    }
                  `}
                >
                  par saison
                </p>

                <ul className="mt-8 flex flex-col gap-3 text-sm leading-6 md:text-base">
                  {tarif.description.map((description) => (
                    <li
                      key={description}
                      className="flex gap-3"
                    >
                      <span className="shrink-0 text-indigo-400">
                        ✓
                      </span>

                      <span>{description}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* =========================
            LIEU
        ========================== */}
        <section
          className="
            mx-auto
            my-20
            w-[90%]
            max-w-7xl
            md:my-28
          "
        >
          <p className="text-[11px] font-bold tracking-[0.17em] text-slate-500 md:text-xs">
            <span className="text-[#33CCFF]"> OÙ NOUS TROUVER ?</span> 
          </p>

          <h2 className="mt-3 font-[SharpGITB] text-3xl md:text-5xl">
            COMPLEXE SPORTIF GERMINAL
          </h2>

          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-8

              md:grid-cols-[1.15fr_0.85fr]
              md:items-center
              md:gap-14
            "
          >
            {/* MAP */}
            <div className="h-[300px] overflow-hidden md:h-[420px]">
              <iframe
                src="https://maps.google.com/maps?width=100%25&height=600&hl=fr&q=Complexe%20sportif%20germinal+(Club%20Badminton%20Oissel)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                title="Complexe sportif Germinal"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>

            {/* INFOS */}
            <div>
              <p className="leading-7 text-slate-600">
                Tous nos créneaux ont lieu au Complexe sportif Germinal à
                Oissel.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">

              <Link
                  href="https://ul.waze.com/ul?venue_id=721390.7148359.36136893&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    min-h-12
                    items-center
                    justify-center
                    border
                    border-slate-300
                    px-5
                    text-sm
                    font-bold
                    bg-[#33CCFF]                    transition-colors
                    hover:bg-slate-50
                  "
                >
                  <Image
                    src="/images/waze-icon.svg"
                    width={19}
                    height={19}
                    alt=""
                    className="mr-2"
                  />

                  WAZE ↗
                </Link>

                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Badminton+Club+Oissel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    min-h-12
                    items-center
                    justify-center
                    bg-slate-900
                    px-5
                    text-sm
                    font-bold
                    text-white
                    transition-colors
                    hover:bg-slate-700
                  "
                >
                  <Image
                    src="/images/google-map-icon.svg"
                    width={15}
                    height={15}
                    alt=""
                    className="mr-2"
                  />

                  GOOGLE MAPS ↗
                </Link>

               
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}