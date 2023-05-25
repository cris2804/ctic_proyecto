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
  useEffect(() => {
    setData(datos);
  }, [datos]);

  const CustomDot = ({ cx, cy, stroke, fill, payload, value }) => {
    if (value < 50 && value > 0) {
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
    } else if (value < 100 && value > 50) {
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
    } else if (value < 150 && value > 100) {
      return (
        <svg
          x={cx - 5}
          y={cy - 5}
          width={10}
          height={10}
          fill="#F88F48"
          viewBox="0 0 10 10"
        >
          <circle cx={5} cy={5} r={5} fill="#F88F48" />
        </svg>
      );
    } else if (value < 200 && value > 150) {
      return (
        <svg
          x={cx - 5}
          y={cy - 5}
          width={10}
          height={10}
          fill="#F55D5E"
          viewBox="0 0 10 10"
        >
          <circle cx={5} cy={5} r={5} fill="#F55D5E" />
        </svg>
      );
    } else if (value < 300 && value > 200) {
      return (
        <svg
          x={cx - 5}
          y={cy - 5}
          width={10}
          height={10}
          fill="#A070B6"
          viewBox="0 0 10 10"
        >
          <circle cx={5} cy={5} r={5} fill="#A070B6" />
        </svg>
      );
    } else if (value < 500 && value > 300) {
      return (
        <svg
          x={cx - 5}
          y={cy - 5}
          width={10}
          height={10}
          fill="#A06A7B"
          viewBox="0 0 10 10"
        >
          <circle cx={5} cy={5} r={5} fill="#A06A7B" />
        </svg>
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Genera un nuevo punto aleatorio
      const newPoint = {
        time: new Date().toLocaleTimeString(),
        value: Math.floor(Math.random() * 500),
      };
      setData((prevData) => [...prevData.slice(-19), newPoint]);
    }, 50000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://192.168.52.232:9090/api/v1/carga-viral/${id}?last=5`
        );
        const data = await response.json();
        const newData = data.map((item) => {
          const time = new Date(item.time_index);
          const hourMinuteSecond = time.toISOString().substring(11, 19); // Captura la parte de la cadena con hora:minuto:segundo

          return {
            dioxido_de_carbono: item.dioxido_de_carbono,
            time_index: hourMinuteSecond,
          };
        });

        setData(newData);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

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
          <XAxis dataKey="time" reversed={false}>
            <Label value="Fecha" offset={0} position="bottom" fill="#000" />
          </XAxis>
          <YAxis domain={[0, 600]}>
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
