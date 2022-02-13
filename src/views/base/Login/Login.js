import React from 'react';
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Cookies from 'universal-cookie';
import BASE_URL from 'src/views/base';

function Login() {

  const cookies = new Cookies();

  const axios = require('axios');
  console.log(cookies.get('email'));

  async function MyOne() {
    //  debugger
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
      // e.preventDefault();
      try {
        console.log('Trying');
        let res = await axios.post(BASE_URL + 'user/admin/login/', {
          
          email: email,
          password: password,
          
        })
       if (res.status === 200) {
          //  debugger
          console.log(res.data)
          cookies.set('uuid',res.data.uuid,{path:'/'});
          cookies.set('email',res.data.results.email,{path:'/'});
          cookies.set('gym_uuid', res.data.gym, { path: '/' });
          cookies.set('perms',res.data.perms, { path: '/' })
          console.log(cookies.get('perms'));
          // setInterval(function(){},2000);
          window.location = '/#/Dashboard';
        }
      }
      catch (err) {
        console.error(err);
          alert('Login unsuccessfull.');
          window.location.reload();
      }
    }
  // return (
  //   <>
  //   {/* <Navbar/> */}
  //   <section className="space-ptb">
  //       <div className="container">
  //         <div className="row justify-content-center">
  //           <div className="col-lg-6">
  //               <div className="log-main">
  //               <div className="login-title">
  //                   <h4> Login  </h4>
  //               </div>
  //                 <form className="form-row mt-4 align-items-center">
  //                   <div className="form-group col-sm-12">
  //                     <input type="email" id='email' className="form-control" placeholder="Email" />
  //                   </div>
  //                   <div className="form-group col-sm-12">
  //                     <input type="Password" id='password' className="form-control" placeholder="Password" />
  //                   </div>
  //                   <div className="col-sm-6 m-auto">
  //                     <button onClick={MyOne} className="btn btn-primary btn-block">Login</button>
  //                   </div>
                    
  //                 </form>
  //                 {/* <div className="login-social-media border pl-4 pr-4 pb-4 pt-0 rounded mt-5">
  //                   <div className="mb-4 d-block text-center"><b className=" pl-2 pr-2 mt-3 d-block">Login or Sign in with</b></div>
  //                   <form className="row">
  //                     <div className="col-sm-12">
  //                       <a className="btn btn-skew bg-facebook d-block mb-3 text-white" href="#"><span><i className="fab fa-facebook-f" />Login with Facebook</span></a>
  //                     </div>
  //                   </form>
  //                 </div> */}
  //                 </div>
  //               </div>
            
  //         </div>
  //       </div>
  //     </section>

  //   </>
  // );


  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" id='email' placeholder="Email" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" id='password' placeholder="Password" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" onClick={()=>MyOne()}  className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login;
