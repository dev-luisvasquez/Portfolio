import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTopWrapper from "./components/helper/scrollTopWrapper";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luis Vasquez - Software Developer",
  description:
    "Soy desarrollador frontend autodidacta, apasionado por la tecnología y el aprendizaje constante. Me especializo en crear interfaces modernas y funcionales, con un enfoque en la experiencia de usuario. Aprendo rápido, disfruto asumir nuevos retos y colaborar en proyectos donde pueda aportar valor y seguir creciendo profesionalmente.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTopWrapper />
        </main>
      </body>
    </html>
  );
}
