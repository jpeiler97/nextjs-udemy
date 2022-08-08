import Head from "next/head";

import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

/* Notes:
  - By adding a Head component to _app.js, we are able to add Head settings to all
  pages rendered by the app. This can be useful if trying to avoid repeating the Head component
  when you need a setting that is global to the entire app, not just one/a handful of pages.

*/
