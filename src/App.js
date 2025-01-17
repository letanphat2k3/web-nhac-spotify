import React, { useEffect } from "react";
import { useStateProvider } from "./action/StateProvider";
import { reducerCases } from "./action/Constants";
import Spotify from "./components/Spotify/Spotify";
import Login from "./components/Login/Login";

export default function App() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    // Lấy token từ localStorage nếu có
    let token = localStorage.getItem("token");

    // Nếu không tìm thấy token trong localStorage, kiểm tra URL
    if (!token) {
      const hash = window.location.hash;
      if (hash) {
        token = hash.split("&")[0].split("=")[1];
        localStorage.setItem("token", token); // Lưu token vào localStorage
        window.location.hash = ""; // Xóa hash từ URL
      }
    }

    // Nếu tìm thấy token, cập nhật state với token đó
    if (token) {
      dispatch({ type: reducerCases.SET_TOKEN, token });
    } else {
      console.error("Token không tồn tại. Vui lòng kiểm tra URL hoặc quá trình xác thực.");
    }
  }, [dispatch]);

  // Hiển thị giao diện dựa trên trạng thái token
  return <div>{token ? <Spotify /> : <Login />}</div>;
}
