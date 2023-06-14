import "./css/Conteo.css";
import PopupZoom from "../components/PopupZoom";
import Popup from "../components/Popup";
import { useEffect,useState,useRef } from "react";
//import perfil from '../components/images/perfil.png';
import Base64_jpg from "../components/Base64_jpg";
import io from "socket.io-client";
import {Getip} from '../server/Getip';


const obtenerTurno = (horaLocal) => {
  //const fechaLocal = new Date();
  //const horaLocal = fechaLocal.getHours();


  if (horaLocal >= 7 && horaLocal <= 11) {
    return 'Turno desayuno';
  } else if (horaLocal >= 12 && horaLocal <= 14) {
    return 'Turno almuerzo';
  } else if (horaLocal >= 16 && horaLocal <= 18) {
    return 'Turno cena';
  } else {
    return 'Fuera de turno';
  }
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
        console.log(newDataRef.current);
        //const enviarDatos = () => {
          const url = "http://localhost:5000/image";
          console.log("antes de fetch")

          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ nombres: newDataRef.current}),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("estoy en data")
              ///////////
              setGetData({
                nombres: data.nombres,
                img: require('../img/'+newDataRef.current+'.jpg'),//'Base64_jpg(data.img)',
              });
              /////////////
              console.log(data);
            })
            .catch((error) => {
              console.error(error);
            });
        //};
            console.log("sali de fetch")
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
            {
              nombres: newDataRef.current,
              img: require('../img/'+newDataRef.current+'.jpg')
            },
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
        <div className="container__div__1">
          {obtenerTurno()}
        </div>
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
