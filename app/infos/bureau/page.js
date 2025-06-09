import Image from "next/image";

import Footer from "../../components/Footer";
import Header3 from "../../components/Header3";
import SEO from "../../components/SEO";
import Member from "../../components/Member";

import { GoMail } from "react-icons/go";
import { MdTextsms } from "react-icons/md";

export default function Bureau() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <SEO
        title="Bureau du club"
        url="https://badminton-club-oissel.vercel.app/infos/bureau"
        description="Voici les membres du bureau du club de badminton de Oissel. N'hésitez pas à les contacter pour toute question."
      />
      <Header3 />
      <main className="flex flex-col w-full min-h-full flex-grow justify-center items-center ">
        <h1 className="font-bold mt-12 mb-12 font-[HemiHead]">LES MEMBRES DU BUREAU</h1>

        <div className="flex flex-col justify-center md:flex-row gap-20 items-center w-10/12 md:w-3/5">
          <p className=" mb-10 text-justify">
            Qui dit association dit conseil d’administration : Le président et
            fondateur du club est François H, la trésorière est Sandrine M, la
            secrétaire est Elise B, les autres membres sont Ethan F, Romain L,
            Aurélia D.B, Christophe N, Maryline D, Ghislaine M, Arnaud D.
            <br />
            <br />
            Pour toutes questions concernant le club et son organisation,
            n’hésitez pas à solliciter les membres du bureau.
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-20 mt-16 mb-16 justify-center items-center">
         

          <Member
            name="François H."
            role="Président"
            imageUrl="/images/FH.png"
            imageUrlHovered="/images/FHCOLOR.png"
          />

          <Member
            name="Elise B."
            role="Secrétaire"
            imageUrl="/images/EB.png"
            imageUrlHovered="/images/EBCOLOR.png"
          />

          <Member
            name="Sandrine M."
            role="Trésorière"
            imageUrl="/images/SM.png"
            imageUrlHovered="/images/SMCOLOR.png"
          />

          
        </div>
   
      </main>
      <Footer />
    </div>
  );
}
