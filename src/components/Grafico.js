import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './css/Grafico.css';

const Grafico = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Genera datos aleatorios para la gráfica
      const newPoint = { time: new Date().toLocaleTimeString(), value: Math.floor(Math.random() * 100) };
      setData(prevData => [...prevData.slice(-19), newPoint]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
        <div className='grafico'>
            <LineChart width={1000} height={300} data={data}>
            <XAxis dataKey="time" reversed={false} />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="value" stroke="#8884d8" isAnimationActive={false} />
            <Tooltip />
            <Legend />
            </LineChart>
        </div>
  );
};

export default Grafico;