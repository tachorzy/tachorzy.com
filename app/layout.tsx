import './globals.css'
import { ManropeExtraBold, ManropeRegular, ManropeMedium, AmiriBoldSlanted } from '../lib/localNextFonts'
import HamburgerMenu from '../components/HamburgerMenu'

export const metadata = {
  title: 'Tariq Achor Zyad',
  description: 'Web Developer',
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
        <body>        
            <div className={ManropeRegular.className}>
                <div className="fixed top-0 right-0 md:max-2xl:mt-12 md:max-2xl:mr-12 mt-6 mr-6 z-50">
                    <HamburgerMenu/>
                </div>
            </div>
        </body>
        <body>{children}</body>
      </html>
    )
  }