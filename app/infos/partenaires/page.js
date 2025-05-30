"use client";

import Footer from "../../components/Footer";
import Header3 from "../../components/Header3";

export default function Partners() {

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header3 />
      <main className="flex-1 flex flex-col items-center justify-center w-full pt-16">
        <h1 className="font-[Gabarito]">Partenaires</h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center w-3/4 md:w-2/4 gap-8 my-12 text-justify">
          <div className="flex w-auto">
            <p>
            Le club est en partenariat avec Larde Sports - RG Sports (galerie marchande hyper U de Grand Quevilly). <br/>Vous bénéficiez du cordage de votre raquette gratuit et également d’une remise sur les articles en magasin (20% sur le prix public et 30% sur les marques RSL et FORZA).
<br/><br/>Le coach Veasna a également un partenariat avec Victor. Vous pouvez le questionner concernant ce partenariat pour plus d’informations. 
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
