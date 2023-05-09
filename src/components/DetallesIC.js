import './css/DetallesIC.css';
import { obtenerhora } from "./obtenerhora";
import { obtenerfecha } from "./obtenerfecha";

const nombrelugar = (e) => {
    if (e === "cv-comedor") return "Comedor Universitario";
    else if (e === "cv-ctic") return "CTIC";
};

export default function DetallesIC({id}){


    return (
        <div className="container__main__detalles__i">
            <div className="container__titulo">{nombrelugar(id)}</div>
            <div className="container__ciudad__pais">Lima, Perú</div>
            <div className="container__hora__fecha">{`${obtenerhora()}, ${obtenerfecha()}`}</div>
        </div>
    )
}