import React, { useState, useEffect } from 'react'
import './style.css'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CCard } from '@coreui/react'
import { color } from 'chart.js/helpers'
import JasonData from './JasonData'
import NewState from './context/NewState'
// import { prototype } from 'core-js/core/dict'
import PropTypes from 'prop-types';
import NewContext from './context/NewContext'
import { useContext } from 'react'

const MarketAnalytics = () => {
    const data = useContext(NewContext)
    const [tablePriceTag, setTablePriceTag] = useState({
        width: "60px",
        height: "60px",
        // border:"1px solid black"
    })

    const [productData, setProductData] = useState(
        [
            {
                sku: "001",
                category: "Mobile phones",
                brand: "Apple",
                market: "US",
                retailer_1: {
                    data: "In Stock",
                    range: "#00944b",
                    price: "120$"
                },
                retailer_2: {
                    data: "out of stock",
                    range: "#ff474c",
                    price: "240$"
                },
                retailer_3: {
                    data: "In Stock",
                    range: "#ff7128",
                    price: "100$"
                },
                dorpDownList: data.info.MobilePhones
            },
            {
                sku: "002",
                category: "Game consoles",
                brand: "ps45",
                market: "UK",
                retailer_1: {
                    data: "out of stock",
                    range: "#ff474c",
                    price: "170$"
                },
                retailer_2: {
                    data: "In Stock",
                    range: "#ff7128",
                    price: "180$"
                },
                retailer_3: {
                    data: "In Stock",
                    range: "#00944b",
                    price: "200$"
                },
                dorpDownList: data.info.GameConsoles
            },
            {
                sku: "003",
                category: "Clothing",
                brand: "zara",
                market: "UAE",
                retailer_1: {
                    data: "In Stock",
                    range: "#00944b",
                    price: "350$"
                },
                retailer_2: {
                    data: "In Stock",
                    range: "#ff7128",
                    price: "290$"
                },
                retailer_3: {
                    data: "out of stock",
                    range: "#ff474c",
                    price: "300$"
                }
                , dorpDownList: data.info.Clothing
            },
            ,
            {
                sku: "004",
                category: "Clothing",
                brand: "Apple",
                market: "US",
                retailer_1: {
                    data: "out of stock",
                    range: "#ff474c",
                    price: "190$"
                },
                retailer_2: {
                    data: "In Stock",
                    range: "#ff7128",
                    price: "190$"
                },
                retailer_3: {
                    data: "out of stock",
                    range: "#ff474c",
                    price: "180$"
                },
                dorpDownList: data.info.Clothing
            },
            ,
            {
                sku: "005",
                category: "shoes",
                brand: "jordan",
                market: "UK",
                retailer_1: {
                    data: "out of stock",
                    range: "#ff474c",
                    price: "160$"
                },
                retailer_2: {
                    data: "In Stock",
                    range: "#00944b",
                    price: "180$"
                },
                retailer_3: {
                    data: "out of stock",
                    range: "#ff474c",
                    price: "200$"
                },
                dorpDownList: data.info.shoes
            },
            ,
            {
                sku: "006",
                category: "electronics",
                brand: "N-vedia",
                market: "US",
                retailer_1: {
                    data: "In Stock",
                    range: "#ff7128",
                    price: "170$"
                },
                retailer_2: {
                    data: "In Stock",
                    range: "#00944b",
                    price: "250$"
                },
                retailer_3: {
                    data: "out of stock",
                    range: "#ff474c",
                    price: "230$"
                },
                dorpDownList: data.info.electronics
            },

        ]
    )
    const [retailerStyle, setRetailerStyle] = useState({
        color: "white"
    })
    const [productNames, setProductNames] = useState("Categories")
    const [backgroundColorTab, setBackgroundColorTab] = useState({
        backgroundColor: "#333333",
        color: "white"
    })
    const tab = (data) => {
        return () => {
            if (data === "Categories") {
                setProductNames("Categories")
            }
            else {
                setProductNames("Brand")
            }
        }
    }
    function check(e) {
        // console.log('okay td onclick is working')
        // console.log(e.target.parentElement.children)

        // this is row
        let element = e.target.parentElement.children
        // console.log(element[0].children)
        // console.log(element[0].children.length)
        // console.log(element[0].children.length)
        let first = element[0].children
        for (let i = 0; i < element.length; i++) {
            // console.log(element[i].children , 'colums')
            for (let j = 0; j < element[i].children.length; j++) {
                console.log(element[i].children[j].className, 'data')
                if (element[i].children[j].className === "dropDownList") {
                    console.log('class name okay')
                    if (element[i].children[j].style.display === 'none') {
                        element[i].children[j].style.display = 'block'
                    }
                    else {
                        element[i].children[j].style.display = 'none'
                    }
                }

            }

        }
        // for (let i = 0; i < first.length; i++) {
        //     // console.log(first[i].className )
        //     if(first[i].className === 'dropDownList')
        //     {
        //         if(first[i].style.display === "none")
        //         {
        //             first[i].style.display = "block"
        //         }
        //         else{
        //             first[i].style.display = "none"
        //         }
        //     }

        // }
        // for (let i = 0; i < element.length; i++) {
        //     let inerElement =  element[i].children
        //     for (let j = 0; j < inerElement.length; j++) {
        //         if(inerElement[j].className === 'dropDownList')
        //         {
        //             if(inerElement[j].style.display === 'none')
        //             {
        //                 inerElement[j].style.display === 'block'
        //             }
        //             else{
        //                 inerElement[j].style.display === 'none'
        //             }
        //         }

        //     }
        //     if (element[i].children.className === 'retailer') {
        //         // console.log(element[i].children[1].style.display = 'none')
        //         if (element[i].children[1].style.display === 'none') {
        //             element[i].children[1].style.display = 'block'
        //         }
        //         else {
        //             element[i].children[1].style.display = 'none'
        //         }
        //     }
        // }
        // console.log(data.data, "properties from json data component")
    }
    console.log(productNames === undefined)
    return (
        <>
            <div className='utilityClasses' lg={12} style={{
                display: "flex", alignItems: "center", justifyContent: "",
                margin: "20px 0px", justifyContent: "space-between"
            }} >
                <div style={{ display: "flex", gap: "10px" }}>
                    <div style={productNames === "Categories" ? backgroundColorTab : {}} onClick={tab("Categories")} className='tabBtn'>
                        Categories
                    </div>
                    <div style={productNames === "Brand" ? backgroundColorTab : {}} onClick={tab("Brand")} className='tabBtn' >
                        Brand
                    </div>
                    <div  >
                        <select style={{
                            backgroundColor: "#e6e6f6",
                            border: "none", outline: "none", boxSizing: "border-box", padding: "11px 20px", borderRadius: "5px"
                        }}>
                            <option>Filter</option>
                            <option>Instock</option>
                            <option>Out of Stock</option>
                        </select>
                    </div>
                </div>
                {/* <HeaderMain title="System" className="mb-4 mb-lg-5" /> */}
                <div style={{ position: "relative", display: "flex", gap: "10px", alignItems: "center", marginRight: "30px" }}>
                    <div>
                        <i style={{ position: "absolute", top: "30%", marginLeft: "9px", fontSize: "17px", color: "black" }} class="fa-solid fa-magnifying-glass"></i>
                        <input style={{
                            border: "none", outline: "none", width: "400px", borderRadius: "10px", height: "22px", boxSizing: "border-box",
                            padding: "20px  40px", fontSize: "20px", backgroundColor: "#e6e6f6"
                        }} type="text" />
                    </div>
                    {/* <div style={{ position: "relative" }} >
                        <i style={{ fontSize: "20px" }} class="fa-solid fa-eye"></i>
                        <span style={{
                            padding: "7px 14px ", backgroundColor: "red", position: "absolute", bottom: "50%",
                            left: "70%", borderRadius: "7px", color: "white"
                        }} >{0}</span>
                    </div> */}
                </div>



              


            </div>

            <div className='utilityClasses analyticsScreen'>

                <CCard>
                    <div className='productNames'>
                        <table>
                            <tr>
                                <th style={{ width: "240px" }}>
                                    {productNames}
                                </th>
                                <th style={{ width: "100px" }}>
                                    SKUs
                                </th>
                                <th style={{ width: "100px" }} >
                                    Market
                                </th>
                                <th style={{ width: "180px", textAlign: "center" }}>
                                    Walmart
                                </th>
                                <th style={{ width: "180px", textAlign: "center" }}>
                                    Amazon
                                </th>
                                <th style={{ width: "180px", textAlign: "center" }}>
                                    Alibaba
                                </th>
                            </tr>
                            {
                                productData.map(
                                    (item) => {
                                        return (
                                            <>
                                                <tr style={{}} >
                                                    <td onClick={check} style={{ height: "90px", fontWeight: "500", boxSizing:"border-box"  }} >
                                                     
                                                            {productNames === 'Categories' ? item.category : item.brand}
                                                           
                                                      
                                                        {
                                                            item.dorpDownList.map(
                                                                (values) => {
                                                                    return (
                                                                        <>
                                                                            <div className='dropDownList' style={{ color: "black", display: "none" 
                                                                        
                                                                        }}>
                                                                                <h3>{values.productName}</h3>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                }
                                                            )
                                                        }
                                                    </td>
                                                    <td>
                                                        {item.sku}
                                                    </td>
                                                    <td>
                                                        {item.market}
                                                    </td>
                                                    <td className='retailer' style={{ color: "white", height: "90px", paddingLeft: "50px" }} >
                                                        <div style={{ ...tablePriceTag, borderRadius: "50%", backgroundColor: `${item.retailer_1.range}`, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <div > {item.retailer_1.price}  </div>
                                                        </div>
                                                        {
                                                            item.dorpDownList.map(
                                                                (values) => {
                                                                    return (
                                                                        <>
                                                                            <div className='dropDownList' style={{ color: "black", display: "none" }}>
                                                                                {values.retailer1}
                                                                            </div>
                                                                        </>
                                                                    )
                                                                }
                                                            )
                                                        }
                                                    </td>
                                                    <td className='retailer' style={{
                                                        color: "white", paddingLeft: "55px", boxSizing: "border-box"

                                                    }} >
                                                        <div style={{ ...tablePriceTag, borderRadius: "50%", backgroundColor: `${item.retailer_1.range}`, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <div>  {item.retailer_2.price}</div>
                                                        </div>
                                                        {
                                                            item.dorpDownList.map(
                                                                (values) => {
                                                                    return (
                                                                        <>
                                                                            <div className='dropDownList' style={{ color: "black", display: "none" }}>
                                                                                {values.retailer2}
                                                                            </div>
                                                                        </>
                                                                    )
                                                                }
                                                            )
                                                        }
                                                    </td>
                                                    <td className='retailer' style={{ color: "white", paddingLeft: "50px", height: "90px", }} >
                                                        <div style={{ ...tablePriceTag, borderRadius: "50%", backgroundColor: `${item.retailer_1.range}`, position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <div style={{ left: "30%", top: "30%" }} >{item.retailer_3.price}</div>
                                                        </div>
                                                        {
                                                            item.dorpDownList.map(
                                                                (values) => {
                                                                    return (
                                                                        <>
                                                                            <div className='dropDownList' style={{ color: "black", display: "none" }}>
                                                                                {values.retailer3}
                                                                            </div>
                                                                        </>
                                                                    )
                                                                }
                                                            )
                                                        }
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    }
                                )
                            }

                        </table>
                    </div>
                </CCard>


            </div>
        </>
    )
}

MarketAnalytics.PropTypes = {
    name: PropTypes.string
}



export default MarketAnalytics