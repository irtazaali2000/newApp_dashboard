import React, { useEffect } from 'react'
import {
  LineChart, CartesianGrid, XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts'
import { useContext } from 'react'
import JsonContext from '../global context/JsonContext'
function LineGrapgh(props) {
  let jsonContextData = useContext(JsonContext)
  useEffect(
    ()=>{
      console.log(jsonContextData.retaillersData.competitors , "line graph comparision")
    } , []
  )
  const data = [
    {
      "name": "Jan",
      "Amazon": 88,
      "Shein": 24,
      "Noon": 54,
      "Carrefour": 87,
      "Alibaba": 24,
      "Lulu Hypermarket": 57,
      "Walmart": 87,
      "Trendyol": 24,
      "Namshi": 84
    },
    {
      "name": "Feb",
      "Amazon": 50,
      "Shein": 20,
      "Noon": 40,
      "Carrefour": 46,
      "Alibaba": 27,
      "Lulu Hypermarket": 26,
      "Walmart": 44,
      "Trendyol": 35,
      "Namshi": 26
    },
    {
      "name": "March",
      "Amazon": 22,
      "Shein": 60,
      "Noon": 40,
      "Carrefour": 88,
      "Alibaba": 30,
      "Lulu Hypermarket": 60,
      "Walmart": 45,
      "Trendyol": 57,
      "Namshi": 67
    },
    {
      "name": "April",
      "Amazon": 76,
      "Shein": 81,
      "Noon": 34,
      "Carrefour": 46,
      "Alibaba": 73,
      "Lulu Hypermarket": 29,
      "Walmart": 60,
      "Trendyol": 44,
      "Namshi": 63
    },

  ]

  return (
    <>
      {/* width - 340 */}
      {/* height - 210  */}
      {/* 500 , 350 , 14 */}
      <LineChart style={{ border: "" }} width={props.width} height={props.height} data={data}
        margin={{ top: 27, right: 30, left: props.leftMargin, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="linear" dataKey="Amazon" stroke="#8ED1FC" />
        <Line type="linear" dataKey="Noon" stroke="#FFA07A" />
        <Line type="linear" dataKey="Lulu Hypermarket" stroke="#98FB98" />
        <Line type="linear" dataKey="Shein" stroke="#FFD700" />
        <Line type="linear" dataKey="Carrefour" stroke="#00FFFF" />
        <Line type="linear" dataKey="Alibaba" stroke="#FF00FF" />
        <Line type="linear" dataKey="Walmart" stroke="#FFA500" />
        <Line type="linear" dataKey="Trendyol" stroke="#800080" />
        <Line type="linear" dataKey="Namshi" stroke="#008080" />
      </LineChart>
    </>
  )
}

export default LineGrapgh