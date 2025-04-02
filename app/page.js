"use client";
import React from "react";

import Image from "next/image";

import Footer from "./components/Footer";
import Header from "./components/Header";
import SEO from "./components/SEO";

export default function Home() {
  const redirectPage = (pageName) => {
    window.location.href = `/${pageName}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Badminton Club de Oissel"
        url="https://badminton-club-oissel.vercel.app/"
        description="Le Badminton Club de Oissel vous accueille pour des moments de sport et de bonne humeur. Découvrez le badminton en mixte dans une ambiance conviviale aux gymnases de Oissel."
      />
      <header className="sticky top-0 z-50 bg-white shadow">
        <Header />
      </header>
      <main className="flex flex-col flex-grow">
        <section
          className="h-screen snap-start flex flex-col items-center justify-center bg-white pt-36 pb-30"
          style={{ scrollMarginTop: "6rem" }}
        >
          <h1 className="font-[Gabarito] text-3xl mb-12">
            Bienvenue sur le site de O'Bad !
          </h1>
          <p className="w-3/5 justify-center mb-10">
            Que vous soyez débutant ou joueur confirmé, notre club vous
            accueille dans une ambiance conviviale et dynamique. Depuis
            plusieurs années, nous rassemblons des passionnés de tous âges
            autour du plaisir de jouer, de progresser, et de partager de bons
            moments sur le terrain comme en dehors. 🏸
          </p>

          <div className="flex flex-col md:flex-row gap-12 items-center w-3/5">
            <div className="flex flex-col gap-6 justify-evenly">
              <h1 className="text-3xl font-bold mb-6">
                Nos horaires et nos activités
              </h1>
              <p className="text-justify">
                Nous proposons des créneaux pour tous les niveaux, que ce soit
                pour le loisir ou la compétition. Entraînements encadrés, matchs
                libres, tournois internes ou stages pendant les vacances :
                chacun peut y trouver son rythme et évoluer à son propre niveau.
              </p>

              <button
                className="bg-red-700 hover:bg-red-500 transition duration-300 ease-in-out text-white font-bold px-6 mt-6 py-3 rounded justify-center"
                onClick={() => redirectPage("infos/horairestarifs")}
              >
                Consulter les horaires et salles
              </button>
            </div>

            <Image
              src="/images/imgp1.png"
              alt="logo"
              width={1500}
              height={1200}
              className=""
            />
          </div>
        </section>
        <section className="h-screen snap-start flex items-center justify-center bg-gray-100">
          <h2 className="text-2xl">Partie 2</h2>
        </section>
        <section className="h-screen snap-start flex flex-col items-center justify-center bg-white">
          <h2 className="text-2xl mb-12">Partie 3</h2>
          <div className="flex gap-12 items-center w-3/5">
            <Image
              src="/images/imgp3.png"
              alt="logo"
              width={600}
              height={500}
              className=""
            />
            <p>
              Envie de bouger, de vous amuser et de faire de belles rencontres ?
              Venez découvrir le badminton en mixte dans une ambiance conviviale
              aux gymnases de Oissel ! Que vous soyez débutant ou joueur
              confirmé, notre club vous accueille pour partager des moments de
              sport et de bonne humeur. C’est l’occasion idéale pour essayer,
              progresser et pourquoi pas participer à nos tournois tout au long
              de l’année. Rejoignez-nous sur le terrain ! 🏸
            </p>
          </div>
        </section>
      </main>
      <footer className=" snap-start flex items-center justify-center  text-white">
        <Footer />
      </footer>
    </div>
  );
}
