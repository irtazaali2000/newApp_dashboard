import React from 'react'

import TinyChart from './SmallArea'
function TinyChartData(props) {
  return (
    <div className='tinyCardBody' style={{display:"flex"}}>
                <div className='tinyCardBody_first'>
                  <div style={{fontSize:"16px"}} >{props.name}</div>
                  <div><TinyChart /></div>
                </div>
                <div className='tinyCardBody_second'>
                  <div>{props.quantity}</div>
                  <div style={{color:`${props.color}`}} >
                  <i  class={props.icon}></i> {props.graphVal}
                  </div>
                </div>
              </div>
  )
}
// name="products" quantity="494" graphVal="23.76%" graph={true}

export default TinyChartData