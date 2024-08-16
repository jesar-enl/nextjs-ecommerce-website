import { ThemeProvider } from '@/components/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'NextJs E-Commerce Application',
  description: 'A fully featured e-commerce application built with NextJs',
  icons: '/images/logo-no-background.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: '#000000' },
        elements: {
          formButtonPrimary:
            'bg-black border border-black border-solid hover:bg-white hover:text-black',
          socialButtonsBlockButton:
            'bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black',
          socialButtonsBlockButtonText: 'font-semibold',
          formButtonReset:
            'bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black',
          membersPageInviteButton:
            'bg-black border border-black border-solid hover:bg-white hover:text-black',
          card: 'bg-[#fafafa]',
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={poppins.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <main className="my-2">{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
