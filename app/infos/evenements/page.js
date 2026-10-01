"use client";

import Header3 from "../../components/Header3";
import React from "react";
import Image from "next/image";
import Footer from "@/app/components/Footer";
const events = [
  {
    category: "VIE DU CLUB",
    title: "ENTRAÎNEMENTS",
    image: "/images/eventspic.jpg",
    content: (
      <>
        <p>
          De nombreuses soirées à thème sont organisées tout au long de
          l&apos;année, alors soyez prêts 🥳 !
        </p>

        <p>
          Les joueurs en seront informés via le groupe WhatsApp.
        </p>
      </>
    ),
  },
  {
    category: "COMPÉTITION",
    title: "LE CRITÉRIUM 🏆",
    image: "/images/criterium.jpg",
    content: (
      <>
        <p>
          Le critérium regroupe une douzaine de clubs loisirs. Le calendrier
          est fait sur 2 ans. Tous les clubs se rencontrent au moins une fois.
          Les victoires et défaites sont ensuite répertoriées afin
          d&apos;établir un classement.
        </p>

        <p>
          Le nombre de participants peut être restreint selon le nombre de
          joueurs présents dans l&apos;équipe adverse. À chaque rencontre, un
          message sera envoyé sur le groupe WhatsApp afin d&apos;annoncer le
          niveau de l&apos;équipe adverse.
        </p>
      </>
    ),
  },
  {
    category: "TOURNOI",
    title: "L'OPEN D'OISSEL",
    image: "/images/openosselien.jpg",
    content: (
      <>
        <p>
          Un rendez-vous fort de la saison pour réunir joueurs, partenaires et
          passionnés autour du badminton.
        </p>
      </>
    ),
  },
];

