//Note: Head is not the same as the Head component from 'next/head';
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <Body>
          <div id="overlays"></div>
          <Main />
          <NextScript />
        </Body>
      </Html>
    );
  }
}

export default MyDocument;

/* Notes:
    - _document.js is used to override the default document that is used as the source HTML. In _app.js and beyond,
    we can only add to the document, but with _document.js we can override and edit certain parts of the document 
    as needed.
    - we can also add HTML elements to outside our app component tree (e.g. <div id="overlays"> on line 10), to
    achieve certain special cases like portals
*/
