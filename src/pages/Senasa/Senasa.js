import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Grafica from "./pages/Grafica"
import Descargar from "./pages/Descargar"

function Senasa(){

    return (
        <div>
            <Routes>
            
                <Route path="/" element={<Main />} />
                <Route path="/grafica" element={<Grafica />} />
                <Route path="/descargar" element={<Descargar />} />

            </Routes>

        </div>
    )
}

export default Senasa;