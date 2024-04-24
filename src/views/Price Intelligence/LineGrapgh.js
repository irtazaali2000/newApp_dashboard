import React from 'react'
import { LineChart , CartesianGrid ,XAxis ,
    YAxis,
    Tooltip,
    Legend,
    Line,
      } from 'recharts'
function LineGrapgh(props) {  
    const data = [
        {
          "name": "Jan",
          "Amazon": 4000,
          "Noon": 2400,
          "Lulu Hyper Market": 2400 ,
          "Jackys Electronics": 5220
        },
        {
          "name": "Feb",
          "Amazon": 3000,
          "Noon": 1398,
          "Lulu Hyper Market": 2210 ,
          "Jackys Electronics": 3937
        },
        {
          "name": "March",
          "Amazon": 2000,
          "Noon": 9800,
          "Lulu Hyper Market": 2290 ,
          "Jackys Electronics": 4540
        },
        {
          "name": "April",
          "Amazon": 2780,
          "Noon": 3908,
          "Lulu Hyper Market": 2000 ,
          "Jackys Electronics": 2560
        },
        
      ]
      
    return (
        <>
        {/* width - 340 */}
        {/* height - 210  */}
        {/* 500 , 350 , 14 */}
            <LineChart style={{border:""}} width={props.width} height={props.height} data={data}
                margin={{ top: 27, right: 30, left: props.leftMargin, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="linear" dataKey="Amazon" stroke="#8884d8" />
                <Line type="linear" dataKey="Noon" stroke="#82ca9d" />
                <Line type="linear" dataKey="Lulu Hyper Market" stroke="#82ca9d" />
                <Line type="linear" dataKey="Jackys Electronics" stroke="#82ca9d" />
            </LineChart>
        </>
    )
}

export default LineGrapgh