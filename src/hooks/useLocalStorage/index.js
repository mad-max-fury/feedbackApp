import { useState, useEffect } from "react";
//getting item from localStorage function
function getSavedValue(key, initVal) {
  const savedVal = JSON.parse(localStorage.getItem(key))
  //checking if item exist
  if (savedVal) return savedVal
  //checking if the item is a function and invoking it right away
  if (initVal instanceof Function) return initVal()
  // if the item is not a function, we just return it
  return initVal
}
//creating our hook
export default function useLocalStorage(key, initVal) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initVal)
  })
  //adding items to localStorage on any value change
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])


  return [value, setValue]
}