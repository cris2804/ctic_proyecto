import "./css/CalidadAgua.css";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { Getip } from "../server/Getip";

//const host = "http://192.168.52.232:9090";
export default function CalidadAgua(){
    // para obtener el id de la ruta donde nos encontramos
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    let host = window.location.host; //para obtener la ip
    const [datactual, setDatactual] = useState(null)

    useEffect(()=>{
        const socket = io(Getip(host), {
          transports: ["websocket"],
        });
        socket.on("calidad_agua/calidad_agua:rak-3272s-o",async (data)=>{
                  
          setDatactual(data)
          
        });
        return () =>{
          socket.disconnect();
        };
      },[])

    return(
        <div className="container__calidad__agua">
            <div className="forma">
                <span className="forma__titulo__lugar">Calidad del Agua</span> <br></br>{/*}
                <span className="forma__subtitulo">Calidad del aire en exteriores</span> <br></br>*/}
                <span className="forma__linea">aaaaaaaaaaaaa</span>
            </div>
            {/*<div className="titulo__calidad__agua">
                Calidad del Agua
            </div>*/}

            <div className="container__datos__tpht">
                <div className="container__tpht">
                    <div>
                        Temperatura
                    </div>
                    <div className="valor">
                        {datactual ? datactual.temperatura.value : ""} °C
                    </div>
                </div>
                <div className="container__tpht">
                    <div>
                        Ph
                    </div>
                    <div className="valor">
                        {datactual ? datactual.ph.value : ""}
                    </div>
                </div>
                <div className="container__tpht">
                    <div>
                        Turbidez
                    </div>
                    <div className="valor">
                        {datactual ? datactual.turbidez.value : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}