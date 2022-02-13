import React, { useState,useEffect } from 'react'
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
    .get(BASE_URL + 'gymprofile/instructor/?gym_id='+cookies.get('gym_uuid'))
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
      .get(BASE_URL + 'user/?gym_id=' + cookies.get('gym_uuid'))
      .then(res => {
        console.log(res)
        setuser(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  const [getinstructordetail, setinstructordetail] = useState([])

  function Clicker(uuid) {
      // alert(uuid);
      setSuccess(!success);
      //  debugger
      axios
        .get(BASE_URL + 'gymprofile/instructor/' + uuid)
        .then(getuuid => {
          console.log(getuuid);
          setinstructordetail(getuuid.data);
        })
  
    }


async function NewInstructor() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var instructor_name = document.getElementById("instructor_name").value;
    var specialization = document.getElementById("specialization").value;
    var gym = cookies.get('gym_uuid')
    {  
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.post(BASE_URL + 'gymprofile/dash/', {
            
                gym_id:'c29e1f29-b06c-4852-ba41-930528196fe6',
                start_date:'2021-01-10',
                end_date:'2021-04-10'
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

async function UpdateInstructor() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var instructor_info = document.getElementById("update_instructor_info").value;
    var specialization = document.getElementById("update_specialization").value;
    var gym = cookies.get('gym_uuid')
    var uuid = document.getElementById("update_uuid").value;
    
    
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.patch(BASE_URL + 'gymprofile/instructor/' + uuid +'/', {
            
                instructor_info:instructor_info,
                instructor_specializaton:specialization,
                gym:gym
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

async function deleteInstructor(uuid) {
    // setSuccess(false);
   console.log(uuid)
    
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.delete(BASE_URL + 'gymprofile/instructor/' + uuid +'/', {
            
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

//   if (perm.includes('Instructor')){
  return (
    <>
   
        <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">
                  
                  {/* <button className="mn_btn_1 mr-1" onClick={() => setPrimary(!primary)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add Instructor </button> */}
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
                
                <th>Instructor Name</th>
                <th>Date Joined</th>
                <th>Specialization</th>
                {/* <th  class="text-center">Frequency</th> */}
                {/* <th  class="text-center">Active/InActive</th> */}
            </tr>
            </thead>
            <tbody>
            {getinstructor.map(store => (
            <tr>

                <td>{store.instructor_info}</td>
                <td>{store.created_at}</td>
                <td>{store.instructor_specializaton}</td>
                {/* <td  class="text-center">{store.frequency}</td> */}
                {/* <td class="text-center">
                <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
                </label>
                </td> */}
                <td>
                <CButton color="primary" onClick={() => Clicker(store.uuid)}>Manage</CButton>{' '}
                <a href ='#/base/Insbookings'  onClick={() => cookies.set('ins',store.uuid,{path:'/'})}><button class="btn btn-primary user-bookings">Bookings</button></a>
                {/* <button type="button" class="btn btn-danger" onClick={() => deleteInstructor(store.uuid)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>  */}
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
        <CModalTitle>Add Instructor</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="col-md-12">
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Name of the Instructor</label>
                        <select id='instructor_name' class="form-control"> 
                        {getuser.map(store => (<option value={store.uuid}> {store.first_name} </option>))}
                        </select>
                </div>
                </div>

                 <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Specialization</label>
                        <input type="text" id="specialization" name="specialization" class="form-control"  />
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
        <CModalTitle>Update Expense</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="card-body">
    
        <div class="row">

            <div class="col-sm-6" >
                <div class="form-group">
                    <label class="form-label" for="expense_name">Name of the instructor</label>
                    <select  id='update_instructor_info' class="form-control"> 
                        {getuser.map(store => (<option defaultValue= {getinstructordetail.instructor_info} value={store.uuid}> {store.first_name} </option>))}
                        </select>
                    <input type='hidden' value={getinstructordetail.uuid} id ='update_uuid'/>
            </div>
            </div>

            <div class="col-sm-6" >
                <div class="form-group">
                    <label class="form-label" for="date_paid">Specialization </label>
                    <input type="text" id="update_specialization" defaultValue= {getinstructordetail.instructor_specializaton} name="update_date_paid" class="form-control"  />
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
// }
//   else{
//     return window.location.href='#/dashboard'
//   }
}

export default Expenses
