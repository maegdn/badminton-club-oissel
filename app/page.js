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
        <section className="h-screen snap-start flex items-center justify-center bg-white">
          <h1 className="text-3xl font-bold">Partie 1</h1>
        </section>
        <section className="h-screen snap-start flex items-center justify-center bg-red-950">
          <h2 className="text-2xl">Partie 2</h2>
        </section>
        <section className="h-screen snap-start flex items-center justify-center bg-white">
          <h2 className="text-2xl">Partie 3</h2>
        </section>
      </main>
      <footer className=" snap-start flex items-center justify-center  text-white">
        <Footer />
      </footer>
    </div>
  );
}
