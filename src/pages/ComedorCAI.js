import "./css/ComedorCAI.css";
import happy from "../components/images/happy.png";
import serio from '../components/images/serio.png';
import triste from '../components/images/triste.png';
import "./css/DetalleCAI.css";
import { useState, useEffect } from "react";
//import Grafico from "../components/Grafico";
//import Grafico2 from "../components/Grafico2";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { MdLocationPin } from "react-icons/md";
//import { BsFillBuildingFill } from "react-icons/bs";
import { FcElectricalSensor } from "react-icons/fc";
import { Getip } from "../server/Getip";
import GraficosComedor from "../components/comedor/GraficosComedor";

const gases = [
  {
    key: 1,
    nombre: "Co2",
  },
  {
    key: 2,
    nombre: "Temperatura",
  },
  {
    key: 3,
    nombre: "Humedad",
  },
];

/*function Graficar(opc, nom) {
  const datos = Array.from({ length: 20 }, () => {
    return {
      time: new Date().toLocaleTimeString(),
      value: Math.floor(Math.random() * 500),
    };
  });
  if (opc === 0) {
    return <Grafico nombre={nom} datos={datos} />;
  } else if (opc === 1) {
    return <Grafico2 cantidad={96} nombre={nom} />;
  }
}*/

function retornaidb(id) {
  let idb = "";
  if (id === "sensor 1") idb = 2201;
  else if (id === "sensor 2") idb = 2202;
  else if (id === "sensor 3") idb = 2203;
  else if (id === "sensor 4") idb = 2204;
  else if (id === "sensor 5") idb = 2205;
  else if (id === "sensor 6") idb = 2208;
  else if (id === "sensor 7") idb = 2209;
  else if (id === "sensor 8") idb = 2210;
  else if (id === "sensor 9") idb = 2212;
  else if (id === "sensor 10") idb = 2213;

  return idb;
}

