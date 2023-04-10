import { useState } from "react"

const dat = [
    {"idb": "1102", "lugar": "Oficina de Administración"},
    {"idb": "1201", "lugar": "Laboratorio SmartCity"},
    {"idb": "1202", "lugar": "Oficina de Calidad Universitaria"},
    {"idb": "1203", "lugar": "Oficina de Capacitación"},
    {"idb": "1204", "lugar": "Secretaría"}]
let datos = []

export const Server = () => {
    const [data, setData] = useState([]);
    const [datos, setDatos] = useState([]);
  
    dat.forEach((d) => {
      fetch(`http://192.168.52.232:9090/carga-viral/${d.idb}?last=1`)
        .then(response => response.json())
        .then(data => {
          setData(data);
          const d2 = {
            "lugar": d.lugar,
            "co2": data.dioxido_carbono,
            "temperatura": data.temperatura,
            "humedad": data.humedad,
            "estado": "perjudicial",
            "color": "#9AD64D",
          }
          setDatos(prevDatos => [...prevDatos, d2]);
        })
        .catch(error => console.error(error));
    });
  
    return datos;
  }

/*
export const Server = () => {
    const [data, setData] = useState([]);

    dat.map((d) => {
        fetch(`http://192.168.52.232:9090/carga-viral/${d.idb}?last=1`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));

        const d2 = {
            "lugar": d.lugar,
            "co2": data.dioxido_carbono,
            "temperatura": data.temperatura,
            "humedad": data.humedad,
            "estado": "perjudicial",
            "color": "#9AD64D",
        }
        datos.push(d2)

    })
    

    return datos;
}*/