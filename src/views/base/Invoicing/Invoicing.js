import React, { useState,useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CJumbotron,
  CHeaderNavLink,
  CRow,
  CEmbed,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CEmbedItem
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import BASE_URL from 'src/views/base';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
console.log(cookies.get('gym_uuid'))




const Invoicing = () => {


const axios = require('axios');
const [getinvoice, setgetinstructor] = useState([])

useEffect(() => {
    axios
    .get(BASE_URL + 'payments/invoice/?gym='+cookies.get('gym_uuid'))
    .then(res => {
        console.log(res)
        setgetinstructor(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])


const [invoicedetail, setgetcourse] = useState([])

function Clicker(uuid) {
    // alert(uuid);
    setSuccess(!success)
    setPrimary(!primary);
    //  debugger
    axios
      .get(BASE_URL + 'payments/invoice/' + uuid)
      .then(getuuid => {
        console.log(getuuid);
        setgetcourse(getuuid.data);
      })

  }


const [modal, setModal] = useState(false)
const [large, setLarge] = useState(false)
const [small, setSmall] = useState(false)
const [primary, setPrimary] = useState(false)
const [success, setSuccess] = useState(false)
const [warning, setWarning] = useState(false)
const [danger, setDanger] = useState(false)
const [info, setInfo] = useState(false)

var perm = cookies.get('perms')

// if (perm.includes('Billing')){
  return (
    <>
   

      <CRow>

      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">

                
                <CHeaderNavLink to="/base/Promocodes">
                <button className="mn_btn_1 mr-1" >
                   <i class="fa fa-plus-circle" aria-hidden="true"></i> 
                     Promocodes
                </button>
                </CHeaderNavLink>

                {/* <CHeaderNavLink to="ClassCategories/ClassCategories">
                <button className="mn_btn_1 mr-1">
                <i class="fa fa-list-alt" aria-hidden="true"></i>
                Categories </button>
               
                </CHeaderNavLink> */}
               
                  
                </div> 
                   <div class="btn-group group-btn-main">
                   
                   <button type="button" class="btn btn-primary">All</button>
                    <button type="button" class="btn btn-success">Success</button>
                    <button type="button" class="btn btn-warning">Refund</button>
                    <button type="button" class="btn btn-danger">Failed</button>
                
                </div>

              </div>
              
          </div>
        
     
        <CCol xs="12" lg="12">
          <CCard>
         
          <div className="col-md-12">
          <div className="manage-table-main">
                <table class="table">
            <thead>
            <tr class="brd-none">
                <th>Customer</th>
                <th>Type</th>
                <th>Order Date</th>
                <th>Payment Status</th>
                <th>Amount</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {getinvoice.map(store=>(
            <tr>
                <td>{store.subscription_user}</td>
                <td>{store.package}</td>
                <td>{store.created_at}</td>
                <td>
                <button type="button" class="btn btn-success">{store.fee_status}</button>
                </td>
                <td>{store.amount}</td>
               
                <td>
                <CButton color="primary" onClick={() => Clicker(store.uuid)}>Manage</CButton>{' '}
                </td>

            </tr>
            ))}
            
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
        <CModalTitle>Invoice</CModalTitle>
        </CModalHeader>
        <CModalBody>

             <div className="container">
        <div class="row">
          <div class="col-md-12">
          <div class="card mr-0">

            <div class="card-header d-flex align-items-center pd-lr-0 pd-top-0">
                Invoice<strong></strong>
                <a class="btn btn-sm btn-secondary mfs-auto mfe-1 d-print-none" href="#">
                    
                      Print</a>
                <a class="btn btn-sm btn-danger mfe-1 d-print-none" href="#">
                    
                      Delete</a></div>
            <div class="card-body pd-lr-0">
                <div class="row mb-4">

                    <div class="col-sm-12 ">
                        <h5 class="">Details </h5>
                    </div>
                    <div class="col-sm-4 inv-details">
                       
                        <div>Invoice Date : {invoicedetail.created_at}</div>
                        <div>Email: {invoicedetail.email}</div>
                        <div>Phone number: {invoicedetail.ph_no}</div>
                       
                    </div>

                    <div class="col-sm-4 inv-details">
                   
                        <div>Payment type : CASH </div>
                        <div>Payment Status: <span class="act"> Paid </span>  </div>
                        <div>Status: <span class="act"> Active </span> </div>
                       
                    </div>

                </div>

                <div class="table-responsive-sm">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th class="center">#</th>
                                <th>Package</th>
                                <th>Passes</th>
                                <th>Valid upto</th>
                                <th>Price</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                               
                                <td class="">1</td>
                                <td class="">{invoicedetail.package}</td>
                            
                                <td class="">{invoicedetail.passes}</td>
                                <td class="">{invoicedetail.subscription_validity}</td>
                                <td class="">${invoicedetail.amount}</td>
                            </tr>
                         </tbody>
                    </table>
                </div>
                <div class="row">
                   
                    <div class="col-lg-4 col-sm-5 ml-auto">
                        <table class="table table-clear">
                            <tbody>
                                {/* <tr>
                                    <td class="left"><strong>Subtotal</strong></td>
                                    <td class="right">$8.497,00</td>
                                </tr>
                                <tr>
                                    <td class="left"><strong>Discount (20%)</strong></td>
                                    <td class="right">$1,699,40</td>
                                </tr> */}
                                <tr>
                                    <td class="left"><strong>Total</strong></td>
                                    <td class="right"><strong>${invoicedetail.amount}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <a class="btn btn-success" href="#">
                      Proceed </a> */}
                    </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
        
        </CModalBody>
      
        </CModal>

      
    </>
  )
// }
// else{
//   return window.location.href='#/dashboard'
// }
}

export default Invoicing
