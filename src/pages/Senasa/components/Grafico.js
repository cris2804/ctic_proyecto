import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea  } from 'recharts'

const Grafico = ({tlinea, vdot, clinea, data, nombrex, nombrey, rangoy, fondo, rangosFondo}) => {
  return (
    <ResponsiveContainer >
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            label={{ value: nombrex, position: 'insideBottom', offset: 0 }}
            dataKey="time" 
          />
    
          <YAxis
            label={{ value: nombrey, angle: -90, position: 'insideLeft' }}  
            domain={rangoy} 
          />
          
          <Tooltip />
          <Line type={tlinea} dataKey="value" stroke={clinea} strokeWidth={2} dot={vdot} connectNulls={true} />
          { fondo &&
            rangosFondo.map((r, i) => {
              return(
                <ReferenceArea key={i} y1={r.y1} y2={r.y2} fill={r.color} fillOpacity={r.opacidad} />
              )
            })
          }
        </LineChart>
    </ResponsiveContainer>
  );
};

export default Grafico;
