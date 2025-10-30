import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import Header3 from "../../components/Header3";

export default function Legal() {
  return (
    <>
      <Header3 />
      <SEO
        title="Mentions légales - Badminton Club de Oissel"
        url="https://badminton-club-oissel.vercel.app/infos/mentions-legales"
        description="Mentions légales du site officiel du club de badminton de Oissel."
        noIndex={true}
      />

      <main className="flex flex-col w-full min-h-screen grow items-center">
        <div className="flex flex-col justify-start text-justify lg:w-3/4 px-10 py-10">
          <h1 className="flex justify-center">Mentions légales</h1>

          <section
            className="mt-12 mb-6 justify-start text-start"
            aria-label="Conception du site"
          >
            <h2 className="text-xl font-semibold">Éditeur du site</h2>
            <p>Nom de l'éditeur : O'Bad - Badminton Oissel Club</p>
            <p>Adresse : 1441 Av. du Général de Gaulle, 76350 OISSEL</p>
            <p>
              📧 Email :{" "}
              <a
                href="mailto:contact@mguardini.pro"
                className="text-blue-400 underline"
              >
                contact@mguardini.pro
              </a>
            </p>
            <p>Téléphone : 02.32.91.13.41</p>
            <p>SIRET : 499437093</p>
            <p>RNA : W763010968</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">Hébergement</h2>
            <p>Hébergeur : Vercel Inc.</p>
            <p>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
            <p>
              Site :{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                vercel.com
              </a>
            </p>
          </section>

          <section className="mb-6 justify-start text-start">
            <h2 className="text-xl font-semibold">
              Conception et développement
            </h2>
            <p>
              Le site a été conçu et développé par :<br />
              Maëlys Guardini - Développeuse web indépendante
            </p>
            <p>📧 Email : contact@mguardini.dev</p>
            <p>
              🗒 Portfolio :{" "}
              <a
                href="https://www.mguardini.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                www.mguardini.dev
              </a>
            </p>
          </section>

          <section className="mb-6 justify-start">
            <h2 className="text-xl font-semibold">Propriété intellectuelle</h2>
            <p>
              L’ensemble des contenus présents sur ce site (textes, images,
              logos, graphismes, etc.) sont la propriété exclusive du O'Bad –
              Badminton Club de Oissel ou de ses partenaires, sauf mention
              contraire, et sont protégés par le droit d’auteur.
              <br />
              <br />
              Certaines images ou illustrations peuvent provenir de banques
              d’images libres de droit (ex. Unsplash, Pexels) et sont utilisées
              conformément à leurs conditions d'utilisation. Toute reproduction,
              modification ou diffusion des contenus sans autorisation écrite
              préalable est strictement interdite.
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

            <p>
              Ce site ne collecte aucune donnée personnelle via formulaire ou
              compte utilisateur.
            </p>
          </section>
        </div>
        <div>
          <p className="mt-6 justify-center font-bold pb-18">
            Bonne visite sur notre site ! 🏸
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
