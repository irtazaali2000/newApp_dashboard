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

import { CChartPie } from '@coreui/react-chartjs'


function Product(props) {

    // useEffect(
    //     ()=>{
    //         console.log(props.pieData)
    //     },
    // [])
    
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
    const [array , setArray] = useState([])
    useEffect(
        ()=>{
            // console.log(data.productData_detail.Retailer_1[1])
            setArray([data.productData_detail.Retailer_1[1]])
            console.log(array)
        } , [])
    
    return (
        <>


            <div style={{
                display: "flex", alignItems: "", justifyContent: "", gap: "20px",
                margin: "20px 0px", border: ""
            }} >
                {/* <HeaderMain title="System" className="mb-4 mb-lg-5" /> */}
                <div style={{ position: "relative" }}>
                    <Link to="/theme/detailed-explanation" > <i style={{ marginLeft: "-10px", marginRight: "14px", fontSize: "20px" }} class="fa-solid fa-arrow-left"></i></Link>
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

                <div style={{ ...productBody, backgroundColor:"" , gap:"10px" , marginBottom:"10px" }} >
                    <div style={{
                        ...productDetail, borderRadius: "10px", border: "none", backgroundColor: "",
                        width: "350px", boxSizing: "border-box", display: "flex",
                        flexDirection: "column", gap: "22px", border: "" , backgroundColor:"white" , alignItems:"center"
                    }}>
                        <div style={{ width: "330px", border: "", textAlign: "center"  ,  }}>
                            <img style={{}} width={"100%"} src={props.productImgUrl} alt='product_1' />
                        </div>
                       
                    </div>
                    <div style={{
                        backgroundColor: "white",
                        boxSizing: "border-box", padding: "10px 0px", flexGrow: "1", border: "" , 
                        display:"flex" , flexDirection:"column" , boxSizing:"border-box" , paddingLeft:"40px" , gap:"30px"
                        , paddingTop:"30px"
                    }}>
                        <div className='productDetail' style={{ padding: "0px 4px", boxSizing: "border-box" , 
                    border:"" , width:"60%"
                    }}>
                            <h4>{props.productName}</h4>
                            <h5>Price : {props.price}</h5>
                            {
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
                            }




                        </div>
                        <div className='productAbout' style={{
                            boxSizing: "border-box", padding: "0px 7px" , width:"65%"

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
                        , display: "flex"
                    }}>

                        <div className='line_chart'>
                            <LineChart width={660} height={300} data={props.data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="linear" dataKey="price" stroke="#8884d8" />
                                {/* <Line type="monotone" dataKey="Carrefour" stroke="#82ca9d" />
                                <Line type="monotone" dataKey="Shein" stroke="#ff7128" /> */}
                            </LineChart>
                        </div>
                        <div className='pieChartBody'>
                            <div className='pie_chart' >

                                <CChartPie
                                    data={{
                                        labels: ['Carrefour', 'Noon', 'Shein'],
                                        datasets: [
                                            {
                                                data: [300, 50, 100],
                                                backgroundColor: ['#ff0000', '#009653', '#ff8700'],
                                                hoverBackgroundColor: ['#FF6384', 'Noon', '#FFCE56'],
                                            },
                                        ],
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>







        </>

    )
}

export default Product