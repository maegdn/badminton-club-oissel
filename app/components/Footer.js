import Image from "next/image";
import Link from "next/link";

import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col h-72 bg-gray-300 w-full p-4 justify-center items-center mt-12">
      <div className="flex justify-evenly pb-2 w-full pt-2">
        <div className="flex flex-row">
          <Image
            src="/images/OBADLOGO.png"
            alt="logo"
            width={160}
            height={160}
            className=""
          />
        </div>
        <div className="flex flex-col">
          <h4 className="font-extrabold pb-2 font-[Gabarito]">LIENS UTILES</h4>

          <ul>
            <li>Notre histoire</li>
            <li>Inscription</li>
            <li>Événements</li>
            <li>Partenaires</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="font-extrabold pb-2">OÙ NOUS TROUVER ?</h4>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100057404591482&locale=fr_FR"
                target="_blank"
                className="flex items-center gap-2 text-blue-700 font-bold"
              >
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/oisselbadminton/"
                target="_blank"
                className="flex  gap-2 text-pink-600 items-center font-bold"
              >
                <SiInstagram />
                Instagram
              </a>
            </li>
            <li className=" font-bold">Partenaires</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <p>© 2025 Oissel Badminton Club. Tous droits réservés.</p>

          <div className="flex gap-6 flex-row pb-6">
            <SiInstagram />
            <FaFacebook />
            <FaXTwitter />
          </div>
        </div>

        <p>
          Made with 🖤 by <span className="font-bold">maegdn</span>.
        </p>
      </div>
    </footer>
  );
}
