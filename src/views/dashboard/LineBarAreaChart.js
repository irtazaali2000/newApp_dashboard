import { CCard, CCardBody, CCardHeader } from '@coreui/react';
import React, { PureComponent, useEffect, useState } from 'react';
import { useContext } from 'react';
import JsonContext from '../global context/JsonContext';
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
  let jsonContextData = useContext(JsonContext)
  let [array , setArray] = useState([])
  // useEffect(
  //   ()=>{
  // for (let i = 0; i < jsonContextData.products.length; i++) {
  //   for (let j = 0; j < array.length + 1 ; j++) {
  // console.log(jsonContextData.products , "Context api")
  //     if(array[j] !== jsonContextData.products.category){

  //     }
  //   }
    
  // }
  //   } , []
  // )

  
    const data = [
        {
          name: 'mobile phone',
          "products": 4,  
          sale: 800,
          Cost: 1400,
          cnt: 490,
        },
        {
          name: 'perfumes ',
          "products": 3,  
          sale: 967,
          Cost: 1506,
          cnt: 590,
        },
        {
          name: 'cloths ',
          "products": 4,
          sale: 1098,
          Cost: 989,
          cnt: 350,
        },
        {
          name: 'shoes ',
          "products": 2,
          sale: 1200,
          Cost: 1228,
          cnt: 480,
        },
        {
          name: 'bags ',
          "products": 2,
          sale: 1108,
          Cost: 1100,
          cnt: 460,
        },

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
          <Line type='linear' dataKey='products' stroke='#d58bfd' fill='#d58bfd' />
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
