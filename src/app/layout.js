
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >

        <div className="w-[390px] h-[844px] fixed top-0 bottom-0 left-0 border-2 right-0 mx-auto my-auto shadow-lg rounded-md">
          {children}
        </div>
    
      </body>
    </html>
  );
}