export default function ComedorCAI() {
  // para obtener el id de la ruta donde nos encontramos
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");
  let host = window.location.host; //para obtener la ip


  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${Getip(host)}/api/v1/carga-viral/${retornaidb(
            id
          )}?last=1`
        );
        const data = await response.json();

        let col = "";
        let est = "";
        let imag = "";

        if (data[0].dioxido_de_carbono < 800) {
          col = "#9AD64D";
          est = "Buena";
          imag = happy;
        } else if (
          data[0].dioxido_de_carbono > 800 &&
          data[0].dioxido_de_carbono < 1000
        ) {
          col = "orange";
          est = "Moderada";
          imag = serio;
        } else if (data[0].dioxido_de_carbono > 1000) {
          col = "#FF4242";
          est = "Perjudicial";
          imag = triste;
        }

        const formattedData = {
          lugar: data[0].lugar,
          co2: Math.round(data[0].dioxido_de_carbono),
          temperatura: Math.round(data[0].temperatura),
          humedad: Math.round(data[0].humedad),
          estado: est,
          color: col,
          imagen: imag,
        };

        setData(formattedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  //const [seleccionado, setSeleccionado] = useState(0);
  const [opcion, setOpcion] = useState("Co2");
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [showCalendar1, setShowCalendar1] = useState(false);
  const [showCalendar2, setShowCalendar2] = useState(false);
  //const [selectedOption, setSelectedOption] = useState('');
  //const [dat, setDat] = useState(gases);

  /*--- */
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedt, setIsCheckedt] = useState(false);
  const [isCheckedh, setIsCheckedh] = useState(false);

  const onChange1 = (date) => {
    setDate1(date);
    setShowCalendar1(!showCalendar1);
  };
  const onChange2 = (date) => {
    setDate2(date);
    setShowCalendar2(!showCalendar2);
  };

  const toggleCalendar1 = () => {
    setShowCalendar1(!showCalendar1);
  };
  const toggleCalendar2 = () => {
    setShowCalendar2(!showCalendar2);
  };
  const handleMostrar = () => {
    //const currentUrl = window.location.href;

    //console.log(currentUrl)
    //181.176.48.200:9090
    let c, t, h;
    if (isChecked) c = 1;
    else c = 0;
    if (isCheckedh) h = 1;
    else h = 0;
    if (isCheckedt) t = 1;
    else t = 0;

    fetch(
      `${Getip(host)}/api/v1/carga-viral/descargar/${retornaidb(
        id
      )}?maxDate=${Number(date2)}&minDate=${Number(
        date1
      )}&columns=100000${c}${h}${t}11111`
    )
      .then((response) => {
        if (response.ok) {
          return response.blob();
        } else {
          throw new Error("Error en la respuesta de la API");
        }
      })
      .then((blob) => {
        // Crea un enlace de descarga
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "archivo.csv";
        downloadLink.click();
      })
      .catch((error) => {
        console.error("Error al llamar a la API:", error);
      });
  };
  /*const Seleccionar = (indice) => {
    setSeleccionado(indice);
  };*/

  const handleOpcion2 = (opc) => {
    setOpcion(opc);
    console.log(opc);
  };

  //para el select
  function handleChange(event) {
    const url = event.target.value;
    window.location.href = url;
  }
  /*--- */
  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
    /*if (isChecked) {
      const newArray = dat.filter((obj) => obj.key !== 1);
      setDat(newArray);
    } else {
      const newArray = dat;
      newArray.unshift({ key: 1, nombre: "Co2" });
    }*/
  }
  function handleCheckboxChanget(event) {
    setIsCheckedt(event.target.checked);
    /*if (isCheckedt) {
      const newArray = dat.filter((obj) => obj.key !== 2);
      setDat(newArray);
    } else {
      const newArray = dat;
      newArray.push({ key: 2, nombre: "Temperatura" });
    }*/
  }
  function handleCheckboxChangeh(event) {
    setIsCheckedh(event.target.checked);
    /*if (isCheckedh) {
      const newArray = dat.filter((obj) => obj.key !== 3);
      setDat(newArray);
    } else {
      const newArray = dat;
      newArray.push({ key: 3, nombre: "Humedad" });
    }*/
  }

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
      {/*<div
        className="container__caic__banner"
        style={{ backgroundColor: "#9AD64D" }}
      >
        <div className="valor__co2">CO₂: 450 ppm</div>
        <div className="calidad__del__aire">Calidad del Aire: Buena</div>
        <div className="imagen">
          <img src={happy} alt="imagen" />
        </div>
      </div>
      
      <div className="container__imagen__sensores">
        <PlanoComedor/>
      </div>*/}

      <div className="container__detalle__ca__main">
        <div className="container__detalle__ca__left">
          <div
            style={{
              backgroundColor: "white",
              paddingBottom: "50px",
              boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)",
              borderRadius: "2px 2px 10px 10px",
            }}
          >
            <div className="container__detalle__descargar cdd">
              <div
                style={{
                  color: "#198CFF",
                  paddingBottom: "4px",
                  fontSize: "1.4rem",
                }}
              >
                DESCARGAR DATOS (CSV)
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  paddingRight: "1rem",
                }}
              >
                En esta plataforma, podrás descargar diversos datos
                seleccionando el rango de fechas y los sensores que desees
                analizar.
              </div>
            </div>
            <div
              className="selector__de__lugar__cai"
              style={{ marginTop: "20px" }}
            >
              <div className="container__icon__ubi__ofi">
                {" "}
                <MdLocationPin style={{ fontSize: "2rem", color: "#1cbacc" }} />
                Ubicación Actual:{" "}
              </div>
              <select
                value="/calidad-del-aire-interiores-comedor-universitario?id=sensor 1"
                onChange={handleChange}
                className="container__select__paginas__cai"
              >
                <option value="/calidad-del-aire-interiores-ctic?id=Oficina de Administración">
                  CTIC
                </option>
                <option value="/calidad-del-aire-interiores-comedor-universitario?id=sensor 1">
                  Comedor Universitario
                </option>
              </select>
            </div>
            <div className="selector__de__lugar__cai">
              <div className="container__icon__ubi__ofi">
                {" "}
                <FcElectricalSensor
                  style={{ fontSize: "1.5rem", color: "#1cbacc" }}
                />
                Sensor Actual:{" "}
              </div>
              <select
                value={
                  "/calidad-del-aire-interiores-comedor-universitario?id=" + id
                }
                onChange={handleChange}
                className="container__select__paginas__cai"
              >
                <option value="/calidad-del-aire-interiores-comedor-universitario?id=sensor 1">
                  Sensor 1
                </option>
                <option value="/calidad-del-aire-interiores-comedor-universitario?id=sensor 2">
                  Sensor 2
                </option>
                <option value="/calidad-del-aire-interiores-comedor-universitario?id=sensor 3">
                  Sensor 3
                </option>
                <option value="/calidad-del-aire-interiores-comedor-universitario?id=sensor 4">
                  Sensor 4
                </option>
                <option value="/calidad-del-aire-interiores-comedor-universitario?id=sensor 5">
                  Sensor 5
                </option>
                <option value="/calidad-del-aire-interiores-comedor-universitario?id=sensor 6">
                  Sensor 6
                </option>
                <option value="/calidad-del-aire-interiores-comedor-universitario?id=sensor 7">
                  Sensor 7
                </option>
                <option value="/calidad-del-aire-interiores-comedor-universitario?id=sensor 8">
                  Sensor 8
                </option>
                <option value="/calidad-del-aire-interiores-comedor-universitario?id=sensor 9">
                  Sensor 9
                </option>
                <option value="/calidad-del-aire-interiores-comedor-universitario?id=sensor 10">
                  Sensor 10
                </option>
              </select>
            </div>
            <div
              className="container__detalle__descargar container__rango__fecha__descargar"
              style={{ fontWeight: "500", marginTop: "50px" }}
            >
              <div>Fecha Inicial: </div>
              <div>
                <button
                  onClick={toggleCalendar1}
                  className="container__btn__calendar"
                >
                  <div>
                    <CalendarMonthIcon />
                  </div>
                  <div>{date1.toLocaleDateString()}</div>
                </button>
                {showCalendar1 && (
                  <Calendar onChange={onChange1} value={date1} />
                )}
              </div>
            </div>
            <div
              className="container__detalle__descargar container__rango__fecha__descargar"
              style={{ fontWeight: "500" }}
            >
              <div>Fecha Final:&nbsp;&nbsp; </div>
              <div>
                <button
                  onClick={toggleCalendar2}
                  className="container__btn__calendar"
                >
                  <div>
                    <CalendarMonthIcon />
                  </div>
                  <div>{date2.toLocaleDateString()}</div>
                </button>
                {showCalendar2 && (
                  <Calendar onChange={onChange2} value={date2} />
                )}
              </div>
            </div>
            <div
              className="container__detalle__descargar"
              style={{ paddingTop: "25px" }}
            >
              CO2
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                id="cbox1"
                value="first_checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              ></input>{" "}
              
            </div>
            <div className="container__detalle__descargar">
              Temperatura &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                id="cbox1"
                value="first_checkbox"
                checked={isCheckedt}
                onChange={handleCheckboxChanget}
              ></input>{" "}
            </div>
            <div className="container__detalle__descargar">
              Humedad
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                id="cbox1"
                value="first_checkbox"
                checked={isCheckedh}
                onChange={handleCheckboxChangeh}
              ></input>{" "}
            </div>
            <div className="container__detalle__descargar__btn">
              <button
                onClick={handleMostrar}
                style={{
                  backgroundColor: "#7EDAE5",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#2086D8",
                  fontSize: "20px",
                  fontWeight: "500",
                  borderColor: "#2086D8",
                  borderRadius: "20px",
                  padding: "10px 20px 10px 20px",
                  cursor: "pointer",
                }}
              >
                Descargar CSV&nbsp;&nbsp; <CloudDownloadIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="container__detalle__ca__right">
          <div
            className="container__estado__cai"
            style={{
              boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)",
              borderRadius: "2px 2px 5px 5px",
              background: `${data.color}`,
            }}
          >
            <div className="container__valor__tipo">
              <div className="container__indice__tipo">
                <div
                  className="indice"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    color: "#000000",
                    textTransform: "uppercase",
                  }}
                >
                  {id}
                </div>
                <div
                  className="tipo"
                  style={{ fontSize: "1.5rem", color: "#000000" }}
                >
                  Zona: {data.estado}
                </div>
              </div>
            </div>
            <div className="logo__imagen">
              <img src={data.imagen} alt="logo-happy" />
            </div>
          </div>

          <div
            className="container__grafico__rangos__tipos__gases__"
            style={{
              boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)",
              borderRadius: "2px 2px 5px 5px",
            }}
          >
            <div className="container__tipos__gases__cai">
              {gases.map((gas) => {
                return (
                  <div
                    key={gas.nombre}
                    onClick={() => handleOpcion2("Co2")}
                    className={opcion === gas.nombre ? "seleccionado" : ""}
                  >
                    {gas.nombre}
                  </div>
                );
              })}
            </div>
            <div className="container__rango__tiempo">
              <div>
                {/*className={seleccionado === 0 ? "tiempo__seleccionado" : ""}
                onClick={() => Seleccionar(0)} */}
                EN VIVO
              </div>
              {/*
              <div
                className={seleccionado === 1 ? "tiempo__seleccionado" : ""}
                onClick={() => Seleccionar(1)}
              >
                DIA
              </div>*/}
            </div>
            <GraficosComedor/>
          </div>
        </div>
      </div>
    </div>
  );
}
