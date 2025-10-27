import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "karl's blog.",
  description: "karl's personal blog.",
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
