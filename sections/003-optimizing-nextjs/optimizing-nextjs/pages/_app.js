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

  - When adding a Head to the _app.js and also to multiple specific pages, Next merges the content of these
  components. In the case of conflicting elements, the latter will always be chosen. That is, the most "recent"
  line. In the same file, a <title> on line 26 would be chosen over line 25. In different files, the <title> in
  a child component would be chosen over the one in _app.js.

  - a situation where such a conflict might be useful is to have a general page title and description that entails
  all pages by default, until that page is specifically given a title and description.
*/
