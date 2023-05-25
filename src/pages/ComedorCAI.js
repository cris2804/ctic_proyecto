import "./css/ComedorCAI.css";
import happy from '../components/images/happy.png';
//import serio from '../components/images/serio.png';
//import triste from '../components/images/triste.png';
import PlanoComedor from "../components/comedor/PlanoComedor";

export default function ComedorCAI() {
  return (
    <div className="container__all__main__comedor__cai">
      <div className="forma">
        <span className="forma__titulo__lugar">COMEDOR UNIVERSITARIO</span>{" "}
        <br></br>
        <span className="forma__subtitulo">
          Calidad del aire en interiores
        </span>{" "}
        <br></br>
        <span className="forma__linea">aaaaaaaaaaaaa</span>
      </div>
      <div className="container__caic__banner" style={{backgroundColor: "#9AD64D"}}>
        <div className="valor__co2">CO₂: 450 ppm</div>
        <div className="calidad__del__aire">Calidad del Aire: Buena</div>
        <div className="imagen"><img src={happy} alt="imagen"/></div>
      </div>
      <div className="container__imagen__sensores">
        <PlanoComedor/>

        <div className="container__rango">
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
    </div>
  );
}
