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
import Cookies from 'universal-cookie';
import BASE_URL from 'src/views/base';


const cookies = new Cookies();
const Classes = () => {
var perm = cookies.get('perms')

const [blog, setBlog] = useState([])
const [blog2, setBlog2] = useState([])
const [blog3, setBlog3] = useState([])
const [blog4, setBlog4] = useState([])
const [blog5, setBlog5] = useState([])


const axios = require('axios');
useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/class/?gym_id='+ cookies.get('gym_uuid'))
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
    .get(BASE_URL + 'gymprofile/location/?gym=' + cookies.get('gym_uuid'))
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
        setBlog5(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])
        
const [modal, setModal] = useState(false)
const [large, setLarge] = useState(false)
const [small, setSmall] = useState(false)
const [primary, setPrimary] = useState(false)
const [success, setSuccess] = useState(false)
const [warning, setWarning] = useState(false)
const [danger, setDanger] = useState(false)
const [info, setInfo] = useState(false)

const [getclasses, setgetclasses] = useState([])


async function inactive(uuid){
    //  debugger

    await axios.patch(BASE_URL+'gymprofile/classes/' + uuid + '/', 
	{ 
		is_active:false, 
        uuid:uuid
		 
	})
    .then(getuuid => {
        console.log(getuuid);
        setgetclasses(getuuid.data);
        window.location.reload()
      })

   
}

async function active(uuid){
    //  debugger

    await axios.patch(BASE_URL+'gymprofile/classes/' + uuid + '/', 
	{ 
		is_active:true, 
        uuid:uuid
		 
	})
    .then(getuuid => {
        console.log(getuuid);
        setgetclasses(getuuid.data);
        window.location.reload()
      })

   
}



function Clicker(uuid) {
    // alert(uuid);
    setSuccess(!success);
    //  debugger
    axios
      .get(BASE_URL + 'gymprofile/classes/' + uuid)
      .then(getuuid => {
        console.log(getuuid);
        setgetclasses(getuuid.data);
      })

  }
  
  async function UpdateClass() {
      
    var class_topic= document.getElementById("class_topic").value;
    var class_description= document.getElementById("class_description").value;
    var class_image = document.querySelector("#class_image");
    var class_scheduled_on= $("#class_scheduled_on").val();
    var start_time= document.getElementById("start_time").value;
    var end_time= document.getElementById("end_time").value;
    var instructor_info= document.getElementById("instructor_info").value;
    var classes_age_group= document.getElementById("classes_age_group").value;
    var no_of_participants= document.getElementById("no_of_participants").value;
    var select_location= document.getElementById("select_location").value;
    var uuid = document.getElementById("uuid").value;
    var level  = document.getElementById("level").value;
    var class_expiry_date = document.getElementById('update_class_expiry_date').value;
    
    
    var data = new FormData();
    data.append("class_topic",class_topic );
    data.append("class_description",class_description );
    data.append("level",level );
    data.append("start_time",start_time );
    data.append("end_time", end_time);
    data.append("no_of_participants", no_of_participants);
    data.append("instructor_info",instructor_info );
    data.append("classes_age_group",classes_age_group );
    data.append("select_location",select_location );
    data.append("uuid",uuid );
    data.append('class_expiry_date',class_expiry_date);
    data.append("level",level );

    
    if(class_image.files[0]){
        data.append("class_image", class_image.files[0]);
      }
    else{
        console.log("image not changed")
    }
   // data.append("class_scheduled_on", class_scheduled_on);
   if (class_scheduled_on){
        for (var i = 0; i < class_scheduled_on.length; i++) {
            data.append('class_scheduled_on', class_scheduled_on[i]);
        }
    }

    try {
      console.log('Trying')
      //  debugger
      var config = {
        method: "patch",
        url: BASE_URL + "gymprofile/classes/" + uuid + '/',
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
            
                window.location.reload();

            }
            else {
              //  debugger
              alert("BAD REQUEST");
            }
        }
         
        )
    }
    catch (err) {
      //  debugger
      console.error(err);

    }
  
}

