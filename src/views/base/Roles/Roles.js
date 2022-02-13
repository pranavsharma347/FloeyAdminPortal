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
import $ from "jquery";


const cookies = new Cookies();
//  debugger


const Expenses = () => {

        
const [modal, setModal] = useState(false)
const [large, setLarge] = useState(false)
const [small, setSmall] = useState(false)
const [primary, setPrimary] = useState(false)
const [success, setSuccess] = useState(false)
const [warning, setWarning] = useState(false)
const [danger, setDanger] = useState(false)
const [info, setInfo] = useState(false)


const [getroles,setroles] = useState([])

const axios = require('axios');

useEffect(() => {
  axios
  .get(BASE_URL + 'gymprofile/gymroles/?gym='+cookies.get('gym_uuid'))
  .then(res => {
      console.log(res.data)
      setroles(res.data)
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

    async function Addrole(){
      //  debugger
      var url = BASE_URL+'gymprofile/gymroles/';      
      var role = document.getElementById('role').value;
  
      var config={
        url:url,
        method:"post",
        data:{"user_roles":role,'gym':cookies.get('gym_uuid')}
      };
      axios(config)
      .then(re=>{
          window.location.reload();
      }).catch(err=>{
          // alert("Error Please Try Again");;
      })
    }

async function UpdateUser(uuid) {
    // setSuccess(false);
   
    //  debugger
    // var form = document.forms["regform"]["email"].value;   
    var role = document.getElementById("update_role").value;
    var first_name = document.getElementById("update_first_name").value;
    var last_name = document.getElementById("update_last_name").value;
    var email = document.getElementById("update_email").value;
    var dob = document.getElementById("update_dob").value;
    var gender = document.getElementById("update_gender").value;
    // var password = document.getElementById("update_password").value;
    var profile_picture = document.querySelector("#update_profile_picture");
    // var password1 = document.getElementById("update_confirm_password").value;
    // var password = '1234';
    // var password1 = '1234';
    // console.log(password1);
    // console.log(password);

     {  
       
        console.log('Trying to send request');
        
        var data = new FormData();


        data.append("user_role", role);
        data.append("first_name", first_name);
        data.append("last_name", last_name);
        data.append("email", email);
        data.append("gender", gender);
        // data.append("password", password);       
        data.append("dob", dob);
        data.append("profile_picture", profile_picture.files[0]);
    
        try {
          console.log('Trying')
    
          var config = {
            method: "patch",
            url: BASE_URL + "user/" + uuid + '/',
            headers: {
              "content-type": `multipart/form-data; boundary=${data._boundary}`,
            },
            data: data,
          };
    
          await axios(config)
            .then(function (res) {
    
              console.log(JSON.stringify(res.data));
    
              if (res.status === 200) {
    
                if (res.status === 200) {
                  window.location.reload();
    
                }
                else {
    
                  alert("BAD REQUEST");
                }
              }
    
              return res.data
            })
    
    
        }
        catch (err) {
    
          console.error(err);
    
        }
    }
}

async function DeleteUser(uuid) {
      var url = BASE_URL+'gymprofile/gymroles/'+uuid;
      const x = await axios.delete(url);
  
        if (x.status === 200) {
          window.location.reload()
        } else {
          // alert("Error");
        }
}


  return (
    <>
   
        <CRow>
      <div className="col-md-12">
              <div className="manage_top_btn">
              <div className="manage-btn-left">
                  <button className="mn_btn_1 mr-1" onClick={() => setPrimary(!primary)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add Role </button>
                  <button className="mn_btn_1 mr-1" onClick={() =>window.location.href = '#/base/permissions'}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Add Permission </button>
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
                {/* <th>Permissions</th> */}
                {/* <th  class="text-center">Frequency</th> */}
                {/* <th  class="text-center">Status</th> */}
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {getroles.map(store => (
            <tr>

                <td>{store.user_roles}</td>
              
                <td>
                {/* <CButton color="primary" onClick={() => Clicker(store.uuid)}>Manage</CButton>{' '} */}
                <button type="button" class="btn btn-danger" onClick={() => DeleteUser(store.uuid)}><i class="fa fa-trash-o" aria-hidden="true"></i></button> 
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
        <CModalTitle>Add User</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="col-md-12">
        <div class="row">

          <div class="col-sm-6" >
              <div class="form-group">
                  <label class="form-label" for="expense_name">Role</label>
                  <input id='role' name='role' className='form-control'></input>
          </div>
          </div>

            
        </div>
 
</div>
        
        </CModalBody>
        <CModalFooter>
            <div className="col-md-12 text-center">
            <CButton color="primary" onClick={()=> Addrole()} >Save</CButton>{' '}
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
        <CModalTitle>Update User</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <div class="card-body">
    
        <div class="row">

                <div class="col-sm-6" >
                    <div class="form-group">
                        <label class="form-label" for="expense_name">Role</label>
                        <input type="text" defaultValue={userdetail.for_role} id="update_first_name"  name="first_name" class="form-control"  />
                </div>
                </div>

                  <CCol md="12">
                    <CLabel className="mr-0">Permissions</CLabel>
                  </CCol>
                  <CCol md="12">
                  
                  {/* {PermissionsList.map((perm) => {
            
                  return <div className="col-xs-4">
                  <label className="container_signup">
                    {perm.title}
                    {permisions.includes(perm.title)?<input id={perm.id} value={perm.title} checked type="checkbox" />:<input id={perm.id} value={perm.title} type="checkbox" />}
                    <span className="checkmark"></span>
                  </label>
                </div>
                //  return <CFormGroup variant="custom-checkbox" inline>
                //   {permisions.includes(perm.title)?<CInputCheckbox custom id={perm.id} name={perm.title} checked value={perm.title} />:<CInputCheckbox custom id={perm.id} name={perm.title} value={perm.id} onClick={()=>document.getElementById(perm.id).checked==true}/>}
                //   <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">{perm.title}</CLabel>
                // </CFormGroup>
              
             })}  */}
                  </CCol>
              

                 
        </div>
        </div>
        
        </CModalBody>
        <CModalFooter>
            <CButton color="primary" onClick = {()=>UpdateUser()}>Save</CButton>{' '}
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
