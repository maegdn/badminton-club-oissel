"use client";

import Footer from "../components/Footer";
import Header3 from "../components/Header3";

export default function Partners() {

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header3 />
      <main className="flex-1 flex flex-col items-center justify-center w-full pt-16">
        <h1 className="font-[Gabarito]">Partenaires</h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center w-3/4 md:w-2/4 gap-8 my-12 text-justify">
          <div className="flex w-auto">
            <p>
            Partenaires infos
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
