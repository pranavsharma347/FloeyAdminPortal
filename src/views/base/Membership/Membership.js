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
import Cookies from 'universal-cookie';
import BASE_URL from 'src/views/base';

const Membership = () => {
    const cookies = new Cookies();
    console.log(cookies.get('gym_uuid'))
        
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


const axios = require('axios');

useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/membership/?gym_id='+cookies.get('gym_uuid'))
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
    .get(BASE_URL + 'gymprofile/location/?gym='+cookies.get('gym_uuid'))
    .then(res => {
        console.log(res)
        setBlog3(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

async function NewMembership() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var membership_title = document.getElementById("membership_title").value;
    var membership_description = document.getElementById("membership_description").value;
    var membership_duration = document.getElementById("membership_duration").value;
    var membership_amount = document.getElementById("membership_amount").value;
    var membership_age_group = document.getElementById("membership_age_group").value;
    var select_location = $("#select_location").val();
    
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.post(BASE_URL + 'gymprofile/membership/', {
            
                membership_title:membership_title,
                membership_description:membership_description,
                membership_duration:membership_duration,
                membership_amount:membership_amount,
                membership_age_group:membership_age_group,
                select_location:select_location,
                gym:cookies.get('gym_uuid')
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

const [getmembership, setgetmembership] = useState(["ffgyu","fghj"])

function Clicker(uuid) {
    // alert(uuid);
    setSuccess(!success);
    //  debugger
    axios
      .get(BASE_URL + 'gymprofile/membership/' + uuid)
      .then(getuuid => {
        console.log(getuuid);
        setgetmembership(getuuid.data);
    })

}

async function UpdateMembership() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var membership_title = document.getElementById("update_membership_title").value;
    var membership_description = document.getElementById("update_membership_description").value;
    var membership_duration = document.getElementById("update_membership_duration").value;
    var membership_amount = document.getElementById("update_membership_amount").value;
    var membership_age_group = document.getElementById("update_membership_age_group").value;
    var uuid = document.getElementById("update_uuid").value;
    var select_location = $("#update_select_location").val();
    
    
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.patch(BASE_URL + 'gymprofile/membership/' + uuid +'/', {
            
                membership_title:membership_title,
                membership_description:membership_description,
                membership_duration:membership_duration,
                membership_amount:membership_amount,
                membership_age_group:membership_age_group,
                select_location:select_location,
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

async function deleteMembership(uuid) {
    // setSuccess(false);
   console.log(uuid)
    
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.delete(BASE_URL + 'gymprofile/membership/' + uuid +'/', {
            
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
                  <button className="mn_btn_1 mr-1" onClick={() => setPrimary(!primary)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add New Membership </button>
                </div> 
                <div class="btn-group group-btn-main">
                    <button type="button" class="btn btn-success">Active</button>
                    <button type="button" class="btn btn-danger">Inactive</button>
            
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
                {/* <th>Location</th> */}

                <th>Duration</th>
                <th>Fees</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {blog.map(store => (
            <tr>
                
                {/* <td>1</td> */}
                <td>{store.membership_title}</td>
                {/* <td>{store.select_location}</td> */}
                <td>{store.membership_duration}</td>
                <td>{store.membership_amount}</td>
               
                <td>
                <CButton color="primary" onClick={() => Clicker(store.uuid)}>Manage</CButton>{' '}
                <button type="button" class="btn btn-danger" onClick={() => deleteMembership(store.uuid)}><i class="fa fa-trash-o" aria-hidden="true"></i></button> 
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
        <CModalTitle>Add New Membership</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="col-md-12">
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Membership Title <span class="text-danger"> * </span></label>
                        <input type="text" id="membership_title" name="membership_title" class="form-control" />
                </div>
                </div>

                 <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="membership_description">Membership Description  <span class="text-danger"> * </span></label>
                        <input type="text" id="membership_description" name="membership_description" class="form-control" />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="membership_duration">Duration(Weeks) <span class="text-danger"> * </span></label>
                        <input type='text' id='membership_duration' name='membership_duration' class="form-control"> 
                        </input>
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="select_location">Location <span class="text-danger"> * </span></label>
                        <select id='select_location' name='select_location' class="form-control"> 
                        {blog3.map(store => (<option value={store.uuid}> {store.gym_location} </option>))}
                        </select>
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Age Group <span class="text-danger"> * </span></label>
                        <select id='membership_age_group' name='membership_age_group' class="form-control"> 
                        {blog2.map(store => (<option value={store.uuid}> {store.age} </option>))}
                        </select>
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Amount <span class="text-danger"> * </span></label>
                        <input type="text" id="membership_amount" name="membership_amount" class="form-control"/>
                </div>
                </div>
        </div>

        </div>
        
        </CModalBody>
        <CModalFooter>
            <div className="col-md-12 text-center">
            <CButton color="primary" onClick={NewMembership}>Save</CButton>{' '}
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
        <CModalTitle>Update Membership</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="card-body">
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Membership Title <span class="text-danger"> * </span></label>
                        <input type="text" id="update_membership_title" name="update_membership_title" class="form-control" defaultValue={getmembership.membership_title} />
                        <input type="hidden" id="update_uuid" name="update_uuid" value={getmembership.uuid} />
                </div>
                </div>

                
                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Membership Description <span class="text-danger"> * </span></label>
                        <textarea type="text" id="update_membership_description" name="update_membership_description" class="form-control" defaultValue ={getmembership.membership_description} />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Membership Duration <span class="text-danger"> * </span></label>
                        <input type="text" id="update_membership_duration" name="update_membership_duration" class="form-control" defaultValue={getmembership.membership_duration} />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Membership Amount<span class="text-danger"> * </span></label>
                        <input type="text" id="update_membership_amount" name="update_membership_amount" class="form-control" defaultValue={getmembership.membership_amount} />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="first_name">Age Group<span class="text-danger"> * </span></label>
                        <label class="hint form-label" for="first_name">Current -{getmembership.membership_age_group}</label>
                        <select name="update_membership_age_group" class="form-control" defaultValue={getmembership.membership_age_group} id="update_membership_age_group" >
                            {blog2.map(store=> (<option value={store.uuid}>{store.age}</option>))}
                        </select> 
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="form-group">
                        <label class="form-label" for="gender">Location<span class="text-danger"> * </span></label>
                        <label class="hint form-label" for="first_name">Current -{getmembership.select_location}</label>
                            <select id="update_select_location" defaultValue={getmembership.select_location} name="update_select_location" class="form-control">
                            {blog3.map(store=> (<option value={store.uuid}>{store.gym_location}</option>))}
                             
                            </select>
                    </div>
      
                </div>

        </div>

        </div>
        
        </CModalBody>
        <CModalFooter>
            <CButton color="primary" onClick={UpdateMembership}>Save</CButton>{' '}
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

export default Membership
