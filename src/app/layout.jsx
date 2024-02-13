import { Inter } from "next/font/google";
import "./globals.css";
import estedadFont from "./constant/localFonts";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${estedadFont.variable} bg-white`}
      >
        <Header />
        {children}</body>
    </html>
  );
}