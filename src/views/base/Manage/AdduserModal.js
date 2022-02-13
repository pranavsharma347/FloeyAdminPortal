import React, { useState } from 'react'
import axios from 'axios';
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
    CRow
  } from '@coreui/react'
import Cookies from 'universal-cookie';
import BASE_URL from 'src/views/base';
const cookies = new Cookies();
console.log(cookies.get('gym_uuid'))


class AdduserModal  extends React.Component{

    async UserRegister() {
        // setSuccess(false);
       
        //  debugger
        // var form = document.forms["regform"]["email"].value;   
        var role = document.getElementById("usertype").value;
        var username = document.forms["regform"]["username"].value;
        var first_name = document.forms["regform"]["first_name"].value;
        var last_name = document.forms["regform"]["last_name"].value;
        var email = document.forms["regform"]["email"].value;
        var mobile = document.forms["regform"]["mobile"].value;
        var dob = document.forms["regform"]["dob"].value;
        var gender = document.forms["regform"]["gender"].value;
        var password = document.forms["regform"]["password"].value;
        var password1 = document.forms["regform"]["password1"].value;
        // var password = '1234';
        // var password1 = '1234';
        console.log(password1);
        console.log(password);

        if (password !== password1) {
            alert('Passwords do not match.');
        }
        else {  
           
            console.log('Trying to send request');
            
            try {
                let loader = `<div><div class="loader centered"/></div>`;
                document.getElementById('reg').innerHTML = loader;
                console.log('Trying');
                let res = await axios.post(BASE_URL + 'user/', {
                    role : role,
                    username:username,
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    phone_number: mobile,
                    dob:dob,
                    gender:gender,
                    password: password,
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
                return res.data
            }
            catch (err) {
                console.error('Signup Failed , Please try again.');
                window.location='/signup';
                alert(err);
            }
        }
    }
    render(){

    return (
        <>  
        <section class="pad-15" id="reg">
        <form id="regform">
        <div className="row">
        <div className="col-md-6">
            <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">First Name <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <input type="text" id="first_name" name="first_name" class="form-control" />
                        </div>
                    </div>
            </div>

            <div className="col-md-6">
                <div class="form-group border-bottom-0 ">
                    <label class="form-label" for="last_name">Last Name <span class="text-danger"> * </span></label>
                    <span class="desc"></span>
                    <div class="controls">
                        <input type="text" id="last_name" name="last_name" class="form-control"  autofocus="" />
                    </div>
                </div>
            </div>


            <div className="col-md-6">
                <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="email">Email address <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <input type="text" id="email" name="email" class="form-control" autofocus="" />
                        </div>
                </div>
            </div>


            <div className="col-md-6">
                <div class="form-group border-bottom-0 ">
                    <label class="form-label" for="username">Username <span class="text-danger"> * </span></label>
                    <span class="desc"></span>
                    <div class="controls">
                        <input type="text" id="username" name="username" class="form-control"  autofocus="" />
                    </div>
                </div>
            </div>

            

            <div className="col-md-6">
                <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="mobile">Mobile No. <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <input type="text" id="mobile" name="mobile" class="form-control" autofocus="" />
                        </div>
                </div>
            </div>


            <div className="col-md-6">
                <div class="form-group border-bottom-0 ">
                    <label class="form-label" for="password">Password <span class="text-danger"> * </span></label>
                    <span class="desc"></span>
                    <div class="controls">
                        <input type="password" id="password" name="password" class="form-control"  autofocus="" />
                    </div>
                </div>
            </div>

         <div className="col-md-6">
            <div class="form-group border-bottom-0 ">
                <label class="form-label" for="password">Confirm Password <span class="text-danger"> * </span></label>
                <span class="desc"></span>
                <div class="controls">
                    <input type="password" id="password1" name="password1" class="form-control"  autofocus="" />
                </div>
            </div>
        </div>

             <div className="col-md-6">
             <div class="form-group border-bottom-0 ">
                        <div class="control-group">
                            <label for="day" class="control-label">Date of birth</label>
                            <div class="controls">
                               <input type="date" id="dob" name="dob" class="form-control" /> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div class="form-group border-bottom-0 ">
                    <label class="form-label" for="gender">Gender <span class="text-danger"> * </span></label>
                    <span class="desc"></span>
                    <div class="controls">
                        <select id="gender" name="gender" class="form-control">
                        <option>Male </option>
                        <option>Female </option>
                        </select>
                    </div>
                </div>
            </div>

            {/* <div className="col-md-6">
                <div class="form-group ">
                        <label class="form-label" for="address"> Address </label>
                        <span class="desc"></span>
                        <div class="controls">
                            <textarea class="form-control" id="address" name="address" rows="1"></textarea>
                        </div>
                </div>
            </div> */}

            <div className="col-md-6">

            <label class="form-label" for="email">UserType <span class="text-danger"> * </span></label>
            <span class="desc"></span>
            <div class="controls">
                <select name="usertype" id="usertype" class="form-control" >
                    <option>Customer</option>
                    <option>Instructor</option>
                    <option>SubAdmin</option>
                    <option>Gym Owner</option>

                </select>
            </div>
            </div>


            

        </div>
        </form>
    
        </section>

        <CModalFooter>
          <div className="col-md-12 text-center" >
            <CButton color="primary" onClick={this.UserRegister}>Save</CButton>{' '}
            <CButton
              color="secondary"
            >Close</CButton>
          </div>
        </CModalFooter>

                    
      

</>
)
}
}
export default AdduserModal