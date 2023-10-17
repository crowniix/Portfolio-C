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
            content="creative, cv, designer,  online cv, online resume, powerful 
            portfolio, professional, professional resume, responsive, resume, vcard, pentester, pentest, cybersecurity"
          />
          <link rel="canonical" href="https://www.linkedin.com/in/camil-arslan/" title="Mon profil LinkedIn"/>
         <meta name="description" content="Cybersecurity Engineer | Cybersecurity Consultant | Full stack web developer." />
          <meta name="developer" content="MR Camil R3800T"/>
          <meta name="author" content="MR Camil R3800T" />
          <meta property="og:title" content="Camil Bouteba • Portfolio" />
          <meta property="og:description" content="Etudiant Ingénieur & Consultant CyberSécurité " />
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
