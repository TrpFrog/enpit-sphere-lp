import { Html, Head, Main, NextScript } from 'next/document';
import GoogleFonts from "../components/GoogleFonts";
import {NextSeo} from "next-seo";

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>
        <meta charSet="utf-8" />
        <GoogleFonts fonts={[
          {family: 'Rampart One', weight: [400]},
          {family: 'Noto Sans JP', weight: [100, 300, 400, 700, 900]},
          {family: 'Urbanist', weight: [100, 300]}
        ]}/>
        <NextSeo
          noindex={true}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
