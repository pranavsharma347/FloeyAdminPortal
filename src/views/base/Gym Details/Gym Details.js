import React, { useState,useEffect } from 'react'
import $ from 'jquery';
import CIcon from '@coreui/icons-react'
import Split from 'react-split';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CInput,
  CFormGroup,
  CLabel,
  CForm,
  CTextarea,
  CSelect,
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
const Addclass = () => {
const [primary, setPrimary] = useState(false)
const [secondary,setSecondary] = useState(false)
const [third,setthird] = useState(false)
const [blog, setBlog] = useState([])
const [blog2, setBlog2] = useState([])
const [blog3,setBlog3]=useState([])
const [blog4, setBlog4] = useState([])
const axios = require('axios');

const [getgym,setgym] = useState([])

useEffect(() => {
    //  debugger
  axios
  .get(BASE_URL + 'gymprofile/gym/' + cookies.get('gym_uuid'))
  .then(res => {
  //   console.log(res)
    setgym(res.data)
  //   console.log(getgym[0].gym_name)
  })
  .catch(err => {
    // console.log(err)
  })
}, [])


useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/weekdays/')
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
    .get(BASE_URL + 'gymprofile/location/?gym=' + cookies.get('gym_uuid'))
    .then(res => {
        console.log(res)
        setBlog2(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

useEffect(() => {
  //  debugger
axios
.get(BASE_URL + 'gymprofile/gymtime/')
.then(res => {
  console.log(res.data)
  setBlog3(res.data[0])
//   console.log(getgym[0].gym_name)
})
.catch(err => {
  // console.log(err)
})
}, [])

useEffect(() => {
    axios
    .get(BASE_URL + 'gymprofile/age_group/')
    .then(res => {
        console.log(res)
        setBlog4(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])



async function UpdateGym() {
    // setSuccess(false);
  
     debugger

    var data = new FormData();

    if(document.getElementById("gym_name").value){
      var gym_name = document.getElementById("gym_name").value;
      data.append("gym_name",gym_name);
    }
    
    if(document.getElementById("contact_number").value){
      var contact_number = document.getElementById("contact_number").value;
      data.append("contact_number",contact_number);
    }  


    if(document.getElementById("email").value){
      var email = document.getElementById("email").value;
      data.append("email",email);
    }  


    if(document.getElementById("address").value){
      var address = document.getElementById("address").value;
      data.append("address",address);
    }  

    if(document.getElementById("city").value){
      var city = document.getElementById("city").value;
      data.append("city",city);
    }  

    if(document.getElementById("about").value){
      var about = document.getElementById("about").value;
      data.append("about",about);
    }  

    if( $("#opening_days").val()){
      var opening_days =  $("#opening_days").val();;
      for (var i = 0; i < opening_days.length; i++) {
        data.append('opening_days', opening_days[i]);
      }
    }

    if(document.getElementById("gym_timings").value){
      var gym_timings = document.getElementById("gym_timings").value;
      data.append("gym_timings",gym_timings);
    }

    if(document.getElementById("age_criteria").value){
      var age_criteria = document.getElementById("age_criteria").value;
      data.append("age_criteria",age_criteria);
    }

    if(document.getElementById("gender_criteria").value){
      var gender_criteria = document.getElementById("gender_criteria").value;
      data.append("gender_criteria",gender_criteria);
    }
    

    try {
      console.log('Trying')
      //  debugger
      var config = {
        method: "patch",
        url: BASE_URL + "gymprofile/gym/" +  cookies.get('gym_uuid') +'/',
        data: data,
      };

      await axios(config)
        .then(function (res) {
          //  debugger
          console.log(JSON.stringify(res.data));

          if (res.status === 200) {
            //  debugger
                window.location.reload();
            }
            else {
              //  debugger
              alert("BAD REQUEST");
            }
        }
         
        )
    }
    catch (err) {
      //  debugger
      console.error(err);

    }
     
}
  return (
    <>
  
  <CRow>
        <CCol md="12">
          <CCard>
      
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  
                <CCol md="12">
                    <div className="f-text">
                      <h4> Business Details </h4>
                    </div>

                    <div className="f-icon">

                    <CButton color="primary" onClick={() => setPrimary(!primary)} >
                      <CIcon size="sm" name="cil-pencil" />
                    </CButton>

                      
                    </div>
                </CCol>  
                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Business Name</CLabel>
                      <CInput id="company" value={getgym.gym_name} />
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                  <CFormGroup>
                  <CLabel htmlFor="company">About</CLabel>
                  <CTextarea 
                        name="textarea-input" 
                        id="textarea-input" 
                        rows="2"
                        value={getgym.about} 
                      />
                  </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Email</CLabel>
                      <CInput id="company" value={getgym.email}/>
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Address</CLabel>
                      <CInput id="company" value={getgym.address} />
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Contact Number</CLabel>
                      <CInput id="company" value={getgym.contact_number}/>
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Opening Days</CLabel>
                      <CInput id="company" value={getgym.opening_days} />
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Opening Time</CLabel>
                      <CInput id="company" value={getgym.gym_timings} />
                    </CFormGroup>
                  </CCol>

                 
                </CFormGroup>
              

              </CForm>
            </CCardBody>
          </CCard>
        </CCol>


        <CCol md="12">
          <CCard>
      
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  
                <CCol md="12">
                    <div className="f-text">
                      <h4> Business Permission </h4>
                    </div>

                    <div className="f-icon">

                    <CButton color="primary" onClick={() => setSecondary(!secondary)} >
                      <CIcon size="sm" name="cil-pencil" />
                    </CButton>

                    </div>

                </CCol>  
                <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Gender Criteria</CLabel>
                      <CInput id="company" value={getgym.gender_criteria} />
                    </CFormGroup>
                  </CCol>

            

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Age Criteria</CLabel>
                      <CInput id="company" value={getgym.age_criteria}/>
                    </CFormGroup>
                  </CCol>

                </CFormGroup>
              

              </CForm>
            </CCardBody>
          </CCard>
        </CCol>



        
        <CCol md="12">
          <CCard>
      
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  
                <CCol md="12">
                    <div className="f-text">
                      <h4> Business Permission </h4>
                    </div>

                    <div className="f-icon">

                      <CButton color="primary" onClick={() => setthird(!third)} >
                        <CIcon size="sm" name="cil-pencil" />
                      </CButton>

                    </div>

                </CCol>  

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Location</CLabel>
                      <CInput id="company"value={getgym.city} />
                    </CFormGroup>
                  </CCol>

                </CFormGroup>
              

              </CForm>
            </CCardBody>
          </CCard>
        </CCol>


      </CRow>


      <CModal 
              show={primary} 
              onClose={() => setPrimary(!primary)}
              color="primary"
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle> Business Details </CModalTitle>
              </CModalHeader>
              <CModalBody>

              <CCol md="12">
        
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  
                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Business Name</CLabel>
                      <CInput id="gym_name" defaultValue={getgym.gym_name} />
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                  <CFormGroup>
                  <CLabel htmlFor="company">About</CLabel>
                  <CTextarea 
                        name="textarea-input" 
                        id="about" 
                        rows="2"
                        defaultValue={getgym.about} 
                      />
                  </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Email</CLabel>
                      <CInput id="email" defaultValue={getgym.email}/>
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Address</CLabel>
                      <CInput id="address" defaultValue={getgym.address} />
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company">Contact Number</CLabel>
                      <CInput id="contact_number" defaultValue={getgym.contact_number} />
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company"> Opening Days </CLabel>
                      <label class="hint form-label" for="first_name">Current Days - {getgym.opening_days} </label>
                      <CSelect multiple name="select" id="opening_days">
                      {blog.map(store =>(<option value={store.uuid}>{store.day}</option>))}
                    </CSelect>
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company"> Gym Timings </CLabel>
                      <label class="hint form-label" for="first_name">Current Timing - {getgym.gym_timings} </label>
                      <CSelect  name="select" id="gym_timings">
                      <option value={blog3.uuid}>{blog3.time_text}</option>
                    </CSelect>
                    </CFormGroup>
                  </CCol>

                 
                </CFormGroup>
              
              </CForm>
       
        </CCol>

              </CModalBody>
              <CModalFooter >
                <CCol md="12" className="text-center">
                <CButton onClick={()=>UpdateGym(getgym)} color="primary">
                  Save
                </CButton>
                </CCol>
                
             
              </CModalFooter>
            </CModal>

            <CModal 
              show={secondary} 
              onClose={() => setSecondary(!secondary)}
              color="primary"
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle> Business Details </CModalTitle>
              </CModalHeader>
              <CModalBody>

              <CCol md="12">
        
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>

               

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company"> Gender Criteria </CLabel>
                      <label class="hint form-label" for="first_name">Current - {getgym.gender_criteria} </label>
                      <CSelect  name="select" id="gender_criteria">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Unisex">Unisex</option>
                    </CSelect>
                    </CFormGroup>
                  </CCol>

                  <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company"> Age Criteria </CLabel>
                      <label class="hint form-label" for="first_name">Current - {getgym.age_criteria} </label>
                      <CSelect  name="select" id="age_criteria">
                      {blog4.map(store =>(<option value={store.uuid}>{store.age}</option>))}
                    </CSelect>
                    </CFormGroup>
                  </CCol>

                 </CFormGroup>
              

              </CForm>
       
        </CCol>

              </CModalBody>
              <CModalFooter >
                <CCol md="12" className="text-center">
                <CButton onClick={()=>UpdateGym(getgym)} color="primary">
                  Save
                </CButton>
                </CCol>
                
             
              </CModalFooter>
            </CModal>
        

            <CModal 
              show={third} 
              onClose={() => setthird(!third)}
              color="primary"
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle> Business Details </CModalTitle>
              </CModalHeader>
              <CModalBody>

              <CCol md="12">
        
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                <CCol md="6">
                    <CFormGroup>
                      <CLabel htmlFor="company"> Location </CLabel>
                      <label class="hint form-label" for="first_name">Current - {getgym.city} </label>
                      <CSelect multiple name="select" id="city">
                      {blog2.map(store =>(<option value={store.uuid}>{store.gym_location}</option>))}
                    </CSelect>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
              

              </CForm>
       
        </CCol>

              </CModalBody>
              <CModalFooter >
                <CCol md="12" className="text-center">
                <CButton onClick={()=>UpdateGym(getgym)} color="primary">
                  Save
                </CButton>
                </CCol>
                
             
              </CModalFooter>
            </CModal>


    </>
  )
}

export default Addclass
