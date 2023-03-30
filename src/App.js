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
import Main from './pages/Main'
import DetalleCA from './pages/DetalleCA';
import FaqCAI from './pages/FaqCAI';	
import FaqCAE from './pages/FaqCAE';
import Grafico3 from './components/Grafico3';
import DetalleCAI from './pages/DetalleCAI';

function App() {
  return (
    <div className="container-all">
      {/*<div className='container-main'>*/}
        <Router>
          <Routes>

          <Route path='/' element={<Main/>}/>
          <Route path='/detalle-calidad-del-aire' element={<DetalleCA/>}/>
          <Route path='/detalle-calidad-del-aire-interiores' element={<DetalleCAI/>}/>
          <Route path='/faq-carga-viral' element={<FaqCAI/>}/>	
          <Route path='/faq-calidad-de-aire' element={<FaqCAE/>}/>
          <Route path='/detalle-carga-viral' element={<DetalleCA/>}/>
          <Route path='/grafico-semana' element={<Grafico3/>}/>

            <Route path='/dashboard' element={<Dashboard/>}/>  
            <Route path='/universidad-nacional-de-ingenieria' element={<University/>}/> 
            <Route path='/carga-viral-CTIC' element={<CargaViralCTIC/>}/>
            <Route path='/carga-viral-comedor-universitario' element={<CargaViralComedor/>}/>
            <Route path='/calidad-de-aire-ctic' element={<CalidadAireCTIC/>}/>
            <Route path='/calidad-de-aire-puerta-5' element={<CalidadAirePuerta5/>}/>
            <Route path='/calidad-de-aire-puerta-3' element={<CalidadAirePuerta3/>}/>
            <Route path='/smart-parking' element={<SmartParking/>}/>
            <Route path='/localización/101' element={<SmartParking/>}/>
          </Routes>
        </Router>       
      {/*</div>*/}
    </div>
  );
}

export default App;