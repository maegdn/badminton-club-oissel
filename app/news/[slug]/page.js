
import { client } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header3 from "../../components/Header3";
import { IoArrowBackSharp } from "react-icons/io5";


export async function generateStaticParams() {
    const posts = await client.fetch(
      `*[_type == "article"] { "slug": slug.current }`);
      console.log("indiv", posts);
   
    return posts.map((post) => ({
      slug: post.slug,
    }))
  }

// async function getPostBySlug(slug) {
//     return await client.fetch(
//       `*[_type == "article" && slug.current == $slug][0]{
//         _id,
//         title,
//         content,
//         publishedAt,
//         "imageUrl": image.asset->url,
//         "slug": slug.current
//       }`,
//       { slug }
//     );
//   }
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
    
    return (

<div className="flex flex-col items-center justify-items-center min-h-screen">
<Header3 />
{/* <SEO
  title="post"
  url="https://badminton-club-oissel.vercel.app/news/"
  description="Retrouvez les dernières actualités du club de badminton de Oissel."
/> */}
<main className="flex flex-col w-full min-h-full grow justify-center items-center pt-8">
<nav className="text-sm text-gray-500 mb-4">
  <Link href="/" className="hover:underline decoration-blue-400">Accueil</Link> <span className="text-blue-400 font-extrabold">&gt;{" "}</span>
  <Link href="/news" className="hover:underline decoration-blue-400">Actualités</Link> <span className="text-blue-400 font-extrabold">&gt;{" "}</span>
  <span className="text-gray-700">{post.title}</span>
</nav>

  <div className="flex items-center md:w-2/4 mb-6">
  <Link href="/news">
    <IoArrowBackSharp className="md:mr-10  text-gray-700 hover:text-black" size={32} />
  </Link>
  <h1 className="text-center font-bold text-xl"> {post.title} </h1>
</div>
  <div className="flex flex-col w-full gap-10 justify-center items-center p-4 text-black">
      <div
        className="flex flex-col items-center w-full"
      >
        {post.imageUrl && (
          <div className="w-full md:w-1/2 h-full">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full  shadow-blue-200 shadow-lg rounded-lg mb-6 "
            />
          </div>
        )}
        <div className="flex flex-col w-11/12 md:w-1/2 pt-6 pb-6 justify-between text-justify">
          <PortableText value={post.content} />
          <div className="flex justify-between items-center pt-6">
          <p className=" text-gray-500 mt-2 text-justify mb-6">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
{/* <div className=" flex justify-center items-center">          <Link href={`/news/`}><button className="  border-2 text-white font-bold bg-slate-400 hover:bg-slate-900 py-3 px-22 mr-4 items-end rounded-lg" >Retour sur les actualités</button></Link>
</div> */}
         </div>
          

        </div>
      </div>
  </div>
</main>
<Footer />
</div>
    )
    
   
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

