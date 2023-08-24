import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceArea } from 'recharts';

const data = [
  { time: '10:00:00', value: 200 },
  { time: '10:04:00', value: 900 },
  { time: '10:08:00', value: 1100 },
  { time: '10:12:00', value: 600 },
  { time: '10:16:00', value: 800 },
  { time: '10:20:00', value: 820 },
  { time: '10:24:00', value: 860 },
  { time: '10:28:00', value: 920 },
  { time: '10:32:00', value: 1000 },
  { time: '10:36:00', value: 1050 },
  { time: '10:40:00', value: 1084 },
  { time: '10:44:00', value: 1200 },
  // ...
];

const LineChartExample = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis  domain={[0,1500]}/>
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="blue" name="Line 1" connectNulls={true} />

      <ReferenceArea y1={0} y2={800} fill="green" fillOpacity={0.3} />
      <ReferenceArea y1={800} y2={1000} fill="orange" fillOpacity={0.3} />
      <ReferenceArea y1={1000} y2={1500} fill="red" fillOpacity={0.3} />
    </LineChart>
  );
};

export default LineChartExample;
