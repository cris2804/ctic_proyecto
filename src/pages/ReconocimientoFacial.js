import "./css/ReconocimientoFacial.css";
import PopupZoom from "../components/RecFac/PopupZoom";
import Popup from "../components/RecFac/Popup";
import { useEffect, useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import io from "socket.io-client";
//import { Getip } from "../server/Getip";


const host = "http://192.168.52.232:9090";
let interval = null;
export default function ReconocimientoFacial() {
  const [datactual, setDatactual] = useState([]);
  const [getData, setGetData] = useState({ nombres: "", img: "",show:false });
  useEffect(()=>{
    const socket = io(host, {
      transports: ["websocket"],
    });
    socket.on("rec_fac/rec_fac:rec_fac02",async (data)=>{
      console.log("Recibido",data);
      if(interval){
        clearTimeout(interval);
      }

      
      const url = `http://localhost:5000/image/${data.nombres.value}`;
      console.log(data.nombres.value);
      const dataFetch = await fetch(url,{
        method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nombres: data.nombres.value })
      })
      const dataJson = await dataFetch.json();
      console.log(dataJson);
      setGetData({
        nombres: dataJson.nombres,
        msg: dataJson.msg,
        status: dataJson.status,
        show:true,
        img:`./imagenes/${dataJson.nombres}.jpg`
      });
    });
    return () =>{
      socket.disconnect();
    };
  },[])
  useEffect(()=>{
    if(getData.show){
      setTimeout(()=>{
        const dataUpdate = {...getData};
        dataUpdate.show = false;
        
        setGetData(dataUpdate);
        //if(dataUpdate.status !== 0) return 
        setDatactual((prev)=>[
          dataUpdate,...prev
        ])
      },1000)
    }
  },[getData])

  const handleRemoveItem = (index) => {
    const newData = [...datactual];
    newData.splice(index, 1);
    setDatactual(newData);
  }
  


  return (
    <div className="container__main__cuenta__personas">
      <div className="container__left__cuenta__personas">
        <div className="container__div__1">CTIC</div>
        <div className="container__div div1">
          <div>AFORO</div>
          <div className="container__valor">150</div>
        </div>
        <div className="container__div div2">
          <div>INGRESARON</div>
          <div className="container__valor">{datactual.length}</div>
        </div>
      </div>
      <div className="container__right__cuenta__personas">
        {datactual.map((d, i) => {
          return <div className='container__popup' key={i}>
                    <Popup nombres={d.nombres} perfil={d.img} hora="15:59"/>
                    <div className='container__close' onClick={() => handleRemoveItem(i)}><RiCloseCircleFill className="close"  /></div>
                  </div>;
        })}

        <div className={getData.show ? `container__popupzoom` : "container__popupzoom__"}>
        <PopupZoom perfil={getData.img} nombres={getData.nombres} hora="15:51"/>

          {/*<div
            className={
              getData.status === 1 || getData.status === 2
                ? `container__popupzoom2`
                : "container__popupzoom__"
            }>
            {getData.msg}
        </div>*/}
        </div>
      </div>
    </div>
  );
}