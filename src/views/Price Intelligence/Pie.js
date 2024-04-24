import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer , Tooltip } from 'recharts';

const data = [
  { name: 'Higher Price', value: 400 },
  { name: 'Slightly cheaper Price', value: 300 },
  { name: 'Equal Prices', value: 380 },
  { name: 'Cheaper Prices', value: 200 },
];

const COLORS = ['#009653', '#ff8700', '#00a1e9', '#f70000'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render(props) {
    return (
      // <ResponsiveContainer >
        <PieChart  width={290} height={this.props.height}>
          <Pie
          className='p-0'
            data={data}
            style={{border:"1px solid black"}}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        
     
    );
  }
}
