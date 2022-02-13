import React, { useState } from 'react'
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

const ClassCategories = () => {

        
const [modal, setModal] = useState(false)
const [large, setLarge] = useState(false)
const [small, setSmall] = useState(false)
const [primary, setPrimary] = useState(false)
const [success, setSuccess] = useState(false)
const [warning, setWarning] = useState(false)
const [danger, setDanger] = useState(false)
const [info, setInfo] = useState(false)


  return (
    <>
   
        <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">

                <div className="class_categ_title pull-left">
                    <h4>Class Categories</h4>
                </div>
                </div> 
                <div class="btn-group group-btn-main">
                <CHeaderNavLink to="AddCategory/AddCategory" className="pull-right">
                <button className="mn_btn_1 mr-1" >
                   <i class="fa fa-plus-circle" aria-hidden="true"></i>
                    Add Categories
                </button>
                </CHeaderNavLink>
                </div>

              </div>
              
          </div>
        <CCol xs="12" lg="12">
          <CCard>
         
          <div className="col-md-12">
          <div className="manage-table-main">
                <table class="table table-striped">
            <thead>
            <tr>
                <th>Sr.no</th>
                <th>Category Name</th>
                <th>Slug</th>
                <th>Ref</th>
                <th>Added By</th>
                <th>Image</th>
                <th>Order Number</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td> Children </td>
                <td>Adult</td>
                <td>ref</td>
                <td>Admin</td>
                <td> <img className="class-cover-img"  src="avatars/6.jpg"/> </td>
                <td>10</td>
                <td>

                <CHeaderNavLink to="EditCategory/EditCategory">
                    <CButton color="primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></CButton>
                </CHeaderNavLink>
                    </td>
            </tr>

            <tr>
                <td>1</td>
                <td>Children</td>
                <td>Adult</td>
                <td>ref</td>
                <td>Admin</td>
                <td> <img className="class-cover-img"  src="avatars/6.jpg"/> </td>
                <td>10</td>
                <td>
                <CHeaderNavLink to="EditCategory/EditCategory">
                    <CButton color="primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></CButton>
                </CHeaderNavLink>
                    </td>
            </tr>

            <tr>
                <td>1</td>
                <td>Children</td>
                <td>Adult</td>
                <td>ref</td>
                <td>Admin</td>
                <td> <img className="class-cover-img"  src="avatars/6.jpg"/> </td>
                <td>10</td>
                <td>
                <CHeaderNavLink to="EditCategory/EditCategory">
                    <CButton color="primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></CButton>
                </CHeaderNavLink>
                </td>
            </tr>

            <tr>
                <td>1</td>
                <td>Children</td>
                <td>Adult</td>
                <td>ref</td>
                <td>Admin</td>
                <td> <img className="class-cover-img"  src="avatars/6.jpg"/> </td>
                <td>10</td>
                <td>
                    <CHeaderNavLink to="EditCategory/EditCategory">
                        <CButton color="primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></CButton>
                    </CHeaderNavLink>
                </td>
            </tr>
    
            </tbody>
        </table>

    </div>
        </div>

        
          </CCard>
        </CCol>
      </CRow>

    <CModal 
        show={primary} 
        onClose={setPrimary}
        size="lg"
        >
        <CModalHeader closeButton>
        <CModalTitle>Add new package</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="card-body">
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Title <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="title" name="first_name" class="form-control" value="" />
                    </div>
                </div>
                </div>

                 <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Title(Arabic)  <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="title" name="first_name" class="form-control" value="" />
                    </div>
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">No: of classes <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="title" name="first_name" class="form-control" value="" />
                    </div>
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Duration <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="title" name="first_name" class="form-control" value="" />
                    </div>
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Fees  <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="title" name="first_name" class="form-control" value="" />
                    </div>
                </div>
                </div>

                <div class="col-sm-6" >

                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Slug  <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <input type="text" id="title" name="first_name" class="form-control" value="" />
                        </div>
                    </div>

                </div>

                <div class="col-sm-6">
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="gender">Is special <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <select id="gender" name="gender" class="form-control">
                                <option value="">Please select </option>
                                <option>1 </option>
                                <option>2 </option>
                            </select>
                        </div>
                    </div>
      

                </div>



        </div>

        </div>
        
        </CModalBody>
        <CModalFooter>
            <CButton color="primary">Save</CButton>{' '}
            <CButton 
            color="secondary" 
            onClick={() => setPrimary(false)}
            >Close</CButton>
        </CModalFooter>
        </CModal>

    </>
  )
}

export default ClassCategories
