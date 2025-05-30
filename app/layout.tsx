import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="profile-page sidebar-collapse">
          <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
              <div className="navbar-translate">
                <a className="navbar-brand" href="#" rel="tooltip">Creative CV</a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navigation"
                  aria-controls="navigation"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse justify-content-end" id="navigation">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" className="nav-link text-white">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about" className="nav-link text-white">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/skills" className="nav-link text-white">Skills</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/education" className="nav-link text-white">Education</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact" className="nav-link text-white">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {children}
        <footer className="footer text-white py-4 mt-5">
          <div className="container text-center">
            <div className="h4 title text-black">NextJS</div>
            <div className="text-muted">
              <p>&copy; Creative CV. All rights reserved.<br />
                Design - <a className="credit" href="https://templateflip.com" target="_blank" rel="noopener noreferrer">TemplateFlip</a>
              </p>
            </div>
          </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
