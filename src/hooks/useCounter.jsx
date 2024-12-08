import { useState,useCallback } from "react";



export const useCounter=()=>{
    const [count,setCount]=useState(1)
    const [isShow,setIsShow]=useState("")
  
    const handleClick=useCallback((e)=>{
      if (count<10){
      setCount(count=>count+1)
      }
      },[count])
  
  
      const handleDisplay=useCallback(()=>{
      setIsShow((previsShow)=>!previsShow)
      },[])
   return {count,isShow,handleClick,handleDisplay}
  }
