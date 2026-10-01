"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import Header3 from "../components/Header3";
import SEO from "../components/SEO";

import { useEffect, useState } from "react";
import { client } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";

export default function News() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "article"] | order(publishedAt desc) {
          _id,
          title,
          content,
          description,
          "imageUrl": image.asset->url,
          slug,
          publishedAt,
        }`
      )
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header3 />

      <SEO
        title="Actualités du club"
        url="https://oissel-badminton-club.vercel.app/news"
        description="Retrouvez les dernières actualités du club de badminton de Oissel."
      />

      <main className="flex-1">
        {/* =========================
            INTRO
        ========================== */}
        <section className="mx-auto w-[90%] max-w-7xl pt-16 md:pt-24">
          

          <h1
  className="
    w-full
    text-center
    font-[SharpGITB]
    !text-3xl
    md:!text-6xl
    leading-[0.95]
    tracking-tight
  "
>
  <span className="text-red-400">/ </span>
  ACTUALITÉ DU CLUB
</h1>
<p className="mx-auto mt-6 max-w-2xl text-center leading-7 text-slate-600">
  Suivez les dernières nouvelles, événements, résultats et temps
  forts d'Oissel Badminton.
</p>
        </section>

        {/* =========================
            ACTUALITÉS
        ========================== */}
        <section className="mx-auto my-16 w-[90%] max-w-7xl md:my-24">
          <div className="flex flex-col gap-16 md:gap-24">
            {posts.map((post, index) => {
              const imageLeft = index % 2 === 0;

              // Exemple :
              // 23 posts
              // index 0 = 23
              // index 1 = 22
              // ...
              // index 22 = 01
              const postNumber = posts.length - index;

              return (
                <article
                  key={post._id}
                  className="
                    grid
                    grid-cols-1
                    items-center
                    gap-7
                    md:grid-cols-2
                    md:gap-12
                    lg:gap-16
                  "
                >
                  {/* =========================
                      IMAGE
                  ========================== */}
                  {post.imageUrl && (
                    <div
                      className={`
                        relative
                        aspect-[4/3]
                        w-full
                        overflow-hidden
                        md:aspect-[16/10]

                        ${
                          imageLeft
                            ? "md:order-1"
                            : "md:order-2"
                        }
                      `}
                    >
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-500
                          hover:scale-[1.03]
                        "
                      />

                      {/* DATE */}
                      {post.publishedAt && (
                        <div
                          className={`
                            absolute
                            top-4
                            px-3
                            py-2
                            text-[10px]
                            font-bold
                            tracking-[0.08em]

                            ${
                              imageLeft
                                ? "left-4 bg-red-400 text-slate-950"
                                : "right-4 bg-slate-900 text-white"
                            }
                          `}
                        >
                          {new Date(
                            post.publishedAt
                          )
                            .toLocaleDateString(
                              "fr-FR",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )
                            .toUpperCase()}
                        </div>
                      )}
                    </div>
                  )}

                  {/* =========================
                      CONTENU
                  ========================== */}
                  <div
                    className={`
                      flex
                      flex-col
                      justify-center

                      ${
                        imageLeft
                          ? "md:order-2"
                          : "md:order-1"
                      }
                    `}
                  >
                    {/* NUMÉRO ACTUALITÉ */}
                    <p className="text-[11px] font-bold tracking-[0.17em] text-slate-400 md:text-xs">
                      <span className="text-red-400">
                        {String(postNumber).padStart(
                          2,
                          "0"
                        )}{" "}
                        /
                      </span>{" "}
                      ACTUALITÉ
                    </p>

                    {/* TITRE */}
                    <h2
                      className="
                        mt-3
                        font-[SharpGITB]
                        text-2xl
                        leading-tight
                        md:text-4xl
                        md:leading-[0.95]
                      "
                    >
                      {post.title}
                    </h2>

                    {/* DESCRIPTION */}
                    {post.description ? (
                      <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                        {post.description}
                      </p>
                    ) : (
                      <div
                        className="
                          mt-5
                          line-clamp-4
                          text-sm
                          leading-7
                          text-slate-600
                          md:text-base
                        "
                      >
                        <PortableText
                          value={post.content}
                        />
                      </div>
                    )}

                    {/* LIEN */}
                    <div className="mt-7">
                      <Link
                        href={`/news/${post.slug.current}`}
                        className="
                          inline-block
                          border-b-2
                          border-red-400
                          pb-1
                          font-[SharpGITB]
                          text-xs
                          transition-colors
                          hover:text-red-500
                          md:text-sm
                        "
                      >
                        LIRE L&apos;ARTICLE →
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* =========================
            AUCUNE ACTUALITÉ
        ========================== */}
        {posts.length === 0 && (
          <section className="mx-auto mb-24 w-[90%] max-w-7xl">
            <div className="border-y border-slate-200 py-16 text-center">
              <p className="font-[SharpGITB] text-2xl">
                Aucune actualité pour le
                moment.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Revenez bientôt découvrir les
                nouvelles du club.
              </p>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}