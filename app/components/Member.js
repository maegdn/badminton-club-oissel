"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Member({ name, role, imageUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-48 h-52"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" absolute top-24 left-4 bg-white border-2 z-4 px-3">
        <h3 className="font-bold text-black mb-0">Elise B.</h3>
        <p className=" text-black -mt-2">{role}</p>
      </div>
      <div className="absolute bottom-12 left-3 w-56 h-56">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover overflow-hidden z-1 "
        />
      </div>
      <div
        className={`flex absolute bottom-12 left-3 w-56 h-36 ${
          isHovered ? "bg-amber-300" : "bg-blue-200"
        } opacity-100 p-3`}
      ></div>

      {/* <div className="flex border-1 justify-center items-center rounded-full h-8 w-8 ml-6 mt-2">
              <GoMail size={20} />
            </div> */}
    </div>
  );
}
