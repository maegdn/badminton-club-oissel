"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  MdClose,
  MdMenu,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

export default function Header3() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(false);

  return (
    <header
      className="
        relative
        z-50
        flex
        h-28
        w-full
        items-center
        justify-center
        bg-slate-950
        text-white
        transition-all
        duration-300
        md:h-30
      "
    >
      <div
        className="
          relative
          z-10
          flex
          w-[90%]
          max-w-7xl
          items-center
          justify-between
        "
      >
        {/* LOGO */}
        <Link
          href="/"
          className="z-10 flex items-center"
          aria-label="Retour à l'accueil"
        >
          <Image
            src="/images/obadlogo2.png"
            alt="Logo Oissel Badminton"
            width={150}
            height={150}
            priority
            className="
              h-auto
              w-28
              object-contain
              md:w-36
            "
          />
        </Link>

        {/* MOBILE BURGER */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            transition-colors
            hover:text-orange-400
            md:hidden
          "
          aria-label="Ouvrir le menu"
        >
          <MdMenu size={32} />
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:block">
          <ul
            className="
              flex
              items-center
              gap-7
              text-sm
              lg:gap-10
            "
          >
            {/* LE CLUB */}
            <li>
              <Link
                href="/"
                className="
                  relative
                  font-[SharpGITB]
                  tracking-wide
                  transition-colors
                  duration-200

                  after:absolute
                  after:-bottom-2
                  after:left-0
                  after:h-[2px]
                  after:w-0
                  after:bg-orange-400
                  after:transition-all
                  after:duration-300

                  hover:text-orange-300
                  hover:after:w-full
                "
              >
                LE CLUB
              </Link>
            </li>

            {/* INFOS PRATIQUES DROPDOWN */}
            <li
              className="relative"
              onMouseEnter={() => {
                setDropdownOpen(true);
                setActiveNav(true);
              }}
              onMouseLeave={() => {
                setDropdownOpen(false);
                setActiveNav(false);
              }}
            >
              <div className="flex items-center">
                <Link
                  href="/infos"
                  className={`
                    relative
                    flex
                    items-center
                    font-[SharpGITB]
                    tracking-wide
                    transition-colors
                    duration-200

                    after:absolute
                    after:-bottom-2
                    after:left-0
                    after:h-[2px]
                    after:bg-orange-400
                    after:transition-all
                    after:duration-300

                    ${
                      activeNav
                        ? "text-orange-300 after:w-full"
                        : "after:w-0 hover:text-orange-300 hover:after:w-full"
                    }
                  `}
                >
                  INFOS PRATIQUES
                </Link>

                <span
                  className={`
                    ml-1
                    flex
                    items-center
                    transition-colors
                    ${
                      activeNav
                        ? "text-orange-300"
                        : "text-white"
                    }
                  `}
                >
                  {dropdownOpen ? (
                    <MdKeyboardArrowUp size={20} />
                  ) : (
                    <MdKeyboardArrowDown size={20} />
                  )}
                </span>
              </div>

              {/* DROPDOWN */}
              {dropdownOpen && (
                <div
                  className="
                    absolute
                    left-0
                    top-full
                    min-w-[220px]
                    pt-5
                  "
                >
                  <div
                    className="
                      border
                      border-slate-200
                      bg-white
                      py-2
                      text-slate-900
                      shadow-xl
                    "
                  >
                    <ul>
                      <li>
                        <Link
                          href="/infos/evenements"
                          className="
                            block
                            whitespace-nowrap
                            px-5
                            py-3
                            font-[SharpGITB]
                            text-sm
                            transition-colors
                            hover:bg-slate-100
                            hover:text-orange-500
                          "
                        >
                          Événements
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/infos/horairestarifs"
                          className="
                            block
                            whitespace-nowrap
                            px-5
                            py-3
                            font-[SharpGITB]
                            text-sm
                            transition-colors
                            hover:bg-slate-100
                            hover:text-orange-500
                          "
                        >
                          Horaires / Tarifs
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/infos/bureau"
                          className="
                            block
                            whitespace-nowrap
                            px-5
                            py-3
                            font-[SharpGITB]
                            text-sm
                            transition-colors
                            hover:bg-slate-100
                            hover:text-orange-500
                          "
                        >
                          Le bureau
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/infos/contact"
                          className="
                            block
                            whitespace-nowrap
                            px-5
                            py-3
                            font-[SharpGITB]
                            text-sm
                            transition-colors
                            hover:bg-slate-100
                            hover:text-orange-500
                          "
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            {/* ACTUALITES */}
            <li>
              <Link
                href="/news"
                className="
                  relative
                  font-[SharpGITB]
                  tracking-wide
                  transition-colors
                  duration-200

                  after:absolute
                  after:-bottom-2
                  after:left-0
                  after:h-[2px]
                  after:w-0
                  after:bg-orange-400
                  after:transition-all
                  after:duration-300

                  hover:text-orange-300
                  hover:after:w-full
                "
              >
                ACTUALITÉS
              </Link>
            </li>

            {/* GALERIE */}
            <li>
              <Link
                href="/photos"
                className="
                  relative
                  font-[SharpGITB]
                  tracking-wide
                  transition-colors
                  duration-200

                  after:absolute
                  after:-bottom-2
                  after:left-0
                  after:h-[2px]
                  after:w-0
                  after:bg-orange-400
                  after:transition-all
                  after:duration-300

                  hover:text-orange-300
                  hover:after:w-full
                "
              >
                GALERIE
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <nav
          className="
            fixed
            inset-0
            z-50
            flex
            min-h-screen
            flex-col
            overflow-y-auto
            bg-slate-950
            px-[5%]
            pb-10
            pt-24
            text-white
          "
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="
              absolute
              right-[5%]
              top-7
              flex
              h-11
              w-11
              items-center
              justify-center
              text-white
              transition-colors
              hover:text-orange-400
            "
            aria-label="Fermer le menu"
          >
            <MdClose size={32} />
          </button>

          {/* MOBILE LOGO */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute left-[5%] top-5"
          >
            <Image
              src="/images/obadlogo2.png"
              alt="Logo Oissel Badminton"
              width={100}
              height={100}
              className="h-auto w-24 object-contain"
            />
          </Link>

          <ul
            className="
              flex
              flex-col
              gap-7
              font-[SharpGITB]
              text-2xl
            "
          >
            {/* LE CLUB */}
            <li>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="
                  transition-colors
                  hover:text-orange-400
                "
              >
                LE CLUB
              </Link>
            </li>

            {/* MOBILE INFOS PRATIQUES */}
            <li>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  text-left
                  transition-colors
                  hover:text-orange-400
                "
              >
                <span>INFOS PRATIQUES</span>

                {dropdownOpen ? (
                  <MdKeyboardArrowUp size={28} />
                ) : (
                  <MdKeyboardArrowDown size={28} />
                )}
              </button>

              {dropdownOpen && (
                <ul
                  className="
                    mt-5
                    flex
                    flex-col
                    gap-4
                    border-l
                    border-slate-700
                    pl-5
                    text-lg
                    text-slate-300
                  "
                >
                  {[
                    {
                      label: "Événements",
                      slug: "evenements",
                    },
                    {
                      label: "Horaires / Tarifs",
                      slug: "horairestarifs",
                    },
                    {
                      label: "Le bureau",
                      slug: "bureau",
                    },
                    {
                      label: "Contact",
                      slug: "contact",
                    },
                  ].map(({ label, slug }) => (
                    <li key={slug}>
                      <Link
                        href={`/infos/${slug}`}
                        onClick={() => {
                          setDropdownOpen(false);
                          setMobileMenuOpen(false);
                        }}
                        className="
                          block
                          py-1
                          transition-colors
                          hover:text-orange-400
                        "
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* ACTUALITES */}
            <li>
              <Link
                href="/news"
                onClick={() => setMobileMenuOpen(false)}
                className="
                  transition-colors
                  hover:text-orange-400
                "
              >
                ACTUALITÉS
              </Link>
            </li>

            {/* GALERIE */}
            <li>
              <Link
                href="/photos"
                onClick={() => setMobileMenuOpen(false)}
                className="
                  transition-colors
                  hover:text-orange-400
                "
              >
                GALERIE
              </Link>
            </li>
          </ul>

          {/* PETIT FOOT MOBILE */}
          <div
            className="
              mt-auto
              border-t
              border-slate-800
              pt-8
              text-xs
              tracking-[0.14em]
              text-slate-500
            "
          >
            OISSEL BADMINTON CLUB
          </div>
        </nav>
      )}
    </header>
  );
}