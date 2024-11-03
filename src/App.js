import React, { useEffect } from "react";
import { useStateProvider } from "./action/StateProvider";
import { reducerCases } from "./action/Constants";
import Spotify from "./components/Spotify/Spotify";
import Login from "./components/Login/Login";

export default function App() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (!token) {
      const hash = window.location.hash;
      if (hash) {
        token = hash.split("&")[0].split("=")[1];
        localStorage.setItem("token", token); // Lưu token vào localStorage
        window.location.hash = "";
      }
    }

    if (token) {
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [dispatch]);

  return <div>{token ? <Spotify /> : <Login />}</div>;
}
