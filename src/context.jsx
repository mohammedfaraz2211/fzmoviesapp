import React, { useContext, useEffect } from "react";
import { useState } from "react";


export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isloading, setIsloading] = useState(true);
  const [movie, setmovie] = useState([]);
  const [iserror, setiserror] = useState({
    show: false,
    msg: "",
  })
  const [serachTitle , setSerachTitle]=useState("avengers")
  const ApiMovies = async (url) => {
    setIsloading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("......", data);
      if (data.Response === "True") {
        setIsloading(false)
        setmovie(data.Search)
        setiserror({
          show: false,
          msg: data.Error,
        })

      } else {
        setiserror({
          show: true,
          msg: data.Error,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const clearintVal = setTimeout(() => {
      ApiMovies(`${API_URL}&s=${serachTitle}`)
    }, 500);
    return()=> clearInterval(clearintVal)
  }, [serachTitle]);

  return (
    <AppContext.Provider value={{ isloading, movie, iserror , serachTitle , setSerachTitle }}>
      {children}
    </AppContext.Provider>
  )
}

//create global context to use easily:
const useGlobalContext = () => {
  return useContext(AppContext);
}



export { AppProvider, AppContext, useGlobalContext }
