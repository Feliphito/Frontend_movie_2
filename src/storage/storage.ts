import { useState, useEffect } from "react";
import { Movie } from "../interfaces";

interface LocalProps {
    key: string;
    initialValue: Movie[];
}


export const useLocalStorage = ({key, initialValue}: LocalProps) => {
  const [value, setValue] = useState<LocalProps>(() => {
    
    if(!initialValue)
    try {
      const value =localStorage.getItem(key);
      return value ? JSON.parse(value): initialValue;
      
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    if(value){
      try{
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error){
        console.log(error)
      }
  }}, [value, key]);

  return [value, setValue];
};

