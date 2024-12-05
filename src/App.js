import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { useAuth } from "./context/AuthProvider";

function App() {
  const { loading, data } = useAuth();
  console.log(loading);
  console.log(data);
  return (
    <div>
      <NavBar />
      <SideBar />
    </div>
  );
}

export default App;
