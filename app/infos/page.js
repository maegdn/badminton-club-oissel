"use client";

import Footer from "../components/Footer";
import Header3 from "../components/Header3";
import Link from "next/link";

const infos = [
  {
    title: "ÉVÉNEMENTS",
    description:
      "Une soirée spéciale ? Un tournoi interne ? La routine simple des entraînements n'existe pas !",
    href: "/infos/evenements",
    cta: "Les événements à ne pas rater",
    accent: "text-orange-400",
  },
  {
    title: "LE BUREAU",
    description:
      "Pour le bon fonctionnement du club, le bureau regroupe des membres actifs et investis.",
    href: "/infos/bureau",
    cta: "Découvrir les membres du bureau",
    accent: "text-green-400",
  },
  {
    title: "HORAIRES ET LIEU",
    description:
      "Vous voulez avoir toutes les informations sur nos horaires et gymnases ?",
    href: "/infos/horairestarifs",
    cta: "Quand et où ?",
    accent: "text-indigo-400",
  },
];

export default function InfosPratiques() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header3 />

      <main className="flex-1 py-16 md:py-24">
        {/* HEADER */}
        <section className="mx-auto w-[90%] max-w-7xl">
          <h1
            className="
              w-full
              text-left
              font-[SharpGITB]
              !text-2xl
              leading-[0.95]
              tracking-tight
              md:text-center
              md:!text-6xl
            "
          >
            <span className="text-slate-400">/ </span>
            INFORMATIONS PRATIQUES
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-justify text-sm leading-7 text-slate-600 md:text-center md:text-base">
            Retrouvez toutes les informations utiles pour profiter pleinement
            de la vie du club.
          </p>
        </section>

        {/* CARDS */}
        <section className="mx-auto mt-14 w-[90%] max-w-7xl md:mt-20">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-7">
            {infos.map((item) => (
              <article
                key={item.title}
                className="
                  flex
                  min-h-[250px]
                  flex-col
                  border
                  border-slate-200
                  bg-white
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-slate-300
                  md:p-8
                "
              >
                <h2 className="font-[SharpGITB] text-xl text-slate-900 md:text-2xl">
                  <span className={item.accent}>/ </span>
                  {item.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-auto pt-8">
                  <Link
                    href={item.href}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      font-[SharpGITB]
                      text-sm
                      text-slate-900
                      transition-colors
                      hover:text-slate-500
                    "
                  >
                    {item.cta}
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}