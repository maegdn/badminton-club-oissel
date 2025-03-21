"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdMenu,
  MdClose,
} from "react-icons/md";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative flex flex-row bg-neutral-800 w-full mb-12 text-white shadow-md justify-center">
      <div className="flex justify-evenly items-center w-4/5">
        <div className="flex items-center">
          <Image
            className="logo"
            src="/images/OBADLOGO.png"
            alt="Obad Logo"
            width={120}
            height={120}
          />
        </div>
        <div className="hidden md:flex font-bold text-center items-center">
          <h1>CLUB DE BADMINTON DE OISSEL</h1>
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
                <Link href="/" className=" hover:text-red-600">
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
                    className={`${activeNav ? "text-red-600" : ""}`}
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
                  <div className="absolute top-full bg-white shadow-black min-w-full border text-black border-black">
                    <ul>
                      <li className="py-2 px-4 hover:bg-gray-200 w-full whitespace-nowrap">
                        <Link href="/infos/horairestarifs">
                          Horaires / Tarifs
                        </Link>
                      </li>

                      <li className="py-2 px-4 hover:bg-gray-200 w-full whitespace-nowrap">
                        <Link href="/infos/bureau">Le bureau</Link>
                      </li>
                      <li className="py-2 px-4 hover:bg-gray-200 w-full whitespace-nowrap">
                        <Link href="/infos/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link href="/news" className="hover:text-red-500">
                  Actualités
                </Link>
              </li>
              <li className="flex flex-row">
                <div>
                  <Link href="/inscription" className="hover:text-red-600">
                    Inscription
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-neutral-800 w-full px-4 py-6">
          <ul className="flex flex-col gap-2 font-bold">
            <li>
              <Link
                href="/"
                className="hover:text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Le club
              </Link>
            </li>
            <li>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <Link
                  href="/infos"
                  className={`${dropdownOpen ? "text-red-600" : ""}`}
                >
                  Infos pratiques
                </Link>
                {dropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </div>

              {dropdownOpen && (
                <ul className="ml-4 mt-2 space-y-1 border-l-2 border-gray-600 pl-4">
                  {[
                    { label: "Horaires / Tarifs", slug: "horairestarifs" },
                    { label: "Contact", slug: "contact" },
                    { label: "Bureau", slug: "bureau" },
                  ].map(({ label, slug }) => (
                    <li key={slug} className="hover:text-red-600">
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
