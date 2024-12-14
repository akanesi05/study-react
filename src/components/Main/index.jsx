import Image from "next/image";

import styles from "src/components/Main/Main.module.css";
//import {Links} from "@/src/components/Links/Links";
import {Headline} from "src/components/Headline";
import { Links } from "src/components/Links/Links";
import { useCallback, useState } from "react";


const ITEMS =[
  {  href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title:" Deploy now2"
  }
,{  href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title:"Read our docs2"
}
]
export  function Main(props) {
 
  const [items,setItems]=useState([ITEMS])
   const handleReduce=useCallback(()=>{
    console.log("hoge")
    setItems(prevItems =>{
      return prevItems.slice(0,prevItems.length-1)
    })
   },[])
  
  return (
    <>
      
      
        <main className={styles.main}>
          <Headline title="index page" page={props.page}  >
          code=<code>pages/{items.length}</code>
        
          </Headline>
          
          <Links items={items} handleReduce={handleReduce}/>
        </main>
       
    </>
  );
}
