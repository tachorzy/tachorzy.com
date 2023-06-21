import './globals.css'

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
        <body>{children}</body>
      </html>
    )
  }