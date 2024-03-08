import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs'

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Visionnaire",
  description: "Modification d'images propulsé par l'IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider appearance={{ 
      variables: {colorPrimary: '#624cf5'}}}>

      <html lang="en">
        <body className={cn("font-Roboto ", roboto.className)}>{children}
        </body>
      </html>

    </ClerkProvider>

  );
}
