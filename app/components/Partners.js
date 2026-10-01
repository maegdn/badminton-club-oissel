import Image from "next/image";
import Link from "next/link";

export default function Partners() {
  return (
    <section className="w-full overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto w-[90%] max-w-7xl">
        <p className="text-[11px] font-bold tracking-[0.17em] text-slate-500 md:text-xs">
          <span className="text-orange-400">ILS NOUS SOUTIENNENT</span> 
        </p>

        <h2 className="mt-3 font-[SharpGITB] text-3xl md:text-5xl">
          NOS PARTENAIRES
        </h2>
      </div>

      <div className="mt-10 overflow-hidden">
        <div
          className="
            animate-slide
            flex
            min-w-[260%]
            items-center
            gap-24
            whitespace-nowrap
            py-6
            md:min-w-[140%]
            md:gap-40
          "
        >
          <Image
            src="/images/partners/lardesportsbw.png"
            alt="Lardesports"
            width={300}
            height={100}
            className="h-16 w-auto object-contain md:h-20 lg:h-24"
          />

          <Link
            href="/infos/partenaires"
            className="flex items-center justify-center"
          >
            <span
              className="
                relative
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
              "
            >
              <span className="relative z-10 font-[SharpGITB]">
                Plus d&apos;informations →
              </span>
            </span>
          </Link>

          <Image
            src="/images/oissel-logo.png"
            alt="Ville de Oissel"
            width={300}
            height={100}
            className="h-16 w-auto object-contain md:h-20 lg:h-24"
          />

          {/* duplication pour rendre la boucle plus fluide */}
          <Image
            src="/images/partners/lardesportsbw.png"
            alt=""
            width={300}
            height={100}
            className="h-16 w-auto object-contain md:h-20 lg:h-24"
          />

          <Link
            href="/infos/partenaires"
            className="flex items-center justify-center"
            aria-hidden="true"
            tabIndex={-1}
          >
            <span
              className="
                bg-slate-900
                px-6
                py-3
                text-sm
                font-bold
                text-white
              "
            >
              Plus d&apos;informations →
            </span>
          </Link>

          <Image
            src="/images/oissel-logo.png"
            alt=""
            width={300}
            height={100}
            className="h-16 w-auto object-contain md:h-20 lg:h-24"
          />
        </div>
      </div>
    </section>
  );
}