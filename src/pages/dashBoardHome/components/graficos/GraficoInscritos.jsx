import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Ultimo',
      Inscritos: 5000,
      Equipes: 2000,
      amt: 2400,
    },
    {
      name: 'Ultimo',
      Inscritos: 10000,
      Equipes: 8000,
      amt: 2210,
    },
    {
      name: 'Recente',
      Inscritos: 8000,
      Equipes: 6000,
      amt: 2290,
    },
    {
      name: 'Recente',
      Inscritos: 2780,
      Equipes: 3908,
      amt: 2000,
    },
    {
      name: 'Recente',
      Inscritos: 4000,
      Equipes: 2500,
      amt: 2181,
    },
    {
      name: 'Atual',
      Inscritos: 6000,
      Equipes: 5500,
      amt: 2500,
    },
    {
      name: 'Atual',
      Inscritos: 9800,
      Equipes: 8700,
      amt: 2100,
    },
  ];
  
class GraficoInscritos extends PureComponent {
  
    render() {
      return (
        <ResponsiveContainer width="100%" height="80%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 8,
              right: 30,
              left: 30,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Inscritos" fill="#fff" activeBar={<Rectangle fill="purple" stroke="black" />} />
            <Bar dataKey="Equipes" fill="#7300ff" activeBar={<Rectangle fill="black" stroke="purple" />} />
          </BarChart>
        </ResponsiveContainer>
      );
    }
  }

  export default GraficoInscritos