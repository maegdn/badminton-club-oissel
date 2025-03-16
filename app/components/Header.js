"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative flex flex-row bg-black w-full justify-evenly mb-12 text-white shadow-md">
      <div className="flex items-center">
        <Image
          className="logo"
          src="/images/OBADLOGO.png"
          alt="Obad Logo"
          width={120}
          height={120}
        />
      </div>
      <div className="hidden md:block font-bold text-center">
        <h1>CLUB DE BADMINTON DE OISSEL</h1>
      </div>

      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <GiHamburgerMenu size={30} />
          ) : (
            <GiHamburgerMenu size={30} />
          )}
        </button>
      </div>

      <div className="flex flex-row items-center">
        <nav className="flex flex-row">
          <ul className="flex flex-row gap-8">
            <li>
              <Link href="/" className="hover:text-red-600">
                Le club
              </Link>
            </li>
            <div></div>
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
                <div className="absolute top-full bg-white shadow-black py-2 w-40 border text-black border-black ">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/infos/horaires">Horaires</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/infos/tarifs">Tarifs</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/infos/contact">Contact</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/infos/bureau">Le bureau</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link href="/news" className="hover:text-red-600">
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
    </header>
  );
}
