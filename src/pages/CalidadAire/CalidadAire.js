import "./CalidadAire.css"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Main from "./Main/Main"
import DetalleCA from "./Exteriores/DetalleCA"
import FaqCAI from "./Interiores/FaqCAI"
import FaqCAE from "./Exteriores/FaqCAE"
import DetalleCAI from "./Interiores/DetalleCAI"
import ComedorCAI from "./Interiores/ComedorCAI"
import Sidebar from "./Sidebar"

function CalidadAire() {
    const [open, setOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(0);

  return (
    <div className={`flex duration-300 ${open ? "pl-72" : "pl-20"}`}>

      <Sidebar open={open} setOpen={setOpen} submenuOpen={submenuOpen} setSubmenuOpen={setSubmenuOpen} />
        
      <div className={open ? "container__main__" : "container__main__nx"}>
        
          <Routes>
            
            <Route path="/" element={<Main />} />
            
            {/* ----- Exteriores ------- */}
            <Route path="exteriores" element={<DetalleCA />}/>
            <Route path="exteriores-ayuda" element={<FaqCAE />} />
            
            {/* ------- Exteriores -------------- */}
            <Route path="interiores-ctic" element={<DetalleCAI />}/>
            <Route path="interiores-comedor" element={<ComedorCAI />}/>
            <Route path="interiores-ayuda" element={<FaqCAI />} />

          </Routes>
 
      </div>
    </div>
  );
}

export default CalidadAire;
