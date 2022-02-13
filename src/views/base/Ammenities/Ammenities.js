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

const [ammenities, setammenities] = useState([])


useEffect(() => {
axios
    .get(BASE_URL + 'gymprofile/ammenities/?gym_id=' + cookies.get('gym_uuid'))
    .then(res => {
    console.log(res)
    setammenities(res.data)
    })
    .catch(err => {
    console.log(err)
    })
}, [])

const axios = require('axios');

async function NewPolicy() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;
    var ammenities_name = document.getElementById("ammenities_name").value; 
    var ammenities_detail = document.getElementById("ammenities_detail").value;
    
    {  
       
        console.log('Trying to send request');
        
        try {
            console.log('Trying');
            let res = await axios.post(BASE_URL + 'gymprofile/ammenities/', {
                ammenities_name:ammenities_name,
                ammenities_detail:ammenities_detail,
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
            window.location.reload();
            alert(err);
        }
    }
}

const [ammenitiesdetail, setammenitiesdetail] = useState(["ffgyu","fghj"])

function Clicker(uuid) {
    // alert(uuid);
    setSuccess(!success);
    //  debugger
    axios
      .get(BASE_URL + 'gymprofile/ammenities/' + uuid)
      .then(getuuid => {
        console.log(getuuid);
        setammenitiesdetail(getuuid.data);
      })

  }


async function UpdateAmmenities() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var ammenities_name = document.getElementById("update_ammenities_name").value; 
    var ammenities_detail = document.getElementById("update_ammenities_detail").value;
    var uuid = document.getElementById("update_uuid").value;
        
    {         
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.patch(BASE_URL + 'gymprofile/ammenities/' + uuid +'/', {
                ammenities_name:ammenities_name,
                ammenities_detail:ammenities_detail,
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

async function deleteAmmenities(uuid) {
    // setSuccess(false);
   console.log(uuid)
    
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.delete(BASE_URL + 'gymprofile/ammenities/' + uuid +'/', {
            
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




  return (
    <>
   
        <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">

                
                <CHeaderNavLink>
                <button className="mn_btn_1 mr-1" onClick={() => setPrimary(!primary)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add New Ammenity </button>
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
                <th>Ammenities Name</th>
                <th>Ammenities Detail</th>
                <th>Action</th>
              
            </tr>
            </thead>
            {ammenities[0]?ammenities.map(store => (
            <tbody>
            <tr>
                <td>{store.ammenities_name}</td>
                <td>{store.ammenities_detail}</td>
                <td>
                <CButton color="primary" onClick={() => Clicker(store.uuid)}>Manage</CButton>{' '}
                <button type="button" class="btn btn-danger" onClick={() => deleteAmmenities(store.uuid)}><i class="fa fa-trash-o" aria-hidden="true"></i></button> 
                </td>
            </tr>
             </tbody>)):
              <tbody>
              <tr>
                 
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
        <CModalTitle>Add New Ammenities</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="col-md-12">
            <div class="row">

            <div class="col-sm-6" >
                <div class="form-group">
                    <label class="form-label" for="policy_title">Ammenities Name<span class="text-danger"> * </span></label>
                    <input type="text" id="ammenities_name" name="ammenities_name" class="form-control" />
                </div>
            </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="policy_title">Ammenities List<span class="text-danger"> * </span></label>
                        <textarea type="text" id="ammenities_detail" name="ammenities_detail" class="form-control" />
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
        <CModalTitle>Update Class</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="card-body">
            <div class="row">
            
            <div class="col-sm-6" >
                <div class="form-group">
                    <label class="form-label" for="policy_title">Ammenities Name<span class="text-danger"> * </span></label>
                    <input type="text" id="update_ammenities_name" name="update_ammenities_name" defaultValue={ammenitiesdetail.ammenities_name} class="form-control" />
                </div>
            </div>

            <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="update_policy_title">Ammenities List<span class="text-danger"> * </span></label>
                        <textarea type="text" id="update_ammenities_detail" defaultValue={ammenitiesdetail.ammenities_detail} name="update_ammenities_detail" class="form-control" />
                        <input type='hidden' id='update_uuid' name='update_uuid' value={ammenitiesdetail.uuid}></input>
                </div>
                </div>

        </div>

        </div>
        
        </CModalBody>
        <CModalFooter>
            <CButton color="primary" onClick={UpdateAmmenities} >Save</CButton>{' '}
            <CButton 
            color="secondary" 
            onClick={() => setSuccess(false)}
            >Close</CButton>
        </CModalFooter>
        </CModal>

    </>
  )
}

export default Classes
