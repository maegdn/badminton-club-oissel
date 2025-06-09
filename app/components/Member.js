"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";



export default function Member({ name, role, imageUrl, imageUrlHovered }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-48 h-52"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" absolute top-24 left-2 bg-white border-2 z-4 px-3">
        <h3
          className={`font-bold mb-0 ${
            isHovered ? "text-slate-600" : "text-black"
          } font-[HemiHead]`}
        >
          {name}
        </h3>
        <p className=" text-black -mt-2">{role}</p>
      </div>
      <div className="absolute flex gap-2 bottom-7  w-56 h-66">
        <Image
          src={`${!isHovered ? imageUrl : imageUrlHovered}`}
          alt={name}
          fill
          className="top-16 object-contain overflow-hidden z-1 "
        />
        <div className="relative top-60 w-full justify-center">
          <Link
            href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER_MG}`}
          >
            <button className="flex bg-green-400 text-black items-center rounded p-2 px-5 mt-3 w-full "><FaWhatsapp 
              alt="Chat on WhatsApp"
              height={15}
              width={15}
              className="mr-2 items-center justify-center"/> Whatsapp</button>
          
          </Link>
        </div>
        <div className="relative top-60 w-full justify-center">
          <Link
            href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER_MG}`}
          >
            <button className="flex w-full bg-slate-700 text-white rounded p-2 mt-3 items-center justify-center"><FiMail
              height={15}
              width={15}
              className="mr-2 items-center justify-center text-white" />
             Mail</button>
          
          </Link>
        </div>
      </div>

      <div
        className={`flex absolute bottom-12  w-56 h-46 rounded-t-xl ${
          isHovered ? "bg-blue-200" : "bg-gray-100"
        } opacity-100 p-3`}
      ></div>
    </div>
  );
}
