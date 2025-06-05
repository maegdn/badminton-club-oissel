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
      if (window.scrollY > 140) {
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
          ? "relative z-10 w-full text-white flex justify-center items-center h-32 transition-all duration-500"
          : "relative z-10 w-full text-white flex justify-between md:justify-center md:items-center h-30 bg-slate-900 transition-all duration-500 ease-in"
      }
    >
      {!scrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent pointer-events-none z-0" />
        )}

      <div className="relative z-10 flex justify-between w-10/12 md:w-4/5">
        <div className="z-10 flex items-center">
          <Image
            className=" md:block logo mr-6"
            src={!scrolled ? "/images/obadlogo2.png" : "/images/obadlogo2.png"}
            alt="Logo desktop"
            width={150}
            height={150}
            priority
          />
        </div>

        <div className="md:hidden flex flex-row   items-center justify-center">

          <button
            className="flex justify-center items-center pb-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </button>
        </div>

        <div className="flex flex-row items-center justify-between">
          <nav className="hidden md:flex">
            <ul className="flex flex-row gap-6">
              <li>
                <Link
                  href="/"
                  className={`pb-1.5 border-b-2 border-transparent font-[HemiHead] ${
                    scrolled
                      ? "hover:border-b-white"
                      : "hover:border-b-white"
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
                    className={`${!scrolled ? "text-white-700" : ""} font-[HemiHead]`}
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
                        <Link href="/infos/evenements" className="font-[HemiHead]">Événements</Link>
                      </li>
                      <li className="py-2 px-4 hover:bg-blue-200 w-full whitespace-nowrap">
                        <Link href="/infos/horairestarifs" className="font-[HemiHead]">
                          Horaires / Tarifs
                        </Link>
                      </li>

                      <li className="py-2 px-4 hover:bg-blue-200 w-full whitespace-nowrap">
                        <Link href="/infos/bureau" className="font-[HemiHead]">Le bureau</Link>
                      </li>
                      <li className="py-2 px-4 hover:bg-blue-200 w-full whitespace-nowrap">
                        <Link href="/infos/contact" className="font-[HemiHead]">Contact</Link>
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
                      : "hover:border-b-white"
                  } font-[HemiHead]`}
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
                      : "hover:border-b-white"
                  } font-[HemiHead]`}
                >
                  Gallerie
                </Link>
              </li>
              {/* <li className="flex flex-row">
                <div>
                  <Link
                    href="/inscription"
                    className={`pb-1.5 border-b-2 border-transparent ${
                      scrolled
                        ? "hover:border-b-white"
                        : "hover:border-b-white"
                    } font-[HemiHead]`}
                  >
                    Inscription
                  </Link>
                </div>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>

      {mobileMenuOpen && (
<nav className="fixed top-0 left-0 w-screen h-screen bg-slate-900 px-6 py-10 pt-25 z-50 flex flex-col items-start justify-start overflow-y-auto  transition-transform duration-500 ease-in-out">
          <button
  onClick={() => setMobileMenuOpen(false)}
  className="absolute top-6 right-6 text-3xl bg-white text-slate-900"
  aria-label="Close menu"
>
  <MdClose />
</button>

          <ul className="flex flex-col gap-8 text-2xl font-[HemiHead]">
            <li>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:border-b-2 hover:border-white pb-1.5"
              >
                Le club
              </Link>
            </li>
            <li>
              <div
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <Link
                  href="/infos"
                  className={` border-b-2 transition-all duration-200 ${
                    dropdownOpen ? "border-white" : "border-transparent hover:border-blue-400"
                  }`}
                  onClick={(e) => {
                    e.preventDefault(); // prevent Link default on parent click
                    setDropdownOpen(!dropdownOpen);
                  }}
                >
                  Infos pratiques
                </Link>
                {dropdownOpen ? <MdKeyboardArrowUp className="pb-1.5"/> : <MdKeyboardArrowDown className="pb-1.5"/>}
              </div>
              {dropdownOpen && (
                <ul className="pt-4 ml-4 mt-2 space-y-4  pl-4">
                  {[
                    { label: "Événements", slug: "evenements" },
                    { label: "Horaires / Tarifs", slug: "horairestarifs" },
                    { label: "Le bureau", slug: "bureau" },
                    { label: "Contact", slug: "contact" }
                  ].map(({ label, slug }) => (
                    <li key={slug}>
                      <Link
                        href={`/infos/${slug}`}
                        onClick={() => {
                          setDropdownOpen(false);
                          setMobileMenuOpen(false);
                        }}
                        className="hover:border-b-2 hover:border-white pb-1.5 py-2"
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
                onClick={() => setMobileMenuOpen(false)}
                className="hover:border-b-2 hover:border-white pb-1.5"
              >
                Actualités
              </Link>
            </li>
            <li>
              <Link
                href="/photos"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:border-b-2 hover:border-white pb-1.5"
              >
                Galerie
              </Link>
            </li>
          </ul>
        </nav>
      
      )
      
      }
    </header>
  );
}
