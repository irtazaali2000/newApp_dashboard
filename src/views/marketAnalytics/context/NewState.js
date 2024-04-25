import React , {useEffect, useState , } from 'react'
import { useLocation } from 'react-router-dom'
import NewContext from './NewContext'

function NewState(props) {
    const data = "IRtaza"
    const [info , setInfo] = useState(
      {
        MobilePhones : [
          {
            imgUrl : "https://m.media-amazon.com/images/I/51UuPZLMaCL._AC_UY218_.jpg",
            productName : "New Apple IPhone 13 Pro Max",
            about:[
              '6.7" Super AMOLED+ Display FHD+, 1080 x 2400, 20:9 ratio, Android 10, upgradable to Android 12, One UI 4.1, Under Display Fingerprint',
              '128GB ROM, 6GB, Qualcomm SM7250 Snapdragon 765G, Octa-core (1x2.4GHz Kryo 475 Prime, 1x2.2GHz Kryo 475 Gold, 6x1.8GHz Kryo 475 Silver), Adreno 620',
              'Rear Camera - 64 MP (F1.8) + 12 MP (F2.2) + 5 MP (F2.4) + 5 MP (F2.2), Front Camera - 32 MP (F2.2), 3.5mm Jack: Yes, 4500 mAh Battery'
            ],
            retailer1:"80$",
            retailer2 : "200$",
            retailer3:"150$",
            SKUs:"Apple-1128"
          },
          {
            imgUrl: "https://m.media-amazon.com/images/I/51NHRW+Nh0L._AC_SY300_SX300_.jpg",
            productName : "SAMSUNG Galaxy Note 10 Plus",
            about:[
              '6.7" Super AMOLED+ Display FHD+, 1080 x 2400, 20:9 ratio, Android 10, upgradable to Android 12, One UI 4.1, Under Display Fingerprint',
              '128GB ROM, 6GB, Qualcomm SM7250 Snapdragon 765G, Octa-core (1x2.4GHz Kryo 475 Prime, 1x2.2GHz Kryo 475 Gold, 6x1.8GHz Kryo 475 Silver), Adreno 620',
              'Rear Camera - 64 MP (F1.8) + 12 MP (F2.2) + 5 MP (F2.4) + 5 MP (F2.2), Front Camera - 32 MP (F2.2), 3.5mm Jack: Yes, 4500 mAh Battery'
            ],
            retailer1:"300$",
            retailer2 : "130$",
            retailer3:"204$",
            SKUs:"Samsung-1129"
          },
          {
            productName : "SAMSUNG Galaxy A73 5G",
            imgUrl:"https://m.media-amazon.com/images/I/61kx4uQ9c-L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            about:[
              '6.7" Super AMOLED+ Display FHD+, 1080 x 2400, 20:9 ratio, Android 10, upgradable to Android 12, One UI 4.1, Under Display Fingerprint',
              '128GB ROM, 6GB, Qualcomm SM7250 Snapdragon 765G, Octa-core (1x2.4GHz Kryo 475 Prime, 1x2.2GHz Kryo 475 Gold, 6x1.8GHz Kryo 475 Silver), Adreno 620',
              'Rear Camera - 64 MP (F1.8) + 12 MP (F2.2) + 5 MP (F2.4) + 5 MP (F2.2), Front Camera - 32 MP (F2.2), 3.5mm Jack: Yes, 4500 mAh Battery'
            ],
            retailer1:"44$",
            retailer2 : "290$",
            retailer3:"300$",
            SKUs:"Samsung-1129"
          },
          {
            productName : "Huawei Y6P 64GB Phantom Purple Dual Sim",
            imgUrl:"https://propakistani.pk/price/wp-content/uploads/2020/05/huawei-y6p-01-200x300.jpg",
            about:[
              'Android 10, EMUI 10.1, no Google Play Services',
              '13 MP, f/1.8, (wide), PDAF 5 MP, f/2.2, (ultrawide) 2 MP, f/2.4, (depth',
              'Fingerprint (rear-mounted), accelerometer, proximity'
            ],
            retailer1:"44$",
            retailer2 : "290$",
            retailer3:"300$"
          },
          {
            productName : "Samsung Galaxy A33 5G",
            imgUrl:"https://m.media-amazon.com/images/I/81nAq8uvDWL._AC_SY879_.jpg",
            about:[
              'Samsung Galaxy A33 5G Case - Cow Skin Print design Printed Slim profile designer snap on case for Galaxy A33 5G Case only.',
              'Galaxy A33 5G Cover - This Printed Plastic designer case using high absorption ink technology for long lasting color and print. The print wont fade or yellow like most cases do and they last longer',
              'Galaxy A33 5G Case for Girls - Snap on case that does not add bulk to your phone. Maintains the slim profile of your Phones by not adding too much bulk.',
              "Samsung Galaxy A33 5G Case for Women - Has precise cut Outs for logo, headphone / charging slot and speaker holes."
            ],
            retailer1:"320$",
            retailer2 : "130$",
            retailer3:"204$"
          },
          {
            productName : "Huawei Y9a 128GB Space Silver Dual Sim",
            imgUrl:"https://m.media-amazon.com/images/I/51idOHvWLIL._AC_SX679_.jpg",
            about:[
              '64MP AI Quad Camera With a 64MP high-res camera, you can capture unforgettable moments in vivid and ultra-clear details.',
              '16MP Pop-up Front Camera The front camera will instantly pop up for selfies and video chats, which brings fun and unique shooting experience for you',
              '6.63" HUAWEI Ultra FullView Display The screen-to-body ratio reaches a remarkable 92% as it is designed with a super narrow frame and hidden front camera.',
              "8 GB+128 GB Large Storage With 8 GB RAM memory and 128 GB ROM memory, you can store all your important memories locally."
            ],
            retailer1:"320$",
            retailer2 : "130$",
            retailer3:"204$"
          },
          {
            productName : "Huawei nova 9 128GB Midnight Black Dual Sim",
            imgUrl:"https://mobileseriez.com/wp-content/uploads/2023/07/Huawei-Nova-9.webp",
            about:[
              'Quad Camera: 50 MP, f/1.9, 23mm (wide), PDAF + 8 MP, f/2.2, (ultrawide) + 2 MP, f/2.4, (depth) + 2 MP, f/2.4, (macro), LED Flash  ',
              'Geo-tagging, touch focus, face detection, HDR, panorama, Video (4K, 1080p, 720p@960fps, gyro-EIS)  ',
              '32 MP, f/2.0, (wide), HDR, Video (4K@30fps, 1080p@30fps, 720p@240fps, gyro-EIS)  ',
              "Accelerometer, Compass, Fingerprint (under display, optical), Gyro, Proximity  "
            ],
            retailer1:"320$",
            retailer2 : "130$",
            retailer3:"204$"
          },
        ],
        perfume : [
          {
            productName:"Dior Homme Sport Eau De Toilette",
            imgUrl:"https://m.media-amazon.com/images/I/51pqd2twwGL._SX569_.jpg",
            about:[
              'Couture',
              'Apply onto clean, dry skin.',
              'This item is by designer Dior.  ',
              "It is recommended for romantic wear"
            ],
            retailer1:"220$",
            retailer2 : "406$",
            retailer3:"550$"
          },
          {
            productName:"Guilty Absolute Pour Homme Eau De Parfum 150ml",
            imgUrl:"https://m.media-amazon.com/images/I/31EJGmqovwL._SX300_SY300_QL70_FMwebp_.jpg",
            about:[
              'Perfect for all occasions',
              'Aromatic hook of french lavandin abrialis and uplifting lemon sfumatrice',
              'Product Type:Personal Fragrance',
              "Features a natural ingredients and long lasting"
            ],
            retailer1:"230$",
            retailer2 : "406$",
            retailer3:"550$"
          },
          {
            productName:"Burberry Brit Splash EDT 5ml For Men",
            imgUrl:"https://m.media-amazon.com/images/I/31oppglsWEL._SY445_SX342_QL70_FMwebp_.jpg",
            about:[
              'The new fragrance of the Burberry Brit collection',
              'Burberry Brit Splash for Men is a bright and refreshing aquatic scent.',
              'It opens with aromatic fresh rosemary. The heart includes watery accords, based on woods and moss.',
            ],
            retailer1:"400$",
            retailer2 : "200$",
            retailer3:"165$"
          },
          {
            productName:"Emporio Armani Stronger With You Freeze",
            imgUrl:"https://m.media-amazon.com/images/I/71d6lbMp74L._SY879_.jpg",
            about:[
              'Top Note: Pink Pepper Middle Note: Sage Base Note: Cedarwood',
              '3.4 oz Eau de Toilette Spray.',
              'Giorgio Armani',
              'Apply on pulse point: wrist, inner elbow and neck'
            ],
            retailer1:"400$",
            retailer2 : "200$",
            retailer3:"165$"
          },
          {
            productName:"Tommy Men Now Edt 100ML",
            imgUrl:"https://m.media-amazon.com/images/I/61U3cRE9t1L._SX569_.jpg",
            about:[
              'Item Condition: 100% authentic, new and unused. Tommy Now by Tommy Hilfiger for Men 3.4 oz Eau de Toilette Spray.',
              'Tommy Now by Tommy Hilfiger for Men 3.4 oz EDT Spray: Buy Tommy Hilfiger Colognes - Tommy Now by Tommy Hilfiger for Men 3.4 oz Eau de Toilette Spray',
              'Type: Eau De Toilette'
            ],
            retailer1:"400$",
            retailer2 : "200$",
            retailer3:"165$"
          },
          {
            productName:"Calvin Klein CKIN2U - Perfume For Men - Eau De Toilette",
            imgUrl:"https://m.media-amazon.com/images/I/31sjiC1CAgL._SX342_SY445_QL70_FMwebp_.jpg",
            about:[
              'Packaging for this product may vary from that shown in the image above.',
              'This New fresh fragrance reveals a new facet of modern femininity',
              'This item is only valid for shipment in Canada'
            ],
            retailer1:"400$",
            retailer2 : "200$",
            retailer3:"165$"
          },
        ],
        Clothing  :[
          {
            productName:"Legendary Whitetails Journeyman",
            imgUrl:"https://m.media-amazon.com/images/I/71MDJ2AP+0L._AC_SY500_.jpg",
            about:[
              'For the signature Legendary Whitetails fit, see our size chart which accomodiates Standard and Big & Tall sizes; the Journeyman shirt jacket is designed for extra layering',
              "Experience the Legendary Whitetails men's jacket quality with a blend of Cotton and Polyester",
              "Top quality flannel-lined for ultimate warmth, the Legendary"
            ],
            retailer1:"90$",
            retailer2 : "50$",
            retailer3:"120$"
          },
          {
            productName:"Pullover Hoodie",
            imgUrl:"https://m.media-amazon.com/images/I/715fbUI3T5L._AC_SX522_.jpg",
            about:[
              'Our Chicago Bears Adult Pullover Hooded Sweatshirt for Men and Women',
              "This Bears Hoodie features a big, full-color print that gives it a super soft hand feel and will last for years to come.",
              "Monsters of the Midway! This Bears Hoodie will stand out for casual wear, tailgates and gamedays."
            ],
            retailer1:"50$",
            retailer2 : "70$",
            retailer3:"150$"
          },
          {
            productName:"Oversized Button Down Shirt",
            imgUrl:"https://m.media-amazon.com/images/I/811F0CV6k6L._AC_SY500_.jpg",
            about:[
              'Relaxed fit',
              "2 button front dual chest pockets",
              "Gray chambray back neck lining",
              "Washed for softness",
              "Button cuffs"
            ],
            retailer1:"140$",
            retailer2 : "16$",
            retailer3:"200$"
          },
          {
            productName:"Max Cool Unstitched Fabric Cotton",
            imgUrl:"https://m.media-amazon.com/images/I/712fxKCtxXL._AC_SX522_.jpg",
            about:[
              'Soft, breathable cotton',
              "Moisture wicking technology keeps you cool and dry",
              "Tag-free to prevent irritation",
              "Classic length for easy tucking ",
              "Durable stitching"
            ],
            retailer1:"50$",
            retailer2 : "30$",
            retailer3:"60$"
          },
          {
            productName:"Jackets & Coats",
            imgUrl:"https://m.media-amazon.com/images/I/81lo+GmMokL._AC_SY500_.jpg",
            about:[
              'Comfortable, easy fit through the shoulders, chest, and waist.',
              "Nylon plain weave shell and lining fabric. Fully lined, quilted and insulated.",
              "Stay warm in this versatile water-resistant lightweight puffer jacket featuring a full-length center-front zipper and stand-up collar.",
              " Stand-up collar, two zippered hand pockets, and elasticated cuffs and bottom opening. Jacket packs neatly into included carrying bag with a drawstring closure.",
            ],
            retailer1:"240$",
            retailer2 : "400$",
            retailer3:"340$"
          },
        ],
        shoes : [
          {
            productName:"Adidas EQ21 Run Shoes",
            imgUrl:"https://m.media-amazon.com/images/I/71oZWiXGlEL._AC_SX500_.jpg",
            about:[
              "Men's running shoes for the daily runner",
              "Regular fit",
              "Engineered mesh upper offers breathability; Geofit padded collar for comfort",
              "TPU quarter and heel for added stability; Bounce midsole offers flexible comfort; Rubber outsole provides secure traction",
            ],
            retailer1:"140$",
            retailer2 : "120$",
            retailer3:"400$"
          },
          {
            productName:"Grey Hyper Bolt Running Shoes for Men",
            imgUrl:"https://m.media-amazon.com/images/I/61ru71hobuL._AC_SY500_.jpg",
            about:[
              "Leather upper provides natural comfort and durability",
              "Shock-absorbing XCS truTECH outsole provides superior cushioning and protection",
              "Hand-finished stitching enhances the classic style",
              "Barely-there gore panels give a bit of stretch if you need it, but don't affect the overall shape if you don't",
            ],
            retailer1:"240$",
            retailer2 : "320$",
            retailer3:"300$"
          },
          {
            productName:"Flexfit Men's shoe",
            imgUrl:"https://m.media-amazon.com/images/I/81bDw0gwLYL._AC_SY535_.jpg",
            about:[
              "Sturdy, water-repellent 2.5 mm nubuck leather upper with tonal stitching",
              "Gore-Tex breathable interior membrane and textile lining",
              "Removable, textile lined insole with slow reacting foam layer for added comfort",
              "Full-length, 5mm nylon stabilizer with a PU layer for optimal underfoot control",
              "Self-cleaning Vibram Masai outsole with deep lugs"
            ],
            retailer1:"300$",
            retailer2 : "2450$",
            retailer3:"320$"
          },
        ],
        caps : [
          {
            productName:"Baseball Cap",
            imgUrl:"https://m.media-amazon.com/images/I/61h+cU8pDjL._AC_SX522_.jpg",
            about:[
              "Officially licensed U.S Polo Association adjustable golf cap with an embroidered horse logo on the front",
              " Features an adjustable silver metal buckle closure embossed with an American flag to allow for easy resizing for a comfortable fit on heads of all shapes and sizes",
              "Features a curved brim with stitching to keep the Sun's UV rays out of your eyes",
              "Lightweight and durable cotton fabric allows for instant comfort when worn",
              "Recommended for hand washing only, lay flat to dry, do not iron"
            ],
            retailer1:"60$",
            retailer2 : "90$",
            retailer3:"70$"
          },
          {
            productName:"Fedora Cap",
            imgUrl:"https://m.media-amazon.com/images/I/71y7c+f+rhL._AC_SX522_.jpg",
            about:[
              "Guaranteed for life and Made in Canada",
              " Maximum sun protection fabric is certified UPF 50+, the highest given",
              "Keeping dry water-repellent finish keeps off the rain",
              "Extra storage – Keep valuables safe in the secret pocket",
              "Front & back wind cords system secures hat in gusty conditions"
            ],
            retailer1:"90$",
            retailer2 : "70$",
            retailer3:"60$"
          },
          {
            productName:"Sun Cap",
            imgUrl:"https://m.media-amazon.com/images/I/71nGsumDQDS._AC_SX522_.jpg",
            about:[
              "Sleek lightweight visor with premium badge of sport logo",
              " Maximum sun protection fabric is certified UPF 50+, the highest given",
              "Mesh provides ultimate air flow and moisture-wicking",
              "Hook-and-loop back closure for adjustable fit.",
              "Non-glare undervisor for best vision while running and training"
            ],
            retailer1:"30$",
            retailer2 : "50$",
            retailer3:"60$"
          },
         
        ],
        bags : [
          {
            productName:"Messenger Bag",
            imgUrl:"https://m.media-amazon.com/images/I/71SMLGRqFeL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            about:[
              "we refreshed the Roma Messenger Bag with a larger all leather strap, YKK zippers, stronger parts, and full grain Italian hand stained leather that smells fantastic.",
              " this leather messenger bag is handcrafted in Italy with full grain calfskin leather and brass hardware. A high quality YKK zipper, durable leather interior, and attention to detail make this leather bag stand out from the crowd.",
              "the inside of this messenger bag has 2 compartments that include 2 zipper pockets, 1 smartphone pocket, 4 credit card pockets, 3 pen pockets, key holder, and 2 multi-function pockets.",
              "this classic leather messenger bag is made from full-grain calfskin leather that was hand stained in the heart of Tuscany to patina and look better over time",
            ],
            retailer1:"140$",
            retailer2 : "120$",
            retailer3:"400$"
          },
          {
            productName:"Backpack",
            imgUrl:"https://m.media-amazon.com/images/I/918Oo+pbysL._AC_SX425_.jpg",
            about:[
              "Carhartt Classic 25L Laptop Backpack. Classic pack with a large exterior pocket, made stronger",
              "600-denier polyester with Rain Defender durable water repellent",
              "Backpack features large main compartment with dedicated 15-inch laptop sleeve two exterior side pockets",
              "Front zippered organization compartment and comfort shoulder straps",
            ],
            retailer1:"400$",
            retailer2 : "500$",
            retailer3:"603$"
          },
          {
            productName:"Duffle bags",
            imgUrl:"https://m.media-amazon.com/images/I/81PXJJ22BaL._AC_SX569_.jpg",
            about:[
              "Packable travel duffel comes folded inside a versatile drawstring utility pouch.",
              "Large zippered opening with main compartment, plus exterior zippered pocket",
              "Made of sturdy synthetic fabric with Rain Defender durable water repellent",
            ],
            retailer1:"90$",
            retailer2 : "120$",
            retailer3:"100$"
          },
          {
            productName:"Beach Bag",
            imgUrl:"https://m.media-amazon.com/images/I/A1ZlJcCKlTL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            about:[
              "100% Polyester",
              "Open weave mesh for strength and quick drying",
              "Equipment for all gear",
            ],
            retailer1:"190$",
            retailer2 : "240$",
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