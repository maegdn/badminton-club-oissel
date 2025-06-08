"use client";

import Footer from "../../components/Footer";
import Header3 from "../../components/Header3";
import SEO from "../../components/SEO";
import Image from "next/image";
import Link from "next/link";

export default function HorairesTarifs() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header3 />
      <SEO
          title="Horaires, tarifs et lieux de pratique"
          url="https://oissel-badminton-club.vercel.app/infos/contact"
          description="Découvrez les horaires, tarifs et lieux de pratique du club de badminton de Oissel."
      />
      <main className="flex flex-col w-full min-h-full flex-grow justify-center items-center pt-16 pb-22">
     <div className="flex flex-col justify-center items-center w-full gap-8">
        
          <div className="flex flex-col justify-center items-center w-4/5">
          <h1 className="font-[HemiHead] text-3xl mb-12">
          HORAIRES, TARIFS, LIEUX DE PRATIQUE
        </h1>
            {/* <div> */}
            <p>
              Les entraînements sont ouverts de septembre à juillet, sauf
              indisponibilité de la salle. <br />
              Les règles principales des entrainements sont les suivantes :
            </p>
            <div className="flex flex-wrap justify-evenly align-bottom w-full mb-22">
              <div className=" flex flex-col justify-center w-60 text-center items-center">
                <Image
                  src="/images/Untitled_Artwork.png"
                  width={150}
                  height={150}
                  className="pb-12 object-contain"
                />
                <p>
                  Jouer avec des chaussures de salle{" "}
                  <span className="font-bold">non utilisées à l'extérieur</span>
                </p>
              </div>
              <div className=" flex flex-col justify-center w-70 text-center items-center">
                <Image
                  src="/images/badnet.png"
                  width={150}
                  height={150}
                  className="pb-12 object-contain"
                />
                <p>
                  Aider à{" "}
                  <span className="font-bold">
                    monter/démonter les terrains
                  </span>
                </p>
              </div>
              <div className=" flex flex-col justify-center w-70 text-center items-center">
                <Image
                  src="/images/rotation.png"
                  width={150}
                  height={150}
                  className="pt-12 pb-12 object-fit"
                />
                <div className="items-center">
                  <p>
                    <span className="font-bold">Libérer le terrain</span> à
                    chaque fin de set afin de permettre à tout le monde de jouer
                    et rencontrer différents joueurs
                  </p>
                </div>
              </div>
            </div>
            </div>



            <div className="relative h-[400px] w-full mb-16">
            <div className="absolute w-full h-[400px] bg-[url('/images/badmminton-coaching-bw.png')] bg-cover bg-left md:bg-center opacity-90"></div>

          <div className="absolute md:flex md:gap-6 items-center w-12/12 md:w-full md:justify-center md:items-center h-[400px] md:h-[400px]">
           <p className="flex font-[HemiHead] text-3xl md:text-8xl text-white py-5 pt-10 pb-10 md:mb-12 md:w-[60%] w-full items-center justify-center text-shawdow-black md:pb-30
">COACHING</p>
            <p className=" items-center justify-center text-justify text-white  text-sm md:text-base z-10 md:p-20  px-5 md:w-[40%]">
              
              Depuis quelques temps le <span className="font-bold">Coach Veasna </span>intervient auprès de notre
              club afin de permettre une évolution de la pratique de chacun.
              Tous les joueurs du club peuvent bénéficier d'entraînements
              individuels et/ou collectifs. <br/><br/>L'inscription se fait soit par le
              sondage envoyé sur le groupe Whatsapp soit en envoyant un message
              à Elise B. via Whatsapp. Ces cours ne sont pas obligatoires, ce
              qui permet aux joueurs qui ne souhaitent pas y participer de
              continuer à pratiquer le badminton en jeu libre.
            </p>
            </div>
            </div>
            
            <div className="flex flex-col justify-center w-4/5">
            <h2 className="flex text-xl font-bold justify-center font-[HemiHead]">
              Créneaux des séances
            </h2>
            <table className="table-fixed w-full sm:w-2/3 md:w-full min-w-max border border-gray-300 mt-12 mb-12">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-[30%] border border-black p-2 bg-slate-700 text-white font-[HemiHead]"
                  >
                    Jour
                  </th>
                  <th
                    scope="col"
                    className="w-[30%]  border border-black p-2  bg-slate-700 text-white font-[HemiHead]"
                  >
                    Horaire
                  </th>
                  <th
                    scope="col"
                    className="w-[40%]  border border-black p-2  bg-slate-700 text-white font-[HemiHead]"
                  >
                    Lieu
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    jour: "Lundi",
                    horaire: "19h00 - 22h30",
                    lieu: "Complexe sportif Germinal"
                  },
                  {
                    jour: "Jeudi",
                    horaire: "20h30- 22h30",
                    lieu: "Complexe sportif Germinal"
                  },
                  {
                    jour: "Samedi",
                    horaire: "08h00 - 10h00",
                    lieu: "Complexe sportif Germinal"
                  }
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-blue-50">
                    <td className="w-[30%] border border-slate-700 p-2 text-center">
                      {item.jour}
                    </td>
                    <td className="w-[30%] border border-slate-700 p-2 text-center">
                      {item.horaire}
                    </td>
                    <td className="w-[40%] border border-slate-700 p-2 text-center">
                      {item.lieu}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-4/5 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-12 font-[HemiHead]">Lieu de pratique</h2>
            {/* WAZE MAP DISPLAY */}
            {/* <iframe src="https://embed.waze.com/iframe?zoom=16&lat=49.350571&lon=1.092553&ct=livemap" width="600" height="450" allowfullscreen></iframe> */}
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=fr&amp;q=Complexe%20sportif%20germinal+(Club%20Badminton%20Oissel)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Lieu de pratique"
              className="mt-6"
            ></iframe>


        

          </div>
          <div className="md:flex-row w-8/12 md:flex gap-40 md:flex-wrap items-center justify-center">
<Link href="https://ul.waze.com/ul?venue_id=721390.7148359.36136893&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location">
        <button className="bg-[#33CCFF] text-black px-4 py-2 rounded-lg mt-10 w-full flex justify-center">
        <Image
                  src="/images/waze-icon.svg"
                  width={15}
    height={15}
    className="mr-2"/>
            Ouvrir dans Waze 
            </button>
            </Link>

<Link
  href="https://www.google.com/maps/search/?api=1&query=Badminton+Club+Oissel"
  target="_blank"
  rel="noopener noreferrer"
>
<button className="bg-slate-800 text-white px-4 py-2 rounded-lg mt-10 w-full flex justify-center">
    <Image
                  src="/images/google-map-icon.svg"
                  width={15}
    height={15}
    className="mr-2"/>
      Ouvrir dans Google Maps
  </button>
  
</Link>

</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
