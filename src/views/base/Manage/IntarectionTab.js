import React from 'react';
import {
  CCard,
  CCardHeader,

} from '@coreui/react'

function IntarectionTab(){
    return (
        <>
             <div className="tab-pane-main">
                  {/* <CCard>

                <CCardHeader>
                <i class="fa fa-info-circle" aria-hidden="true"></i>
                User Status 
                </CCardHeader>

                </CCard> */}

                {/* <div className="tab-title inter_tab-main">
                   <button className="btn_active"> <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> Active </button>

                   <div class="row">                    
                                                
                          <div class="col-md-5">
                              
                            <div class="form-group ">
                                <label class="control-label ">
                                Change Status
                                </label>
                                <select id="userstatus" name="booking_id" class="form-control " data-field="82" required=""> 
                                    <option value="11">Free Class-20 Jan 2021  </option>
                                    <option value="12">Basic-20 Jan 2021  </option>
                                </select>
                            </div> 
                        </div>  
                        <div class="col-md-5 ">
                              
                            <div class="form-group ">
                                <label class="control-label ">
                                Reason
                                </label>
                                <select id="pack_duration" name="pack_duration" class="form-control oncduration" data-field="82"> 
                                    <option value="1">One Week</option>
                                    <option value="2">Two Week </option>
                                    <option value="4">One Month </option>
                                    <option value="3">Custom </option>
                                </select>
                            </div> 
                        </div>   
                        
                        <div class="col-md-1 ">
                            <label class="control-label "> </label>
                            <div class="form-group m-auto ">
                                <button type="submit" class="btn btn-success btn-sm changestatus">Update</button>
                            </div>
                          </div>
    
                    </div>

                </div> */}

                </div> 


                <div className="tab-pane-main">
                  <CCard>

                <CCardHeader>
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                  Expiry date
                </CCardHeader>

                </CCard>

                <div className="tab-title inter_tab-main">
                  
                   <div class="row">                    
                                                
                          <div class="col-md-5">
                              
                            <div class="form-group ">
                                <label class="control-label ">
                                    Select Package
                                </label>
                                <select id="userstatus" name="booking_id" class="form-control " data-field="82" required=""> 
                                    <option value="11">Free Class-20 Jan 2021  </option>
                                    <option value="12">Basic-20 Jan 2021  </option>
                                </select>
                            </div> 
                        </div>  
                        <div class="col-md-5">
                              
                            <div class="form-group ">
                                <label class="control-label ">
                                    Select Duration
                                </label>
                                <select id="pack_duration" name="pack_duration" class="form-control oncduration" data-field="82"> 
                                    <option value="1">One Week</option>
                                    <option value="2">Two Week </option>
                                    <option value="4">One Month </option>
                                    <option value="3">Custom </option>
                                </select>
                            </div> 
                        </div>   
                        
                        <div class="col-md-1 ">
                            <label class="control-label "> </label>
                            <div class="form-group m-auto ">
                                <button type="submit" class="btn btn-success btn-sm changestatus">Add</button>
                            </div>
                          </div>
    
                    </div>

                </div>

                </div> 

                 <div className="tab-pane-main">
                  <CCard>

                <CCardHeader>
                <i class="fa fa-users" aria-hidden="true"></i>
                  Add class
                </CCardHeader>

                </CCard>

                <div className="tab-title inter_tab-main">
                  
                   <div class="row">                    
                                                
                          <div class="col-md-6">
                              
                            <div class="form-group ">
                                <label class="control-label ">
                                    Class
                                </label>
                                <select id="userstatus" name="booking_id" class="form-control " data-field="82" required=""> 
                                    <option value="11">Free Class-20 Jan 2021  </option>
                                    <option value="12">Basic-20 Jan 2021  </option>
                                </select>
                            </div> 
                        </div>   

                        <div class="col-md-1 ">
                            <label class="control-label "> </label>
                            <div class="form-group m-auto ">
                                <button type="submit" class="btn btn-success btn-sm changestatus">Add</button>
                            </div>
                          </div>
    
                    </div>

                </div>

                

                </div>    
        </>
    )
}
export default IntarectionTab