"use client";
import React from "react";
import Image from "next/image";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import HeaderTest from "./components/HeaderTest";

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
        <HeaderTest />
      </header>

      <main className="flex flex-col">
        {/* <Image src="/images/bad-shut-blue.png" fill className="object-contain"/> */}
        <section className=" flex flex-col justify-center h-[100dvh]">
        <div className=" absolute inset-0 -z-10 bg-[url('/images/smash-bad.jpg')] bg-cover bg-center opacity-100"></div>
        <div className=" flex flex-col w-full items-left md:items-start md:pl-50"> 
        <h1 className=" text-left font-[HemiHead] md:text-5xl md:mb-12 mb-6 text-white md:w-full w-4/6 pl-12 md:p-0 justify-start ">Bienvenue sur O'Bad !</h1>
        <div className="flex justify-center md:justify-start">

          <p className="w-5/6 md:w-2/6 text-justify text-white p-5 md:p-0 justify-center">
          L’association sportive Oissel Badminton, nommée également O’BAD, a été créée en octobre 2004. Elle a été affiliée à la fédération française de badminton depuis son ouverture jusqu'à la saison 2013-2014. L’association est donc devenue à la suite un club loisirs. <br/><br/>
O’bad est avant tout un club familial, avec des valeurs telles que la bienveillance, l’écoute et l’entraide. Le club accueille des joueurs avec différents niveaux ce qui permet une diversité des regards sur la pratique du badminton. 
 🏸</p>
 </div>
          </div>
         

         
        </section>
        <section className="  flex flex-col items-center justify-center bg-white pb-30">
          <h2 className="text-2xl mb-12 font-[HemiHead]">Événements et tournois</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center w-4/5">
            <Image
              src="/images/imgp3.png"
              alt="Tournoi"
              width={600}
              height={400}
              className="rounded"
            />
            <p className="text-justify w-full md:w-2/6 ">
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
        <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center  gap-12">
          <div className="absolute inset-0 -z-10 bg-[url('/images/bckgrdob.png')] bg-cover bg-top opacity-20 flex items-center justify-center"></div>

          <div className="relative flex flex-col gap-6 w-11/12 md:w-3/5 text-black ">
            <h2 className=" font-[HemiHead] text-3xl font-bold text-black text-center pb-16">
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

        
      </main>
      <Partners />

      <Footer />
    </>
  );
}
