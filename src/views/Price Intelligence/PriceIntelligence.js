import React, { useEffect, useState } from 'react'
import Example from './Pie';
import './style.css'
import { useContext } from 'react';
import TinyPieChart from './TinyPie';
import NewContext from '../marketAnalytics/context/NewContext';
import { element } from 'prop-types';
import SmallChart from './SmallChart';
import LineGrapgh from './LineGrapgh';
function PriceIntelligence() {
  const contextData = useContext(NewContext)
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];

  const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
  ];

  let [searchInput, setSearchInput] = useState({
    // height:"30px"
    // width:"90px",
    // border:"none",
    // outline:"none",
    position: "relative",
    // width:"300px",
    // borderRadius:"30px"
    // border:"1px"
  })
  const [heading, setHeading] = useState({
    display: "flex",
    alignItem: "center",
    border: "1px solid black",


  })
  let [boxSmallChart, setBoxSmallChart] = useState({
    // width:"300px",
    margin: " 0px 05px",
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    // border:"1px solid black"
    // textAlign: "center",
    // width:"150px"
  })
  const [compititerProgress, setCompititerProgress] = useState({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px"
  })
  const [stockData, setStockData] = useState(
    [
      {
        productQuantity: "12k",
        status: "InStock"
      },
      {
        productQuantity: "40k",
        status: "out of Stock"
      },
      {
        productQuantity: "55k",
        status: "InStock"
      },
      {
        productQuantity: "30k",
        status: "out of Stock"
      },
      {
        productQuantity: "60k",
        status: "InStock"
      },
      {
        productQuantity: "70k",
        status: "out of Stock"
      },
      {
        productQuantity: "22k",
        status: "out of Stock"
      },
      {
        productQuantity: "22k",
        status: "out of Stock"
      },

    ]
  )

  const [priceTrendData, setPriceTrendData] = useState(
    contextData.priceTrendCloths
  )
  let [count, setCount] = useState(0)
  useEffect(
    () => {
      // console.log(contextData.array.length)



      setTimeout(

        () => {
          // return contextData.array.length !== prev ? prev++ : prev = 0

          if (priceTrendData === contextData.priceTrendCloths) {
            setPriceTrendData(contextData.priceTrendMobilePhones)
          }
          else {
            setPriceTrendData(contextData.priceTrendCloths)
          }
        }, 4000
      )
    },
  )

  const [pricingStoreData, setPricingStoredata] = useState([
    {
      name: "Noon",
      "": "40%",
      value: "245K",
      "Stock Avalibility": "Out of stock",
      color: "#00aced"
    },
    {
      name: "Amazon",
      "": "90%",
      value: "665K",
      "Stock Avalibility": "Instock",
      color: "#e20c00"
    },
    {
      name: "SharafDG",
      "": "65%",
      value: "465K",
      "Stock Avalibility": "Out of stock",
      color: "#f28d00"
    },
    {
      name: "Carrefour",
      "": "40%",
      value: "355K",
      "Stock Avalibility": "Out of stock",
      color: "#00aced",
    },
    {
      name: "Virgin Mega Store",
      "": "70%",
      value: "525K",
      "Stock Avalibility": "Instock",
      color: "#e20c00"
    },
    {
      name: "Lulu Hyper Market",
      "": "80%",
      value: "675K",
      "Stock Avalibility": "Out of stock",
      color: "#009859"
    },
    {
      name: "Jumbo",
      "": "60%",
      value: "455K",
      "Stock Avalibility": "Instock",
      color: "#f28d00"
    },
    {
      name: "Jackys Electronics",
      "": "50%",
      value: "285K",
      "Stock Avalibility": "Instock",
      color: "#009859",

    },
  ])

  const [indikateColorBox , setIndikateColorBox] = useState({
    width:"20px",
    height:"20px"
  })
