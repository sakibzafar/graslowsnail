import './globals.css'
import { Navbar, Footer } from '@/components';

export const metadata = {
  title: 'graslowsnail',
  description: 'Discover photos taken around the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className='relative flex flex-col min-h-screen'>
            <Navbar />
            {children}
            <Footer />
        </body>
    </html>
  )
}

