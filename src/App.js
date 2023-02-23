import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import University from './pages/University';
import CargaViralCTIC from './pages/CargaViralCTIC';
import CargaViralComedor from './pages/CargaViralComedor';
import CalidadAireCTIC from './pages/CalidadAireCTIC';
import CalidadAirePuerta5 from './pages/CalidadAirePuerta5';
import CalidadAirePuerta3 from './pages/CalidadAirePuerta3';
import SmartParking from './pages/SmartParking';

function App() {
  return (
    <div className="container-all">
      {/*<div className='container-main'>*/}
        <Router>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>  
            <Route path='/universidad-nacional-de-ingenieria' element={<University/>}/> 
            <Route path='/carga-viral-CTIC' element={<CargaViralCTIC/>}/>
            <Route path='/carga-viral-comedor-universitario' element={<CargaViralComedor/>}/>
            <Route path='/calidad-de-aire-ctic' element={<CalidadAireCTIC/>}/>
            <Route path='/calidad-de-aire-puerta-5' element={<CalidadAirePuerta5/>}/>
            <Route path='/calidad-de-aire-puerta-3' element={<CalidadAirePuerta3/>}/>
            <Route path='/smart-parking' element={<SmartParking/>}/>
          </Routes>
        </Router>       
      {/*</div>*/}
    </div>
  );
}

export default App;