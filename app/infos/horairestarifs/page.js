"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function HorairesTarifs() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex flex-col w-full min-h-full flex-grow justify-center items-center">
        <h1 className="font-[Gabarito] text-3xl my-8">
          Horaires, tarifs et lieux
        </h1>

        <div className="flex flex-col justify-center items-center w-2/4 m-12 gap-16">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-bold">Créneaux des séances</h3>
            <table className="table-fixed w-full justify-center items-center mt-6">
              <thead>
                <tr>
                  <th scope="col" className="w-auto border border-gray-300 p-2">
                    Jour
                  </th>
                  <th scope="col" className="w-auto border border-gray-300 p-2">
                    Horaire
                  </th>
                  <th scope="col" className="w-auto border border-gray-300 p-2">
                    Lieu
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Lundi</td>
                  <td className="border border-gray-300 p-2">19h - 21h</td>
                  <td className="border border-gray-300 p-2">
                    Gymnase Pierre de Coubertin
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Mercredi</td>
                  <td className="border border-gray-300 p-2">19h - 21h</td>
                  <td className="border border-gray-300 p-2">
                    Gymnase Pierre de Coubertin
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Vendredi</td>
                  <td className="border border-gray-300 p-2">19h - 21h</td>
                  <td className="border border-gray-300 p-2">
                    Gymnase Pierre de Coubertin
                  </td>
                </tr>
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
