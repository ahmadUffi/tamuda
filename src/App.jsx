import Hero from "./Components/hero/Hero";
import Beranda from "./Components/beranda/Beranda";
import Akun from "./Components/akun/Akun";
import Kontak from "./Components/kontak/Kontak";
import { Route, Routes, useNavigate } from "react-router-dom";
import Artikel from "./Components/artikel/Artikel";
import Navbar from "./Components/Utility/navbar/Navbar";
import Footer from "./Components/Utility/footer/Footer";

import { useState } from "react";
import Login from "./Components/auth/login/Login";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" index element={<Hero />} />
        <Route path="/home" element={<Beranda />} />
        <Route path="/akun" element={<Akun />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/beranda/:artikel" element={<Artikel />} />
      </Routes>
    </div>
  );
}

export default App;
