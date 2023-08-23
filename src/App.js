import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetalleCA from "./pages/CalidadAire/Exteriores/DetalleCA";
import Grafico3 from "./components/Grafico3";
import Landing from "./pages/LandingPage/Landing";
import ReconocimientoFacial from "./pages/Test/ReconocimientoFacial";
import CanvasComedor from "./components/comedor/CanvasComedor";
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

            <Route path="/calidad-del-aire" element={<Bienvenida/>}/>
            <Route path="/calidad-del-aire-uni/*" element={<CalidadAire/>} />
            
            <Route path="/cuenta-personas" element={<ReconocimientoFacial/>} />
            <Route path="/reconocimiento-facial" element={<Cuentaspersonas/>} />

            <Route path="/senasa" element={<Senasa/>} />

            <Route path="/calidad-del-agua" element={<CalidadAgua/>}/>


            <Route path="/temporal" element={<CanvasComedor/>}/>
            <Route path="/detalle-carga-viral" element={<DetalleCA />} />
            <Route path="/grafico-semana" element={<Grafico3 />} />
            <Route path="/control-aforo" element={<ControlAforo/>} />
            <Route path="/metaverso" element={<Metaverso/>} />



            <Route path="/detector-de-placas" element={<DetectorPlacas/>}/>
            <Route path="/smart-parking" element={<SmartParking/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
