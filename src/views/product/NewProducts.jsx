import React, { useEffect } from 'react'
import NewContext from '../marketAnalytics/context/NewContext';
import { useContext, useState } from 'react';
import Product from './Product';
import JsonContext from '../global context/JsonContext';
function NewProducts() {

    let jsonContextData = useContext(JsonContext)
    console.log(jsonContextData.productDetail , "product page")
    const { productData_detail } = useContext(NewContext)
    // const allContextData = useContext(NewContext)
    // const [productProperty, setProductProperty] = useState(
    //     [
    //         {
    //             property: "Brand",
    //             propertyValue: productData_detail.productDetail.productPoints.brand
    //         },
    //         {
    //             property: "Country",
    //             propertyValue: productData_detail.productDetail.productPoints["Country of Origin"]
    //         },


    //     ]
    // )

    // const [about, setAbout] = useState(
    //     [
    //         "Computer mouse for easily navigating a computer interface; click, scroll, and more",
    //         "USB-A wired connection; if existing device only supports USB-C, an additional adapter will be required",
    //         "High-definition (1000 dpi) optical tracking ensures responsive cursor control for precise tracking and easy text selection",
    //         "3 buttons offer effortless fingertip contro",
    //         "Plug-and-go ready for instant use",
    //     ]
    // )
    const [data, setData] = useState([])

    // [
    //     // { name: 'Jan', Noon : 4000,  Carrefour : 2400, Shein : 2400 },
    //     // { name: 'Feb', Noon: 3000, Carrefour: 12398, Shein: 210 },
    //     // { name: 'March', Noon: 2000, Carrefour: 9800, Shein: 2290 },
    //     // { name: 'April', Noon: 2780, Carrefour: 3908, Shein: 2000 },
    //     // { name: 'May', Noon: 1890, Carrefour: 4800, Shein: 2181 },
    //     // { name: 'June', Noon: 2390, Carrefour: 3800, Shein: 2500 },
    //     // { name: 'July', Noon: 3490, Carrefour: 4300, Shein: 2100 },
    //     // { name: 'August', Noon: 3490, Carrefour: 4300, Shein: 2100 },
    //     // { name: 'Sep', Noon: 3490, Carrefour: 4300, Shein: 2100 },
    //     // { name: 'oct', Noon: 3490, Carrefour: 4300, Shein: 2100 },
    //     // { name: 'Nov', Noon: 3490, Carrefour: 4300, Shein: 2100 },
    //     // { name: 'Dec', Noon: 3490, Carrefour: 4300, Shein: 2100 },
    // ];
    // let [arr, setArr] = useState([])
    // let [dataArr, setDataArr] = useState([])
    // let [priceData, setPriceData] = useState([])
    // // let i = 1
    // let [ourPrice, setOurPrice] = useState()
    // let [priceCompareHiger, setPriceCompareHiger] = useState()
    // let [priceCompareLower, setPriceCompareLower] = useState([])
    // let [ourPRICES, setOurPRICES] = useState(Number(productData_detail.productPrice.slice(1)))
    // useEffect(
    //     () => {
    //         // console.log(productData_detail.productDetail.productPoints["Country of Origin"], "product data will be show at here")

    //         // console.log(productData_detail.Retailer_2[1] , "from new product")
    //         //    arr.push(productData_detail.Retailer_1[1] , productData_detail.Retailer_2[1] , productData_detail.Retailer_3[1])
    //         // setArr([])
    //         // //    console.log(productData_detail.graphData , "data")
    //         //    for (let i = 0; i < productData_detail.graphData.length; i++) {
    //         //     // console.log(Object.values(productData_detail.graphData[i]) , "only keys")
    //         //     arr.push(Object.values(productData_detail.graphData[i][1]))
    //         //     setArr(
    //         //         (prev)=>{
    //         //             return [...prev , Object.values(productData_detail.graphData[i][1])]
    //         //         }
    //         //     )
    //         //    }

    //         setData(productData_detail.graphData)
    //         //    console.log(productDsata_detail.graphData)
    //         //    setArr([])
    //         for (let i = 0; i < productData_detail.graphData.length; i++) {
    //             setDataArr(
    //                 dataArr.push(productData_detail.graphData[i].name)
    //             )
    //         }


    //         for (let j = 0; j < productData_detail.graphData.length; j++) {


    //             if (Number(productData_detail.productPrice.slice(1)) < productData_detail.graphData[j].price) {
    //                 // setPriceCompareLower(priceCompareLower.push(productData_detail.graphData[j].price))
    //                 // setPriceCompareLower()
    //                 // console.log(productData_detail.graphData[j].price, "lower")
    //                 // console.log('cheaper' , productData_detail.graphData[j].price)
    //                 // console.log(priceCompareLower,"array low")
    //             }
    //             else {
    //                 // console.log(productData_detail.graphData[j].price, "higher")
    //                 // setPriceCompareHiger(priceCompareHiger.push(productData_detail.graphData[j].price))
    //                 // setPriceCompareHiger(
    //                 //     ()=>{
    //                 //         return [...productData_detail.graphData[j].price ]
    //                 //     }
    //                 // )
    //                 // console.log('higher' , productData_detail.graphData[j].price)
    //                 // console.log(priceCompareHiger , "array high")
    //             }

    //             setPriceData(
    //                 priceData.push(productData_detail.graphData[j].price)
    //             )
    //             // console.log("check ptrice type" ,typeof productData_detail.graphData[j].price )
    //         }
    //         // console.log() , "all context data")
    //         // allContextData.setPricesDATA(productData_detail.graphData)
    //         //    for (let i = 0; i < array.length; i++) {
    //         //    }
    //         //    console.log(priceData , "here is an array") 

    //         // setOurPrice(productData_detail.productPrice)
    //         // console.log("okay")



    //         // console.log(allContextData.ourPrices , "oru price froim context api")
    //     }, []
    // )
    return (
        <>
            {/* priceCompareHiger */}
            {/* priceCompareLower */}
            <Product
            //  priceHigh={priceCompareHiger} priceLow={priceCompareLower} ourProductPrice={jsonContextData.productDetail.my_price} pricesPieChart={priceData} arr={dataArr} pieData={arr} price={jsonContextData.productDetail.my_price}
            lineGraph={jsonContextData.lineGraphData}
                productImgUrl={jsonContextData.productDetail.url} price={jsonContextData.productDetail.
                    my_price}
                productName={jsonContextData.productDetail.name} productProperty={{}}
                about="About this item" aboutProperty={jsonContextData.productDetail.about} data={data}
                brandName={jsonContextData.productDetail.Brand}
                // points={productData_detail.productDetail.productPoints}
            />
        </>
// lineGraphData
    )
}

export default NewProducts;