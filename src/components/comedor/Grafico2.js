import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data1 = [
  { name: "A", value: 10 },
  { name: "B", value: 15 },
  { name: "C", value: null },
  { name: "D", value: 12 },
  // ...
];

const data2 = [
  { name: "A", value: null },
  { name: "B", value: 25 },
  { name: "C", value: 18 },
  { name: "D", value: 20 },
  // ...
];

const Grafico2 = () => {
  return (
    <div className="grafico">
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart width={500} height={300}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            data={data1}
            stroke="blue"
            name="Line 1"
            connectNulls={true}
          />
          <Line
            type="monotone"
            dataKey="value"
            data={data2}
            stroke="red"
            name="Line 2"
            connectNulls={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Grafico2;
