"use client";
import React from "react";
import Image from "next/image";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Partners from "./components/Partners";

import SEO from "./components/SEO";

export default function Home() {
  const redirectPage = (pageName) => {
    window.location.href = `/${pageName}`;
  };

  return (
    <>
      <SEO
        title="Badminton Club de Oissel"
        url="https://badminton-club-oissel.vercel.app/"
        description="Le Badminton Club de Oissel vous accueille pour des moments de sport et de bonne humeur. Découvrez le badminton en mixte dans une ambiance conviviale aux gymnases de Oissel."
      />
      <header className="sticky top-0 z-50 ">
        <Header2 />
      </header>

      <main className="flex flex-col">
        <section className=" flex flex-col items-center justify-center bg-white pt-16 pb-30">
          <h1 className="font-[Gabarito] text-3xl mb-12">
            Bienvenue sur le site de O'Bad !
          </h1>
          <p className="w-3/5 mb-10 text-justify">
            Que vous soyez débutant ou joueur confirmé, notre club vous
            accueille dans une ambiance conviviale et dynamique. Depuis
            plusieurs années, nous rassemblons des passionnés de tous âges
            autour du plaisir de jouer, de progresser, et de partager de bons
            moments sur le terrain comme en dehors. 🏸
          </p>

          <div className="flex flex-col md:flex-row gap-12 items-center w-3/5">
            <div className="h-full flex flex-col gap-6 justify-between">
              <h2 className="text-3xl font-bold mb-6">
                Nos horaires et nos activités
              </h2>
              <p className="text-justify ">
                Nous proposons des créneaux pour tous les niveaux, que ce soit
                pour le loisir ou la compétition. Entraînements encadrés, matchs
                libres, tournois internes ou stages pendant les vacances :
                chacun peut y trouver son rythme et évoluer à son propre niveau.
              </p>

              {/* <button
                className="bg-red-700 hover:bg-red-500 transition duration-300 ease-in-out text-white font-bold px-6 mt-6 py-3 rounded"
                onClick={() => redirectPage("infos/horairestarifs")}
              >
                Consulter les horaires et salles
              </button> */}
              <button
                className="relative overflow-hidden text-white bg-gray-900 before:content-[''] transition-colors duration-100 hover:text-white before:absolute before:inset-0 before:bg-slate-500 before:transition-transform before:duration-300 before:origin-left before:scale-x-0 hover:before:scale-x-100 px-6 py-3 rounded w-full mx-auto"
                onClick={() => redirectPage("news")}
              >
                <span className="relative z-10 font-bold  ">
                  Consulter les horaires et salles
                </span>
              </button>
            </div>

            <Image
              src="/images/imgp1.png"
              alt="Image club"
              width={500}
              height={400}
              className="rounded"
            />
          </div>
        </section>

        <section className=" min-h-screen flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="absolute w-full min-h-screen bg-[url('/images/bckgrdob.png')] bg-cover bg-center opacity-20 flex items-center justify-center"></div>

          <div className="relative flex flex-col gap-6 w-3/5 text-black ">
            <h2 className="text-3xl font-bold text-black text-center pb-16">
              Un club avec de l'entrain
            </h2>
            <p className="text-center text-black pb-16">
              Que vous soyez débutant, joueur confirmé ou compétiteur chevronné,
              notre club vous accueille dans une ambiance conviviale et
              motivante. Nous proposons des créneaux adaptés à tous les niveaux,
              allant du jeu libre aux entraînements encadrés par des coachs
              passionnés. En semaine comme le week-end, chacun peut progresser à
              son rythme tout en prenant du plaisir sur les terrains.
              <br />
              <br />
              En plus des séances classiques, nous organisons régulièrement des
              événements internes : tournois amicaux, stages pendant les
              vacances scolaires, soirées thématiques et rencontres interclubs.
              Notre objectif est de favoriser l’épanouissement de chacun, que
              vous veniez pour le loisir ou pour repousser vos limites en
              compétition.
              <br />
              <br />
              Rejoindre notre club, c’est intégrer une véritable communauté
              soudée par la passion du badminton, où l’entraide, la bonne humeur
              et la progression sont au cœur de notre projet.
            </p>
            <button
              className="relative overflow-hidden text-white bg-gray-900 before:content-[''] transition-colors duration-100 hover:text-white before:absolute before:inset-0 before:bg-slate-500 before:transition-transform before:duration-300 before:origin-left before:scale-x-0 hover:before:scale-x-100 px-6 py-3 rounded w-2/5 mx-auto"
              onClick={() => redirectPage("news")}
            >
              <span className="relative z-10 font-bold  ">
                Voir les actualités du club
              </span>
            </button>
          </div>
        </section>

        <section className=" flex flex-col items-center justify-center bg-white  py-20">
          <h2 className="text-2xl mb-12">Événements et tournois</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center w-3/5">
            <Image
              src="/images/imgp3.png"
              alt="Tournoi"
              width={600}
              height={400}
              className="rounded"
            />
            <p className="text-justify">
              Envie de bouger, de vous amuser et de faire de belles rencontres ?
              Venez découvrir le badminton en mixte ou en simple dans une
              ambiance conviviale aux gymnases de Oissel ! Que vous soyez
              débutant ou joueur confirmé, notre club vous accueille pour
              partager des moments de sport et de bonne humeur. C’est l’occasion
              idéale pour essayer, progresser et pourquoi pas participer à nos
              tournois tout au long de l’année. Rejoignez-nous sur le terrain !
              🏸
            </p>
          </div>
        </section>
      </main>
      <Partners />

      <Footer />
    </>
  );
}
