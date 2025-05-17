"use client";

import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Header3 from "../components/Header3";
import SEO from "../components/SEO";
import Image from "next/image";

import { client } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";

export default function Photos() {
  const [clubPhotos, setClubPhotos] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "photo"]{
            _id,
            "imageUrl": photo.asset->url,

        }
    `
      )
      .then((data) => {
        setClubPhotos(data);
        console.log("Data:", data);
      });
  }, []);
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header3 />
      <SEO
        title="Gallerie photo du club"
        url="https://badminton-club-oissel.vercel.app/photos/"
        description="Photos prises au club de badminton de Oissel. Tous droits réservés"
      />
      <main className="flex-1 flex flex-col items-center justify-center w-full pt-16 pb-12">
        <h1 className="font-[Gabarito]">GALLERIE DU CLUB</h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 my-12 text-justify">
          <div className="flex flex-wrap justify-center gap-5 ">
            {clubPhotos.map((photo) => (
              <div key={photo._id} className="relative w-[350px] h-[250px]">
                <Image
                  src={photo.imageUrl}
                  alt="Photo du club"
                  fill
                  className="object-cover "
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
