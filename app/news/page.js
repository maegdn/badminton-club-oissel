import Footer from "../components/Footer";
import Header from "../components/Header";

import { useEffect, useState } from "react";

import { client } from "../lib/sanity";
import { PortableText } from "@portabletext/react";

export default function News() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="">
      <Header />
      <main></main>
      <Footer />
    </div>
  );
}
