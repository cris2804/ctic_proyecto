import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './css/Grafico.css';

const Grafico2 = ({cantidad}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Genera datos aleatorios para la gráfica
    const newData = Array.from({ length: cantidad }, () => {
      return { time: new Date().toLocaleTimeString(), value: Math.floor(Math.random() * 500) }
    });
    setData(newData);
  }, [cantidad]);

  const CustomDot = ({ cx, cy, stroke, fill, payload, value }) => {
    if (value < 50 && value > 0) {
      return (
        <svg x={cx - 5} y={cy - 5} width={10} height={10} fill="#9AD64D" viewBox="0 0 10 10">
          <circle cx={5} cy={5} r={5} fill="#9AD64D" />
        </svg>
      );
    } else if(value<100 && value > 50){
      return (
        <svg x={cx - 5} y={cy - 5} width={10} height={10} fill="#F8CD38" viewBox="0 0 10 10">
          <circle cx={5} cy={5} r={5} fill="#F8CD38" />
        </svg>
      );
    }else if(value < 150 && value > 100){
      return (
        <svg x={cx - 5} y={cy - 5} width={10} height={10} fill="#F88F48" viewBox="0 0 10 10">
          <circle cx={5} cy={5} r={5} fill="#F88F48" />
        </svg>
      );
    }else if (value < 200 && value > 150) {
      return (
        <svg x={cx - 5} y={cy - 5} width={10} height={10} fill="#F55D5E" viewBox="0 0 10 10">
          <circle cx={5} cy={5} r={5} fill="#F55D5E" />
        </svg>
      );
    } else if(value<300 && value > 200){
      return (
        <svg x={cx - 5} y={cy - 5} width={10} height={10} fill="#A070B6" viewBox="0 0 10 10">
          <circle cx={5} cy={5} r={5} fill="#A070B6" />
        </svg>
      );
    }else if(value < 500 && value > 300){
      return (
        <svg x={cx - 5} y={cy - 5} width={10} height={10} fill="#A06A7B" viewBox="0 0 10 10">
          <circle cx={5} cy={5} r={5} fill="#A06A7B" />
        </svg>
      );
    }
  };

  return (
    <div className='grafico'>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart width={300} height={300} data={data}>
        <XAxis dataKey="time" reversed={false} />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="value" stroke="#000" strokeWidth={1} dot={<CustomDot />} isAnimationActive={false} />
            <Tooltip />
            {/*<Legend />*/}
            </LineChart>
          </ResponsiveContainer>
        </div>
  );
};

export default Grafico2;
