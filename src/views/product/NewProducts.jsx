import React, { useEffect } from 'react'
import NewContext from '../marketAnalytics/context/NewContext';
import { useContext , useState } from 'react';
import Product from './Product';

function NewProducts() {
    const {productData_detail} = useContext(NewContext)
    const [productProperty , setProductProperty] = useState(
        [
            {
                property:"Brand",
                propertyValue : productData_detail.productDetail.productPoints.brand
            },
            {
                property:"Country",
                propertyValue : productData_detail.productDetail.productPoints["Country of Origin"]
            },
           
            
        ]
    )

    const [about , setAbout]  = useState(
        [
           "Computer mouse for easily navigating a computer interface; click, scroll, and more",
           "USB-A wired connection; if existing device only supports USB-C, an additional adapter will be required",
           "High-definition (1000 dpi) optical tracking ensures responsive cursor control for precise tracking and easy text selection",
           "3 buttons offer effortless fingertip contro",
           "Plug-and-go ready for instant use",

        ]
    )
    const [data , setData] = useState([])
    
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
    let [arr , setArr] = useState([])
    // let i = 1
    useEffect(
        ()=>{
            // console.log(productData_detail.productDetail.productPoints["Country of Origin"], "product data will be show at here")
            
            // console.log(productData_detail.Retailer_2[1] , "from new product")
        //    arr.push(productData_detail.Retailer_1[1] , productData_detail.Retailer_2[1] , productData_detail.Retailer_3[1])
        // setArr([])
        // //    console.log(productData_detail.graphData , "data")
        //    for (let i = 0; i < productData_detail.graphData.length; i++) {
        //     // console.log(Object.values(productData_detail.graphData[i]) , "only keys")
        //     arr.push(Object.values(productData_detail.graphData[i][1]))
        //     setArr(
        //         (prev)=>{
        //             return [...prev , Object.values(productData_detail.graphData[i][1])]
        //         }
        //     )
        //    }

           setData(productData_detail.graphData)
           

            // console.log("okay")
        } , []
    )
  return (
    <>
    <Product pieData={arr} price={productData_detail.productPrice}
                productImgUrl={productData_detail.imageUrl}
                productName={productData_detail.productName}  productProperty={productProperty} 
                about="About this item" aboutProperty={productData_detail.productDetail.About} data={data} 
                points={productData_detail.productDetail.productPoints}
                />
    </>
  )
}

export default NewProducts;