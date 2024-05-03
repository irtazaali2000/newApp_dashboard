// import React , {useEffect, useState} from 'react'
// import JsonContext from '../global context/JsonContext';
// import { useContext } from 'react';


// function My() {
//     let jsonData = useContext(JsonContext)
    
//     let [update , setUpdate] = useState()
//     let array = []
//     useEffect(
//         ()=>{
//             let check = []
//             for (let i = 0; i < jsonData.products.length; i++) {
//               check =   jsonData.products[i].retailer.filter(
//                     (item)=>{
//                        return item.name === "Amazon" 
//                     }
//                 )
                
//             }

//             console.log(check)
         
//             // console.log()
//         } ,[]
//     )
   
  
//   return (
//     <>
//     <h1>This is my component</h1>

//     {
//         jsonData.products.map(
          
//         )
//     }
//     </>
//   )
// }

// export default My;