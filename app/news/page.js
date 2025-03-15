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
        <div className="flex flex-col w-full md:w-4/5 lg:w-3/5 gap-10 justify-center items-center p-4 text-white">
          {posts.map((post) => (
            <div
              key={post._id}
              className="flex flex-col md:flex-row bg-black shadow-lg  overflow-hidden w-full"
            >
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full md:w-2/5 h-[250px] object-cover"
                />
              )}
              <div className="flex flex-col w-full md:w-3/5 p-4 justify-between">
                <h2>{post.title}</h2>

                <PortableText value={post.content} />
                <p className="text-sm text-gray-500 mt-4">
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
