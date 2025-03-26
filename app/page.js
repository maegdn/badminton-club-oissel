import Image from "next/image";
import Head from "next/head";

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <Head>
        <title>O'bad - Badminton à Oissel</title>
        <meta
          name="description"
          content="Rejoignez notre club de badminton à Oissel, en Normandie"
        />
        <meta
          name="keywords"
          content="badminton, club, sports, tournois, inscription, raquette, sport, association"
        />
        <meta name="author" content="Oissel Badminton" />
        <meta
          property="og:title"
          content="Site du Club de Badminton de Oissel "
        />
        <meta
          property="og:description"
          content="Venez rejoindre le club de badminton de Oissel"
        />
        <meta
          name="google-site-verification"
          content="LJFzKAQH4-jY1N0mlxV3gF-gKpsWPos2NuNdUtT5-Cs"
        />
        {/* <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" /> */}
        <meta
          property="og:url"
          content="https://badminton-club-oissel.vercel.app"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      <main className="flex flex-col gap-8  items-center   grow px-4 md:px-12">
        <h1 className="font-bold mt-5 mb-5">
          BIENVENUE AU CLUB DE BADMINTON DE OISSEL
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center text-justify md:w-2/3 gap-22 ">
          <div className="flex flex-col w-full md:w-1/2">
            <h3 className="text-lg md:text-xl font-bold">Un club familial</h3>
            <p className="text-sm md:text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <img src="/images/club-bad1.jpg" className="md:w-1/2" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center text-justify md:w-2/3 gap-22 ">
          <img src="/images/club-bad1.jpg" className="md:w-1/2" />

          <div className="flex flex-col w-full md:w-1/2">
            <h3 className="text-lg md:text-xl font-bold">Un club familial</h3>
            <p className="text-sm md:text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
