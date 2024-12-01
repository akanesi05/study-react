import Link from "next/link";
import classes from "./Header.module.css"

export function Header() {
  return (
        
        <header className={classes.header}>
        <ul className={classes.anchor}><Link href="/">index</Link
        ><Link href="/about"> about</Link>
        </ul>
          
        
        </header>
    
    
  );
}
