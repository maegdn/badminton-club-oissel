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
        <h1 className="font-[Gabarito] text-3xl mb-12">
          HORAIRES, TARIFS, LIEUX DE PRATIQUE
        </h1>

        <div className="flex flex-col justify-center items-center w-3/4 gap-8">
          <div className="flex flex-col justify-center w-3/4">
            {/* <div> */}
            <p>
              Les entraînements sont ouverts de septembre à juillet, sauf
              indisponibilité de la salle. <br />
              Les règles principales des entrainements sont les suivantes :
            </p>
            <div className="flex flex-wrap justify-evenly align-bottom w-full mb-12">
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
            <p className="text-justify mb-16">
              Il y a 2 tournois internes ouverts à tout adhérent, quelque soit
              son niveau : un en automne et un en juin pour fêter la fin de
              saison. Un tournoi open mixte est également organisé au cours de
              la saison. Il est ouvert à tous les adhérents non licenciés à la
              fédération française de badminton. <br />
              <br />
              Depuis quelques temps le Coach Veasna intervient auprès de notre
              club afin de permettre une évolution de la pratique de chacun.
              Tous les joueurs du club peuvent bénéficier d'entraînements
              individuels et/ou collectifs. L'inscription se fait soit par le
              sondage envoyé sur le groupe Whatsapp soit en envoyant un message
              à Elise B. via Whatsapp. Ces cours ne sont pas obligatoires, ce
              qui permet aux joueurs qui ne souhaitent pas y participer de
              continuer à pratiquer le badminton en jeu libre.
            </p>
            {/* </div> */}
            <h3 className="flex text-xl font-bold justify-center">
              Créneaux des séances
            </h3>
            <table className="table-fixed w-full sm:w-2/3 md:w-full min-w-max border border-gray-300 mt-12 mb-12">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-[30%] border border-slate-700 p-2"
                  >
                    Jour
                  </th>
                  <th
                    scope="col"
                    className="w-[30%]  border border-slate-700 p-2"
                  >
                    Horaire
                  </th>
                  <th
                    scope="col"
                    className="w-[40%]  border border-slate-700 p-2"
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

          <div className="w-full flex flex-col items-center">
            <h3 className="text-xl font-bold">Lieu de pratique</h3>
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
