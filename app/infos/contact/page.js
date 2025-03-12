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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousState) => ({ ...previousState, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xrbpgplg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Formulaire envoyé !");
        setSubmitted(true);
        setFormData({ name: "", firstname: "", email: "", message: "" });
      } else {
        console.error("Erreur côté serveur :", response.status);
      }
    } catch (error) {
      console.error("Erreur réseau ou autre problème :", error);
    }
  };

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
              remplir le formulaire de contact ci-dessous.
            </p>
          </div>

          <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-5 mb-6">
              <div className="flex flex-row gap-6">
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  placeholder="Prénom"
                  onChange={handleChange}
                  className="bg-blue-100 rounded-md h-10 pl-3 w-2/4"
                ></input>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Nom"
                  className="bg-blue-100 rounded-md h-10 pl-3 w-2/4"
                  onChange={handleChange}
                ></input>
              </div>
              <input
                type="text"
                required
                name="email"
                value={formData.email}
                placeholder="Adresse e-mail"
                className="bg-blue-100 rounded-md h-10 pl-3"
                onChange={handleChange}
              ></input>
              <textarea
                type="text"
                value={formData.message}
                required
                name="message"
                placeholder="Veuillez développer votre demande"
                className="bg-gray-200 rounded-md h-20 pl-3"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-blue-200 rounded-md h-12 p-3 font-bold"
              >
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
