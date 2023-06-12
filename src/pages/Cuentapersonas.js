import "./css/Cuentapersonas.css";
import PopupZoom from "../components/PopupZoom";
import Popup from "../components/Popup";
import data from "../assets/data";
import { useEffect, useState } from "react";
import perfil from "../components/images/perfil.png";
import io from "socket.io-client";

export default function Cuentapersonas() {
  const [show, setShow] = useState(false);
  const [datactual, setDatactual] = useState(data);
  const [count, setCount] = useState(5);
  const [newData, setNewdata] = useState(null);
  const [cargando, setCargando] = useState(false);

  // var socket = io("http://192.168.52.232:9090")
  var socket = io("http://192.168.52.232:9090", {
    transports: ["websocket"],
  });

  socket.on("rec_fac/rec_fac:rec_fac02", (data) => {
    if (!cargando) {
      setNewdata(data.nombres.value);
      setShow(true);
      setCargando(true);
      //console.log("cargando: true")
      //console.log("dataa", data.nombres.value);
      //console.log(newData);
      const interval = setTimeout(() => {
        setShow(false);
        setCargando(false);
        const nuevoObjeto = {
          nombres: newData,
        };
        setDatactual((prevData) => [nuevoObjeto, ...prevData]);
        //console.log("cargando:false")
      }, 1000);
      return () => {
        clearTimeout(interval);
      };
    }
  });
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      if (show) {
        const nuevoObjeto = {
          firstname: "Juan Fernando",
          lastname: "Pérez del Corral",
        };
        setDatactual((prevData) => [nuevoObjeto, ...prevData]);
        if (count < 150) {
          setCount((prevCount) => prevCount + 1);
        } else {
          setDatactual(data);
          setCount(5);
        }
      }
      setShow((prevShow) => !prevShow);
    }, 50000);

    return () => {
      clearInterval(interval);
    };
  }, [show, count]);*/

  return (
    <div className="container__main__cuenta__personas">
      <div className="container__left__cuenta__personas">
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
          return (
            <Popup
              nombres={d.nombres}
              perfil={perfil}
              key={i}
            />
          );
        })}

        <div
          className={show ? `container__popupzoom` : "container__popupzoom__"}
        >
          <PopupZoom perfil={perfil} nombres={newData} />
        </div>
      </div>
    </div>
  );
}
