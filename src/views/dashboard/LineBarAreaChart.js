import { CCard, CCardBody, CCardHeader } from '@coreui/react';
import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';



function LineBarAreaChart(){
    const data = [
        {
          name: 'Jeans',
          "Margin rate": 30,  
          sale: 800,
          Cost: 1400,
          cnt: 490,
        },
        {
          name: 'Bags',
          "Margin rate":30 ,
          sale: 967,
          Cost: 1506,
          cnt: 590,
        },
        {
          name: 'Jewelry',
          "Margin rate": 70 ,
          sale: 1098,
          Cost: 989,
          cnt: 350,
        },
        {
          name: 'T-shirt',
          "Margin rate": 80,
          sale: 1200,
          Cost: 1228,
          cnt: 480,
        },
        {
          name: 'Shoes',
          "Margin rate": 79 ,
          sale: 1108,
          Cost: 1100,
          cnt: 460,
        },
        {
          name: 'Coats',
          "Margin rate": 50,
          sale: 680,
          Cost: 1700,
          cnt: 380,
        },
        {
          name: 'hats',
          "Margin rate": 70,
          sale: 500,
          Cost: 1848,
          cnt: 836,
        }
      ];
    return(
        <>
         {/* margin={{top: 20, right: 20, bottom: 20, left: 20}} */}
         <CCard>
          <CCardHeader style={{backgroundColor:""}} >Sales by product category</CCardHeader>
          <CCardBody>
         <ComposedChart width={630} height={300} data={data}
            >
          <CartesianGrid stroke='#f5f5f5'/>
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip />
          <Legend />
          {/* monotone */}
          <Area type="linear" dataKey='Cost' fill='#d3dadf' stroke='#8884d8'/>
          <Bar dataKey='sale' barSize={7} fill='#00baff' />
          <Line type='linear' dataKey='Margin rate' stroke='#d58bfd' fill='#d58bfd' />
       </ComposedChart>
       </CCardBody>
       </CCard>
    
        </>
    )
}
export default LineBarAreaChart;

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/simple-composed-chart-h9zif';

//   render() {
//     return (
     
//     );
//   }
// }
