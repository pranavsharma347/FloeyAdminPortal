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
console.log(cookies.get('gym_uuid'))


const Classes = () => {

const [Policy, setPolicy] = useState([])


useEffect(() => {
axios
    .get(BASE_URL + 'gymprofile/policy/?gym_id=' + cookies.get('gym_uuid'))
    .then(res => {
    console.log(res)
    setPolicy(res.data)
    })
    .catch(err => {
    console.log(err)
    })
}, [])

const axios = require('axios');

const [policydetail, setpolicydetail] = useState(["ffgyu","fghj"])

function Clicker(uuid) {
    // alert(uuid);
    setSuccess(!success);
    //  debugger
    axios
      .get(BASE_URL + 'gymprofile/policy/' + uuid)
      .then(getuuid => {
        console.log(getuuid);
        setpolicydetail(getuuid.data);
      })

  }




async function NewPolicy() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var policy_title = document.getElementById("policy_title").value;
    var policy_text = document.getElementById("policy_text").value;
    
    {  
       
        console.log('Trying to send request');
        
        try {
            console.log('Trying');
            let res = await axios.post(BASE_URL + 'gymprofile/policy/', {
                policy_title:policy_title,
                policy_text:policy_text,
                gym: cookies.get('gym_uuid'),
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
            window.location.reload()
            alert(err);
        }
    }
}

async function Updatepolicy() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var policy_title = document.getElementById("update_policy_title").value;
    var policy_text = document.getElementById("update_policy_text").value;
    var uuid = document.getElementById("update_uuid").value;
    
    
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.patch(BASE_URL + 'gymprofile/policy/' + uuid +'/', {
            
                policy_title:policy_title,
                policy_text:policy_text,
                uuid:uuid,
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

async function deletePolicy(uuid) {
    // setSuccess(false);
   console.log(uuid)
    
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.delete(BASE_URL + 'gymprofile/policy/' + uuid +'/', {
            
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


const [modal, setModal] = useState(false)
const [large, setLarge] = useState(false)
const [small, setSmall] = useState(false)
const [primary, setPrimary] = useState(false)
const [success, setSuccess] = useState(false)
const [warning, setWarning] = useState(false)
const [danger, setDanger] = useState(false)
const [info, setInfo] = useState(false)

const [getclasses, setgetclasses] = useState([])


var perm = cookies.get('perms')

  if (perm.includes('Gymprofile')){

  return (
    <>
   
        <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">

                
                <CHeaderNavLink>
                <button className="mn_btn_1 mr-1" onClick={() => setPrimary(!primary)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add New Policy </button>
                </CHeaderNavLink>

               
                </div> 
                   {/* <div class="btn-group group-btn-main">
                   
                   <button type="button" class="btn btn-primary">All</button>
                    <button type="button" class="btn btn-success">Adult</button>
                    <button type="button" class="btn btn-warning">Teen</button>
                    <button type="button" class="btn btn-danger">Children</button>
                
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
                <th>Policy</th>
                <th>Action</th>
              
            </tr>
            </thead>
            {Policy[0]?Policy.map(store => (
            <tbody>
            <tr>
                <td>{store.policy_title}</td>
                <td>
                <CButton color="primary" onClick={() => Clicker(store.uuid)}>Manage</CButton>{' '}
                <button type="button" class="btn btn-danger"  onClick={() => deletePolicy(store.uuid)}><i class="fa fa-trash-o" aria-hidden="true"></i></button> 
                </td>
            </tr>
             </tbody>)):
              <tbody>
              <tr>
                  {/* <td>{store.policy_title}</td> */}
                  {/* <td>
                  <CButton color="primary" onClick={() => Clicker(store.uuid)}>Manage</CButton>{' '}
                  <button type="button" class="btn btn-danger"  onClick={() => deletePolicy(store.uuid)}><i class="fa fa-trash-o" aria-hidden="true"></i></button> 
                  </td> */}
              </tr>
               </tbody>}
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
        <CModalTitle>Add New Policy</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="col-md-12">
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="policy_title">Policy title<span class="text-danger"> * </span></label>
                        <input type="text" id="policy_title" name="policy_title" class="form-control" />
                </div>
                </div>

                 <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="policy_text">Policy text<span class="text-danger"> * </span></label>
                        <textarea type="text" id="policy_text" name="policy_text" class="form-control" />
                </div>
                </div>

               

               </div>

        </div>
        
        </CModalBody>
        <CModalFooter>
            <div className="col-md-12 text-center">
            <CButton color="primary" onClick={NewPolicy}>Save</CButton>{' '}
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
        <CModalTitle>Update Policy</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="card-body">
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="update_policy_title">Policy title<span class="text-danger"> * </span></label>
                        <input type="text" id="update_policy_title" defaultValue ={policydetail.policy_title} name="update_policy_title" class="form-control" />
                        <input type='hidden' id='update_uuid' name='update_uuid' value={policydetail.uuid}></input>
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="update_policy_text">Policy text<span class="text-danger"> * </span></label>
                        <textarea type="text" id="update_policy_text" defaultValue ={policydetail.policy_text} name="update_policy_text" class="form-control" />
                </div>
                </div>

        </div>

        </div>
        
        </CModalBody>
        <CModalFooter>
            <CButton color="primary" onClick={Updatepolicy} >Save</CButton>{' '}
            <CButton 
            color="secondary" 
            onClick={() => setSuccess(false)}
            >Close</CButton>
        </CModalFooter>
        </CModal>

    </>
  )}else{
    return window.location.href='#/dashboard'
  }
}

export default Classes
