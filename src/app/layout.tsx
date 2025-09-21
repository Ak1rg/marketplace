import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "@/app/globals.scss";
import { Providers } from "./providers";


const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Words",
  description: "Words app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
