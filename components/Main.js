import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import {Links} from "@/components/Links";
import {Headline} from "@/components/Headline";

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
export  function Main(props) {
  return (
    <>
      
      
        <main className={styles.main}>
          <Headline title="index page" page={props.page}  >
          code=<code>pages/{props.page}</code>
        
          </Headline>
          
          <Links/>
        </main>
       
    </>
  );
}
