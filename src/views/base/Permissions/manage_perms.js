import React from "react";
import { NavLink } from "react-router-dom";

// import WeareGlad from "../WeareGlad";
import $ from "jquery";
import Cookies from "universal-cookie";
import BASE_URL from "src/views/base";
// import BASE_URL from "../base";
import PermissionsList from "./PermissionsList";
// import Iframe from "react-iframe";
// import TopupPermissions from "../PermissionList/TopupPermissions";
// import WithdrawPermissions from "../PermissionList/WithdrawPermissions";
// import SendPermissions from "../PermissionList/SendPermissions";
// import UtilitiesPermissions from "../PermissionList/UtilitiesPermissions";
// import RetailPermissions from "../PermissionList/RetailPermissions";
// import ProfileSection from "../PermissionList/ProfileSection";
// import { toastr } from "react-redux-toastr";
// import timeSensativeAction from "../sleep_helper";
const cookies = new Cookies();
const axios = require("axios");



class WorkFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workflows:[],
      user_groups:[],
      section_wise_permissions:[],
      users: [],
      user_roles:[]
    };
  }

  AddWorkFlow(){
      var url = BASE_URL+'user/roles/permissions/?gym=' + cookies.get('gym_uuid');
      
      var section = document.getElementById('section').value;
      var user_roles = $("#roles").val();
      var control=0
      if (user_roles.includes('Verifier') || user_roles.includes('Authorizer')){
        if (!user_roles.includes('Initiator') || !user_roles.includes('Approver')){
          control=1;
        }

      }
      if(user_roles.includes('Initiator')){
        if (!user_roles.includes('Approver')){
          control=1;
        }
      }
      if (control===1){
        alert('Initiator and Approver is Mandatory when you have verifier or authorizer')
        // window.location.reload()
      }
      if (control!==1){
        var config={
          url:url,
          method:"post",
          headers: {
            Authorization: "Bearer ",
            "Content-Type": "application/json",
          },
          data:{base_wallet:cookies.get('wallet_id'),section:section,user_roles:user_roles}
        };
        axios(config)
        .then(re=>{
            alert(re.data.message);
            window.location.reload();
        })
        .catch(err=>{
            // alert("Error Please Try Again");;
        })
      }
      
  }

  AddPerMissionsGroup(){
    var url = BASE_URL+'user/roles/permissions/';
    
    var permissions = new Array();
    // var section = document.getElementById('perm_grp_section').value;
    var role = document.getElementById('perm_grp_role').value;

    PermissionsList.map(perms=>{
        if ($("#"+perms.id).is(":checked")){
            permissions.push(perms.id);
        }
    })
    
  
    var config={
      url:url,
      method:"post",
      data:{"permissions":permissions,"role":role}
    };
    axios(config)
    .then(re=>{
        alert(re.data.message);
        window.location.reload();
    }).catch(err=>{
        // alert("Error Please Try Again");;
    })
  }

  componentDidMount(){
    var url = BASE_URL+'wallet/section_workflow/?wallet_id='+cookies.get('wallet_id');
  
    var config={
      url:url,
      method:"get",
      headers: {
        Authorization: "Bearer ",
        "Content-Type": "application/json",
      }
    };
    axios(config)
    .then(re=>{
        this.setState({workflows:re.data.data});
    }).catch(err=>{
        // alert("Error Please Try Again");;
    })


    var config2={
      method: "get",
      url: BASE_URL+'user/roles/permissions/?gym='+cookies.get('gym_uuid'),
     
  }
  axios(config2)
    .then(re=>{
        console.log(re)
         this.setState({user_groups:re.data});
    })
    
    .catch(err=>{
      // alert("Error Please Try Again");;
    })

  }


  AddNew(){
    if($('#group_name').is("select")) {
      document.getElementById('grp_div').innerHTML='';
      document.getElementById('grp_div').innerHTML='<input type="text" id="group_name" className="form-control"/>';
      $("#change_btn").html('Select from list');
}
else{
  window.location.reload();
}
    
  }

  async RemoveWorkflow(id){
    // alert('here')
    var url = BASE_URL+'wallet/work_flow_detail/'+id;
    const x = await axios.delete(url);

      if (x.status === 204) {
        // toastr.success('Workflow Deleted')
        // timeSensativeAction(5000);
        // window.location = "/account";
      } else {
        // alert("Error");
      }
  }

  render() {
    return (
      <div className="signup_form">
        <h3>Add WorkFlow</h3>
        <div className="alredy_ac text-center">
         
        </div>
     
                          
        
        {/*         
        <div class="buytabs01 bnk-pay">
                        <ul class="nav nav-tabs row " role="tablist"> */}

        <button class="nav nav-tabs buytabs01 row" role="presentation">
          <a href="#home" aria-controls="home" role="tab" data-toggle="tab">
            <span class="btnz2">
              <i class="fa fa-plus-square" aria-hidden="true"></i> Add Permission Group
            </span>
          </a>
        </button>
      
        {/* </ul></div> */}
        <div class="tab-content rent-tabs-content">
        <div role="tabpanel" class="tab-pane" id="home">
        <br/>
       
        <div>
          <h3>Group Info</h3>
        </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
          <div className="form-group">
            <label for="sel1">Role Name</label><button id="change_btn" class="click_btn" onClick={()=>this.AddNew()}>New Role</button>
             <div id='grp_div'>
             {/* <input type="text" id="group_name" className="form-control"/> */}
             <select id="group_name" class="form-control">
               {this.state.user_groups.map(wf=>{
                 return <option>{wf.for_role}</option>
               })}
             </select>
            </div>
             </div>
             
          </div>

         
         
          <h4>Add Permissions</h4>
          <br></br>
          <div class="row text-center">
            {PermissionsList.map((perm) => {
              return <div className="col-xs-4">
                  <label className="container_signup">
                    {perm.title}
                    <input id={perm.id} value={perm.title} type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              
             })} 
            
          </div>
          <div class="text-center toppad-20">
                    <button
                    class="btn btnz btn-info btn-lg"
                    onClick={this.AddPerMissionsGroup}
                  >
                    Add Group
                  </button>
                  </div>
        </div>
        </div>
      </div>
    );
  }
}

export default WorkFlow;




