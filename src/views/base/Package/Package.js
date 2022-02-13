import React, { useState,useEffect } from 'react'
import $ from 'jquery';
import Select from 'react-select';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
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

const cookies = new Cookies();
console.log(cookies.get('gym_uuid'))

const Package = () => {


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
    .get(BASE_URL + 'gymprofile/packages/?gym_id='+cookies.get('gym_uuid'))
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
    .get(BASE_URL + 'gymprofile/class/')
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
    .get(BASE_URL + 'gymprofile/location/')
    .then(res => {
        console.log(res)
        setBlog3(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

const [getpackage, setgetpackage] = useState(["ffgyu","fghj"])

function Clicker(uuid) {
    // alert(uuid);
    setSuccess(!success);
    //  debugger
    axios
      .get(BASE_URL + 'gymprofile/packages/' + uuid)
      .then(getuuid => {
        console.log(getuuid);
        setgetpackage(getuuid.data);
      })

  }

async function NewPackage() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var package_name = document.getElementById("package_name").value;
    var package_description = document.getElementById("package_description").value;
    var package_duration = document.getElementById("package_duration").value;
    var package_price = document.getElementById("package_price").value;
    var class_passes =  document.getElementById("classes").value;
    var gym = cookies.get('gym_uuid')
    {  
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.post(BASE_URL + 'gymprofile/packages/', {
            
                package_name:package_name,
                package_description:package_description,
                package_duration:package_duration,
                package_price:package_price,
                class_passes:class_passes,
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


async function UpdatePackage() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var package_name = document.getElementById("update_package_name").value;
    var package_description = document.getElementById("update_package_description").value;
    var package_duration = document.getElementById("update_package_duration").value;
    var package_price = document.getElementById("update_package_price").value;
    var class_passes = document.getElementById("update_classes").value;
    var uuid = document.getElementById("update_uuid").value;
    
    
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.patch(BASE_URL + 'gymprofile/packages/' + uuid +'/', {
            
                package_name:package_name,
                package_description:package_description,
                package_duration:package_duration,
                package_price:package_price,
                class_passes:class_passes,
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

async function deletePackage(uuid) {
    // setSuccess(false);
   console.log(uuid)
    
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.delete(BASE_URL + 'gymprofile/packages/' + uuid +'/', {
            
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

 
  return (
    <>
   
        <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">
                  
                  <button className="mn_btn_1 mr-1" onClick={() => setPrimary(!primary)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add new package </button>
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
                <th>Package</th>
                <th>No. of classes</th>
                <th>Package Duration (In weeks)</th>
                <th>Fees</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {blog.map(store => (
            <tr>
                {/* <td>1</td> */}
                <td>{store.package_name}</td>
                <td>{store.class_passes}</td>
                <td>{store.package_duration}</td>
                <td>{store.package_price}</td>
                <td>
                <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
                </label>
                </td>
                <td>
                <CButton color="primary" onClick={() => Clicker(store.uuid)}>Manage</CButton>{' '}
                <button type="button" class="btn btn-danger" onClick={() => deletePackage(store.uuid)}><i class="fa fa-trash-o" aria-hidden="true"></i></button> 
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
        <CModalTitle>Add new package</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="col-md-12">
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="package_name">Package Name <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="package_name" name="package_name" class="form-control"  />
                    </div>
                </div>
                </div>

                 <div className="col-md-6">
                <div class="form-group ">
                        <label class="form-label" for="package_description"> Package Description </label>
                        <span class="desc"></span>
                        <div class="controls">
                            <textarea class="form-control" id="package_description" name="package_description" rows="1"></textarea>
                        </div>
                </div>
            </div>
                
            <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="package_name">Package Duration(In weeks) <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="package_duration" name="package_duration" class="form-control"  />
                    </div>
                </div>
                </div>



                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Fees  <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="package_price" name="package_price" class="form-control"  />
                    </div>
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">classes <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="classes"  name="classes" class="form-control"  />
                        {/* <select name="classes" class="form-control" id="classes" multiple>
                            {blog2.map(store=> (<option value={store.uuid}>{store.class_topic}</option>))}
                        </select> */}
                    </div>
                </div>
                </div>

                

        </div>

        </div>
        
        </CModalBody>
        <CModalFooter>
            <div className="col-md-12 text-center">
            <CButton onClick={NewPackage} color="primary">Save</CButton>{' '}
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
        <CModalTitle>Update Package</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="card-body">
            <div class="row">

                
            <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="update_package_name">Package Name <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="update_package_name" defaultValue={getpackage.package_name} name="update_package_name" class="form-control"  />
                        <input type="hidden" id="update_uuid" name="update_uuid" value={getpackage.uuid} />
                    </div>
                </div>
                </div>

                 <div className="col-md-6">
                <div class="form-group ">
                        <label class="form-label" for="package_description"> Package Description </label>
                        <span class="desc"></span>
                        <div class="controls">
                            <textarea class="form-control" id="update_package_description" defaultValue={getpackage.package_description}name="update_package_description" rows="1"></textarea>
                        </div>
                </div>
            </div>
                
            <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="update_package_duration">Package Duration(In weeks) <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="update_package_duration" defaultValue={getpackage.package_duration} name="update_package_duration" class="form-control"  />
                    </div>
                </div>
                </div>



                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Fees  <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="update_package_price" defaultValue={getpackage.package_price} name="update_package_price" class="form-control"  />
                    </div>
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">Classes <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">

                        <input type="text" id="update_classes" defaultValue={getpackage.class_passes} name="update_classes" class="form-control"  /> 

                        {/* <select name="update_classes" class="form-control" defaultValue={getpackage.list_class}  id="update_classes" multiple="multiple">
                            {blog2.map(store=> (<option value={store.uuid}>{store.class_topic}</option>))}
                        </select> */}
                        {/* {getpackage.list_class} */}
                        {/* {getpackage.list_class.map(store=> (<span>{store}</span>))} */}
                    </div>
                </div>
                </div>


        </div>
        
        </div>
        
        </CModalBody>
        <CModalFooter>
            <CButton color="primary" onClick = {UpdatePackage}>Save</CButton>{' '}
            <CButton 
            color="secondary" 
            onClick={() => setSuccess(false)}
            >Close</CButton>
        </CModalFooter>
        </CModal>

    </>
  )
 
}

export default Package






// import React from 'react';
// import ReactDOM from 'react-dom';
// import {loadStripe} from '@stripe/stripe-js';
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements,
// } from '@stripe/react-stripe-js';
 
// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
 
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const {error, paymentMethod} = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     //   amount:"100"
//     });
//   };
 
//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };
 
// const stripePromise = loadStripe('pk_test_51HZyuUBUDHJnKypi4kUL9li0ajCfsvFaHSE00xQvz4RvMTRkkIa5ujNw6Ma9RK4hFHMlFvFAiNlXTPkcwFQdVVu400xeGtuYwT');
 
// const App = () => (
//   <Elements stripe={stripePromise}>
//     <CheckoutForm />
//   </Elements>
// );
 
// ReactDOM.render(<App />, document.body);


