import "./DetalleCA.css"
import happy from "../images/happy.png"
import { useState, useEffect } from "react"
import Grafico from "./components/Grafico"
import Grafico2 from "../assets/Grafico2"
import "react-calendar/dist/Calendar.css"
import { Getip } from "../../../server/Getip"
import unidaddv from "../assets/unidaddv"
import gases from "../assets/gases"
import Clima from "./components/Clima"
import Descargar from "./components/Descargar"
import Estado from "./components/Estado"
import Contaminante from "./components/Contaminante"

function obtenerNombre(id) {
  if (id === "ctic") return "ctic";
  else if (id === "puerta 3") return "puerta 3";
  else if (id === "puerta 5") return "puerta 5";
}

function Graficar(opc, nom, idb, ipurl) {
  if (opc === 0) {
    return <Grafico id={idb} nombre={nom} ipurl={ipurl}/>;
  } else if (opc === 1) {
    return <Grafico2 cantidad={96} nombre={nom} />;
  } else if (opc === 2) {
    return <Grafico2 cantidad={672} nombre={nom} />;
  }
}

function retornaidb(id) {
  let idb = "";
  if (id === "ctic") idb = "beegons:rak-3272s-e";
  else if (id === "puerta 3") idb = "beegons:rak-3272s-f";
  else if (id === "puerta 5") idb = "beegons:rak-3272s-h";

  return idb;
}

export default function DetalleCA() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");
  let host = window.location.host; //para obtener la ip

  console.log(host)

  //const [seleccionado, setSeleccionado] = useState(0);
  const [opcion, setOpcion] = useState("PM2.5");
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [showCalendar1, setShowCalendar1] = useState(false);
  const [showCalendar2, setShowCalendar2] = useState(false);

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
    fetch(
      `${Getip(host)}/api/v1/calidad-de-aire/descargar/${retornaidb(
        id
      )}?maxDate=${Number(date2)}&minDate=${Number(date1)}&columns=0000${
        checkboxes.Humedad ? "1" : "0"
      }00000${checkboxes.PM10 ? "1" : "0"}00${checkboxes.PM25 ? "1" : "0"}${
        checkboxes.Viento ? "1" : "0"
      }00${checkboxes.CO ? "1" : "0"}${checkboxes.NO2 ? "1" : "0"}0${
        checkboxes.H2S ? "1" : "0"
      }${checkboxes.O3 ? "1" : "0"}0`
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

  /*---- */
  const options = [
    { label: "Horario", value: "1" },
    { label: "Diario(24h)", value: "2" },
    { label: "Mensual", value: "3" },
  ];

  const [selectedValue, setSelectedValue] = useState("1");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleOpcion = (opc, dat) => {
    setOpcion(opc);
  };

  /*---- para el checbox para elegir  */
  const [checkboxes, setCheckboxes] = useState({
    NO2: false,
    O3: false,
    H2S: false,
    CO: false,
    PM10: false,
    PM25: false,
    Humedad: false,
    Viento: false,
  });
  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  }

  //para el select
  function handleChange(event) {
    const url = event.target.value;
    window.location.href = url;
  }

  /* *************************************************************** */
  /* ------ para obtener datos de viento, temperatura, sonido */
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${Getip(host)}/api/v1/calidad-de-aire/${retornaidb(id)}?last=1`
        );
        const jsonData = await response.json();

        const d2 = jsonData[0];
        setData(d2);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [host,id]);

  return (
    <div className="container__detalle__ca">
      <div className="forma">
        <span className="forma__titulo__lugar">{obtenerNombre(id)}</span> <br></br>
        <span className="forma__subtitulo">Calidad del aire en exteriores</span> <br></br>
        <span className="forma__linea">aaaaaaaaaaaaa</span>
      </div>

      <div className="container__detalle__ca__main">
        <div className="container__detalle__ca__left">
          
          <Clima obtenerNombre={obtenerNombre} id={id} data={data} unidaddv={unidaddv}/>

          <Descargar id={id} 
                    handleChange={handleChange}
                    toggleCalendar1={toggleCalendar1}
                    toggleCalendar2={toggleCalendar2}
                    date1={date1}
                    showCalendar1={showCalendar1}
                    showCalendar2={showCalendar2}
                    onChange1={onChange1}
                    date2={date2}
                    onChange2={onChange2}
                    options={options}
                    selectedValue={selectedValue}
                    handleSelectChange={handleSelectChange}
                    checkboxes={checkboxes}
                    handleCheckboxChange={handleCheckboxChange}
                    handleMostrar={handleMostrar} />

        </div>

        
        <div className="container__detalle__ca__right1">
          
          <Estado happy={happy}/>

          <div
            className="container__grafico__rangos__tipos__gases"
            style={{
              boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)",
              borderRadius: "2px 2px 5px 5px",
            }}
          >
            <div className="container__tipos__gases__ca">
              {gases.map((gas) => {
                return (
                  <div
                    key={gas.nombre}
                    onClick={() => handleOpcion(gas.nombre)}
                    className={opcion === gas.nombre ? "seleccionado" : ""}
                  >
                    {gas.nombre}
                  </div>
                );
              })}
            </div>
            
            <div className="container__grafico">
              {Graficar(0, opcion, retornaidb(id), Getip(host))}
            </div>

            <Contaminante />
            
          </div>
        </div>
      </div>
    </div>
  );
}
