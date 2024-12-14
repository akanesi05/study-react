
import styles from "src/components/Links/Links.module.css";
import Image from "next/image"
import { useCallback, useState } from "react";
import handler from "src/pages/api/hello";


const ITEMS =[
  {  href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title:" Deploy now2"
  }
,{  href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title:"Read our docs2"
}
]

//propsの中にitems propsの受け取り方

export  function Links({items,handleReduce}) {
   console.log(items,handleReduce)
  return (
          <div className={styles.ctas}>
            <button onClick={handleReduce}>減らす</button>
            {Object.values(items).map((item) => {
  return (
    <a
      key={item.href}
      href={item.href}
      className={styles.primary}
      target="_blank"
      rel="noopener noreferrer"
    >
      {item.title}
    </a>
  );
})}

          </div>
  );
}
