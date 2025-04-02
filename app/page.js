import Image from "next/image";

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white shadow">
        <Header />
      </header>
      <main className="flex flex-col flex-grow">
        <section className="h-screen snap-start flex flex-col items-center justify-center bg-white">
          <h1 className="text-3xl font-bold mb-12">Partie 1</h1>
          <div className="flex flex-col md:flex-row gap-12 items-center w-3/5">
            <p>
              Envie de bouger, de vous amuser et de faire de belles rencontres ?
              Venez découvrir le badminton en mixte dans une ambiance conviviale
              aux gymnases de Oissel ! Que vous soyez débutant ou joueur
              confirmé, notre club vous accueille pour partager des moments de
              sport et de bonne humeur. C’est l’occasion idéale pour essayer,
              progresser et pourquoi pas participer à nos tournois tout au long
              de l’année. Rejoignez-nous sur le terrain ! 🏸
            </p>
            <Image
              src="/images/imgp1.png"
              alt="logo"
              width={1500}
              height={1200}
              className=""
            />
          </div>
        </section>
        <section className="h-screen snap-start flex items-center justify-center bg-red-950">
          <h2 className="text-2xl">Partie 2</h2>
        </section>
        <section className="h-screen snap-start flex flex-col items-center justify-center bg-white">
          <h2 className="text-2xl mb-12">Partie 3</h2>
          <div className="flex gap-12 items-center w-3/5">
            <Image
              src="/images/imgp3.png"
              alt="logo"
              width={600}
              height={500}
              className=""
            />
            <p>
              Envie de bouger, de vous amuser et de faire de belles rencontres ?
              Venez découvrir le badminton en mixte dans une ambiance conviviale
              aux gymnases de Oissel ! Que vous soyez débutant ou joueur
              confirmé, notre club vous accueille pour partager des moments de
              sport et de bonne humeur. C’est l’occasion idéale pour essayer,
              progresser et pourquoi pas participer à nos tournois tout au long
              de l’année. Rejoignez-nous sur le terrain ! 🏸
            </p>
          </div>
        </section>
      </main>
      <footer className=" snap-start flex items-center justify-center  text-white">
        <Footer />
      </footer>
    </div>
  );
}
