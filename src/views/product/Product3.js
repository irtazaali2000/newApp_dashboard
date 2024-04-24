import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import './Product.css'
// import { CustomizedLabelLineChart } from '../../Graphs/ReCharts/components/CustomizedLabelLineChart';
// import {
//     Container,
//     Row,
//     Card,
//     CardBody,
//     CustomInput,
//     CardDeck,
//     Table,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     CardTitle,
//     ListGroup,
//     ListGroupItem,
//     Button,
//     Col
// } from '../../../components';
// import { setupPage } from '../../../components/Layout/setupPage';


// import Example from './Reuseline';
// import {
//     Line,
//     CartesianGrid,
//     XAxis,
//     YAxis,
//     Tooltip,
//     ResponsiveContainer,
//     Legend,
//     LineChart,
//     ValueLabel,
//     Dot
// } from 'recharts';
import p3 from './images/p3.png'


import Product from './Product';
const Product1 = () => {
    const [productProperty , setProductProperty] = useState(
        [
            {
                property:"Brand",
                propertyValue : "Apple" 
            },
            {
                property:"Model Name",
                propertyValue : "Galaxy Watch 6"
            },
            {
                property:"Style",
                propertyValue : "Bluetooth"
            },
            {
                property:"Color",
                propertyValue : "Graphite"
            },
            {
                property:"Screen Size",
                propertyValue : "44 Millimeters"
            }
        ]
    )

    const [about , setAbout]  = useState(
        [
           "KEEP YOUR GOALS ON TRACK: Workout to your full potential with fitness tracking* on Galaxy Watch6",
           "FIND YOUR ZONE: Zone in on the results you want with personalized heart rate zones**;",
           "Full-key anti-ghosting technology ensures that every keystroke is registered"
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
    return (
        <>
           
             

                <Product 
                productImgUrl={p3}
                productName="Smart Watch"  productProperty={productProperty} 
                about="About this item" aboutProperty={about} data={data}
                /> 


        </>
    )
}
export default Product1;