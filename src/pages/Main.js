import "./css/Main.css";
import { ubicaciones } from "../assets/ubicaciones";
import { ubicacionesCV } from "../assets/ubicacionesCV";
import { useState } from "react";
//import calidad from "../assets/calidad.png";
//import carga from "../assets/carga.png";
import {SiWindicss} from 'react-icons/si';
import {MdCo2} from 'react-icons/md';
import {AiOutlineCheck} from 'react-icons/ai';
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker } from "react-leaflet";
import L from "leaflet";
import logoclose from "./images/logoclose.png";
import {RiCloseCircleFill} from "react-icons/ri";
import Detalles from "../components/Detalles";
import AyudaCAE from "../components/AyudaCAE";
import AyudaCAI from "../components/AyudaCAI";
import DetallesI from "../components/DetallesI";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { rangoscae } from "../assets/rangoscae";
import { rangoscai } from "../assets/rangoscai";

const ubiCentro = ["-12.020381", "-77.049178"];

function changeOption(i, id, estado) {
  if (i === 0) {
    return <Detalles id={id} />;
  } else if (i === 1) {
    if (id === "cv-ctic") return <DetallesI id={id} />;
    else return "comedor universitario";
  } else if (i === 2) {
    if (estado) return <AyudaCAE />;
    else return <AyudaCAI />;
  }
}

function Main() {
  const [ubi, setUbi] = useState(ubicaciones);
  /*-- */
  const [estadoCA, setEstadoCA] = useState(true);
  const [estadoCV, setEstadoCV] = useState(false);
  /*--- */
  const [id, setId] = useState("");
  const [bol, setBol] = useState(false);

  /*--- */
  const [i, setI] = useState(0);

  /*--- */
  const [rangos, setRangos] = useState(rangoscae);

  /*-- */
  const handleCambiarCA = (i) => {
    setUbi(ubicaciones);
    setRangos(rangoscae);

    if (estadoCA === false && estadoCV === true) {
      setEstadoCA(true);
      setEstadoCV(false);
    }
    //se oculta el panel cuando pasamos de cae a cai
    if (i !== 2) setBol(false);
    setI(i);
  };
  const handleCambiarCV = (i) => {
    setUbi(ubicacionesCV);
    setRangos(rangoscai);

    if (estadoCV === false && estadoCA === true) {
      setEstadoCV(true);
      setEstadoCA(false);
    }
    //se oculta el panel cuando pasamos de cai a cae
    if (i !== 2) setBol(false);
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
        <MapContainer center={ubiCentro} zoom={16}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {ubi.map((ubicacion) => {
            return (
              <Marker
                key={ubicacion.clave}
                position={ubicacion.coordenadas}
                icon={L.icon({
                  iconUrl: ubicacion.logo,
                  iconRetinaUrl: ubicacion.logo,
                  iconSize: [40, 40],
                  className: "leaflet-venue-icon",
                })}
                eventHandlers={{
                  click: () => handleMostrar(ubicacion.clave, ubicacion.i),
                }}
              />
            );
          })}
        </MapContainer>

        <div className="calidad__del__aire__carga__viral">
          <div
            className={estadoCA ? "ca-cv-2" : "ca-cv"}
            onClick={() => handleCambiarCA(0)}
          >
            {/*<img src={calidad} alt="logo calidad del aire" />*/}
            <SiWindicss/>
            <span>Calidad del Aire en Exteriores</span>
            {estadoCA ? <AiOutlineCheck/> : ""}
          </div>
          <div
            className={estadoCV ? "ca-cv-2" : "ca-cv"}
            onClick={() => handleCambiarCV(1)}
          >
            {/*<img src={carga} alt="carga viral" />*/}
            <MdCo2/>
            <span>Calidad del Aire en Interiores</span>
            {estadoCV ? <AiOutlineCheck/> : ""}
          </div>
        </div>

        <div className="container__ica">
          <div className="container__ica_body">
            <div className="container__ica_legend_section">
              <div className="map-legend-title">
                <span class="type-subtitle-3 text-smoke-120">
                  {" "}
                  {estadoCA ? "INCA" : "ppm"}{" "}
                </span>
                {/*<span class="type-subtitle-3 text-smoke-60"> Mediciones más recientes</span>*/}
              </div>
              <div className="map-legend-bar">
                {rangos.map((rang, i) => {
                  return (
                    <div
                    key={i}
                      style={{
                        flex: "1 1 0%",
                        borderRight: `solid 1px #dedede`,
                        backgroundImage: `linear-gradient(to right, ${rang.color1}, ${rang.color2})`,
                      }}
                    ></div>
                  );
                })}
              </div>
              <div className="map-legend-bar-labels">
                {rangos.map((rang, i) => {
                  return (
                    <div
                    key={i}
                      class="type-body-4"
                      style={{
                        flex: "1 1 0%",
                        position: "relative",
                        height: "20px",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          height: "100%",
                          transform: "translateX(-50%)",
                        }}
                      >
                        {rang.valor}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className="container__ica_help_section"
              onClick={() => setI(2)}
            >
              <button class="button-reset">
                <span class="legend-help">
                  <HelpOutlineIcon />
                </span>
                <span> Ayuda </span>
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            bol || i === 2
              ? "container__datos__ca__cv"
              : "container__datos__ca__cv2"
          }
        >
          <div className="container__logo__close">
            {/*<img src={logoclose} alt="logo-close" onClick={handleCerrar} />*/}
            <RiCloseCircleFill className="img" onClick={handleCerrar}/>
          </div>
          {changeOption(i, id, estadoCA)}
        </div>
      </div>
    </div>
  );
}

export default Main;
