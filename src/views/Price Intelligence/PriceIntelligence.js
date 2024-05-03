import React, { useEffect, useState } from 'react'
import Example from './Pie';
import './style.css'
import { useContext } from 'react';
import TinyPieChart from './TinyPie';
import NewContext from '../marketAnalytics/context/NewContext';
import { element } from 'prop-types';
import SmallChart from './SmallChart';
import LineGrapgh from './LineGrapgh';
import JsonContext from '../global context/JsonContext';

function PriceIntelligence() {
  const contextData = useContext(NewContext)
  let jsonContextData = useContext(JsonContext)
  // console.log(jsonContextData.retaillersData.competitors, "irtaza")
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
  let [arrayCount, setArrayCount] = useState([
    { name: "Amazon", price: "2966.73" },
    { name: "Noon", price: "2851.52" },
    { name: "Carrefour", price: "2915.13" },
    { name: "Shein", price: "2798.77" },
    { name: "Namshi", price: "2715.74" },
    { name: "Alibaba", price: "3076.91" },
    { name: "Lulu Hypermarket", price: "2893.86" },
    { name: "Walmart", price: "3018.86" },
    { name: "Trendyol", price: "2697.86 " },
  ])

  let jsonContextDataFetchProducts = []
  useEffect(
    ()=>{
      // jsonContextData.categoryData
      for (let i = 0; i < jsonContextData.categoryData.length; i++) {
        jsonContextDataFetchProducts.push(...jsonContextData.categoryData[i].products)
      }
    }
  )
  let [myProducts , setMyProducts] = useState(jsonContextDataFetchProducts)
  useEffect(
    () => {
      //  console.log(myProducts , "This is all products for priceaintelligence page!!!")

      for (let i = 0; i < myProducts.length; i++) {

        for (let j = 0; j < myProducts[i].retailer.length; j++) {
          if (myProducts[i].retailer[j].name === "Trendyol") {
            console.log(myProducts[i].retailer[j].price, "this is all prices for amazon , main page")
            // count += data.products[i].retailer[j].price
            setCount(count += myProducts[i].retailer[j].price)
          }

        }
      }

      console.log(count, "this is from main page for Trendyol all prices!!!!!!")
    }, []
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

  const [indikateColorBox, setIndikateColorBox] = useState({
    width: "10px",
    height: "10px"
  })
  // #00aced - blue
  // e20c00 - red
  // f28d00 - yellow
  // #009859 - green
  const [displayPopupComparision, setDisplayPopupComparision] = useState({
    display: "none"
  })
  const [smallPieValue, setSmallPieValue] = useState([])
  const [smallPieHead, setSmallPieHead] = useState([])

  let [pricingStatus, setPricingStatus] = useState()
  let [iAmHigher, setIAmHigher] = useState([])
  let [countRight, setCountRight] = useState(0)
  let [countAlter, setCountAlter] = useState(0)
  function PopupComparision(data) {
    return () => {
      setIAmHigher([])
      setCountRight(0)
      setCountAlter(0)

      for (let i = 0; i < myProducts.length; i++) {

        let retailerArray = Object.values(myProducts[i].retailers)
        for (let j = 0; j < retailerArray.length; j++) {
          // myProducts[i].retailer
          if (data === "higher") {
            setPricingStatus("Products with higer Prices ")
            if (retailerArray[j].price < myProducts[i].my_price) {
              // console.log(myProducts[i].retailer[j].price, "prices")
              // console.log(myProducts[i].retailer[j].name, "name")
              setIAmHigher(
                (prev) => {
                  return [...prev, {
                    retailerName: retailerArray[j].name,
                    retailerPrice: retailerArray[j].price,
                    myProductPrice: myProducts[i].my_price, productName: myProducts[i].name
                  }]

                }
              )
              setCountRight(
                (prev) => {
                  return prev + 1
                }
              )
            }

            else {
              console.log(myProducts[i].retailer[j].price, "price")
              console.log(myProducts[i].retailer[j].name, "name")
              // console.log(setCountHigh(countHigh + 1))
              setCountAlter((prev) => {
                return prev + 1
              })
            }
          }
          else if (data === "average") {
            // console.log(myProducts[i].retailer[j].price , "this is from average")
            setPricingStatus("Products with average Prices ")
            let val = retailerArray[j].price
            let myVal = myProducts[i].my_price

            let masterVal = val - 10
            if (myVal > masterVal && myVal < val) {
              console.log(myProducts[i].my_price, "my prices")
              console.log(retailerArray[j].price, "other prices")
              setIAmHigher(
                (prev) => {
                  return [...prev, {
                    retailerName: retailerArray[j].name,
                    retailerPrice: retailerArray[j].price,
                    myProductPrice: myProducts[i].my_price, productName: myProducts[i].name
                  }]

                }
              )
            }

          }
          else if (data === "lower") {
            setPricingStatus("Products with Lower Prices ")
            if (retailerArray[j].price > myProducts[i].my_price) {
              console.log(retailerArray[j].price, "prices")
              console.log(retailerArray[j].name, "name")
              setIAmHigher(
                (prev) => {
                  return [...prev, {
                    retailerName: retailerArray[j].name,
                    retailerPrice: retailerArray[j].price,
                    myProductPrice: myProducts[i].my_price, productName: myProducts[i].name
                  }]

                }
              )
              setCountRight(
                (prev) => {
                  return prev + 1
                })
            }
          }
          else if (data === "equal") {
            setPricingStatus("Products with Equal Prices")
            if (retailerArray[j].price === myProducts[i].my_price) {
              console.log(retailerArray[j].price, "prices")
              console.log(retailerArray[j].name, "name")
              setIAmHigher(
                (prev) => {
                  return [...prev, {
                    retailerName: retailerArray[j].name,
                    retailerPrice: retailerArray[j].price,
                    myProductPrice: myProducts[i].my_price, productName: myProducts[i].name
                  }]

                }
              )
              setCountRight(
                (prev) => {
                  return prev + 1
                })
            }
          }



        }
      }
      console.log(iAmHigher)




      // setSmallPieHead(Heading)
      // setSmallPieValue(data)
      setDisplayPopupComparision({
        display: "flex"
      })
    }
  }
  return (
    <>
      <div style={displayPopupComparision} className='popupBodyForComparision'>
        <div className='popup_comparision_body'>
          <div className='popup_comparision' >
            <i onClick={() => (setDisplayPopupComparision({ display: "none" }))} class="fa-solid fa-circle-xmark crossIconComparisionScreen"></i>
            <h2>{pricingStatus} </h2>
            {/* <h4>{countRight}</h4> */}
            <table>
              <tr>
                <th>Retailer Name</th>
                <th>Retailer Price</th>
                <th>My price</th>
                <th>Product Name</th>
              </tr>
              {
                iAmHigher.map(
                  (item) => {
                    return (
                      <>

                        <tr>
                          <td>{item.retailerName}</td>
                          <td>{item.retailerPrice}</td>
                          <td>{item.myProductPrice}</td>
                          <td>{item.productName}</td>
                        </tr>
                      </>
                    )
                  }
                )
              }
            </table>


            {/* <button onClick={() => (setDisplayPopupComparision({ display: "none" }))} >Okay</button> */}
          </div>
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
            alignItems: "", height: "150px",
            display: "flex", boxSizing: "border-box", padding: "20px 10px"
            , gap: "40px", backgroundColor: "white", borderRadius: "20px", border: ""
          }}>

            <div className='tinyPieChartBox' style={{ ...boxSmallChart, border: "" }}>
              <div style={{ textAlign: "center" }} ><h5>Highest Price</h5> </div>
              <div style={{ display: "flex", alignItems: "", gap: "", border: "" }}>
                <div onClick={PopupComparision("higher")} style={{
                  fontSize: "14px", border: ""

                }} >
                  <SmallChart color="#de0000" value1={55} value2={79} width={100} height={100} />
                </div>
              </div>
            </div>
            <div className='tinyPieChartBox' style={{ ...boxSmallChart, border: "" }}>
              <div style={{ textAlign: "center" }} ><h5>Lower Price</h5> </div>
              <div style={{ display: "flex", alignItems: "", gap: "20px", border: "" }}>
                <div onClick={PopupComparision("lower")} style={{
                  fontSize: "14px"

                }} >
                  <SmallChart color="#02944c" value1={79} value2={55} width={100} height={100} />
                </div>
              </div>
            </div>
            <div className='tinyPieChartBox' style={{ ...boxSmallChart, border: "" }}>
              <div style={{ textAlign: "center" }} ><h5>Average Price</h5> </div>
              <div style={{ display: "flex", alignItems: "", gap: "20px", border: "" }}>
                <div onClick={PopupComparision("average")} style={{
                  fontSize: "14px"

                }} >
                  <SmallChart color="#f28d00" value1={59} value2={55} width={100} height={100} />
                </div>
              </div>
            </div>
            <div className='tinyPieChartBox' style={{ ...boxSmallChart, border: "" }}>
              <div style={{ textAlign: "center" }} ><h5>Equal Price</h5> </div>
              <div style={{ display: "flex", alignItems: "", gap: "20px", border: "" }}>
                <div onClick={PopupComparision("equal")} style={{
                  fontSize: "14px"

                }} >
                  <SmallChart color="#00aced" value1={100} value2={134} width={100} height={100} />
                </div>
              </div>
            </div>

          </div>


          <div style={{
            backgroundColor: "white", margin: "0px 0px", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "", alignItems: "",
            border: "", width: "400px", height: "150px", padding: "05px 0px"
          }}>
            <div style={{ fontSize: "18px", fontWeight: "500", marginTop: "0px", textAlign: "center" }}>
              Position
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: "20px", border: "",
              padding: "0px 40px"
            }}>
              <div style={{ fontSize: "10px" }} >
                {<Example width={120} height={120} radius={55} />}
              </div>
              <div style={{ fontSize: "13px" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ ...indikateColorBox, backgroundColor: "#009653" }}></div>
                  <div>Cheaper than us</div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ ...indikateColorBox, backgroundColor: "#f70000 " }}></div>
                  <div>Expensive than us</div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ ...indikateColorBox, backgroundColor: "#ff8700 " }}></div>
                  <div>Average than us</div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ ...indikateColorBox, backgroundColor: "#00a1e9 " }}></div>
                  <div>Equal to us</div>
                </div>

              </div>
            </div>

          </div>
        </div>


        <div style={{ display: "flex", gap: "20px", border: "", alignItems: "", flexDirection: "column" }}>

          <div style={{
            border: "", height: "", width: "100%", backgroundColor: "white", borderRadius: "20px",
            margin: "10px 0px ", boxSizing: "border-box", padding: "20px 0px"
          }}>

            <table className='pricingDataTable'>
              <tr className="comparisionTableHeadingRow" style={{ border: "none" }}>
                <th>
                  Competitor
                </th>
                <th>
                  Sales Progress
                </th>
                <th>
                  Sales percentage
                </th>
                {/* <th>
                  Sales
                </th> */}
                <th>
                  Stock Value
                </th>
                <th>
                  Stock Status
                </th>
                <th>
                  Market
                </th>
                <th>
                  Customer Service Rating
                </th>
                {/* <th>
                  User Experience
                </th> */}
              </tr>

              {

                jsonContextData.retaillersData.competitors.map(
                  (item) => {
                    return (
                      <>
                        <tr className='comparision_table'>
                          <td> {item.name} </td>
                          <td>
                            <div style={{ width: "60px", height: "10px", }} >
                              <div style={{
                                backgroundColor: `${item.stock_availability === "In stock" ? "#02842a" : "#ff0000"}`,
                                width: `${item.sales_percentage}`, height: "100%"
                              }} ></div>
                            </div>
                          </td>
                          <td>
                            {/* {
                           (( (item.total_price - item.my_price) / item.total_price)  * 100).toFixed(2)
                           
                            }% */}
                            {item.sales_percentage}

                          </td>
                          {/* <td>
                            {item.sales}
                          </td> */}
                          <td> {item.stock_value} </td>
                          <td> {item.stock_availability} </td>
                          <td> {item.market_presence} </td>
                          <td> {item.customer_service_rating} </td>
                          {/* <td> {item.user_experience} </td> */}
                        </tr>
                      </>
                    )
                  }
                )
              }


            </table>
          </div>

          {/* this is pie chart div or box */}
          <div style={{ height: "", width: "", padding: "20px 20px", gap: "", display: "flex", flexDirection: "column", boxSizing: "border-box", backgroundColor: "white", borderRadius: "20px", flexGrow: "1" }}>
            <div style={{ fontSize: "18px", textAlign: "center", fontWeight: "500" }} >Price Trend of last 4 months</div>
            <div style={{
              border: "", fontSize: "14px",
              display: "flex", justifyContent: "center"
            }}>  <LineGrapgh width={800} height={350} leftMargin={0} />  </div>


          </div>

        </div>
      </div>
    </>
  )
}

export default PriceIntelligence