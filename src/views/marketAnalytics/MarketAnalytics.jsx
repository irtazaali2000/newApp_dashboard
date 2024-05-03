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
import JsonContext from '../global context/JsonContext'

const MarketAnalytics = () => {
    const data = useContext(NewContext)
    let jsonContextData = useContext(JsonContext)
    let masterArray = []
    let brandsName = [];
    let brandsProductQuantity = [];
    let count = {}
    let [brandNameList, setBrandNameList] = useState()
    let [brandsProductQuantityList, setBrandsProductQuantityList] = useState()

    useEffect(
        () => {
            // console.log(jsonContextData.categoryData , "from categories data")
            let z = 1
            // let j = 0
            for (let i = 0; i < jsonContextData.categoryData.length; i++) {
                // console.log("outter printing")
                for (let j = 0; j < jsonContextData.categoryData[i].products.length; j++) {
                    // console.log(jsonContextData.categoryData[i].products[j].Brand  ,   `${z}` ,  "from categories data" ) 
                    masterArray.push(jsonContextData.categoryData[i].products[j].Brand)
                }
                // z = z + 1

            }
            // console.log(masterArray, "array all brands")
            // console.log(masterArray.indexOf("B"))

            // uniqueCount = ["a", "b", "c", "d", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];
            count = {};
            masterArray.forEach(function (i) { count[i] = (count[i] || 0) + 1; });

            // console.log(masterArray , "masterArray") 
            // console.log(count  , "All brands with quantity");

            brandsName = Object.keys(count);
            brandsProductQuantity = Object.values(count);
            setBrandNameList(brandsName)

            console.log(brandsProductQuantity , "names all")
            // setBrandsProductQuantityList(brandsName)
            
        }, []
    )

    //  let   
    //    let  

    console.log(brandNameList, "names all")
    // console.log(brandsProductQuantityList , "here all list quantity")
    // console.log(brandsName  , "List of brands" )
    // console.log(brandsProductQuantity , "products")


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
            brand: "Adidas",
            value: "3",
            category: "Shoes"
        },
        {
            brand: "Apple",
            value: "2",
            category: "phones"
        },
        {
            brand: "Armani",
            value: "1",
            category: "Cloths"
        },
        {
            brand: "Bata",
            value: "1",
            category: "Cloths"
        },
        {
            brand: "Boss ",
            value: "4",
            category: "Cloths"
        },
        {
            brand: "Carolina Herrera",
            value: "1",
            category: "shoe"
        },
        {
            brand: "Fragrance World Store ",
            value: "1",
            category: "bags"
        },
        {
            brand: "Google Store",
            value: "1",
            category: "Phones"
        },
        {
            brand: "Motorola Moto G Stylus",
            value: "1",
            category: "Phones"
        },
        {
            brand: "Outfitters",
            value: "4",
            category: "Cloths"
        },
        {
            brand: "Samsung",
            value: "1",
            category: "Phones"
        },
        {
            brand: "Travelon ",
            value: "1",
            category: "bags"
        },
        {
            brand: "Wolverine",
            value: "1",
            category: "bags"
        },
    ])


    //     selectRetailVal1
    // selectRetailVal2
    // selectRetailVal3


    let [selectRetailVal1, setSelectRetailVal1] = useState("Amazon")
    let [selectRetailVal2, setSelectRetailVal2] = useState("Shein")
    let [selectRetailVal3, setSelectRetailVal3] = useState("Alibaba")

    let [popupOnOff, setPopupOnOff] = useState({ display: "none" })
    let [displayPopupInfo, setDisplayPopupInfo] = useState({
        retaillerName: "",
        stock: "",
        stockValue: "",
        stock_availability: "",
    })

    function onPopupDisplay(data, retailler) {
        return () => {
            // setDisplayPopupInfo(displayPopupInfo = {})
            // setDisplayPopupInfo(displayPopupInfo.stock = data.stockStatus)
            // setDisplayPopupInfo(displayPopupInfo.stockValue = data.stock_value)
            setDisplayPopupInfo({
                retaillerName: retailler,
                stock: data.stockStatus,
                stockValue: data.stock_value,
                stock_availability: data.stock_availability
            })
            //   console.log(retailler)

            if (popupOnOff.display === "none") {
                setPopupOnOff({ display: "flex" })
            }
            else {
                setPopupOnOff({ display: "none" })
            }
            // setPopupOnOff(popupOnOff.display === "none" ? popupOnOff.display === "flex" : popupOnOff.display === "none" )

        }
    }





    function dropDownMenuDisplay(e) {
        // console.log(e.target.parentElement.parentElement.children[1])

        if (e.target.parentElement.parentElement.children[1].style.display === "none") {
            e.target.parentElement.parentElement.children[1].style.display = "block"
        }
        else {
            e.target.parentElement.parentElement.children[1].style.display = "none"
        }
    }
    let [popupBody_product, setPopupBody_product] = useState({
        display: "none"
    })
    let [productsData, setProductsData] = useState([])
    function sendProductsData(dataItems, categoryName) {
        return () => {
            popupBody_product.display === "none" ? setPopupBody_product({ display: "flex" }) : setPopupBody_product({ display: "none" })
            console.log(dataItems.products, "from sedn products data")
            let arr = []
            for (let i = 0; i < dataItems.products.length; i++) {
                console.log(dataItems.products[i].category, "looping")
                console.log(categoryName)
                console.log(dataItems.products[i].category === categoryName ? "yes" : "no")

                // if(dataItems.products[i].category === categoryName)
                // {
                //     arr.push(dataItems.products[i])
                // console.log(arr)

                // }

            }
            setProductsData(dataItems.products)
            // console.log(arr)
        }
    }
    return (
        <>

            <div className='popup_body_product' style={popupBody_product}>
                <div style={{ position: "relative" }} className='marketTrendPopUp' >
                    <i onClick={() => { setPopupBody_product({ display: "none" }) }} class="fa-solid fa-circle-xmark crossIcon"></i>
                    <div className='popupProductTable'>
                        <div className='heading '>
                            <div className='productInfo'>
                                Product Detail
                            </div>
                            <div className='retailers'>
                                <div className="">{selectRetailVal1}</div>
                                <div className="">{selectRetailVal2}</div>
                                <div className="">{selectRetailVal3}</div>
                            </div>
                        </div>
                        {
                            productsData.map(
                                (item) => {
                                    return (
                                        <>
                                            <div className='productsRows'>
                                                <div className='productsRowsInnerdata'>
                                                    <div className='img'><img src={item.url} alt="" /></div>
                                                    <div className='name_price'>
                                                        <h6> {item.name}</h6>
                                                        <span>   <b>Price :</b> ${item.my_price}</span>

                                                    </div>
                                                </div>
                                                {/* selectRetailVal1 selectRetailVal2 selectRetailVal3 */}
                                                <div className='productsRowsInnerdata retailers prices'>
                                                    <div>$ {item.retailers[selectRetailVal1].price}
                                                        <div style={{ background: `${item.retailers[selectRetailVal1].color}` }} className='stockStatus' ></div>
                                                    </div>
                                                    <div>$ {item.retailers[selectRetailVal2].price}
                                                        <div style={{ background: `${item.retailers[selectRetailVal1].color}` }} className='stockStatus' ></div>
                                                    </div>
                                                    <div>$ {item.retailers[selectRetailVal3].price}
                                                        <div style={{ background: `${item.retailers[selectRetailVal1].color}` }} className='stockStatus' ></div>
                                                    </div>

                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>
            <div style={popupOnOff} className='popupBody'>
                <div className='popupBox'>

                    <div className='crossPopup' style={{
                        backgroundColor: "white", padding: "", border: "", borderRadius: "50%",
                        display: "flex"
                    }}><i onClick={() => { setPopupOnOff({ display: "none" }) }} class="fa-solid fa-circle-xmark "></i></div>
                    {/* <i class="fa-solid fa-circle-xmark"></i> */}
                    <table className='stockDetailTable'>
                        <tr>
                            <th>Retailer Name</th>
                            <th>Stock Status</th>
                            <th>Stock Value</th>
                            <th>Stock %</th>
                        </tr>
                        <tr>
                            <td >{displayPopupInfo.retaillerName}</td>
                            <td >{displayPopupInfo.stock}</td>
                            <td>{displayPopupInfo.stockValue}</td>
                            <td>{displayPopupInfo.stock_availability}</td>
                        </tr>
                    </table>

                </div>
            </div>
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
                        Brands

                    </div>
                    <div className='brandDropdownList' style={{
                        position: "absolute", width: "600px", height: "400px",
                        border: "", zIndex: "950", top: "22%", left: "33%", ...brandDropDownDisplay
                    }} >

                        <div className='brandDropdownListItem'>
                            {/* {brand} */}
                            <div>

                            </div>
                            <div style={{display:"flex"}}>
                                {/* <div style={{ color: "black", textAlign: "start" }}>
                                    {brandNameList.map(
                                        (val) => {
                                            return (
                                                <>
                                                    <div>{val}</div>
                                                </>
                                            )

                                        }
                                    )}
                                </div>
                                <div style={{ color: "black", textAlign: "start" }}>
                                    {brandNameList.map(
                                        (val) => {
                                            return (
                                                <>
                                                    <div>{val}</div>
                                                </>
                                            )

                                        }
                                    )}
                                </div> */}
                            </div>
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
                    {/* <div>
                        <i style={{ position: "absolute", top: "30%", marginLeft: "9px", fontSize: "17px", color: "black" }} class="fa-solid fa-magnifying-glass"></i>
                        <input style={{
                            border: "none", outline: "none", width: "400px", borderRadius: "10px", height: "22px", boxSizing: "border-box",
                            padding: "20px  40px", fontSize: "20px", backgroundColor: "#e6e6f6"
                        }} type="text" />
                    </div> */}

                    <div className='selectionRetailler'>
                        <select value={selectRetailVal1} onChange={(e) => { setSelectRetailVal1(e.target.value) }}>
                            <option >Noon</option>
                            <option >Amazon</option>
                            <option >Carrefour </option>
                        </select>
                        <select value={selectRetailVal2} onChange={(e) => (setSelectRetailVal2(e.target.value))}>
                            <option >Shein</option>
                            <option >Lulu Hypermarket</option>
                            <option >Walmart</option>
                        </select>
                        <select value={selectRetailVal3} onChange={(e) => (setSelectRetailVal3(e.target.value))}>
                            <option >Alibaba </option>
                            <option >Trendyol </option>
                            <option >Namshi</option>

                        </select>
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
                                <th style={{ width: "330px", border: "" }}>
                                    {productNames}
                                </th>
                                <th style={{ width: "170px", paddingLeft: "19px", boxSizing: "border-box" }}>
                                    SKUs
                                </th>
                                <th style={{ width: "100px", paddingLeft: "19px", boxSizing: "border-box" }} >
                                    Market
                                </th>
                                <th style={{ width: "13%", textAlign: "center", paddingLeft: "19px", boxSizing: "border-box", width: "130px" }}>
                                    {selectRetailVal1}
                                </th>
                                <th style={{ width: "13%", textAlign: "center", paddingLeft: "19px", boxSizing: "border-box", width: "130px" }}>
                                    {selectRetailVal2}
                                </th>
                                <th style={{ width: "13%", textAlign: "center", paddingLeft: "19px", boxSizing: "border-box", width: "130px" }}>
                                    {selectRetailVal3}
                                </th>
                            </tr>
                        </table>
                        <table className='droperTable' style={{ border: "", width: "100%" }}>
                            {
                                jsonContextData.categoryData.map(
                                    (item) => {
                                        return (
                                            <>
                                                <div style={{ width: "100%" }} className='table_rowsDiv' >
                                                    <tr style={{}} >
                                                        {/* onClick={check(item.dorpDownList)} */}
                                                        <td onClick={sendProductsData(item, item.name)} className='thWidthClass1' ref={refer} style={{ height: "100%", fontWeight: "500", boxSizing: "border-box", paddingTop: "", width: "330px", border: "" }}  >
                                                            {item.name}
                                                        </td>
                                                        <td className='thWidthClass' style={{ width: "170px" }}>
                                                            {item.SKUs}
                                                        </td>
                                                        <td className='thWidthClass' style={{ width: "100px" }}>
                                                            {item.Market}
                                                        </td>
                                                        <td className='retailer thWidthClass' style={{
                                                            color: "black", paddingLeft: "30px", width: "130px",
                                                            position: "relative"
                                                        }} onClick={onPopupDisplay(item[selectRetailVal1], selectRetailVal1)} >
                                                            {/* <div className='hoverSmallTooltip'></div> */}
                                                            <div className='stockValuesBox' style={{ border: `1px solid ${item[selectRetailVal1].color}` }}>
                                                                <div className='stockValue'>
                                                                    {item[selectRetailVal1].stockStatus}
                                                                </div>
                                                                <div className='stockPercentage'>
                                                                    <div style={{ width: `${item[selectRetailVal1].stock_availability}`, backgroundColor: ` ${item[selectRetailVal1].color}` }}>
                                                                        {item[selectRetailVal1].stock_availability}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className='retailer thWidthClass' style={{
                                                            color: "black", paddingLeft: "30px", boxSizing: "border-box",
                                                            width: "130px"
                                                        }} onClick={onPopupDisplay(item[selectRetailVal2], selectRetailVal2)}>
                                                            <div className='stockValuesBox' style={{ border: `1px solid ${item[selectRetailVal2].color}` }}>
                                                                <div className='stockValue'>
                                                                    {item[selectRetailVal2].stockStatus}
                                                                </div>
                                                                <div className='stockPercentage'>
                                                                    <div style={{ width: `${item[selectRetailVal2].stock_availability}`, backgroundColor: ` ${item[selectRetailVal2].color}` }}>
                                                                        {item[selectRetailVal2].stock_availability}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </td>
                                                        <td className='retailer thWidthClass' style={{ color: "black", paddingLeft: "30px", width: "130px" }}
                                                            onClick={onPopupDisplay(item[selectRetailVal3], selectRetailVal3)}
                                                        >
                                                            <div className='stockValuesBox' style={{ border: `1px solid ${item[selectRetailVal3].color}` }}>
                                                                <div className='stockValue'>
                                                                    {item[selectRetailVal3].stockStatus}
                                                                </div>
                                                                <div className='stockPercentage'>
                                                                    <div style={{ width: `${item[selectRetailVal3].stock_availability}`, backgroundColor: ` ${item[selectRetailVal3].color}` }}>
                                                                        {item[selectRetailVal3].stock_availability}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <div style={{ display: "none" }} className='dropDownMenuForCategory'>
                                                        <tr>
                                                            <th style={{ width: "330px" }}>Products Names</th>
                                                            <th style={{ width: "170px" }}>ID</th>
                                                            <th style={{ width: "100px" }}>Market</th>
                                                            <th style={{ width: "130px" }}>Prices</th>
                                                            <th style={{ width: "130px" }}>Prices</th>
                                                            <th style={{ width: "130px" }}>Prices</th>

                                                        </tr>
                                                    </div>
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