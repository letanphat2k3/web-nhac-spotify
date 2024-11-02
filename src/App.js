import React, { useEffect } from "react";
import { useStateProvider } from "./action/StateProvider";
import { reducerCases } from "./action/Constants";
import Spotify from "./components/Spotify/Spotify";
import Login from "./components/Login/Login";


export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  
  useEffect(() => {
    const hash = window.location.hash;
    console.log("URL Hash:", hash);  
    if (hash) {
      const token = hash.split("&")[0].split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, token });
      window.location.hash = ""; 
    }
  }, [dispatch])

  return (<div>{token ? <Spotify /> : <Login />}</div>);
}
