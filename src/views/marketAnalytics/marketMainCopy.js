import React, { useState, useEffect, useRef } from 'react'
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
    useEffect(
        ()=>{
            console.log(data.categoryData , "this is category data")
        } , []
    )
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
                category: "Perfume",
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
                dorpDownList: data.info.perfume
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

            ,
            {
                sku: "005",
                category: "Shoes",
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
                category: "Bags",
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
                dorpDownList: data.info.bags
            },
            {
                sku: "007",
                category: "Caps & Hats",
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
                dorpDownList: data.info.caps
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
    let refer = useRef(null)
    // useEffect(
    //     ()=>{

    //     } , [dropDownListing]
    // )
    const [dropDownListing, setDropDownListing] = useState([])

    const [displayListing, setDisplayListing] = useState({ display: "none" })
    function check(dataDropDownListing) {


        return (e) => {
            let element = e.target.parentElement.parentElement.children[1]
            setDropDownListing([])
            if (element.style.display === "none") {
                element.style.display = "block"
                console.log(dataDropDownListing)
                setDropDownListing(dataDropDownListing)
            }
            else {
                element.style.display = "none"
                // setDisplayListing({ display: "none" })
            }
            console.log(e.target.parentElement.parentElement.children[1].style.display)
            // if()
            // let element = e.target.parentElement.children
            // let first = element[0].children
            // for (let i = 0; i < element.length; i++) {
            //     // console.log(element[i].children , 'colums')
            //     for (let j = 0; j < element[i].children.length; j++) {
            //         console.log(element[i].children[j].className, 'data')
            //         if (element[i].children[j].className === "dropDownList") {
            //             console.log('class name okay')
            //             if (element[i].children[j].style.display === 'none') {
            //                 element[i].children[j].style.display = 'block'
            //             }
            //             else {
            //                 element[i].children[j].style.display = 'none'
            //             }
            //         }

            //     }



            // }
        }
        // console.log('okay td onclick is working')
        // console.log(e.target.parentElement.children)

        // this is row
        // console.log(element[0].children)
        // console.log(element[0].children.length)
        // console.log(element[0].children.length)

        // console.log(e)

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

    const [brandDropDownDisplay, setBrandDropDownDisplay] = useState({
        display: "none"
    })
    const [brand, setBrand] = useState([
        {
            brand: "Huawei",
            value: "3",
            category : "phones"
        },
        {
            brand: "Samsung ",
            value: "3",
            category : "phones"
        },
        {
            brand: "Apple",
            value: "1",
            category : "phones"
        },
        {
            brand: "AuraLuxe",
            value: "2",
            category : "perfume"
        },
        {
            brand: "EtherealElegance ",
            value: "1",
            category : "clothing"
        },
        {
            brand: "UrbanStride",
            value: "2",
            category : "shoe"
        },
        {
            brand: "MaverickCarry ",
            value: "2",
            category : "bags"
        },
        {
            brand: "PeakPride ",
            value: "1",
            category : "bags"
        },
        {
            brand: "UrbanChic",
            value: "1",
            category : "clothing"
        },
        {
            brand: "SwiftStep",
            value: "1",
            category : "shoe"
        },
        {
            brand: "ScentSymphony",
            value: "3",
            category : "perfume"
        },
        {
            brand: "UrbanTrek ",
            value: "2",
            category : "bags"
        },
        {
            brand: "UrbanTrek ",
            value: "2",
            category : "bags"
        },
        {
            brand: "LuxeThreads",
            value: "3",
            category : "clothing"
        },
        {
            brand: "OpulentScents",
            value: "1",
            category : "perfume"
        },
    ])
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
                    <div style={{
                        ...productNames === "Brand" ? backgroundColorTab : {},
                        position: "relative"
                    }} onClick={() => {
                        if (brandDropDownDisplay.display === "none") {
                            setBrandDropDownDisplay({ display: "block" })
                        }
                        else {
                            setBrandDropDownDisplay({ display: "none" })
                        }
                    }} className='tabBtn' >
                        Brand

                    </div>
                    <div className='brandDropdownList' style={{
                        position: "absolute", width: "600px", height: "400px",
                        border: "", zIndex: "950", top: "22%", left: "33%", ...brandDropDownDisplay
                    }} >

                        <div className='brandDropdownListItem'>
                            <table>
                                <tr>
                                    <th>S.No</th>
                                    <th>Brand</th>
                                    <th> Category</th>
                                    <th> Product Availibility</th>
                                </tr>
                                {
                                    brand.map(
                                        (item  ,index) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{item.brand}</td>
                                                        <td>{item.category}</td>
                                                        <td>{item.value}</td>
                                                    </tr>
                                                </>
                                            )
                                        }
                                    )
                                }
                            </table>
                        </div>
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
                        <table style={{ width: "100%" }}>
                            <tr style={{ width: "100%" }}>
                                <th style={{ width: "440px" }}>
                                    {productNames}
                                </th>
                                <th style={{ width: "130px", paddingLeft: "19px", boxSizing: "border-box" }}>
                                    SKUs
                                </th>
                                <th style={{ width: "130px", paddingLeft: "19px", boxSizing: "border-box" }} >
                                    Market
                                </th>
                                <th style={{ width: "140px", textAlign: "center", paddingLeft: "19px", boxSizing: "border-box" }}>
                                    Walmart
                                </th>
                                <th style={{ width: "140px", textAlign: "center", paddingLeft: "19px", boxSizing: "border-box" }}>
                                    Amazon
                                </th>
                                <th style={{ width: "140px", textAlign: "center", paddingLeft: "19px", boxSizing: "border-box" }}>
                                    Alibaba
                                </th>
                            </tr>
                        </table>
                        <table className='droperTable' style={{ border: "", width: "100%" }}>
                            {
                                data.categoryData.map(
                                    (item) => {
                                        return (
                                            <>
                                                <div>
                                                    <tr style={{}} >
                                                        <th className='thWidthClass1' onClick={check(item.dorpDownList)} ref={refer} style={{ height: "90px", fontWeight: "500", boxSizing: "border-box", paddingTop: "40px", width: "" }} >


                                                            {/* {productNames === 'Categories' ? item.category : item.brand} */}
                                                            {item.name}



                                                            {/* {
                                                            item.dorpDownList.map(
                                                                (values) => {
                                                                    return (
                                                                        <>
                                                                            <div className='dropDownList' style={{
                                                                                color: "black", display: "none",

                                                                            }}>
                                                                                <h3>{values.productName}</h3>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                }
                                                            )
                                                        } */}
                                                        </th>
                                                        <th className='thWidthClass'>
                                                            {item.SKUs}
                                                        </th>
                                                        <th className='thWidthClass'>
                                                            {item.Market}
                                                        </th>
                                                        <th className='retailer thWidthClass' style={{ color: "white", height: "90px", paddingLeft: "30px" }} >
                                                            {/* <div style={{
                                                                ...tablePriceTag, borderRadius: "", backgroundColor: `${item.retailer_1.range}`, display: "flex", justifyContent: "center", alignItems: "center",
                                                                paddingLeft: "10px", width: "90px", height: "40px"
                                                            }}>
                                                                <div > {item.retailer_1.price}  </div>
                                                            </div> */}
                                                            {/* {
                                                            item.dorpDownList.map(
                                                                (values) => {
                                                                    return (
                                                                        <>
                                                                            <div className='dropDownList' style={{ display: "none", }}>
                                                                                {values.retailer1}
                                                                            </div>
                                                                        </>
                                                                    )
                                                                }
                                                            )
                                                        } */}
                                                        </th>
                                                        <th className='retailer thWidthClass' style={{
                                                            color: "white", paddingLeft: "30px", boxSizing: "border-box"

                                                        }} >
                                                            {/* <div style={{
                                                                ...tablePriceTag, borderRadius: "", backgroundColor: `${item.retailer_1.range}`, display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "10px", width: "90px", height: "40px"

                                                            }}>
                                                                <div>  {item.retailer_2.price}</div>
                                                            </div> */}
                                                            {
                                                                item.dorpDownList.map(
                                                                    (values) => {
                                                                        return (
                                                                            <>
                                                                                <div className='dropDownList' style={{ display: "none" }}>
                                                                                    {values.retailer2}
                                                                                </div>
                                                                            </>
                                                                        )
                                                                    }
                                                                )
                                                            }
                                                        </th>
                                                        <th className='retailer thWidthClass' style={{ color: "white", paddingLeft: "30px", height: "90px", }} >
                                                            {/* <div style={{ ...tablePriceTag, borderRadius: "", backgroundColor: `${item.retailer_1.range}`, position: "relative", display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "10px", width: "90px", height: "40px" }}>
                                                                <div style={{ left: "30%", top: "30%" }} >{item.retailer_3.price}
                                                                </div>
                                                            </div> */}
                                                            {/* {
                                                                item.dorpDownList.map(
                                                                    (values) => {
                                                                        return (
                                                                            <>
                                                                                <div className='dropDownList' style={{ display: "none" }}>
                                                                                    {values.retailer3}
                                                                                </div>
                                                                            </>
                                                                        )
                                                                    }
                                                                )
                                                            } */}
                                                        </th>
                                                    </tr>
                                                    {/* <div className='listingDiv' style={displayListing}>
                                                        {
                                                           
                                                            dropDownListing.map(
                                                                (item) => {
                                                                    return (
                                                                        <>
                                                                            <tr style={{
                                                                                width: "100%", border: ""
                                                                            }}>
                                                                                <td style={{ width: "40%" }}>{item.productName}</td>
                                                                                <td style={{ width: "15%", }} >{"num"}</td>
                                                                                <td style={{ width: "15%", }} >market</td>
                                                                                <td style={{ width: "15%", textAlign: "" }}>{item.retailer1}</td>
                                                                                <td style={{ width: "15%", textAlign: "" }}>{item.retailer2}</td>
                                                                                <td style={{ width: "15%", textAlign: "" }}>{item.retailer3}</td>
                                                                            </tr>
                                                                        </>
                                                                    )
                                                                }
                                                            )
                                                        }
                                                    </div> */}
                                                </div>
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