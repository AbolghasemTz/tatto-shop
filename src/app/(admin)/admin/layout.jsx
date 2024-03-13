import "../../globals.css";
import Providers from "../../Providers";
import { Toaster } from "react-hot-toast";
import AdminSideBar from "./AdminSidebar";

export const metadata = {
  title: "پروفایل ادمین",
  description: "پروفایل ادمین",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className= "font-sans"
      >
         <Providers>
          <Toaster />
          <div className="  bg-white   flex ">
         <div className="  p-4 ">
        <AdminSideBar />
         </div>
          <div className="flex-1   p-4 ">{children}</div>
          </div>
       </Providers>
      </body>
    </html>
  );
}
