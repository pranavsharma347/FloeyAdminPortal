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
const [maxusage,setmaxusage] = useState([])
const [getuser, setuser] = useState([])
const [getgym, setgym] = useState([])


const axios = require('axios');

useEffect(() => {
    axios
    .get(BASE_URL + 'payments/gymrule/')
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
    .get(BASE_URL + 'payments/maxusage/')
    .then(res => {
        console.log(res)
        setmaxusage(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

useEffect(() => {
    axios
      .get(BASE_URL + 'user/subscribed/userslist/?gym_id=' + cookies.get('gym_uuid'))
      .then(res => {
        console.log(res)
        setuser(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/')
    .then(res => {
        console.log(res)
        setgym(res.data)
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
    
  
    }


async function NewGymRuleset() {
    // setSuccess(false);
   
     debugger
    var all_gyms = document.getElementById('all_gyms').value;
    var gyms = $('#gyms').val();


    var data = new FormData();
    for (var i = 0; i < gyms.length; i++) {
        data.append('gyms', gyms[i]);
    }
    data.append("all_gyms",all_gyms );
   
    {  
        console.log('Trying to send request');
        try {
            console.log('Trying')
      
            var config = {
              method: "post",
              url: BASE_URL + "payments/gymrule/",
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
                      window.location.reload();
      
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
}

async function Ruleset() {
    // setSuccess(false);
   
    var gym_ruleset = document.getElementById("gym_ruleset").value;
    var max_usage = document.getElementById("max_usage").value;
    
    
    {  
       
        console.log('Trying to send request');
        
        try {
            console.log('Trying');
            let res = await axios.post(BASE_URL + 'payments/rulesets/', {
                gyms_ruleset:gym_ruleset,
                max_uses_rule:max_usage,
            });
            if (res.status === 201) {
                //  debugger
                // test for status you want, etc
                alert('success')
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


  return (
    <>
   
        <CRow>
            <div className="col-md-12">
            <h3>Ruleset</h3>
                <div class = "row">

                <div class="col-sm-6" >
                        <div class="form-group">
                            <label class="form-label" for="expense_name">Gym Ruleset</label>
                            <button className="add"  onClick={() => setPrimary(!primary)}>+</button>
                            <select id='gym_ruleset' class="form-control"> 
                            {getinstructor.map(store => (store.gyms==''?<option value={store.uuid}> All gyms </option>:<option value={store.uuid}> {store.gyms} </option>))}
                            </select>
                    </div> 
                    </div>
                
                    <div class="col-sm-6" >
                        <div class="form-group">
                            <label class="form-label" for="expense_name">Max Usage / User</label>
                            <button className="add" onClick={() => Clicker()}>+</button>
                            <select id='max_usage' class="form-control"> 
                            {maxusage.map(store => (<option value={store.uuid}> {store.max_usage_per_user} </option>))}
                            </select>
                    </div> 
                    </div>

                    <div className="col-md-12 text-center">
                        <CButton color="primary" onClick={()=>Ruleset()}>Save</CButton>{' '}
                      
                    </div>

                    



                </div>
            </div>
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
                        <label class="form-label" for="expense_name">Include All Gyms</label>
                        <input type='checkbox'id='all_gyms'/>
                </div> 
                </div>

                <div class="col-sm-6" >
                <div class="form-group">
                    <label class="form-label" for="expense_name">Gyms</label>
                    <select id='gyms' class="form-control" multiple> 
                        {getgym.map(store => (
                        <option value={store.uuid}> {store.gym_name} </option>
                        ))}
                        </select>
                    <input type='hidden' value={getinstructordetail.uuid} id ='update_uuid'/>
            </div>
            </div>


               

        </div>

        </div>
        
        </CModalBody>
        <CModalFooter>
            <div className="col-md-12 text-center">
            <CButton color="primary" onClick={()=>NewGymRuleset()}>Save</CButton>{' '}
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
        <CModalTitle>Add Max Use</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="card-body">
    
        <div class="row">


            <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Include All Users</label>
                        <input type='checkbox'id='all_users'/>
                </div> 
                </div>


            <div class="col-sm-6" >
                <div class="form-group">
                    <label class="form-label" for="expense_name">Allowed Users</label>
                    <select  id='allowed_user' class="form-control"> 
                        {getuser.map(store => (<option  value={store.uuid}> {store.first_name} </option>))}
                        </select>
            </div>
            </div>

            <div class="col-sm-6" >
                <div class="form-group">
                    <label class="form-label" for="date_paid">max_usage_per_user </label>
                    <input type="number" id="max_usage_per_user" name="max_usage_per_user" class="form-control"  />
            </div>
            </div>
        </div>
        </div>
        
        </CModalBody>
        <CModalFooter>
            <CButton color="primary" >Save</CButton>{' '}
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
