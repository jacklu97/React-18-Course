import { useState, useEffect } from "react";

const useCounter = (increaser = 0) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + increaser);
    }, 1000);

    return () => clearInterval(interval);
  }, [increaser]);


  return counter
}

export default useCounter