"use client";
import Header3 from "@/app/components/Header3";
import React from "react";
import Image from "next/image";
import SEO from "@/app/components/SEO";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function evenements() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header3 />
      <main className="flex-1 flex flex-col items-center justify-center w-full pt-16">
        <h1 className="font-[Gabarito]">Événements</h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center w-3/4 md:w-2/4 gap-8 my-12 text-justify">
          <div className="flex w-auto">
            <p>
              <strong>🏆 Le Critérium 🏆</strong>
              <br />
              <br />
              Le critérium regroupe une douzaine de clubs loisirs. Le calendrier
              est fait sur 2 ans. Tous les clubs se rencontrent au moins une
              fois. Les victoires/défaites sont ensuite répertoriées pour faire
              un “classement”. Le nombre de participants peut être restreint
              selon le nombre de joueurs présents dans l’équipe adverse. A
              chaque rencontre un message sera envoyé sur le groupe whatsapp
              pour annoncer le niveau de l’équipe adverse.
            </p>
          </div>
          <div className="flex w-auto">
            <p>
              <strong>🏆 Soirée à thème 🏆</strong>
              <br />
              <br />
              Le critérium regroupe une douzaine de clubs loisirs. Le calendrier
              est fait sur 2 ans. Tous les clubs se rencontrent au moins une
              fois. Les victoires/défaites sont ensuite répertoriées pour faire
              un “classement”. Le nombre de participants peut être restreint
              selon le nombre de joueurs présents dans l’équipe adverse. A
              chaque rencontre un message sera envoyé sur le groupe whatsapp
              pour annoncer le niveau de l’équipe adverse.
            </p>
          </div>
          <div className="flex w-auto">
            <p>
              <strong>🏆 Tournois Internes 🏆</strong>
              <br />
              <br />
              Il y a 2 tournois internes ouverts à tout adhérent, quelque soit son niveau : un en automne et un en juin pour fêter la fin de saison.
Un tournoi open mixte est également organisé au cours de la saison. Il est ouvert à tous les adhérents non licenciés à la fédération française de badminton.

            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
