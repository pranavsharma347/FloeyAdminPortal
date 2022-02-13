import React, { lazy } from 'react'
import {
  CCardGroup,
  CWidgetProgressIcon,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea
} from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Current Month Report
            </CCardHeader>
            <CCardBody className="brd-right-main">

            <CCardGroup className="mb-4">

            <CWidgetProgressIcon
          header="500"
          text="Total Revenue"
          color="gradient-success"
        >
          <CIcon name="cil-userFollow" height="36"/>
        </CWidgetProgressIcon>

        <CWidgetProgressIcon
          header="250"
          text="Success Transaction"
        >
          <CIcon name="cil-chartPie" height="36"/>
        </CWidgetProgressIcon>

        <CWidgetProgressIcon
          header="1"
          text="Total Customers"
          color="gradient-info"
        >
          <CIcon name="cil-people" height="36"/>
        </CWidgetProgressIcon>

        <CWidgetProgressIcon
          header="250"
          text="Active Plans"
        >
          <CIcon name="cil-chartPie" height="36"/>
        </CWidgetProgressIcon>
      
        <CWidgetProgressIcon
          header="1"
          text="Packages Revenue"
          color="gradient-warning"
        >
          <CIcon name="cil-basket" height="36"/>
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header="250"
          text="Courses Revenue"
        >
          <CIcon name="cil-chartPie" height="36"/>
        </CWidgetProgressIcon>

       
      </CCardGroup>

            </CCardBody>
          </CCard>
        </CCol>

        </CRow>
     
      <CRow>
      <CCol md="6">
        <CCard>
        <CCardHeader>
        Revenue per Plan chart
        </CCardHeader>
        <CCardBody>
          <CChartPie
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#E46651',
                  '#00D8FF',
                  '#DD1B16'
                ],
                data: [40, 20,]
              }
            ]}
            labels={['Revenue per Plan', 'Current month',]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>

        </CCol>

        <CCol md="6">
        <CCard>
        <CCardHeader>
        Active Per Plan chart
        </CCardHeader>
        <CCardBody>
          <CChartPie
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#E46651',
                  '#00D8FF',
                  '#DD1B16'
                ],
                data: [40, 20,]
              }
            ]}
            labels={['Active Per Plan', 'All', ]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>

        </CCol>
      </CRow>

     
    </>
  )
}

export default Dashboard
