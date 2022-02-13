import React, { useState,useEffect } from 'react'
import $ from 'jquery';
import Split from 'react-split';
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
import Cookies from 'universal-cookie';
import BASE_URL from 'src/views/base';


const cookies = new Cookies();


function datetog() {
    
    $('#datetoggle').change(function() {
        if  (this.checked){
            $('#class_expiry_date').show();
        }
        else{
            $('#class_expiry_date').hide();
        }

            
    });
}


const Addclass = () => {

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
        setBlog(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/instructor/?gym_id='+cookies.get('gym_uuid'))
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
    .get(BASE_URL + 'gymprofile/location/?gym='+ cookies.get('gym_uuid'))
    .then(res => {
        console.log(res)
        setBlog3(res.data)
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
        setBlog4(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])



async function Newclass() {
    // setSuccess(false);
   
    // //  debugger
    var Split = require('react-split');
    var gym = cookies.get('gym_uuid');   
    var class_topic = document.getElementById("class_topic").value;
    var class_description = document.getElementById("class_description").value;
    var class_image = document.querySelector("#class_image");
    var start_time = document.getElementById("start_time").value;
    var end_time = document.getElementById("end_time").value;
    var no_of_participants = document.getElementById("no_of_participants").value;
    var instructor_info = document.getElementById("instructor_info").value;
    var classes_age_group = document.getElementById("age").value;
    var select_location = document.getElementById("location").value;
    var class_scheduled_on = $("#class_scheduled_on").val();
    console.log(class_scheduled_on)
    var class_expiry_date = document.getElementById("class_expiry_date").value;
    var level = document.getElementById("level").value;

    var data = new FormData();
    data.append("class_topic",class_topic );
    data.append("gym",gym );
    data.append("class_description",class_description );
    data.append("class_image",class_image.files[0] );
    data.append("start_time",start_time );
    data.append("end_time", end_time);
    data.append("no_of_participants", no_of_participants);
    data.append("instructor_info",instructor_info );
    data.append("classes_age_group",classes_age_group );
    data.append("select_location",select_location );
    data.append("level", level);
    for (var i = 0; i < class_scheduled_on.length; i++) {
        data.append('class_scheduled_on', class_scheduled_on[i]);
    }
    data.append("class_expiry_date",class_expiry_date );

// (### Get Values of variable in formdata ####)

    // console.log(data.getAll('class_scheduled_on')); 

    try {
      console.log('Trying')
    //   //  debugger
      var config = {
        method: "post",
        url: BASE_URL + "gymprofile/class/",
        headers: {
          "content-type": `multipart/form-data; boundary=${data._boundary}`,
        },
        data: data,
        class_scheduled_on:class_scheduled_on
      };

      await axios(config)
        .then(function (res) {
        //   //  debugger
          console.log(JSON.stringify(res.data));

          if (res.status === 200) {
            // //  debugger
            if (res.status === 200) {
                window.location='#/base/Classes';

            }
            else {
              //  debugger
              alert("BAD REQUEST");
            }
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
                <h3>Add Class</h3>
            </div>
        </div>
        <div class="card-body">
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Class Topic <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="class_topic" name="class_topic" class="form-control"  />
                    </div>
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Class Description <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <textarea class="form-control" id="class_description" name="class_description" rows="1"></textarea>
                    </div>
                </div>
                </div>


                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Start Time <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="time" id="start_time" name="start_time" class="form-control"  />
                    </div>
                </div>
                </div>


                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">End Time<span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="time" id="end_time" name="end_time" class="form-control"  />
                    </div>
                </div>
                </div>
                
                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">No of Participants<span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="no_of_participants" name="no_of_participants" class="form-control"  />
                    </div>
                </div>
                </div>

                <div class="col-sm-6">
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="instructor_info">Instructor <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <select id="instructor_info" name="instructor_info" class="form-control">
                                {blog2.map(store =>(<option value={store.uuid}>{store.instructor_info} </option>))}
                            </select>
                        </div>
                    </div>
                </div>

                

                <div class="col-sm-6">
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="gender">Age Group <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <select name="age" class="form-control" id="age" >
                        {blog4.map(store =>(<option value={store.uuid}>{store.age} </option>))}
                        </select>
                        </div>
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

                <div class="col-sm-6">
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="gender">Location <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <select name="location" class="form-control" id="location" >
                        {blog3.map(store =>(<option value={store.uuid}>{store.gym_location}</option>))}
                            
                        </select>
                        </div>
                    </div>
                </div>

                        
                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Class Expiry Date  <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <td>
                            <label class="switch">
                            <input id='datetoggle' type="checkbox" onClick={datetog}/>
                            <span class="slider round"></span>
                            </label>
                        </td>
                        <input type="date" id="class_expiry_date" name="class_expiry_date" class="class_expiry_date form-control"  />
                    </div>
                </div>
                </div>

                
                <div class="col-sm-6">
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="gender">Scheduled on <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <select id="class_scheduled_on" multiple="multiple" name="class_scheduled_on" class="form-control">
                                {blog.map(store =>(<option value={store.uuid}>{store.day} </option>))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="profile_image">Class Image <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <input type="file" id="class_image" name="class_image" />
                        </div>
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

                <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-3">
                <div class="form-group">
                    <label class="form-label" for="first_name">Class Schedule <span class="text-danger"> * </span></label>
                    <select name="course_scheduled_on"  class="form-control" id="course_scheduled_on">
                 <option >Select</option>
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

    
            </div>      
        </div>

                


        </div>
        </div>
        <CModalFooter>
            <div className="col-md-12 text-center">
            <CButton onClick={Newclass} color="primary">Save</CButton>{' '}
            <CButton 
            color="secondary" 
            // onClick={() => setPrimary(false)}
            >Close</CButton>
            </div>
           
        </CModalFooter>
        </CCard>
        </CCol>
    </CRow>    
    
    </>
  )
}

export default Addclass
