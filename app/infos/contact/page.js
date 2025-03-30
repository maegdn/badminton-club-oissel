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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousState) => ({ ...previousState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error("Erreur côté serveur :", response.status);
      }
    } catch (error) {
      console.error("Erreur réseau ou autre problème :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col min-h-full flex-grow justify-center items-center px-8 md:px-4">
        <div className="flex flex-col items-center text-justify  md:w-3/5 mb-10">
          <h1 className="font-bold mt-5 mb-5 justify-center">CONTACT</h1>
          <p>
            Pour nous contacter, vous pouvez nous envoyer un email à
            <span className="font-bold"> obadoissel@gmail.com</span> ou bien
            remplir le formulaire de contact ci-dessous.
          </p>
        </div>

        <div className="flex flex-col md:w-3/5">
          <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-5 mb-10">
              <div className="flex flex-row gap-6">
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  placeholder="Prénom"
                  onChange={handleChange}
                  className="bg-red-100 rounded-md h-10 pl-3 w-2/4"
                ></input>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Nom"
                  className="bg-red-100 rounded-md h-10 pl-3 w-2/4"
                  onChange={handleChange}
                ></input>
              </div>
              <input
                type="text"
                required
                name="email"
                value={formData.email}
                placeholder="Adresse e-mail"
                className="bg-red-100 rounded-md h-10 pl-3"
                onChange={handleChange}
              ></input>
              <textarea
                type="text"
                value={formData.message}
                required
                name="message"
                placeholder="Veuillez développer votre demande"
                className="bg-gray-200 rounded-md h-20 p-3"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              {submitted && (
                <p className="text-green-500 font-bold">
                  Formulaire envoyé ! Merci ! On revient vers vous très vite !
                </p>
              )}

              <button
                type="submit"
                className={`rounded-md h-12 p-3 font-bold ${
                  submitted
                    ? "bg-green-300 cursor-not-allowed"
                    : "bg-blue-200 hover:bg-blue-300"
                }`}
                disabled={loading || submitted}
              >
                {loading
                  ? "Envoi en cours..."
                  : submitted
                    ? "Formulaire envoyé !"
                    : "Envoyer"}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
