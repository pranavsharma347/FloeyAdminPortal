import React, { useState, useEffect } from "react";
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
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CTextarea,
  CSelect,
  CEmbedItem,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { DocsLink } from "src/reusable";
import BASE_URL from "src/views/base";
import Cookies from "universal-cookie";

const cookies = new Cookies();
console.log(cookies.get("gym_uuid"));

const Expenses = () => {
  const [secondary, setSecondary] = useState(false);
  const [success, setSuccess] = useState(false);
  const [third, setthird] = useState(false);
  const [primary, setPrimary] = useState(false);
  const axios = require("axios");
  const [getgym, setgym] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "gymprofile/gym/" + cookies.get("gym_uuid"))
      .then((res) => {
        console.log(res);
        setgym(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  var perm = cookies.get("perms");

  // if (perm.includes('Gymprofile')){

  return (
    <>
      <CRow>
        <div className="col-md-12">
          <div className="manage_top_btn">
            <div className="manage-btn-left">
              {/* <a href='#/base/Color'><button className="mn_btn_1 mr-2" >Color </button></a> */}
              <a href="#/base/Ammenities">
                <button className="mn_btn_1 mr-2">Ammenities </button>
              </a>
              <a href="#/base/Policy">
                <button className="mn_btn_1 mr-2">Policy </button>
              </a>
              <a href="#/base/location">
                <button className="mn_btn_1 mr-2">Location </button>
              </a>
              <button className="mn_btn_1 mr-2" onClick={setSuccess}>
                {" "}
                Fitness Type{" "}
              </button>
              {/* <a href='#/base/gymdetails'><button className="mn_btn_1 mr-2" >Edit Gym Details </button></a>
               */}
            </div>
          </div>

          {/* <CRow>
                <CCol xs="12" lg="6">
                   <div className="grm-prof-abt">
                      <h2 className=''>About</h2>
                      <p> {getgym.about} </p>
                   </div>   
                </CCol>

                <CCol xs="12" lg="6">
                   <div className="grm-prof-abt">
                      <h2 className=''>Customer Validations</h2>
                      <p> Gender validation - {getgym.gender_criteria} </p>
                      <p> Age Group validation -{getgym.age_criteria} </p>
                   </div>   
                </CCol>

              </CRow>   */}
          {/* <div className='head'>
              <h2 className='title'>About</h2>
                <h5 className='validation'>{getgym.about}</h5>
             
                  <h2 className='title'>Customer Validations</h2>
                  <h5 className='validation'>Gender validation - {getgym.gender_criteria} </h5>
                  <h5 className='validation'>Age Group validation -{getgym.age_criteria} </h5>

              </div> */}
        </div>
      </CRow>

      <CRow className="mt-4">
        <CCol md="12">
          <CCard>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="12">
                    <div className="f-text">
                      <h4> Business Details </h4>
                    </div>

                    <div className="f-icon">
                      <CButton
                        color="primary"
                        onClick={() => setPrimary(!primary)}
                      >
                        <CIcon size="sm" name="cil-pencil" />
                      </CButton>
                    </div>
                  </CCol>
                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Business Name</CLabel>
                      <CInput id="company" value={getgym.gym_name} />
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">About</CLabel>
                      <CTextarea
                        name="textarea-input"
                        id="textarea-input"
                        rows="2"
                        value={getgym.about}
                      />
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Email</CLabel>
                      <CInput id="company" value="" />
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Address</CLabel>
                      <CInput id="company" value="" />
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Address Link</CLabel>
                      <CInput id="company" value="" />
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Contact Number</CLabel>
                      <CInput id="company" value="" />
                    </CFormGroup>
                  </CCol>
                  {/* 
                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Opening Days</CLabel>
                      <CInput id="company" value="" />
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Opening Time</CLabel>
                      <CInput id="company" value=""/>
                    </CFormGroup>
                  </CCol> */}

                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-md-3">
                        <div class="form-group">
                          <label class="form-label" for="first_name">
                            Opening Days <span class="text-danger"> * </span>
                          </label>
                          <select
                            name="course_scheduled_on"
                            class="form-control"
                            id="course_scheduled_on"
                          >
                            <option disabled>Select</option>
                            <option>Sanday</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>friday</option>
                            <option>Saturday</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div class="form-group">
                          <label class="form-label" for="first_name">
                            Start time{" "}
                          </label>
                          <input
                            type="time"
                            id="start_time"
                            class="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div class="form-group">
                          <label class="form-label" for="first_name">
                            End time{" "}
                          </label>
                          <input
                            type="time"
                            id="end_time"
                            class="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div class="btn-dd">
                          <button type="button" class="btn btn-primary">
                            Add
                          </button>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="manage-table-main">
                          <table class="table">
                            <thead>
                              <tr>
                                <th> Opening Days </th>
                                <th> Start time </th>
                                <th> End time </th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td> Sunday </td>
                                <td> Start time </td>
                                <td> End Time </td>
                                <td>
                                  <button type="button" class="btn btn-danger">
                                    Remove
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol md="12">
          <CCard>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="12">
                    <div className="f-text">
                      <h4> Business Permission </h4>
                    </div>

                    <div className="f-icon">
                      <CButton
                        color="primary"
                        onClick={() => setSecondary(!secondary)}
                      >
                        <CIcon size="sm" name="cil-pencil" />
                      </CButton>
                    </div>
                  </CCol>
                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Gender Criteria</CLabel>
                      <CInput id="company" value="" />
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Age Criteria</CLabel>
                      <CInput id="company" value="" />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol md="12">
          <CCard>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="12">
                    <div className="f-text">
                      <h4> Business Permission </h4>
                    </div>

                    <div className="f-icon">
                      <CButton color="primary" onClick={() => setthird(!third)}>
                        <CIcon size="sm" name="cil-pencil" />
                      </CButton>
                    </div>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Location</CLabel>
                      <CInput id="company" valu="" />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CModal
        show={primary}
        onClose={() => setPrimary(!primary)}
        color="primary"
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle> Business Details </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCol md="12">
            <CForm action="" method="post" className="form-horizontal">
              <CFormGroup row>
                <CCol md="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Business Name</CLabel>
                    <CInput id="gym_name" />
                  </CFormGroup>
                </CCol>

                <CCol md="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">About</CLabel>
                    <CTextarea name="textarea-input" id="about" rows="2" />
                  </CFormGroup>
                </CCol>

                <CCol md="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Email</CLabel>
                    <CInput id="email" />
                  </CFormGroup>
                </CCol>

                <CCol md="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Address</CLabel>
                    <CInput id="address" />
                  </CFormGroup>
                </CCol>

                <CCol md="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Contact Number</CLabel>
                    <CInput id="contact_number" />
                  </CFormGroup>
                </CCol>

                <CCol md="6">
                  <CFormGroup>
                    <CLabel htmlFor="company"> Opening Days </CLabel>
                    <label class="hint form-label" for="first_name">
                      Current Days -{" "}
                    </label>
                    <CSelect multiple name="select" id="opening_days">
                      <option> Select</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>

                <CCol md="6">
                  <CFormGroup>
                    <CLabel htmlFor="company"> Gym Timings </CLabel>
                    <label class="hint form-label" for="first_name">
                      Current Timing -{" "}
                    </label>
                    <CSelect name="select" id="gym_timings">
                      <option>select</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
            </CForm>
          </CCol>
        </CModalBody>
        <CModalFooter>
          <CCol md="12" className="text-center">
            <CButton color="primary">Save</CButton>
          </CCol>
        </CModalFooter>
      </CModal>

      <CModal
        show={secondary}
        onClose={() => setSecondary(!secondary)}
        color="primary"
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle> Business Details </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCol md="12">
            <CForm action="" method="post" className="form-horizontal">
              <CFormGroup row>
                <CCol md="6">
                  <CFormGroup>
                    <CLabel htmlFor="company"> Gender Criteria </CLabel>
                    <label class="hint form-label" for="first_name">
                      Current -{" "}
                    </label>
                    <CSelect name="select" id="gender_criteria" multiple>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Unisex">Unisex</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>

                <CCol md="6">
                  <CFormGroup>
                    <CLabel htmlFor="company"> Age Criteria </CLabel>
                    <label class="hint form-label" for="first_name">
                      Current -{" "}
                    </label>
                    <CSelect name="select" id="age_criteria" multiple>
                      <option> select</option>
                      <option> 1</option>
                      <option> 2</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
            </CForm>
          </CCol>
        </CModalBody>
        <CModalFooter>
          <CCol md="12" className="text-center">
            <CButton color="primary">Save</CButton>
          </CCol>
        </CModalFooter>
      </CModal>

      <CModal
        show={third}
        onClose={() => setthird(!third)}
        color="primary"
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle> Business Details </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCol md="12">
            <CForm action="" method="post" className="form-horizontal">
              <CFormGroup row>
                <CCol md="6">
                  <CFormGroup>
                    <CLabel htmlFor="company"> Location </CLabel>
                    <label class="hint form-label" for="first_name">
                      Current -{" "}
                    </label>
                    <CSelect multiple name="select" id="city">
                      <option> select</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
            </CForm>
          </CCol>
        </CModalBody>
        <CModalFooter>
          <CCol md="12" className="text-center">
            <CButton color="primary">Save</CButton>
          </CCol>
        </CModalFooter>
      </CModal>

      <CModal show={success} onClose={setSuccess} size="lg">
        <CModalHeader closeButton className="add-user-modal">
          <CModalTitle> Fitness Type </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label" for="first_name">
                    fitnes name <span class="text-danger"> * </span>
                  </label>
                  <input
                    type="text"
                    id="class_topic"
                    name="class_topic"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label" for="first_name">
                    discription<span class="text-danger"> * </span>
                  </label>
                  <textarea
                    class="form-control rounded-0"
                    id="exampleFormControlTextarea2"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary">Save</CButton>{" "}
          <CButton color="secondary" onClick={() => setSuccess(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
  // }
  //   else{
  //     return window.location.href='#/dashboard'
  //   }
};

export default Expenses;
