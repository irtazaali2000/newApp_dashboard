import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import FirstPieChart from './FirstPieChart'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardTitle,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import Card from './Card'
import { CChartDoughnut } from '@coreui/react-chartjs'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import LineBarAreaChart from './LineBarAreaChart'
import Example from '../Price Intelligence/Pie'
import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'
import TinyChart from './SmallArea'
import LineGrapgh from '../Price Intelligence/LineGrapgh'
import './style.css';
import CardInstock from './CardInstock'
import TinyChartData from './TinyChartData'
import PieBold from './Pie'
// import Example from '../Price Intelligence/Pie'
import RetailerCompare from './RetailerCompare'
import { toPadding } from 'chart.js/helpers'
import JsonContext from '../global context/JsonContext'
import { useContext } from 'react'
const Dashboard = () => {
  let JsonStateData = useContext(JsonContext)
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  const [indikateColorBox, setIndikateColorBox] = useState({
    width: "20px",
    height: "20px"
  })

  let [countBrand , setCountBrand] = useState([])
  // useEffect(
  //   ()=>{
  //     console.log(JsonStateData.products)

  //     for (let i = 0; i < JsonStateData.products.length; i++) {
  //       setCountBrand( countBrand.push(JsonStateData.products[i].Brand))

        
  //     }
  //     console.log(countBrand.length)
  //   },[]
  // )
  return (
    <>
      {/* <WidgetsDropdown className="mb-4" /> */}
      <CRow>
        <div className='chartBody'>
          <Card iconColor={{ backgroundColor: "#00c99d" }} icon="fa-solid fa-boxes-stacked" product="24" head="Price Changed" graph={true} percentage="17%" lastUpdate="since last month" />
          <Card iconColor={{ backgroundColor: "red" }} icon="fa-solid fa-boxes-stacked" product="7" head="Price Changed" graph={false} percentage="13%" lastUpdate="since last month" />
          <CardInstock iconColor={{ backgroundColor: "#ff8a00" }} icon="fa-solid fa-bars-staggered" product="9" head="Competitors" graph="progress" progress="60%" progressBarColor="#626bf0" progressBackgroundColor="#c4c6f8" />
          <CardInstock iconColor={{ backgroundColor: "#ff8a00" }} icon="fa-solid fa-bars-staggered" product="15" head="My store" graph="progress" progress="74%" progressBarColor="#626bf0" progressBackgroundColor="#c4c6f8" />
        </div>

      </CRow>
      <CRow >
        <div className='chartBody' style={{}}>
          <LineBarAreaChart />
          {/* <FirstPieChart /> */}

          {/* <RetailerCompare /> */}
          <div style={{ border: "" }}>
            <CCard>
              <CCardHeader>Market Trend of last 4 months</CCardHeader>
              <CCardBody>
                <LineGrapgh width={340} height={300} leftMargin={-14} />
              </CCardBody>
            </CCard>
          </div>

        </div>
      </CRow>
      <CRow>
        <div className='chartBody' style={{ alignItems: "start" }} >
          <CCard>
            <CCardHeader>
              Tracking Summary
            </CCardHeader>
            <CCardBody>
              <TinyChartData name="Products" quantity="15" graphVal="23.76%" graph={true} icon="fa-solid fa-caret-up" color="#00cca2" />
              <TinyChartData name="Brands" quantity="15" graphVal="13.6%" graph={true} icon="fa-solid fa-caret-down" color="#ff0000" />
              <TinyChartData name="Categories" quantity="5" graphVal="20.29%" graph={true} icon="fa-solid fa-caret-up" color="#00cca2" />
            </CCardBody>
          </CCard>

          <CCard>
            <CCardHeader>Position</CCardHeader>
            {/* <LineGrapgh width={500} height={350} leftMargin={14} /> */}
            <div style={{
              backgroundColor: "white", margin: "10px 0px", borderRadius: "20px", display: "flex", flexDirection: "", justifyContent: "", alignItems: "center",
              border: "", height: "330px", width: "auto", padding: "0px 10px"
            }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ fontSize: "18px", fontWeight: "500", marginTop: "10px", }}>

                </div>
                <div style={{}} >
                  {<Example width={330} height={260} radius={130} />}
                </div>
              </div>
              <div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ ...indikateColorBox, backgroundColor: "#009653" }}></div>
                  <div>Expensive than us</div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ ...indikateColorBox, backgroundColor: "#f70000 " }}></div>
                  <div>Cheaper than us</div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ ...indikateColorBox, backgroundColor: "#ff8700 " }}></div>
                  <div>Slightly cheaper than us</div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ ...indikateColorBox, backgroundColor: "#00a1e9 " }}></div>
                  <div>Equal to us</div>
                </div>

              </div>
            </div>
          </CCard>
          {/* <CCard className="w-30 mb-4" style={{border:"" , height:"390px" , width:"300px"}}>
            <CCardHeader>Monthly Sales</CCardHeader>
            <CCardBody className='px-100 '>
              <div className='pieChartRepresentData'>
                <div className='pieChartBox'>
                   <div className='pieChartRepresentDataBar' style={{ backgroundColor: "#008afe" }}></div>
                  <span>Grocery</span>
                </div>
                <div className='pieChartBox'>
                   <div className='pieChartRepresentDataBar' style={{ backgroundColor: "#ffb81a" }}></div>
                  <span>Clothing</span>
                </div>
                <div className='pieChartBox'>
                   <div className='pieChartRepresentDataBar' style={{ backgroundColor: "#fe7931" }}></div>
                  <span>Electronics</span>
                </div>
                <div className='pieChartBox'> 
                  <div className='pieChartRepresentDataBar' style={{ backgroundColor: "#00c7a3" }}></div>
                  <span>Automative</span>
                </div>

              </div>
              <PieBold />
            </CCardBody>
          </CCard>

          <CCard className="w-30 mb-0" style={{border:"" , width:"300px" , height:"390px"}}>
            <CCardHeader> Monthly Stock </CCardHeader>
            <CCardBody className='px-100 '
            >
              <CChartDoughnut  style={{border:"" , margin:"20px 0px"}}
                data={{
                  labels: ['Grocery', 'Clothing', 'Electronics' , 'Automative'],
                  datasets: [
                    {
                      backgroundColor: ['#41B883', '#E46651', '#f7a73b' , '#008cfe'],
                      data: [40, 20, 80 , 60],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard> */}

        </div>
      </CRow>
      {/* <CRow>
        <div className='chartBody' >
          <CCol xs={3}>
            <CCard className="w-100 mb-4">
              <CCardHeader>Retailler 1</CCardHeader>
              <CCardBody className='px-100 '>
                <CChartDoughnut
                  data={{
                    labels: ['Instock', 'Out of stock', 'Instock'],
                    datasets: [
                      {
                        backgroundColor: ['#41B883', '#E46651', '#f7a73b'],
                        data: [40, 20, 80],
                      },
                    ],
                  }}
                />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs={4}>
            <CCard className="w-100 mb-4">
              <CCardHeader>Retailler 2</CCardHeader>
              <CCardBody className='px-100'>
                <CChartDoughnut
                  data={{
                    labels: ['Instock', 'Out of stock', 'Instock'],
                    datasets: [
                      {
                        backgroundColor: ['#41B883', '#E46651', '#f7a73b'],
                        data: [60, 50, 30],
                      },
                    ],
                  }}
                />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs={4}>
            <CCard className="w-100 mb-4">
              <CCardHeader>Retailler 3</CCardHeader>
              <CCardBody className='px-100'>
                <CChartDoughnut
                  data={{
                    labels: ['Instock', 'Out of stock', 'Instock'],
                    datasets: [
                      {
                        backgroundColor: ['#41B883', '#E46651', '#f7a73b'],
                        data: [50, 30, 60],
                      },
                    ],
                  }}
                />
              </CCardBody>
            </CCard>
          </CCol>
        </div>
      </CRow> */}


    </>
  )
}

export default Dashboard
