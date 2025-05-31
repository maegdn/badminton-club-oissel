import Image from "next/image";
import Link from "next/link";

export default function Partners() {
  return (
    <div className="w-full overflow-hidden bg-white ">
      <div className="w-full bg-slate-900 h-12 flex items-center justify-center">
        <div className="text-white">
          <h2 className="font-[HemiHead] ">Partenaires</h2>
        </div>
      </div>

      <div className="animate-slide flex gap-60 whitespace-nowrap py-8 min-w-[450%]">
        <Image
          src="/images/partners/lardesportsbw.png"
          alt="Lardesports"
          width={300}
          height={100}
          className="h-16 md:h-20 lg:h-24 w-auto object-contain"
        />
        <Link href="/infos/partenaires" className="items-center justify-center flex"><button className="font-[HemiHead] h-16 flex justify-center items-center bg-slate-900 text-white rounded-2xl p-4 px-6 ">Plus d'informations</button></Link>
        <Image
          src="/images/partners/victorbw.png"
          alt="Victor"
          width={300}
          height={100}
          className="h-16 md:h-20 lg:h-24 w-auto object-contain"
        />
      </div>
    </div>
  );
}
