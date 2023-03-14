import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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
          <ResponsiveContainer width="100%" aspect={3}>
            <LineChart width={300} height={300} data={data}>
            <XAxis dataKey="time" reversed={false} />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="value" stroke="#8884d8" isAnimationActive={false} />
            <Tooltip />
            <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>
  );
};

export default Grafico;