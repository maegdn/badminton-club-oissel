"use client";

import React, { useState } from "react";
import Image from "next/image";

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
            isHovered ? "text-blue-700" : "text-black"
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
      </div>

      <div
        className={`flex absolute bottom-12 left-3 w-56 h-46 rounded-t-xl ${
          isHovered ? "bg-gray-200" : "bg-gray-300"
        } opacity-100 p-3`}
      ></div>

      {/* <div className="flex border-1 justify-center items-center rounded-full h-8 w-8 ml-6 mt-2">
              <GoMail size={20} />
            </div> */}
    </div>
  );
}
