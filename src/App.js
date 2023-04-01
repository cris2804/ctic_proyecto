import './App.css';
import {useState, useEffect} from 'react';
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
import CSV from './pages/CSV';
import Inicio from './images/grid.svg';
import carga from './images/carga.png';
import cae from './images/cae3.png';
import logo from './images/logo.png';

function App() {
  const [isExpanded, setExpendState] = useState(false);
	const [selected, setSelected] = useState(null);
  const [actual, setActual] = useState(0);


  const toggle = (i) => {
    if(selected ===  i){
    	setSelected(null)
	}else if((i === 1 || i === 2) && !isExpanded){
      setSelected(i)
	  setExpendState(true)
    }else{
		setSelected(i)
	}
    setActual(i)
  }
  useEffect(() => {
		if(!isExpanded) setSelected(null)
	},[isExpanded]);

  return (
    <div className="main">
      <div className={isExpanded ? "container__sidebar__":"container__sidebar__nx"}>
			<div className={isExpanded ? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
				<div className="nav-upper">
					<div className="nav-heading">
						{isExpanded && (
							<div className="nav-brand">
								<img src={logo} alt="" />
							</div>
						)}
						<button
							className={isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"}
							onClick={() => setExpendState(!isExpanded)}>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
					<div className="nav-menu">
						
						<a className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} style={{background: `${actual === 0 ? "#2DBBAE":"none"}`}} onClick={() => toggle(0)} href="/">
							<img className="menu-item-icon" src={Inicio} alt=""/>
							{isExpanded && <p>Inicio</p>}
						</a>
						
						<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} style={{background: `${actual === 1 ? "#2DBBAE":"none"}`}} onClick={() => toggle(1)}>
							<img className="menu-item-icon" src={cae} alt=""/>
							{isExpanded && <p>Calidad del aire en interiores</p>}
						</div>
						<div className={selected === 1 ? 'content show2' : 'content'}>
							<a className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} href="/calidad-aire-interiores-ctic">
								{isExpanded && <p>CTIC</p>}
							</a>
							<a className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} href="/calidad-aire-interiores-comedor">
								{isExpanded && <p>Comedor Universitario</p>}
							</a>
						</div>

						<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} style={{background: `${actual === 2 ? "#2DBBAE":"none"}`}} onClick={() => toggle(2)}>
							<img className="menu-item-icon" src={carga} alt=""/>
							{isExpanded && <p>Calidad del aire en exteriores</p>}
						</div>
						<div className={selected === 2 ? 'content show2' : 'content'}>
							<a className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} href="/calidad-aire-exteriores-ctic">
								{isExpanded && <p>CTIC</p>}
							</a>
							<a className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} href="/calidad-aire-exteriores-puerta-3">
								{isExpanded && <p>Puerta 3</p>}
							</a>
							<a className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} href="/calidad-aire-exteriores-puerta-5">
								{isExpanded && <p>Puerta 5</p>}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
      <div className={isExpanded ? "container__main__":"container__main__nx"}>
        <Router>
          <Routes>

          <Route path='/' element={<Main/>}/>
          <Route path='/detalle-calidad-del-aire' element={<DetalleCA/>}/>
          <Route path='/detalle-calidad-del-aire-interiores' element={<DetalleCAI/>}/>
          <Route path='/faq-carga-viral' element={<FaqCAI/>}/>	
          <Route path='/faq-calidad-de-aire' element={<FaqCAE/>}/>
          <Route path='/detalle-carga-viral' element={<DetalleCA/>}/>
          <Route path='/grafico-semana' element={<Grafico3/>}/>
		  <Route path='/csv' element={<CSV/>}/>

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
      </div>
    </div>
  );
}

export default App;