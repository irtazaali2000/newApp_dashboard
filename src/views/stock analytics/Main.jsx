import React, { useEffect, useState } from 'react'
import './Style.css'
import JsonContext from '../global context/JsonContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
function Main() {
    // setWatchListCountContext
    const data = useContext(JsonContext)
    let fetchData   = [] ;
    for (let i = 0; i < data.categoryData.length; i++) {
        fetchData.push(...data.categoryData[i].products)
         
     }
     console.log(fetchData , "products from categories")
    useEffect(
        ()=>{
            
           
        }
    )
    let [searchedData, setSearchedData] = useState(fetchData)
    // data.products
    // console.log(data)

    let [selectRetailVal1, setSelectRetailVal1] = useState("Amazon")
    let [selectRetailVal2, setSelectRetailVal2] = useState("Shein")
    let [selectRetailVal3, setSelectRetailVal3] = useState("Alibaba")
    let [selectOneRetailler, setSelectOneRetailler] = useState([])
    let [ratePopUp, setRatePopUp] = useState({ display: "none" })
    let [watchListPopup, setWatchListPopup] = useState({ display: "none" })
    let [watchListCount, setWatchlistCount] = useState(0)
    let [searchVal, setSearchVal] = useState()
    let [filterPricesValue, setFilterPricesValue] = useState()
    function filterPrices(e) {
        setFilterPricesValue(e.target.value)
        let values = e.target.value
        console.log(e.target.value)

        let arr = []
        if (values != "all") {
            // my_price
            for (let i = 0; i < fetchData.length; i++) {
                if (fetchData[i].my_price < values) {
                    arr.push(fetchData[i])
                    
                }
            }
            setSearchedData(arr)
        }
        else {
            setSearchedData(fetchData)
        }

    }
    function searching(e) {


        let values = e.target.value
        // for (let i = 0; i < values.split(" ").length; i++) {
        //     values[0][0].toUpperCase() + 

        // }
        setSearchVal(values)

        console.log(values, "values is here")
        var arr = []

        if (values !== "") {

            for (let i = 0; i < fetchData.length; i++) {
                // values === fetchData[i].category
                let cut = fetchData[i].category.split("")
                if (fetchData[i].category.includes(values)  || fetchData[i].name.includes(values)  ) {
                    console.log(fetchData[i].category, "its eaual!!!")
                    arr.push(fetchData[i])
                console.log( "data is here")
                }


            }

            setSearchedData(arr)
            console.log(arr, "arr  is here")
        }
        else {
            setSearchedData(fetchData)
        }

        // data.products.filter(
        //     (item)=>{
        //         return item.category === values ? arr.push(item) : 
        //     }
        // )

    }


    let [popupDisplay, setPopupDisplay] = useState({ display: "none" })
    let [priceMatch, setPriceMatch] = useState()
    let [netMatch, setNetMatch] = useState()
    let [off, setOff] = useState()
    let [discountVal, setDiscountVal] = useState()
    function watchListPopupFunc() {

    }
    function pricePopup(data) {
        return () => {
            popupDisplay.display === 'none' ? setPopupDisplay({ display: "flex" }) : setPopupDisplay({ display: "none" })
            ratePopUp.display === "none" ? setRatePopUp({ display: "flex" }) : setRatePopUp({ display: "none" })
            console.log(data)
            setPriceMatch(data.price_match)
            setNetMatch(data.net_match)
            data.discount !== false ? setOff(`Get an extra ${data.discount}% off this product`) : setOff("")
            data.discount !== false ? setDiscountVal((data.price * data.discount) / 100) : setDiscountVal("")
        }
    }
    // lineGraphData
    // setlineGraphData
    // let count = new Number()
    let [count, setCount] = useState(0)
    function productDetail(clickData) {
        return (e) => {

            data.setProductDetail(productDetail = clickData)
            // setlineGraphData(clickData.retailer)
            data.setlineGraphData(clickData.retailer)

            for (let i = 0; i < fetchData.length; i++) { 

                for (let j = 0; j < fetchData[i].retailer.length; j++) {
                    if (fetchData[i].retailer[j].name === "Amazon") {
                        console.log(fetchData[i].retailer[j].price, "this is all prices for amazon , main page")
                        // count += fetchData[i].retailer[j].price
                        setCount(count += fetchData[i].retailer[j].price)
                    }

                }


                // console.log(data.products  , "this is from main page for produdtss all")

            }
            // console.log(count, "this is sum of all amazon product prices")

        }
    }

    let [eyeIcon, setEyeIcon] = useState("fa-regular fa-eye")
    function addWatchList(e) {
        if (e.target.className === "fa-regular fa-eye") {
            e.target.className = "fa-solid fa-eye"
            setWatchlistCount((prev) => {
                return prev + 1
            })
            data.setWatchListCountContext(
                (prev) => {
                    return prev + 1
                })
            // data.watchListCountContext +watchListCount )
        }
        else {
            e.target.className = "fa-regular fa-eye"
            setWatchlistCount((prev) => {
                return prev - 1
            })
            data.setWatchListCountContext(
                (prev) => {
                    return prev - 1
                })


        }



        popupDisplay.display === 'none' ? setPopupDisplay({ display: "flex" }) : setPopupDisplay({ display: "none" })
        watchListPopup.display === "none" ? setWatchListPopup({ display: "flex" }) : setWatchListPopup({ display: "none" })
        console.log(e.target.className)
    }
    let [displayPricingPopup, setDisplayPricingPopup] = useState({
        display: "none"
    })
    let [array, setArray] = useState([])
    let [retailerName, setRetailerName] = useState([])
    let [caption, setCaption] = useState()
    return (
        <>
            <div className='popUpForPricingStatusBody' style={displayPricingPopup}>
                <div className='popUpForPricingStatusChild'>
                    <i onClick={() => { setDisplayPricingPopup({ display: "none" }) }} class="fa-solid fa-circle-xmark crossIcon"></i>
                    <h2>{caption}</h2>
                    <table className='priceLowHigh'>
                        <tr>
                            <th>Retailer</th>
                            <th>Price</th>
                        </tr>

                        {
                            array.map(
                                (val) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>
                                                    {val.name}
                                                </td>
                                                <td>
                                                    {val.price}
                                                </td>
                                            </tr>
                                        </>
                                    )
                                }
                            )
                        }



                    </table>
                </div>
            </div>
            <div style={popupDisplay} className='pricePopup'>
                <div className='popUp' style={ratePopUp}>
                    <div onClick={() => {
                        setPopupDisplay({ display: "none" })
                        setRatePopUp({ display: "none" })
                    }} className='crossIcon'> <i class="fa-solid fa-circle-xmark "></i></div>

                    <div className='price_net_value'>
                        <p>Price-match margin value {priceMatch}% </p>
                        <p>Net-match margin value {netMatch}%</p>
                    </div>
                    <div className='discountbox'>
                        <span>{off}</span> : <span>{discountVal}</span>
                    </div>
                </div>
                <div style={watchListPopup} className='watchListPopupDiv'>
                    <div onClick={() => {
                        setPopupDisplay({ display: "none" })
                        setWatchListPopup({ display: "none" })
                    }} className='crossIcon'> <i class="fa-solid fa-circle-xmark "></i></div>

                    <h4> {watchListCount} Product are added to watch list successfully</h4>
                    <h5><i class="fa-solid fa-envelope gmailIcon"></i> You will be alerted with price and stock changes</h5>
                </div>
            </div>
            <div className='header'>
                <div className='searchBar'><i class="fa-solid fa-magnifying-glass searchBarIcon"></i>
                    <input type="text" value={searchVal} onChange={(e) => {
                        searching(e)
                    }} /> </div>
                <div className='selectFilterPrices'>
                    <select value={filterPricesValue} onChange={
                        (e) => {
                            filterPrices(e)
                        }
                    } name="" id="" >
                        <option value={"all"} >All</option>
                        <option value={55} >Less than 55</option>
                        <option value={100}>Less than 100</option>
                        <option value={160}>Less than 160</option>
                    </select>
                </div>
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
            </div>


            <div className='body' style={{ border: "", marginTop: "20px" }}>

                {
                    searchedData.map(

                        (item) => {
                            return (
                                <>
                                    <div className='productListing'>
                                        <div className='productNamePriceUrl'>
                                            <div style={{ display: "flex", gap: "20px" }} >
                                                <i onClick={
                                                    () => {
                                                        // heigher than me
                                                        displayPricingPopup.display === "none" ? setDisplayPricingPopup({ display: "flex" }) : setDisplayPricingPopup({ display: "none" })
                                                        setArray([])
                                                        let arrayKeys = Object.keys(item.retailers)
                                                        let arrayValues = Object.values(item.retailers)
                                                        console.log(arrayValues)
                                                        // for (let x = 0; x < arrayKeys.length.length; x++) {
                                                            
                                                        // }
                                                        for (let i = 0; i < arrayValues.length; i++) {
                                                            if (item.my_price < arrayValues[i].price) {
                                                                // item.retailer[i]
                                                                setCaption("Retailers price higher than me")

                                                                // console.log(item.retailer[i].name)
                                                                // // console.log(item.retailer[i].price)

                                                                setArray((prev) => {
                                                                    return [...prev, { name: arrayValues[i].name, price: arrayValues[i].price }]
                                                                })
                                                            }
                                                            else if (item.my_price === arrayValues[i].price) {
                                                                setCaption("Retailers price equal to me")
                                                                setArray((prev) => {
                                                                    return [...prev, { name: arrayValues[i].name, price: arrayValues[i].price }]
                                                                })
                                                            }
                                                            else {
                                                                setCaption("I am higher than all retailers")
                                                            }


                                                        }
                                                    }
                                                } style={{ fontSize: "25px", cursor: "pointer" }} class="fa-solid fa-caret-up"></i>
                                                <i
                                                    onClick={

                                                        () => {
                                                            // lower than me
                                                            let fetchProducts = []
                                                            console.log(Object.values(item.retailers.Alibaba))
                                                            for (let i = 0; i < data.categoryData.length; i++) {
                                                            console.log(data.categoryData[i].products)
                                                            fetchProducts.push(...data.categoryData[i].products)
                                                                
                                                                
                                                            }
                                                            console.log(fetchProducts , "final array")
                                                            setArray([])
                                                            displayPricingPopup.display === "none" ? setDisplayPricingPopup({ display: "flex" }) : setDisplayPricingPopup({ display: "none" })
                                                        let arrayValues = Object.values(item.retailers)

                                                            for (let i = 0; i < arrayValues.length; i++) {
                                                                // item.retailer
                                                                if (item.my_price > arrayValues[i].price) {
                                                                    setCaption("Retailers price lower than me")
                                                                    // console.log(arrayValues[i].name)
                                                                    // console.log(arrayValues[i].price)

                                                                    setArray((prev) => {
                                                                        return [...prev, { name: arrayValues[i].name, price: arrayValues[i].price }]
                                                                    })
                                                                }
                                                                else if (item.my_price === arrayValues[i].price) {
                                                                    setCaption("Retailers price equal to me")
                                                                    setArray((prev) => {
                                                                        return [...prev, { name: arrayValues[i].name, price: arrayValues[i].price }]
                                                                    })
                                                                }
                                                                else {
                                                                    setCaption("I am lower than all retailers")
                                                                }


                                                            }
                                                        }
                                                    } style={{ fontSize: "25px", cursor: "pointer" }} class="fa-solid fa-caret-down"></i>
                                            </div>
                                            <i onClick={addWatchList} className={eyeIcon} ></i>
                                            <Link to="/theme/product-detail"><div to="/productDetail" onClick={productDetail(item)} className='img'><img src={item.url} alt="" /></div></Link>
                                            <div className='productNamePrice'>
                                                <Link to="/theme/product-detail"  >  <div onClick={productDetail(item)}> <h5> {item.name} </h5></div></Link>
                                                <div> My Price : ${item.my_price} </div>
                                            </div>
                                        </div>

                                        <div className='priceTable_retaillers'>

                                            <div onClick={pricePopup(item.retailers[selectRetailVal1])} className='retaillerBox'>
                                                <div style={{ backgroundColor: `${item.retailers[selectRetailVal1].color}` }} className='stockColor' ></div>
                                                <div className='retaillerValue'>
                                                    <div className='retaillerPRice'>${item.retailers[selectRetailVal1].price}</div>
                                                    <div className='retaillerStock'>
                                                        {item.retailers[selectRetailVal1].stock}
                                                    </div>

                                                </div>

                                            </div>
                                            <div onClick={pricePopup(item.retailers[selectRetailVal2])} className='retaillerBox'>
                                                <div style={{ backgroundColor: `${item.retailers[selectRetailVal2].color}` }} className='stockColor' ></div>
                                                <div className='retaillerValue'>
                                                    <div className='retaillerPRice'>${item.retailers[selectRetailVal2].price}</div>
                                                    <div className='retaillerStock'>
                                                        {item.retailers[selectRetailVal2].stock}
                                                    </div>

                                                </div>
                                            </div>
                                            <div onClick={pricePopup(item.retailers[selectRetailVal3])} className='retaillerBox'>
                                                <div style={{ backgroundColor: `${item.retailers[selectRetailVal3].color}` }} className='stockColor' ></div>
                                                <div className='retaillerValue'>
                                                    <div className='retaillerPRice'>${item.retailers[selectRetailVal3].price}</div>
                                                    <div className='retaillerStock'>
                                                        {item.retailers[selectRetailVal3].stock}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div >
                                </>
                            )
                        }

                    )
                }


                {/* <div className='priceTable_retaillers'>

                    <div className='retaillerBox'></div>
                    <div className='retaillerBox'></div>
                    <div className='retaillerBox'></div>
                </div> */}
            </div >
        </>
    )
}

export default Main