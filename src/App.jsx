import { Navbar } from 'react-bootstrap';
import HomePage from './pages/homePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RayaInsurance from './pages/rayaInsuPage';



function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/rayaInsuPage" element={<RayaInsurance />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
