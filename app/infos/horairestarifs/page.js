"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SEO from "../../components/SEO";

export default function HorairesTarifs() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex flex-col w-full min-h-full flex-grow justify-center items-center">
        <SEO
          title="Horaires, tarifs et lieux de pratique"
          url="https://badminton-club-oissel.vercel.app/infos/horairestarifs"
          description="Découvrez les horaires, tarifs et lieux de pratique du club de badminton de Oissel."
        />
        <h1 className="font-[Gabarito] text-3xl mb-12">
          HORAIRES, TARIFS, LIEUX DE PRATIQUE
        </h1>

        <div className="flex flex-col justify-center items-center w-3/4 gap-8">
          <div className="flex flex-col justify-center items-center w-full">
            <h3 className="text-xl font-bold">Créneaux des séances</h3>
            <table className="table-fixed w-full sm:w-2/3 md:w-full min-w-max border border-gray-300 mt-6">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-[30%] border border-gray-300 p-2"
                  >
                    Jour
                  </th>
                  <th
                    scope="col"
                    className="w-[30%]  border border-gray-300 p-2"
                  >
                    Horaire
                  </th>
                  <th
                    scope="col"
                    className="w-[40%]  border border-gray-300 p-2"
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
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="w-[30%] border border-gray-300 p-2 text-center">
                      {item.jour}
                    </td>
                    <td className="w-[30%] border border-gray-300 p-2 text-center">
                      {item.horaire}
                    </td>
                    <td className="w-[40%] border border-gray-300 p-2 text-center">
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
