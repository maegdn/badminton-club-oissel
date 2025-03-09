import Footer from "../components/Footer";
import Header from "../components/Header";

export default function InfosPratiques() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex flex-col w-full min-h-full flex-grow justify-center items-center">
        <div>
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

        <div className="flex "></div>
      </main>
      <Footer />
    </div>
  );
}
