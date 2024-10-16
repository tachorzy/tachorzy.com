import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ManropeRegular } from '../lib/localNextFonts'
import HamburgerMenu from '../components/hamburgerMenu/HamburgerMenu'

export const metadata = {
  title: 'Tariq Achor Zyad',
  description: 'Intrepid developer, traveler, and learner.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body> 
            <div className={ManropeRegular.className + " "}>
                <div className="fixed top-0 right-0 mr-6 md:mt-12 md:mr-12 mt-6 z-50">
                    <HamburgerMenu/>
                </div>
            </div>
        </body>
        <body>
          {children}
          <SpeedInsights/>
        </body>
      </html>
    )
  }