import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Grafica from "./pages/Grafica/Grafica"
import Descargar from "./pages/Descargar"
import Grafica2 from "./pages/Grafica2"

function Senasa(){

    return (
        <div>
            <Routes>
            
                <Route path="/" element={<Main />} />
                <Route path="/grafica-test" element={<Grafica />} />
                <Route path="/grafica" element={<Grafica2/>} />
                <Route path="/descargar" element={<Descargar />} />

            </Routes>

        </div>
    )
}

export default Senasa;