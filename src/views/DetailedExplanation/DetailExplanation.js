import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import { number } from 'prop-types';
import NewContext from '../marketAnalytics/context/NewContext';
import { useContext } from 'react';

// import { Button } from '@coreui/coreui';
function DetailExplanation() {
    const productData = useContext(NewContext)
    let [propductDetailBox, setpropductDetailBox] = useState({
        width: "170px",
        height: "100px",
        backgroundColor: "white",
        display: "flex",
        borderRadius: "10px",
        overFlow: "hidden",
        border: "1px solid #eff3f5"
    })


    const [eyeDarkLight, setEyeDarkLight] = useState("fa-regular fa-eye")
    let eyeRefer = useRef(null)



    const [dataLopping, setDataLooping] = useState(
        [
            {
                imageUrl: productData.info.MobilePhones[0].imgUrl,
                productName: productData.info.MobilePhones[0].productName,
                productPrice: "$42.00",
                eyeBtnColor: eyeDarkLight,
                productId: ["mobilePhones", "phones", "mobile", "phone"],
                productUrl: "/theme/product1",
                Retailer_1: ["red",
                    {
                        Noon: "$41.00",
                        Carrefour: "$50.00",
                        Shein: "$51.00",

                    }
                    , 'Out of stock'],
                Retailer_2: ["green", {
                    Namshi: "$39.00",
                    Trendyol: "$43.00",
                    Styli: "$47.00",
                    Adidas: "$50.00",
                }, 'Instock'],
                Retailer_3: ["orange", {
                    "Lulu Hyper Market": "$65.00",
                    Centrepoint: "$54.00",
                    Max: "$56.00",
                }, 'Instock'],
                Retailer1_price_data: {
                    price_margin: "20%",
                    net_margin: "14%",
                    discount: 10
                },
                Retailer2_price_data: {
                    price_margin: "11%",
                    net_margin: "-",
                    discount: 20
                },
                Retailer3_price_data: {
                    price_margin: "50%",
                    net_margin: "16%",
                    discount: "No discount available"
                },
                productDetail: {
                    productPoints: {
                        name: "Legendary Whitetails Journeyman",
                        brand: "Apple",
                        "Country of Origin": "USA",

                    },
                    About: [
                        "6.1'' Super Retina XDR display with ProMotion. 5G Superfast downloads, high-quality streaming",
                        "Cinematic mode in 1080p at 30 fps. Dolby Vision HDR video recording up to 4K at 60 fps. 6X Optical zoom range",
                        "A15 Bionic chip. New 6-core CPU with 2 performance and 4 efficiency cores. New 5-core GPU. New 16-core Neural Engine"
                    ]
                },
                graphData: [
                    { name: "Noon", price: 41 },
                    { name: "Carrefour", price: 50 },
                    { name: "Namshi", price: 39 },
                    { name: "Lulu Hyper Market", price: 65 },
                ]
            },
            {
                imageUrl: productData.info.perfume[0].imgUrl,
                productName: productData.info.perfume[0].productName,
                productPrice: "$25.000",
                productUrl: "/theme/product2",
                eyeBtnColor: eyeDarkLight,
                productId: ["perfume", "men perfumes", "perfumes"],
                Retailer_1: ["green", {
                    Noon: "$61.00",
                    Carrefour: "$30.00",
                    Shein: "$31.00",
                }, 'Instock'],
                Retailer_2: ["red", {
                    Namshi: "$49.00",
                    Trendyol: "$34.00",
                    Styli: "$55.00",
                    Adidas: "$44.00",
                }, 'Out of Stock'],
                Retailer_3: ["orange", {
                    "Lulu Hyper Market": "$44.00",
                    Centrepoint: "$65.00",
                    Max: "$77.00",
                }, 'Instock'],
                Retailer1_price_data: {
                    price_margin: "18%",
                    net_margin: "15%",
                    discount: 14
                },
                Retailer2_price_data: {
                    price_margin: "6%",
                    net_margin: "22%",
                    discount: "No discount available"
                },
                Retailer3_price_data: {
                    price_margin: "9%",
                    net_margin: "14%",
                    discount: 18
                },
                productDetail: {
                    productPoints: {
                        name: "Pullover Hoodie",
                        brand: "men cloths",
                        "Country of Origin": "USA",

                    },
                    About: [
                        "Our Tampa Bay Buccaneers Adult Pullover Hooded Sweatshirt for Men and Women is our signature midweight pullover fleece hoodie featuring a printed graphic...",
                        "Fire The Cannons! This Buccaneers Hoodie will stand out for casual wear, tailgates and gamedays. The Junk Food Clothing x NFL Collection brings a hint of that vintage vibe that runs deep through NFL franchises. ",
                        "This Buccaneers Hoodie features a big, full-color print that gives it a super soft hand feel and will last for years to come."
                    ]
                },
                graphData: [
                    { name: "Noon", price: 61 },
                    { name: "Carrefour", price: 61 },
                    { name: "Namshi", price: 49 },
                    { name: "Lulu Hyper Market", price: 44 },
                ]
            },
            {
                imageUrl: productData.info.Clothing[0].imgUrl,
                productName: productData.info.Clothing[0].productName,
                productPrice: "$106.000",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["men clothing", "clothings", "clothing", 'cloths', 'cloth', 'men cloths'],
                Retailer_1: ["green", {
                    Noon: "$48.00",
                    Carrefour: "$54.00",
                    Shein: "$56.00",

                }, 'Instock'],
                Retailer_2: ["green", {
                    Namshi: "$39.00",
                    Trendyol: "$66.00",
                    Styli: "$57.00",
                    Adidas: "$77.00",
                }, 'Instock'],
                Retailer_3: ["red", {
                    "Lulu Hyper Market": "$70.00",
                    Centrepoint: "$90.00",
                    Max: "$120.00",
                }, 'Out of Stock'],
                Retailer1_price_data: {
                    price_margin: "12%",
                    net_margin: "14%",
                    discount: 18
                },
                Retailer2_price_data: {
                    price_margin: "30%",
                    net_margin: "19%",
                    discount: "No discount available"
                },
                Retailer3_price_data: {
                    price_margin: "25%",
                    net_margin: "10%",
                    discount: 7
                },
                productDetail: {
                    productPoints: {
                        name: "Apple Watch Ultra 2",
                        brand: "Apple",
                        "Country of Origin": "UK",
                    },
                    About: productData.info.Clothing[0].about
                },
                graphData: [
                    { name: "Noon", price: 48 },
                    { name: "Carrefour", price: 54 },
                    { name: "Namshi", price: 39 },
                    { name: "Lulu Hyper Market", price: 70 },
                ]
            },
            {
                imageUrl: productData.info.shoes[0].imgUrl,
                productName: productData.info.shoes[0].productName,
                productPrice: "$106.000",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["shoes", "shoe"],
                Retailer_1: ["red", {
                    Noon: "$40.00",
                    Carrefour: "$87.00",
                    Shein: "$47.00",

                }, 'Out of Stock'],
                Retailer_2: ["green", {
                    Namshi: "$76.00",
                    Trendyol: "$70.00",
                    Styli: "$60.00",
                    Adidas: "$50.00",
                }, 'Instock'],
                Retailer_3: ["red", {
                    "Lulu Hyper Market": "$77.00",
                    Centrepoint: "$58.00",
                    Max: "$89.00",
                }, 'Out of Stock'],
                Retailer1_price_data: {
                    price_margin: "12%",
                    net_margin: "14%",
                    discount: 18
                },
                Retailer2_price_data: {
                    price_margin: "30%",
                    net_margin: "19%",
                    discount: "No discount available"
                },
                Retailer3_price_data: {
                    price_margin: "25%",
                    net_margin: "10%",
                    discount: 7
                },
                productDetail: {
                    productPoints: {
                        name: "Adidas EQ21 Run Shoes",
                        brand: "adidas",
                        "Country of Origin": "USA",
                    },
                    About: productData.info.shoes[0].about
                },
                graphData: [
                    { name: "Noon", price: 40 },
                    { name: "Carrefour", price: 87 },
                    { name: "Namshi", price: 76 },
                    { name: "Lulu Hyper Market", price: 77 },
                ]
            },
            {
                imageUrl: productData.info.caps[0].imgUrl,
                productName: productData.info.caps[0].productName,
                productPrice: "$56.000",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["mens caps", "cap", "caps"],
                Retailer_1: ["red", {
                    Noon: "$76.00",
                    Carrefour: "$33.00",
                    Shein: "$66.00",

                }, 'Out of Stock'],
                Retailer_2: ["green", {
                    Noon: "$78.00",
                    Carrefour: "$52.00",
                    Shein: "$88.00",

                }, 'Instock'],
                Retailer_3: ["red", {
                    "Lulu Hyper Market": "$99.00",
                    Centrepoint: "$78.00",
                    Max: "$76.00",
                }, 'Out of Stock'],
                Retailer1_price_data: {
                    price_margin: "12%",
                    net_margin: "14%",
                    discount: 18
                },
                Retailer2_price_data: {
                    price_margin: "30%",
                    net_margin: "19%",
                    discount: "No discount available"
                },
                Retailer3_price_data: {
                    price_margin: "25%",
                    net_margin: "10%",
                    discount: 7
                },
                productDetail: {
                    productPoints: {
                        name: "Oversized Button Down Shirt",
                        brand: "Wrangler Authentics Store",
                        "Country of Origin": "USA",
                    },
                    About: productData.info.caps[0].about
                },
                graphData: [
                    { name: "Noon", price: 76 },
                    { name: "Carrefour", price: 33 },
                    { name: "Namshi", price: 88 },
                    { name: "Lulu Hyper Market", price: 99 },
                ]
            },
            {
                imageUrl: productData.info.bags[0].imgUrl,
                productName: productData.info.bags[0].productName,
                productPrice: "$56.000",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["bag", "bags", "man bags"],
                Retailer_1: ["red", {
                    Noon: "$66.00",
                    Carrefour: "$60.00",
                    Shein: "$59.00",

                }, 'Out of Stock'],
                Retailer_2: ["green", {
                    Noon: "$46.00",
                    Carrefour: "$39.00",
                    Shein: "$90.00",

                }, 'Instock'],
                Retailer_3: ["red", {
                    "Lulu Hyper Market": "$69.00",
                    Centrepoint: "$95.00",
                    Max: "$130.00",
                }, 'Out of Stock'],
                Retailer1_price_data: {
                    price_margin: "12%",
                    net_margin: "14%",
                    discount: 18
                },
                Retailer2_price_data: {
                    price_margin: "30%",
                    net_margin: "19%",
                    discount: "No discount available"
                },
                Retailer3_price_data: {
                    price_margin: "25%",
                    net_margin: "10%",
                    discount: 7
                },
                productDetail: {
                    productPoints: {
                        name: "Grey Hyper Bolt Running Shoes for Men",
                        brand: "Nike",
                        "Country of Origin": "USA",
                    },
                    About: productData.info.bags[0].about
                },
                graphData: [
                    { name: "Noon", price: 66 },
                    { name: "Carrefour", price: 60 },
                    { name: "Namshi", price: 90 },
                    { name: "Lulu Hyper Market", price: 69 },
                ]
            },
            {
                imageUrl: productData.info.MobilePhones[1].imgUrl,
                productName: productData.info.MobilePhones[1].productName,
                productPrice: "$76.00",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["mobile", "mobile phone", 'phones'],
                Retailer_1: ["red", {
                    Noon: "$65.00",
                    Carrefour: "$65.00",
                    Shein: "$76.00",
                }, 'Out of Stock'],
                Retailer_2: ["green",
                    {
                        Namshi: "$65.00",
                        Trendyol: "$77.00",
                        Styli: "$87.00",
                        Adidas: "$66.00",
                    }
                    , 'Instock'],
                Retailer_3: ["red", {
                    "Lulu Hyper Market": "$85.00",
                    Centrepoint: "$100.00",
                    Max: "$47.00",
                }, 'Out of Stock'],
                Retailer1_price_data: {
                    price_margin: "12%",
                    net_margin: "14%",
                    discount: 18
                },
                Retailer2_price_data: {
                    price_margin: "30%",
                    net_margin: "19%",
                    discount: "No discount available"
                },
                Retailer3_price_data: {
                    price_margin: "25%",
                    net_margin: "10%",
                    discount: 7
                },
                productDetail: {
                    productPoints: {
                        name: "Versace Eros for Men",
                        brand: "Versace ",
                        "Country of Origin": "UK",
                    },
                    About: productData.info.MobilePhones[1].about
                },
                graphData: [
                    { name: "Noon", price: 65 },
                    { name: "Carrefour", price: 69 },
                    { name: "Namshi", price: 65 },
                    { name: "Lulu Hyper Market", price: 85 },
                ]
            },
            {
                imageUrl: productData.info.perfume[1].imgUrl,
                productName: productData.info.perfume[1].productName,
                productPrice: "$40.00",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["men perfume", "perfumes", 'perfume'],
                Retailer_1: ["red", {
                    Noon: "$77.00",
                    Carrefour: "$73.00",
                    Shein: "$80.00",
                }, 'Out of Stock'],
                Retailer_2: ["green", {
                    Namshi: "$81.00",
                    Trendyol: "$120.00",
                    Styli: "$76.00",
                    Adidas: "$55.00",
                }, 'Instock'],
                Retailer_3: ["red", {
                    "Lulu Hyper Market": "$89.00",
                    Centrepoint: "$100.00",
                    Max: "$78.00",
                }, 'Out of Stock'],
                Retailer1_price_data: {
                    price_margin: "12%",
                    net_margin: "14%",
                    discount: 18
                },
                Retailer2_price_data: {
                    price_margin: "30%",
                    net_margin: "19%",
                    discount: "No discount available"
                },
                Retailer3_price_data: {
                    price_margin: "25%",
                    net_margin: "10%",
                    discount: 7
                },
                productDetail: {
                    productPoints: {
                        name: "Travelon Anti-theft Packable Backpack",
                        brand: "Travelon",
                        "Country of Origin": "USA",
                    },
                    About: productData.info.perfume[1].about
                },
                graphData: [
                    { name: "Noon", price: 77 },
                    { name: "Carrefour", price: 73 },
                    { name: "Namshi", price: 81 },
                    { name: "Lulu Hyper Market", price: 89 },
                ]
            },
            {
                imageUrl: productData.info.Clothing[1].imgUrl,
                productName: productData.info.Clothing[1].productName,
                productPrice: "$20.00",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["men clothing", "clothing", 'clothings', 'cloths', 'cloth'],
                Retailer_1: ["red", {
                    Noon: "$85.00",
                    Carrefour: "$79.00",
                    Shein: "$89.00",

                }, 'Out of Stock'],
                Retailer_2: ["green", {
                    Noon: "$78.00",
                    Carrefour: "$120.00",
                    Shein: "$99.00",

                }, 'Instock'],
                Retailer_3: ["red",
                    {
                        "Lulu Hyper Market": "$65.00",
                        Centrepoint: "$54.00",
                        Max: "$56.00",
                    }, 'Out of Stock'],
                Retailer1_price_data: {
                    price_margin: "12%",
                    net_margin: "14%",
                    discount: 18
                },
                Retailer2_price_data: {
                    price_margin: "30%",
                    net_margin: "19%",
                    discount: "No discount available"
                },
                Retailer3_price_data: {
                    price_margin: "25%",
                    net_margin: "10%",
                    discount: 7
                },
                productDetail: {
                    productPoints: {
                        name: "Flexfit Men's Delta Seamless Cap",
                        brand: "Travelon",
                        "Country of Origin": "USA",
                    },
                    About: productData.info.Clothing[1].about
                },
                graphData: [
                    { name: "Noon", price: 85 },
                    { name: "Carrefour", price: 79 },
                    { name: "Namshi", price: 99 },
                    { name: "Lulu Hyper Market", price: 65 },
                ]
            },
            {
                imageUrl: productData.info.shoes[1].imgUrl,
                productName: productData.info.shoes[1].productName,
                productPrice: "$120.00",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["men shoes", "shoe", 'shoes'],
                Retailer_1: ["red", {
                    Noon: "$65.00",
                    Carrefour: "$86.00",
                    Shein: "$88.00",
                }, 'Out of Stock'],
                Retailer_2: ["green", {
                    Namshi: "$76.00",
                    Trendyol: "$43.00",
                    Styli: "$47.00",
                    Adidas: "$50.00",
                }, 'Instock'],
                Retailer_3: ["red", {
                    "Lulu Hyper Market": "$65.00",
                    Centrepoint: "$54.00",
                    Max: "$56.00",
                }, 'Out of Stock'],
                Retailer1_price_data: {
                    price_margin: "12%",
                    net_margin: "14%",
                    discount: 18
                },
                Retailer2_price_data: {
                    price_margin: "30%",
                    net_margin: "19%",
                    discount: "No discount available"
                },
                Retailer3_price_data: {
                    price_margin: "25%",
                    net_margin: "10%",
                    discount: 7
                },
                productDetail: {
                    productPoints: {
                        name: "Max Cool Unstitched Fabric Cotton",
                        brand: "Xpril Store",
                        "Country of Origin": "USA",
                    },
                    About: productData.info.shoes[0].about
                },
                graphData: [
                    { name: "Noon", price: 65 },
                    { name: "Carrefour", price: 86 },
                    { name: "Namshi", price: 76 },
                    { name: "Lulu Hyper Market", price: 65 },
                ]
            },
            {
                imageUrl: productData.info.caps[1].imgUrl,
                productName: productData.info.caps[1].productName,
                productPrice: "$200.00",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["men caps", "caps", 'cap'],
                Retailer_1: ["red", {
                    Noon: "$41.00",
                    Carrefour: "$50.00",
                    Shein: "$51.00",

                }, 'Out of Stock'],
                Retailer_2: ["green", {
                    Noon: "$41.00",
                    Carrefour: "$50.00",
                    Shein: "$51.00",

                }, 'Instock'],
                Retailer_3: ["red", {
                    Noon: "$41.00",
                    Carrefour: "$50.00",
                    Shein: "$51.00",

                }, 'Out of Stock'],
                Retailer1_price_data: {
                    price_margin: "12%",
                    net_margin: "14%",
                    discount: 18
                },
                Retailer2_price_data: {
                    price_margin: "30%",
                    net_margin: "19%",
                    discount: "No discount available"
                },
                Retailer3_price_data: {
                    price_margin: "25%",
                    net_margin: "10%",
                    discount: 7
                },
                productDetail: {
                    productPoints: {
                        name: "Initio Oud For Greatness",
                        brand: "Fragrance World Store",
                        "Country of Origin": "UK",
                    },
                    About: [
                        "A luxurious and sensory experience with its spicy and aromatic blast, Happiness Oud, a unique and captivating perfume ideal for both men and Detail Explanation.",
                        "Provides a relaxing and harmonious experience with its addictive and sensual composition of citrus and ginger",
                        "This unisex perfume offers a sense of peace and tranquility, creating a secret dimension of deep harmony,"
                    ]
                },
                graphData: [
                    { name: "Noon", price: 41 },
                    { name: "Carrefour", price: 50 },
                    { name: "Namshi", price: 51 },
                    { name: "Lulu Hyper Market", price: 41 },
                ]
            },
            {
                imageUrl: productData.info.bags[1].imgUrl,
                productName: productData.info.bags[1].productName,
                productPrice: "$200.00",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["bags", "mens bags", 'bag'],
                Retailer_1: ["red", {
                    Noon: "$41.00",
                    Carrefour: "$50.00",
                    Shein: "$51.00",
                }, 'Out of Stock'],
                Retailer_2: ["green", {
                    Noon: "$41.00",
                    Carrefour: "$50.00",
                    Shein: "$51.00",
                }, 'Instock'],
                Retailer_3: ["red", {
                    "Lulu Hyper Market": "$65.00",
                    Centrepoint: "$54.00",
                    Max: "$56.00",
                }, 'Out of Stock'],
                Retailer1_price_data: {
                    price_margin: "12%",
                    net_margin: "14%",
                    discount: 18
                },
                Retailer2_price_data: {
                    price_margin: "30%",
                    net_margin: "19%",
                    discount: "No discount available"
                },
                Retailer3_price_data: {
                    price_margin: "25%",
                    net_margin: "10%",
                    discount: 7
                },
                productDetail: {
                    productPoints: {
                        name: "Initio Oud For Greatness",
                        brand: "Fragrance World Store",
                        "Country of Origin": "UK",
                    },
                    About: productData.info.bags[1].about
                },
                graphData: [
                    { name: "Noon", price: 41 },
                    { name: "Carrefour", price: 50 },
                    { name: "Namshi", price: 51 },
                    { name: "Lulu Hyper Market", price: 41 },
                ]
            },
        ])

    const [newData, setNewData] = useState([])

    const [searchCategory, setSearchCategory] = useState()
    const [array, setArray] = useState(
        []
    )
    function serachChanging(e) {
        setSearchCategory(e.target.value)
        console.log(searchCategory)
        // for (let i = 0; i < dataLopping.length; i++) {
        //     // console.log(dataLopping[i].productId)
        //     for (let j = 0; j < dataLopping[i].productId.length; j++) {
        //         if(searchCategory === dataLopping[i].productId[j])
        //         {
        //             console.log(dataLopping[i].productId)
        //             console.log(dataLopping[i])

        //         //   setDataLooping(dataLopping.push(dataLopping[i]))
        //             setDataLooping((prev) => {
        //                 return [ dataLopping[i], ...prev]
        //             }) 
        //             console.log(dataLopping[i]  , "from looping searching ")
        //             // console.log(array)
        //         }
        //         else{
        // // setDataLooping([])

        //         }

        //     }
        // }
        // (e) => { setSearchCategory(e.target.value)
    }
    useEffect(
        () => {
            setNewData([])
            // console.log(dataLopping)
            for (let i = 0; i < dataLopping.length; i++) {
                // console.log(dataLopping[i].productId)
                if(dataLopping[i].productId.includes(searchCategory))
                {
                    console.log(dataLopping[i].productId)
                }
                
            }
            for (let i = 0; i < dataLopping.length; i++) {
                // console.log(dataLopping[i].productId)
                for (let j = 0; j < dataLopping[i].productId.length; j++) {
                    
                    if (searchCategory === dataLopping[i].productId[j]) {
                        // console.log(dataLopping[i].productId)
                        // console.log(dataLopping[i])

                        //   setNewData(newData.push(dataLopping[i]))
                        setDataLooping((prev) => {
                            return [dataLopping[i], ...prev]
                        })
                        // console.log(dataLopping[i]  , "from looping searching ")
                        // console.log(array)
                    }
                    else {
                        // setDataLooping([])

                    }

                }
            }

            //  setDataLooping(newData)
            // console.log(newData, 'from new data')
        }, [searchCategory]
    )
    const [addedProductVal, setAddedProductVal] = useState(0)
    const [popupDisplay, setPopupDisplay] = useState({
        display: "none"
    })
    const [watchedList, setWatchList] = useState(
        new Array()
    )
    const displayPopup = (productId) => {
        return (e) => {
            setPopupDisplay({ display: "flex" })
            let element = e.target.className
            if (element === "fa-regular fa-eye") {
                e.target.className = "fa-solid fa-eye"
                setAddedProductVal(addedProductVal + 1)
            }
            else {
                setAddedProductVal(addedProductVal - 1)
                e.target.className = "fa-regular fa-eye"
            }
            console.log(addedProductVal)
            // console.log(e.target.className = 'fa-solid fa-eye')
            // = 'fa-solid fa-eye'
        }
    }
    const nonePopup = () => {
        setPopupDisplay({ display: "none" })
    }
    //     productName
    // productId
    // ProductRetailer
    const [productName, setProductName] = useState("")
    const [productId, setProductId] = useState("")
    const [ProductRetailer, setProductRetailer] = useState("")
    const [priceMargin, setPriceMargin] = useState('')
    const [netMargin, setNetMargin] = useState('')
    const [promotion, setPromotion] = useState()
    const [priceTagPopup, setPriceTagPopup] = useState({
        display: "none"
    })

    const price_tag_popup = (priceVal, netVal, price, discount) => {
        return () => {
            if (typeof discount === "number") {
                console.log(typeof discount, "type of promotion")

                let num = [price.split("")[1], price.split("")[2], price.split("")[3]]
                //  console.log(num.toString().split(','))
                let valued = "";
                for (let i = 0; i < num.length; i++) {
                    // if()
                    valued += num[i]
                }
                console.log(valued)
                let val = discount * valued / 100
                setPromotion(val)
                // setPromotion(val)


            }
            else {
                console.log("not")
                setPromotion("-")
            }

            // console.log(price)
            setPriceTagPopup({
                display: "flex"
            })
            setPriceMargin(priceVal)
            setNetMargin(netVal)
        }
    }
    const priceTagPopupClose = () => {
        setPriceTagPopup({
            display: "none"
        })
    }

    const [retailler1Select, setRetailler1Select] = useState("Noon")
    const [retailler2Select, setRetailler2Select] = useState("Namshi")
    const [retailler3Select, setRetailler3Select] = useState("Lulu Hyper Market")
    useEffect(
        () => {
            // console.log(retailler1Select)
            // console.log(retailler2Select)
            // console.log(retailler3Select)

        }
    ), [retailler1Select]

    const [promotionVisible, setPromotionVisible] = useState({

    })

    function sendData(data) {
        return () => {
            productData.setPricesDATA(data.graphData)
            productData.setOurPrices(data.productPrice)
            // console.log(data)
            // console.log()
            productData.setProductData_detail(data)
            console.log(data , "grapfg")
        }
    }


    return (
        <>
            <div className='body' style={{
                position: "",
            }}>
                {/* <div style={{
                    position: "absolute", width: "", height: "100vh", backgroundColor: "rgba(0,0,0,0.5)",
                    display: "flex", alignItems: "center", justifyContent: "center", top: "0%"
                }}>
                    <h1>overlay</h1>
                </div> */}
                <div className='popupBody' style={popupDisplay}>
                    <div className='popup' >
                        <h4><i class="fa-solid fa-eye"></i> {addedProductVal}  Product are added to watch list successfully</h4>
                        <div style={{ display: "flex", alignItems: "center" }}><i style={{ fontSize: "70px", color: "#ff9900" }} class="fa-solid fa-envelope"></i><h5>You will be alerted with price and stock changes</h5></div>
                        <div className='crosPopup' style={{ textAlign: "center" }}>
                            {/* <button  >OK</button> */}
                            <i className='crosIcon' onClick={nonePopup} class="fa-solid fa-circle-xmark"></i>
                        </div>
                    </div>
                </div>
                <div className='popupBody' style={priceTagPopup}>
                    <div className='priceTagPopup' >
                        <div style={{ display: "flex" }}>
                            {productName}
                            {productId}
                            {ProductRetailer}
                        </div>

                        <div>
                            <h5>Price-match margin value : {priceMargin} </h5>
                            <div><h5>Net-match margin value : {netMargin} </h5></div>
                        </div>
                        <div style={{}}>
                            <table style={{}}>
                                <tr>
                                    <th style={{ width: "80%" }}>Promotion Text</th>
                                    <th>value</th>
                                </tr>
                                <tr >
                                    <td>Get an extra  {promotion} % off this product</td>
                                    <td>{promotion}%</td>

                                </tr>
                            </table>
                        </div>
                        <div style={{ textAlign: "center" }} > <button onClick={priceTagPopupClose} >OK</button> </div>
                    </div>
                </div>
                <div lg={12} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px",
                    margin: "20px 0px",
                }} >
                    {/* <HeaderMain title="System" className="mb-4 mb-lg-5" /> */}
                    <div>
                        <div style={{ position: "relative" }}>
                            <i style={{ position: "absolute", top: "30%", marginLeft: "9px", fontSize: "17px", color: "black" }} class="fa-solid fa-magnifying-glass"></i>
                            <input style={{
                                border: "none", outline: "none", width: "400px", borderRadius: "10px", height: "22px", boxSizing: "border-box",
                                padding: "20px  40px", fontSize: "20px", backgroundColor: "#e6e6f6"
                            }} type="search" value={searchCategory} onChange={serachChanging} />
                        </div>
                    </div>
                    <div style={{ display: "flex", marginRight: "80px" }}>
                        <div className="selectFilters" >
                            <select value={retailler1Select} onChange={(e) => { setRetailler1Select(e.target.value) }} style={{
                                backgroundColor: "#e6e6f6",
                                border: "none", outline: "none", boxSizing: "border-box", padding: "10px 20px", borderRadius: "5px"
                            }}>

                                <option>Noon</option>
                                <option>Carrefour</option>
                                <option>Shein</option>
                                <option>Lulu Hyper Market</option>
                            </select>
                        </div>
                        <div className="selectFilters" >
                            <select value={retailler2Select} onChange={(e) => { setRetailler2Select(e.target.value) }} style={{
                                backgroundColor: "#e6e6f6",
                                border: "none", outline: "none", boxSizing: "border-box", padding: "10px 20px", borderRadius: "5px"
                            }}>

                                <option>Namshi</option>
                                <option>Trendyol</option>
                                <option>Styli</option>
                                <option>Adidas</option>
                            </select>
                        </div>
                        <div className="selectFilters" >
                            <select value={retailler3Select} onChange={(e) => { setRetailler3Select(e.target.value) }} style={{
                                backgroundColor: "#e6e6f6",
                                border: "none", outline: "none", boxSizing: "border-box", padding: "10px 20px", borderRadius: "5px"
                            }}>

                                <option>Lulu Hyper Market</option>
                                <option>Centrepoint</option>
                                <option>Max</option>
                                <option>Namshi</option>
                            </select>
                        </div>
                    </div>
                    {/* <div style={{ position: "relative" }} >
                        <i style={{ fontSize: "20px" }} class="fa-solid fa-eye"></i>
                        <span style={{
                            padding: "7px 14px ", backgroundColor: "red", position: "absolute", bottom: "50%",
                            left: "70%", borderRadius: "7px", color: "white"
                        }} >{addedProductVal}</span>
                    </div> */}

                    {/* <div ><h1 style={{ fontSize: "30px" }} >Price Intelligence</h1></div> */}


                </div>

                <div style={{
                    backgroundColor: "", height: "",
                }}>
                    <table className='topHeading' style={{ width: "100%", fontSize: "20px" }} >
                        <tr style={{ backgroundColor: "#f0f3f5", width: "100%", padding: "20px 0px", boxSizing: "border-box", height: "60px", fontSize: "" }}>
                            <th style={{ width: "40%", fontSize: "20px", padding: "0px 10px" }}>
                                Products
                            </th>
                            <th style={{ fontSize: "18px", boxSizing: "border-box" }}>
                                {/* <span style={{ paddingLeft: "20px" }} > {retailler1Select}</span> */}
                            </th>
                            <th style={{ fontSize: "18px", boxSizing: "border-box" }}>
                                {/* <span style={{ paddingLeft: "20px" }} > {retailler2Select}</span> */}
                            </th>
                            <th style={{ fontSize: "18px", boxSizing: "border-box" }}>
                                {/* <span style={{ paddingLeft: "20px" }} > {retailler3Select}</span> */}
                            </th>
                        </tr>

                        {
                            dataLopping.map(
                                (item) => {
                                    return (
                                        <>
                                            <tr style={{ marginTop: "20px", position: "" }}>
                                                <td style={{
                                                    paddingTop: "30px", paddingLeft: "20px", display: "flex",
                                                    alignItems: "center", gap: "10px", border: ""
                                                }}>
                                                    <div>
                                                        <i ref={eyeRefer} style={{ cursor: "pointer" }} onClick={displayPopup(item.productId)} class={item.eyeBtnColor}></i>
                                                    </div>
                                                    <div>
                                                        <Link onClick={sendData(item)} to="/theme/product-detail" >   <img width="85px" src={item.imageUrl} alt='mouse' /></Link>
                                                    </div>
                                                    <div style={{ width: "", border: "", marginRight: "5px" }}>
                                                        <Link onClick={sendData(item)} style={{ textDecoration: "none" }} to="/theme/product-detail"> <h4 style={{
                                                            fontSize: "18px",
                                                            color: "black"
                                                        }}>{item.productName}</h4></Link>
                                                        <p>{item.productPrice}</p>
                                                    </div>

                                                </td>
                                                <td style={{ paddingTop: "30px", position: "" }}>

                                                    <div onClick={price_tag_popup(item.Retailer1_price_data.price_margin, item.Retailer1_price_data.net_margin, item.Retailer_1[1]
                                                        , item.Retailer1_price_data.discount
                                                    )} className='priceTagBody' style={{
                                                        ...propductDetailBox,
                                                    }}>
                                                        {/* This is stock box start here */}
                                                        <div style={{ width: "20px", height: "100%", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", backgroundColor: `${item.Retailer_1[0]}`, fontWeight: "bold" }}></div>
                                                        <div className='' style={{ padding: "20px 10px", boxSizing: "border-box", }}>

                                                            <h4 style={{ fontSize: "18px" }} >{item.Retailer_1[1][retailler1Select]}</h4>
                                                            <p style={{ fontSize: "18px" }}>{item.Retailer_1[2]}</p>

                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ paddingTop: "30px" }}>
                                                    <div className='priceTagBody' onClick={price_tag_popup(item.Retailer2_price_data.price_margin, item.Retailer2_price_data.net_margin, item.Retailer_2[1], item.Retailer2_price_data.discount)} style={propductDetailBox}>
                                                        <div style={{ width: "20px", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", height: "100%", backgroundColor: `${item.Retailer_2[0]}` }}></div>
                                                        <div style={{ padding: "20px 10px", boxSizing: "border-box" }}>
                                                            <h4 style={{ fontSize: "18px" }}  >{item.Retailer_2[1][retailler2Select]}</h4>
                                                            <p style={{ fontSize: "18px" }} >{item.Retailer_2[2]}</p>

                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ paddingTop: "30px" }}>
                                                    <div className='priceTagBody' onClick={price_tag_popup(item.Retailer3_price_data.price_margin, item.Retailer3_price_data.net_margin, item.Retailer_3[1], item.Retailer3_price_data.discount)} style={propductDetailBox}>
                                                        <div style={{ width: "20px", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", height: "100%", backgroundColor: `${item.Retailer_3[0]}` }}></div>
                                                        <div style={{ padding: "20px 10px", boxSizing: "border-box" }}>
                                                            <h4 style={{ fontSize: "18px" }}  >{item.Retailer_3[1][retailler3Select]}</h4>
                                                            <p style={{ fontSize: "18px" }} >{item.Retailer_3[2]}</p>

                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                }
                            )
                        }


                    </table>

                </div>
                {/* <h2> {addedProductVal}</h2> */}
            </div>
        </>
    )
}

export default DetailExplanation