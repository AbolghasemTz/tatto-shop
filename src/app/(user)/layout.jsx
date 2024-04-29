import { Inter } from "next/font/google";
import "../globals.css";
import estedadFont from "../../constant/localFonts";
import Header from "../../components/Header";
import { Toaster } from 'react-hot-toast';
import Providers from "../Providers";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "فروشگاه سارا تتو",
  description: "فروشگاه سارا تتو",
};
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${estedadFont.variable} bg-white`}
      >
        
        <Toaster />
        <Providers>
        <Header />
          {children}
          <Footer />
        </Providers>
       
        </body>
    </html>
  );
}
