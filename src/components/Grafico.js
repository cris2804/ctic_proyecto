import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import "./css/Grafico.css";

const Grafico = ({ nombre, datos, id }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  /*
  useEffect(() => {
    setData(datos);
  }, [datos]);*/

  const CustomDot = ({ cx, cy, stroke, fill, payload, value }) => {
    if (value <= 800 && value > 0) {
      return (
        <svg
          x={cx - 5}
          y={cy - 5}
          width={10}
          height={10}
          fill="#9AD64D"
          viewBox="0 0 10 10"
        >
          <circle cx={5} cy={5} r={5} fill="#9AD64D" />
        </svg>
      );
    } else if (value <= 1000 && value > 800) {
      return (
        <svg
          x={cx - 5}
          y={cy - 5}
          width={10}
          height={10}
          fill="#F8CD38"
          viewBox="0 0 10 10"
        >
          <circle cx={5} cy={5} r={5} fill="#F8CD38" />
        </svg>
      );
    } else if (value > 1000) {
      return (
        <svg
          x={cx - 5}
          y={cy - 5}
          width={10}
          height={10}
          fill="#FF4242"
          viewBox="0 0 10 10"
        >
          <circle cx={5} cy={5} r={5} fill="#FF4242" />
        </svg>
      );
    }
  };

  /*useEffect(() => {
    const interval = setInterval(() => {
      // Genera un nuevo punto aleatorio
      const newPoint = {
        time: new Date().toLocaleTimeString(),
        value: Math.floor(Math.random() * 500),
      };
      setData((prevData) => [...prevData.slice(-19), newPoint]);
    }, 50000);

    return () => clearInterval(interval);
  }, []);*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://192.168.52.232:9090/api/v1/carga-viral/${id}?last=20`
        );
        const data = await response.json();
        const newData = data.map((item) => {
          const time = new Date(item.time_index);
          //const hourMinuteSecond = time.toISOString().substring(11, 19); // Captura la parte de la cadena con hora:minuto:segundo
          const options = {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          };
          const hourMinuteSecond = time.toLocaleTimeString([], options);

          let val = 0;
          if (nombre === "Co2") val = item.dioxido_de_carbono;
          else if (nombre === "Temperatura") val = item.temperatura;
          else if (nombre === "Humedad") val = item.humedad;
          return {
            dioxido_de_carbono: val,
            time_index: hourMinuteSecond,
          };
        });

        setData(newData);
        setLoading(false);
        console.log("hola")
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Llama a la función fetchData cada 8 minutos

    // Limpia el intervalo al desmontar el componente
    return () => {
      clearInterval(interval);
    };
  }, [id, nombre]);
  if (loading) {
    return <div>Cargando...</div>; // O cualquier indicador de carga que desees mostrar
  }

  return (
    <div className="grafico">
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 25,
          }}
        >
          <CartesianGrid stroke="#eee" />
          <XAxis dataKey="time_index" reversed={true}>
            <Label value="Fecha" offset={0} position="bottom" fill="#000" />
          </XAxis>
          <YAxis>
            {/*domain={[0, 1200]} */}
            <Label
              value={nombre}
              offset={5}
              angle={-90}
              position="insideLeft"
              fill="#000"
            />
          </YAxis>
          <Line
            type="monotone"
            dataKey="dioxido_de_carbono"
            stroke="#000"
            strokeWidth={1}
            dot={<CustomDot />}
            isAnimationActive={false}
          />
          <Tooltip />
          {/*<Legend />*/}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Grafico;
