import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { useForm, ValidationError } from "@formspree/react";

export default function Bureau() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex flex-col w-full min-h-full flex-grow justify-center items-center">
        <h1>Les membres du bureau</h1>
        <div className="flex flex-row flex-wrap justify-center items-center w-2/4">
          <img
            src="/images/profile-pic.jpg"
            width={150}
            height={195}
            className="m-3"
          ></img>
          <img
            src="/images/profile-pic.jpg"
            width={150}
            height={195}
            className="m-3"
          ></img>
          <img
            src="/images/profile-pic.jpg"
            width={150}
            height={195}
            className="m-3"
          ></img>
        </div>
      </main>
      <Footer />
    </div>
  );
}
