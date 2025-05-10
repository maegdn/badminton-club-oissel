import Footer from "../components/Footer";
import Header3 from "../components/Header3";

export default function InfosPratiques() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header3 />
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
      </main>
      <Footer />
    </div>
  );
}
