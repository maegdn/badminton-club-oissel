"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Inscription() {
  const downloadForm = () => {
    console.log("Téléchargement du formulaire d'inscription");
    const formUrl = "/files/badminton_club_registration.pdf";
    window.open(formUrl, "_blank");

    const link = document.createElement("a");
    link.href = formUrl;
    // link.target = "_blank";
    link.setAttribute("download", "formulaire-inscription-obad.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center w-full pt-16 pb-16">
        <h1 className="font-[Gabarito]">INSCRIPTION</h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center w-3/4 md:w-2/4 gap-8 my-12 text-justify">
          <div className="flex w-auto">
            <p>
              Vous souhaitez pratiquer le badminton dans une ambiance
              conviviale, dynamique et sportive ? <br />
              Le Oissel Badminton Club vous ouvre ses portes pour une nouvelle
              saison riche en émotions et en échanges. <br />
              <br />
              📅 <strong>Comment s'inscrire ?</strong> <br />
              L'inscription est simple et rapide ! Il vous suffit de compléter
              le formulaire d'inscription et de nous remettre les documents
              demandés.
              <br />
              <br />✅ <strong>Documents nécessaires :</strong> <br />
              - Formulaire d'inscription dûment rempli (disponible en
              téléchargement ci-dessous). <br />
              - Certificat médical de non contre-indication à la pratique du
              badminton (ou attestation de santé selon le cas). <br />-
              Règlement de la cotisation annuelle (paiement par chèque, espèces
              ou virement).
            </p>
          </div>
          <div className="flex justify-center w-full">
            <button
              className="bg-red-700 hover:bg-red-500 transition duration-300 ease-in-out text-white font-bold px-6 mt-6 py-3 rounded"
              onClick={downloadForm}
            >
              Télécharger le formulaire d'inscription
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
