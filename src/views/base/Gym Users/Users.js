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


const Expenses = () => {

        
const [modal, setModal] = useState(false)
const [large, setLarge] = useState(false)
const [small, setSmall] = useState(false)
const [primary, setPrimary] = useState(false)
const [success, setSuccess] = useState(false)
const [warning, setWarning] = useState(false)
const [danger, setDanger] = useState(false)
const [info, setInfo] = useState(false)


const [getinstructor, setgetinstructor] = useState([])
const [getuser, setuser] = useState([])
const [getroles,setroles] = useState([])

const axios = require('axios');

useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/manager/?gym='+cookies.get('gym_uuid'))
    .then(res => {
        console.log(res.data.employee)
        setgetinstructor(res.data.employee)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/gymroles/?gym=' + cookies.get('gym_uuid'))
    .then(res => {
        console.log(res.data)
        setroles(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])


async function UserRegister() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var role = document.getElementById("role").value;
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var password = document.getElementById("password").value;
    var profile_picture = document.querySelector("#profile_picture");
    var password1 = document.getElementById("confirm_password").value;
    // var password = '1234';
    // var password1 = '1234';
    console.log(password1);
    console.log(password);

    if (password !== password1) {
        alert('Passwords do not match.');
    }
    else {  
       
        console.log('Trying to send request');
        
        var data = new FormData();


        data.append("user_role", role);
        data.append("gym", cookies.get('gym_uuid'));
        data.append("first_name", first_name);
        data.append("last_name", last_name);
        data.append("email", email);
        data.append("gender", gender);
        data.append("password", password);       
        data.append("dob", dob);
        data.append("profile_picture", profile_picture.files[0]);
    
        try {
          console.log('Trying')
    
          var config = {
            method: "post",
            url: BASE_URL + "gymprofile/manager/",
            headers: {
              "content-type": `multipart/form-data; boundary=${data._boundary}`,
            },
            data: data,
          };
    
          await axios(config)
            .then(function (res) {
    
              console.log(JSON.stringify(res.data));
    
              if (res.status === 200) {
    
                if (res.status === 200) {
                  window.location.reload();
    
                }
                else {
    
                  alert("BAD REQUEST");
                }
              }
    
              return res.data
            })
    
    
        }
        catch (err) {
    
          console.error(err);
    
        }
    }
}


  const [userdetail, setuserdetail] = useState([])

  function Clicker(uuid) {
      // alert(uuid);
      setSuccess(!success);
      //  debugger
      axios
        .get(BASE_URL + 'user/' + uuid)
        .then(getuuid => {
          console.log(getuuid);
          setuserdetail(getuuid.data[0]);
        })
  
    }



async function UpdateUser(uuid) {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var role = document.getElementById("update_role").value;
    var first_name = document.getElementById("update_first_name").value;
    var last_name = document.getElementById("update_last_name").value;
    var email = document.getElementById("update_email").value;
    var dob = document.getElementById("update_dob").value;
    var gender = document.getElementById("update_gender").value;
    // var password = document.getElementById("update_password").value;
    var profile_picture = document.querySelector("#update_profile_picture");
    // var password1 = document.getElementById("update_confirm_password").value;
    // var password = '1234';
    // var password1 = '1234';
    // console.log(password1);
    // console.log(password);

     {  
       
        console.log('Trying to send request');
        
        var data = new FormData();

        data.append("uuid", uuid);
        data.append("user_role", role);
        data.append("first_name", first_name);
        data.append("last_name", last_name);
        data.append("email", email);
        data.append("gender", gender);
        data.append("gym", cookies.get('gym_uuid'));       
        data.append("dob", dob);
        if(profile_picture.files[0]){
          data.append("profile_picture", profile_picture.files[0]);
        }
        
    
        try {
          console.log('Trying')
    
          var config = {
            method: "patch",
            url:BASE_URL + 'user/userupdate/',
            headers: {
              "content-type": `multipart/form-data; boundary=${data._boundary}`,
            },
            data: data,
          };
    
          await axios(config)
            .then(function (res) {
    
              console.log(JSON.stringify(res.data));
    
              if (res.status === 200) {
    
                if (res.status === 200) {
                  window.location.reload();
    
                }
                else {
    
                  alert("BAD REQUEST");
                }
              }
    
              return res.data
            })
    
    
        }
        catch (err) {
    
          console.error(err);
    
        }
    }
}

async function DeleteUser(uuid) {
    // setSuccess(false);
   console.log(uuid)
    
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.delete(BASE_URL + 'user/' + uuid +'/', {
            
                uuid:uuid
            });
            if (res.status === 204) {
                //  debugger
                // test for status you want, etc
                console.log(res.status);
                console.log(res.data);
                // alert(res.data.message);
  
                window.location.reload();
            }
            //  debugger
            // Don't forget to return something
            return res.data
        }
        catch (err) {
            console.error('Signup Failed , Please try again.');
            window.location.reload();
            alert(err);
        }
    }
}
var perm = cookies.get('perms')

  // if (perm.includes('Users')){

  return (
    <>
   
        <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">
                  
                  <button className="mn_btn_1 mr-1" onClick={() => setPrimary(!primary)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add User </button>
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
                
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                {/* <th  class="text-center">Frequency</th> */}
                {/* <th  class="text-center">Status</th> */}
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {getinstructor.map(store => (
            <tr>

                <td>{store.name}</td>
                <td>{store.email}</td>
                <td>{store.role}</td>
                {/* <td  class="text-center">{store.frequency}</td> */}
                {/* <td class="text-center">
                <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
                </label>
                </td> */}
                <td>
                <CButton color="primary" onClick={() => Clicker(store.uuid)}>Manage</CButton>{' '}
                <button type="button" class="btn btn-danger" onClick={() => DeleteUser(store.uuid)}><i class="fa fa-trash-o" aria-hidden="true"></i></button> 
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
        show={primary} 
        onClose={setPrimary}
        size="lg"
        >
        <CModalHeader closeButton className="add-user-modal">
        <CModalTitle>Add User</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="col-md-12">
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">First Name</label>
                        <input type="text" id="first_name" name="first_name" class="form-control"  />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Last Name</label>
                        <input type="text" id="last_name" name="last_name" class="form-control"  />
                </div>
                </div>

                 <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Email</label>
                        <input type="email" id="email" name="email" class="form-control"  />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Password</label>
                        <input type="password" id="password" name="password" class="form-control"  />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Confirm Password</label>
                        <input type="password" id="confirm_password" name="cpassword" class="form-control"  />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Profile Picture</label>
                        <input type="file" id="profile_picture" name="profilepic" class='form-control' />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Date of Birth</label><br></br>
                        <input type="date" id="dob" name="dob" class='form-control'  />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Gender</label>
                        <select  id='gender' class="form-control"> 
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        </select>
                        
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Role</label>
                        <select  id='role' class="form-control"> 
                        {getroles.map(store => (<option value={store.uuid}> {store.user_roles} </option>))}
                        </select>
                        
                </div>
                </div>

        </div>

        </div>
        
        </CModalBody>
        <CModalFooter>
            <div className="col-md-12 text-center">
            <CButton color="primary" onClick={UserRegister}>Save</CButton>{' '}
            <CButton 
            color="secondary" 
            onClick={() => setPrimary(false)}
            >Close</CButton>
            </div>
           
        </CModalFooter>
    </CModal>

    <CModal 
        show={success} 
        onClose={setSuccess}
        size="lg"
        >
        <CModalHeader closeButton className="add-user-modal">
        <CModalTitle>Update User</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="card-body">
    
        <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">First Name</label>
                        <input type="text" id="update_first_name" defaultValue={userdetail.first_name} name="first_name" class="form-control"  />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Last Name</label>
                        <input type="text" defaultValue={userdetail.last_name} id="update_last_name" name="last_name" class="form-control"  />
                </div>
                </div>

                 <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Email</label>
                        <input type="email" defaultValue={userdetail.email} id="update_email" name="email" class="form-control"  />
                </div>
                </div>

                {/* <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Password</label>
                        <input type="password" defaultValue={userdetail.password} id="update_password" name="password" class="form-control"  />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Confirm Password</label>
                        <input type="password" defaultValue={userdetail.password} id="update_confirm_password" name="cpassword" class="form-control"  />
                </div>
                </div> */}

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Profile Picture</label>
                        <label class="hint form-label" for="first_name">Current Image - {userdetail.profile_picture} </label>
                        <input type="file" id="update_profile_picture" name="profilepic" class='form-control' />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Date of Birth</label><br></br>
                        <input type="date" id="update_dob" defaultValue={userdetail.dob} name="dob" class='form-control'  />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Gender</label>
                    <label class="hint form-label" for="first_name">Current  - {userdetail.gender} </label>
                        <select  id='update_gender' class="form-control"> 
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        </select>
                        
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Role</label>
                        <label class="hint form-label" for="first_name">Current Role - {userdetail.user_role} </label>
                        <select  id='update_role' class="form-control"> 
                        {getroles.map(store => (<option value={store.uuid}> {store.user_roles} </option>))}
                        </select>
                        
                </div>
                </div>

        </div>
        </div>
        
        </CModalBody>
        <CModalFooter>
            <CButton color="primary" onClick = {()=>UpdateUser(userdetail.uuid)}>Save</CButton>{' '}
            <CButton 
            color="secondary" 
            onClick={() => setSuccess(false)}
            >Close</CButton>
        </CModalFooter>
        </CModal>

    </>
  )
// }
//   else{
//     return window.location.href='#/dashboard'
//   }
}

export default Expenses
