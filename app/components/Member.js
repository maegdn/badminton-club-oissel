"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Member({ name, role, imageUrl, imageUrlHovered }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-48 h-52"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" absolute top-24 left-4 bg-white border-2 z-4 px-3">
        <h3
          className={`font-bold mb-0 ${
            isHovered ? "text-slate-600" : "text-black"
          }`}
        >
          {name}
        </h3>
        <p className=" text-black -mt-2">{role}</p>
      </div>
      <div className="absolute bottom-7 left-3 w-56 h-66">
        <Image
          src={`${!isHovered ? imageUrl : imageUrlHovered}`}
          alt={name}
          fill
          className="top-16 object-contain overflow-hidden z-1 "
        />
        <div className="relative top-60 left-3">
          <Link href={`https://wa.me/${process.env.PHONE_NUMBER_MG}`}>
            <img
              src="/images/WhatsAppButtonWhiteSmall.png"
              alt="Chat on WhatsApp"
              height={20}
              width={200}
            />
          </Link>
        </div>
      </div>

      <div
        className={`flex absolute bottom-12 left-3 w-56 h-46 rounded-t-xl ${
          isHovered ? "bg-blue-200" : "bg-gray-100"
        } opacity-100 p-3`}
      ></div>
    </div>
  );
}
