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

  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];


  const current = new Date();

var last_month = monthNames[current.getMonth()-1]
var sec_las_month = monthNames[current.getMonth()-2]
var third_last_month = monthNames[current.getMonth()-3]

// console.log(lastmonth)
const axios = require('axios');

const [getreports, setreports] = useState([])


async function Reports() {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var start_date = document.getElementById("start_date").value;
    var end_date = document.getElementById("end_date").value;
    
    {  
       
        console.log('Trying to send request');
        
        try {
            console.log('Trying');
            let res = await axios.post(BASE_URL + 'gymprofile/dash/', {
                start_date:start_date,
                end_date:end_date,
                gym_id: cookies.get('gym_uuid'),
            });
            if (res.status === 200) {
                //  debugger
                // test for status you want, etc
                console.log(res.data.data);
                setreports(res.data.data);
                // alert(res.data.message);
             
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

async function QuarterlyReports(month) {
  // setSuccess(false);
 
  //  debugger
  // var form = document.forms["regform"]["email"].value;   
  // var start_date = document.getElementById("start_date").value;
  // var end_date = document.getElementById("end_date").value;
  
  {
     
      console.log('Trying to send request');
      
      try {
          console.log('Trying');
          let res = await axios.post(BASE_URL + 'gymprofile/dash/', {
            month:month,
            gym_id: cookies.get('gym_uuid'),
          });
          if (res.status === 200) {
            //  debugger
            // test for status you want, etc
            console.log(res.data.data);
            setreports(res.data.data);
            // alert(res.data.message);
           
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


async function CSVExport(data){
  //  debugger

  {
     
    console.log('Trying to send request');
    
    try {
        console.log('Trying');
        let res = await axios.post(BASE_URL + 'gymprofile/reports/csv/', {
          data:data,
          gym_id: cookies.get('gym_uuid'),
        });
        if (res.status === 200) {
          //  debugger
          // test for status you want, etc
          console.log(res.data.data);
          setreports(res.data.data);
          // alert(res.data.message);
         
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

  // if (perm.includes('Reports')){

  return (
    <>
   
        <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn rports-form-top">
          

                
              <CRow>
                <div className="col-md-5">
                <div className="form-group">
              <label>Start date :</label> 
              <input className="form-control" id='start_date' type='date'></input>
              </div>
                </div>
              <div className="col-md-5">
                <div className="form-group">
                <label>End date :</label> 
                <input className="form-control" id='end_date' type='date'></input>
                  </div>
              </div>
            

              <div className="col-md-2">
                <CButton color="primary bt-mr" onClick={Reports}>Generate Reports</CButton>{' '}
              </div>


              <CCol xs="12" lg="12">
                    <div className="reports-filter-btn">
                    
                    <CButton color="primary" onClick={()=>QuarterlyReports('prev')} > {last_month}</CButton>
                    <CButton color="primary" onClick={()=>QuarterlyReports('2prev')} > {sec_las_month}</CButton>
                    <CButton color="primary" onClick={()=>QuarterlyReports('3prev')} > {third_last_month}</CButton>
                    </div>
                </CCol> 
              
                </CRow>

                <CRow>



                </CRow>  

              </div>
              
          </div>
        <CCol xs="12" lg="12">
          <CCard>
         
          <div className="col-md-12">
              
          <div className="manage-table-main">
                <table class="table">
            <thead>
          
            <tr>
                <th>Total Revenue</th>
                <th>Expenses</th>
                <th>New user count</th>
                <th>Profit/Loss</th>
                <th>Action</th>
              
            </tr>
            </thead>
            <tbody>
            <tr>
                {getreports.total_sales?<td>{getreports.total_sales}</td>:<td>0</td>}
                {getreports.transactions?<td>{getreports.transactions}</td>:<td>0</td>}
                {getreports.user_count?<td>{getreports.user_count}</td>:<td>0</td>}
                {getreports.profit?<td>{getreports.profit}</td>:<td>0</td>}
                <CButton color="primary" onClick = {()=>CSVExport(getreports)}>Export to CSV</CButton>{' '}

             
            </tr>
             </tbody>
        </table>

    </div>
        </div>

        
          </CCard>
        </CCol>
      </CRow>

      

    </>
  )
// }
//   else{
//     return window.location.href='#/dashboard'
//   }
}

export default Classes
