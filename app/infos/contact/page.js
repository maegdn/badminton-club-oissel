"use client";
import Footer from "@/app/components/Footer";
import Header from "../../components/Header";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    firstname: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col min-h-full flex-grow justify-center items-center">
        <div className="flex flex-col w-3/5">
          <div className="mb-10">
            <h1 className="font-bold mt-5 mb-5">CONTACT</h1>
            <p>
              Pour nous contacter, vous pouvez nous envoyer un email à
              <span className="font-bold"> obadoissel@gmail.com</span> ou bien
              remplir le formulaire de contacter ci-dessous.
            </p>
          </div>

          <form className="">
            <div className="flex flex-col w-full gap-5 mb-6">
              <div className="flex flex-row gap-6">
                <input
                  placeholder="Nom"
                  className="bg-blue-100 rounded-md h-10 pl-3 w-2/4"
                ></input>
                <input
                  placeholder="Prénom"
                  className="bg-blue-100 rounded-md h-10 pl-3 w-2/4"
                ></input>
              </div>
              <input
                placeholder="Adresse e-mail"
                className="bg-blue-100 rounded-md h-10 pl-3"
              ></input>
              <input
                placeholder="Veuillez développer votre demande"
                className="bg-gray-200 rounded-md h-20 pl-3"
              ></input>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-blue-200 rounded-md h-12 p-3 font-bold">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
