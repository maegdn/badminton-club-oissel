import Image from "next/image";
import Link from "next/link";

import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        w-full
        bg-slate-950
        text-white
        pb-[env(safe-area-inset-bottom)]
      "
    >
      {/* CONTENU PRINCIPAL */}
      <div
        className="
          mx-auto
          grid
          w-[90%]
          max-w-7xl
          grid-cols-1
          gap-10
          py-12
          md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]
          md:gap-12
          md:py-16
        "
      >
        {/* LOGO */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/images/obadlogo2.png"
            alt="Oissel Badminton Club"
            width={250}
            height={200}
            className="h-auto w-44 object-contain md:w-52"
          />
        </div>

        {/* À PROPOS */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h4
            className="
              mb-4
              w-fit
              border-b
              border-slate-600
              pb-2
              font-[SharpGITB]
              font-extrabold
              text-slate-100
            "
          >
            À PROPOS
          </h4>

          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-orange-400"
              >
                Notre histoire
              </Link>
            </li>

            <li>
              <Link
                href="/infos/bureau"
                className="transition-colors hover:text-orange-400"
              >
                Le bureau
              </Link>
            </li>

            <li>
              <Link
                href="/infos/horairestarifs"
                className="transition-colors hover:text-orange-400"
              >
                Horaires / Tarifs
              </Link>
            </li>

            <li>
              <Link
                href="/infos/legal"
                className="transition-colors hover:text-orange-400"
              >
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>

        {/* LIENS UTILES */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h4
            className="
              mb-4
              w-fit
              border-b
              border-slate-600
              pb-2
              font-[SharpGITB]
              font-extrabold
              text-slate-100
            "
          >
            LIENS UTILES
          </h4>

          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <Link
                href="/infos/evenements"
                className="transition-colors hover:text-orange-400"
              >
                Événements
              </Link>
            </li>

           

            <li>
              <Link
                href="/infos/contact"
                className="transition-colors hover:text-orange-400"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* CTA INSCRIPTION */}
          <Link
            href="/inscription"
            className="
              mt-4
              inline-flex
              items-center
              justify-center
              bg-orange-400
              px-4
              py-2
              font-[SharpGITB]
              text-sm
              !text-white
              transition-colors
              duration-200
              hover:bg-orange-300
            "
          >
            S&apos;INSCRIRE →
          </Link>
        </div>

        {/* RÉSEAUX */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h4
            className="
              mb-4
              w-fit
              border-b
              border-slate-600
              pb-2
              font-[SharpGITB]
              font-extrabold
              text-slate-100
            "
          >
            SUIVEZ-NOUS
          </h4>

          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100057404591482&locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Oissel Badminton"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                border
                border-slate-600
                transition-colors
                hover:border-[#1877F2]
              "
            >
              <FaFacebook
                size={21}
                className="text-[#1877F2]"
              />
            </a>

            <a
              href="https://www.instagram.com/oisselbadminton/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Oissel Badminton"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                border
                border-slate-600
                transition-colors
                hover:border-[#E4405F]
              "
            >
              <SiInstagram
                size={20}
                className="text-[#E4405F]"
              />
            </a>
          </div>
        </div>
      </div>

      {/* BAS DU FOOTER */}
      <div className="border-t border-slate-800">
        <div
          className="
            mx-auto
            flex
            w-[90%]
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-3
            py-5
            text-center
            text-xs
            text-slate-400
            md:flex-row
            md:text-left
          "
        >
          <p>
            © 2026 Oissel Badminton Club. Tous droits réservés.
          </p>

          <p>
            Made with 🤍 by{" "}
            <a
              href="https://www.mguardini.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-bold
                text-slate-100
                transition-colors
                hover:text-orange-400
              "
            >
              mguardini.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}