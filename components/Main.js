import Image from "next/image";

import styles from "./Main.module.css";
import {Links} from "@/components/Links";
import {Headline} from "@/components/Headline";


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
