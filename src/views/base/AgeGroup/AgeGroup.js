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
import BASE_URL from 'src/views/base';


const AgeGroup = () => {

const [success, setSuccess] = useState(false)



  return (
    <>
   
        <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">

                
                <CHeaderNavLink onClick={setSuccess}>
                <button className="mn_btn_1 mr-1" >
                   <i class="fa fa-plus-circle" aria-hidden="true"></i> 
                    Age Group
                </button>
                </CHeaderNavLink>
                  
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
           
                <th>Name of Age Group</th>
                <th> From Age</th>
                <th> To Age </th>
              
            </tr>
            </thead>
            <tbody>
      
            <tr>
        
                <td> Adult </td>
                <td>18</td>
                <td> 25 </td>
           
               
            </tr>
 
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
        <CModalTitle>Age Group </CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="card-body">
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Name Of Age Group <span class="text-danger"> * </span></label>
                        <input type="text" id="class_topic" name="class_topic" class="form-control"  />
                       
                </div>
                </div>

                 <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">From Age  <span class="text-danger"> * </span></label>
                        <select className="form-control">
                            <option> Select </option>
                            <option> 1 </option>
                            <option> 2 </option>
                        </select>   
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                    <label class="form-label" for="first_name">To Age <span class="text-danger"> * </span></label>
                        <select className="form-control">
                            <option> Select </option>
                            <option> 1 </option>
                            <option> 2 </option>
                        </select>   
                    </div>
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
  )}


export default AgeGroup
