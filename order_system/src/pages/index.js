import { Inter } from "next/font/google";
import Header from "@/pages/component/Header";
import Main from "@/pages/component/Main";
import Footer from "@/pages/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
