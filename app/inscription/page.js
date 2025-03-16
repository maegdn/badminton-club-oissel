"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Inscription() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex flex-col w-full min-h-full flex-grow justify-center items-center ">
        <h1 className="font-[Gabarito]">Inscription</h1>
        <div className="flex flex-row flex-wrap justify-center items-center w-2/4 m-12 gap-16  ">
          <p>
            Vous souhaitez pratiquer le badminton dans une ambiance conviviale,
            dynamique et sportive ? <br />
            Le Oissel Badminton Club vous ouvre ses portes pour une nouvelle
            saison riche en émotions et en échanges. <br />
            <br />
            📅 <strong>Comment s'inscrire ?</strong> <br />
            L'inscription est simple et rapide ! Il vous suffit de compléter le
            formulaire d'inscription et de nous remettre les documents demandés.{" "}
            <br />
            <br />✅ <strong>Documents nécessaires :</strong> <br />
            - Formulaire d'inscription dûment rempli (disponible en
            téléchargement ci-dessous). <br />
            - Certificat médical de non contre-indication à la pratique du
            badminton (ou attestation de santé selon le cas). <br />- Règlement
            de la cotisation annuelle (paiement par chèque, espèces ou
            virement).
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold w-full py-3 rounded">
            Télécharger le formulaire d'inscription
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
