// src/components/ChartCard.js
import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ChartCard = ({ title, data }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-[300px]">
      <h3 className="text-center font-semibold">{title}</h3>
      <PieChart width={1000} height={250}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ChartCard;
