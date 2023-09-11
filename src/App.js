import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

/** Landing page*/
import Landing from "./pages/LandingPage/Landing"

/** Calidad */
import CalidadAire from "./pages/CalidadAire/CalidadAire"
import Bienvenida from "./pages/CalidadAire/Bienvenida/Bienvenida"
import CalidadAgua from "./pages/CalidadAgua/CalidadAgua"

/** Visión */
import ControlAforo from "./pages/CuentaPersonas/ControlAforo"
import SmartParking from "./pages/SmartParking/SmartParking"
import DetectorPlacas from "./pages/DetectorPlacas/DetectorPlacas"
import Senasa from "./pages/Senasa/Senasa"

/** Metaverso*/
import Metaverso from "./pages/Metaverso/Metaverso"

/** Test */
import ReconocimientoFacial from "./pages/Test/ReconocimientoFacial"
import Cuentaspersonas from "./pages/Test/Cuentapersonas"
import Test from "./pages/template/Test"
import UsuariosSC from "./pages/Proyectos/UsuariosSC"
import PopupAlerta from "./components/PopupAlertas/PopupAlerta"
import { AlertaProvider } from "./components/PopupAlertas/AlertasContextProvider"
import AlertaSensor from "./pages/AlertaSensor/AlertaSensor"



function App() {

  return (
    <div className="container-general">
     
      <AlertaProvider>
        
          
        
      

      
        <Router>
          {/*<PopupAlerta/>*/}
          <Routes>
            <Route path="/" element={<Landing/>}/>

            {/* -------- Calidad -------------- */}
            <Route path="/calidad-del-aire" element={<Bienvenida/>}/>
            <Route path="/calidad-del-aire-uni/*" element={<CalidadAire/>} />
            <Route path="/calidad-del-agua" element={<CalidadAgua/>}/>

            {/* ------------- Visión ----------- */}
            <Route path="/control-aforo" element={<ControlAforo/>} />
            <Route path="/smart-parking" element={<SmartParking/>}/>
            <Route path="/detector-de-placas" element={<DetectorPlacas/>}/>

            <Route path="/senasa/*" element={<Senasa/>} />
          
            {/** ------ Metaverso ------------- */}
            <Route path="/metaverso" element={<Metaverso/>} />

            <Route path="/alerta-sensor" element={<AlertaSensor/>}/>

            {/* ------ Test ----- */}
            <Route path="/cuenta-personas" element={<ReconocimientoFacial/>} />
            <Route path="/reconocimiento-facial" element={<Cuentaspersonas/>} />
            <Route path="/personas-smartcity" element={<UsuariosSC/>}/>
            <Route path="/test" element={<Test/>}/>
          </Routes>
        </Router>
      </AlertaProvider>
    </div>
  );
}

export default App;
