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
import Cookies from 'universal-cookie';

const cookies = new Cookies();
console.log(cookies.get('gym_uuid'))


const AddCourse = () => {

const [blog, setBlog] = useState([])
const [blog2, setBlog2] = useState([])
const [blog3, setBlog3] = useState([])
const [blog4, setBlog4] = useState([])
const axios = require('axios');


useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/weekdays/')
    .then(res => {
        console.log(res)
        setBlog4(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])


useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/location/?gym='+ cookies.get('gym_uuid'))
    .then(res => {
        console.log(res)
        setBlog(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/age_group/')
    .then(res => {
        console.log(res)
        setBlog2(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/instructor/?gym_id='+ cookies.get('gym_uuid'))
    .then(res => {
        console.log(res)
        setBlog3(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

    async function NewCourse() {
        // setSuccess(false);
       
        //  debugger
        // var form = document.forms["regform"]["email"].value;   
        var course_name = document.getElementById("course_name").value;
        var course_description = document.getElementById("course_description").value;
        var course_image = document.querySelector("#course_image");
        var start_time = document.getElementById("start_time").value;
        var end_time = document.getElementById("end_time").value;
        var course_start_date=document.getElementById("course_start_date").value;
        var course_end_date=document.getElementById("course_end_date").value;
        var no_of_participants=document.getElementById("no_of_participants").value;
        var course_price=document.getElementById("course_price").value;
        var course_age_group=document.getElementById("course_age_group").value;
        var instructor_info=document.getElementById("instructor_info").value;
        var select_location = document.getElementById("select_location").value;
        var level=document.getElementById("level").value;
        var course_scheduled_on = $("#course_scheduled_on").val();
        
        var data = new FormData();
        data.append("gym", cookies.get('gym_uuid'));
        data.append("course_name",course_name );
        data.append("course_description", course_description);
        data.append("course_image",course_image.files[0]);
        data.append("start_time",start_time );
        data.append("end_time", end_time);
        data.append("course_start_date",course_start_date );
        data.append("course_end_date", course_end_date);
        data.append("no_of_participants",no_of_participants );
        data.append("course_price",course_price );
        data.append("course_age_group",course_age_group );
        data.append("instructor_info",instructor_info );
        data.append("select_location",select_location );
        for (var i = 0; i < course_scheduled_on.length; i++) {
            data.append('course_scheduled_on', course_scheduled_on[i]);
        }
        data.append("level",level);
    
        try {
          console.log('Trying')
    
          var config = {
            method: "post",
            url: BASE_URL + "gymprofile/course/",
            headers: {
              "content-type": `multipart/form-data; boundary=${data._boundary}`,
            },
            data: data,
          };
    
          await axios(config)
            .then(function (res) {
              //  debugger
              console.log(JSON.stringify(res.data));
    
              
                if (res.status === 200) {
                    window.location.href='#/base/Course';
    
                }
                else {
                  //  debugger
                  alert("BAD REQUEST");
                }
              
              //  debugger
              return res.data
            })
    
    
        }
        catch (err) {
          //  debugger
          console.error(err);
    
        }
      }


  return (
    <>
  
    <CRow>
    <CCol xs="12" lg="12">
          <CCard>

        <div className="col-md-12 bg-blue">
            <div className="addclass-title">
                <h3>Add Course</h3>
            </div>
        </div>
        
        <div class="card-body pb-0" >
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Course Title <span class="text-danger"> * </span></label>
                        <input type="text" id="course_name" name="course_name" class="form-control"  />
                </div>
                </div>

                 <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Course Description  <span class="text-danger"> * </span></label>
                        <input type="text" id="course_description" name="course_description" class="form-control"  />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Participation Number <span class="text-danger"> * </span></label>
                        <input type="text" id="no_of_participants" name="no_of_participants" class="form-control"  />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Course Image  <span class="text-danger"> * </span></label>
                        <br></br>
                        <input type="file" id="course_image" name="course_image"  />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Course Schedule <span class="text-danger"> * </span></label>
                        
                        <select name="course_scheduled_on"  class="form-control" id="course_scheduled_on" multiple>
                        {blog4.map(store =>(<option value={store.uuid}>{store.day}</option>))}
                        </select>
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Start Time <span class="text-danger"> * </span></label>
                        <input type="time" id="start_time" name="start_time" class="form-control"  />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">End Time <span class="text-danger"> * </span></label>
                        <input type="time" id="end_time" name="end_time" class="form-control"  />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Start Date <span class="text-danger"> * </span></label>
                        <input type="date" id="course_start_date" name="course_start_date" class="form-control"  />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">End Date <span class="text-danger"> * </span></label>
                        <input type="date" id="course_end_date" name="course_end_date" class="form-control"  />
                    </div>
                </div>


                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Age Group <span class="text-danger"> * </span></label>
                        <select id='course_age_group' name='course_age_group' class="form-control">
                        {blog2.map(store => (<option value={store.uuid}> {store.age} </option>))}
                        </select>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="gender"> Gender <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <select name="age" class="form-control" id="age" >
                            <option > Male </option>
                            <option > female </option> 
                            <option > other </option>  
                        </select>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Location <span class="text-danger"> * </span></label>
                        <select id='select_location' name='select_location' class="form-control">
                        {blog.map(store => (<option value={store.uuid}> {store.gym_location} </option>))}
                       
                        </select>
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Instructor <span class="text-danger"> * </span></label>
                        <select id='instructor_info' name='instructor_info' class="form-control">
                        {blog3.map(store => (<option value={store.uuid}> {store.instructor_info} </option>))}
                       
                        </select>
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Amount <span class="text-danger"> * </span></label>
                        <input type="text" id="course_price" name="course_price" class="form-control"  />
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="gender">Level<span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <select id="level"  name="level" class="form-control">
                                <option value='All Levels'>All Levels</option>
                                <option value='Intermediate'>Intermediate</option>
                                <option value='Advance'>Advance</option>
                            </select>
                        </div>
                    </div>
                </div>

        </div>

        </div>
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-3">
                <div class="form-group">
                    <label class="form-label" for="first_name">Course Schedule <span class="text-danger"> * </span></label>
                    <select name="course_scheduled_on"  class="form-control" id="course_scheduled_on">
                    {blog4.map(store =>(<option value={store.uuid}>{store.day}</option>))}
                    </select>
                </div>
                </div>

                <div className="col-md-3">
                <div class="form-group">
                    <label class="form-label" for="first_name">Start time </label>
                    <input type="time"  id="start_time" class="form-control" />
                </div>
                </div>

                 <div className="col-md-3">
                    <div class="form-group">
                        <label class="form-label" for="first_name">End time </label>
                        <input type="time" id="end_time" class="form-control" />
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="btn-dd">
                    <button type="button" class="btn btn-primary">Add</button>
              
                     </div>
                </div>  
                
                <div className="col-md-12">
          <div className="manage-table-main">
                <table class="table">
            <thead>
            <tr>
                <th> Schedule </th>
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
                    <button type="button" class="btn btn-danger">Remove</button> 
                </td>
            </tr>
             </tbody>
        </table>

    </div>
        </div>

        <div class="col-md-12 text-center">
                <button type="button" onClick={NewCourse} class="btn btn-primary">Save</button>
                </div>
            </div>      
        </div>

    
            
        </CCard>
        </CCol>
    </CRow>    
    
    </>
  )
}

export default AddCourse
