import "./Main.css"
import { ubicaciones } from "./assets/ubicaciones"
import { ubicacionesCV } from "./assets/ubicacionesCV"
import { useState } from "react"
import { RiCloseCircleFill } from "react-icons/ri"
import Detalles from "./components/Detalles"
import AyudaCAE from "./components/AyudaCAE"
import AyudaCAI from "./components/AyudaCAI"
import DetallesI from "./components/DetallesI"
import { rangoscae } from "./assets/rangoscae"
import { rangoscai } from "./assets/rangoscai"
import DetallesIC from "./components/DetallesIC"
import Rangos from "./components/Rangos"
import Opciones from "./components/Opciones"
import Mapa from "./components/Mapa"

function changeOption(i, id, estado) {
  if (i === 0) {
    return <Detalles id={id} />
  } else if (i === 1) {
    if (id === "cv-ctic") return <DetallesI id={id} />
    else return <DetallesIC id={id} />
  } else if (i === 2) {
    if (estado) return <AyudaCAE />
    else return <AyudaCAI />
  }
}

function Main() {
  const [ubi, setUbi] = useState(ubicaciones);
  /*-- */
  const [estadoCA, setEstadoCA] = useState(true);
  const [estadoCV, setEstadoCV] = useState(false);
  /*--- */
  const [id, setId] = useState("ca-ctic");
  const [bol, setBol] = useState(true);

  /*--- */
  const [i, setI] = useState(0);

  /*--- */
  const [rangos, setRangos] = useState(rangoscae);

  /*-- */
  const handleCambiarCA = (i) => {
    setUbi(ubicaciones);
    setRangos(rangoscae);

    //para que podamos ver si estamos en cae
    if (estadoCA === false && estadoCV === true) {
      setEstadoCA(true);
      setEstadoCV(false);
    }
    //se oculta el panel cuando pasamos de cai a cae
    if (i !== 2) setId("ca-ctic");
    setI(i);
  };
  const handleCambiarCV = (i) => {
    setUbi(ubicacionesCV);
    setRangos(rangoscai);

    //para que podamos ver si estamos en cai
    if (estadoCV === false && estadoCA === true) {
      setEstadoCV(true);
      setEstadoCA(false);
    }
    //se oculta el panel cuando pasamos de cae a cai
    if (i !== 2) setId("cv-ctic");
    setI(i);
  };

  /*--- */
  const handleCerrar = () => {
    if (i === 2) {
      //para cerrar el panel cuando estamos en ayuda
      setI(5);
    }
    setBol(false);
  };
  const handleMostrar = (e, i) => {
    setId(e);
    setBol(true);
    setI(i);
  };

  return (
      <div className="container__main">
      <div className="cont container__map">
        
        <Mapa ubi={ubi} handleMostrar={handleMostrar}/>

        <Opciones estadoCA={estadoCA} estadoCV={estadoCV} handleCambiarCA={handleCambiarCA} handleCambiarCV={handleCambiarCV} />

        <Rangos estadoCA={estadoCA} setI={setI} rangos={rangos} />

        <div className={ bol || i === 2 ? "container__datos__ca__cv" : "container__datos__ca__cv2" }>
          <div className="container__logo__close">
            <RiCloseCircleFill className="img" onClick={handleCerrar} />
          </div>
          {changeOption(i, id, estadoCA)}
        </div>
      </div>
    </div>
  );
}

export default Main;