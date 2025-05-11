import Image from "next/image";

export default function Partners() {
  return (
    <div className="w-full overflow-hidden bg-white pt-10">
      <div className="w-full bg-[#1d1d1d] h-12 flex items-center justify-center">
        <div className="text-white">
          <h2>Partenaires</h2>
        </div>
      </div>

      <div className="animate-slide flex gap-60 whitespace-nowrap py-8">
        <Image
          src="/images/partners/lardesportsbw.png"
          alt="Lardesports"
          width={300}
          height={100}
          className="h-16 md:h-20 lg:h-24 w-auto object-contain"
        />
        <Image
          src="/images/partners/victorbw.png"
          alt="Victor"
          width={300}
          height={100}
          className="h-16 md:h-20 lg:h-24 w-auto object-contain"
        />
      </div>
      {/* <div className="w-full bg-[#1d1d1d] h-12"></div> */}
    </div>
  );
}
