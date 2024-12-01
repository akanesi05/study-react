
import styles from "./Links.module.css";
import Image from "next/image"


const ITEMS =[
  {  href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title:" Deploy now2"
  }
,{  href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title:"Read our docs2"
}
]



export  function Links() {
  return (
          <div className={styles.ctas}>
            {ITEMS.map(item=>{
              return(
                <a  key={item.href}href={item.href}
              className={styles.primary}
              //href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>

              )
            })}
          </div>
  );
}
