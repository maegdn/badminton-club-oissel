import Footer from "../components/Footer";
import Header3 from "../components/Header3";

export default function InfosPratiques() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header3 />
      <main className="flex flex-col w-full min-h-full flex-grow justify-center items-center gap-16">
          <h1>Infos pratiques</h1>
          <div className=" w-full h-[400px] bg-[url('/images/badmminton-coaching-bw.png')] bg-cover bg-center opacity-30">
            <div className="flex flex-col p-6"> <p className="text-white">
              Le club de badminton de Oissel est ouvert à tous les niveaux, du débutant au joueur confirmé. 
              Nous proposons des entraînements réguliers, des compétitions et des événements sociaux pour 
              rassembler notre communauté.
            </p>
            <p className="text-white">
              Pour plus d'informations sur les horaires, les tarifs et les lieux de pratique, veuillez consulter 
              notre page dédiée aux <a href="/infos/horairestarifs">horaires et tarifs</a>.
            </p></div>
           
          </div>
      </main>
      <Footer />
    </div>
  );
}
