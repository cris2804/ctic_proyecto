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
  ReferenceArea,
} from "recharts";
import "../assets/css/Grafico.css";

const getLastHourToTimestamp = (horas)=>{
  const now = new Date();
  const fourHoursAgo = new Date(now.getTime() - ( horas * 60 * 60 * 1000));
  const timestamp = fourHoursAgo.getTime();
  return timestamp;
}

const Grafico = ({ nombre, id, ipurl }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
/*
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
*/
  console.log(id,nombre)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          //`http://192.168.52.232:9090/api/v1/carga-viral/${id}?last=20`
          `${ipurl}/api/v1/calidad-de-aire/${id}?minDate=${getLastHourToTimestamp(3)}`
        );
        const data = await response.json();
        const newData = data.map((item) => {
          const time = new Date(item.time_index);
          
          const options = {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          };
          const hourMinuteSecond = time.toLocaleTimeString([], options);
          console.log(data)
          let val = 0;
          //if (nombre === "Co2") val = item.dioxido_de_carbono;
          if (nombre === "PM2.5") val = item.calidad_de_aire;
          else if (nombre === "PM 10") val = item.dioxido_de_carbono;
          else if (nombre === "O3") val = item.ozono*12180*48/298.15;
          else if (nombre === "NO2") val = item.dioxido_de_nitrogeno*12180*46/298.15;
          else if (nombre === "H2S") val = item.sulfuro_de_hidrogeno*12180*34/298.15;
          else if (nombre === "CO") val = item.monoxido_de_carbono*12180*28/298.15;
          else if (nombre === "NO") val = item.oxido_nitrico*12180*30/298.15;
          else if (nombre === "SO2") val = item.dioxido_de_azufre*12180*64/298.15;
          return {
            dioxido_de_carbono: val, //val.toFixed(2)
            time_index: hourMinuteSecond,
          };
        });

        setData(newData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Llama a la función fetchData cada 8 minutos

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
            <Label value="Tiempo" offset={0} position="bottom" fill="#000" />
          </XAxis>{/*}
          <YAxis domain={[0, 60]}>*/}
          <YAxis>
            <Label
              value={`${nombre}( µg/m³ )`}
              offset={5}
              angle={-90}
              position="insideLeft"
              fill="#000"
              text
            />
          </YAxis>
          <Line
            type="monotone"
            dataKey="dioxido_de_carbono"
            stroke="#000"
            strokeWidth={0.5}
            
            isAnimationActive={false}
          />
          {/*dot={<CustomDot />*/}
          {/*<ReferenceArea y1={0} y2={800} fill="green" fillOpacity={0.2} />
            <ReferenceArea y1={800} y2={1000} fill="orange" fillOpacity={0.2} />
            <ReferenceArea y1={1000} y2={1600} fill="red" fillOpacity={0.2} />*/}
          <Tooltip />
          {/*<Legend />*/}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Grafico;
