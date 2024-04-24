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
    const data = [
        { name: 'Jan', Amazon: 4000, Walmart: 2400, Alibaba: 2400 },
        { name: 'Feb', Amazon: 3000, Walmart: 1398, Alibaba: 2210 },
        { name: 'March', Amazon: 2000, Walmart: 9800, Alibaba: 2290 },
        { name: 'April', Amazon: 2780, Walmart: 3908, Alibaba: 2000 },
        { name: 'May', Amazon: 1890, Walmart: 4800, Alibaba: 2181 },
        { name: 'June', Amazon: 2390, Walmart: 3800, Alibaba: 2500 },
        { name: 'July', Amazon: 3490, Walmart: 4300, Alibaba: 2100 },
        { name: 'August', Amazon: 3490, Walmart: 4300, Alibaba: 2100 },
        { name: 'Sep', Amazon: 3490, Walmart: 4300, Alibaba: 2100 },
        { name: 'oct', Amazon: 3490, Walmart: 4300, Alibaba: 2100 },
        { name: 'Nov', Amazon: 3490, Walmart: 4300, Alibaba: 2100 },
        { name: 'Dec', Amazon: 3490, Walmart: 4300, Alibaba: 2100 },
    ];

    useEffect(
        ()=>{
            console.log(productData_detail.productDetail.productPoints["Country of Origin"], "product data will be show at here")
            // console.log("okay")
        } , []
    )
  return (
    <>
    <Product 
                productImgUrl={productData_detail.imageUrl}
                productName={productData_detail.productName}  productProperty={productProperty} 
                about="About this item" aboutProperty={productData_detail.productDetail.About} data={data} 
                points={productData_detail.productDetail.productPoints}
                />
    </>
  )
}

export default NewProducts;