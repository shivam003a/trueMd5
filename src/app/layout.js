import { Suspense } from "react";
import { Poppins, Honk, Montserrat, Leckerli_One } from "next/font/google";
import "./globals.css";
import Loading from '@/app/loading'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const honk = Honk({
  variable: "--font-honk",
  subsets: ["latin"],
});

const leckerli = Leckerli_One({
  variable: '--font-leckerli',
  subsets: ['latin'],
  weight: ['400']
})


export const metadata = {
  title: "TrueMD5 – Secure & Private MD5 File Verifier",
  description: "Verify the MD5 checksum of any file directly in your browser. 100% local, private, and supports large files with chunked processing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