export default function Evenements() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header3 />

      <main className="flex-1">
        {/* HEADER PAGE */}
        <section className="mx-auto w-[90%] max-w-7xl pt-16 md:pt-24">
          <h1 className="font-[SharpGITB] text-[42px] leading-none tracking-tight !text-3xl md:!text-6xl md:!text-center">
            <span className="text-orange-400">/</span> ÉVÉNEMENTS
          </h1>

          {/* <p className="mt-5 max-w-xl text-sm leading-6 text-slate-500 md:text-base">
            Les temps forts qui rythment la vie du club tout au long de la
            saison.
          </p> */}
        </section>

        {/* EVENTS */}
        <section className="mx-auto mt-14 w-[90%] max-w-7xl pb-20 md:mt-24 md:pb-28">
          <div className="flex flex-col gap-16 md:gap-24">
            {events.map((event, index) => (
              <article
                key={event.number}
                className={`
                  group
                  grid
                  grid-cols-1
                  items-center
                  gap-6
                  border-t
                  border-slate-200
                  pt-8
                  md:grid-cols-2
                  md:gap-12
                  md:border-none
                  md:pt-0
                  lg:gap-16
                `}
              >
                {/* IMAGE */}
                <div
                  className={`
                    relative
                    aspect-[4/3]
                    w-full
                    overflow-hidden
                    bg-slate-100
                    ${
                      index % 2 === 1
                        ? "md:order-2"
                        : "md:order-1"
                    }
                  `}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-[1.025]
                    "
                  />
                </div>

                {/* CONTENT */}
                <div
                  className={`
                    flex
                    min-w-0
                    flex-col
                    ${
                      index % 2 === 1
                        ? "md:order-1"
                        : "md:order-2"
                    }
                  `}
                >
                  {/* META */}
                  <div className="mb-3 flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-slate-500 md:mb-5 md:text-xs">
                    <span className="text-orange-400">
                    {event.category} 
                    </span>

                  </div>

                  {/* TITLE */}
                  <h2 className="font-[SharpGITB] text-3xl leading-[0.95] tracking-tight sm:text-4xl md:text-5xl">
                    {event.title}
                  </h2>

                  {/* ORANGE LINE */}
                  <div className="my-5 h-[3px] w-14 bg-orange-400 md:my-6" />

                  {/* TEXT */}
                  <div
                    className="
                      flex
                      max-w-[60ch]
                      flex-col
                      gap-4
                      text-[15px]
                      leading-7
                      text-slate-700
                      md:text-base
                    "
                  >
                    {event.content}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
// export default function Evenements() {
//   return (
//     <div className="flex min-h-screen w-full flex-col">
//       <Header3 />

//       <main className="flex flex-1 flex-col items-center w-full px-4 pt-16 pb-12">
//         <h1 className="font-[SharpGITB] !text-3xl md:!text-6xl self-start md:self-center">
//           <span className="text-orange-400">/</span> ÉVÉNEMENTS
//         </h1>

//         <div className="flex flex-col w-full max-w-6xl gap-10 my-12">

//           {/* ENTRAÎNEMENTS */}
//           <div className="flex w-full flex-col md:flex-row overflow-hidden">
//             <div className="relative w-full h-56 md:w-2/5 md:h-auto min-h-[260px] border-1 border-black ">
//               <Image
//                 src="/images/eventspic.jpg"
//                 fill
//                 className="object-cover"
//                 alt="Joueurs"
//               />
//             </div>

//             <div className="w-full md:w-3/5 bg-white">
//               <h4 className="font-[SharpGITB] bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200 px-4 py-3 text-white text-center  border-1 border-black">
//                 ENTRAÎNEMENTS
//               </h4>

//               <p className="p-5 text-justify text-slate-800">
//                 De nombreuses soirées à thème sont organisées tout au long de
//                 l'année, alors soyez prêts 🥳 ! Les joueurs en seront informés
//                 via le groupe WhatsApp.
//               </p>
//             </div>
//           </div>

//           {/* CRITÉRIUM */}
//           <div className="flex w-full flex-col md:flex-row overflow-hidden">
//             <div className="relative w-full h-56 md:w-2/5 md:h-auto min-h-[260px] border-2 border-black">
//               <Image
//                 src="/images/criterium.jpg"
//                 fill
//                 className="object-cover"
//                 alt="Badminton"
//               />
//             </div>

//             <div className="w-full md:w-3/5 bg-white">
//               <h4 className="font-[SharpGITB] bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200  px-4 py-3 text-white text-center">
//                 LE CRITÉRIUM 🏆
//               </h4>

//               <p className="p-5 text-justify text-slate-800">
//                 Le critérium regroupe une douzaine de clubs loisirs. Le
//                 calendrier est fait sur 2 ans. Tous les clubs se rencontrent au
//                 moins une fois. Les victoires et défaites sont ensuite
//                 répertoriées afin d'établir un classement.
//                 <br />
//                 <br />
//                 Le nombre de participants peut être restreint selon le nombre de
//                 joueurs présents dans l’équipe adverse. À chaque rencontre, un
//                 message sera envoyé sur le groupe WhatsApp afin d’annoncer le
//                 niveau de l’équipe adverse.
//               </p>
//             </div>
//           </div>

//           {/* OPEN D'OISSEL */}
//           <div className="flex w-full flex-col md:flex-row overflow-hidden">
//             <div className="relative w-full h-56 md:w-2/5 md:h-auto min-h-[260px] border-2 border-black">
//               <Image
//                 src="/images/openosselien.jpg"
//                 fill
//                 className="object-cover"
//                 alt="Open d'Oissel"
//               />
//             </div>

//             <div className="w-full md:w-3/5 bg-white">
//               <h4 className="font-[SharpGITB] bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200  px-4 py-3 text-white text-center">
//                 L'OPEN D'OISSEL 🗓️
//               </h4>

//               <p className="p-5 text-justify text-slate-800">
//                 Un tournoi open mixte est également organisé au cours de la
//                 saison. Il est ouvert à tous, ainsi qu’à certains joueurs de
//                 compétition selon leur classement.
//               </p>
//             </div>
//           </div>

//           {/* TOURNOIS INTERNES */}
//           <div className="flex w-full flex-col mt-10">
//             <h4 className="font-[SharpGITB] bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200  px-4 py-3 text-white">
//               Tournois internes 🏆
//             </h4>

//             <p className="p-5 bg-white text-justify text-slate-800">
//               Deux tournois internes sont ouverts à tous les adhérents, quel que
//               soit leur niveau : un en début de saison et un en fin de saison.
//             </p>
//           </div>

//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }