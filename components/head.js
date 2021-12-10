import NextHead from "next/head";

export default function Head() {
  return (
    <NextHead>
      <title>Hochzeit F&F</title>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Proza+Libre&display=swap"
        rel="stylesheet"
      />
      <meta property="og:url" content="https://www.baerenfamile.wedding" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Hochzeit F&F" />
      <meta name="twitter:card" content="summary" />
      <meta property="og:description" content="Viel Spass mit den Fotos." />
      <meta property="og:image" content={"/assets/og_image.png"} />
    </NextHead>
  );
}
