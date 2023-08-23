import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
import ReconocimientoFacial from "./pages/Test/ReconocimientoFacial";
import Cuentaspersonas from "./pages/Test/Cuentapersonas";
import Senasa from "./pages/Senasa/Senasa";
import CalidadAgua from "./pages/CalidadAgua/CalidadAgua";
import ControlAforo from "./pages/CuentaPersonas/ControlAforo";
import Metaverso from "./pages/Metaverso/Metaverso";
import DetectorPlacas from "./pages/DetectorPlacas/DetectorPlacas";
import SmartParking from "./pages/SmartParking/SmartParking";

import CalidadAire from "./pages/CalidadAire/CalidadAire";
import Bienvenida from "./pages/CalidadAire/Bienvenida/Bienvenida"

function App() {

  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Landing/>}/>

            {/* -------- Calidad -------------- */}
            <Route path="/calidad-del-aire" element={<Bienvenida/>}/>
            <Route path="/calidad-del-aire-uni/*" element={<CalidadAire/>} />
            <Route path="/calidad-del-agua" element={<CalidadAgua/>}/>

            {/* ------------- Visión ----------- */}
            <Route path="/control-aforo" element={<ControlAforo/>} />
            <Route path="/smart-parking" element={<SmartParking/>}/>
            <Route path="/senasa" element={<Senasa/>} />
            <Route path="/detector-de-placas" element={<DetectorPlacas/>}/>

            
            <Route path="/metaverso" element={<Metaverso/>} />


            {/* ------ Test ----- */}
            <Route path="/cuenta-personas" element={<ReconocimientoFacial/>} />
            <Route path="/reconocimiento-facial" element={<Cuentaspersonas/>} />

          </Routes>
        </Router>
    </div>
  );
}

export default App;
