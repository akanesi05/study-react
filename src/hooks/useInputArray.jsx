import { useState, useEffect, useCallback } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素がすでに存在します");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};




















// import { useState,useCallback } from "react";

// export const useInputArray=()=>{ const [text,setText]=useState("")
//     const [array,setArray]=useState([])
//      useEffect(()=>{
//       document.body.style.backgroundColor="lightblue"
//       return()=>{
//         document.body.style.backgroundColor=""
      
//       }
  
//     },[])
  
//     const handleChange =useCallback((e)=>{
//       if (e.target.value.length>5){
//         alert("5文字以内にしてください")
//         return
//       }
//       setText(e.target.value.trim())
//     },[])
  
//     const handleAdd=useCallback(()=>{
//       setArray((prevArray)=>{
//         if (prevArray.some((item)=>item===text)){
//           alert("同じ要素がすでに存在します")
//           return prevArray
//         }
//         return [...prevArray,text]
//       })
//     },[text])
//     return {text,array,handleChange,handleAdd}
//   }
  

 