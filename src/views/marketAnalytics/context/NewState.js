import React , {useEffect, useState , } from 'react'
import { useLocation } from 'react-router-dom'
import NewContext from './NewContext'

function NewState(props) {
    const data = "IRtaza"
    const [info , setInfo] = useState(
      {
        MobilePhones : [
          {
            productName : "Apple",
            retailer1:"80$",
            retailer2 : "200$",
            retailer3:"150$"
          },
          {
            productName : "Samsung",
            retailer1:"300$",
            retailer2 : "130$",
            retailer3:"204$"
          },
          {
            productName : "Apple",
            retailer1:"44$",
            retailer2 : "290$",
            retailer3:"300$"
          },
          {
            productName : "Apple",
            retailer1:"320$",
            retailer2 : "130$",
            retailer3:"204$"
          },
        ],
        GameConsoles : [
          {
            productName:"PS5",
            retailer1:"220$",
            retailer2 : "406$",
            retailer3:"550$"
          },
          {
            productName:"Xbox",
            retailer1:"230$",
            retailer2 : "406$",
            retailer3:"550$"
          },
          {
            productName:"Steam Deck",
            retailer1:"400$",
            retailer2 : "200$",
            retailer3:"165$"
          },
        ],
        Clothing  :[
          {
            productName:"Shirts",
            retailer1:"90$",
            retailer2 : "50$",
            retailer3:"120$"
          },
          {
            productName:"Sweatshirts",
            retailer1:"50$",
            retailer2 : "70$",
            retailer3:"150$"
          },
          {
            productName:"Jeans",
            retailer1:"140$",
            retailer2 : "16$",
            retailer3:"200$"
          },
          {
            productName:"Shorts",
            retailer1:"50$",
            retailer2 : "30$",
            retailer3:"60$"
          },
          {
            productName:"Jackets & Coats",
            retailer1:"240$",
            retailer2 : "400$",
            retailer3:"340$"
          },
        ],
        shoes : [
          {
            productName:"Boots",
            retailer1:"140$",
            retailer2 : "120$",
            retailer3:"400$"
          },
          {
            productName:"Sneakers",
            retailer1:"240$",
            retailer2 : "320$",
            retailer3:"300$"
          },
          {
            productName:"Loafers & Slip-Ons",
            retailer1:"300$",
            retailer2 : "2450$",
            retailer3:"320$"
          },
          {
            productName:"Sandals",
            retailer1:"240$",
            retailer2 : "320$",
            retailer3:"325$"
          },
        ],
        electronics : [
          {
            productName:"Camera",
            retailer1:"140$",
            retailer2 : "120$",
            retailer3:"400$"
          },
          {
            productName:"laptop",
            retailer1:"400$",
            retailer2 : "500$",
            retailer3:"603$"
          },
          {
            productName:"Headphones",
            retailer1:"90$",
            retailer2 : "120$",
            retailer3:"100$"
          },
          {
            productName:"Television",
            retailer1:"190$",
            retailer2 : "240$",
            retailer3:"300$"
          },
          {
            productName:"Car",
            retailer1:"500$",
            retailer2 : "600$",
            retailer3:"300$"
          },
        ],
      }
    )
    const [priceTrendCloths , setPriceTrendCloths] = useState(
      {
        productName:"clothing",
        productData : [
          {
            date: "2024-04-01",
            price: 60.00,
            color : "#f70000 "
          },
          {
            date: "2024-04-02",
            price: 49.50,
            color : "#ff8700 "
          },
          {
            date: "2024-04-03",
            price: 38.75,
            color:"#00a1e9 "
          },
          {
            date: "2024-04-04",
            price: 70.90,
            color:"#009653 "
          },
        ],
        
      }
    ) 

    const [priceTrendMobilePhones , setPriceTrendMobilePhones] = useState(
      {
        productName:"Mobiles",
        productData : [
          {
            "date": "2024-04-05",
            price: 49.25,
            color:"#f70000 "
          },
          {
            "date": "2024-04-06",
            price: 70.00,
            color:"#009653  "
          },
          {
            "date": "2024-04-07",
            price: 60.20,
            color:"#ff8700 "
          },
          {
            "date": "2024-04-08",
            price: 35.80,
            color:"#00a1e9 "
          },
        ],
        
      }
    )

    const array = [
      {
        productName:"cloths",
        productData : [
          {
            "date": "2024-04-05",
            price: 49.25,
            color:"green"
          },
          {
            "date": "2024-04-06",
            price: 70.00,
            color:"red"
          },
          {
            "date": "2024-04-07",
            price: 60.20,
            color:"yellow"
          },
          {
            "date": "2024-04-08",
            price: 35.80,
            color:"green"
          },
        ]
      } ,
      

    ]


    const [productData_detail , setProductData_detail ] = useState()

  return (
   <>
   <NewContext.Provider value={{
    data , info , setInfo , priceTrendCloths ,priceTrendMobilePhones , array , productData_detail , setProductData_detail
   }}>
    {props.children}
   </NewContext.Provider>
   </>
  )
}

export default NewState;