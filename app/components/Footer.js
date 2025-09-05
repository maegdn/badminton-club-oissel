import Image from "next/image";
import Link from "next/link";

import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full p-8 justify-center items-center text-white bg-slate-900 bg-repeat md:bg-no-repeat md:bg-cover bg-center bg-gradient-to-b from-black/10 via-black/20 to-black/80 ">
      <div className="flex flex-col md:flex-row justify-evenly w-full max-w-6xl gap-8 pb-8 ">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/obadlogo2.png"
            alt="logo"
            width={250}
            height={200}
            className=""
          />
        </div>
        <div className="flex  items-center md:items-start flex-col text-center md:text-left">
          <h4 className=" font-extrabold pb-2 font-[HemiHead] border-b mb-4 w-fit text-center md:text-left">
            À PROPOS
          </h4>
          <ul className="space-y-1">
            <li>
              <Link href="/" className=" hover:text-blue-400">
                Notre histoire{" "}
              </Link>
            </li>
            <li>
              <Link href="/infos/bureau" className=" hover:text-blue-400">
                Le bureau
              </Link>
            </li>
            <li>
              <Link
                href="/infos/horairestarifs"
                className=" hover:text-blue-400"
              >
                Horaires / Tarifs
              </Link>
            </li>
            <li>
              <Link href="/infos/legal" className=" hover:text-blue-400">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center md:items-start flex-col text-center md:text-left">
          <h4 className="font-extrabold pb-2 font-[HemiHead] border-b mb-4 w-fit text-center md:text-left">
            LIENS UTILES
          </h4>

          <ul className="space-y-1">
            <li>
              <Link href="/inscription" className=" hover:text-blue-400">
                Inscription{" "}
              </Link>
            </li>
            <li>
              <Link href="/infos/evenements" className=" hover:text-blue-400">
                Événements{" "}
              </Link>
            </li>
            <li>
              <Link href="/infos/partenaires" className=" hover:text-blue-400">
                Partenaires{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center md:items-start flex-col  text-center md:text-left">
          <h4 className="  font-extrabold font-[HemiHead] pb-2 border-b mb-4 w-fit text-center md:text-left">
            OÙ NOUS TROUVER ?
          </h4>
          <ul className="flex flex-row gap-6">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100057404591482&locale=fr_FR"
                target="_blank"
                className="flex justify-center md:justify-start items-center gap-2 text-blue-600 font-bold"
              >
                <FaFacebook size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/oisselbadminton/"
                target="_blank"
                className="flex justify-center md:justify-start items-center gap-2 text-pink-600 font-bold"
              >
                <SiInstagram size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-4 border-t border-gray-600 w-full pt-4 pb-4">
          <p className="text-center text-sm">
            © 2025 Oissel Badminton Club. Tous droits réservés.
          </p>

          <div className="flex gap-6">
            <SiInstagram />
            <FaFacebook />
            <FaXTwitter />
          </div>
        </div>

        <p className="text-sm">
          Made with 🤍 by{" "}
          <span className="font-bold">
            <a href="http://www.mguardini.pro" target="_blank">
              maegdn
            </a>
          </span>
          .
        </p>
      </div>
    </footer>
  );
}
