import "./css/CalidadAgua.css";

import { useEffect, useState } from "react";
import io from "socket.io-client";

const host = "http://192.168.52.232:9090";
export default function CalidadAgua(){
    const [datactual, setDatactual] = useState(null)

    useEffect(()=>{
        const socket = io(host, {
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
            <div className="titulo__calidad__agua">
                Calidad del Agua
            </div>

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