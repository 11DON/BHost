import { Navbar } from 'react-bootstrap';
import HomePage from './pages/homePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RayaInsurance from './pages/rayaInsuPage';
import CrmPage from './pages/crmPage';
import EdiSysPage from './pages/ediSysPage';
import SpmPage from './pages/spmPage';




function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/rayaInsuPage" element={<RayaInsurance />}></Route>
        <Route path="/crmPage" element={<CrmPage />}></Route>
        <Route path="/ediSysPage" element={<EdiSysPage />}></Route>
        <Route path="/spmPage" element={<SpmPage />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
