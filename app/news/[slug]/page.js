import { client } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";

import Link from "next/link";
import Footer from "../../components/Footer";
import Header3 from "../../components/Header3";

import { IoArrowBackSharp } from "react-icons/io5";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "article"] { "slug": slug.current }`
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }) {
  const post = await client.fetch(
    `*[_type == "article" && slug.current == $slug][0]{
      title,
      content,
      publishedAt,
      "imageUrl": image.asset->url
    }`,
    { slug: params.slug }
  );

  if (!post) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header3 />

      <main className="flex-1">
        {/* =========================
            ARTICLE HEADER
        ========================== */}
        <section className="mx-auto w-[90%] max-w-7xl pt-12 md:pt-20">
          {/* RETOUR */}
          <Link
            href="/news"
            className="
              inline-flex
              items-center
              gap-2
              text-xs
              font-bold
              tracking-[0.08em]
              text-slate-500
              transition-colors
              hover:text-orange-500
            "
          >
            <IoArrowBackSharp size={18} />
            RETOUR AUX ACTUALITÉS
          </Link>

          {/* LABEL */}
          <p className="mt-10 text-[11px] font-bold tracking-[0.17em] text-slate-500 md:text-xs">
            <span className="text-orange-400">/</span> ACTUALITÉ DU CLUB
          </p>

          {/* TITRE */}
          <h1
            className="
              mt-3
              max-w-5xl
              font-[SharpGITB]
              text-4xl
              leading-[0.95]
              tracking-tight

              md:text-6xl
              lg:text-7xl
            "
          >
            {post.title}
          </h1>

          {/* DATE */}
          {post.publishedAt && (
            <p className="mt-6 text-sm font-medium text-slate-500">
              {new Date(post.publishedAt)
                .toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })
                .toUpperCase()}
            </p>
          )}
        </section>

        {/* =========================
            IMAGE HERO
        ========================== */}
        {post.imageUrl && (
          <section className="mx-auto mt-10 w-[90%] max-w-7xl md:mt-14">
            <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/8]">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
          </section>
        )}

        {/* =========================
            CONTENU ARTICLE
        ========================== */}
        <section
          className="
            mx-auto
            my-12
            w-[90%]
            max-w-3xl

            md:my-16
          "
        >
          <article
            className="
              text-sm
              leading-7
              text-slate-700

              md:text-base
              md:leading-8

              [&_h2]:mt-12
              [&_h2]:font-[SharpGITB]
              [&_h2]:text-3xl
              [&_h2]:leading-tight
              [&_h2]:text-slate-900

              [&_h3]:mt-10
              [&_h3]:font-[SharpGITB]
              [&_h3]:text-2xl
              [&_h3]:text-slate-900

              [&_p]:mt-6

              [&_strong]:font-bold
              [&_strong]:text-slate-900

              [&_ul]:mt-6
              [&_ul]:space-y-2
              [&_ul]:pl-5

              [&_ol]:mt-6
              [&_ol]:space-y-2
              [&_ol]:pl-5

              [&_li]:list-disc

              [&_a]:font-semibold
              [&_a]:text-orange-500
              [&_a]:underline
              [&_a]:underline-offset-4

              [&_blockquote]:my-8
              [&_blockquote]:border-l-4
              [&_blockquote]:border-orange-400
              [&_blockquote]:pl-5
              [&_blockquote]:italic
              [&_blockquote]:text-slate-600
            "
          >
            <PortableText value={post.content} />
          </article>
        </section>

        {/* =========================
            FIN ARTICLE
        ========================== */}
        <section className="mx-auto mb-20 w-[90%] max-w-3xl md:mb-28">
          <div className="border-t border-slate-200 pt-8">
            <Link
              href="/news"
              className="
                inline-flex
                items-center
                gap-2
                border-b-2
                border-orange-400
                pb-1
                font-[SharpGITB]
                text-sm
                transition-colors
                hover:text-orange-500
              "
            >
              <IoArrowBackSharp size={18} />
              TOUTES LES ACTUALITÉS
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}