import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        {/* meta tags will locate in this place */}
      </Head>
      <NextNProgress color='#32a84e'/>
      <Component {...pageProps}/>
    </>
  )
}

export default appWithTranslation(App)