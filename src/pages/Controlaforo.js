import "./css/Controlaforo.css";
import { IoIosPeople } from "react-icons/io";
import { useState } from "react";
import { CanvasPlotPuntos } from "../components/comedor/ControllerGrafico";
import CanvasComedor from "../components/comedor/CanvasComedor";
import { useEffect } from "react";
import { Getip } from "../server/Getip";

import io from "socket.io-client";

const aforo_maximo = 350
//const aforo_actual = 35
//const porcentaje = ((aforo_actual/aforo_maximo)*100).toFixed(2)


export default function Controlaforo() {
  const [dataPersonas,setDataPersonas] = useState([]);
  const [dataActual,setDataActual] = useState(null);
  let host = window.location.host;Getip(host)
  //let host = "http://181.176.48.200:9090"
  const fetchInicial = async () =>{
    const urlDefault  = Getip(host) + "/api/v1/cuenta-personas/ctic?last=20&columns=001001";
    const response = await fetch(urlDefault);
    const data = await response.json();
    const newData = data.map(d =>{
      const timestamp = new Date(d.time_index).getTime();

      return {timestamp:timestamp ,value: d.total_personas}
    });
    console.log(newData);
    setDataPersonas(newData.reverse());
  }
  useEffect(()=>{
    fetchInicial();
    const socket = io(Getip(host),{
      transports: ["websocket"]
    })
    socket.on("CuentaPersonas/CuentaPersonas:ctic",  (data)=>{
      
      const str_time = data.TimeInstant.value;
      const timestamp = new Date(str_time).getTime();
      const personas = data.total_personas.value;
      console.log(timestamp,personas);
      const newTime = {
        timestamp:timestamp,value:personas
      }

      setDataActual(newTime);
      
    })
  },[]);
  useEffect(()=>{
    if(dataActual){
      const newPersonas = [...dataPersonas,dataActual]
      if(newPersonas.length>20){
        newPersonas.shift();
      }
      setDataPersonas(newPersonas);
    }
  },[dataActual])
  return (
    <div className="container__main__control__aforo">
      <div className="container__main__aforo">
        <div className="container__max__aforo container__aforo">
          <div className="titulo__aforo">Aforo Máximo</div>
          <div className="cantidad__max">
            <IoIosPeople style={{ color: "#D38C00" }} />
            <div className="valor__aforo__max">{aforo_maximo}</div>
          </div>
          <div className="container__gradient__rango">
            <div className="gradient__div"></div>
            <div className="rango__valores">
              <span>0</span>
              <span>{aforo_maximo}</span>
            </div>
          </div>
        </div>

        <div className="container__imagen__ctic container__aforo ctn-relative">
          <img
            src="https://www.ctic.uni.edu.pe/wp-content/uploads/2020/10/foto-ctic-uni.jpg"
            alt="imagen-ctic"
          />
          <div className="descripcion">
            <div className="control">
              Control De Aforo<br></br> CTIC
            </div>
            <div className="icon">
              <IoIosPeople />
            </div>
          </div>
        </div>

        <div className="container__actual__aforo container__aforo">
          <div className="titulo__aforo">Aforo Actual</div>
          <div className="cantidad__actual">
            <IoIosPeople style={{ color: "#D38C00" }} />
            <div className="valor__aforo__actual">{dataPersonas.length === 0 ? "0" : dataPersonas[dataPersonas.length - 1].value}</div>
            <div className="valor__porcentaje__aforo">{dataPersonas.length === 0 ? "0" : ((dataPersonas[dataPersonas.length - 1].value/aforo_maximo)*100).toFixed(2)}%</div>
          </div>
          <div className="container__gradient__rango__ac">
            <div className="gradient__div">
              <div
                style={{
                  height: "3vh",
                  width: `${dataPersonas.length === 0 ? "100" :100-((dataPersonas[dataPersonas.length - 1].value/aforo_maximo)*100).toFixed(2)}%`,
                  background: "#EAEAEA",
                  position: "absolute",
                  right: "0",
                }}
              ></div>
            </div>
            <div className="rango__valores" style={{ width: `${dataPersonas.length === 0 ? "" : ((dataPersonas[dataPersonas.length - 1].value/aforo_maximo)*100).toFixed(2)}%` }}>
              <span>0</span>
              <span>{dataPersonas.length === 0 ? "" : dataPersonas[dataPersonas.length - 1].value}</span>
            </div>
          </div>
        </div>

        <div className="container__historico__aforo container__aforo">
          <div className="titulo__aforo">Histórico</div>
          <CanvasComedor
          Clase={CanvasPlotPuntos}
          data={dataPersonas}
          rangoY = {[0,aforo_maximo]}
          type={"personas"}
          />
        </div>
        
        
      </div>
    </div>
  );
}
/*
<div className="circulo">
          <div className="control">
            Control De Aforo<br></br> CTIC
          </div>
          <div className="icon">
            <IoIosPeople />
          </div>
        </div>
*/