import MarketAnalytics from "./MarketAnalytics";
import React, { useState } from 'react'

function JasonData() {
    const [data  , setData] = useState(
        [
            {name :"Irtaza"}
        ]
    )
  return (
    <>
    <MarketAnalytics name="irtaza" />
    </>
  )
}

export default JasonData