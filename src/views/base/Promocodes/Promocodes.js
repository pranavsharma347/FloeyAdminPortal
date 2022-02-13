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
  CEmbedItem,
} from "@coreui/react";
import { DocsLink } from "src/reusable";
import BASE_URL from "src/views/base";
import Cookies from "universal-cookie";

const cookies = new Cookies();
console.log(cookies.get("gym_uuid"));

const Expenses = () => {
  const [modal, setModal] = useState(false);
  const [large, setLarge] = useState(false);
  const [small, setSmall] = useState(false);
  const [primary, setPrimary] = useState(false);
  const [secondary, setsecondary] = useState(false);
  const [Rulesuccess, setRulesuccess] = useState(false);
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  const [danger, setDanger] = useState(false);
  const [info, setInfo] = useState(false);

  const [getinstructor, setgetinstructor] = useState([]);
  const [getuser, setuser] = useState([]);
  const [getinstructordetail, setinstructordetail] = useState([]);

  const axios = require("axios");

  useEffect(() => {
    axios
      .get(BASE_URL + "payments/promocodes/")
      .then((res) => {
        console.log(res);
        setgetinstructor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(BASE_URL + "payments/rulesets")
      .then((res) => {
        console.log(res);
        setuser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function Clicker(uuid) {
    // alert(uuid);
    setSuccess(!success);
    //  debugger
    axios.get(BASE_URL + "gymprofile/instructor/" + uuid).then((getuuid) => {
      console.log(getuuid);
      setinstructordetail(getuuid.data);
    });
  }

  function Clicker2(uuid) {
    // alert(uuid);
    setRulesuccess(!Rulesuccess);
    //  debugger
    axios.get(BASE_URL + "gymprofile/instructor/" + uuid).then((getuuid) => {
      console.log(getuuid);
      setinstructordetail(getuuid.data);
    });
  }

  async function NewPromocode() {
    // setSuccess(false);

    debugger;
    var code = document.getElementById("code").value;
    var discount = document.getElementById("discount").value;
    var start_date = document.getElementById("start_date").value;
    var end_date = document.getElementById("end_date").value;
    var max_usage = document.getElementById("max_usage").value;
    var ruleset = document.getElementById("ruleset").value;

    {
      console.log("Trying to send request");

      try {
        let loader = `<div><div class="loader centered"/></div>`;
        // document.getElementById('reg').innerHTML = loader;
        console.log("Trying");
        let res = await axios.post(BASE_URL + "payments/promocodes/", {
          code: code,
          discount: discount,
          start_date: start_date,
          end_date: end_date,
          max_usage: max_usage,
          ruleset: ruleset,
        });
        if (res.status === 201) {
          //  debugger

          console.log(res.status);
          console.log(res.data);

          window.location.reload();
        }
        //  debugger

        return res.data;
      } catch (err) {
        console.error("Signup Failed , Please try again.");
        window.location.reload();
        alert(err);
      }
    }
  }

  async function UpdateInstructor() {
    // setSuccess(false);

    //  debugger
    // var form = document.forms["regform"]["email"].value;
    var instructor_info = document.getElementById(
      "update_instructor_info"
    ).value;
    var specialization = document.getElementById("update_specialization").value;
    var gym = cookies.get("gym_uuid");
    var uuid = document.getElementById("update_uuid").value;

    {
      console.log("Trying to send request");

      try {
        let loader = `<div><div class="loader centered"/></div>`;
        // document.getElementById('reg').innerHTML = loader;
        console.log("Trying");
        let res = await axios.patch(
          BASE_URL + "gymprofile/instructor/" + uuid + "/",
          {
            instructor_info: instructor_info,
            instructor_specializaton: specialization,
            gym: gym,
          }
        );
        if (res.status === 200) {
          //  debugger
          // test for status you want, etc
          console.log(res.status);
          console.log(res.data);
          // alert(res.data.message);

          window.location.reload();
        }
        //  debugger
        // Don't forget to return something
        return res.data;
      } catch (err) {
        console.error("Signup Failed , Please try again.");
        window.location.reload();
        alert(err);
      }
    }
  }

  async function deleteInstructor(uuid) {
    // setSuccess(false);
    console.log(uuid);

    {
      console.log("Trying to send request");

      try {
        let loader = `<div><div class="loader centered"/></div>`;
        // document.getElementById('reg').innerHTML = loader;
        console.log("Trying");
        let res = await axios.delete(
          BASE_URL + "gymprofile/instructor/" + uuid + "/",
          {
            uuid: uuid,
          }
        );
        if (res.status === 200) {
          //  debugger
          // test for status you want, etc
          console.log(res.status);
          console.log(res.data);
          // alert(res.data.message);

          window.location.reload();
        }
        //  debugger
        // Don't forget to return something
        return res.data;
      } catch (err) {
        console.error("Signup Failed , Please try again.");
        window.location.reload();
        alert(err);
      }
    }
  }

  return (
    <>
      <h3>Promocodes</h3>
      <CRow>
        <div className="col-md-12">
          <div className="manage_top_btn">
            <div className="manage-btn-left">
              <button
                className="mn_btn_1 mr-1"
                onClick={() => setPrimary(!primary)}
              >
                {" "}
                <i class="fa fa-plus-circle" aria-hidden="true"></i> Add
                Promocode{" "}
              </button>
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
                      <th>Code</th>
                      <th>Discount</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Action</th>
                      {/* <th  class="text-center">Frequency</th> */}
                      {/* <th  class="text-center">Active/InActive</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {getinstructor.map((store) => (
                      <tr>
                        <td>{store.code}</td>
                        <td>{store.discount}</td>
                        <td>{store.start_date}</td>
                        <td>{store.end_date}</td>
                        {/* <td  class="text-center">{store.frequency}</td> */}

                        <td>
                          <CButton
                            color="primary"
                            onClick={() => Clicker(store.uuid)}
                          >
                            Manage
                          </CButton>{" "}
                          {/* <a href ='#/base/bookings'><button class="btn btn-primary user-bookings">Bookings</button></a> */}
                          <button
                            type="button"
                            class="btn btn-danger"
                            onClick={() => deleteInstructor(store.uuid)}
                          >
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                          </button>
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

      {/* <h3>Rulesets</h3>

      <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">
                  
                  <a href='#/base/Ruleset'><button className="mn_btn_1 mr-1" onClick='#/base/Ruleset'> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add Ruleset </button></a>
                 
                 
                </div> 
                

              </div>
              
          </div>
      <CCol xs="12" lg="12">
        
          <CCard>
         
          <div className="col-md-12">
         
                <table class="table">
            <thead>
            <tr>
                
                <th>Ruleset</th>
                <th>Max Usage/User</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {getuser.map(store => (
            <tr>

                {store.gyms_ruleset==''?<td>All gyms</td>:<td>{store.gyms_ruleset}</td>}
                <td>{store.max_uses_rule}</td>
               
                <td>
                <CButton color="primary" onClick={() => Clicker2(store.uuid)}>Manage</CButton>{' '} */}
      {/* <a href ='#/base/bookings'><button class="btn btn-primary user-bookings">Bookings</button></a> */}
      {/* <button type="button" class="btn btn-danger" onClick={() => deleteInstructor(store.uuid)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>  */}
      {/* </td>
            </tr>
            ))}

        </tbody>
        </table>

        </div>

        
          </CCard>
        </CCol>
      </CRow> */}

      <CModal show={primary} onClose={setPrimary} size="lg">
        <CModalHeader closeButton className="add-user-modal">
          <CModalTitle>Add Promocode</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div class="col-md-12">
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label" for="date_paid">
                    Code
                  </label>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label" for="date_paid">
                    Discount
                  </label>
                  <input
                    type="number"
                    id="discount"
                    name="discount"
                    class="form-control"
                  />
                  <label class="form-label" for="date_paid">
                    Is Percent
                  </label>
                  <input type="checkbox" id="is_perc" />
                </div>
              </div>

              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label" for="date_paid">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="start_date"
                    name="start_date"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label" for="date_paid">
                    End date
                  </label>
                  <input
                    type="date"
                    id="end_date"
                    name="end_date"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label" for="date_paid">
                    Max Usage
                  </label>
                  <input
                    type="number"
                    id="max_usage"
                    name="max_usage"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label" for="expense_name">
                    Ruleset
                  </label>
                  <select id="ruleset" class="form-control">
                    {getuser.map((store) => (
                      <option value={store.uuid}> {store.gyms_ruleset} </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </CModalBody>
        <CModalFooter>
          <div className="col-md-12 text-center">
            <CButton color="primary" onClick={NewPromocode}>
              Save
            </CButton>{" "}
            <CButton color="secondary" onClick={() => setPrimary(false)}>
              Close
            </CButton>
          </div>
        </CModalFooter>
      </CModal>

      <CModal show={secondary} onClose={setsecondary} size="lg">
        <CModalHeader closeButton className="add-user-modal">
          <CModalTitle>Add Promocode</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div class="col-md-12">
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label" for="date_paid">
                    Code
                  </label>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </CModalBody>
        <CModalFooter>
          <div className="col-md-12 text-center">
            <CButton color="primary" onClick={NewPromocode}>
              Save
            </CButton>{" "}
            <CButton color="secondary" onClick={() => setsecondary(false)}>
              Close
            </CButton>
          </div>
        </CModalFooter>
      </CModal>

      <CModal show={Rulesuccess} onClose={setRulesuccess} size="lg">
        <CModalHeader closeButton className="add-user-modal">
          <CModalTitle></CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div class="card-body">
            <h3>Ruleset</h3>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label" for="expense_name">
                    Gym Ruleset
                  </label>
                  <select id="instructor_name" class="form-control">
                    {getuser.map((store) => (
                      <option value={store.uuid}> {store.gyms_ruleset} </option>
                    ))}
                  </select>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label" for="expense_name">
                    Max Usage / User
                  </label>
                  <select id="instructor_name" class="form-control">
                    {getuser.map((store) => (
                      <option value={store.uuid}>
                        {" "}
                        {store.max_uses_rule}{" "}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={UpdateInstructor}>
            Save
          </CButton>{" "}
          <CButton color="secondary" onClick={() => setSuccess(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>

      <CModal show={success} onClose={setSuccess} size="lg">
        <CModalHeader closeButton className="add-user-modal">
          <CModalTitle>Update Expense</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label" for="expense_name">
                    Name of the instructor
                  </label>
                  <select id="update_instructor_info" class="form-control">
                    {getuser.map((store) => (
                      <option
                        defaultValue={getinstructordetail.instructor_info}
                        value={store.uuid}
                      >
                        {" "}
                        {store.first_name}{" "}
                      </option>
                    ))}
                  </select>
                  <input
                    type="hidden"
                    value={getinstructordetail.uuid}
                    id="update_uuid"
                  />
                </div>
              </div>

              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label" for="date_paid">
                    Specialization{" "}
                  </label>
                  <input
                    type="text"
                    id="update_specialization"
                    defaultValue={getinstructordetail.instructor_specializaton}
                    name="update_date_paid"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={UpdateInstructor}>
            Save
          </CButton>{" "}
          <CButton color="secondary" onClick={() => setSuccess(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default Expenses;
