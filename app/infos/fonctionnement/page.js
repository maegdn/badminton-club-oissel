"use client";
import Header3 from "@/app/components/Header3";
import React from "react";
import Image from "next/image";
import SEO from "@/app/components/SEO";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function fonctionnement() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header3 />
      <main className="flex-1 flex flex-col items-center justify-center w-full pt-16">
        <h1 className="font-[Gabarito]">FONCTIONNEMENT</h1>
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
          <div className="flex justify-center w-full">
            <Link
              href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER_MG}`}
            >
              <img
                src="/images/WhatsAppButtonWhiteSmall.png"
                alt="Chat on WhatsApp"
                height={20}
                width={200}
              />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