// #00aced - blue
// e20c00 - red
// f28d00 - yellow
// #009859 - green
const [displayPopupComparision , setDisplayPopupComparision] = useState({
  display:"none"
})
const [newStock , setNewStock] = useState([])
  function PopupComparision( array , color ){
    return ()=>{
      setNewStock([])
      // console.log(array[0].color)
      for (let i = 0; i < array.length; i++) {
        if(array[i].color === color)
        {
          // console.log(array[i] , "equal")
          setNewStock((prev) => {
            return [...prev ,array[i] ]
          })
          
        }
        
      }
      console.log(newStock)
      setDisplayPopupComparision({
        display:"flex"
      })
    }
  }
  return (
    <>
    <div style={displayPopupComparision} className='popupBodyForComparision'>
      <div className='popup_comparision'>
        <table>
          <tr>
            <th>Competitor</th>
            <th></th>
            <th>Value</th>
            <th>Stock Availability</th>
          </tr>
          {
            newStock.map(
              (item)=>{
                return(
                  <>
                  <tr>
                    <td>
                      {item.name}
                    </td>
                    <td>
                      <div style={{width:"120px" , height:"6px" , }}>
                        <div style={{width:`${item[""]}` , height:"100%" , backgroundColor:`${item.color}`}}>

                        </div>
                      </div>
                    </td>
                    <td>
                     {item.value} 
                    </td>
                    <td>
                      {item["Stock Avalibility"]}
                    </td>
                  </tr>
                  </>
                )
              }
            )
          }
        </table>

        <button onClick={()=>(setDisplayPopupComparision({display:"none"}))} >Okay</button>
      </div>
    </div>
      <div className='bodyFont' style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        margin: "20px 0px", position: "relative"
      }} >
        {/* <HeaderMain title="System" className="mb-4 mb-lg-5" /> */}
        <div ><h1 style={{ fontSize: "20px" }} >Comparison</h1></div>
        <div>
          <i style={{ position: "absolute", top: "30%", marginLeft: "9px", fontSize: "17px", color: "black" }} class="fa-solid fa-magnifying-glass"></i>
          <input style={{
            border: "none", outline: "none", width: "400px", borderRadius: "10px", height: "22px", boxSizing: "border-box",
            padding: "20px  40px", fontSize: "20px", backgroundColor: "#e6e6f6"
          }} type="text" />
        </div>
      </div>
      <div className='bodyFont' style={{
        display: "flex", gap: "5px", flexDirection: "column"
      }} >
        <div style={{ display: "flex", gap: "20px", border: "" }} >
          <div className='pricesRangeUtility' style={{
            alignItems: "center",
            display: "flex", boxSizing: "border-box", padding: "20px 30px"
            , gap: "", backgroundColor: "white", borderRadius: "20px", border: "", padding: "5px 5px"
          }}>

            <div className='tinyPieChartBox' style={{ ...boxSmallChart, border: "" }}>
              <div style={{ textAlign: "center" }} ><h5>Highest Price</h5> </div>
              <div style={{ display: "flex", alignItems: "", gap: "", border: "" }}>
                <div onClick={PopupComparision(pricingStoreData , "#e20c00" )} style={{
                  fontSize: "14px" 
                  
                }} >
                  <SmallChart  color="#de0000" value={350} width={150} height={150} />
                </div>
              </div>
            </div>
            <div className='tinyPieChartBox' style={{ ...boxSmallChart, border: "" }}>
              <div style={{ textAlign: "center" }} ><h5>Lower Price</h5> </div>
              <div style={{ display: "flex", alignItems: "", gap: "20px", border: "" }}>
                <div onClick={PopupComparision(pricingStoreData , "#009859" )} style={{
                  fontSize: "14px"
                  
                }} >
                  <SmallChart  color="#02944c" value={650} width={150} height={150} />
                </div>
              </div>
            </div>
            <div className='tinyPieChartBox' style={{ ...boxSmallChart, border: "" }}>
              <div style={{ textAlign: "center" }} ><h5>On purchase</h5> </div>
              <div style={{ display: "flex", alignItems: "", gap: "20px", border: "" }}>
                <div onClick={PopupComparision(pricingStoreData , "#f28d00")} style={{
                  fontSize: "14px"
                  
                }} >
                  <SmallChart  color="#f28d00" value={430} width={150} height={150} />
                </div>
              </div>
            </div>
            <div className='tinyPieChartBox' style={{ ...boxSmallChart, border: "" }}>
              <div style={{ textAlign: "center" }} ><h5>Exclusive</h5> </div>
              <div style={{ display: "flex", alignItems: "", gap: "20px", border: "" }}>
                <div onClick={PopupComparision(pricingStoreData ,"#00aced" )} style={{
                  fontSize: "14px"
                  
                }} >
                  <SmallChart  color="#00aced" value={530} width={150} height={150} />
                </div>
              </div>
            </div>

          </div>

          <div style={{ height: "", width: "", padding: "20px 20px" ,  gap: "", display: "flex", flexDirection: "column", boxSizing: "border-box", backgroundColor: "white", borderRadius: "20px", flexGrow: "1" }}>
            <div style={{ fontSize: "18px" , textAlign:"center" , fontWeight:"500"  }} >Price Trend of last 4 months</div>
            <div style={{border:"", fontSize:"14px"}}>  <LineGrapgh width={340} height={220} leftMargin={-14} />  </div>
            
            {/* <div style={{
              display: "flex", flexDirection: "column", gap: "10px",
              justifyContent: "center", border: "", padding: "0px 20px", margin: "0px"
            }}>

              {
                priceTrendData.productData.map(
                  (item) => {
                    return (
                      <>
                        <div style={{ width: "200px", height: "7px", marginBottom: "", marginTop: "", margin: "10px 0px" }}>
                          <div style={{ fontSize: "14px", display: "flex", justifyContent: "space-between" }} ><div style={{

                          }}>{item.date}</div> <div> {item.price}% </div></div>
                          <div style={{ width: `${item.price}%`, height: "100%", borderRadius: "7px", backgroundColor: `${item.color}` }} ></div>
                        </div>
                      </>
                    )
                  }
                )
              }


            </div> */}
          </div>
        </div>


        <div style={{ display: "flex", gap: "20px", border: "", alignItems: "center" }}>

          <div style={{
            border: "", height: "440px", width: "800px", backgroundColor: "white", borderRadius: "20px",
            margin: "10px 0px "
          }}>

            <table className='pricingDataTable'>
              <tr>
                <th>
                  Competitor
                </th>
                <th>
                  
                </th>
                <th>
                  value
                </th>
                <th>
                  Stock Avalibility
                </th>
              </tr>

              {

                pricingStoreData.map(
                  (item) => {
                    return (
                      <>
                        <tr>
                          <td> {item.name} </td>
                          <td>
                            <div style={{ width: "200px", height: "10px", }} ><div style={{
                              backgroundColor: `${item.color}`,
                              width: `${item.Progress}`, height: "100%"
                            }} ></div></div>
                          </td>
                          <td> {item.value} </td>
                          <td> {item['Stock Avalibility']} </td>
                        </tr>
                      </>
                    )
                  }
                )
              }


            </table>
            {/* name
Progress
Price
Stock */}
          </div>
          {/* <div className="second" style={{ width: "", margin: "10px 0px"  ,  border:"1px solid black" }} >
            <div className='compiteterUtility' style={{
              boxSizing: "border-box"
              , padding: "20px 28px", backgroundColor: "white",
              borderRadius: "30px"
            }}>
              <h3 style={{ fontSize: "18px" }}>Competiter</h3>

              <div style={compititerProgress}>
                <h4>Noon</h4>
                <div style={{ width: "300px", height: "6px", borderRadius: "7px", backgroundColor: "aqua" }} ></div>
              </div>
              <div style={compititerProgress}>
                <h4>Amazon</h4>
                <div style={{ width: "350px", height: "6px", borderRadius: "7px", backgroundColor: "red" }} ></div>
              </div>
              <div style={compititerProgress}>
                <h4>SharafDG</h4>
                <div style={{ width: "340px", height: "6px", borderRadius: "7px", backgroundColor: "orange" }} ></div>
              </div>
              <div style={compititerProgress}>
                <h4>Carrefour</h4>
                <div style={{ width: "250px", height: "6px", borderRadius: "7px", backgroundColor: "aqua" }} ></div>
              </div>
              <div style={compititerProgress}>
                <h4>Virgin Mega Store</h4>
                <div style={{ width: "160px", height: "6px", borderRadius: "7px", backgroundColor: "orangered" }} ></div>
              </div>
              <div style={compititerProgress}>
                <h4>Lulu Hyper Market</h4>
                <div style={{ width: "120px", height: "6px", borderRadius: "7px", backgroundColor: "green" }} ></div>
              </div>
              <div style={compititerProgress}>
                <h4>Jumbo</h4>
                <div style={{ width: "120px", height: "6px", borderRadius: "7px", backgroundColor: "green" }} ></div>
              </div>
              <div style={compititerProgress}>
                <h4>Jackys Electronics</h4>
                <div style={{ width: "120px", height: "6px", borderRadius: "7px", backgroundColor: "green" }} ></div>
              </div>
            </div>
          </div> */}
          {/* <div className="second" style={{ margin: "10px 0px" }} >
            <div style={{
              boxSizing: "border-box"
              , padding: "20px 24px", backgroundColor: "white", display: "flex", flexDirection: "column",
              gap: "7px", borderRadius: "30px"
            }}>
              <h3 style={{ fontSize: "18px" }}>Stock Out</h3>

              {
                stockData.map(
                  (item) => {
                    return (
                      <>
                        <div style={{ display: "flex", gap: "10px", marginTop: "14px" }}>
                          <div style={{ width: "70px", padding: "0px 10px", boxSizing: "border-box", borderRadius: "4px", backgroundColor: "#c6cecf" }}>
                            {item.productQuantity}
                          </div>
                          <div style={{ width: "100px", textAlign: "center", height: "25px", borderRadius: "4px", backgroundColor: "#c6cecf" }}>
                            {item.status}
                          </div>
                        </div>
                      </>
                    )
                  }
                )
              }


            </div>
          </div> */}
          {/* this is pie chart div or box */}
          <div style={{
            backgroundColor: "white", margin: "10px 0px", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "", alignItems: "center",
            border: "", height: "440px"
          }}>
            <div style={{ fontSize: "18px", fontWeight: "500", marginTop: "10px", }}>
              Position
            </div>
            <div style={{ border: "" }} >
              {<Example width="290" height={250} radius="80" />}
            </div>
            <div>
              <div style={{display:"flex"  , gap:"10px" }}>
                <div style={{ ...indikateColorBox , backgroundColor:"#009653"}}></div>
                <div>Expensive than us</div>
              </div>
              <div style={{display:"flex"  , gap:"10px" }}>
                <div style={{ ...indikateColorBox , backgroundColor:"#f70000 "}}></div>
                <div>Cheaper than us</div>
              </div>
              <div style={{display:"flex"  , gap:"10px" }}>
                <div style={{ ...indikateColorBox, backgroundColor:"#ff8700 "}}></div>
                <div>Slightly cheaper than us</div>
              </div>
              <div style={{display:"flex"  , gap:"10px" }}>
                <div style={{ ...indikateColorBox , backgroundColor:"#00a1e9 "}}></div>
                <div>Equal to us</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PriceIntelligence