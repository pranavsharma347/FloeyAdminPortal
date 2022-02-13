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



const Course = () => {

        
const [modal, setModal] = useState(false)
const [large, setLarge] = useState(false)
const [small, setSmall] = useState(false)
const [primary, setPrimary] = useState(false)
const [success, setSuccess] = useState(false)
const [warning, setWarning] = useState(false)
const [danger, setDanger] = useState(false)
const [info, setInfo] = useState(false)

const [blog, setBlog] = useState([])
const [blog2, setBlog2] = useState([])
const [blog3, setBlog3] = useState([])
const [blog4, setBlog4] = useState([])
const [getweek, setweek] = useState([])

const axios = require('axios');


useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/get_courses_admin?gym_id='+cookies.get('gym_uuid'))
    .then(res => {
        console.clear();
        console.log(res)
        setBlog(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/location/?gym='+cookies.get('gym_uuid'))
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
    .get(BASE_URL + 'gymprofile/age_group/')
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
    .get(BASE_URL + 'gymprofile/instructor/?gym_id='+cookies.get('gym_uuid'))
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
    .get(BASE_URL + 'gymprofile/weekdays/')
    .then(res => {
        console.log(res)
        setweek(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])



const [getcourse, setgetcourse] = useState([])

function Clicker(uuid) {
    // alert(uuid);
    setPrimary(!primary);
    //  debugger
    axios
      .get(BASE_URL + 'gymprofile/course/' + uuid)
      .then(getuuid => {
        console.log(getuuid);
        setgetcourse(getuuid.data);
      })

  }


  async function UpdateCourse() {
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
    var select_location =document.getElementById("select_location").value;
    var course_scheduled_on= $('#course_scheduled_on').val();
    var uuid = document.getElementById('uuid').value;
    var level=document.getElementById('level').value;
    
    var data = new FormData();
    data.append("course_name",course_name );
    data.append("course_description", course_description);
    // data.append("course_image",course_image.files[0]);
    data.append("start_time",start_time );
    data.append("end_time", end_time);
    data.append("course_start_date",course_start_date );
    data.append("course_end_date", course_end_date);
    data.append("no_of_participants",no_of_participants );
    data.append("course_price",course_price );
    data.append("course_age_group",course_age_group );
    data.append("instructor_info",instructor_info );
    data.append("select_location",select_location );
    data.append('uuid',uuid)
    data.append("level", level);
    // data.append("", );
    
    if(course_image.files[0]){
        data.append("course_image", course_image.files[0]);
    }

    if (course_scheduled_on){
        for (var i = 0; i < course_scheduled_on.length; i++) {
            data.append('course_scheduled_on', course_scheduled_on[i]);
        }
    }
    
      try {
      console.log('Trying')

      var config = {
        method: "patch",
        url: BASE_URL + "gymprofile/course/"+ uuid + '/',
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
            //  debugger
            if (res.status === 200) {
                window.location.reload();

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
  
  async function DeleteCourse(uuid){
      
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.delete(BASE_URL + 'gymprofile/course/' + uuid +'/', {
            
                uuid:uuid
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
            window.location.reload();
            alert(err);
        }
    }
  }

  var perm = cookies.get('perms')

//   if (perm.includes('Product')){

  return (
    <>
   
        <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">

                
                <CHeaderNavLink to="AddCourse/Addcourse">
                <button className="mn_btn_1 mr-1" >
                   <i class="fa fa-plus-circle" aria-hidden="true"></i> 
                    Add Course
                </button>
                </CHeaderNavLink>

                {/* <CHeaderNavLink to="ClassCategories/ClassCategories">
                <button className="mn_btn_1 mr-1">
                <i class="fa fa-list-alt" aria-hidden="true"></i>
                Categories </button>
               
                </CHeaderNavLink> */}
               
                  
                </div> 
                   <div class="btn-group group-btn-main">
                   
                   <button type="button" class="btn btn-primary">All</button>
                    <button type="button" class="btn btn-success">Adult</button>
                    <button type="button" class="btn btn-warning">Teen</button>
                    <button type="button" class="btn btn-danger">Children</button>
                
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
                {/* <th>Sr.no</th> */}
                <th>Title</th>
                <th>Type</th>
                <th>Age group</th>
                <th>Instructor</th>
                <th>Active</th>
                <th>Cover Image</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {blog.map(store => (
            <tr>
                {/* <td>1</td> */}
                <td>{store.course_name}</td>
                <td>Class</td>
                <td>Adult</td>
                <td>{store.instructor_name}</td>
                <td>
                <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
                </label>
                </td>
                <td> <img className="class-cover-img"  src={BASE_URL+store.course_image}/> </td>
                <td>
                <CButton color="primary" onClick={() =>  Clicker(store.uuid) }>Manage</CButton>{' '}
                <button type="button" onClick={()=>DeleteCourse(store.uuid)} class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
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
        <CModalTitle>Update Course</CModalTitle>
        </CModalHeader>
        <CModalBody>
    
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Course Title <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="course_name" defaultValue={getcourse.course_name} name="course_name" class="form-control" />
                        <input type='hidden' id='uuid' name='uuid' value={getcourse.uuid}></input>
                    </div>
                </div>
                </div>

                 <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Course description<span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <textarea type="text" id="course_description" name="course_description" defaultValue={getcourse.course_description} class="form-control" />
                    </div>
                </div>
                </div>
                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Participation Number <span class="text-danger"> * </span></label>
                        <input type="text" defaultValue={getcourse.no_of_participants} id="no_of_participants" name="no_of_participants" class="form-control"  />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Course Image  <span class="text-danger"> * </span></label>
                        <label class="hint form-label" for="first_name">Current Image - {getcourse.course_image} </label>
                        <input type="file" id="course_image" defaultValue={getcourse.course_image} name="course_image" class="form-control"  />
                    </div>
                </div>

               

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Start Time <span class="text-danger"> * </span></label>
                        <input type="time" id="start_time" defaultValue={getcourse.start_time} name="start_time" class="form-control"  />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">End Time <span class="text-danger"> * </span></label>
                        <input type="time" id="end_time" name="end_time" defaultValue={getcourse.end_time} class="form-control"  />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Start Date <span class="text-danger"> * </span></label>
                        <input type="date" id="course_start_date" name="course_start_date" defaultValue={getcourse.course_start_date}class="form-control"  />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">End Date <span class="text-danger"> * </span></label>
                        <input type="date" id="course_end_date" defaultValue={getcourse.course_end_date} name="course_end_date" class="form-control"  />
                    </div>
                </div>


                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Age Group <span class="text-danger"> * </span></label>
                        <label class="hint form-label">Current - {getcourse.course_age_group}</label>
                        <select id='course_age_group' name='course_age_group' defaultValue={getcourse.course_age_group} class="form-control">
                        {blog3.map(store => (<option value={store.uuid}> {store.age} </option>))}
                        </select>
                    </div>
                </div>
                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Course Schedule <span class="text-danger"> * </span></label>
                        <label class="hint form-label" for="first_name">Current Schedule -
                        {getcourse.course_scheduled_on} 
                        </label>
                        <select name="course_scheduled_on"  class="form-control" id="course_scheduled_on" multiple>
                        {getweek.map(store =>
                            (<option value={store.uuid}>{store.day}</option>))}
                        </select>
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Location <span class="text-danger"> * </span></label>
                        <label class=" hint form-label" for="first_name"> Current  - {getcourse.select_location}  </label>
                        <select id='select_location' defaultValue={getcourse.select_location} name='select_location' class="form-control">
                        {blog2.map(store => (<option value={store.uuid}> {store.gym_location} </option>))}
                       
                        </select>
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Instructor <span class="text-danger"> * </span></label>
                        <label class="hint form-label" for="first_name">Current - {getcourse.instructor_info} </label>
                        <select id='instructor_info' defaultValue={getcourse.instructor_info} name='instructor_info' class="form-control">
                        {blog4.map(store => (<option value={store.uuid}> {store.instructor_info} </option>))}
                       
                        </select>
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Amount <span class="text-danger"> * </span></label>
                        <input type="text" id="course_price" defaultValue={getcourse.course_price} name="course_price" class="form-control"  />
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="gender">Level<span class="text-danger"> * </span></label>
                        <label class=" hint form-label" for="first_name">Current - {getcourse.level} </label>
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
        
        </CModalBody>
        <CModalFooter>
            <CButton color="primary" onClick={UpdateCourse}>Save</CButton>{' '}
            <CButton 
            color="secondary" 
            onClick={() => setPrimary(false)}
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

export default Course
