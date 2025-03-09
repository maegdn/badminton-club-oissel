"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(false);

  return (
    <header className="flex flex-row bg-gray-300 w-full justify-evenly">
      <div className="flex flex-row items-center">
        <Image
          className="logo"
          src="/images/OBADLOGO.png"
          alt="Obad Logo"
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-row items-center font-bold">
        <h1>CLUB DE BADMINTON DE OISSEL</h1>
      </div>
      <div className="flex flex-row items-center">
        <nav className="flex flex-row">
          <ul className="flex flex-row gap-8">
            <li>
              <Link href="/" className="hover:text-red-600">
                Le club
              </Link>
            </li>
            <li
              className="flex relative items-center cursor-pointer"
              onMouseEnter={(e) => {
                setDropdownOpen(true);
                setActiveNav(true);
              }}
              onMouseLeave={(e) => {
                setDropdownOpen(false);
                setActiveNav(false);
              }}
            >
              <Link
                href="/infos"
                className={`${activeNav ? "text-red-600" : ""}`}
              >
                Infos pratiques
              </Link>
              <span className="flex flex-row items-center">
                {dropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </span>
              {dropdownOpen && (
                <ul className="absolute left-0 top-full bg-white shadow-lg rounded-lg py-2 w-40 border border-gray-200">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/infos/horaires">Horaires</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/infos/tarifs">Tarifs</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/infos/contact">Contact</Link>
                  </li>
                </ul>
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
