import React, { useEffect, useState } from 'react'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import './style.css'
import { color } from 'chart.js/helpers'
function Card(props) {
  const [arrow, setArrow] = useState('')
  const [graphColor, setGraphColor] = useState({
    // color:"#00c99d"
  })
  const [graphBackground, setGraphBackground] = useState({})
  useEffect(
    () => {
      if (props.graph) {
        setArrow("fa-solid fa-arrow-right fa-rotate-270")
        setGraphColor({
          color: "#00c99d"
        })
        setGraphBackground({ backgroundColor: "#00c99d" })
      } else {
        setArrow("fa-solid fa-arrow-right fa-rotate-90")
        setGraphColor({
          color: "red"
        })
        setGraphBackground({ backgroundColor: "red" })
      }
    }
    , []
  )
  const [percentage, setPercentage] = useState({ display: "none" })
  const [bars, setBars] = useState({ display: "none" })

  useEffect(
    () => {

      if (props.graph === "progress") {
        setBars({
          display: "block"
        })
      }
      else {
        setPercentage(
          {
            display: "block"
          }
        )
      }
    }, []
  )
  return (
    <>
      <CCard  className='w-45 cardBody' >
        <CCardBody className='p-25'>
          <div className='cardFirstRow'>
            {/* card name */}
            <div className='cardPrice'><span>{props.head}</span> <br />
              <span>
                {/* price */}
                {props.product}
              </span>
            </div>
            <div>
              {/* price tag */}
              <div>
                <div style={{
                  ...props.iconColor,
                  display: " flex", alignItems: "center", justifyContent: "center", height: "55px", width: "55px", boxShadow: "border-box", borderRadius: "50%"
                  , color: "white", fontSize: "18px"
                }}><i class={props.icon}></i></div>
              </div>
            </div>
          </div>
        
          <div className='cardSecondRow'>
            <span style={graphColor}>
              {/* {
                props.graph ? setArrow("fa-solid fa-arrow-right fa-rotate-270") : setArrow("fa-solid fa-arrow-right fa-rotate-90")
              } */}
              <div> products</div>
              <div style={percentage}>
                <i class={arrow}></i>
                
                 {props.percentage}
              </div>
              {/* <div  style={{...{bars} ,  } }>
                <div style={{width:"150px" , height:"5px" , backgroundColor:`${props.progressBackgroundColor}` }}></div>
                <div> {props.progress}</div>
              </div> */}
            </span>
            <span>
              {props.lastUpdate}
            </span>
          </div>
        </CCardBody>
      </CCard>
    </>
    //   <CCard >
    //   <CCardHeader style={{backgroundColor:"white"  ,display:"flex" , justifyContent:"space-between"  ,alignItems:"center"  ,border:"none"}}  >

    //     <div>Prices Changes</div>
    //     <div style={{ display:" flex" , alignItems:"center" , justifyContent:"center" , height:"40px" ,width:"40px" , boxShadow:"border-box" , backgroundColor:"orangered" ,borderRadius:"50%"
    //   , color:"white"
    //   }}><i class="fa-solid fa-dollar-sign"></i></div>
    //   </CCardHeader>
    //   <CCardBody style={{ padding: "24px 44px" }}>
    //     <CTable>
    //       <CTableHead>
    //         <CTableHeaderCell style={{ width: "150px" }}>
    //           {props.head1}
    //         </CTableHeaderCell>
    //         <CTableHeaderCell>
    //         {props.head2}
    //         </CTableHeaderCell>
    //       </CTableHead>
    //       <CTableBody>
    //         <CTableDataCell>
    //         {props.data1}
    //         </CTableDataCell>
    //         <CTableDataCell>
    //         {props.data2}
    //         </CTableDataCell>
    //       </CTableBody>
    //     </CTable>

    //   </CCardBody>
    // </CCard>
  )
}

export default Card