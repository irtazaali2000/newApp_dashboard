import React from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import { RadialBarChart, RadialBar, Legend, Tooltip , LineChart, 

    XAxis,
YAxis,
Line,
CartesianGrid

} from 'recharts'
function RetailerCompare() {
    const data = [
        {
          "name": "Jan",
          "Noon": 4000,
          "Carrefour": 2400,
          "Shein": 2400,
          "Namshi": 2400,
        },
        {
          "name": "Feb",
          "Noon": 3000,
          "Carrefour": 1698,
          "Shein": 2210,
          "Namshi": 7900,
        },
        {
          "name": "March",
          "Noon": 2000,
          "Carrefour": 9800,
          "Shein": 2290,
          "Namshi": 8900,
        },
        {
          "name": "April",
          "Noon": 2000,
          "Carrefour": 9300,
          "Shein": 2290,
          "Namshi": 6900,
        },
        
      ]
      
    return (
        <>
            <CCard >
                <CCardHeader>Prices last 4 months</CCardHeader>
                <CCardBody style={{ padding: "40px 0px" }}>
                    <LineChart width={430} height={250} data={data}
                        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="linear" dataKey="Noon" stroke="#8ED1FC" />
                        <Line type="linear" dataKey="Carrefour" stroke="#FFA07A" />
                        <Line type="linear" dataKey="Shein" stroke="#98FB98" />
                        <Line type="linear" dataKey="Namshi" stroke="#FFD700" />
                    </LineChart>
                </CCardBody>

            </CCard>
        </>
    )
}

export default RetailerCompare