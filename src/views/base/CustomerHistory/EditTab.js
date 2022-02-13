
import React from 'react';
import {
  CCard,
  CCardHeader,

} from '@coreui/react'

function EditTab(){
    return (
        <>
<div class="row ">

                <div className="col-md-6">
                <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">First Name <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <input type="text" id="title" name="first_name" class="form-control" defaultValue="yazar" />
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="last_name">Last Name <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <input type="text" id="last_name" name="last_name" class="form-control" defaultValue="rehman" autofocus="" />
                        </div>
                    </div>
                </div> 

                
                <div className="col-md-6">
                    <div class="form-group ">
                        <label class="form-label" for="address"> Email </label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="last_name" name="last_name" class="form-control" defaultValue="type mail" autofocus="" />
                       </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div class="form-group ">
                        <label class="form-label" for="address"> Address </label>
                        <span class="desc"></span>
                        <div class="controls">
                            <textarea class="form-control" id="address" defaultValue="type Address" name="address" rows="1"></textarea>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div class="form-group ">
                        <label class="form-label" for="address"> Date of birth </label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="date" id="last_name" class="form-control" autofocus="" />
                       
                        </div>
                    </div>
                </div> 

                <div className="col-md-6">
                    <div class="form-group ">
                        <label class="form-label" for="address"> Gender </label>
                        <span class="desc"></span>
                        <div class="controls">
                             <select id="gender" name="gender" class="form-control">
                                <option value="">Please select </option>
                                <option value="0">Male </option>
                                <option selected="" value="1">Female </option>
                            </select>
                         </div>
                    </div>
                </div> 


                <div className="col-md-6">
                    <div class="form-group ">
                        <label class="form-label" for="address">User name </label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="last_name" name="last_name" class="form-control" defaultValue="user name" autofocus="" />
                       </div>
                    </div>
                </div>


                 <div className="col-md-6">
                    <div class="form-group ">
                        <label class="form-label" for="address"> Mobile no </label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="last_name" name="mobile" class="form-control" defaultValue="mobile no" autofocus="" />
                       </div>
                    </div>
                </div>  


                <div className="col-md-6">
                    <div class="form-group ">
                        <label class="form-label" for="address">Civil id </label>
                        <span class="desc"></span>
                        <div class="controls">
                        <input type="text" id="last_name" name="last_name" class="form-control" defaultValue="Civil id" autofocus="" />
                       </div>
                    </div>
                </div>


                <div className="col-md-6">
                    <div class="form-group ">
                        <label class="form-label" for="address"> Status </label>
                        <span class="desc"></span>
                        <div class="controls">
                             <select id="gender" name="gender" class="form-control">
                                <option value="">Please select </option>
                                <option value="0">Active </option>
                                <option selected="" value="1">Suspended </option>
                            </select>
                         </div>
                    </div>
                </div> 



                {/* <div class="col-sm-6 mr-top-10" >

                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="first_name">First Name <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <input type="text" id="title" name="first_name" class="form-control" defaultValue="yazar" />
                        </div>
                    </div>
                    <div class="form-group ">
                        <label class="form-label" for="address"> Address </label>
                        <span class="desc"></span>
                        <div class="controls">
                            <textarea class="form-control" id="address" name="address" rows="4"></textarea>
                        </div>
                    </div>

                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="email">Email address <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <input type="text" id="email" name="email" class="form-control" defaultValue="rehman.yazar@gmail.com" />
                        </div>
                    </div>




                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="mobile">Mobile No. <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <input type="text" id="mobile" name="mobile" class="form-control" defaultValue="66844904" autofocus="" />
                        </div>
                    </div>

                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="civil_id">Civil ID<span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <input type="text" id="civil_id" name="civil_id" class="form-control" defaultValue="" autofocus="" />
                        </div>
                    </div>

                </div> */}
                {/* <div class="col-sm-6 mr-top-10">

                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="last_name">Last Name <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <input type="text" id="last_name" name="last_name" class="form-control" defaultValue="rehman" autofocus="" />
                        </div>
                    </div>


                    <div class="form-group border-bottom-0 ">
                        <div class="control-group">
                            <label for="day" class="control-label">Date of birth</label>
                            <div class="controls">
                            <input type="date" id="last_name" class="form-control" defaultValue="rehman" autofocus="" />
                       
                               
                            </div>
                        </div>


                    </div>

                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="gender">Gender <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <select id="gender" name="gender" class="form-control">
                                <option value="">Please select </option>
                                <option value="0">Male </option>
                                <option selected="" value="1">Female </option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="username">Username <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <input type="text" id="username" name="username" class="form-control" defaiultValue="" autofocus="" />
                        </div>
                    </div>


                    <div class="form-group border-bottom-0 ">
                        <label class="form-label" for="status">Status <span class="text-danger"> * </span></label>
                        <span class="desc"></span>
                        <div class="controls">
                            <select id="status" name="status" class="form-control">
                              <option value="">Please select </option>
                              <option selected="" value="1">Active </option>
                              <option value="0">Suspended </option>
                            </select>
                        </div>
                    </div>


                </div> */}
                <div className="col-md-12 text-center">
                
                {/* <a href="#"><span class="badge badge-info">Reset Password</span></a> */}
                  <button type="button" class="btn btn-primary updateprofile">Update</button>
            
                </div>

          </div>
    </>
    )
}
export default EditTab