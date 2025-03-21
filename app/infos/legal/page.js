import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Legal() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full min-h-screen grow items-center">
        <div className="flex flex-col justify-start text-justify lg:w-3/4 px-10 py-10">
          <h1 className="flex justify-center">Mentions légales</h1>

          <section className="mt-12 mb-6 justify-start text-start">
            <h2 className="text-xl font-semibold">Éditeur du site</h2>
            <p>Nom de l'éditeur : O'Bad - Badminton Oissel Club</p>
            <p>Adresse : 1441 Av. du Général de Gaulle, 76350 OISSEL</p>
            <p>Email : obadoissel@gmail.com</p>
            <p>Téléphone : 02.32.91.13.41</p>
            <p>SIRET : 499437093</p>
            <p>RNA : W763010968</p>
          </section>

          {/* <section className="mb-6">
            <h2 className="text-xl font-semibold">Hébergement</h2>
            <p>Hébergeur : [Nom de l’hébergeur]</p>
            <p>Adresse : [Adresse de l’hébergeur]</p>
            <p>Contact : [Email ou Téléphone]</p>
          </section> */}

          <section className="mb-6 justify-start text-start">
            <h2 className="text-xl font-semibold">
              Conception et développement
            </h2>
            <p>
              Le site a été conçu et développé par :<br />
              Maëlys Guardini - Développeuse web indépendante
            </p>
            <p>📧 Email : contact@mguardini.pro</p>
            <p> 🗒 Portfolio : www.maguardini.pro</p>
          </section>

          <section className="mb-6 justify-start">
            <h2 className="text-xl font-semibold">Propriété intellectuelle</h2>
            <p>
              L’ensemble des contenus présents sur le site (textes, images,
              logos, graphismes, etc.) est la propriété exclusive du O'Bad -
              Badminton Oissel Club ou de ses partenaires et est protégé par le
              droit d’auteur. Toute reproduction, modification ou diffusion sans
              autorisation est strictement interdite.
            </p>
          </section>

          {/* <section className="mb-6">
            <h2 className="text-xl font-semibold">Données personnelles</h2>
            <p>
              Les données collectées sont utilisées conformément au RGPD. Voir
              notre{" "}
              <a href="/politique-confidentialite" className="text-blue-600">
                politique de confidentialité
              </a>
              .
            </p>
          </section> */}

          {/* <section className="mb-6">
            <h2 className="text-xl font-semibold">Cookies</h2>
            <p>
              Ce site utilise des cookies. En continuant, vous acceptez leur
              utilisation. Voir
              <a href="/cookies" className="text-blue-600">
                notre politique de cookies
              </a>
              .
            </p>
          </section> */}

          <section className="mb-6">
            <h2 className="text-xl font-semibold">Responsabilité</h2>
            <p>
              Le site décline toute responsabilité en cas d’erreurs ou
              d’indisponibilité.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français.
            </p>
          </section>
        </div>
        <div>
          <p className="mt-22 justify-center font-bold">
            Bonne visite sur notre site ! 🏸
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
