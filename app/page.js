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
        url="https://oissel-badminton-club.vercel.app/"
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
            <h1 className=" text-left font-[HemiHead] md:text-5xl md:mb-12 mb-6 text-white md:w-full w-4/6 pl-12 md:p-0 justify-start ">
              Bienvenue sur O'Bad !
            </h1>
            <div className="flex justify-center md:justify-start">
              <p className="w-5/6 md:w-2/6 text-justify text-white p-5 md:p-0 justify-center">
                L’association sportive Oissel Badminton, nommée également O’BAD,
                a été créée en octobre 2004. Elle a été affiliée à la fédération
                française de badminton (FFBaD) à son ouverture et l'est toujours
                en 2025.
              </p>
            </div>
          </div>
        </section>
        <section className="  flex flex-col items-center justify-center bg-white">
          <h2 className="text-2xl mb-22 md:mb-6 font-[HemiHead] text-slate-900">
            Événements et tournois
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-4/5 h-92 mb-20">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/obadwp.png"
                alt="Tournoi"
                width={700}
                height={500}
                className="rounded object-cover w-full h-auto mt-5"
              />
            </div>

            <p className="text-justify w-full md:w-1/2 text-slate-900 items-center justify-center ">
              Que vous soyez débutant ou joueur confirmé, notre club vous
              accueille pour partager des moments de sport et de bonne humeur.
              C’est l’occasion idéale pour essayer, progresser et pourquoi pas
              participer à nos tournois tout au long de l’année. Rejoignez-nous
              sur le terrain ! 🏸
              <br />
              <br />
              O’bad est avant tout un club familial, avec des valeurs telles que
              la bienveillance, l’écoute et l’entraide. Le club accueille des
              joueurs avec différents niveaux ce qui permet une diversité des
              regards sur la pratique du badminton.
            </p>
          </div>
          <div className="relative h-[400px] w-full mt-16">
            <div className="absolute w-full h-[400px] bg-[url('/images/badmminton-coaching-bw.png')] bg-cover bg-left md:bg-center opacity-90"></div>

            <div className="absolute md:flex md:gap-6 items-center w-12/12 md:w-full md:justify-center md:items-center h-[400px] md:h-[400px]">
              <p
                className="flex font-[HemiHead] text-3xl md:text-8xl text-white py-5 pt-10 pb-10 md:mb-12 md:w-[60%] w-full items-center justify-center text-shawdow-black md:pb-30
"
              >
                COACHING
              </p>
              <p className=" items-center justify-center text-justify text-white  text-sm md:text-base z-10 md:p-20  px-5 md:w-[40%]">
                Depuis quelques temps le{" "}
                <span className="font-bold">Coach Veasna </span>intervient
                auprès de notre club afin de permettre une évolution de la
                pratique de chacun. Tous les joueurs du club peuvent bénéficier
                d'entraînements individuels et/ou collectifs. <br />
                <br />
                L'inscription se fait soit par le sondage envoyé sur le groupe
                Whatsapp soit en envoyant un message à Elise B. via Whatsapp.
                Ces cours ne sont pas obligatoires, ce qui permet aux joueurs
                qui ne souhaitent pas y participer de continuer à pratiquer le
                badminton en jeu libre.
              </p>
            </div>
          </div>
        </section>
        <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center  gap-12">
          <div className="absolute inset-0 -z-10 bg-[url('/images/bckgrdob.png')] bg-cover bg-top opacity-20 flex items-center justify-center"></div>

          <div className="relative flex flex-col gap-6 w-10/12 md:w-3/5 text-white items-center">
            <h2 className=" font-[HemiHead] text-3xl font-bold text-slate-900 text-center pb-16 pt-5">
              Un club avec de l'entrain
            </h2>
            <p className="flex text-justify items-center md:w-4/5 text-black pb-6">
              En plus des séances classiques, nous organisons régulièrement des
              événements internes : tournois amicaux, stages pendant les
              vacances scolaires, soirées thématiques et rencontres interclubs.
            </p>
            <p className="flex text-justify items-center md:w-4/5 text-black pb-12">
              Notre objectif est de favoriser l’épanouissement de chacun, que
              vous veniez pour le loisir ou pour repousser vos limites en
              compétition.
            </p>
            <button
              className="relative overflow-hidden text-white bg-gray-900 before:content-[''] transition-colors duration-200 hover:text-white before:absolute before:inset-0 before:bg-slate-500 before:transition-transform before:duration-300 before:origin-left before:scale-x-0 hover:before:scale-x-100 px-6 py-3 rounded w-11/12 md:w-2/5 mx-auto"
              onClick={() => redirectPage("news")}
            >
              <span className="relative z-10 font-bold font-[HemiHead] ">
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
