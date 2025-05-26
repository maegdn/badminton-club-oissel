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
                <div className="w-full md:w-1/2 md:h-auto  overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className=" w-full h-full object-cover"
                  />
                </div>
              )
              }
              <div className="flex flex-col w-full md:w-1/2 p-4 justify-between text-justify">
                <h2 className=" text-xl font-semibold mb-2 px-4 text-center md:text-left">{post.title}</h2>
                <div className="line-clamp-5 px-4"><PortableText  value={post.content} /></div>

                <div className="flex justify-between items-center pt-6">
                <p className="text-sm text-gray-500 text-justify px-4 ">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
                  <Link href={`/news/${post.slug.current}`}><button className=" text-sm border-2 text-white font-bold bg-slate-500 hover:bg-slate-900 py-1 px-12 mr-4 items-end rounded-lg" >Lire</button></Link>
               </div>
               
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
