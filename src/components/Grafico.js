import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import './css/Grafico.css';

const initialData = [
  { time: '10:00', value: 150 },
  { time: '10:03', value: 180 },
  { time: '10:06', value: 200 },
  { time: '10:09', value: 220 },
  { time: '10:12', value: 230 },
  { time: '10:15', value: 240 },
  { time: '10:18', value: 250 },
  { time: '10:21', value: 260 },
  { time: '10:24', value: 270 },
  { time: '10:27', value: 280 },
  { time: '10:30', value: 290 },
  { time: '10:33', value: 300 },
  { time: '10:36', value: 310 },
  { time: '10:39', value: 320 },
  { time: '10:42', value: 330 },
  { time: '10:45', value: 340 },
  { time: '10:48', value: 350 },
  { time: '10:51', value: 360 },
  { time: '10:54', value: 370 },
  { time: '10:57', value: 380 },
];

const Grafico = () => {
  const [data, setData] = useState(initialData);

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

  useEffect(() => {
    const interval = setInterval(() => {
      // Genera un nuevo punto aleatorio
      const newPoint = { time: new Date().toLocaleTimeString(), value: Math.floor(Math.random() * 500) };
      setData(prevData => [...prevData.slice(-19), newPoint]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='grafico'>
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
          <XAxis dataKey="time" reversed={false}><Label value="Mes" offset={0} position="bottom" fill="#000" /></XAxis>
          <YAxis>
            <Label
                value="Cantidad"
                offset={5}
                angle={-90}
                position="insideLeft"
                fill="#000"
              />
          </YAxis>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="value" stroke="#000" strokeWidth={1} dot={<CustomDot />} isAnimationActive={false} />
          <Tooltip />
          {/*<Legend />*/}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Grafico;

/*import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './css/Grafico.css';

const Grafico = () => {
  const [data, setData] = useState([]);

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

  useEffect(() => {
    const interval = setInterval(() => {
      // Genera datos aleatorios para la gráfica
      const newPoint = { time: new Date().toLocaleTimeString(), value: Math.floor(Math.random() * 500) };
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
            <Line type="monotone" dataKey="value" stroke="#000" strokeWidth={1} dot={<CustomDot />} isAnimationActive={false} />
            <Tooltip />
            <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>
  );
};

export default Grafico;*/