// import { useState } from 'react'
import React, { useEffect, useState } from 'react'
import JsonContext from './JsonContext'

function JsonState({ children }) {
    let [retaillersData, setRetaillerData] = useState(
        {
            "total_sales": "$1.295 trillion",
            "competitors": [
                {
                    "name": "Amazon",
                    "highest_price": 500,
                    "lowest_price": 10,
                    "on_purchase": 5000,
                    "exclusive": 20,
                    "shipping": {
                        "standard": "Free (2-3 days)",
                        "express": "$10 (Next day)"
                    },
                    "return_policy": "30-day free returns",
                    "brand_reputation": "Highly reputable, trusted brand",
                    "market_presence": "USA",
                    "customer_service_rating": 4.8,
                    "user_experience": 4.7,
                    "sales": "$100 billion",
                    "sales_percentage": "80%",
                    "colors": "blue",
                    "stock_availability": "In stock",
                    "stock_value": 500000,
                    "total_price" : 2966.73 ,
                    "my_price" : 1962.99 ,
                },
                {
                    "name": "Noon",
                    "highest_price": 450,
                    "lowest_price": 15,
                    "on_purchase": 4500,
                    "exclusive": 15,
                    "shipping": {
                        "standard": "Free (2-4 days)",
                        "express": "$15 (Next day)"
                    },
                    "return_policy": "15-day free returns",
                    "brand_reputation": "Growing, gaining popularity",
                    "market_presence": "UK",
                    "customer_service_rating": 4.3,
                    "user_experience": 4.2,
                    "sales": "$10 billion",
                    "sales_percentage": "50%",
                    "colors": "yellow",
                    "stock_availability": "Out of stock",
                    "stock_value": 300000,
                    "total_price" : 2851.52,
                    "my_price" : 1962.99 ,
                },
                {
                    "name": "Carrefour",
                    "highest_price": 300,
                    "lowest_price": 5,
                    "on_purchase": 4000,
                    "exclusive": 10,
                    "shipping": {
                        "standard": "Free (3-5 days)",
                        "express": "$8 (2 days)"
                    },
                    "return_policy": "60-day returns with receipt",
                    "brand_reputation": "Well-established supermarket chain",
                    "market_presence": "USA",
                    "customer_service_rating": 4.5,
                    "user_experience": 4.4,
                    "sales": "$80 billion",
                    "sales_percentage": "70%",
                    "colors": "blue",
                    "stock_availability": "In stock",
                    "stock_value": 400000,
                    "total_price" : 2915.13,
                    "my_price" : 1962.99 ,
                },
                {
                    "name": "Shein",
                    "highest_price": 100,
                    "lowest_price": 5,
                    "on_purchase": 6000,
                    "exclusive": 25,
                    "shipping": {
                        "standard": "Free (5-7 days)",
                        "express": "$12 (3-5 days)"
                    },
                    "return_policy": "60-day returns for most items",
                    "brand_reputation": "Popular for trendy fashion",
                    "market_presence": "USA",
                    "customer_service_rating": 4.2,
                    "user_experience": 4.0,
                    "sales": "$20 billion",
                    "sales_percentage": "45%",
                    "colors": "yellow",
                    "stock_availability": "In stock",
                    "stock_value": 600000,
                    "total_price" : 2798.77,
                    "my_price" : 1962.99 ,
                },
                {
                    "name": "Namshi",
                    "highest_price": 200,
                    "lowest_price": 10,
                    "on_purchase": 3500,
                    "exclusive": 30,
                    "shipping": {
                        "standard": "Free (3-5 days)",
                        "express": "$10 (2-3 days)"
                    },
                    "return_policy": "30-day free returns",
                    "brand_reputation": "Leading online fashion retailer",
                    "market_presence": "USA",
                    "customer_service_rating": 4.6,
                    "user_experience": 4.5,
                    "sales": "$5 billion",
                    "sales_percentage": "40%",
                    "colors": "red",
                    "stock_availability": "Out of stock",
                    "stock_value": 200000,
                    "total_price" : 2715.74,
                    "my_price" : 1962.99 ,
                },
                {
                    "name": "Alibaba",
                    "highest_price": 600,
                    "lowest_price": 20,
                    "on_purchase": 5500,
                    "exclusive": 25,
                    "shipping": {
                        "standard": "Variable based on supplier",
                        "express": "Varies"
                    },
                    "return_policy": "Depends on seller",
                    "brand_reputation": "Global e-commerce giant",
                    "market_presence": "UK",
                    "customer_service_rating": 4.4,
                    "user_experience": 4.3,
                    "sales": "$500 billion",
                    "sales_percentage": "90%",
                    "colors": "blue",
                    "stock_availability": "In stock",
                    "stock_value": 550000,
                    "total_price" : 3076.91 , 
                    "my_price" : 1962.99 ,
                },
                {
                    "name": "Lulu Hypermarket",
                    "highest_price": 400,
                    "lowest_price": 10,
                    "on_purchase": 3000,
                    "exclusive": 5,
                    "shipping": {
                        "standard": "Free (2-3 days)",
                        "express": "$10 (Next day)"
                    },
                    "return_policy": "15-day returns with receipt",
                    "brand_reputation": "Well-known hypermarket chain",
                    "market_presence": "USA",
                    "customer_service_rating": 4.7,
                    "user_experience": 4.6,
                    "sales": "$30 billion",
                    "sales_percentage": "55%",
                    "colors": "yellow",
                    "stock_availability": "In stock",
                    "stock_value": 300000,
                    "total_price" : 2893.86 ,
                    "my_price" : 1962.99 ,
                },
                {
                    "name": "Walmart",
                    "highest_price": 350,
                    "lowest_price": 10,
                    "on_purchase": 7000,
                    "exclusive": 20,
                    "shipping": {
                        "standard": "Free (3-5 days)",
                        "express": "$15 (2 days)"
                    },
                    "return_policy": "90-day returns with receipt",
                    "brand_reputation": "Retail giant with a strong presence",
                    "market_presence": "UK",
                    "customer_service_rating": 4.6,
                    "user_experience": 4.5,
                    "sales": "$550 billion",
                    "sales_percentage": "85%",
                    "colors": "blue",
                    "stock_availability": "In stock",
                    "stock_value": 700000,
                    "total_price" : 3018.86 , 
                    "my_price" : 1962.99 ,
                },
                {
                    "name": "Trendyol",
                    "highest_price": 250,
                    "lowest_price": 15,
                    "on_purchase": 2500,
                    "exclusive": 12,
                    "shipping": {
                        "standard": "Free (3-5 days)",
                        "express": "$10 (Next day)"
                    },
                    "return_policy": "30-day free returns",
                    "brand_reputation": "Leading fashion e-commerce platform",
                    "market_presence": "UK",
                    "customer_service_rating": 4.3,
                    "user_experience": 4.2,
                    "sales": "$15 billion",
                    "sales_percentage": "65%",
                    "colors": "yellow",
                    "stock_availability": "In stock",
                    "stock_value": 250000,
                    "total_price" : 2697.86 ,
                    "my_price" : 1962.99 ,
                }
            ]
        }

    )


    let [products, setProducts] = useState(
        [
            // {
            //     "name": "New Apple IPhone 13 Pro Max",
            //     "url": "https://m.media-amazon.com/images/I/51UuPZLMaCL._AC_UY218_.jpg",
            //     "Brand": "Apple",
            //     "Country": "USA",
            //     "my_price": 42.00,
            //     "cost": 41.00,
            //     "net_margin": 2.38,
            //     "category": "mobile phone",
            //     "about": [
            //         "6.1'' Super Retina XDR display with ProMotion. 5G Superfast downloads, high-quality streaming",
            //         "Cinematic mode in 1080p at 30 fps. Dolby Vision HDR video recording up to 4K at 60 fps. 6X Optical zoom range",
            //         "A15 Bionic chip. New 6-core CPU with 2 performance and 4 efficiency cores. New 5-core GPU. New 16-core Neural Engine"
            //     ],
            //     "retailers": {
            //         "Amazon": { "name": "Amazon", "price": 41.43, "stock": "Out of stock", "color": "#ff0000", "price_match": 30, "net_match": 19, "discount": 10 },
            //         "Noon": { "name": "Noon", "price": 48.93, "stock": "Instock", "color": "#ffaa00", "price_match": 20, "net_match": 13, "discount": 20 },
            //         "Carrefour": { "name": "Carrefour", "price": 50.03, "stock": "Instock", "color": "#ffaa00", "price_match": 14, "net_match": 22, "discount": 25 },
            //         "Shein": { "name": "Shein", "price": 37.45, "stock": "Instock", "color": "#ffaa00", "price_match": 10, "net_match": 25, "discount": false },
            //         "Namshi": { "name": "Namshi", "price": 36.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 30, "net_match": 20, "discount": 19 },
            //         "Alibaba": { "name": "Alibaba", "price": 56.05, "stock": "Instock", "color": "#01821b", "price_match": 40, "net_match": 30, "discount": false },
            //         "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 42.00, "stock": "Instock", "color": "#01821b", "price_match": 22, "net_match": 30, "discount": 10 },
            //         "Walmart": { "name": "Walmart", "price": 49.00, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": false },
            //         "Trendyol": { "name": "Trendyol", "price": 34.00, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 25, "discount": 15 },

            //     },
            //     "retailer": [
            //         { "name": "Amazon", "price": 41.43, "stock": "Out of stock", "color": "#ff0000", "price_match": 30, "net_match": 19, "discount": 10 },
            //         { "name": "Noon", "price": 48.93, "stock": "Instock", "color": "#ffaa00", "price_match": 20, "net_match": 13, "discount": 20 },
            //         { "name": "Carrefour", "price": 50.03, "stock": "Instock", "color": "#ffaa00", "price_match": 14, "net_match": 22, "discount": 25 },
            //         { "name": "Shein", "price": 37.45, "stock": "Instock", "color": "#ffaa00", "price_match": 10, "net_match": 25, "discount": false },
            //         { "name": "Namshi", "price": 36.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 30, "net_match": 20, "discount": 19 },
            //         { "name": "Alibaba", "price": 56.05, "stock": "Instock", "color": "#01821b", "price_match": 40, "net_match": 30, "discount": false },
            //         { "name": "Lulu Hypermarket", "price": 42.00, "stock": "Instock", "color": "#01821b", "price_match": 22, "net_match": 30, "discount": 10 },
            //         { "name": "Walmart", "price": 49.00, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": false },
            //         { "name": "Trendyol", "price": 34.00, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 25, "discount": 15 },
            //     ]

            // },
            // {
            //     "name": "Dior Homme Sport Eau De Toilette",
            //     "url": "https://m.media-amazon.com/images/I/51pqd2twwGL._SX569_.jpg",
            //     "Brand": "Armani",
            //     "Country": "UAE",
            //     "my_price": 399.99,
            //     "cost": 320.99,
            //     "net_margin": 79,
            //     "category": "perfume",
            //     "about": [
            //         "Our Tampa Bay Buccaneers Adult Pullover Hooded Sweatshirt for Men and Women is our signature midweight pullover fleece hoodie featuring a printed graphic",
            //         "Fire The Cannons! This Buccaneers Hoodie will stand out for casual wear, tailgates and gamedays. The Junk Food Clothing x NFL Collection brings a hint of that vintage vibe that runs deep through NFL franchises.",
            //         "This Buccaneers Hoodie features a big, full-color print that gives it a super soft hand feel and will last for years to come"
            //     ],

            //     "retailers": {
            //         "Amazon": { "name": "Amazon", "price": 40.43, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 22, "discount": 15 },
            //         "Carrefour": { "name": "Carrefour", "price": 30.65, "stock": "Instock", "color": "#ffaa00", "price_match": 10, "net_match": 12, "discount": 5 },

            //         "Shein": { "name": "Shein", "price": 37.45, "stock": "Out of stock", "color": "#ff0000", "price_match": 10, "net_match": 12, "discount": false },

            //         "Namshi": { "name": "Namshi", "price": 36.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 10, "net_match": 12, "discount": false },

            //         "Alibaba": { "name": "Alibaba", "price": 30.99, "stock": "Instock", "color": "#01821", "price_match": 14, "net_match": 15, "discount": 10 },

            //         "Noon": { "name": "Noon", "price": 29.22, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 25, "discount": 15 },

            //         "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 35.99, "stock": "Instock", "color": "#ffaa00", "price_match": 10, "net_match": 14, "discount": 10 },

            //         "Trendyol": { "name": "Trendyol", "price": 20.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 10, "net_match": 14, "discount": false },
            //         "Walmart": { "name": "Walmart", "price": 40.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": false },

            //     },
            //     "retailer": [
            //         { "name": "Amazon", "price": 40.43, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 22, "discount": 15 },
            //         { "name": "Carrefour", "price": 30.65, "stock": "Instock", "color": "#ffaa00", "price_match": 10, "net_match": 12, "discount": 5 },

            //         { "name": "Shein", "price": 37.45, "stock": "Out of stock", "color": "#ff0000", "price_match": 10, "net_match": 12, "discount": false },

            //         { "name": "Namshi", "price": 36.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 10, "net_match": 12, "discount": false },

            //         { "name": "Alibaba", "price": 30.99, "stock": "Instock", "color": "#01821", "price_match": 14, "net_match": 15, "discount": 10 },

            //         { "name": "Noon", "price": 29.22, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 25, "discount": 15 },

            //         { "name": "Lulu Hypermarket", "price": 35.99, "stock": "Instock", "color": "#ffaa00", "price_match": 10, "net_match": 14, "discount": 10 },

            //         { "name": "Trendyol", "price": 20.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 10, "net_match": 14, "discount": false },
            //         { "name": "Walmart", "price": 40.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": false },
            //     ]
            // },
            // {
            //     "name": "Legendary Whitetails Journeyman",
            //     "url": "https://m.media-amazon.com/images/I/71MDJ2AP+0L._AC_SY500_.jpg",
            //     "Brand": "Royal Tag",
            //     "Country": "USA",
            //     "category": "cloths",
            //     "my_price": 79.00,
            //     "cost": 70.00,
            //     "net_margin": 9,
            //     "about": [
            //         "For the signature Legendary Whitetails fit, see our size chart which accomodiates Standard and Big & Tall sizes; the Journeyman shirt jacket is designed for extra layering",
            //         "Experience the Legendary Whitetails men's jacket quality with a blend of Cotton and Polyester; its rugged waxed cotton suede appearance, softer to the touch, promises durability and is weather-resistant",
            //         "Top quality flannel-lined for ultimate warmth, the Legendary Whitetails Journeyman is your shield against cold, transitional jacket for every season",
            //         "This Legendary Whitetails men's shirt jacket boasts hand-warmer side pockets and robust double-needle stitching, ensuring durability, while the snap closure ensures a snug fit"
            //     ],
            //     "retailers": {
            //         "Amazon": { "name": "Amazon", "price": 39.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Noon": { "name": "Noon", "price": 34.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
            //         "Carrefour": { "name": "Carrefour", "price": 37.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
            //         "Shein": { "name": "Shein", "price": 32.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
            //         "Namshi": { "name": "Namshi", "price": 29.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
            //         "Alibaba": { "name": "Alibaba", "price": 44.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
            //         "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 36.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
            //         "Walmart": { "name": "Walmart", "price": 41.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Trendyol": { "name": "Trendyol", "price": 28.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
            //     },
            //     "retailer": [
            //         { "name": "Amazon", "price": 39.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Noon", "price": 34.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },

            //         { "name": "Carrefour", "price": 37.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },

            //         { "name": "Shein", "price": 32.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },

            //         { "name": "Namshi", "price": 29.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },

            //         { "name": "Alibaba", "price": 44.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },

            //         { "name": "Lulu Hypermarket", "price": 36.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
            //         { "name": "Walmart", "price": 41.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Trendyol", "price": 28.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }

            //     ]
            // },
            // {
            //     "name": "Adidas EQ21 Run Shoes",
            //     "url": "https://m.media-amazon.com/images/I/71oZWiXGlEL._AC_SX500_.jpg",
            //     "Brand": "Adidas",
            //     "Country": "UK",
            //     "category": "shoes",
            //     "my_price": 50.00,
            //     "cost": 30.00,
            //     "net_margin": 20,
            //     "about": [
            //         "Men's running shoes for the daily runner",
            //         "Regular fit.",
            //         "Engineered mesh upper offers breathability; Geofit padded collar for comfort.",
            //         "TPU quarter and heel for added stability; Bounce midsole offers flexible comfort; Rubber outsole provides secure traction",
            //         "This product is made with recycled content as part of our ambition to end plastic waste; 20% of pieces used to make the upper are made with minimum 50% recycled content."
            //     ],
            //     "retailers": {
            //         "Amazon": { "name": "Amazon", "price": 89.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Noon": { "name": "Noon", "price": 84.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
            //         "Carrefour": { "name": "Carrefour", "price": 87.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
            //         "Shein": { "name": "Shein", "price": 82.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
            //         "Namshi": { "name": "Namshi", "price": 79.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
            //         "Alibaba": { "name": "Alibaba", "price": 94.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
            //         "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 86.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
            //         "Walmart": { "name": "Walmart", "price": 91.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Trendyol": { "name": "Trendyol", "price": 78.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
            //     },
            //     "retailer": [
            //         { "name": "Amazon", "price": 89.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Noon", "price": 84.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },

            //         { "name": "Carrefour", "price": 87.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },

            //         { "name": "Shein", "price": 82.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },

            //         { "name": "Namshi", "price": 79.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },

            //         { "name": "Alibaba", "price": 94.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },

            //         { "name": "Lulu Hypermarket", "price": 86.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },

            //         { "name": "Walmart", "price": 91.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Trendyol", "price": 78.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }

            //     ]
            // },
            // {
            //     "name": "Water Resistant bag for mens",
            //     "url": "https://m.media-amazon.com/images/I/81HtzlXhngL._AC_SX425_.jpg",
            //     "Brand": "Wolverine",
            //     "category": "bags",
            //     "Country": "USA",
            //     "my_price": 43.00,
            //     "cost": 33.00,
            //     "net_margin": 10,
            //     "about": [
            //         "USB CHARGING PORT DESIGN: Backpacks for men with built-in USB charger port outside and charging cable inside, this 15.6 inch laptop backpack offers you a more convenient way to charge your phone while walking",
            //         "The external dimensions of this laptop backpack are 18x12x7.8 inches / 45x30x19.8 cm applies to most slim laptops up to 15.6 inch. Recommended age range: 5 years old and up",
            //         "Computer backpack with hidden anti-theft pocket on the back to protect your items and easy to take them out. The back of the backpack is designed with a luggage strap so you can secure the backpack on the suitcase.",
            //         "Pocket more than 15, the main compartment of our travel backpack can hold 15.6 inch laptop, binders folders, clothes and college items. Front compartment with pockets for mobile phone and keychain etc. Make accessories organized and easy to find. ",
            //         "Breathable and adjustable lightweight fabric shoulder straps reduce the weight of this travel backpack. Our business work backpack is stylish even when full of packed."
            //     ],
            //     "retailers": {
            //         "Amazon": { "name": "Amazon", "price": 49.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Noon": { "name": "Noon", "price": 44.49, "stock": "Instock", "color": "#ffaa00", "price_match": 15, "net_match": 10, "discount": 10 },
            //         "Carrefour": { "name": "Carrefour", "price": 47.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
            //         "Shein": { "name": "Shein", "price": 42.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
            //         "Namshi": { "name": "Namshi", "price": 39.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
            //         "Alibaba": { "name": "Alibaba", "price": 54.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
            //         "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 46.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
            //         "Walmart": { "name": "Walmart", "price": 51.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Trendyol": { "name": "Trendyol", "price": 38.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
            //     },
            //     "retailer": [
            //         { "name": "Amazon", "price": 49.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Noon", "price": 44.49, "stock": "Instock", "color": "#ffaa00", "price_match": 15, "net_match": 10, "discount": 10 },

            //         { "name": "Carrefour", "price": 47.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },

            //         { "name": "Shein", "price": 42.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },

            //         { "name": "Namshi", "price": 39.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },

            //         { "name": "Alibaba", "price": 54.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },

            //         { "name": "Lulu Hypermarket", "price": 46.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },

            //         { "name": "Walmart", "price": 51.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Trendyol", "price": 38.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }

            //     ]
            // },
            // {
            //     "name": "SAMSUNG Galaxy Note 10 Plus",
            //     "url": "https://m.media-amazon.com/images/I/51NHRW+Nh0L._AC_SY300_SX300_.jpg",
            //     "Brand": "Samsung",
            //     "category": "mobile phone",
            //     "Country": "UAE",
            //     "my_price": 703.00,
            //     "cost": 650.00,
            //     "net_margin": 53,
            //     "about": [
            //         "Infinity-O view",
            //         "256 GB, 12 GB of RAM, Qualcomm SDM855 Snapdragon 855, Octa-Core, Adren 640, 4300 mAh battery",
            //         "Rear camera: 12 MP + 12 MP + 16 MP + 0.3 MP, front camera: 10 MP, video: 4 k uhd",
            //         "2G: GSM 850/900/1800/1900, 3G: HSDPA 850/900/1700 (AWS)/1900/2100, 4G: LTE 1/2/3/4/5/7/8/12/12/14/18/18/ 20/28/29/30/3. 8/39 // 40/41/46/66, 5g: 5/71/260/261 NSA/SINGLE SIM SIM (US 5G, Global 4G)",
            //         "5G of USA. UU., Decontinated. Global 4G LTE, US 5G bands only. It will work with most Sim GSM cards in the USA., Including AT&T, T-Mobile, etc. It does not work with CDMA carriers such as Verizon, Sprint, Boost."
            //     ],
            //     "retailers": {
            //         "Amazon": { "name": "Amazon", "price": 899.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Noon": { "name": "Noon", "price": 854.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
            //         "Carrefour": { "name": "Carrefour", "price": 877.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
            //         "Shein": { "name": "Shein", "price": 822.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
            //         "Namshi": { "name": "Namshi", "price": 790.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
            //         "Alibaba": { "name": "Alibaba", "price": 944.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
            //         "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 866.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
            //         "Walmart": { "name": "Walmart", "price": 919.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Trendyol": { "name": "Trendyol", "price": 789.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
            //     },
            //     "retailer": [
            //         { "name": "Amazon", "price": 899.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Noon", "price": 854.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
            //         { "name": "Carrefour", "price": 877.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },

            //         { "name": "Shein", "price": 822.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },

            //         { "name": "Namshi", "price": 790.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
            //         { "name": "Alibaba", "price": 944.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },

            //         { "name": "Lulu Hypermarket", "price": 866.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },

            //         { "name": "Walmart", "price": 919.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Trendyol", "price": 789.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
            //     ]
            // },
            // {
            //     "name": "Guilty Absolute Pour Perfume",
            //     "url": "https://m.media-amazon.com/images/I/31EJGmqovwL._SX300_SY300_QL70_FMwebp_.jpg",
            //     "Brand": "Travelon",
            //     "Country": "USA",
            //     "category": "perfume",
            //     "my_price": 53.00,
            //     "cost": 35.00,
            //     "net_margin": 18,
            //     "about": [
            //         "Sauvage by Christian Dior for Men 6.8 oz Eau de Toilette Spray",
            //         "Sauvage by Christian Dior for Men",
            //         "6.8 oz Eau de Toilette Spray",
            //         "Christian Dior"
            //     ],
            //     "retailers": {
            //         "Amazon": { "name": "Amazon", "price": 59.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Noon": { "name": "Noon", "price": 54.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
            //         "Carrefour": { "name": "Carrefour", "price": 57.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
            //         "Shein": { "name": "Shein", "price": 52.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
            //         "Namshi": { "name": "Namshi", "price": 49.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
            //         "Alibaba": { "name": "Alibaba", "price": 64.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
            //         "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 56.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
            //         "Walmart": { "name": "Walmart", "price": 61.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Trendyol": { "name": "Trendyol", "price": 48.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
            //     },
            //     "retailer": [
            //         { "name": "Amazon", "price": 59.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Noon", "price": 54.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },

            //         { "name": "Carrefour", "price": 57.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },

            //         { "name": "Shein", "price": 52.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },

            //         { "name": "Namshi", "price": 49.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },

            //         { "name": "Alibaba", "price": 64.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },

            //         { "name": "Lulu Hypermarket", "price": 56.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },

            //         { "name": "Walmart", "price": 61.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Trendyol", "price": 48.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }

            //     ]
            // },
            // {
            //     "name": "Pullover Hoodie",
            //     "url": "https://m.media-amazon.com/images/I/715fbUI3T5L._AC_SX522_.jpg",
            //     "Brand": "Tommy Hilfiger",
            //     "Country": "UAE",
            //     "category": "cloths",
            //     "my_price": 55.00,
            //     "cost": 40.00,
            //     "net_margin": 15,
            //     "about": [
            //         "Midweight pique fabric feels super-soft up against your skin.",
            //         "KEEPS YOU COMFORTABLE - X-Temp technology is designed to keep you cool and dry, no matter what the day brings.",
            //         "ODOR CONTROL - FreshIQ advanced odor protection technology attacks the odor-causing bacteria in your clothing.",
            //         "STAY-FLAT COLLAR - Classic polo style featuring a ribbed stay-flat collar.",
            //         "FRONT BUTTON PLACKET – Men’s shirts are accented with a tailored 3-button placket"
            //     ],
            //     "retailers": {
            //         "Amazon": { "name": "Amazon", "price": 69.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Noon": { "name": "Noon", "price": 64.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
            //         "Carrefour": { "name": "Carrefour", "price": 67.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
            //         "Shein": { "name": "Shein", "price": 62.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
            //         "Namshi": { "name": "Namshi", "price": 59.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
            //         "Alibaba": { "name": "Alibaba", "price": 74.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
            //         "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 66.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
            //         "Walmart": { "name": "Walmart", "price": 71.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Trendyol": { "name": "Trendyol", "price": 58.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
            //     },
            //     "retailer": [
            //         { "name": "Amazon", "price": 69.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Noon", "price": 64.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },

            //         { "name": "Carrefour", "price": 67.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },

            //         { "name": "Shein", "price": 62.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },

            //         { "name": "Namshi", "price": 59.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },

            //         { "name": "Alibaba", "price": 74.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },

            //         { "name": "Lulu Hypermarket", "price": 66.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },

            //         { "name": "Walmart", "price": 71.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Trendyol", "price": 58.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }

            //     ]
            // },
            // {
            //     "name": "Bolt Running Shoes for Men",
            //     "url": "https://m.media-amazon.com/images/I/61ru71hobuL._AC_SY500_.jpg",
            //     "Brand": "Bata",
            //     "Country": "UAE",
            //     "category": "shoes",
            //     "my_price": 56.00,
            //     "cost": 50.00,
            //     "net_margin": 6,
            //     "about": [
            //         "Lightweight, breathable mesh upper",
            //         "Enhanced cushioning around ankle collar for superior comfort",
            //         "Cushioned EVA midsole delivers a lightweight & responsive ride",
            //         "Strategically placed rubber pods on outsole for durability with less weight",
            //         "Offset: 8mm",
            //         "Weight: 9 oz."
            //     ],
            //     "retailers": {
            //         "Amazon": { "name": "Amazon", "price": 79.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Noon": { "name": "Noon", "price": 74.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
            //         "Carrefour": { "name": "Carrefour", "price": 77.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
            //         "Shein": { "name": "Shein", "price": 72.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
            //         "Namshi": { "name": "Namshi", "price": 69.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
            //         "Alibaba": { "name": "Alibaba", "price": 84.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
            //         "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 76.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
            //         "Walmart": { "name": "Walmart", "price": 81.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Trendyol": { "name": "Trendyol", "price": 68.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
            //     },
            //     "retailer": [
            //         { "name": "Amazon", "price": 79.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
            //         { "name": "Noon", "price": 74.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
            //         { "name": "Carrefour", "price": 77.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
            //         { "name": "Shein", "price": 72.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
            //         { "name": "Namshi", "price": 69.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
            //         { "name": "Alibaba", "price": 84.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
            //         { "name": "Lulu Hypermarket", "price": 76.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
            //         { "name": "Walmart", "price": 81.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
            //         { "name": "Trendyol", "price": 68.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
            //     ]
            // },
            // {
            //     "name": "Backpack",
            //     "url": "https://m.media-amazon.com/images/I/918Oo+pbysL._AC_SX425_.jpg",
            //     "Brand": "Fragrance World Store",
            //     "Country": "UAE",
            //     "category": "bags",
            //     "my_price": 40.00,
            //     "cost": 34.00,
            //     "net_margin": 6,
            //     "about": [
            //         "Checkpoint Friendly Laptop Backpack opens up 180 degrees",
            //         "Water-resistant weather cover protects against dust, rain, or snow",
            //         'External dimensions 14.96 x 8.27 x 21.26 inches (38 x 21 x 54 cm).Dedicated ultra-soft padded laptop compartment accommodates up to 18.4" laptops',
            //         "Dedicated soft fine-felt lined iPad/Kindle/Tablet pocket."
            //     ],
            //     "retailers": {
            //         "Amazon": { "name": "Amazon", "price": 34.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Noon": { "name": "Noon", "price": 29.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
            //         "Carrefour": { "name": "Carrefour", "price": 32.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
            //         "Shein": { "name": "Shein", "price": 27.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
            //         "Namshi": { "name": "Namshi", "price": 24.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
            //         "Alibaba": { "name": "Alibaba", "price": 39.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
            //         "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 31.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
            //         "Walmart": { "name": "Walmart", "price": 36.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Trendyol": { "name": "Trendyol", "price": 23.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
            //     },
            //     "retailer": [
            //         { "name": "Amazon", "price": 34.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Noon", "price": 29.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },

            //         { "name": "Carrefour", "price": 32.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },

            //         { "name": "Shein", "price": 27.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },

            //         { "name": "Namshi", "price": 24.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },

            //         { "name": "Alibaba", "price": 39.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },

            //         { "name": "Lulu Hypermarket", "price": 31.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },

            //         { "name": "Walmart", "price": 36.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Trendyol", "price": 23.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }

            //     ]
            // },
            // {
            //     "name": "Carolina Herrera Herrera For Men",
            //     "url": "https://m.media-amazon.com/images/I/51A9jWM10EL._SX569_.jpg",
            //     "Brand": "Carolina Herrera",
            //     "Country": "UAE",
            //     "category": "Perfume",
            //     "my_price": 72.00,
            //     "cost": 50.00,
            //     "net_margin": 22,
            //     "about": [
            //         "Lemon, black currant, apple, bergamot, birch, pinapple, rose and jasmine.",
            //         "It is long lasting fragrance.",
            //         "Keeps you refreshing all day.",
            //         "It’s a recommended for casual wear"
            //     ],
            //     "retailers": {
            //         "Amazon": { "name": "Amazon", "price": 79.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Noon": { "name": "Noon", "price": 74.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
            //         "Carrefour": { "name": "Carrefour", "price": 77.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
            //         "Shein": { "name": "Shein", "price": 72.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
            //         "Namshi": { "name": "Namshi", "price": 69.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
            //         "Alibaba": { "name": "Alibaba", "price": 84.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
            //         "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 76.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
            //         "Walmart": { "name": "Walmart", "price": 81.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Trendyol": { "name": "Trendyol", "price": 68.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
            //     },
            //     "retailer": [
            //         { "name": "Amazon", "price": 79.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Noon", "price": 74.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },

            //         { "name": "Carrefour", "price": 77.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },

            //         { "name": "Shein", "price": 72.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },

            //         { "name": "Namshi", "price": 69.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },

            //         { "name": "Alibaba", "price": 84.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },

            //         { "name": "Lulu Hypermarket", "price": 76.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },

            //         { "name": "Walmart", "price": 81.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Trendyol", "price": 68.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }

            //     ]
            // },
            // {
            //     "name": "Tee for Men",
            //     "url": "https://m.media-amazon.com/images/I/61UwlFl22HL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            //     "Brand": "Athletic Store",
            //     "category": "cloths",
            //     "Country": "UK",
            //     "my_price": 40.00,
            //     "cost": 34.00,
            //     "net_margin": 16,
            //     "about": [
            //         "Our classic crewneck pocket tee is made of 100% heavyweight, soft jersey-knit cotton. Extra-strong taped shoulder & neck seams for added durability. ",
            //         "This 100% preshrunk cotton shirt features a traditional chest pocket with pencil divider & a spacious fit with a long tail for all kinds of work activity.",
            //         "Fans tell us our sturdy, tagless t-shirts are the ones by which all others should be measured."
            //     ],
            //     "retailers": {
            //         "Amazon": { "name": "Amazon", "price": 29.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Noon": { "name": "Noon", "price": 24.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
            //         "Carrefour": { "name": "Carrefour", "price": 27.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
            //         "Shein": { "name": "Shein", "price": 22.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
            //         "Namshi": { "name": "Namshi", "price": 19.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
            //         "Alibaba": { "name": "Alibaba", "price": 34.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
            //         "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 26.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
            //         "Walmart": { "name": "Walmart", "price": 31.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Trendyol": { "name": "Trendyol", "price": 18.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
            //     },
            //     "retailer": [
            //         { "name": "Amazon", "price": 29.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Noon", "price": 24.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },

            //         { "name": "Carrefour", "price": 27.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },

            //         { "name": "Shein", "price": 22.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },

            //         { "name": "Namshi", "price": 19.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },

            //         { "name": "Alibaba", "price": 34.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },

            //         { "name": "Lulu Hypermarket", "price": 26.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },

            //         { "name": "Walmart", "price": 31.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Trendyol", "price": 18.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }

            //     ]
            // },
            // {
            //     "name": "Legendary Whitetails Men's Buck Camp",
            //     "url": "https://m.media-amazon.com/images/I/818b3hI8d9L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            //     "Brand": "Whitetails Store",
            //     "category": "cloths",
            //     "Country": "UK",
            //     "my_price": 50.00,
            //     "cost": 44.00,
            //     "net_margin": 6,
            //     "about": [
            //         "Soft, breathable cotton",
            //         "Moisture wicking technology keeps you cool and dry",
            //         "Tag-free to prevent irritation"
            //     ],
            //     "retailers": {
            //         "Amazon": { "name": "Amazon", "price": 49.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Noon": { "name": "Noon", "price": 44.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
            //         "Carrefour": { "name": "Carrefour", "price": 47.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
            //         "Shein": { "name": "Shein", "price": 42.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
            //         "Namshi": { "name": "Namshi", "price": 39.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
            //         "Alibaba": { "name": "Alibaba", "price": 54.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
            //         "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 46.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
            //         "Walmart": { "name": "Walmart", "price": 51.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Trendyol": { "name": "Trendyol", "price": 38.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
            //     },
            //     "retailer": [
            //         { "name": "Amazon", "price": 49.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Noon", "price": 44.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },

            //         { "name": "Carrefour", "price": 47.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },

            //         { "name": "Shein", "price": 42.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },

            //         { "name": "Namshi", "price": 39.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },

            //         { "name": "Alibaba", "price": 54.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },

            //         { "name": "Lulu Hypermarket", "price": 46.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },

            //         { "name": "Walmart", "price": 51.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Trendyol", "price": 38.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }

            //     ]
            // },
            // {
            //     "name": "Google Pixel 7a",
            //     "url": "https://m.media-amazon.com/images/I/61r7cCpQPlL._AC_SX569_.jpg",
            //     "Brand": "Google Store",
            //     "Country": "USA",
            //     "category": "mobile phone",
            //     "my_price": 150.00,
            //     "cost": 120.00,
            //     "net_margin": 30,
            //     "about": [
            //         "Security Features: Pixel 7a has a 6.1-inch OLED display with 1080p video capture and a 64MP rear camera that performs well in low light. It also has a biometric fingerprint sensor for quick unlocking.",
            //         "Wireless Connectivity: Pixel 7a supports NFC, Wi-Fi, USB, and Bluetooth for easy connectivity to other devices.",
            //         "Water Resistant Design: Pixel 7a has a water-resistant design that allows you to use it even in rainy or wet conditions."
            //     ],
            //     "retailers": {
            //         "Amazon": { "name": "Amazon", "price": 299.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Noon": { "name": "Noon", "price": 294.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
            //         "Carrefour": { "name": "Carrefour", "price": 297.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
            //         "Shein": { "name": "Shein", "price": 292.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
            //         "Namshi": { "name": "Namshi", "price": 289.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
            //         "Alibaba": { "name": "Alibaba", "price": 304.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
            //         "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 296.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
            //         "Walmart": { "name": "Walmart", "price": 301.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Trendyol": { "name": "Trendyol", "price": 288.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
            //     },
            //     "retailer": [
            //         { "name": "Amazon", "price": 299.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Noon", "price": 294.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },

            //         { "name": "Carrefour", "price": 297.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },

            //         { "name": "Shein", "price": 292.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },

            //         { "name": "Namshi", "price": 289.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },

            //         { "name": "Alibaba", "price": 304.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },

            //         { "name": "Lulu Hypermarket", "price": 296.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },

            //         { "name": "Walmart", "price": 301.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Trendyol", "price": 288.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }

            //     ]
            // },
            // {
            //     "name": "Motorola Moto G Stylus",
            //     "url": "https://m.media-amazon.com/images/I/617FLls4p0L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            //     "Brand": "Motorola Moto G Stylus ",
            //     "category": "mobile phone",
            //     "Country": "UAE",
            //     "my_price": 130.00,
            //     "cost": 120.00,
            //     "net_margin": 10,
            //     "about": [
            //         "Compatible with 4G ONLY - ATandT, ATandT Prepaid, Consumer Cellular, Cricket, Google Fi, H2O Wireless, MetroPCS, Mint Mobile, Net10, Simple Mobile, T-Mobile, Ting Mobile, Total Wireless, Tracfone, Verizon",
            //         "Built-in stylus. Jot notes, edit photos, sketch artwork, and navigate effortlessly with pinpoint precision.",
            //         "50MP camera system. Capture sharp and bright photos even in the most challenging light with Quad Pixel technology."
            //     ],
            //     "retailers": {
            //         "Amazon": { "name": "Amazon", "price": 1099.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Noon": { "name": "Noon", "price": 1094.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
            //         "Carrefour": { "name": "Carrefour", "price": 1097.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
            //         "Shein": { "name": "Shein", "price": 1092.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
            //         "Namshi": { "name": "Namshi", "price": 1089.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
            //         "Alibaba": { "name": "Alibaba", "price": 1104.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
            //         "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 1096.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
            //         "Walmart": { "name": "Walmart", "price": 1101.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
            //         "Trendyol": { "name": "Trendyol", "price": 1088.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
            //     },
            //     "retailer": [
            //         { "name": "Amazon", "price": 1099.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Noon", "price": 1094.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },

            //         { "name": "Carrefour", "price": 1097.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },

            //         { "name": "Shein", "price": 1092.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },

            //         { "name": "Namshi", "price": 1089.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },

            //         { "name": "Alibaba", "price": 1104.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },

            //         { "name": "Lulu Hypermarket", "price": 1096.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },

            //         { "name": "Walmart", "price": 1101.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },

            //         { "name": "Trendyol", "price": 1088.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }

            //     ]
            // }
        ]
    )


    let [check , setCheck] = useState( {
        "name": "Electornics",
        "Amazon": {
            "stock_availability": "80%",
            "stock_value": "1330",
            "stockStatus": "Instock",
            "color": "#008428"
        },
        "Noon": {
            "stock_availability": "60%",
            "stock_value": "1200",
            "stockStatus": "Out of stock ",
            "color": "#ff0000 "
        },
        "Lulu Hypermarket": {
            "stock_availability": "75%",
            "stock_value": "1280",
            "stockStatus": "Instock",
            "color": "#ff9300 "
        },
        "Shein": {
            "stock_availability": "90%",
            "stock_value": "1400",
            "stockStatus": "Instock",
            "color": "#008428"
        },
        "Carrefour": {
            "stock_availability": "85%",
            "stock_value": "1350",
            "stockStatus": "Instock",
            "color": "#008428"
        },
        "Alibaba": {
            "stock_availability": "95%",
            "stock_value": "1500",
            "stockStatus": "Instock",
            "color": "#008428"
        },
        "Walmart": {
            "stock_availability": "70%",
            "stock_value": "1250",
            "stockStatus": "Out of stock",
            "color": "#ff0000 "
        },
        "Trendyol": {
            "stock_availability": "65%",
            "stock_value": "1230",
            "stockStatus": "Instock",
            "color": "#ff9300 "
        },
        "Namshi": {
            "stock_availability": "80%",
            "stock_value": "1300",
            "stockStatus": "Instock",
            "color": "#008428"
        },
        "SKUs": "MP351",
        "Market": "USA"
    })

    let [categoryData , setCategoryData] = useState( [
        {
            "name": "Mobile phones",
            "products" : [
                {
                    "name": "Motorola Moto G Stylus",
                    "url": "https://m.media-amazon.com/images/I/617FLls4p0L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
                    "Brand": "Motorola Moto G Stylus ",
                    "category": "Mobile phones",
                    "Country": "UAE",
                    "my_price": 1129.00,
                    "cost": 120.00,
                    "net_margin": 10,
                    "about": [
                        "Compatible with 4G ONLY - ATandT, ATandT Prepaid, Consumer Cellular, Cricket, Google Fi, H2O Wireless, MetroPCS, Mint Mobile, Net10, Simple Mobile, T-Mobile, Ting Mobile, Total Wireless, Tracfone, Verizon",
                        "Built-in stylus. Jot notes, edit photos, sketch artwork, and navigate effortlessly with pinpoint precision.",
                        "50MP camera system. Capture sharp and bright photos even in the most challenging light with Quad Pixel technology."
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 1099.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 1094.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 1097.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 1092.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 1089.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 1104.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 1096.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 1101.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 1088.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 1099.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Noon", "price": 1094.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
    
                        { "name": "Carrefour", "price": 1097.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
    
                        { "name": "Shein", "price": 1092.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
    
                        { "name": "Namshi", "price": 1089.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
    
                        { "name": "Alibaba", "price": 1104.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
    
                        { "name": "Lulu Hypermarket", "price": 1096.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
    
                        { "name": "Walmart", "price": 1101.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Trendyol", "price": 1088.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
    
                    ]
                },
                {
                    "name": "Google Pixel 7a",
                    "url": "https://m.media-amazon.com/images/I/61r7cCpQPlL._AC_SX569_.jpg",
                    "Brand": "Google Store",
                    "Country": "USA",
                    "category": "Mobile phones",
                    "my_price": 150.00,
                    "cost": 120.00,
                    "net_margin": 30,
                    "about": [
                        "Security Features: Pixel 7a has a 6.1-inch OLED display with 1080p video capture and a 64MP rear camera that performs well in low light. It also has a biometric fingerprint sensor for quick unlocking.",
                        "Wireless Connectivity: Pixel 7a supports NFC, Wi-Fi, USB, and Bluetooth for easy connectivity to other devices.",
                        "Water Resistant Design: Pixel 7a has a water-resistant design that allows you to use it even in rainy or wet conditions."
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 299.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 294.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 297.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 292.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 289.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 304.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 296.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 301.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 288.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 299.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Noon", "price": 294.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
    
                        { "name": "Carrefour", "price": 297.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
    
                        { "name": "Shein", "price": 292.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
    
                        { "name": "Namshi", "price": 289.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
    
                        { "name": "Alibaba", "price": 304.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
    
                        { "name": "Lulu Hypermarket", "price": 296.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
    
                        { "name": "Walmart", "price": 301.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Trendyol", "price": 288.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
    
                    ]
                },
                {
                    "name": "SAMSUNG Galaxy Note 10 Plus",
                    "url": "https://m.media-amazon.com/images/I/51NHRW+Nh0L._AC_SY300_SX300_.jpg",
                    "Brand": "Samsung",
                    "category": "Mobile phones",
                    "Country": "UAE",
                    "my_price": 703.00,
                    "cost": 650.00,
                    "net_margin": 53,
                    "about": [
                        "Infinity-O view",
                        "256 GB, 12 GB of RAM, Qualcomm SDM855 Snapdragon 855, Octa-Core, Adren 640, 4300 mAh battery",
                        "Rear camera: 12 MP + 12 MP + 16 MP + 0.3 MP, front camera: 10 MP, video: 4 k uhd",
                        "2G: GSM 850/900/1800/1900, 3G: HSDPA 850/900/1700 (AWS)/1900/2100, 4G: LTE 1/2/3/4/5/7/8/12/12/14/18/18/ 20/28/29/30/3. 8/39 // 40/41/46/66, 5g: 5/71/260/261 NSA/SINGLE SIM SIM (US 5G, Global 4G)",
                        "5G of USA. UU., Decontinated. Global 4G LTE, US 5G bands only. It will work with most Sim GSM cards in the USA., Including AT&T, T-Mobile, etc. It does not work with CDMA carriers such as Verizon, Sprint, Boost."
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 899.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 854.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 877.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 822.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 790.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 944.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 866.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 919.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 789.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 899.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Noon", "price": 854.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        { "name": "Carrefour", "price": 877.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
    
                        { "name": "Shein", "price": 822.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
    
                        { "name": "Namshi", "price": 790.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        { "name": "Alibaba", "price": 944.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
    
                        { "name": "Lulu Hypermarket", "price": 866.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
    
                        { "name": "Walmart", "price": 919.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Trendyol", "price": 789.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    ]
                },
                {
                    "name": "New Apple IPhone 13 Pro Max",
                    "url": "https://m.media-amazon.com/images/I/51UuPZLMaCL._AC_UY218_.jpg",
                    "Brand": "Apple",
                    "Country": "USA",
                    "my_price": 340.00,
                    "cost": 41.00,
                    "net_margin": 2.38,
                    "category": "Mobile phones",
                    "about": [
                        "6.1'' Super Retina XDR display with ProMotion. 5G Superfast downloads, high-quality streaming",
                        "Cinematic mode in 1080p at 30 fps. Dolby Vision HDR video recording up to 4K at 60 fps. 6X Optical zoom range",
                        "A15 Bionic chip. New 6-core CPU with 2 performance and 4 efficiency cores. New 5-core GPU. New 16-core Neural Engine"
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 41.43, "stock": "Out of stock", "color": "#ff0000", "price_match": 30, "net_match": 19, "discount": 10 },
                        "Noon": { "name": "Noon", "price": 48.93, "stock": "Instock", "color": "#ffaa00", "price_match": 20, "net_match": 13, "discount": 20 },
                        "Carrefour": { "name": "Carrefour", "price": 50.03, "stock": "Instock", "color": "#ffaa00", "price_match": 14, "net_match": 22, "discount": 25 },
                        "Shein": { "name": "Shein", "price": 37.45, "stock": "Instock", "color": "#ffaa00", "price_match": 10, "net_match": 25, "discount": false },
                        "Namshi": { "name": "Namshi", "price": 36.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 30, "net_match": 20, "discount": 19 },
                        "Alibaba": { "name": "Alibaba", "price": 56.05, "stock": "Instock", "color": "#01821b", "price_match": 40, "net_match": 30, "discount": false },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 42.00, "stock": "Instock", "color": "#01821b", "price_match": 22, "net_match": 30, "discount": 10 },
                        "Walmart": { "name": "Walmart", "price": 49.00, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": false },
                        "Trendyol": { "name": "Trendyol", "price": 34.00, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 25, "discount": 15 },
    
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 41.43, "stock": "Out of stock", "color": "#ff0000", "price_match": 30, "net_match": 19, "discount": 10 },
                        { "name": "Noon", "price": 48.93, "stock": "Instock", "color": "#ffaa00", "price_match": 20, "net_match": 13, "discount": 20 },
                        { "name": "Carrefour", "price": 50.03, "stock": "Instock", "color": "#ffaa00", "price_match": 14, "net_match": 22, "discount": 25 },
                        { "name": "Shein", "price": 37.45, "stock": "Instock", "color": "#ffaa00", "price_match": 10, "net_match": 25, "discount": false },
                        { "name": "Namshi", "price": 36.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 30, "net_match": 20, "discount": 19 },
                        { "name": "Alibaba", "price": 56.05, "stock": "Instock", "color": "#01821b", "price_match": 40, "net_match": 30, "discount": false },
                        { "name": "Lulu Hypermarket", "price": 42.00, "stock": "Instock", "color": "#01821b", "price_match": 22, "net_match": 30, "discount": 10 },
                        { "name": "Walmart", "price": 49.00, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": false },
                        { "name": "Trendyol", "price": 34.00, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 25, "discount": 15 },
                    ]
    
                },
                {
                    "name": "Redmi Note 13 pro",
                    "url": "https://m.media-amazon.com/images/I/41GK+ItincL._AC_SX569_.jpg",
                    "Brand": "Apple",
                    "Country": "USA",
                    "my_price": 250.00,
                    "cost": 41.00,
                    "net_margin": 2.38,
                    "category": "Mobile phones",
                    "about": [
                        "6.1'' Super Retina XDR display with ProMotion. 5G Superfast downloads, high-quality streaming",
                        "Cinematic mode in 1080p at 30 fps. Dolby Vision HDR video recording up to 4K at 60 fps. 6X Optical zoom range",
                        "A15 Bionic chip. New 6-core CPU with 2 performance and 4 efficiency cores. New 5-core GPU. New 16-core Neural Engine"
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 240.43, "stock": "Out of stock", "color": "#ff0000", "price_match": 30, "net_match": 19, "discount": 10 },
                        "Noon": { "name": "Noon", "price": 150.93, "stock": "Instock", "color": "#ffaa00", "price_match": 20, "net_match": 13, "discount": 20 },
                        "Carrefour": { "name": "Carrefour", "price": 260.03, "stock": "Instock", "color": "#ffaa00", "price_match": 14, "net_match": 22, "discount": 25 },
                        "Shein": { "name": "Shein", "price": 256.45, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 25, "discount": false },
                        "Namshi": { "name": "Namshi", "price": 229.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 30, "net_match": 20, "discount": 19 },
                        "Alibaba": { "name": "Alibaba", "price": 270.05, "stock": "Instock", "color": "#ffaa00", "price_match": 40, "net_match": 30, "discount": false },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 264.00, "stock": "Instock", "color": "#01821b", "price_match": 22, "net_match": 30, "discount": 10 },
                        "Walmart": { "name": "Walmart", "price": 295.00, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": false },
                        "Trendyol": { "name": "Trendyol", "price": 278.00, "stock": "Instock", "color": "#ffaa00", "price_match": 20, "net_match": 25, "discount": 15 },
    
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 41.43, "stock": "Out of stock", "color": "#ff0000", "price_match": 30, "net_match": 19, "discount": 10 },
                        { "name": "Noon", "price": 48.93, "stock": "Instock", "color": "#ffaa00", "price_match": 20, "net_match": 13, "discount": 20 },
                        { "name": "Carrefour", "price": 50.03, "stock": "Instock", "color": "#ffaa00", "price_match": 14, "net_match": 22, "discount": 25 },
                        { "name": "Shein", "price": 37.45, "stock": "Instock", "color": "#ffaa00", "price_match": 10, "net_match": 25, "discount": false },
                        { "name": "Namshi", "price": 36.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 30, "net_match": 20, "discount": 19 },
                        { "name": "Alibaba", "price": 56.05, "stock": "Instock", "color": "#01821b", "price_match": 40, "net_match": 30, "discount": false },
                        { "name": "Lulu Hypermarket", "price": 42.00, "stock": "Instock", "color": "#01821b", "price_match": 22, "net_match": 30, "discount": 10 },
                        { "name": "Walmart", "price": 49.00, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": false },
                        { "name": "Trendyol", "price": 34.00, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 25, "discount": 15 },
                    ]
    
                },
            ],
            "Amazon": {
                "stock_availability": "80%",
                "stock_value": "1330",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Noon": {
                "stock_availability": "40%",
                "stock_value": "1200",
                "stockStatus": "Out of stock ",
                "color": "#ff0000 "
            },
            "Lulu Hypermarket": {
                "stock_availability": "75%",
                "stock_value": "1280",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Shein": {
                "stock_availability": "90%",
                "stock_value": "1400",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Carrefour": {
                "stock_availability": "85%",
                "stock_value": "1350",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Alibaba": {
                "stock_availability": "95%",
                "stock_value": "1500",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Walmart": {
                "stock_availability": "45%",
                "stock_value": "1250",
                "stockStatus": "Out of stock",
                "color": "#ff0000 "
            },
            "Trendyol": {
                "stock_availability": "55%",
                "stock_value": "1230",
                "stockStatus": "Instock",
                "color": "#ff9300 "
            },
            "Namshi": {
                "stock_availability": "80%",
                "stock_value": "1300",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "SKUs": "MP351",
            "Market": "USA"
        },
        {
            "name": "Perfumes ",
            "products" : [
                {
                    "name": "Carolina Herrera Herrera For Men",
                    "url": "https://m.media-amazon.com/images/I/51A9jWM10EL._SX569_.jpg",
                    "Brand": "Carolina Herrera",
                    "Country": "UAE",
                    "category": "Perfume",
                    "my_price": 72.00,
                    "cost": 50.00,
                    "net_margin": 22,
                    "about": [
                        "Lemon, black currant, apple, bergamot, birch, pinapple, rose and jasmine.",
                        "It is long lasting fragrance.",
                        "Keeps you refreshing all day.",
                        "It’s a recommended for casual wear"
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 79.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 74.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 77.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 72.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 69.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 84.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 76.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 81.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 68.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 79.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Noon", "price": 74.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
    
                        { "name": "Carrefour", "price": 77.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
    
                        { "name": "Shein", "price": 72.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
    
                        { "name": "Namshi", "price": 69.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
    
                        { "name": "Alibaba", "price": 84.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
    
                        { "name": "Lulu Hypermarket", "price": 76.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
    
                        { "name": "Walmart", "price": 81.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Trendyol", "price": 68.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
    
                    ]
                },
                {
                    "name": "Guilty Absolute Pour Perfume",
                    "url": "https://m.media-amazon.com/images/I/31EJGmqovwL._SX300_SY300_QL70_FMwebp_.jpg",
                    "Brand": "Travelon",
                    "Country": "USA",
                    "category": "Perfume",
                    "my_price": 53.00,
                    "cost": 35.00,
                    "net_margin": 18,
                    "about": [
                        "Sauvage by Christian Dior for Men 6.8 oz Eau de Toilette Spray",
                        "Sauvage by Christian Dior for Men",
                        "6.8 oz Eau de Toilette Spray",
                        "Christian Dior"
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 59.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 54.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 57.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 52.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 49.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 64.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 56.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 61.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 48.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 59.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Noon", "price": 54.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
    
                        { "name": "Carrefour", "price": 57.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
    
                        { "name": "Shein", "price": 52.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
    
                        { "name": "Namshi", "price": 49.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
    
                        { "name": "Alibaba", "price": 64.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
    
                        { "name": "Lulu Hypermarket", "price": 56.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
    
                        { "name": "Walmart", "price": 61.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Trendyol", "price": 48.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
    
                    ]
                },
                {
                    "name": "Dior Homme Sport Eau De Toilette",
                    "url": "https://m.media-amazon.com/images/I/51pqd2twwGL._SX569_.jpg",
                    "Brand": "Armani",
                    "Country": "UAE",
                    "my_price": 399.99,
                    "cost": 320.99,
                    "net_margin": 79,
                    "category": "Perfume",
                    "about": [
                        "Our Tampa Bay Buccaneers Adult Pullover Hooded Sweatshirt for Men and Women is our signature midweight pullover fleece hoodie featuring a printed graphic",
                        "Fire The Cannons! This Buccaneers Hoodie will stand out for casual wear, tailgates and gamedays. The Junk Food Clothing x NFL Collection brings a hint of that vintage vibe that runs deep through NFL franchises.",
                        "This Buccaneers Hoodie features a big, full-color print that gives it a super soft hand feel and will last for years to come"
                    ],
    
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 40.43, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 22, "discount": 15 },
                        "Carrefour": { "name": "Carrefour", "price": 30.65, "stock": "Instock", "color": "#ffaa00", "price_match": 10, "net_match": 12, "discount": 5 },
    
                        "Shein": { "name": "Shein", "price": 37.45, "stock": "Out of stock", "color": "#ff0000", "price_match": 10, "net_match": 12, "discount": false },
    
                        "Namshi": { "name": "Namshi", "price": 36.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 10, "net_match": 12, "discount": false },
    
                        "Alibaba": { "name": "Alibaba", "price": 30.99, "stock": "Instock", "color": "#01821", "price_match": 14, "net_match": 15, "discount": 10 },
    
                        "Noon": { "name": "Noon", "price": 29.22, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 25, "discount": 15 },
    
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 35.99, "stock": "Instock", "color": "#ffaa00", "price_match": 10, "net_match": 14, "discount": 10 },
    
                        "Trendyol": { "name": "Trendyol", "price": 20.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 10, "net_match": 14, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 40.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": false },
    
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 40.43, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 22, "discount": 15 },
                        { "name": "Carrefour", "price": 30.65, "stock": "Instock", "color": "#ffaa00", "price_match": 10, "net_match": 12, "discount": 5 },
    
                        { "name": "Shein", "price": 37.45, "stock": "Out of stock", "color": "#ff0000", "price_match": 10, "net_match": 12, "discount": false },
    
                        { "name": "Namshi", "price": 36.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 10, "net_match": 12, "discount": false },
    
                        { "name": "Alibaba", "price": 30.99, "stock": "Instock", "color": "#01821", "price_match": 14, "net_match": 15, "discount": 10 },
    
                        { "name": "Noon", "price": 29.22, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 25, "discount": 15 },
    
                        { "name": "Lulu Hypermarket", "price": 35.99, "stock": "Instock", "color": "#ffaa00", "price_match": 10, "net_match": 14, "discount": 10 },
    
                        { "name": "Trendyol", "price": 20.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 10, "net_match": 14, "discount": false },
                        { "name": "Walmart", "price": 40.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": false },
                    ]
                },
            ],
            "Amazon": {
                "stock_availability": "70%",
                "stock_value": "1190",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Noon": {
                "stock_availability": "50%",
                "stock_value": "1100",
                "stockStatus": "Instock",
                "color": "#ff9300"
            },
            "Lulu Hypermarket": {
                "stock_availability": "65%",
                "stock_value": "1150",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Shein": {
                "stock_availability": "80%",
                "stock_value": "1250",
                "stockStatus": "Instock",
                "color": "#008428 "
            },
            "Carrefour": {
                "stock_availability": "48%",
                "stock_value": "1200",
                "stockStatus": "Out of stock",
                "color": "#ff0000 "
            },
            "Alibaba": {
                "stock_availability": "85%",
                "stock_value": "1300",
                "stockStatus": "Instock",
                "color": "#008428 "
            },
            "Walmart": {
                "stock_availability": "50%",
                "stock_value": "1050",
                "stockStatus": "Instock",
                "color": "#ff9300"
            },
            "Trendyol": {
                "stock_availability": "55%",
                "stock_value": "1000",
                "stockStatus": "Instock",
                "color": "#ff9300"
            },
            "Namshi": {
                "stock_availability": "70%",
                "stock_value": "1170",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "SKUs": "P356",
            "Market": "USA"
        },
        {
            "name": "Clothing",
            "products" : [
                {
                    "name": "Legendary Whitetails Men's Buck Camp",
                    "url": "https://m.media-amazon.com/images/I/818b3hI8d9L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
                    "Brand": "Boss",
                    "category": "cloths",
                    "Country": "UK",
                    "my_price": 50.00,
                    "cost": 44.00,
                    "net_margin": 6,
                    "about": [
                        "Soft, breathable cotton",
                        "Moisture wicking technology keeps you cool and dry",
                        "Tag-free to prevent irritation"
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 49.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 44.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 47.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 42.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 39.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 54.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 46.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 51.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 38.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 49.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Noon", "price": 44.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
    
                        { "name": "Carrefour", "price": 47.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
    
                        { "name": "Shein", "price": 42.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
    
                        { "name": "Namshi", "price": 39.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
    
                        { "name": "Alibaba", "price": 54.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
    
                        { "name": "Lulu Hypermarket", "price": 46.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
    
                        { "name": "Walmart", "price": 51.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Trendyol", "price": 38.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
    
                    ]
                },
                {
                    "name": "Tee for Men",
                    "url": "https://m.media-amazon.com/images/I/61UwlFl22HL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
                    "Brand": "Outfitters",
                    "category": "cloths",
                    "Country": "UK",
                    "my_price": 40.00,
                    "cost": 34.00,
                    "net_margin": 16,
                    "about": [
                        "Our classic crewneck pocket tee is made of 100% heavyweight, soft jersey-knit cotton. Extra-strong taped shoulder & neck seams for added durability. ",
                        "This 100% preshrunk cotton shirt features a traditional chest pocket with pencil divider & a spacious fit with a long tail for all kinds of work activity.",
                        "Fans tell us our sturdy, tagless t-shirts are the ones by which all others should be measured."
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 29.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 24.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 27.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 22.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 19.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 34.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 26.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 31.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 18.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 29.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Noon", "price": 24.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
    
                        { "name": "Carrefour", "price": 27.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
    
                        { "name": "Shein", "price": 22.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
    
                        { "name": "Namshi", "price": 19.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
    
                        { "name": "Alibaba", "price": 34.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
    
                        { "name": "Lulu Hypermarket", "price": 26.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
    
                        { "name": "Walmart", "price": 31.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Trendyol", "price": 18.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
    
                    ]
                },
                {
                    "name": "Pullover Hoodie",
                    "url": "https://m.media-amazon.com/images/I/715fbUI3T5L._AC_SX522_.jpg",
                    "Brand": "Boss",
                    "Country": "UAE",
                    "category": "cloths",
                    "my_price": 55.00,
                    "cost": 40.00,
                    "net_margin": 15,
                    "about": [
                        "Midweight pique fabric feels super-soft up against your skin.",
                        "KEEPS YOU COMFORTABLE - X-Temp technology is designed to keep you cool and dry, no matter what the day brings.",
                        "ODOR CONTROL - FreshIQ advanced odor protection technology attacks the odor-causing bacteria in your clothing.",
                        "STAY-FLAT COLLAR - Classic polo style featuring a ribbed stay-flat collar.",
                        "FRONT BUTTON PLACKET – Men’s shirts are accented with a tailored 3-button placket"
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 69.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 64.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 67.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 62.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 59.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 74.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 66.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 71.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 58.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 69.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Noon", "price": 64.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
    
                        { "name": "Carrefour", "price": 67.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
    
                        { "name": "Shein", "price": 62.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
    
                        { "name": "Namshi", "price": 59.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
    
                        { "name": "Alibaba", "price": 74.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
    
                        { "name": "Lulu Hypermarket", "price": 66.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
    
                        { "name": "Walmart", "price": 71.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Trendyol", "price": 58.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
    
                    ]
                },
                {
                    "name": "Legendary Whitetails Journeyman",
                    "url": "https://m.media-amazon.com/images/I/71MDJ2AP+0L._AC_SY500_.jpg",
                    "Brand": "Boss",
                    "Country": "USA",
                    "category": "cloths",
                    "my_price": 79.00,
                    "cost": 70.00,
                    "net_margin": 9,
                    "about": [
                        "For the signature Legendary Whitetails fit, see our size chart which accomodiates Standard and Big & Tall sizes; the Journeyman shirt jacket is designed for extra layering",
                        "Experience the Legendary Whitetails men's jacket quality with a blend of Cotton and Polyester; its rugged waxed cotton suede appearance, softer to the touch, promises durability and is weather-resistant",
                        "Top quality flannel-lined for ultimate warmth, the Legendary Whitetails Journeyman is your shield against cold, transitional jacket for every season",
                        "This Legendary Whitetails men's shirt jacket boasts hand-warmer side pockets and robust double-needle stitching, ensuring durability, while the snap closure ensures a snug fit"
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 39.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 34.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 37.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 32.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 29.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 44.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 36.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 41.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 28.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 39.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Noon", "price": 34.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
    
                        { "name": "Carrefour", "price": 37.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
    
                        { "name": "Shein", "price": 32.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
    
                        { "name": "Namshi", "price": 29.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
    
                        { "name": "Alibaba", "price": 44.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
    
                        { "name": "Lulu Hypermarket", "price": 36.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        { "name": "Walmart", "price": 41.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Trendyol", "price": 28.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
    
                    ]
                },
                {
                    "name": "Calvin Klein Boys' Long Sleeve shirt",
                    "url": "https://m.media-amazon.com/images/I/71grloxzFbL._AC_SX425_.jpg",
                    "Brand": "Boss",
                    "Country": "UAE",
                    "category": "cloths",
                    "my_price": 67.00,
                    "cost": 40.00,
                    "net_margin": 15,
                    "about": [
                        "Midweight pique fabric feels super-soft up against your skin.",
                        "KEEPS YOU COMFORTABLE - X-Temp technology is designed to keep you cool and dry, no matter what the day brings.",
                        "ODOR CONTROL - FreshIQ advanced odor protection technology attacks the odor-causing bacteria in your clothing.",
                        "STAY-FLAT COLLAR - Classic polo style featuring a ribbed stay-flat collar.",
                        "FRONT BUTTON PLACKET – Men’s shirts are accented with a tailored 3-button placket"
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 69.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 64.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 67.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 62.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 59.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 74.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 66.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 71.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 58.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 69.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Noon", "price": 64.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
    
                        { "name": "Carrefour", "price": 67.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
    
                        { "name": "Shein", "price": 62.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
    
                        { "name": "Namshi", "price": 59.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
    
                        { "name": "Alibaba", "price": 74.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
    
                        { "name": "Lulu Hypermarket", "price": 66.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
    
                        { "name": "Walmart", "price": 71.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Trendyol", "price": 58.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
    
                    ]
                },
                {
                    "name": "Stretch Dress Shirt For Mens",
                    "url": "https://m.media-amazon.com/images/I/61hPnmdxmUL._AC_SY500_.jpg",
                    "Brand": "Outfitters",
                    "Country": "UAE",
                    "category": "cloths",
                    "my_price": 59.00,
                    "cost": 46.00,
                    "net_margin": 18,
                    "about": [
                        "Easy Care: machine wash,tumble dry or line dry,low temperature ironing.",
                        "Non Shrinkage and Stretchy:polyester spandex blend fabric has excellent stability,adding 5% spandex to this fabric makes this shirt elastic,95% polyester fiber composition makes the shirt very durable,not easily deformed.",
                        "Wrinkle-Free and Soft:a very soft fabric, like satin silk, with a slight sheen, good touch and appearance,the shirt will keep looking good for a long time after the first ironing.",
                        "Design:slim fit,contrast button,button up,long sleeves,adjustable cuffs,lined cuffs and neckline,elegant and noble colors,formal,stylish,fashion.",
                        "Occasions:wedding,party,prom,dinner,nightclub,christmas,dance,band performance,opera,stage,activity,festival,carnival,school celebration,valentine's day,recommended to wear with a suit,waistcoats,blazer bow tie,suit pants."
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 69.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 64.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 67.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 62.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 59.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 74.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 66.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 71.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 58.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 69.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Noon", "price": 76.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
    
                        { "name": "Carrefour", "price": 67.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
    
                        { "name": "Shein", "price": 59.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
    
                        { "name": "Namshi", "price": 59.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
    
                        { "name": "Alibaba", "price": 58.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
    
                        { "name": "Lulu Hypermarket", "price": 66.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
    
                        { "name": "Walmart", "price": 76.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Trendyol", "price": 67.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
    
                    ]
                },
                {
                    "name": "Men's Regular-Fit Short-Sleeve",
                    "url": "https://m.media-amazon.com/images/I/91VFC6ToTDL._AC_SX466_.jpg",
                    "Brand": "Outfitters",
                    "Country": "UAE",
                    "category": "cloths",
                    "my_price": 78.00,
                    "cost": 46.00,
                    "net_margin": 18,
                    "about": [
                        "100% Cotton",
                        "Imported",
                        "Button closure",
                        "Machine Wash"
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 73.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 78.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 67.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 74.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 59.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 71.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 66.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 58.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 69.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 69.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Noon", "price": 76.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
    
                        { "name": "Carrefour", "price": 67.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
    
                        { "name": "Shein", "price": 59.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
    
                        { "name": "Namshi", "price": 59.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
    
                        { "name": "Alibaba", "price": 58.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
    
                        { "name": "Lulu Hypermarket", "price": 66.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
    
                        { "name": "Walmart", "price": 76.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Trendyol", "price": 67.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
    
                    ]
                },
                {
                    "name": "Mens Dress Shirt Slim Fit",
                    "url": "https://m.media-amazon.com/images/I/81j97131MAL._AC_SY500_.jpg",
                    "Brand": "Outfitters",
                    "Country": "UAE",
                    "category": "cloths",
                    "my_price": 36.00,
                    "cost": 30.00,
                    "net_margin": 15,
                    "about": [
                        "4-way stretch fabric for maximum comfort and movement",
                        "Slim Fit: Modern fit with a tapered body and slimmer sleeves for a sleek look that flatters most body shapes",
                        "Hidden Button-Down Collar: Collar stays perfect thanks to hidden buttons",
                        "Non-Iron Fabric: Resists wrinkles to keep you looking crisp all day; easy care, no ironing necessary",
                        "Quick Dry properties allow for faster drying time"
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 32.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 30.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 45.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 40.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 59.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 41.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 66.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 34.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 37.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 69.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Noon", "price": 76.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
    
                        { "name": "Carrefour", "price": 67.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
    
                        { "name": "Shein", "price": 59.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
    
                        { "name": "Namshi", "price": 59.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
    
                        { "name": "Alibaba", "price": 58.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
    
                        { "name": "Lulu Hypermarket", "price": 66.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
    
                        { "name": "Walmart", "price": 76.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Trendyol", "price": 67.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
    
                    ]
                },
            ] ,
            "Amazon": {
                "stock_availability": "90%",
                "stock_value": "800",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Noon": {
                "stock_availability": "80%",
                "stock_value": "750",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Lulu Hypermarket": {
                "stock_availability": "85%",
                "stock_value": "780",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Shein": {
                "stock_availability": "95%",
                "stock_value": "850",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Carrefour": {
                "stock_availability": "70%",
                "stock_value": "720",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Alibaba": {
                "stock_availability": "55%",
                "stock_value": "770",
                "stockStatus": "Instock",
                "color": "#ff9300 "
            },
            "Walmart": {
                "stock_availability": "43%",
                "stock_value": "700",
                "stockStatus": "Out of stock",
                "color": "#ff0000 "
            },
            "Trendyol": {
                "stock_availability": "55%",
                "stock_value": "680",
                "stockStatus": "Instock",
                "color": "#ff9300"
            },
            "Namshi": {
                "stock_availability": "65%",
                "stock_value": "730",
                "stockStatus": "Instock",
                "color": "#008428 "
            },
            "SKUs": "C255",
            "Market": "USA"
        },
        {
            "name": "Shoes",
            "products" : [
                {
                    "name": "Bolt Running Shoes for Men",
                    "url": "https://m.media-amazon.com/images/I/61ru71hobuL._AC_SY500_.jpg",
                    "Brand": "Bata",
                    "Country": "UAE",
                    "category": "shoes",
                    "my_price": 56.00,
                    "cost": 50.00,
                    "net_margin": 6,
                    "about": [
                        "Lightweight, breathable mesh upper",
                        "Enhanced cushioning around ankle collar for superior comfort",
                        "Cushioned EVA midsole delivers a lightweight & responsive ride",
                        "Strategically placed rubber pods on outsole for durability with less weight",
                        "Offset: 8mm",
                        "Weight: 9 oz."
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 79.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 74.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 77.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 72.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 69.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 84.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 76.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 81.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 68.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 79.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        { "name": "Noon", "price": 74.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        { "name": "Carrefour", "price": 77.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        { "name": "Shein", "price": 72.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        { "name": "Namshi", "price": 69.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        { "name": "Alibaba", "price": 84.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        { "name": "Lulu Hypermarket", "price": 76.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        { "name": "Walmart", "price": 81.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        { "name": "Trendyol", "price": 68.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    ]
                },
                {
                    "name": "Adidas EQ21 Run Shoes",
                    "url": "https://m.media-amazon.com/images/I/71oZWiXGlEL._AC_SX500_.jpg",
                    "Brand": "Adidas",
                    "Country": "UK",
                    "category": "shoes",
                    "my_price": 50.00,
                    "cost": 30.00,
                    "net_margin": 20,
                    "about": [
                        "Men's running shoes for the daily runner",
                        "Regular fit.",
                        "Engineered mesh upper offers breathability; Geofit padded collar for comfort.",
                        "TPU quarter and heel for added stability; Bounce midsole offers flexible comfort; Rubber outsole provides secure traction",
                        "This product is made with recycled content as part of our ambition to end plastic waste; 20% of pieces used to make the upper are made with minimum 50% recycled content."
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 89.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 84.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 87.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 82.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 79.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 94.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 86.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 91.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 78.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 89.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Noon", "price": 84.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
    
                        { "name": "Carrefour", "price": 87.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
    
                        { "name": "Shein", "price": 82.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
    
                        { "name": "Namshi", "price": 79.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
    
                        { "name": "Alibaba", "price": 94.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
    
                        { "name": "Lulu Hypermarket", "price": 86.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
    
                        { "name": "Walmart", "price": 91.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Trendyol", "price": 78.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
    
                    ]
                },
                {
                    "name": "Etnies mens Jameson",
                    "url": "https://m.media-amazon.com/images/I/41ndfhcuwFL._AC_SY500_.jpg",
                    "Brand": "Adidas",
                    "Country": "UK",
                    "category": "shoes",
                    "my_price": 53.00,
                    "cost": 30.00,
                    "net_margin": 20,
                    "about": [
                        "Canvas upper",
                        "Lace up closure",
                        "Recycled Open Cell polyurethane leather Foam Insole",
                        "Recycled Rubber Outsole",
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 51.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 59.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 50.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 52.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 57.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 52.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 59.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 55.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 56.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 89.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Noon", "price": 84.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
    
                        { "name": "Carrefour", "price": 87.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
    
                        { "name": "Shein", "price": 82.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
    
                        { "name": "Namshi", "price": 79.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
    
                        { "name": "Alibaba", "price": 94.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
    
                        { "name": "Lulu Hypermarket", "price": 86.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
    
                        { "name": "Walmart", "price": 91.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Trendyol", "price": 78.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
    
                    ]
                },
                {
                    "name": "Men's Fader Skate Shoe",
                    "url": "https://m.media-amazon.com/images/I/81acCsnfoaL._AC_SY675_.jpg",
                    "Brand": "Adidas",
                    "Country": "UAE",
                    "category": "shoes",
                    "my_price": 52.00,
                    "cost": 50.00,
                    "net_margin": 6,
                    "about": [
                        "Lightweight, breathable mesh ",
                        "Recycled open cell PU foam insole",
                        "Egg-crate midsole construction",
                        "300 NBS rubber outsole",
                        "Padded tongue and collar."
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price":53.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 69.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 77.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 72.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 69.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 84.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 76.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 67.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 70.34, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 79.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        { "name": "Noon", "price": 74.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        { "name": "Carrefour", "price": 77.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        { "name": "Shein", "price": 72.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        { "name": "Namshi", "price": 69.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        { "name": "Alibaba", "price": 84.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        { "name": "Lulu Hypermarket", "price": 76.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        { "name": "Walmart", "price": 81.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        { "name": "Trendyol", "price": 68.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    ]
                },
            ] , 
            "Amazon": {
                "stock_availability": "85%",
                "stock_value": "900",
                "stockStatus": "Instock",
                "color": "#008428 "
            },
            "Noon": {
                "stock_availability": "75%",
                "stock_value": "850",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Lulu Hypermarket": {
                "stock_availability": "80%",
                "stock_value": "870",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Shein": {
                "stock_availability": "90%",
                "stock_value": "920",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Carrefour": {
                "stock_availability": "60%",
                "stock_value": "800",
                "stockStatus": "Instock",
                "color": "#ff9300 "
            },
            "Alibaba": {
                "stock_availability": "40%",
                "stock_value": "830",
                "stockStatus": "Out of Stock",
                "color": "#ff0000"
            },
            "Walmart": {
                "stock_availability": "55%",
                "stock_value": "780",
                "stockStatus": "Instock",
                "color": "#ff9300"
            },
            "Trendyol": {
                "stock_availability": "50%",
                "stock_value": "760",
                "stockStatus": "Instock",
                "color": "#ff9300"
            },
            "Namshi": {
                "stock_availability": "68%",
                "stock_value": "810",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "SKUs": "S473",
            "Market": "USA"
        },
        {
            "name": "Bags",
            "products" : [
                {
                    "name": "Backpack",
                    "url": "https://m.media-amazon.com/images/I/918Oo+pbysL._AC_SX425_.jpg",
                    "Brand": "Fragrance World Store",
                    "Country": "UAE",
                    "category": "bags",
                    "my_price": 40.00,
                    "cost": 34.00,
                    "net_margin": 6,
                    "about": [
                        "Checkpoint Friendly Laptop Backpack opens up 180 degrees",
                        "Water-resistant weather cover protects against dust, rain, or snow",
                        'External dimensions 14.96 x 8.27 x 21.26 inches (38 x 21 x 54 cm).Dedicated ultra-soft padded laptop compartment accommodates up to 18.4" laptops',
                        "Dedicated soft fine-felt lined iPad/Kindle/Tablet pocket."
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 34.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 29.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 32.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 27.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 24.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 39.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 31.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 36.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 23.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 34.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Noon", "price": 29.49, "stock": "Out of stock", "color": "#ff0000", "price_match": 15, "net_match": 10, "discount": 10 },
    
                        { "name": "Carrefour", "price": 32.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
    
                        { "name": "Shein", "price": 27.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
    
                        { "name": "Namshi", "price": 24.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
    
                        { "name": "Alibaba", "price": 39.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
    
                        { "name": "Lulu Hypermarket", "price": 31.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
    
                        { "name": "Walmart", "price": 36.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Trendyol", "price": 23.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
    
                    ]
                },
                {
                    "name": "Water Resistant bag for mens",
                    "url": "https://m.media-amazon.com/images/I/81HtzlXhngL._AC_SX425_.jpg",
                    "Brand": "Wolverine",
                    "category": "bags",
                    "Country": "USA",
                    "my_price": 43.00,
                    "cost": 33.00,
                    "net_margin": 10,
                    "about": [
                        "USB CHARGING PORT DESIGN: Backpacks for men with built-in USB charger port outside and charging cable inside, this 15.6 inch laptop backpack offers you a more convenient way to charge your phone while walking",
                        "The external dimensions of this laptop backpack are 18x12x7.8 inches / 45x30x19.8 cm applies to most slim laptops up to 15.6 inch. Recommended age range: 5 years old and up",
                        "Computer backpack with hidden anti-theft pocket on the back to protect your items and easy to take them out. The back of the backpack is designed with a luggage strap so you can secure the backpack on the suitcase.",
                        "Pocket more than 15, the main compartment of our travel backpack can hold 15.6 inch laptop, binders folders, clothes and college items. Front compartment with pockets for mobile phone and keychain etc. Make accessories organized and easy to find. ",
                        "Breathable and adjustable lightweight fabric shoulder straps reduce the weight of this travel backpack. Our business work backpack is stylish even when full of packed."
                    ],
                    "retailers": {
                        "Amazon": { "name": "Amazon", "price": 49.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Noon": { "name": "Noon", "price": 44.49, "stock": "Instock", "color": "#ffaa00", "price_match": 15, "net_match": 10, "discount": 10 },
                        "Carrefour": { "name": "Carrefour", "price": 47.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
                        "Shein": { "name": "Shein", "price": 42.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
                        "Namshi": { "name": "Namshi", "price": 39.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
                        "Alibaba": { "name": "Alibaba", "price": 54.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
                        "Lulu Hypermarket": { "name": "Lulu Hypermarket", "price": 46.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
                        "Walmart": { "name": "Walmart", "price": 51.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
                        "Trendyol": { "name": "Trendyol", "price": 38.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
                    },
                    "retailer": [
                        { "name": "Amazon", "price": 49.99, "stock": "Instock", "color": "#01821b", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Noon", "price": 44.49, "stock": "Instock", "color": "#ffaa00", "price_match": 15, "net_match": 10, "discount": 10 },
    
                        { "name": "Carrefour", "price": 47.65, "stock": "Instock", "color": "#01821b", "price_match": 20, "net_match": 15, "discount": false },
    
                        { "name": "Shein", "price": 42.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 },
    
                        { "name": "Namshi", "price": 39.05, "stock": "Out of stock", "color": "#ff0000", "price_match": 20, "net_match": 10, "discount": 20 },
    
                        { "name": "Alibaba", "price": 54.99, "stock": "Instock", "color": "#01821b", "price_match": 30, "net_match": 25, "discount": 10 },
    
                        { "name": "Lulu Hypermarket", "price": 46.99, "stock": "Instock", "color": "#01821b", "price_match": 15, "net_match": 10, "discount": false },
    
                        { "name": "Walmart", "price": 51.99, "stock": "Out of stock", "color": "#ff0000", "price_match": 25, "net_match": 20, "discount": 5 },
    
                        { "name": "Trendyol", "price": 38.99, "stock": "Instock", "color": "#01821b", "price_match": 10, "net_match": 5, "discount": 15 }
    
                    ]
                },
            ] ,
            "Amazon": {
                "stock_availability": "80%",
                "stock_value": "700",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Noon": {
                "stock_availability": "50%",
                "stock_value": "650",
                "stockStatus": "Instock",
                "color": "#ff9300 "
            },
            "Lulu Hypermarket": {
                "stock_availability": "43%",
                "stock_value": "680",
                "stockStatus": "Out of Stock",
                "color": "#ff0000"
            },
            "Shein": {
                "stock_availability": "85%",
                "stock_value": "730",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Carrefour": {
                "stock_availability": "64%",
                "stock_value": "620",
                "stockStatus": "Instock",
                "color": "#008428"
            },
            "Alibaba": {
                "stock_availability": "56%",
                "stock_value": "650",
                "stockStatus": "Instock",
                "color": "#ff9300 "
            },
            "Walmart": {
                "stock_availability": "47%",
                "stock_value": "600",
                "stockStatus": "Out of Stock",
                "color": "#ff0000 "
            },
            "Trendyol": {
                "stock_availability": "45%",
                "stock_value": "580",
                "stockStatus": "Out of Stock",
                "color": "#ff0000 "
            },
            "Namshi": {
                "stock_availability": "55%",
                "stock_value": "630",
                "stockStatus": "Instock",
                "color": "#ff9300"
            },
            "SKUs": "B158",
            "Market": "USA"
        }
    ])

    // setCategoryData(
    //     (prev)=>{
    //         return prev.push(check) 
    //     }
    // )
    useEffect(
        ()=>{
           
            // console.log(categoryData , "this is categoryData")
        },[]
    )
  
    let [productDetail, setProductDetail] = useState("irtaza")

    let [watchListCountContext, setWatchListCountContext] = useState(0)
    let [lineGraphData, setlineGraphData] = useState()

    return (
        <>
            <JsonContext.Provider value={{
                categoryData ,
                setCategoryData ,
                products,
                setProducts, retaillersData, productDetail, setProductDetail, setWatchListCountContext, watchListCountContext, lineGraphData,
                setlineGraphData
            }}>
                {children}
            </JsonContext.Provider>
        </>
    )
}

export default JsonState