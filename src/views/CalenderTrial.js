import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CButton,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CRow
} from '@coreui/react'
function MyCalender() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      {/* <Calendar
        onChange={onChange}
        value={value}
      /> */}

        <CCol lg="12" xs="12">
        <Calendar
        
        onChange={onChange}
        value={value}
      />
        </CCol>

    </div>
  );
}

export default MyCalender;