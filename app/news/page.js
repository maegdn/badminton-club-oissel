"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";

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
        publishedAt,
      }`
      )
      .then((data) => setPosts(data) && console.log(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <Header />
      <main className="flex flex-col w-full min-h-full grow justify-center items-center">
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
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col w-full md:w-1/2 p-4 justify-between text-justify">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <PortableText value={post.content} />
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
