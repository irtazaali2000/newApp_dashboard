import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer , Tooltip} from 'recharts';




const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#f1f1f1" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function SmallChart(props){
const COLORS = [`${props.color}`, '#f1f1f1',];
let property = props.value
const data = [
    { name: 'Prices', value: props.value },
    { name: 'Group B', value: 300 },
   
  ];

    return(
        <>
         <PieChart  width={props.width} height={props.height}>
          <Pie
          className='p-0'
            data={data}
            style={{border:"1px solid black"}}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={60}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        </>
    )
}
export default SmallChart;
// export default class SmallChart extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

//   render(props) {
//     return (
//       // <ResponsiveContainer >
       
        
     
//     );
//   }
// }
