import React, { useState,useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CJumbotron,
  CRow,
  CEmbed,
  CDropdown,
  CDropdownToggle,
  CDropdownDivider,
  CDropdownHeader,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CDropdownItem,
  CDropdownMenu,
  CEmbedItem
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import BASE_URL from 'src/views/base'
import Cookies from 'universal-cookie';

const cookies = new Cookies();
console.log(cookies.get('gym_uuid'))
const axios = require('axios');


const Expenses = () => {

    
const [about,setabout]= useState([])

useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/gym/'+cookies.get('gym_uuid'))
    .then(res => {
        console.log(res)
        setabout(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])


  return (
    <>
   
        <CRow>
      <div className="col-md-12">
             <p>{about.about}</p>
              
          </div>
       </CRow>

 </>
  )
}

export default Expenses
