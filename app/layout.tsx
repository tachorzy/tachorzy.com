import './globals.css'
import { ManropeExtraBold, ManropeRegular, ManropeMedium, AmiriBoldSlanted } from '../lib/localNextFonts'
import HamburgerMenu from '../components/hamburgerMenu/HamburgerMenu'

export const metadata = {
  title: 'Tariq Achor Zyad',
  description: 'Web Developer',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        {/* There's a hydration error if we make this first body tag a head tag or fragment */}
        <body> 
            <div className={ManropeRegular.className + " "}>
                <div className="fixed top-0 right-0 mr-6 md:mt-12 md:mr-12 mt-6 z-50">
                    <HamburgerMenu/>
                </div>
            </div>
        </body>
        <body>{children}</body>
      </html>
    )
  }