import Document, { Html, Head, Main} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
  <link
    href="https://fonts.googleapis.com/css2?family=Russo+One"
    rel="stylesheet"
  />

  <link 
  href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@800&display=swap" 
  rel="stylesheet">
  </link>

  <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script"
    rel="stylesheet"
  />
  <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@300&display=swap" rel="stylesheet"></link>

</Head>
        <header>
          <Main />
        </header>
        <body>
          <Main />
        </body>
      </Html>
    )
  }
}

export default MyDocument