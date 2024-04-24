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
                imageUrl: "https://m.media-amazon.com/images/I/912xgelNpdL._AC_SX466_.jpg",
                productName: "Legendary Whitetails Journeyman",
                productPrice: "$42.00",
                eyeBtnColor: eyeDarkLight,
                productId: ["jacket", "hoodie" , "mens fasion" ],
                productUrl: "/theme/product1",
                Retailer_1: ["red", '$41.00', 'Out of stock'],
                Retailer_2: ["green", '$48.00', 'Instock'],
                Retailer_3: ["orange", '$47.00', 'Instock'],
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
                        brand: "men cloths",
                        "Country of Origin": "china",

                    },
                    About: [
                        "For the signature Legendary Whitetails fit, see our size chart which accomodiates Standard and Big & Tall sizes",
                        "Experience the Legendary Whitetails men's jacket quality with a blend of Cotton and Polyester",
                        "Top quality flannel-lined for ultimate warmth, the Legendary Whitetails Journeyman is your shield against colds"
                    ]
                }
            },
            {
                imageUrl: "https://m.media-amazon.com/images/I/71r69UUQRtL._AC_SX522_.jpg",
                productName: "Pullover Hoodie",
                productPrice: "$25.000",
                productUrl: "/theme/product2",
                eyeBtnColor: eyeDarkLight,
                productId: ["jacket", "hoodie" , "mens fasion" , "mens"],
                Retailer_1: ["green", '$33.00', 'Instock'],
                Retailer_2: ["red", '$31.00', 'Out of Stock'],
                Retailer_3: ["orange", '$28.00', 'Instock'],
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
                }
            },
            {
                imageUrl: "https://m.media-amazon.com/images/I/81k6R2uh1JL._AC_SX569_.jpg",
                productName: "Apple Watch Ultra 2 ",
                productPrice: "$106.000",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["apple", "watch" , "apple watch" ],
                Retailer_1: ["green", '$145.00', 'Instock'],
                Retailer_2: ["green", '$103.00', 'Instock'],
                Retailer_3: ["red", '$140.00', 'Out of Stock'],
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
                    About: [
                        "You can call and text without your iPhone, even overseas with international roaming. Stream your favorite music and podcasts. ",
                        "The Compass app delivers helpful views and details like elevation, incline, longitude, and latitude. ",
                        "Mark your location with Compass Waypoints."
                    ]
                }
            },
            {
                imageUrl: "https://images.smiletemplates.com/uploads/screenshots/492/0000492645/powerpoint-template-450w.jpg",
                productName: "Adidas EQ21 Run Shoes",
                productPrice: "$106.000",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["shoes" , "shoe" , "Adidas" , "adidas"],
                Retailer_1: ["red", '$145.00', 'Out of Stock'],
                Retailer_2: ["green", '$133.00', 'Instock'],
                Retailer_3: ["red", '$170.00', 'Out of Stock'],
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
                    About: [
                        "Women's running shoes with flexible cushioning ",
                        "BOUNCE: Lightweight Bounce cushioning provides enhanced comfort and flexibility ",
                        "HIGH TRACTION: The rubber outsole delivers great grip",
                        "MADE IN PART WITH RECYCLED CONTENT: Made with a series of recycled materials, this upper features at least 50% recycled content."
                    ]
                }
            },
            {
                imageUrl: "https://outfitters.com.pk/cdn/shop/products/F0271103901_2_f6453e98-cac1-4647-857d-c6ab9e399f2f.jpg?v=1671520371",
                productName: "Oversized Button Down Shirt",
                productPrice: "$56.000",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["mens fasion" , "shirt" , "shirts" , "shirt for mens"],
                Retailer_1: ["red", '$145.00', 'Out of Stock'],
                Retailer_2: ["green", '$133.00', 'Instock'],
                Retailer_3: ["red", '$170.00', 'Out of Stock'],
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
                    About: [
                        "Relaxed fit",
                        "2 button front dual chest pockets ",
                        "Gray chambray back neck lining",
                        "Washed for softness",
                        "Button cuffs"
                    ]
                }
            },
            {
                imageUrl: "https://www.flashfootwear.com.pk/wp-content/uploads/2021/01/Grey-Hyper-Bolt-Running-Shoes-for-Men-1.jpg",
                productName: "Grey Hyper Bolt Running Shoes for Men",
                productPrice: "$56.000",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["running shoes" , "shoes for mens" , "shoes"],
                Retailer_1: ["red", '$145.00', 'Out of Stock'],
                Retailer_2: ["green", '$133.00', 'Instock'],
                Retailer_3: ["red", '$170.00', 'Out of Stock'],
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
                    About: [
                        "synthetic",
                        "Relaxed fit",
                    ]
                }
            },
            {
                imageUrl: "https://scentsnsecrets.com/cdn/shop/files/harmonycopy_1f9ee8ef-2046-4cd0-bd1a-4754970d5d9f.jpg?v=1703512952&width=360",
                productName: "Versace Eros for Men",
                productPrice: "$76.00",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["men perfumes", "mens", 'perfumes'],
                Retailer_1: ["red", '$145.00', 'Out of Stock'],
                Retailer_2: ["green", '$133.00', 'Instock'],
                Retailer_3: ["red", '$170.00', 'Out of Stock'],
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
                    About: [
                        "Apply onto clean, dry skin",
                        "Versace Eros is made in Italy",
                        "This is high quality product made of high quality material",
                        "We offer many great sales and discounts making this fragrance cheaper than at department stores."
                    ]
                }
            },
            {
                imageUrl: "https://chahyay.com/cdn/shop/files/Untitleddesign_10_2_785x.jpg?v=1710832771",
                productName: "Travelon Anti-theft Packable Backpack",
                productPrice: "$40.00",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["men bag", "bags", 'Bags', "Bag"],
                Retailer_1: ["red", '$145.00', 'Out of Stock'],
                Retailer_2: ["green", '$133.00', 'Instock'],
                Retailer_3: ["red", '$170.00', 'Out of Stock'],
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
                    About: [
                        "Locking main compartment with RFID blocking interior pocket",
                        "2 mesh side pockets hold a water bottle, umbrella, sunglasses or sunblock",
                        "Packs in its own zip compartment for storage and travel",
                        "Slash-resistant bottom and front panels and straps"
                    ]
                }
            },
            {
                imageUrl: "https://cdn.shopify.com/s/files/1/0733/3432/5537/files/24.2.29_FUROR_BaseballCaps.jpg?v=1709193433",
                productName: "Flexfit Men's Delta Seamless Cap",
                productPrice: "$20.00",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["men Cap", "Caps", 'cap'],
                Retailer_1: ["red", '$145.00', 'Out of Stock'],
                Retailer_2: ["green", '$133.00', 'Instock'],
                Retailer_3: ["red", '$170.00', 'Out of Stock'],
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
                    About: [
                        "Seamless stretchable fitted cap with lightweight visor fabrication and 3-layer multifunction sweatband with sweat absorption, quick drying, and stain prevention",
                        "Structured front panels",
                        "No Closure",
                        "Mid crown height"
                    ]
                }
            },
            {
                imageUrl: "https://www.gulahmedshop.com/media/wysiwyg/blocks/2024/top_sub_category_icons/men_clothes/24_01_26/unstitched.png?format=jpg",
                productName: "Max Cool Unstitched Fabric Cotton",
                productPrice: "$120.00",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["men cloth", "cloths", 'cloths for men'],
                Retailer_1: ["red", '$145.00', 'Out of Stock'],
                Retailer_2: ["green", '$133.00', 'Instock'],
                Retailer_3: ["red", '$170.00', 'Out of Stock'],
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
                    About: [
                        "2 tone Shoulder and waistline sporty finish Slimmer fit and sporty design Men's Functional High Quality Cotton Collar Short Sleeve",
                        "Hand wash or Machine Wash/Cold Water",
                        "No Closure",
                        "Due to monitor settings, monitor pixel definitions, we cannot guarantee that the color you see on your screen as an exact color of the product."
                    ]
                }
            },
            {
                imageUrl: "https://theperfumeclub.pk/cdn/shop/files/InitioOudForGreatnessEdp90ml_360x.jpg?v=1712959815",
                productName: "Initio Oud For Greatness",
                productPrice: "$200.00",
                productUrl: "/theme/product3",
                eyeBtnColor: eyeDarkLight,
                productId: ["men perfumes", "mens", 'perfumes'],
                Retailer_1: ["red", '$145.00', 'Out of Stock'],
                Retailer_2: ["green", '$133.00', 'Instock'],
                Retailer_3: ["red", '$170.00', 'Out of Stock'],
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
                }
            },
        ])



    const [searchCategory, setSearchCategory] = useState()
    const [array , setArray] = useState(
        []
    )
    useEffect(
        () => {
            // console.log(dataLopping)

            for (let i = 0; i < dataLopping.length; i++) {
                // console.log(dataLopping[i].productId)
                for (let j = 0; j < dataLopping[i].productId.length; j++) {
                    if(searchCategory === dataLopping[i].productId[j])
                    {
                        console.log(dataLopping[i].productId)
                        console.log(dataLopping[i])

                        
                        // array.push(dataLopping[i])
                        // setArray(
                        //     (prev)=>{
                        //         return [...prev , array.push(dataLopping[i])]
                        //     }
                        // )
                        // men perfumes
                        setDataLooping((prev) => {
                            return [ dataLopping[i], ...prev]
                        }) 
                        // console.log(array)
                    }
                    else{
                        
                    }
                    
                }
            }
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
    const [retailler3Select, setRetailler3Select] = useState("Boots")
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
            // console.log(data)
            console.log(productData.setProductData_detail(data))
        }
    }


    return (
        <>
            <div className='body' style={{
                position: "relative",
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
                        <div style={{ textAlign: "center" }}> <button onClick={nonePopup} >Okay</button></div>
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
                            <h5>price-match margin value : {priceMargin} </h5>
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
                        <div style={{ textAlign: "center" }} > <button onClick={priceTagPopupClose} >Okay</button> </div>
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
                            }} type="search" value={searchCategory} onChange={(e) => { setSearchCategory(e.target.value) }} />
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
                                <option>LuLu</option>
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
                                <option>namshi</option>
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
                                Amazon
                            </th>
                            <th style={{ fontSize: "18px", boxSizing: "border-box" }}>
                                <span style={{ paddingLeft: "20px" }} > {retailler1Select}</span>
                            </th>
                            <th style={{ fontSize: "18px", boxSizing: "border-box" }}>
                                <span style={{ paddingLeft: "20px" }} > {retailler2Select}</span>
                            </th>
                            <th style={{ fontSize: "18px", boxSizing: "border-box" }}>
                                <span style={{ paddingLeft: "20px" }} > {retailler3Select}</span>
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

                                                            <h4 style={{ fontSize: "18px" }} >{item.Retailer_1[1]}</h4>
                                                            <p style={{ fontSize: "18px" }}>{item.Retailer_1[2]}</p>

                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ paddingTop: "30px" }}>
                                                    <div className='priceTagBody' onClick={price_tag_popup(item.Retailer2_price_data.price_margin, item.Retailer2_price_data.net_margin, item.Retailer_2[1], item.Retailer2_price_data.discount)} style={propductDetailBox}>
                                                        <div style={{ width: "20px", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", height: "100%", backgroundColor: `${item.Retailer_2[0]}` }}></div>
                                                        <div style={{ padding: "20px 10px", boxSizing: "border-box" }}>
                                                            <h4 style={{ fontSize: "18px" }}  >{item.Retailer_2[1]}</h4>
                                                            <p style={{ fontSize: "18px" }} >{item.Retailer_2[2]}</p>

                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ paddingTop: "30px" }}>
                                                    <div className='priceTagBody' onClick={price_tag_popup(item.Retailer3_price_data.price_margin, item.Retailer3_price_data.net_margin, item.Retailer_3[1], item.Retailer3_price_data.discount)} style={propductDetailBox}>
                                                        <div style={{ width: "20px", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", height: "100%", backgroundColor: `${item.Retailer_3[0]}` }}></div>
                                                        <div style={{ padding: "20px 10px", boxSizing: "border-box" }}>
                                                            <h4 style={{ fontSize: "18px" }}  >{item.Retailer_3[1]}</h4>
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