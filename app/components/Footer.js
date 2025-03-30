import Image from "next/image";
import Link from "next/link";

import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-neutral-800 w-full p-6 justify-center items-center text-white pt-12">
      <div className="flex flex-col md:flex-row justify-evenly w-full max-w-6xl gap-8 pb-8">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/OBADLOGO.png"
            alt="logo"
            width={160}
            height={160}
            className=""
          />
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h4 className="font-extrabold pb-2 font-[Gabarito]">À PROPOS </h4>

          <ul className="space-y-1">
            <li>Notre histoire</li>
            <li>
              <Link href="/infos/bureau" className=" hover:text-red-600">
                Le Bureau
              </Link>
            </li>
            <li>
              <Link
                href="/infos/horairestarifs"
                className=" hover:text-red-600"
              >
                Horaires / Tarifs
              </Link>
            </li>
            <li>
              <Link href="/infos/legal" className=" hover:text-red-600">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h4 className="font-extrabold pb-2 font-[Gabarito]">LIENS UTILES</h4>

          <ul className="space-y-1">
            <li>
              <Link href="/inscription" className=" hover:text-red-600">
                Inscription{" "}
              </Link>
            </li>
            <li>Événements</li>
            <li>Partenaires</li>
          </ul>
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h4 className="font-extrabold pb-2">OÙ NOUS TROUVER ?</h4>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100057404591482&locale=fr_FR"
                target="_blank"
                className="flex justify-center md:justify-start items-center gap-2 text-blue-500 font-bold"
              >
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/oisselbadminton/"
                target="_blank"
                className="flex justify-center md:justify-start items-center gap-2 text-pink-500 font-bold"
              >
                <SiInstagram />
                Instagram
              </a>
            </li>
            <li className="">Partenaires</li>
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
          Made with 🤍 by <span className="font-bold">maegdn</span>.
        </p>
      </div>
    </footer>
  );
}
