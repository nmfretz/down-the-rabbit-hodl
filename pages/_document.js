import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/bitcoin-logo.png" />
          {/* <link rel="icon" href="/carrot-icon.png" /> */}

          <meta name="description" content="A compiled guide to learning about Bitcoin." />
          <meta property="og:title" content="Down the Rabbit Hodl - A Guide to Learning About Bitcoin" />
          <meta property="og:url" content="https://www.downtherabbithodl.guide" />
          <meta property="og:description" content="A compiled guide to learning about Bitcoin." />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="https://www.downtherabbithodl.guide" />
          <meta
            property="twitter:image"
            content="https://user-images.githubusercontent.com/85373263/189434790-a2295c97-dd97-43ab-89dc-db279f1d33ad.jpg"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
