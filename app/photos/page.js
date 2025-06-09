"use client";

import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Header3 from "../components/Header3";
import SEO from "../components/SEO";
import Image from "next/image";
import { CgClose } from "react-icons/cg";
import { client } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";

export default function Photos() {
  const [clubPhotos, setClubPhotos] = useState([]);
  const [sizedUpPhoto, setSizedUpPhoto] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(null);

  function openModal() {}

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
        url="https://oissel-badminton-club.vercel.app/infos/contact"
        description="Photos prises au club de badminton de Oissel. Tous droits réservés"
      />
      <main className="flex-1 flex flex-col items-center justify-center w-full pt-16 pb-12 ">
        <h1 className="font-[HemiHead]">GALERIE DU CLUB</h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 my-12 text-justify">
          <div className="flex flex-wrap justify-center gap-5 ">
            {clubPhotos.map((photo, index) => (
              <div
                key={photo._id}
                className="relative w-[350px] h-[250px] "
                onClick={() =>
                  //   setSizedUpPhoto(photo.imageUrl) &&
                  setPhotoIndex(index)
                }
              >
                <Image
                  src={photo.imageUrl}
                  alt="Photo du club"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {
          // sizedUpPhoto
          photoIndex  !== null && (
            <div className="fixed inset-0 flex justify-center align-center  z-10">
              <div className="relative w-[100vw] h-[100vh] bg-black/85 border-black ">
                <Image
                  src={clubPhotos[photoIndex].imageUrl}
                  alt="Photo sélectionnée aggrandie"
                  fill
                  className="object-contain p-12  "
                />
              </div>

              <button
                className="absolute flex align-center justify-center top-4 right-4 text-black bg-blue-200 rounded z-12"
                onClick={() =>
                  // setSizedUpPhoto(null) &&
                  setPhotoIndex(null)
                }
              >
                <CgClose size={30} />
              </button>

              {photoIndex > 0 && (
                <button
                  onClick={() => setPhotoIndex(photoIndex - 1)}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white z-50 text-4xl"
                >
                  ‹
                </button>
              )}

              {photoIndex < clubPhotos.length - 1 && (
                <button
                  onClick={() => setPhotoIndex(photoIndex + 1)}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white z-50 text-4xl"
                >
                  ›
                </button>
              )}
            </div>
          )
        }
      </main>
      <Footer />
    </div>
  );
}
