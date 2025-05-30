"use client";

import Footer from "../../components/Footer";
import Header3 from "../../components/Header3";
import SEO from "../../components/SEO";
import Image from "next/image";

export default function HorairesTarifs() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header3 />
      <main className="flex flex-col w-full min-h-full flex-grow justify-center items-center pt-16 pb-22">
        <SEO
          title="Horaires, tarifs et lieux de pratique"
          url="https://badminton-club-oissel.vercel.app/infos/horairestarifs"
          description="Découvrez les horaires, tarifs et lieux de pratique du club de badminton de Oissel."
        />

        

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
                  src="/images/shoe.png"
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
            <div className="absolute w-full h-[400px] bg-[url('/images/badmminton-coaching-bw.png')] bg-cover bg-center opacity-90"></div>

          <div className="absolute flex gap-6 justify-center items-center h-[400px]">
           <p className="flex font-[HemiHead] text-4xl md:text-3xl lg:text-9xl xl:text-8xl text-white mb-12 w-[60%]  items-start justify-center text-shawdow-black pb-30
">COACHING</p>
            <p className=" items-center justify-center text-justify text-white z-10 p-20 w-[40%]">
              
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
                    horaire: "19h - 21h",
                    lieu: "Gymnase Pierre de Coubertin"
                  },
                  {
                    jour: "Mercredi",
                    horaire: "19h - 21h",
                    lieu: "Gymnase Pierre de Coubertin"
                  },
                  {
                    jour: "Vendredi",
                    horaire: "19h - 21h",
                    lieu: "Gymnase Pierre de Coubertin"
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
