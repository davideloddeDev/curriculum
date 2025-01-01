import './App.css'
import { Home } from "./Home.jsx";
import { Anagrafica } from "./Anagrafica.jsx";
import { Studi } from "./Studi.jsx";
import { Lavori } from "./Lavori.jsx";
import { Contatti } from "./Contatti.jsx";
import { HeaderPages } from "./HeaderPages.jsx";
import { FooterPages } from "./FooterPages.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <HeaderPages />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/anagrafica" element={<Anagrafica />} />
        <Route path="/studi" element={<Studi />} />
        <Route path="/lavori" element={<Lavori />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
      <FooterPages/>
    </BrowserRouter>
  )
}

export default App