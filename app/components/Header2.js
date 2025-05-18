"use client";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdMenu,
  MdClose
} from "react-icons/md";

export default function Header2() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={
        !scrolled
          ? "relative z-10 w-full text-black flex justify-center items-center h-32 transition-all duration-500"
          : "relative z-10 w-full text-white flex justify-center items-center h-30 bg-slate-800 transition-all duration-500 ease-in"
      }
    >
      {!scrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-transparent pointer-events-none z-0" />
      )}

      <div className="relative z-10 flex justify-between items-center w-3/5">
        <div className="z-10 flex items-center">
          <Image
            className=" md:block logo "
            src={!scrolled ? "/images/obad1.png" : "/images/obadlogo2.png"}
            alt="Logo desktop"
            width={150}
            height={150}
            priority
          />
        </div>

        <div className="md:hidden flex flex-row gap-2 ml-4 items-center justify-center">
          <h3 className="text-lg font-bold">Menu</h3>

          <button
            className="flex justify-center items-center pb-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </button>
        </div>

        <div className="flex flex-row items-center justify-evenly">
          <nav className="hidden md:flex">
            <ul className="flex flex-row gap-6">
              <li>
                <Link
                  href="/"
                  className={`pb-1.5 border-b-2 border-transparent ${
                    scrolled
                      ? "hover:border-b-white"
                      : "hover:border-b-slate-700"
                  }`}
                >
                  Le club
                </Link>
              </li>
              <li
                className="relative"
                onMouseEnter={(e) => {
                  setDropdownOpen(true);
                  setActiveNav(true);
                }}
                onMouseLeave={(e) => {
                  setDropdownOpen(false);
                  setActiveNav(false);
                }}
              >
                <div className="flex flex-row items-center">
                  <Link
                    href="/infos"
                    className={`${!scrolled ? "text-slate-700" : ""}`}
                  >
                    Infos pratiques
                  </Link>
                  <span className="flex flex-row items-center pl-1">
                    {dropdownOpen ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </span>
                </div>
                {dropdownOpen && (
                  <div className="absolute top-full bg-white shadow-black min-w-full border text-black border-red">
                    <ul>
                      <li className="py-2 px-4 hover:bg-blue-200 w-full whitespace-nowrap">
                        <Link href="/infos/fonctionnement">Fonctionnement</Link>
                      </li>
                      <li className="py-2 px-4 hover:bg-blue-200 w-full whitespace-nowrap">
                        <Link href="/infos/horairestarifs">
                          Horaires / Tarifs
                        </Link>
                      </li>

                      <li className="py-2 px-4 hover:bg-blue-200 w-full whitespace-nowrap">
                        <Link href="/infos/bureau">Le bureau</Link>
                      </li>
                      <li className="py-2 px-4 hover:bg-blue-200 w-full whitespace-nowrap">
                        <Link href="/infos/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="/news"
                  className={`pb-1.5 border-b-2 border-transparent ${
                    scrolled
                      ? "hover:border-b-white"
                      : "hover:border-b-slate-700"
                  }`}
                >
                  Actualités
                </Link>
              </li>

              <li>
                <Link
                  href="/photos"
                  className={`pb-1.5 border-b-2 border-transparent ${
                    scrolled
                      ? "hover:border-b-white"
                      : "hover:border-b-slate-700"
                  }`}
                >
                  Gallerie
                </Link>
              </li>
              <li className="flex flex-row">
                <div>
                  <Link
                    href="/inscription"
                    className={`pb-1.5 border-b-2 border-transparent ${
                      scrolled
                        ? "hover:border-b-white"
                        : "hover:border-b-slate-700"
                    }`}
                  >
                    Inscription
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-none px-6 py-6 w-4/5 flex ">
          <ul className="flex flex-col gap-2 font-bold">
            <li>
              <Link
                href="/"
                className="hover:border-b-2 "
                onClick={() => setMobileMenuOpen(false)}
              >
                Le club
              </Link>
            </li>
            <li>
              <div
                className="flex gap-3 items-center cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <Link
                  href="/infos"
                  className={`border-b-2 transition-all duration-200 ${
                    dropdownOpen
                      ? "border-white"
                      : "border-transparent hover:border-red-400"
                  }`}
                >
                  Infos pratiques
                </Link>
                {dropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </div>

              {dropdownOpen && (
                <ul className="ml-4 mt-2 space-y-1 border-l-2 border-white pl-4">
                  {[
                    { label: "Horaires / Tarifs", slug: "horairestarifs" },
                    { label: "Contact", slug: "contact" },
                    { label: "Bureau", slug: "bureau" }
                  ].map(({ label, slug }) => (
                    <li
                      key={slug}
                      className="pb-1.5 border-b-2 border-transparent hover:border-b-white"
                    >
                      <Link
                        href={`/infos/${slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/news"
                className="hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Actualités
              </Link>
            </li>
            <li>
              <Link
                href="/inscription"
                className="hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inscription
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
