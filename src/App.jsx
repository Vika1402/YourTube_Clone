import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PlayVideo from "./components/PlayVideo";
import Search from "./components/Search";
import { useAuth } from "./context/AuthProvider";
import Loading from "./loader/Loading";
function App() {
  const { loading } = useAuth();
  return (
    <div>
      {loading && <Loading />}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayVideo />} />
      </Routes>
    </div>
  );
}

export default App;
