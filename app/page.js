"use client";

import Image from "next/image";

import Footer from "./components/Footer";
import Header3 from "./components/Header3";
import Partners from "./components/Partners";
import SEO from "./components/SEO";

export default function Home() {
  const redirectPage = (pageName) => {
    window.location.href = `/${pageName}`;
  };

  return (
    <>
      <SEO
        title="Badminton Club de Oissel"
        url="https://oissel-badminton-club.vercel.app/"
        description="Le Badminton Club de Oissel vous accueille pour des moments de sport et de bonne humeur. Découvrez le badminton en mixte dans une ambiance conviviale aux gymnases de Oissel."
      />

      <header className="sticky top-0 z-50">
        <Header3 />
      </header>

      <main className="flex w-full flex-col">
        {/* HERO */}
        <section className="relative flex min-h-[calc(100dvh-60px)] items-center overflow-hidden">
          <div className="absolute inset-0 -z-20 bg-[url('/images/smash-bad.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 -z-10 bg-black/35" />

          <div className="mx-auto w-[90%] max-w-7xl py-20">
            <p className="mb-5 text-[11px] font-bold tracking-[0.18em] text-orange-300 md:text-xs">
              BADMINTON · OISSEL · DEPUIS 2004
            </p>

            <h1 className="max-w-5xl font-[SharpGIT] !text-5xl leading-[0.9] text-white md:!text-8xl ">
              BIENVENUE
              <br />
              SUR O&apos;BAD !
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-7 text-slate-100 md:text-base">
              L’association sportive Oissel Badminton, nommée également O&apos;Bad,
              a été créée en octobre 2004. Depuis septembre 2025, après plusieurs
              années en loisir, le club s&apos;affilie à la Fédération Française
              de Badminton (FFBaD).
            </p>
          </div>
        </section>

        {/* EVENTS */}
        <section className="mx-auto w-[90%] max-w-7xl py-20 md:py-28">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
            <div>
              <p className="text-[11px] font-bold tracking-[0.17em] text-slate-500 md:text-xs">
                <span className="text-orange-400">UN CLUB LOISIR ET COMPÉTITIF </span> 
              </p>

              <h2 className="mt-3 font-[SharpGITB] text-3xl leading-[0.95] md:text-6xl">
                ÉVÉNEMENTS
                & TOURNOIS
              </h2>

              <div className="my-6 h-[3px] w-14 bg-orange-400" />

              <p className="max-w-xl text-sm leading-7 text-slate-700 md:text-base">
                Que vous soyez débutant ou joueur confirmé, notre club vous
                accueille pour partager des moments de sport et de bonne humeur.
                C’est l’occasion idéale pour essayer, progresser et pourquoi pas
                participer à nos tournois tout au long de l’année. Rejoignez-nous
                sur le terrain ! 🏸
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-700 md:text-base">
                O’Bad est avant tout un club familial, avec des valeurs telles
                que la bienveillance, l’écoute et l’entraide. Le club accueille
                des joueurs avec différents niveaux ce qui permet une diversité
                des regards sur la pratique du badminton.
              </p>

              <button
                onClick={() => redirectPage("events")}
                className="
                  relative
                  mt-8
                  overflow-hidden
                  bg-slate-900
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-white
                  before:absolute
                  before:inset-0
                  before:origin-left
                  before:scale-x-0
                  before:bg-orange-400
                  before:transition-transform
                  before:duration-300
                  before:content-['']
                  hover:before:scale-x-100
                  block mx-auto md:mx-0
                "
              >
                <span className="relative z-10 font-[SharpGITB]">
                  Voir les événements →
                </span>
              </button>
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/obadwp.png"
                alt="Événements et tournois du club"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

{/* COACHING */}
<section className="relative overflow-hidden text-white">
  <Image
    src="/images/badmminton-coaching-bw.png"
    alt="Séance de coaching"
    fill
    className="
      object-cover
      object-[40%_center]
      md:object-center
    "
  />

  {/* Voile général */}
  <div className="absolute inset-0 bg-slate-950/35" />

  {/* Dégradé sombre à DROITE */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-l
      from-slate-950/90
      via-slate-950/55
      to-transparent
    "
  />

  <div
    className="
      relative
      z-10
      mx-auto
      flex
      min-h-[460px]
      w-[90%]
      max-w-7xl
      items-center
      justify-end
      py-16
      md:min-h-[520px]
      md:py-24
    "
  >
    {/* TEXTE À DROITE */}
    <div className="w-full max-w-lg md:max-w-xl">
      <p className="text-[11px] font-bold tracking-[0.17em] text-orange-300 md:text-xs">
        UNE ENVIE DE PROGRESSER ?
      </p>

      <h2 className="mt-3 font-[SharpGIT] text-4xl leading-none md:text-6xl">
        COACHING
      </h2>

      <div className="my-6 h-[3px] w-14 bg-orange-400" />

      <p className="text-sm leading-7 text-slate-100 md:text-base">
        Depuis quelques temps le{" "}
        <span className="font-[SharpGITB] font-bold text-white">
          Coach Veasna
        </span>{" "}
        intervient auprès de notre club afin de permettre une évolution
        de la pratique de chacun.
      </p>

      <p className="mt-4 text-sm leading-7 text-slate-100 md:text-base">
        Tous les joueurs du club peuvent bénéficier d&apos;entraînements
        individuels et/ou collectifs.
      </p>
    </div>
  </div>
</section>

        {/* CLUB SPIRIT */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 -z-20 bg-[url('/images/bckgrdob.png')] bg-cover bg-top opacity-[0.12]" />
          <div className="absolute inset-0 -z-10 bg-white/70" />

          <div className="mx-auto grid w-[90%] max-w-7xl grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <p className="text-[11px] font-bold tracking-[0.17em] text-slate-500 md:text-xs">
                <span className="text-orange-400">L&apos;ESPRIT O&apos;BAD</span> 
              </p>

              <h2 className="mt-3 font-[SharpGITB] text-3xl leading-[0.95] text-slate-900 md:text-5xl">
                UN CLUB AVEC
                DE L&apos;ENTRAIN
              </h2>
            </div>

            <div>
              <p className="text-sm leading-7 text-slate-700 md:text-base">
                Du joueur loisir au joueur compétiteur, chacun trouve sa place !
                Notre club allie convivialité, progression et esprit d&apos;équipe,
                le tout dans une ambiance chaleureuse.
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
                Nous proposons des créneaux adaptés à tous les niveaux, des
                entraînements dirigés deux fois par mois, ainsi que de nombreuses
                opportunités de compétitions: interclubs, néo interclubs.
                Aussi, participer individuellement à des tournois privés, aux
                Duos de Seine maritime, championnats, etc...
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
                En plus des séances classiques, nous organisons régulièrement
                des événements internes : tournois amicaux, soirées thématiques
                et rencontres interclubs.
              </p>

              <p className="mt-5 text-sm font-medium leading-7 text-slate-900 md:text-base">
                O&apos;Bad est un club dynamique, en pleine évolution, où le
                plaisir de jouer rime avec partage, progression et dépassement
                de soi.
              </p>

              <button
                onClick={() => redirectPage("news")}
                className="
                  relative
                  mt-8
                  overflow-hidden
                  bg-slate-900
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-white
                  before:absolute
                  before:inset-0
                  before:origin-left
                  before:scale-x-0
                  before:bg-orange-400
                  before:transition-transform
                  before:duration-300
                  before:content-['']
                  hover:before:scale-x-100
                  block mx-auto md:mx-0
                "
              >
                <span className="relative z-10 font-[SharpGITB]">
                  Voir les actualités →
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Partners />

      <Footer />
    </>
  );
}