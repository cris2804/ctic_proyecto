import "./css/Cuentapersonas.css";
import PopupZoom from "../components/PopupZoom";
import Popup from "../components/Popup";
import { useEffect, useState, useRef } from "react";
//import perfil from '../components/images/perfil.png';
import io from "socket.io-client";
import { Getip } from "../server/Getip";

const obtenerTurno = (horaLocal) => {
  //const fechaLocal = new Date();
  //const horaLocal = fechaLocal.getHours();

  if (horaLocal >= 7 && horaLocal <= 11) {
    return "Turno desayuno";
  } else if (horaLocal >= 12 && horaLocal <= 14) {
    return "Turno almuerzo";
  } else if (horaLocal >= 16 && horaLocal <= 18) {
    return "Turno cena";
  } else {
    return "Fuera de turno";
  }
};
let socket;
export default function Cuentapersonas() {
  const [show, setShow] = useState(false);
  const [datactual, setDatactual] = useState([]);
  const [count, setCount] = useState(0);
  const [cargando, setCargando] = useState(false);
  const newDataRef = useRef(null);
  const [getData, setGetData] = useState({ nombres: "", img: "" });

  let host = window.location.host;
  useEffect(()=>{
    socket = io(Getip(host), {
      transports: ["websocket"],
    });
    socket.on("rec_fac/rec_fac:rec_fac02"), async (data)=>{
      const dataName = data.nombres.value;
      const url = "http://localhost:5000/image";
      const dataFetch = await fetch(url,{
        method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nombres: dataName })
      })
      const dataJson = await dataFetch.json();
      setGetData({
        nombres: dataJson.nombres,
        msg: dataJson.msg,
        status: dataJson.status
      });
      setShow(true);
      setCargando(true);
    }
    return () => {
      socket.disconnect();
    };
  },[]);
  useEffect(()=>{
    let intervalo;
    if(getData?.status !== 0){
      intervalo = setTimeout(()=>{
        setShow(false);
        setCargando(false);
        setCount((prevCount) => prevCount + 1);
        if (getData.status === 0) {
          setDatactual((prevData) => [
            {
              nombres: getData.nombres,
              //img: require('../img/'+newDataRef.current+'.jpg')
              img: require("../components/images/perfil.png"),
            },
            ...prevData,
          ]);
        }
      },2000)
    }
    return () =>{
      clearInterval(intervalo);
    }
  },[getData])


  return (
    <div className="container__main__cuenta__personas">
      <div className="container__left__cuenta__personas">
        <div className="container__div__1">{obtenerTurno()}</div>
        <div className="container__div div1">
          <div>AFORO</div>
          <div className="container__valor">150</div>
        </div>
        <div className="container__div div2">
          <div>INGRESARON</div>
          <div className="container__valor">{count}</div>
        </div>
      </div>
      <div className="container__right__cuenta__personas">
        {datactual.map((d, i) => {
          return <Popup nombres={d.nombres} perfil={d.img} key={i} />;
        })}

        <div className={show ? `container__popupzoom` : "container__popupzoom__"}>
          <PopupZoom perfil={getData.img} nombres={getData.nombres} />

          <div
            className={
              getData.status === 1 || getData.status === 2
                ? `container__popupzoom2`
                : "container__popupzoom__"
            }>
            {getData.msg}
          </div>
        </div>
      </div>
    </div>
  );
}
