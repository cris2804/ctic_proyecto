import React, { useEffect, useRef, useState } from 'react'
import "./ControlAforo.css"


function convertir(fechaInput){
    const fecha = new Date(fechaInput);
    const fechaEnNumero = fecha.getTime();

    return fechaEnNumero
}

export default function PopupDescarga({ip,id}) {
    const popup = useRef(null);
    const [visible,setVisible] = useState(false);
    useEffect(()=>{
        if(popup?.current){
            const divPopup = popup.current;
            const iconDescarga = document.getElementById("icon_descarga");
            divPopup.style.display = 'none';
            window.addEventListener('click', (evt)=>{
                //if(iconDescarga === evt.target) return;
                //console.log(divPopup,evt.target,iconDescarga);
                
                if(iconDescarga.contains(evt.target)){
                    divPopup.style.display = 'block';
                    return;
                }
                if(evt.target !== divPopup ){
                    //console.log("Hola");
                    divPopup.style.display = 'none';
                }
            });
            
        }
        
    },[])

    const [fecha1, setFechaSeleccionada1] = useState('');
    const [fecha2, setFechaSeleccionada2] = useState('');

    const handleFechaChange1 = (event) => {
        // Obtener el valor del input
        const fechaInput = event.target.value;

        // Actualizar el estado con la fecha seleccionada
        setFechaSeleccionada1(fechaInput);
        console.log(fechaInput)
    };

    const handleFechaChange2 = (event) => {
        // Obtener el valor del input
        const fechaInput = event.target.value;

        

        // Actualizar el estado con la fecha seleccionada
        setFechaSeleccionada2(fechaInput);
    };

    const descargarDatos = () => {
        fetch(
            ip + `/api/v1/cuenta-personas/descargar/${id === "ctic" ? "CA:scuni-002" : "CA:scuni-001" }?maxDate=${convertir(fecha2)}&minDate=${convertir(fecha1)}&columns=001001`
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
            downloadLink.download = `historico${fecha1}_${fecha2}.csv`;
            downloadLink.click();
          })
          .catch((error) => {
            console.error("Error al llamar a la API:", error);
          });
      };
  return (
    <div ref={popup}
        className='container__popup__absolute style_popup_v1'>
        
        <div className='container__title__popup'>Descargar Datos</div>
        <div className='container__calendar'>
            <span>Fecha inicio: </span><input type='date' value={fecha1} onChange={handleFechaChange1}/>
        </div>
        <div className='container__calendar'>
            <span>Fecha fin:</span> <input type='date' value={fecha2} onChange={handleFechaChange2}/>
        </div>
        <button onClick={descargarDatos}>
            Descargar
        </button>

    </div>
  )
}
