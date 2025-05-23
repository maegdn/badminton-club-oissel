
import { client } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

import Footer from "../../components/Footer";
import Header3 from "../../components/Header3";


export async function generateStaticParams() {
    const posts = await client.fetch(
      `*[_type == "article"] { "slug": slug.current }`);
      console.log("indiv", posts);
   
    return posts.map((post) => ({
      slug: post.slug,
    }))
  }


  // export default async function Page({ params }) {
  //   const slug = params.slug; 
  export default async function Page({params}) {
    const slug = params.slug;

    const selectedPost = await client.fetch(
      `*[_type == "article" && slug.current == $slug][0]{
        _id,
        title,
        content,
        publishedAt,
        "imageUrl": image.asset->url,
        "slug": slug.current
      }`,
      { slug }
    );
    
    return <h1>My Page</h1>
  }
//   export default async function Post({ params }) {
//     const slug = params?.slug;



// const selectedPost = await client.fetch(`*[_type == "article" && slug.current == $slug]{
//   title,
//   content,
//   publishedAt,
//   "imageUrl": image.asset->url
// }`,{slug });
// if (!selectedPost) return <div>Article introuvable</div>



//     return (
      
// <div className="flex justify-center align-center">hello</div>
//   //   <div className="flex flex-col items-center justify-items-center min-h-screen">
//   //   <Header3 />
//   //   {/* <SEO
//   //     title="post"
//   //     url="https://badminton-club-oissel.vercel.app/news/"
//   //     description="Retrouvez les dernières actualités du club de badminton de Oissel."
//   //   /> */}
//   //   <main className="flex flex-col w-full min-h-full grow justify-center items-center pt-8">
//   //     <h1 className="font-bold mt-5 mb-9">{selectedPost.slug}</h1>
//   //     <div className="flex flex-col w-full md:w-4/5 lg:w-3/5 gap-10 justify-center items-center p-4 text-black">
//   //         <div
//   //           key={selectedPost._id}
//   //           className="flex flex-col md:flex-row  shadow-lg overflow-hidden w-full items-stretch"
//   //         >
//   //           {selectedPost.imageUrl && (
//   //             <div className="w-full md:w-1/2 h-full">
//   //               <img
//   //                 src={selectedPost.imageUrl}
//   //                 alt={selectedPost.title}
//   //                 className="w-full aspect-video object-cover"
//   //               />
//   //             </div>
//   //           )}
//   //           <div className="flex flex-col w-full md:w-1/2 p-4 justify-between text-justify">
//   //             <h2 className="text-xl font-semibold mb-2">{selectedPost.title}</h2>
//   //             <PortableText value={selectedPost.content} />
//   //             <p className="text-sm text-gray-500 mt-4 text-justify">
//   //               {new Date(selectedPost.publishedAt).toLocaleDateString()}
//   //             </p>
//   //           </div>
//   //         </div>
//   //     </div>
//   //   </main>
//   //   <Footer />
//   // </div>
//     )

//   }