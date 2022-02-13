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

const axios = require('axios');

useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/online/?gym='+cookies.get('gym_uuid'))
    .then(res => {
        console.log(res)
        setgetinstructor(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])


useEffect(() => {
    axios
      .get(BASE_URL + 'gymprofile/instructor/?gym_id=' + cookies.get('gym_uuid'))
      .then(res => {
        console.log(res)
        setuser(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  const [getonlinedetail, setinstructordetail] = useState([])

  function Clicker(uuid) {
      // alert(uuid);
      setSuccess(!success);
      //  debugger
      axios
        .get(BASE_URL + 'gymprofile/online/' + uuid)
        .then(getuuid => {
          console.log(getuuid);
          setinstructordetail(getuuid.data);
        })
  
    }


async function NewInstructor() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var topic = document.getElementById("topic").value;
    var description = document.getElementById("description").value;
    var image = document.querySelector("#img");
    var date = document.getElementById('date').value;
    var type = document.getElementById('type').value;
    var duration = document.getElementById('duration').value;
    var max_strength = document.getElementById('max_strength').value;
    var instructor = document.getElementById('instructor').value;


    var data = new FormData();
    data.append("topic",topic);
    data.append("description",description);
    data.append("img",image.files[0]);
    data.append("date",date);
    data.append("Type",type);
    data.append("duration",duration);
    data.append("max_strength",max_strength);
    data.append("online_instructor",instructor);
    data.append("gym",cookies.get('gym_uuid'))

    
    try {
      console.log('Trying')
      //  debugger
      var config = {
        method: "post",
        url: BASE_URL + "gymprofile/online/",
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

async function UpdateInstructor() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var topic = document.getElementById("update_topic").value;
    var description = document.getElementById("update_description").value;
    var image = document.querySelector("#update_img");
    var date = document.getElementById('update_date').value;
    var type = document.getElementById('update_type').value;
    var duration = document.getElementById('update_duration').value;
    var max_strength = document.getElementById('update_max_strength').value;
    var instructor = document.getElementById('update_instructor').value;
    var uuid = document.getElementById("update_uuid").value;

    var data = new FormData();
    data.append("topic",topic);
    data.append("description",description);
    data.append("date",date);
    data.append("Type",type);
    data.append("duration",duration);
    data.append("max_strength",max_strength);
    data.append("online_instructor",instructor);
    data.append("gym",cookies.get('gym_uuid'));
    data.append('uuid',uuid)

    if (image.files[0]){
        data.append("img",image.files[0]);
    }
    
    try {
      console.log('Trying')
      //  debugger
      var config = {
        method: "patch",
        url: BASE_URL + "gymprofile/online/"+ uuid+'/',
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

async function deleteInstructor(uuid) {
    // setSuccess(false);
   console.log(uuid)
    
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.delete(BASE_URL + 'gymprofile/online/' + uuid +'/', {
            
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


  return (
    <>
   
        <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">
                  
                  <button className="mn_btn_1 mr-1" onClick={() => setPrimary(!primary)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add Online </button>
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
                
                <th>Topic</th>
                <th>Type</th>
                <th>Date</th>
                <th>Instructor</th>
                {/* <th  class="text-center">Frequency</th> */}
                <th  class="text-center">Active/InActive</th>
            </tr>
            </thead>
            <tbody>
            {getinstructor.map(store => (
            <tr>

                <td>{store.topic}</td>
                <td>{store.Type}</td>
                <td>{store.date}</td>
                <th>{store.online_instructor}</th>
                {/* <td  class="text-center">{store.frequency}</td> */}
                <td class="text-center">
                <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
                </label>
                </td>
                <td>
                <CButton color="primary" onClick={() => Clicker(store.uuid)}>Manage</CButton>{' '}
                {/* <a href ='#/base/bookings'><button class="btn btn-primary user-bookings">Bookings</button></a> */}
                <button type="button" class="btn btn-danger" onClick={() => deleteInstructor(store.uuid)}><i class="fa fa-trash-o" aria-hidden="true"></i></button> 
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
        <CModalTitle>Add Online</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="col-md-12">
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Name of the Topic</label>
                        <input type="text" id="topic" name="topic" class="form-control"  />
                </div>
                </div>

                 <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Description</label>
                        <textarea type="text" id="description" name="description" class="form-control"  />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Image </label>
                        <input type="file" id="img" name="img" />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Date</label>
                        <input type="date" id="date" name="date" class="form-control"  />
                    </div>
                </div>
                
                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Type</label>
                        <input type="text" id="type" name="type" class="form-control"  />
                    </div>
                </div>
                
                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Duration</label>
                        <input type="text" id="duration" name="duration" class="form-control"  />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Max Strength</label>
                        <input type="text" id="max_strength" name="max_strength" class="form-control"  />
                    </div>
                </div>
                
                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Instructor</label>
                        <select id='instructor' class="form-control"> 
                        {getuser.map(store => (<option value={store.uuid}> {store.instructor_info} </option>))}
                        </select>
                    </div>
                </div>

        </div>

        </div>
        
        </CModalBody>
        <CModalFooter>
            <div className="col-md-12 text-center">
            <CButton color="primary" onClick={NewInstructor}>Save</CButton>{' '}
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
        <CModalTitle>Update Online</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="card-body">
    
        
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Name of the Topic</label>
                        <input type="text" id="update_topic" defaultValue={getonlinedetail.topic} name="update_topic" class="form-control"  />
                        <input type='hidden' value={getonlinedetail.uuid} id ='update_uuid'/>
                </div>
                </div>

                 <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Description</label>
                        <textarea type="text" defaultValue={getonlinedetail.description} id="update_description" name="update_description" class="form-control"  />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Image</label><br></br>
                        <label >Current image - {getonlinedetail.img}  </label>
                        <input type="file" id="update_img" name="update_img" />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Date</label>
                        <input type="date" id="update_date" defaultValue={getonlinedetail.date} name="update_date" class="form-control"  />
                    </div>
                </div>
                
                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Type</label>
                        <input type="text" id="update_type"defaultValue={getonlinedetail.Type}  name="update_type" class="form-control"  />
                    </div>
                </div>
                
                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Duration</label>
                        <input type="text" defaultValue={getonlinedetail.duration} id="update_duration" name="update_duration" class="form-control"  />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Max Strength</label>
                        <input type="text" defaultValue={getonlinedetail.max_strength} id="update_max_strength" name="max_strength" class="form-control"  />
                    </div>
                </div>
                
                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Instructor</label><br></br>
                        <label>Current  - {getonlinedetail.online_instructor}</label>
                        <select id='update_instructor' class="form-control"> 
                        {getuser.map(store => (<option value={store.uuid}> {store.instructor_info} </option>))}
                        </select>
                    </div>
                </div>

        </div>

        </div>
        
        </CModalBody>
        <CModalFooter>
            <CButton color="primary" onClick = {UpdateInstructor}>Save</CButton>{' '}
            <CButton 
            color="secondary" 
            onClick={() => setSuccess(false)}
            >Close</CButton>
        </CModalFooter>
        </CModal>

    </>
  )
}

export default Expenses
