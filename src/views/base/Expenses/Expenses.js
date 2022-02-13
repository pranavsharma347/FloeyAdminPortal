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


const [getexpense, setgetexpense] = useState([])
const [getuser, setuser] = useState([])

const axios = require('axios');

useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/expense/?gym='+cookies.get('gym_uuid'))
    .then(res => {
        console.log(res)
        setgetexpense(res.data)
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


  const [getexpensedetail, setgetexpensedetail] = useState(["ffgyu","fghj"])

  function Clicker(uuid) {
      // alert(uuid);
      setSuccess(!success);
      //  debugger
      axios
        .get(BASE_URL + 'gymprofile/expense/' + uuid)
        .then(getuuid => {
          console.log(getuuid);
          setgetexpensedetail(getuuid.data);
        })
  
    }


async function NewExpense() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var expense_name = document.getElementById("expense_name").value;
    var date_paid = document.getElementById("date_paid").value;
    var expense_amount = document.getElementById("expense_amount").value;
    var transact_by = document.getElementById("transact_by").value;
    var frequency = document.getElementById("frequency").value;
    var gym = cookies.get('gym_uuid')
    {  
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.post(BASE_URL + 'gymprofile/expense/', {
            
                transaction_reason:expense_name,
                date_paid:date_paid,
                transaction_amount:expense_amount,
                transact_by:transact_by,
                frequency:frequency,
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

async function UpdateExpense() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var expense_name = document.getElementById("update_expense_name").value;
    var date_paid = document.getElementById("update_date_paid").value;
    var expense_amount = document.getElementById("update_expense_amount").value;
    var transact_by = document.getElementById("update_transact_by").value;
    var frequency = document.getElementById("update_frequency").value;
    var uuid = document.getElementById("update_uuid").value;
    var gym = cookies.get('gym_uuid')
    
    
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.patch(BASE_URL + 'gymprofile/expense/' + uuid +'/', {
            
                transaction_reason:expense_name,
                date_paid:date_paid,
                transaction_amount:expense_amount,
                transact_by:transact_by,
                frequency:frequency,
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

async function deletePackage(uuid) {
    // setSuccess(false);
   console.log(uuid)
    
    {  
       
        console.log('Trying to send request');
        
        try {
            let loader = `<div><div class="loader centered"/></div>`;
            // document.getElementById('reg').innerHTML = loader;
            console.log('Trying');
            let res = await axios.delete(BASE_URL + 'gymprofile/expense/' + uuid +'/', {
            
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

  if (perm.includes('Expenses')){

  return (
    <>
   
        <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">
                  
                  <button className="mn_btn_1 mr-1" onClick={() => setPrimary(!primary)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add Expenses </button>
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
                
                <th>Name Expenses</th>
                <th>Date Paid</th>
                <th>Amount</th>
                <th>Frequency</th>
                <th>Action</th>
                {/* <th  class="text-center">Frequency</th> */}
                {/* <th  class="text-center">Active/InActive</th> */}
            </tr>
            </thead>
            <tbody>
            {getexpense.map(store => (
            <tr>

                <td>{store.transaction_reason}</td>
                <td>{store.date_paid}</td>
                <td>{store.transaction_amount}</td>
                <td>{store.frequency}</td>
                {/* <td  class="text-center">{store.frequency}</td> */}
                {/* <td class="text-center">
                <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
                </label>
                </td> */}
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
        <CModalTitle>Add Expenses</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="col-md-12">
            <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Name of the expenses</label>
                        <input type="text" id="expense_name" name="expense_name" class="form-control" />
                </div>
                </div>

                 <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="date_paid">Date Paid </label>
                        <input type="date" id="date_paid" name="date_paid" class="form-control"  />
                </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_amount">Amount </label>
                        <input type="text" id="expense_amount" name="expense_amount" class="form-control"  />
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="transact_by">Transact By </label>
                        <select id='transact_by' class="form-control"> 
                        {getuser.map(store => (<option value={store.uuid}> {store.first_name} </option>))}
                        </select>
                    </div>
                </div>

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="transact_by">Frequency </label>
                        <select id='frequency' class="form-control"> 
                        <option>Monthly</option>
                        <option>Quaterly</option>
                        <option>Yearly</option>
                        <option>One Time</option>
                        </select>
                    </div>
                </div>

               

        </div>

        </div>
        
        </CModalBody>
        <CModalFooter>
            <div className="col-md-12 text-center">
            <CButton color="primary" onClick={NewExpense}>Save</CButton>{' '}
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
                    <label class="form-label" for="expense_name">Name of the expenses</label>
                    <input type="text" defaultValue= {getexpensedetail.transaction_reason} id="update_expense_name" name="udpate_expense_name" class="form-control" />
                    <input type='hidden' value={getexpensedetail.uuid} id ='update_uuid'/>
            </div>
            </div>

            <div class="col-sm-6" >
                <div class="form-group">
                    <label class="form-label" for="date_paid">Date Paid </label>
                    <input type="date" id="update_date_paid" defaultValue= {getexpensedetail.date_paid} name="update_date_paid" class="form-control"  />
            </div>
            </div>

            <div class="col-sm-6" >
                <div class="form-group">
                    <label class="form-label" for="expense_amount">Amount </label>
                    <input type="text" id="update_expense_amount" defaultValue= {getexpensedetail.transaction_amount} name="update_expense_amount" class="form-control"  />
                </div>
            </div>

            <div class="col-sm-6" >
                <div class="form-group">
                    <label class="form-label" for="transact_by">Transact By </label>
                    <select id='update_transact_by' defaultValue= {getexpensedetail.transact_by} class="form-control"> 
                    {getuser.map(store => (<option value={store.uuid}> {store.first_name} </option>))}
                    </select>
                </div>
            </div>

            <div class="col-sm-6" >
                <div class="form-group">
                    <label class="form-label" for="transact_by">Frequency </label>
                    <select id='update_frequency' class="form-control"> 
                    <option>Monthly</option>
                    <option>Quaterly</option>
                    <option>Yearly</option>
                    <option>One Time</option>
                    </select>
                </div>
            </div>

        </div>
        </div>
        
        </CModalBody>
        <CModalFooter>
            <CButton color="primary" onClick = {UpdateExpense}>Save</CButton>{' '}
            <CButton 
            color="secondary" 
            onClick={() => setSuccess(false)}
            >Close</CButton>
        </CModalFooter>
        </CModal>

    </>
  )}
  else{
    return window.location.href='#/dashboard'
  }

}

export default Expenses
