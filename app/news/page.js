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
      .then((data) =>  {
        setPosts(data)
        console.log(data);
      })
  }, []);

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <Header3 />
      <SEO
        title="Actualités du club"
        url="https://badminton-club-oissel.vercel.app/news/"
        description="Retrouvez les dernières actualités du club de badminton de Oissel."
      />
      <main className="flex flex-col w-full min-h-full grow justify-center items-center pt-8">
        <h1 className="font-bold mt-5 mb-9">LES ACTUALITÉS DU CLUB</h1>
        <div className="flex flex-col w-full md:w-4/5 lg:w-3/5 gap-10 justify-center items-center p-4 text-black">
          {posts.map((post) => (
            <div
              key={post._id}
              className="flex flex-col md:flex-row  shadow-lg overflow-hidden w-full items-stretch"
            >
              {post.imageUrl && (
                <div className="w-full md:w-1/2 h-full">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full aspect-video object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col w-full md:w-1/2 p-4 justify-between text-justify">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <PortableText value={post.content} />
               <Link href={`/news/${post.slug.current}`}><button className="border-2-black bg-blue-200 text-black" >Lire davantage.</button></Link>
                <p className="text-sm text-gray-500 mt-4 text-justify">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
