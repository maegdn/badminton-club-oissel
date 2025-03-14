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
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex flex-col w-full min-h-full flex-grow justify-center items-center ">
        <div>
          {posts.map((post) => (
            <div key={post._id}>
              <h2>{post.title}</h2>
              {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
              <PortableText value={post.content} />

              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
