import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2000,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 1000,
    pv:4000,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 5000,
    pv: 300,
    amt: 2210,
  },
  {
    name: 'Page D',
    uv: 1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page E',
    uv: 10000,
    pv: 5000,
    amt: 2000,
  },
  {
    name: 'Page F',
    uv: 5000,
    pv: 4000,
    amt: 2181,
  },
  {
    name: 'Page G',
    uv: 5000,
    pv: 100,
    amt: 2500,
  },
  {
    name: 'Page H',
    uv: 300,
    pv: 8000,
    amt: 2100,
  },
  {
    name: 'Page I',
    uv: 200,
    pv: 3200,
    amt: 2100,
  },
  {
    name: 'Page J',
    uv: 10000,
    pv: 7000,
    amt: 2100,
  },
];

const GraficoGeral = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 1,
          }}
        >
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 1 }} strokeDasharray="5 5" strokeWidth={2}/>
          <Line type="monotone" dataKey="uv" stroke="#fff" strokeWidth={8}/>
        </LineChart>
      </ResponsiveContainer>
  );
};

export default GraficoGeral;
