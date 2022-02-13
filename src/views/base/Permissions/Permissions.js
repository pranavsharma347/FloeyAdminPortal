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
  CEmbedItem,
  CFormGroup,
  CFormText,
  CInputCheckbox,
  CLabel,
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import BASE_URL from 'src/views/base'
import Cookies from 'universal-cookie';
import PermissionsList from "./PermissionsList";
import $ from "jquery";


const cookies = new Cookies();
//  debugger
console.log(PermissionsList)


const Expenses = () => {

        
const [modal, setModal] = useState(false)
const [large, setLarge] = useState(false)
const [small, setSmall] = useState(false)
const [primary, setPrimary] = useState(false)
const [success, setSuccess] = useState(false)
const [warning, setWarning] = useState(false)
const [danger, setDanger] = useState(false)
const [info, setInfo] = useState(false)


const [getpermission, setpermissions] = useState([])
const [getuser, setuser] = useState([])
const [getroles,setroles] = useState([])

const axios = require('axios');

useEffect(() => {
    axios
    .get(BASE_URL + 'user/roles/permissions/?gym='+cookies.get('gym_uuid'))
    .then(res => {
        console.log(res.data)
        setroles(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

useEffect(() => {
  axios
  .get(BASE_URL + 'gymprofile/gymroles/?gym='+cookies.get('gym_uuid'))
  .then(res => {
      console.log(res.data)
      setpermissions(res.data)
  })
  .catch(err => {
      console.log(err)
  })
}, [])


  const [userdetail, setuserdetail] = useState([])
  const [permisions,setupdatepermissions] = useState([])
  function Clicker(uuid) {
      // alert(uuid);
      setSuccess(!success);
      //  debugger
      axios
        .get(BASE_URL + 'user/roles/permissions/' + uuid)
        .then(getuuid => {
          console.log(getuuid.data.permissions_list);
          setuserdetail(getuuid.data);
          setupdatepermissions(getuuid.data.permissions_list)
        })
  
    }

    async function AddNewPermission(){
      //  debugger
      var url = BASE_URL+'user/roles/permissions/';      
      var permissions = new Array();
      var role = document.getElementById('role').value;
  
      PermissionsList.map(perms=>{
          if ($("#"+perms.id).is(":checked")){
              permissions.push(perms.title);
          }
      })
      
    
      var config={
        url:url,
        method:"post",
        data:{"permissions_list":permissions,"for_role":role,'gym':cookies.get('gym_uuid')}
      };
      axios(config)
      .then(re=>{
          alert(re.data);
          window.location.reload();
      }).catch(err=>{
          // alert("Error Please Try Again");;
      })
    }

async function UpdateUser(uuid) {
    // setSuccess(false);
    //  debugger
    var url = BASE_URL+'user/roles/permissions/' + uuid + '/';      
    var permissions = new Array();
    var role = document.getElementById('update_role').value;

    PermissionsList.map(perms=>{
        if ($("#update_"+perms.id).is(":checked")){
            permissions.push(perms.title);
        }
    })
    
  
    var config={
      url:url,
      method:"put",
      data:{"permissions_list":permissions,"for_role":role,}
    };
    axios(config)
    .then(re=>{
        alert(re.data);
        window.location.reload();
    }).catch(err=>{
        // alert("Error Please Try Again");;
    })
  }

async function DeletePermission(uuid) {
      var url = BASE_URL+'user/roles/permissions/'+uuid;
      const x = await axios.delete(url);
  
        if (x.status === 204) {
          window.location.reload()
        } else {
          // alert("Error");
        }
}

var perm = cookies.get('perms')

  // if (perm.includes('Role and Permissions')){
  return (
    <>
   
        <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">
                  
                  <button className="mn_btn_1 mr-1" onClick={() => setPrimary(!primary)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add Permission </button>
                  <button className="mn_btn_1 mr-1" onClick={() => window.location.href='#/base/roles'}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Manage Roles </button>
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
                
                <th>Role</th>
                <th>Permissions</th>
                {/* <th  class="text-center">Frequency</th> */}
                {/* <th  class="text-center">Status</th> */}
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {getroles.map(store => (
            
            <tr>

                <td>{store.for_role}</td>
                <td>{store.permissions_list}</td>
                
                <td>
                {/* <CButton color="primary" onClick={() => Clicker(store.uuid)}>Manage</CButton>{' '} */}
                {store.for_role!=='Admin' &&<button type="button" class="btn btn-danger" onClick={() => DeletePermission(store.uuid)}><i class="fa fa-trash-o" aria-hidden="true"></i></button> }
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
        <CModalTitle>Add Permission</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="col-md-12">
        <div class="row">

          <div class="col-sm-6" >
              <div class="form-group">
                  <label class="form-label" for="expense_name">Role</label>
                  <select  id='role' class="form-control"> 
                  {getpermission.map(store => (store.user_roles!=='Admin' && <option value={store.uuid}> {store.user_roles} </option>))}
                  </select>
          </div>
          </div>

          <CCol md="12">
              <CLabel className="mr-0">Permissions</CLabel>
            </CCol>
            
            <CCol md="12">
            <div className="row">
            {PermissionsList.map((perm) => {

                return <div className="col-xs-4">
                <label className="container_signup">
                  {perm.title}
                   <input id={perm.id} value={perm.title} type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                </div>

                // return <CFormGroup variant="custom-checkbox" inline>
                //       <CInputCheckbox custom id={perm.id} name={perm.title} value={perm.id} />
                //       <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">{perm.title}</CLabel>
                //       </CFormGroup>

                })} 
            </div>
            
            </CCol>

        </div>
 
</div>
        
        </CModalBody>
        <CModalFooter>
            <div className="col-md-12 text-center">
            <CButton color="primary" onClick={()=> AddNewPermission()} >Save</CButton>{' '}
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
        <CModalTitle>Update Permission</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="card-body">
    
        <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Role</label>
                        <input type="text" defaultValue={userdetail.for_role} id="update_role"  name="first_name" class="form-control"  />

                </div>
                </div>

                  <CCol md="12">
                    <CLabel className="mr-0">Permissions</CLabel>
                  </CCol>
                  <CCol md="12">
                  
                  {PermissionsList.map((perm) => {
            
                  return <div className="col-xs-4">
                  <label className="container_signup">
                    {perm.title}
                    {permisions.includes(perm.title)?<input id={'update_'+perm.title} value={perm.title} checked type="checkbox" />:<input id={'update_'+perm.title} value={perm.title} type="checkbox" />}
                    <span className="checkmark"></span>
                  </label>
                </div>
              
             })} 
                  </CCol>
              

                 
        </div>
        </div>
        
        </CModalBody>
        <CModalFooter>
            <CButton color="primary" onClick = {()=>UpdateUser(userdetail.uuid)}>Save</CButton>{' '}
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
