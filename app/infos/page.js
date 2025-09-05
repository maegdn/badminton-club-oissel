"use client";

import Footer from "../components/Footer";
import Header3 from "../components/Header3";

export default function InfosPratiques() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header3 />
      <main className="flex flex-col w-full min-h-full flex-grow justify-center items-center gap-16">
        <h1>Infos pratiques</h1>
        <div className=" flex flex-col gap-12 flex-wrap w-[50%] flex-grow items-center pt-16 pb-16">
          <button
            className="relative overflow-hidden text-white bg-gray-900 before:content-[''] transition-colors duration-200 hover:text-white before:absolute before:inset-0 before:bg-slate-500 before:transition-transform before:duration-300 before:origin-left before:scale-x-0 hover:before:scale-x-100 px-6 py-3 rounded w-11/12 md:w-2/5 mx-auto"
            onClick={() => redirectPage("events")}
          >
            <span className="relative z-10 font-bold font-[HemiHead] ">
              Evenements{" "}
            </span>
          </button>

          <button
            className="relative overflow-hidden text-white bg-gray-900 before:content-[''] transition-colors duration-200 hover:text-white before:absolute before:inset-0 before:bg-slate-500 before:transition-transform before:duration-300 before:origin-left before:scale-x-0 hover:before:scale-x-100 px-6 py-3 rounded w-11/12 md:w-2/5 mx-auto"
            onClick={() => redirectPage("bureau")}
          >
            <span className="relative z-10 font-bold font-[HemiHead] ">
              Le bureau{" "}
            </span>
          </button>

          <button
            className="relative overflow-hidden text-white bg-gray-900 before:content-[''] transition-colors duration-200 hover:text-white before:absolute before:inset-0 before:bg-slate-500 before:transition-transform before:duration-300 before:origin-left before:scale-x-0 hover:before:scale-x-100 px-6 py-3 rounded w-11/12 md:w-2/5 mx-auto"
            onClick={() => redirectPage("horairesinfos")}
          >
            <span className="relative z-10 font-bold font-[HemiHead] ">
              Horaires{" "}
            </span>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
