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
          <a className="hover:no-underline">
            <h1 className="text-2xl bold">karls hideout</h1>
          </a>
          <nav className="block isolate">
            <p>
              <a className="text-blue-500 mr-2 cursor-pointer no-underline hover:underline" href="/">home</a>
              <a className="text-blue-500 mr-2 cursor-pointer no-underline hover:underline" href="/projects/">projects</a>
              <a className="text-blue-500 mr-2 cursor-pointer no-underline hover:underline" href="/blog/">blog</a>
              <a className="text-blue-500 mr-2 cursor-pointer no-underline hover:underline" href="/gallery/">gallery</a>
            </p>
          </nav>
        </header>
        {children}

        <footer className="flex items-end justify-center">
          <p>
            © 2024 karl
          </p>
        </footer>
        </main>
      </body> 
    </html>
  );
}
