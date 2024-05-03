import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SimpleLineChart from './Chart'
import './product.css'
import { useContext } from 'react'
import NewContext from '../marketAnalytics/context/NewContext'
import {
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    // ResponsiveContainer,
    Legend,
    LineChart,
    // ValueLabel,
    Dot
} from 'recharts'
import JsonContext from '../global context/JsonContext'

import { CChartPie } from '@coreui/react-chartjs'


function Product(props) {
    let allContextData = useContext(NewContext)
    const [pricesData, setPricesData] = useState(props.pricesPieChart)

    let jsonContextData = useContext(JsonContext)


    const [lineData , setLineData] = useState(jsonContextData.lineGraphData)

    useEffect(
        () => {
            console.log(allContextData.pricesDATA, "from context aal data")
            // setPricesData(props.pricesPieChart)
            // console.log(pricesData , "pricess all data pie c hart")
            // for (let i = 0; i < pricesData.length; i++) {
            //     console.log(pricesData[i] , "arrayssss")
            // }
            // console.log(props.ourProductPrice)
        },
        [])
    const [values, setValues] = useState(
        {
            labels: props.arr,
            datasets: [
                {
                    data: props.pricesPieChart,
                    backgroundColor: ['#ff0000', '#009859', '#ff8000', "#00a4ea"],
                    // hoverBackgroundColor: ['#FF6384', 'Noon', '#FFCE56' , "green"],
                },
            ],
        }
    )

    const data = useContext(NewContext)

    const [productBody, setproductBody] = useState({
        display: "flex"

        // width: "350px"

    })
    const [brandDetail, setBrandDetail] = useState({
        // width: "20px",
        // border:"1px solid black"
    })
    // productDetail
    // productGraph
    // productChart
    let [productDetail, setProductDetail] = useState({
        border: "1px solid black"
    })
    const [productGraph, setProductGraph] = useState({
        // backgroundColor:"white"
    })
    const [productChart, setProductChart] = useState({})
    const [array, setArray] = useState([])
    const [ourPrice, setOurPrice] = useState()
    // useEffect(
    //     () => {
    //         // console.log(data.productData_detail.Retailer_1[1])
    //         setArray([data.productData_detail.Retailer_1[1]])
    //         console.log(array)

    //         console.log(Number(allContextData.ourPrices.slice(1)), "from context api arrayyyy")
    //         console.log(allContextData.pricesDATA, "arrAY ALL DATA")
    //         // pricesDATA
    //         setOurPrice(allContextData.ourPrices)
    //         // setOurPrice(Number(ourPrice.slice(1)))
    //         // console.log(ourPrice)
    //     }, [])
    // console.log(jsonContextData.lineGraphData , "From product siungle page")
    // let [datas , setDatas] = useState(new Array())
    let datas = []
    
    // console.log(jsonContextData.lineGraphData , "from product page")
    useEffect(
        ()=>{
            // var array = [] ;
            // for (let key in jsonContextData.lineGraphData) {
            // //    console.log(jsonContextData.lineGraphData[key]  , "from product page and it line grapgh variable")
            // //    setLineData(lineData.push(jsonContextData.lineGraphData[key]) )
            // array.push(jsonContextData.lineGraphData[key])
            // }
            // setLineData(array)
            // for (let i = 0; i < Object.keys(jsonContextData.lineGraphData).length; i++) {
            //     console.log()
            //     for (let j = i; j < i + 1; j++) {
            //     //    console.log(jsonContextData.lineGraphData[Object.keys(jsonContextData.lineGraphData)[i]] , "from clasic loopp")
            //         console.log("hello world")

            //         setLineData(lineData.push(jsonContextData.lineGraphData[Object.keys(jsonContextData.lineGraphData)[i]]))
            //     }
                
            // }
            // console.log(lineData , "this is line data")
            // console.log(array , "array is here")
           
            
            // console.log(datas , "from product page and it line grapgh variable")
            // setLineData(lineData = datas )
        } ,[]
    )
    // let lineData = [
    //     { name: 'Noon', price: 61  , stock: 'Instock', color: '#01821b'},
    //     { name: 'Carrefour', price: 61  ,  stock: 'Instock', color: '#01821b'},
    //     { name: 'Namshi', price: 49  ,  stock: 'Instock', color: '#01821b'},
    //     { name: 'Lulu Hyper Market', price: 44 ,  stock: 'Instock', color: '#01821b' }

    // ]
    return (
        <>


            <div style={{
                display: "flex", alignItems: "", justifyContent: "", gap: "20px",
                margin: "20px 0px", border: ""
            }} >
                {/* <HeaderMain title="System" className="mb-4 mb-lg-5" /> */}
                <div style={{ position: "relative" }}>
                    <Link to="/stock-analytics" > <i style={{ marginLeft: "-10px", marginRight: "14px", fontSize: "20px" }} class="fa-solid fa-arrow-left"></i></Link>
                    <i style={{ position: "absolute", zIndex: "11", top: "25%", marginLeft: "9px", fontSize: "17px", color: "black" }} class="fa-solid fa-magnifying-glass"></i>
                    <input style={{
                        border: "none", outline: "none", width: "400px", borderRadius: "10px", height: "22px", boxSizing: "border-box",
                        padding: "20px  40px", fontSize: "20px", backgroundColor: "#e6e6f6"
                    }} type="text" />
                </div>
                <div >
                    <select style={{
                        backgroundColor: "#e6e6f6",
                        border: "none", outline: "none", boxSizing: "border-box", padding: "10px 20px", borderRadius: "5px"
                    }}>
                        <option>Feature Product</option>
                        <option>Instock</option>
                        <option>Out of Stock</option>
                    </select>
                </div>
                <div >
                    <select style={{
                        backgroundColor: "#e6e6f6",
                        border: "none", outline: "none", boxSizing: "border-box", padding: "10px 20px", borderRadius: "5px"
                    }}>
                        <option>Feature Product</option>
                        <option>Instock</option>
                        <option>Out of Stock</option>
                    </select>
                </div>
                <div >
                    <select style={{
                        backgroundColor: "#e6e6f6",
                        border: "none", outline: "none", boxSizing: "border-box", padding: "10px 20px", borderRadius: "5px"
                    }}>
                        <option>Feature Product</option>
                        <option>Instock</option>
                        <option>Out of Stock</option>
                    </select>
                </div>
            </div>
            <div>

               <div style={{ ...productBody, backgroundColor: "", gap: "10px", marginBottom: "10px" }} >
                    <div style={{
                        ...productDetail, borderRadius: "10px", border: "none", backgroundColor: "",
                        width: "350px", boxSizing: "border-box", display: "flex",
                        flexDirection: "column", gap: "22px", border: "", backgroundColor: "white", alignItems: "center"
                    }}>
                        <div style={{ width: "300px", border: "", textAlign: "center", }}>
                            <img style={{}} width={"100%"} src={props.productImgUrl} alt='product_1' />
                        </div>

                    </div>
                    <div style={{
                        backgroundColor: "white",
                        boxSizing: "border-box", padding: "10px 0px", flexGrow: "1", border: "",
                        display: "flex", flexDirection: "column", boxSizing: "border-box", paddingLeft: "40px", gap: "30px"
                        , paddingTop: "30px"
                    }}>
                        <div className='productDetail' style={{
                            padding: "0px 4px", boxSizing: "border-box",
                            border: "", width: "60%"
                        }}>
                            <h4>{props.productName}</h4>
                            <h5>Price : ${props.price}</h5>
                            <h5>Brand : {props.brandName}</h5>
                            {/* {
                                props.productProperty.map(
                                    (item) => {
                                        return (
                                            <>
                                                <div style={{ display: "flex", alignItems: "start", gap: "14px" }}>
                                                    <div style={{
                                                        border: "",
                                                        width: "140px",
                                                    }}> <b>{item.property}</b></div>
                                                    <div > {item.propertyValue}</div>
                                                </div>
                                            </>
                                        )

                                    }
                                )
                            }  */}




                        </div>
                        <div className='productAbout' style={{
                            boxSizing: "border-box", padding: "0px 7px", width: "65%"

                        }}>
                            <h4>{props.about}</h4>
                             <ul>
                                {props.aboutProperty.map(
                                    (item) => {
                                        return (
                                            <>
                                                <li>
                                                    {item}
                                                </li>
                                            </>
                                        )
                                    }
                                )}
                            </ul> 
                        </div>
                    </div>



                </div> 
                {/* <div ><h1 style={{ fontSize: "30px" }} >Price Intelligence</h1></div> */}

                <div className='graphicsForProducts'>
                    <div style={{
                        backgroundColor: "white",
                        boxSizing: "border-box", padding: "10px 0px", flexGrow: "1", border: ""
                        , display: "flex" , border:""
                    }}>

                        <div className='line_chart' style={{border:""}}>
                            <LineChart width={950} height={400} data={lineData}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="linear" dataKey="price" stroke="#8884d8" />
                                
                            </LineChart>
{/* 
                            {
                                JSON.stringify(lineData)
                            } */}
                        </div>
                        <div className='pieChartBody'>
                            <div className='pie_chart' >

                                <CChartPie
                                    data={values}
                                />
                                {/* {allContextData.pricesDATA.map(
                                    (item) => {
                                        return (
                                            <>
                                              
                                                <div>{
                                                    Number(allContextData.ourPrices.slice(1)) > item.price ? `We are higher than ${item.name} ` : `We are lower than ${item.name} `
                                                }</div>
                                            </>
                                        )
                                    }
                                )} */}


                            </div>
                        </div>
                    </div>
                </div>

            </div>







        </>

    )
}

export default Product 