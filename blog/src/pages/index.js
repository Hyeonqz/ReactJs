import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import NavigationBar from "@/pages/component/NavigationBar";
import Header from "@/pages/component/Header";
import Postings from "@/pages/component/Postings";
import Footer from "@/pages/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <NavigationBar />
        <Header />
        <Postings />
        <Footer />
    </>
  );
}
