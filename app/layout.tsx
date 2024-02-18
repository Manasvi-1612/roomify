"use client";
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/context/authContext'
import { useState } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

// export const metadata: Metadata = {
//   title: 'Roomify',
//   icons: {
//     icon: '/assets/images/logo.png',
//   }
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [authStatus, setAuthStatus] = useState(false);

  return (
    <html lang="en">
      <body className={poppins.variable}>
        <AuthProvider value={{ authStatus, setAuthStatus }}>
          <div className="flex h-screen flex-col">
            <Header />
            <main className="flex-1">
              <Toaster position='top-center' />
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
