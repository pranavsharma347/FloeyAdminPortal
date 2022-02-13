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

const [Holiday, setHoliday] = useState([])


useEffect(() => {
axios
    .get(BASE_URL + 'gymprofile/holidays/?gym_id=' + cookies.get('gym_uuid'))
    .then(res => {
    console.log(res)
    setHoliday(res.data)
    })
    .catch(err => {
    console.log(err)
    })
}, [])

const axios = require('axios');

const [holidaydetail, setholidaydetail] = useState(["ffgyu","fghj"])

function Clicker(uuid) {
    // alert(uuid);
    setSuccess(!success);
    //  debugger
    axios
      .get(BASE_URL + 'gymprofile/holidays/' + uuid)
      .then(getuuid => {
        console.log(getuuid);
        setholidaydetail(getuuid.data);
      })

  }

async function NewHoliday() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var occasion = document.getElementById("occasion").value;
    var start_date = document.getElementById("start_date").value;
    var end_date = document.getElementById("end_date").value;
    
    {  
       
        console.log('Trying to send request');
        
        try {
            console.log('Trying');
            let res = await axios.post(BASE_URL + 'gymprofile/holidays/', {
                occasion:occasion,
                start_date:start_date,
                end_date:end_date,
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
            window.location='/signup';
            alert(err);
        }
    }
}

async function UpdateHoliday() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var ocassion = document.getElementById("update_ocassion").value;
    var start_date = document.getElementById("update_start_date").value;
    var end_date = document.getElementById("update_end_date").value;
    var uuid = document.getElementById("update_uuid").value;
    
    
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.patch(BASE_URL + 'gymprofile/holidays/' + uuid +'/', {
            
                occasion:ocassion,
                start_date:start_date,
                end_date:end_date,
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

async function deleteHoliday(uuid) {
    // setSuccess(false);
   console.log(uuid)
    
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.delete(BASE_URL + 'gymprofile/holidays/' + uuid +'/', {
            
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

var perm = cookies.get('perms')

//   if (perm.includes('Holidays')){

  return (
    <>
   
        <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">

                
                <CHeaderNavLink>
                <button className="mn_btn_1 mr-1" onClick={() => setPrimary(!primary)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add New Holiday </button>
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
                <th>Ocassion</th>
                <th>Start Date</th>
                <th>End date</th>
                <th>Action</th>
              
            </tr>
            </thead>
            
            {Holiday.map(store => (
            <tbody>
            <tr>
                <td>{store.occasion}</td>
                <td>{store.start_date}</td>
                <td>{store.end_date}</td>
                <td>
                <CButton color="primary" onClick={() => Clicker(store.uuid)}>Manage</CButton>{' '}
                <button type="button" class="btn btn-danger" onClick={() => deleteHoliday(store.uuid)}><i class="fa fa-trash-o" aria-hidden="true"></i></button> 
                </td>
            </tr>
             </tbody>))}
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
        <CModalTitle>Add New Holiday</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="col-md-12">
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="ocassion">Ocassion<span class="text-danger"> * </span></label>
                        <input type="text" id="occasion" name="ocassion" class="form-control" />
                </div>
                </div>

                 <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date">Start Date<span class="text-danger"> * </span></label>
                        <input type="date" id="start_date" name="start_date" class="form-control" />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date">End Date<span class="text-danger"> * </span></label>
                        <input type="date" id="end_date" name="end_date" class="form-control" />
                </div>
                </div>

                

               </div>

        </div>
        
        </CModalBody>
        <CModalFooter>
            <div className="col-md-12 text-center">
            <CButton color="primary" onClick={NewHoliday}>Save</CButton>{' '}
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
        <CModalTitle>Update Holiday</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="card-body">
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="ocassion">Ocassion <span class="text-danger"> * </span></label>
                        <input type="text" id="update_ocassion" defaultValue={holidaydetail.occasion} name="class_topic" class="form-control"  />
                        <input type='hidden' id='update_uuid' name='update_uuid' value={holidaydetail.uuid}></input>
                </div>
                </div>

                 <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date">Start Date<span class="text-danger"> * </span></label>
                        <input type="date" id="update_start_date" defaultValue={holidaydetail.start_date} name="update_date" class="form-control" />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date">End Date<span class="text-danger"> * </span></label>
                        <input type="date" id="update_end_date" defaultValue={holidaydetail.end_date} name="update_duration" class="form-control" />
                </div>
                </div>

              
        </div>

        </div>
        
        </CModalBody>
        <CModalFooter>
            <CButton color="primary" onClick={UpdateHoliday} >Save</CButton>{' '}
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

export default Classes
