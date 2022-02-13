import React, { useState, useEffect } from "react";
import $ from "jquery";
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
  CRow,
} from "@coreui/react";
import { DocsLink } from "src/reusable";

import ManageData from "../../users/ManageData";
import InformationTab from "./InformationTab";
import IntarectionTab from "./IntarectionTab";
import PurchasesTab from "./PurchasesTab";
import ActivitesTab from "./ActivitesTab";
import EditTab from "./EditTab";
import HistoryTab from "./HistoryTab";
import AdduserModal from "./AdduserModal";

import Cookies from "universal-cookie";
import BASE_URL from "src/views/base";
const cookies = new Cookies();
console.log(cookies.get("gym_uuid"));
const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const fields = [
  "id",
  "name",
  "user",
  "created",
  "ageGroup",
  "status",
  "action",
];

const UserDetail = () => {
  const [blog, setBlog] = useState([]);
  const axios = require("axios");
  useEffect(() => {
    axios
      .get(
        BASE_URL +
          "user/subscribed/userslist/?gym_id=" +
          cookies.get("gym_uuid")
      )
      .then((res) => {
        console.log(res);
        setBlog(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [modal, setModal] = useState(false);
  const [large, setLarge] = useState(false);
  const [small, setSmall] = useState(false);
  const [primary, setPrimary] = useState(false);
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  const [danger, setDanger] = useState(false);
  const [info, setInfo] = useState(false);
  const [blog2, setblog2] = useState(false);
  const [blog3, setblog3] = useState([]);
  const [activity, useractivity] = useState([]);
  const [bookedclass, userclass] = useState([]);
  const [finduser, setsearch] = useState([]);

  const [active, setActive] = useState(1);
  const lorem =
    "Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.";

  function Search() {
    var ser = document.getElementById("ser").value;

    axios
      .get(
        BASE_URL +
          "user/search_user/?first_name=" +
          ser +
          "&gym=" +
          cookies.get("gym_uuid")
      )
      .then((getuuid) => {
        console.log(getuuid);
        setsearch(getuuid.data);
      });
  }

  function Clicker(uuid) {
    setLarge(!large);

    axios.get(BASE_URL + "user/" + uuid).then((getuuid) => {
      console.clear();
      console.log(getuuid);
      setblog2(getuuid.data);
    });

    axios
      .get(
        BASE_URL +
          "user/userhistory/" +
          uuid +
          "/?gym_id=" +
          cookies.get("gym_uuid")
      )
      .then((getuuid) => {
        console.log(getuuid);
        setblog3(getuuid.data);
      })

      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        BASE_URL +
          "user/subscription/user/?uuid=" +
          uuid +
          "&gym_id=" +
          cookies.get("gym_uuid")
      )
      .then((getuuid) => {
        console.log(getuuid);
        useractivity(getuuid.data);
      })

      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        BASE_URL +
          "user/bookclass/list/?uuid=" +
          uuid +
          "&gym_id=" +
          cookies.get("gym_uuid")
      )
      .then((getuuid) => {
        //  debugger
        console.log("getUUId>>>>>>>>>>>>>>>>>", getuuid);
        userclass(getuuid.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }

  async function UserUpdate() {
    var username = document.getElementById("username").value;
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var phone_number = document.getElementById("mobile").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var profile_picture = document.querySelector("#profile_image");
    var uuid = document.getElementById("uuid").value;

    var data = new FormData();
    data.append("username", username);
    data.append("first_name", first_name);
    data.append("last_name", last_name);
    data.append("phone_number", phone_number);
    data.append("dob", dob);
    data.append("address", address);
    data.append("profile_picture", profile_picture.files[0]);
    data.append("uuid", uuid);

    try {
      console.log("Trying");

      var config = {
        method: "patch",
        url: BASE_URL + "user/userupdate/",
        headers: {
          "content-type": `multipart/form-data; boundary=${data._boundary}`,
        },
        data: data,
      };

      await axios(config).then(function (res) {
        console.log(JSON.stringify(res.data));

        if (res.status === 200) {
          if (res.status === 200) {
            window.location.reload();
          } else {
            alert("BAD REQUEST");
          }
        }

        return res.data;
      });
    } catch (err) {
      console.error(err);
    }
  }

  async function CSVExport(data) {
    //  debugger

    {
      console.log("Trying to send request");

      try {
        console.log("Trying");
        let res = await axios.post(BASE_URL + "user/export/csv/", {
          data: data,
          gym_id: cookies.get("gym_uuid"),
        });
        if (res.status === 200) {
          //  debugger
          // test for status you want, etc
          console.log(res.data.data);
          // setreports(res.data.data);
          // alert(res.data.message);
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

  async function civil() {
    //  debugger
    var civil_id = document.getElementById("civil_id").value;
    var uuid = document.getElementById("uuid").value;

    {
      console.log("Trying to send request");

      try {
        console.log("Trying");
        let res = await axios.patch(BASE_URL + "user/userupdate/", {
          civil_id: civil_id,
          uuid: uuid,
        });
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
  var perm = cookies.get("perms");

  return (
    <>
      <CRow>
        <div className="col-md-12">
          <div className="manage_top_btn">
            <div className="manage-btn-left">
              <button className="mn_btn_1">
                {" "}
                <i class="fa fa-refresh" aria-hidden="true"></i> Refresh list{" "}
              </button>
              {/* <button className="mn_btn_1 mr-1" onClick={() => setPrimary(!primary)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add new user </button> */}
              <button className="mn_btn_1" onClick={() => CSVExport()}>
                {" "}
                <i class="fa fa-file-excel-o" aria-hidden="true"></i> Export to
                excel{" "}
              </button>
              {/* <button className="mn_btn_1 mr-1" onClick={() => setSuccess(!success)}> <i class="fa fa-user" aria-hidden="true"></i> Customer authentication </button> */}
              <button
                className="mn_btn_1 mr-1"
                onClick={() => setDanger(!danger)}
              >
                {" "}
                <i class="fa fa-search" aria-hidden="true"></i> Search{" "}
              </button>
            </div>
            {/* <div class="btn-group group-btn-main">
              <button type="button" class="btn btn-primary">All</button>
              <button type="button" class="btn btn-success">Active</button>
              <button type="button" class="btn btn-warning">Inactive</button>
              <button type="button" class="btn btn-danger">Blocked</button>
            </div> */}
          </div>
        </div>
        <CCol xs="12" lg="12">
          <CCard>
            <div className="col-md-12">
              <div className="manage-table-main">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>User Id</th>
                      <th>Created On</th>
                      {/* <th>Role</th> */}
                      {/* <th>Status</th> */}
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blog.map((store) => (
                      <tr>
                        <td>{store.first_name + " " + store.last_name}</td>
                        <td>{store.unique_id}</td>
                        <td>{store.created_at}</td>
                        {/* <td>{store.role}</td> */}
                        {/* <td>  <button type="button" class="btn btn-success">Active</button>  </td> */}
                        <td>
                          <CButton
                            color="primary"
                            onClick={() => Clicker(store.uuid)}
                          >
                            Manage
                          </CButton>{" "}
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

      {/* manage popup start here */}
      <CModal show={large} onClose={() => setLarge(!large)} size="lg">
        <CModalHeader className="add-user-modal" closeButton>
          <CModalTitle>Manage</CModalTitle>
        </CModalHeader>

        <CModalBody>
          <div className="manage-tab-main">
            <CCardBody>
              <CTabs>
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink>Profile</CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>Interactions</CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>Purchases</CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>Activities</CNavLink>
                  </CNavItem>
                  {/* <CNavItem>
                    <CNavLink>
                      Edit
                  </CNavLink>
                  </CNavItem> */}
                  <CNavItem>
                    <CNavLink>History</CNavLink>
                  </CNavItem>
                  {/* <CNavItem>
                    <CNavLink>
                      Profile
                  </CNavLink>
                  </CNavItem> */}
                </CNav>
                <CTabContent>
                  {/* ------------------------------INFORMATION PAGE------------------------------------- */}
                  <CTabPane>
                    <div className="tab-pane-main">
                      <CCard>
                        <CCardHeader>
                          <i class="fa fa-info-circle" aria-hidden="true"></i>
                          Personal Information
                        </CCardHeader>
                      </CCard>

                      <div className="tab-title ">
                        <h4>{blog2.first_name + " " + blog2.last_name}</h4>
                        <p>
                          <i class="fa fa-envelope" aria-hidden="true"></i>
                          <strong>Email </strong>
                          <span>: {blog2.email} </span>
                        </p>

                        {/* <p>
                          <i class="fa fa-id-card" aria-hidden="true"></i>
                          <strong> Username </strong><span>:{blog2.username}</span>
                        </p> */}

                        {/* <p>
                    <i class="fa fa-phone " aria-hidden="true"></i> 
                    <strong> User ID </strong><span>: Lorem ipsum </span> 
                    </p> */}

                        <p>
                          <i class="fa fa-phone " aria-hidden="true"></i>
                          <strong> Mobile </strong>
                          <span>: {blog2.phone_number}</span>
                        </p>

                        <p>
                          <i class="fa fa-genderless " aria-hidden="true"></i>
                          <strong> Gender </strong>
                          <span>:{blog2.gender} </span>
                        </p>

                        <p>
                          <i class="fa fa-birthday-cake" aria-hidden="true"></i>
                          <strong> DOB </strong>
                          <span>:{blog2.dob} </span>
                        </p>

                        {/* <p>
                          <i
                            class="fa fa-address-card-o"
                            aria-hidden="true"
                          ></i>
                          <strong> Address </strong>
                          <span>: {blog2.address} </span>
                        </p> */}

                        <p>
                          <i class="fa fa-calendar" aria-hidden="true"></i>
                          <strong>Created On </strong>
                          <span>: {blog2.created_at} </span>
                        </p>

                        <p>
                          <i
                            class="fa fa-user-circle-o "
                            aria-hidden="true"
                          ></i>
                          <strong>Membership Status </strong>
                          <span>: Active </span>
                        </p>

                        {/* <p>
                    <i class="fa fa-id-badge" aria-hidden="true"></i>
                    <strong>Age Group   </strong><span>: Adult </span> 
                    </p> */}

                        {/* <p>
                        <a href="#"><span class="badge badge-info">Download</span></a>                        
                    </p> */}
                      </div>

                      <div class="manage-tab-choose-file-main">
                        <span id="uploaded_image">
                          <img
                            src={BASE_URL.slice(0, -1) + blog2.profile_picture}
                            id="upimage"
                            class="rounded-circle upimage"
                            draggable="true"
                            data-bukket-ext-bukket-draggable="true"
                          />
                        </span>
                        {/* <form id="uploadimage" action="" method="post" enctype="multipart/form-data">
                              <input type="hidden" name="_token" value="3OturUnQ21cPXzwyBk4UJiEBptmGuIZazzXBrCI9" />
                                <input type="hidden" name="cust_id" value="82" />
                        <div class="choose_file mt-2">
                            <span><i class="fa fa-picture-o" aria-hidden="true" ></i> Upload a photo</span>
                            <input className="manage-profile_image" name="profile_image" type="file" id="profile_image" />
                        </div> 
                        </form> */}
                      </div>
                    </div>
                  </CTabPane>

                  <CTabPane>
                    <IntarectionTab />
                  </CTabPane>
                  {/* ---------------------------------------------Purchase tab--------------------------------------- */}
                  <CTabPane>
                    <CCol xs="12" lg="12">
                      <div className="manage-table-main purchse-tab-table">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th>Class</th>
                              <th>Book date</th>
                              <th>Expire</th>
                              <th>Action</th>
                            </tr>
                          </thead>

                          {bookedclass.map((store) => (
                            <tbody>
                              <tr>
                                <td>{store.select_classes}</td>
                                <td>{store.created_at}</td>
                                <td> 2021-02-24 </td>
                                <td>
                                  <a
                                    href="#"
                                    class="view"
                                    title="View Receipt"
                                    data-toggle="tooltip"
                                  >
                                    <i class="fa fa-eye" aria-hidden="true"></i>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          ))}
                        </table>

                        {/* <div className="hed_title">
                          <i class="fa fa-money" aria-hidden="true"></i>
                            Total Amount Paid : <span> 100 </span>
                        </div> */}
                      </div>
                    </CCol>
                  </CTabPane>
                  {/*------------------------------------------ Activity PAGE---------------------------------- */}
                  <CTabPane>
                    <div className="col-md-12">
                      <table class="countries_list">
                        <tbody>
                          <tr>
                            <td>Last Package Purchased</td>
                            <td class="fs15 fw700 text-left">
                              {activity.package}
                            </td>
                          </tr>
                          <tr>
                            <td>Last Purchase date</td>
                            <td class="fs15 fw700 text-left">
                              {activity.updated_at}{" "}
                            </td>
                          </tr>
                          <tr>
                            <td> Total Class Passes</td>
                            <td class="fs15 fw700 text-left">
                              {" "}
                              {activity.package_class_passes}{" "}
                            </td>
                          </tr>
                          <tr>
                            <td>Expire Date</td>
                            <td class="fs15 fw700 text-left">
                              {activity.subscription_validity}
                            </td>
                          </tr>
                          <tr>
                            <td>Last Login Date</td>
                            <td class="fs15 fw700 text-left">
                              {blog2.last_login}
                            </td>
                          </tr>
                          {/* <tr>
                      <td>Days Since Last Login</td>
                      <td class="fs15 fw700 text-left">-0 days</td>
                    </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </CTabPane>
                  {/*--------------------------- EDIT PAGE---------------------------------- */}
                  {/* <CTabPane>
                    <CCol xs="12" lg="12">
                      <form id="myForm" enctype="multipart/form-data">
                        <div className="col-md-6">
                          <div class="form-group border-bottom-0 ">
                            <label class="form-label" for="profile_image">
                              Profile Picture{" "}
                              <span class="text-danger"> * </span>
                            </label>
                            <span class="desc"></span>
                            <div class="controls">
                              <input
                                type="file"
                                id="profile_image"
                                name="profile_image"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row ">
                          <div className="col-md-6">
                            <div class="form-group border-bottom-0 ">
                              <label class="form-label" for="first_name">
                                First Name <span class="text-danger"> * </span>
                              </label>
                              <span class="desc"></span>
                              <div class="controls">
                                <input
                                  type="text"
                                  id="first_name"
                                  name="first_name"
                                  class="form-control"
                                  defaultValue={blog2.first_name}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div class="form-group border-bottom-0 ">
                              <label class="form-label" for="last_name">
                                Last Name <span class="text-danger"> * </span>
                              </label>
                              <span class="desc"></span>
                              <div class="controls">
                                <input
                                  type="text"
                                  id="last_name"
                                  name="last_name"
                                  class="form-control"
                                  defaultValue={blog2.last_name}
                                  autofocus=""
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div class="form-group ">
                              <label class="form-label" for="address">
                                {" "}
                                Address{" "}
                              </label>
                              <span class="desc"></span>
                              <div class="controls">
                                <textarea
                                  class="form-control"
                                  id="address"
                                  defaultValue={blog2.address}
                                  name="address"
                                  rows="1"
                                ></textarea>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div class="form-group ">
                              <label class="form-label" for="dob">
                                {" "}
                                Date of birth{" "}
                              </label>
                              <span class="desc"></span>
                              <div class="controls">
                                <input
                                  type="date"
                                  id="dob"
                                  class="form-control"
                                  defaultValue={blog2.dob}
                                  autofocus=""
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div class="form-group ">
                              <label class="form-label" for="username">
                                Username{" "}
                              </label>
                              <span class="desc"></span>
                              <div class="controls">
                                <input
                                  type="text"
                                  id="username"
                                  name="username"
                                  class="form-control"
                                  defaultValue={blog2.username}
                                  autofocus=""
                                />
                                <input
                                  type="hidden"
                                  id="uuid"
                                  name="uuid"
                                  value={blog2.uuid}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div class="form-group ">
                              <label class="form-label" for="mobile">
                                {" "}
                                Mobile no{" "}
                              </label>
                              <span class="desc"></span>
                              <div class="controls">
                                <input
                                  type="text"
                                  id="mobile"
                                  name="mobile"
                                  class="form-control"
                                  defaultValue={blog2.phone_number}
                                  autofocus=""
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div class="form-group ">
                              <label class="form-label" for="address">
                                Civil id{" "}
                              </label>
                              <span class="desc"></span>
                              <div class="controls">
                                <input
                                  type="text"
                                  id="civil"
                                  defaultValue={blog2.civil_id}
                                  name="last_name"
                                  class="form-control"
                                  autofocus=""
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div class="form-group ">
                              <label class="form-label" for="address">
                                {" "}
                                Status{" "}
                              </label>
                              <span class="desc"></span>
                              <div class="controls">
                                <select
                                  id="gender"
                                  name="gender"
                                  class="form-control"
                                >
                                  <option value="">Please select </option>
                                  <option value="0">Active </option>
                                  <option selected="" value="1">
                                    Suspended{" "}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-center">
                            <a href="#"><span class="badge badge-info">Reset Password</span></a>
                            <button
                              type="button"
                              onClick={UserUpdate}
                              class="btn btn-primary updateprofile"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </form>
                    </CCol>
                  </CTabPane> */}

                  {/* ----------------------------- HISTORY TAB --------------------------------- */}
                  <CTabPane>
                    <div className="col-md-12">
                      <table class="countries_list">
                        <thead>
                          <tr>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Registration</td>
                            <td>{blog2.created_at}</td>
                            <td>{blog2.created_time}</td>
                          </tr>

                          {blog3[0] ? (
                            blog3.map((store) => (
                              <tr>
                                <td>{store.action}</td>
                                <td>{store.created_at}</td>
                                <td>{store.created_time}</td>
                              </tr>
                            ))
                          ) : (
                            <tr></tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </CTabPane>

                  {/*----------- ---------------------------------------------------------------- */}

                  <CTabPane>
                    <div className="tab-pane-main">
                      <CCard>
                        <CCardHeader>
                          <i class="fa fa-info-circle" aria-hidden="true"></i>
                          Authentication
                        </CCardHeader>
                      </CCard>
                      {(() => {
                        //  debugger
                        if (blog2.civil_id) {
                          return (
                            <div className="tab-title ">
                              <h3>Civil Id : {blog2.civil_id}</h3>
                            </div>
                          );
                        } else {
                          return (
                            <div className="tab-title ">
                              <p>
                                {/* <i class="fa fa-id-card" aria-hidden="true"></i> */}
                                <span>
                                  <div>
                                    <h3>Add Civil ID :</h3>
                                    <input id="civil_id" type="text"></input>
                                  </div>
                                  {/* <div>
                              <br></br>
                            <label>Document  - </label>
                            <input type= 'file' id = 'civil_id_doc' ></input>
                            </div> */}
                                  <br></br>
                                  <div class="col-md-12 text-center">
                                    <button
                                      type="button"
                                      class="btn btn-primary updateprofile"
                                      onClick={civil}
                                    >
                                      Save
                                    </button>
                                  </div>
                                </span>
                              </p>
                            </div>
                          );
                        }
                      })()}
                    </div>
                  </CTabPane>

                  {/*----------- ---------------------------------------------------------------- */}
                </CTabContent>
              </CTabs>
            </CCardBody>
          </div>
        </CModalBody>
      </CModal>

      <CModal show={primary} onClose={setPrimary} size="lg">
        <CModalHeader closeButton className="add-user-modal">
          <CModalTitle>Add User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <AdduserModal />
        </CModalBody>
        {/* <CModalFooter>
          <div className="col-md-12 text-center" >
            <CButton color="primary">Save</CButton>{' '}
            <CButton
              color="secondary"
              onClick={() => setModal(false)}
            >Close</CButton>
          </div>
        </CModalFooter> */}
      </CModal>

      <CModal show={success} onClose={setSuccess} size="lg">
        <CModalHeader closeButton className="add-user-modal">
          <CModalTitle>Customer authentication</CModalTitle>
        </CModalHeader>

        <CModalBody>
          {/* <div class="col-md-8 m-auto">
            <div class="form-group row">
              <label class="control-label col-md-3  m-auto  ">Change Status</label>
              <div class="col-md-9 col-sm-9 ">
                <div class="input-group">
                  <input type="text" id='ser' class="form-control" placeholder="Search" />
                    <button class="btn btn-primary search" onClick={Search} type='submit'>Submit</button>
                  <div class="input-group-btn">
                      <i class="glyphicon glyphicon-search"></i>
                  </div>
                </div>
              </div>
            </div>

          </div> */}

          <div className="manage-table-main purchse-tab-table">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>User id</th>
                  <th>Email</th>
                  <th>Civil Id</th>
                  <th>Created on</th>
                </tr>
              </thead>
              <tbody>
                {finduser.map((store) => (
                  <tr>
                    <td>{store.subscription_user}</td>
                    <td>{store.unique_id}</td>
                    <td>{store.email}</td>
                    {store.civil_id ? (
                      <td> Verified </td>
                    ) : (
                      <button onClick={() => window.location.reload()}>
                        Not Verified
                      </button>
                    )}
                    <td>{store.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CModalBody>

        <CModalFooter>
          <CButton color="primary">Save</CButton>{" "}
          <CButton color="secondary" onClick={() => setSuccess(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>

      <CModal show={danger} onClose={setDanger} size="lg">
        <CModalHeader closeButton className="add-user-modal">
          <CModalTitle>Advanced Search</CModalTitle>
        </CModalHeader>

        <CModalBody>
          <div class="col-md-12 ">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group ">
                  <label class="control-label ">Name</label>
                  <input
                    type="text"
                    name="name_ser"
                    value=""
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-md-6 ">
                <div class="form-group ">
                  <label class="control-label ">Gender</label>
                  <select
                    id="pack_duration"
                    name="pack_duration"
                    class="form-control oncduration"
                    data-field="82"
                  >
                    <option value="1">Male</option>
                    <option value="2"> Female </option>
                  </select>
                </div>
              </div>

              <div class="col-md-6 ">
                <div class="form-group ">
                  <label class="control-label ">Age Group</label>
                  <select
                    id="pack_duration"
                    name="pack_duration"
                    class="form-control oncduration"
                    data-field="82"
                  >
                    <option value="1">Male</option>
                    <option value="2"> Female </option>
                  </select>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group ">
                  <label class="control-label ">Date Joined</label>
                  <input
                    type="text"
                    name="name_ser"
                    value=""
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group ">
                  <label class="control-label ">Mobile</label>
                  <input
                    type="date"
                    name="name_ser"
                    value=""
                    class="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </CModalBody>

        <CModalFooter>
          <div className="col-md-12 text-center">
            <CButton color="primary">Search</CButton>{" "}
          </div>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default UserDetail;
