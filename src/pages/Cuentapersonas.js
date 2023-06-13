import "./css/Cuentapersonas.css";
import PopupZoom from "../components/PopupZoom";
import Popup from "../components/Popup";
//import data from "../assets/data";
import { useEffect, useState, useRef } from "react";
//import perfil from "../components/images/perfil.png";
import io from "socket.io-client";
import { Getip } from "../server/Getip";

function base64ToImage(base64String){
  const image = new Image();
  image.src = `data:image/png;base64,${base64String}`;
  return image;
};


export default function Cuentapersonas() {
  const [show, setShow] = useState(false);
  const [datactual, setDatactual] = useState([]);
  const [count, setCount] = useState(0);
  const [cargando, setCargando] = useState(false);
  const newDataRef = useRef(null);
  const [getData, setGetData] = useState({nombres: "", img: ""});

  let host = window.location.host;

  useEffect(() => {
    const socket = io(Getip(host), {
      transports: ["websocket"],
    });

    socket.on("rec_fac/rec_fac:rec_fac02", (data) => {
      if (!cargando) {
        newDataRef.current = data.nombres.value;

        const enviarDatos = () => {
          const url = "localhost:5000";

          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ nombres: newDataRef }),
          })
            .then((response) => response.json())
            .then((data) => {

              setGetData({
                nombres: data.nombres,
                img: base64ToImage(data.img),
              });
              console.log(data);
            })
            .catch((error) => {
              console.error(error);
            });
        };

        setShow(true);
        setCargando(true);

        const interval = setTimeout(() => {
          setShow(false);
          setCargando(false);
          setCount((prevCount) => prevCount + 1);
          /*setDatactual((prevData) => [
            { nombres: newDataRef.current },
            ...prevData,
          ]);*/
          setDatactual((prevData) => [
            getData,
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
  }, [cargando, host, getData]);

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
          return <Popup nombres={getData.nombres} perfil={getData.img} key={i} />;
        })}

        <div
          className={show ? `container__popupzoom` : "container__popupzoom__"}
        >
          {/*<PopupZoom perfil={perfil} nombres={newDataRef.current} />*/}
          <PopupZoom perfil={getData.img} nombres={getData.nombres} />
        </div>
      </div>
    </div>
  );
}
