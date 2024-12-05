import Image from "next/image";

import styles from "src/components/Main/Main.module.css";
//import {Links} from "@/src/components/Links/Links";
import {Headline} from "src/components/Headline";
import { Links } from "src/components/Links/Links";



export  function Main(props) {
  // useEffect(()=>{
  //   document.body.style.backgroundColor="lightblue"
  //   return()=>{
  //     document.body.style.backgroundColor=""
    
  //   }

  // },[])

  
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
