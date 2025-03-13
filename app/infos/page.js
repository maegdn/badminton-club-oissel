import Footer from "../components/Footer";
import Header from "../components/Header";

export default function InfosPratiques() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex flex-col w-full min-h-full flex-grow justify-center items-center gap-16">
        <div className="">
          <h1>Infos pratiques</h1>
          <p>
            Le club de badminton O'bad est un club de badminton situé à Oissel,
            en Normandie.
          </p>
          <p>
            Le club propose des entraînements pour tous les niveaux, du débutant
            à l'expert.
          </p>
          <p>
            Le club organise également des tournois et des événements tout au
            long de l'année.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h3>Horaires des séances</h3>
          <table className="table-fixed">
            <thead cellpa>
              <tr>
                <th scope="col" className="w-32">
                  Jour
                </th>
                <th scope="col" className="w-32">
                  Horaire
                </th>
                <th scope="col" className="w-72">
                  Lieu
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">Lundi</td>
                <td scope="row">19h - 21h</td>
                <td scope="row">Gymnase Pierre de Coubertin</td>
              </tr>
              <tr>
                <td scope="row">Mercredi</td>
                <td scope="row">19h - 21h</td>
                <td scope="row">Gymnase Pierre de Coubertin</td>
              </tr>
              <tr>
                <td scope="row">Vendredi</td>
                <td scope="row">19h - 21h</td>
                <td scope="row">Gymnase Pierre de Coubertin</td>
              </tr>
            </tbody>
          </table>
          <div>
            <h3>Lieu de pratique</h3>
            <iframe
              width="100%"
              height="400"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Complexe%20sportif%20germinal+(Club%20Badminton%20Oissel)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/collections/drones/">gps drone</a>
            </iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
