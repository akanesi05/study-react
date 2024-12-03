import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import {Headline} from "src/components/Headline";
import{Main}from "src/components/Main";
import { Header } from "src/components/Header";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export default function Home() {
  return (
    <>
      <Head>
        <title>AboutPage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
      
        <Main page="about"/>
        <Footer/>
      </div>
    </>
  );
}
