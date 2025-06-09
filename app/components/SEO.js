import Head from "next/head";

export default function SEO({ description, title, url, noIndex = false  }) {
  const siteTitle = "Oissel Badminton Club";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex" />}

    </Head>
  );
}
