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


const AddLevel = () => {

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
                    Add Level
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
           
                <th>Name of Level </th>
                <th> Comment </th>
            </tr>
            </thead>
            <tbody>
      
            <tr>
        
                <td> basic </td>
                <td> Lorem ipsum dollar site ameat</td>       
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
        <CModalTitle>Add level</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="card-body">
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Name Of Level <span class="text-danger"> * </span></label>
                        <input type="text" id="class_topic" name="class_topic" class="form-control"  />
                       
                </div>
                </div>

                 <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Comment  <span class="text-danger"> * </span></label>
                        <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="2"></textarea>

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


export default AddLevel
