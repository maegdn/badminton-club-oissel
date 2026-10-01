"use client";

import Image from "next/image";
import Link from "next/link";

import Footer from "../../components/Footer";
import Header3 from "../../components/Header3";
import SEO from "../../components/SEO";

import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const members = [
  {
    name: "François H.",
    role: "Président d'honneur",
    image: "/images/44B.png",
    imageHover: "/images/44.png",
  },
  {
    name: "Elise P.",
    role: "Présidente",
    image: "/images/11b.png",
    imageHover: "/images/11.png",
  },
  {
    name: "Sandrine M.",
    role: "Trésorière",
    image: "/images/33B.png",
    imageHover: "/images/33.png",
  },
  {
    name: "Kevin L.",
    role: "Secrétaire",
    image: "/images/22B.png",
    imageHover: "/images/22.png",
  },
  {
    name: "Adrien P.",
    role: "Secrétaire adjoint",
    image: "/images/55B.png",
    imageHover: "/images/55.png",
  },
];

export default function Bureau() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <SEO
        title="Bureau du club"
        url="https://badminton-club-oissel.vercel.app/infos/bureau"
        description="Voici les membres du bureau du club de badminton de Oissel. N'hésitez pas à les contacter pour toute question."
      />

      <Header3 />

      <main className="flex-1">
        {/* HERO */}
        <section className="mx-auto w-[90%] max-w-7xl pt-16 md:pt-24 justify-center">
         

          <div className="grid gap-8 md:items-center md:gap-14">
            <h1 className="font-[SharpGITB] text-[42px] leading-[0.94] tracking-tight !text-3xl md:!text-6xl self-start md:text-center">
            <span className="text-green-400">/ </span>LES MEMBRES DU BUREAU
            </h1>

            

          </div>

          <p className="mt-8 max-w-4xl mx-auto text-justify text-sm leading-7 text-slate-600 md:text-center">    Qui dit association dit conseil d’administration : le président d'honneur
    et fondateur du club est François H, la présidente actuelle est Élise B, la
    trésorière est Sandrine M, le secrétaire est Kevin L, les autres membres
    sont Adrien P (secrétaire adjoint), Pierrick P, Christophe N, Maryline D,
    et Ghislaine M.
    <br />
    <br />
    Pour toutes questions concernant le club et son organisation, n’hésitez pas
    à solliciter les membres du bureau.
  </p>
        </section>

        {/* MEMBERS */}
        <section className="mx-auto mt-14 w-[90%] max-w-7xl md:mt-20">
          <div
            className="
              grid
              grid-cols-2
              gap-x-4
              gap-y-10
              sm:grid-cols-3
              md:grid-cols-5
              md:gap-5
            "
          >
            {members.map((member, index) => (
  <article
    key={member.name}
    className={`
      group
      ${
        members.length % 2 !== 0 && index === members.length - 1
          ? "col-span-2 mx-auto w-[calc(50%-0.5rem)] sm:col-span-1 sm:mx-0 sm:w-auto"
          : ""
      }
    `}
  >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                <Image
      src={member.image}
      alt={`${member.name} - ${member.role}`}
      fill
      className="
        object-cover
        transition-opacity
        duration-300
        group-hover:opacity-0
      "
    />

    <Image
      src={member.imageHover}
      alt=""
      fill
      className="
        object-cover
        opacity-0
        transition-opacity
        duration-300
        group-hover:opacity-100
      "
    />
                </div>

                <div className="mt-4">
                  <h2 className="font-[SharpGITB] text-lg leading-none md:text-xl hover:text-green-400">
                    {member.name.toUpperCase()}
                  </h2>

                  <p className="mt-2 text-xs text-slate-500 md:text-sm">
                    {member.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="
            mx-auto
            my-20
            grid
            w-[90%]
            max-w-7xl
            gap-8
            border-t
            border-slate-200
            pt-10
            md:my-28
            md:grid-cols-[1.15fr_0.85fr]
            md:items-center
            md:gap-16
            md:pt-14
          "
        >
          <div>
            <p className="text-[11px] tracking-[0.17em] text-slate-500 md:text-xs font-bold">
              <span className="text-green-400">UNE QUESTION ?</span> 
            </p>

            <h2 className="mt-3 font-[SharpGITB] text-3xl leading-none md:text-5xl">
              CONTACTEZ LE BUREAU
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-black md:text-base">
              Pour toute question concernant le club, son organisation ou les
              inscriptions, vous pouvez contacter directement un membre du
              bureau.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER_EB}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                min-h-12
                items-center
                justify-between
                bg-green-400
                px-5
                text-sm
                font-bold
                text-white
                transition-colors
                hover:bg-slate-700
              "
            >
              <span className="flex items-center gap-3">
                <FaWhatsapp className="text-lg" />
                WHATSAPP
              </span>

              <span>↗</span>
            </Link>

            <Link
              href="mailto:obadoissel@gmail.com?subject=Besoin d'informations"
              className="
                flex
                min-h-12
                items-center
                justify-between
                border
                border-slate-300
                px-5
                text-sm
                font-bold
                transition-colors
                hover:bg-slate-50
              "
            >
              <span className="flex items-center gap-3">
                <FiMail className="text-lg" />
                EMAIL
              </span>

              <span>↗</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}