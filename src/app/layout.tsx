import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "karl's blog.",
  description: "karl's personal blog.",
  icons: {
    icon: [
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
     
      <body>
        <main className="flex flex-col">
        <header>
          <nav>
            <a href="/">home</a>
            <span> · </span>
            <a href="/projects/">projects</a>
            <span> · </span>
            <a href="/blog/">blog</a>
          </nav>
        </header>
        {children}

        <footer>
          <p>© 2025 karl</p>
        </footer>
        </main>
      </body> 
    </html>
  );
}