async function deleteclasses(uuid) {
    // setSuccess(false);
   console.log(uuid)
    
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.delete(BASE_URL + 'gymprofile/classes/' + uuid +'/', {
            
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
//  debugger
// if (perm.includes('Product')){
  return (
    <>
   
        <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">

                
                <CHeaderNavLink to="Addclass/Addclass">
                <button className="mn_btn_1 mr-1" >
                   <i class="fa fa-plus-circle" aria-hidden="true"></i>
                    Add new Class 
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
                {/* <th>Type</th> */}
                {/* <th>Age group</th> */}
                <th>Class time</th>
                <th>No Of Participants</th>
                <th>Instructor</th>
                <th>Active</th>
                {/* <th>Cover Image</th> */}
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {blog.map(store =>(
            <tr>
                {/* <td>1</td> */}
                <td>{store.class_topic}</td>
                {/* <td>Class</td> */}
                {/* <td>Adult</td> */}
                <td>{store.start_time + ' TO ' +store.end_time }</td>
                <td>{store.no_of_participants}</td>
                <td>{store.instructor_info}</td>
                <td>
                <label class="switch">
                {store.is_active==true?<input type="checkbox" checked onChange={()=>inactive(store.uuid)}/>:<input type="checkbox"  onChange={()=>active(store.uuid)}/>}
                <span class="slider round"></span>
                </label>
                </td>
                {/* <td> <img className="class-cover-img"  src="avatars/6.jpg"/> </td> */}
                <td>
                <CButton color="primary" onClick={() => Clicker(store.uuid)}>Manage</CButton>{' '}
                <button type="button" class="btn btn-danger" onClick={() => deleteclasses(store.uuid)}><i class="fa fa-trash-o" aria-hidden="true"></i></button> 
                </td>
            </tr>))}
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

        <CModal 
        show={success} 
        onClose={setSuccess}
        size="lg"
        >
        <CModalHeader closeButton className="add-user-modal">
        <CModalTitle>Update Class</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="card-body">
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Class Topic <span class="text-danger"> * </span></label>
                        <input type="text" id="class_topic" defaultValue={getclasses.class_topic} name="class_topic" class="form-control"  />
                        <input type='hidden' id='uuid' name='uuid' value={getclasses.uuid}></input>
                </div>
                </div>

                 <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Class Description  <span class="text-danger"> * </span></label>
                        <textarea type="text" defaultValue={getclasses.class_description} id="class_description" name="class_description" class="form-control" />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Class Image <span class="text-danger"> * </span></label>
                        <label class="hint form-label" for="first_name">Current Image - {getclasses.class_image} </label>
                        <input type="file" id="class_image" name="class_image" />
                        {/* <p>Now - {getclasses.class_image}</p> */}
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Class Schedule <span class="text-danger"> * </span></label>
                        <label class="hint form-label" for="first_name">Current Schedule -{getclasses.class_scheduled_on} </label>
                        <select name="class_scheduled_on"  class="form-control" id="class_scheduled_on" multiple>
                        {blog5.map(store =>(<option value={store.uuid}>{store.day}</option>))}
                        </select>
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Start Time  <span class="text-danger"> * </span></label>
                        <input type="time" defaultValue={getclasses.start_time} id="start_time" name="start_time" class="form-control"  />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">End Time  <span class="text-danger"> * </span></label>
                        <input type="time" defaultValue={getclasses.end_time} id="end_time" name="end_time" class="form-control"  />
                </div>
                </div>

                <div class="col-sm-6" >

                    <div class="form-group">
                        <label class="form-label" for="first_name">Instructor<span class="text-danger"> * </span></label> <label class="hint form-label" for="first_name">Current - {getclasses.instructor_info} </label>
                        <select name="instructor_info" defaultValue={getclasses.instructor_info} class="form-control" id="instructor_info">
                            {blog4.map(store=> (<option value={store.uuid}>{store.instructor_info}</option>))}
                        </select>
                            
                       
                    </div>

                </div>

                <div class="col-sm-6" >

                    <div class="form-group">
                        <label class="form-label" for="first_name">Age Group<span class="text-danger"> * </span></label>
                        <label class="hint form-label">Current - {getclasses.classes_age_group}</label>
                        <select name="classes_age_group"  class="form-control" id="classes_age_group">
                            {blog3.map(store=> (<option value={store.uuid}>{store.age}</option>))}
                        </select>
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">No of Participants<span class="text-danger"> * </span></label>
                        <input type="text" defaultValue={getclasses.no_of_participants} id="no_of_participants" name="no_of_participants" class="form-control"  />
                </div>
                </div>

                <div class="col-sm-6">
                    <div class="form-group">
                        <label class="form-label" for="gender">Location <span class="text-danger"> * </span></label>
                        <label class=" hint form-label" for="first_name"> Current  - {getclasses.select_location} </label>
                            <select id="select_location" name="select_location" class="form-control">
                            {blog2.map(store =>(<option value={store.uuid}>{store.gym_location}</option>))}
                            </select>
                    </div>
      
                </div>

                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Class Expiry Date </label>
                        <span class="desc"></span>
                        <div class="controls">
                       <input type="date" defaultValue={getclasses.class_expiry_date} id="update_class_expiry_date" name="update_class_expiry_date" class="form-control"  />
                    </div>
                </div>
                </div>

                <div class="col-sm-6">
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="gender">Level<span class="text-danger"> * </span></label><br></br>
                        <label class=" hint form-label" for="first_name">Current - {getclasses.level} </label>
                        <span class="desc"></span>
                        <div class="controls">
                            <select id="level" defaultValue={getclasses.level}  name="level" class="form-control">
                                <option value='All Levels'>All Levels</option>
                                <option value='Intermediate'>Intermediate</option>
                                <option value='Advance'>Advance</option>
                            </select>
                        </div>
                    </div>
                </div>

        </div>

        </div>
        
        </CModalBody>
        <CModalFooter>
            <CButton color="primary" onClick={UpdateClass}>Save</CButton>{' '}
            <CButton 
            color="secondary" 
            onClick={() => setSuccess(false)}
            >Close</CButton>
        </CModalFooter>
        </CModal>

    </>
    )
// }
// else{
//     return window.location.href = '#/dashboard'
// }

}

export default Classes
