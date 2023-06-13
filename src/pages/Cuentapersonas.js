import "./css/Cuentapersonas.css";
import PopupZoom from "../components/PopupZoom";
import Popup from "../components/Popup";
//import data from "../assets/data";
import { useEffect, useState, useRef } from "react";
import perfil from "../components/images/perfil.png";
import io from "socket.io-client";
import { Getip } from "../server/Getip";

export default function Cuentapersonas() {

  const [show, setShow] = useState(false);
  const [datactual, setDatactual] = useState([]);
  const [count, setCount] = useState(0);
  const [cargando, setCargando] = useState(false);
  const newDataRef = useRef(null);
  let host = window.location.host;

  useEffect(() => {
    const socket = io(Getip(host), {
      transports: ['websocket'],
    });

    socket.on('rec_fac/rec_fac:rec_fac02', (data) => {
      if (!cargando) {
        newDataRef.current = data.nombres.value;
        setShow(true);
        setCargando(true);
        const interval = setTimeout(() => {
          setShow(false);
          setCargando(false);
          setCount((prevCount) => prevCount + 1);
          setDatactual((prevData) => [
            { nombres: newDataRef.current },
            ...prevData,
          ]);
        }, 2000);

        return () => {
          clearTimeout(interval);
        };
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [cargando]);

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
          return <Popup nombres={d.nombres} perfil={perfil} key={i} />;
        })}

        <div
          className={show ? `container__popupzoom` : "container__popupzoom__"}
        >
          <PopupZoom perfil={perfil} nombres={newDataRef.current} />
        </div>
      </div>
    </div>
  );
}
