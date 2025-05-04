import Image from "next/image";

import Footer from "../../components/Footer";
import Header2 from "../../components/Header2";
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
      <Header2 />
      <main className="flex flex-col w-full min-h-full flex-grow justify-center items-center ">
        <h1 className="font-bold mt-5 mb-5">LES MEMBRES DU BUREAU</h1>

        <div className="flex flex-col justify-center md:flex-row gap-22 items-center w-3/5">
          <p className="w-3/5 mb-10 text-justify">
            Qui dit association dit conseil d’administration : Le président et
            fondateur du club est François H, la trésorière est Sandrine M, la
            secrétaire est Elise B, les autres membres sont Ethan F, Romain L,
            Aurélia D.B, Christophe N, Maryline D, Ghislaine M, Arnaud D. Pour
            toutes questions concernant le club et son organisation, n’hésitez
            pas à solliciter les membres du bureau.
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-20 mt-16 mb-16">
          {/* <div className="relative w-48 h-52">
            <div className="absolute top-0 left-0 w-46 h-58 bg-blue-200 opacity-70"></div>
            <div className="absolute bottom-12 left-10 w-46 h-46 shadow">
              <Image
                src="/images/prof1.png"
                alt="François B."
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-42 left-3 text-left w-48">
              <h2 className="font-bold">François H.</h2>
              <p>Président du club</p>
              <div className="flex border-2 justify-center items-center rounded-full h-10 w-10">
                <GoMail size={20} />
              </div>
            </div>
          </div>

          <div className="relative w-48 h-52">
            <div className="absolute top-0 left-0 w-46 h-58 bg-blue-200 opacity-70"></div>
            <div className="absolute bottom-12 left-10 w-46 h-46">
              <Image
                src="/images/prof2.png"
                alt="Elise B."
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-42 left-3 text-left w-48">
              <h2 className="font-bold">Elise B.</h2>
              <p>Secrétaire</p>

              <div className="flex border-2 justify-center items-center rounded-full h-10 w-10">
                <MdTextsms size={25} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-20 mt-16 mb-26">
          <div className="relative w-48 h-52">
            <div className="absolute bottom-12 left-10 w-56 h-56">
              <Image
                src="/images/prof1.png"
                alt="François B."
                fill
                className="object-cover"
              />
            </div>
            <div className="flex absolute top-32 left-3 w-54 h-20 bg-blue-200 opacity-100 p-3">
              <div>
                <h2 className="font-bold">Sandrine M.</h2>
                <p>Trésorière</p>
              </div>
              <div className="flex border-1 justify-center items-center rounded-full h-8 w-8 ml-6 mt-2">
                <GoMail size={20} />
              </div>
            </div>
          </div> */}

          <Member
            name="Elise B."
            role="Secrétaire"
            imageUrl="/images/prof2nobg.png"
          />

          <Member
            name="François H."
            role="Président"
            imageUrl="/images/prof1nobg.png"
          />

          {/* <div className="relative w-48 h-52">
            <div className=" absolute top-24 left-4 bg-white border-2 z-4 px-3">
              <h3 className="font-bold text-black mb-0">François H.</h3>
              <p className=" text-black -mt-2">Président</p>
            </div>
            <div className="absolute bottom-12 left-3 w-56 h-56">
              <Image
                src="/images/prof1nobg.png"
                alt="François H."
                fill
                className="object-cover z-1"
              />
            </div>
            <div className="flex absolute bottom-12 left-3 w-56 h-36 bg-blue-200 opacity-100 p-3"></div> */}

          {/* <div className="flex border-1 justify-center items-center rounded-full h-8 w-8 ml-6 mt-2">
              <GoMail size={20} />
            </div> */}
          {/* </div> */}

          {/* <div className="relative w-48 h-52">
            <div className="absolute bottom-12 left-10 w-56 h-56">
              <Image
                src="/images/prof2.png"
                alt="Elise B."
                fill
                className="object-cover"
              />
            </div>
            <div className="flex absolute top-32 left-3 w-54 h-20 bg-blue-200 opacity-100 p-3">
              <div>
                <h2 className="font-bold">Elise B.</h2>
                <p>Secrétaire</p>
              </div>
              <div className="flex border-1 justify-center items-center rounded-full h-8 w-8 ml-6 mt-2">
                <GoMail size={20} />
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="flex flex-row flex-wrap justify-center items-center w-2/4 m-12 gap-16  ">
          <div>
            <img
              src="/images/profile-pic.jpg"
              className="h-52 w-52 mb-3 rounded-md object-cover"
            ></img>
            <div className="flex flex-col w-[150px ]justify-center items-center bg-red-200 rounded-md h-16">
              <p>Marko Luka</p>
              <p className="font-bold">Trésorier</p>
            </div>
          </div>

          <div>
            <img
              src="/images/profile-pic.jpg"
              className="h-52 w-52 mb-3 rounded-md object-cover"
            ></img>
            <div className="flex flex-col w-[150px] justify-center items-center bg-red-200 rounded-md h-16">
              <p>Marko Luka</p>
              <p className="font-bold">Trésorier</p>
            </div>
          </div>
          <div>
            <img
              src="/images/profile-pic.jpg"
              className="h-52 w-52 mb-3 rounded-md object-cover"
            ></img>
            <div className="flex flex-col w-[150px] justify-center items-center bg-red-200 rounded-md h-16">
              <p>Marko Luka</p>
              <p className="font-bold">Trésorier</p>
            </div>
          </div>
        </div> */}
      </main>
      <Footer />
    </div>
  );
}
