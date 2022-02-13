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

const EditCategory = () => {

  return (
    <>
  
    <CRow>
    <CCol xs="12" lg="12">
          <CCard>

        <div className="col-md-12 bg-blue">
            <div className="addclass-title">
                <h4>Edit Category</h4>
            </div>
        </div>
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
                        <label class="form-label" for="first_name">Discription <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <textarea class="form-control" rows="5" id="comment"></textarea>
                    </div>
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Description(Arabic) <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <textarea class="form-control" rows="5" id="comment"></textarea>
                    </div>
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Heading  <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="title" name="first_name" class="form-control" value="" />
                    </div>
                </div>
                </div>

                <div class="col-sm-6" >

                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Heading(Arabic)  <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <input type="text" id="title" name="first_name" class="form-control" value="" />
                        </div>
                    </div>

                </div>

                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Ref  <span class="text-danger"> * </span></label>
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

                <div class="col-sm-6" >

                <div class="form-group border-bottom-0 ">
                    <label class="form-label" for="first_name">Order Number  <span class="text-danger"> * </span></label>
                    <span class="desc"></span>
                    <div class="controls">
                        <input type="text" id="title" name="first_name" class="form-control" value="" />
                    </div>
                </div>

                </div>


            <div class="col-sm-6">

            <div class="form-group border-bottom-0 ">
                <label class="form-label" for="gender">Image 
                <span class="text-danger"> * </span></label>
                <span class="desc"></span>
                <div class="controls">
                    <input type="file"/>
                </div>
            </div>

            </div>

            <div className="col-md-12 text-center edit_btn">
            <CButton color="light">Cancel</CButton>
            <CButton color="light">Reset</CButton>
            <CButton color="primary">Update</CButton>
                  

            </div>


        </div>

        </div>

        </CCard>
        </CCol>
    </CRow>    
    
    </>
  )
}

export default EditCategory
