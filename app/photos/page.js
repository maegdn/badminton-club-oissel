"use client";

import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Header3 from "../components/Header3";
import SEO from "../components/SEO";

import Image from "next/image";
import { CgClose } from "react-icons/cg";

import { client } from "../../lib/sanity";

export default function Photos() {
  const [clubPhotos, setClubPhotos] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "photo"]{
          _id,
          "imageUrl": photo.asset->url
        }`
      )
      .then((data) => {
        setClubPhotos(data);
      });
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header3 />

      <SEO
        title="Galerie photo du club"
        url="https://oissel-badminton-club.vercel.app/photos"
        description="Photos prises au club de badminton de Oissel. Tous droits réservés."
      />

      <main className="flex-1 py-16 md:py-24">
        {/* TITLE */}
        <section className="mx-auto w-[90%] max-w-7xl">
          <h1
            className="
              w-full
              text-left
              font-[SharpGITB]
              !text-3xl
              leading-[0.95]
              tracking-tight
              md:text-center
              md:!text-6xl
            "
          >
            <span className="text-yellow-300">/ </span>
            GALERIE DU CLUB
          </h1>
        </section>

        {/* PHOTOS */}
        <section className="mx-auto mt-12 w-[90%] max-w-7xl md:mt-16">
          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
            "
          >
            {clubPhotos.map((photo, index) => (
              <button
                type="button"
                key={photo._id}
                onClick={() => setPhotoIndex(index)}
                className="
                  group
                  relative
                  aspect-[4/3]
                  w-full
                  cursor-pointer
                  overflow-hidden
                  bg-slate-100
                "
                aria-label={`Ouvrir la photo ${index + 1}`}
              >
                <Image
                  src={photo.imageUrl}
                  alt={`Photo du club ${index + 1}`}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition-colors
                    duration-300
                    group-hover:bg-black/10
                  "
                />
              </button>
            ))}
          </div>
        </section>

        {/* MODAL */}
        {photoIndex !== null && (
          <div
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/90
            "
          >
            {/* IMAGE */}
            <div className="relative h-full w-full">
              <Image
                src={clubPhotos[photoIndex].imageUrl}
                alt={`Photo du club agrandie ${photoIndex + 1}`}
                fill
                className="object-contain p-5 md:p-12"
                priority
              />
            </div>

            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setPhotoIndex(null)}
              className="
                absolute
                right-5
                top-5
                z-[110]
                flex
                h-11
                w-11
                items-center
                justify-center
                bg-white
                text-slate-900
                transition-colors
                hover:bg-yellow-300
              "
              aria-label="Fermer la photo"
            >
              <CgClose size={25} />
            </button>

            {/* PREVIOUS */}
            {photoIndex > 0 && (
              <button
                type="button"
                onClick={() => setPhotoIndex(photoIndex - 1)}
                className="
                  absolute
                  left-3
                  top-1/2
                  z-[110]
                  flex
                  h-12
                  w-12
                  -translate-y-1/2
                  items-center
                  justify-center
                  bg-black/40
                  text-4xl
                  text-white
                  transition-colors
                  hover:bg-black/70
                  md:left-6
                "
                aria-label="Photo précédente"
              >
                ‹
              </button>
            )}

            {/* NEXT */}
            {photoIndex < clubPhotos.length - 1 && (
              <button
                type="button"
                onClick={() => setPhotoIndex(photoIndex + 1)}
                className="
                  absolute
                  right-3
                  top-1/2
                  z-[110]
                  flex
                  h-12
                  w-12
                  -translate-y-1/2
                  items-center
                  justify-center
                  bg-black/40
                  text-4xl
                  text-white
                  transition-colors
                  hover:bg-black/70
                  md:right-6
                "
                aria-label="Photo suivante"
              >
                ›
              </button>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}