import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="This is a clone page of egghead.io"
          />

          <meta name="keywords" content="egghead, egghead.io, azizul' dev" />
          <meta name="author" content="Azizul Bappy" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="normal-mode">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
