import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Descargar from "./pages/Descargar"
import Grafica from "./pages/Grafica"

function Senasa(){

    return (
        <div>
            <Routes>
            
                <Route path="/" element={<Main />} />
                <Route path="/grafica/trampa/:numero" element={<Grafica/>} />
                <Route path="/descargar/trampa/:numero" element={<Descargar />} />

            </Routes>

        </div>
    )
}

export default Senasa;