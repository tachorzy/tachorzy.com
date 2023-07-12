import { Html, Head, Main, NextScript } from 'next/document'
import HamburgerMenu from 'components/hamburgerMenu'
import { ManropeRegular } from '../lib/localNextFonts'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
