import { SiWindicss } from "react-icons/si"
import { AiOutlineCheck } from "react-icons/ai"
import { MdCo2 } from "react-icons/md"

export default function Opciones({estadoCA, estadoCV, handleCambiarCA, handleCambiarCV}){

    return(
        <div className="calidad__del__aire__carga__viral">
          <div
            className={estadoCA ? "ca-cv-2" : "ca-cv"}
            onClick={() => handleCambiarCA(0)}
          >
            <SiWindicss />
            <span>Calidad del Aire en Exteriores</span>
            {estadoCA ? <AiOutlineCheck /> : ""}
          </div>
          <div
            className={estadoCV ? "ca-cv-2" : "ca-cv"}
            onClick={() => handleCambiarCV(1)}
          >
            <MdCo2 />
            <span>Calidad del Aire en Interiores</span>
            {estadoCV ? <AiOutlineCheck /> : ""}
          </div>
        </div>
    )
}