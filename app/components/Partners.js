import Image from "next/image";

export default function Partners() {
  return (
    <div className="w-full overflow-hidden bg-white pt-10">
          <div className="w-full bg-[#1d1d1d] h-12 flex items-center justify-center">
            <div className="text-white"><h2>Partenaires</h2></div>
          </div>

    <div className="animate-slide flex gap-60 whitespace-nowrap py-8">
            <Image
              src="/images/partners/lardesportsbw.png"
              alt="Lardesports"
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-auto"
            />
            <Image
              src="/images/partners/victorbw.png"
              alt="Victor"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[300px] h-auto"
            />
          </div>
          {/* <div className="w-full bg-[#1d1d1d] h-12"></div> */}

    </div>

  );
}
