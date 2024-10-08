import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="Cybersecurity, Penetration Testing, ISO-27001,  PECB, Risk Management, RGPD 
            portfolio, professional, professional resume, gouvernance, risk management, compliance, pentester, pentest, cybersecurité, consultant cybersécurité, ingénieur cybersécurité"
          />
          <link rel="canonical" href="https://www.linkedin.com/in/camil-arslan/" title="Mon profil LinkedIn"/>
          <meta name="description" content="Cybersecurity Engineer | Cybersecurity Consultant | Full stack web developer." />
          <meta name="developer" content="R3800T"/>
          <meta name="author" content="R3800T" />
          <meta property="og:title" content="Camil Bouteba • Portfolio" />
          <meta property="og:description" content="Consultant & Ingénieur CyberSécurité" />
          <meta property="og:type" content="website" />
          <link rel="shortcut icon" href="/img/favicon.svg" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap"
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
