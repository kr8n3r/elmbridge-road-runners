import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '@components/footer'
import Header from '@components/header'

class BaseTemplate extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Header />
          <main>
          <Main />
          </main>
          <Footer />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default BaseTemplate