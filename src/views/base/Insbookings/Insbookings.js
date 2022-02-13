import React, { useState,useEffect } from 'react'
import $ from 'jquery';
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
  CHeaderNavLink,
  CEmbedItem
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import Cookies from 'universal-cookie';
import BASE_URL from 'src/views/base';

const cookies = new Cookies();

console.log(cookies.get('ins'))
console.log(cookies.get('gym_uuid'))


const Classes = () => {

const [blog, setBlog] = useState([])
const [blog2, setBlog2] = useState([])
const [blog3, setBlog3] = useState([])
const [blog4, setBlog4] = useState([])
const [blog5, setBlog5] = useState([])


const axios = require('axios');
useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/class/date/?ins='+ cookies.get('ins') + '&gym='+ cookies.get('gym_uuid'))
    .then(res => {
        console.log(res)
        setBlog(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])


const [modal, setModal] = useState(false)
const [large, setLarge] = useState(false)
const [small, setSmall] = useState(false)
const [primary, setPrimary] = useState(false)
const [success, setSuccess] = useState(false)
const [warning, setWarning] = useState(false)
const [danger, setDanger] = useState(false)
const [info, setInfo] = useState(false)

const [getclasses, setgetclasses] = useState([])

function Clicker(uuid,date) {
    // alert(uuid);
    // alert(date);
    setSuccess(!success);
    //  debugger
    axios
      .get(BASE_URL + 'gymprofile/instructorclass/?date='+ date +'&class='+ uuid + '&gym=' + cookies.get('gym_uuid'))
      .then(getuuid => {
        console.log(getuuid);
        setgetclasses(getuuid.data);
      })

  }
  


  return (
    <>
   
        <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">

                
              

                {/* <CHeaderNavLink to="ClassCategories/ClassCategories">
                <button className="mn_btn_1 mr-1">
                <i class="fa fa-list-alt" aria-hidden="true"></i>
                Categories </button>
               
                </CHeaderNavLink> */}
               
                  
                </div> 
                   

              </div>
              
          </div>
        <CCol xs="12" lg="12">
          <CCard>
         
          <div className="col-md-12">
          <div className="manage-table-main">
                <table class="table">
            <thead>
            <tr>
                {/* <th>Sr.no</th> */}
                <th>Class</th>
                <th>Type</th>
                {/* <th>Age group</th> */}
                <th>Date</th>
                <th>No Of Participants</th>
                {/* <th>Duration</th> */}
                {/* <th>Active</th> */}
                {/* <th>Cover Image</th> */}
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {blog.map(store =>(
            <tr>
                {/* <td>1</td> */}
                <td>{store.data.class_topic}</td>
                <td>Class</td>
                {/* <td>Adult</td> */}
                <td>{store.date}</td>
                <td>{store.participants}</td>
                {/* <td>{store.class_duration}</td> */}
                {/* <td>
                <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
                </label>
                </td> */}
                {/* <td> <img className="class-cover-img"  src="avatars/6.jpg"/> </td> */}
                <td>
                <CButton color="primary" onClick={() => Clicker(store.data.uuid,store.date)}>View Attendees</CButton>{' '}
                <a href='#/base/Classes'><CButton className='detailbtn' >View Details</CButton>{' '}</a>
                </td>
            </tr>))}
             </tbody>
        </table>

    </div>
        </div>

        
          </CCard>
        </CCol>
      </CRow>

   

        <CModal 
        show={success} 
        onClose={setSuccess}
        size="lg"
        >
        <CModalHeader closeButton className="add-user-modal">
        <CModalTitle>Bookings</CModalTitle>
        </CModalHeader>
        <CModalBody>
   
            <div class="row">
                <div className="col-md-12 col-xs-12">
                <div className="manage-table-main">
                        <table class="table">
                        
                          <thead>
                            <tr>
                              <th>Book date</th>
                              <th>User</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                        
                        {getclasses.map(store => (
                          <tbody>
                            <tr>
                              <td>{store.booked_date}</td>
                                <td>{store.select_user}</td>
                              {/* <td> 2021-02-24 </td> */}
                              <td><a href="#" class="view" title="View Receipt" data-toggle="tooltip"><i class="fa fa-eye" aria-hidden="true"></i></a></td>
                            </tr>
                          </tbody>
                           ))} 
                        </table>


                        {/* <div className="hed_title">
                          <i class="fa fa-money" aria-hidden="true"></i>
                            Total Amount Paid : <span> 100 </span>
                        </div> */}

                      </div>
                </div>
            </div>

   
        
        </CModalBody>
        <CModalFooter>
            <CButton color="primary" >Save</CButton>{' '}
            <CButton 
            color="secondary" 
            onClick={() => setSuccess(false)}
            >Close</CButton>
        </CModalFooter>
        </CModal>

    </>
  )
}

export default Classes
