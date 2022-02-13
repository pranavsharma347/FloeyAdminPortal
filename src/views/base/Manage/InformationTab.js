import React from 'react';
import {
  CCard,
  CCardHeader,

} from '@coreui/react'

function InformationTab(){
    return (
        <>
             <div className="tab-pane-main">
                  <CCard>

                <CCardHeader>
                <i class="fa fa-info-circle" aria-hidden="true"></i>
                Personal Information
                 
                </CCardHeader>

                </CCard>

                <div className="tab-title ">
                    <h4> Yazar  Rehman </h4>
                    <p>
                    <i class="fa fa-envelope" aria-hidden="true"></i> 
                    <strong>Email </strong><span>: rehman.yazar@gmail.com </span> 
                    </p>

                    <p>
                    <i class="fa fa-id-card" aria-hidden="true"></i>
                    <strong> Username </strong><span>:Lorem ipsum </span> 
                    </p>

                    <p>
                    <i class="fa fa-phone " aria-hidden="true"></i> 
                    <strong> User ID </strong><span>: Lorem ipsum </span> 
                    </p>

                    <p>
                    <i class="fa fa-phone " aria-hidden="true"></i> 
                    <strong> Mobile </strong><span>: Lorem ipsum </span> 
                    </p>

                    <p>
                    <i class="fa fa-genderless " aria-hidden="true"></i>
                    <strong> Gender  </strong><span>: Lorem ipsum </span> 
                    </p>

                    <p>
                    <i class="fa fa-birthday-cake" aria-hidden="true"></i>
                    <strong> DOB </strong><span>: Lorem ipsum </span> 
                    </p>

                    <p>
                    <i class="fa fa-address-card-o" aria-hidden="true"></i> 
                    <strong> Address  </strong><span>: Lorem ipsum </span> 
                    </p>

                    <p>
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    <strong>Created On   </strong><span>: Lorem ipsum </span> 
                    </p>

                    <p>
                    <i class="fa fa-user-circle-o " aria-hidden="true"></i>
                    <strong>Membership Status   </strong><span>: Active </span> 
                    </p>

                    <p>
                    <i class="fa fa-id-badge" aria-hidden="true"></i>
                    <strong>Age Group   </strong><span>: Adult </span> 
                    </p>

                    {/* <p>
                        <a href="#"><span class="badge badge-info">Download</span></a>                        
                    </p> */}

                </div>

                <div class="manage-tab-choose-file-main">
                    <span id="uploaded_image"><img src="http://gym.encodeinternational.com/staticimg/dancer.jpg" id="upimage" class="rounded-circle upimage"  draggable="true" data-bukket-ext-bukket-draggable="true" /></span>
                        <form id="uploadimage" action="" method="post" enctype="multipart/form-data">
                              <input type="hidden" name="_token" value="3OturUnQ21cPXzwyBk4UJiEBptmGuIZazzXBrCI9" />
                                <input type="hidden" name="cust_id" value="82" />
                        <div class="choose_file mt-2">
                            <span><i class="fa fa-picture-o" aria-hidden="true" ></i> Upload a photo</span>
                            <input className="manage-profile_image" name="profile_image" type="file" id="profile_image" />
                        </div> 
                        </form>

                        {/* <div class="container">
                            <div class="picture-container">
                                <div class="picture">
                                    <img src="https://lh3.googleusercontent.com/LfmMVU71g-HKXTCP_QWlDOemmWg4Dn1rJjxeEsZKMNaQprgunDTtEuzmcwUBgupKQVTuP0vczT9bH32ywaF7h68mF-osUSBAeM6MxyhvJhG6HKZMTYjgEv3WkWCfLB7czfODidNQPdja99HMb4qhCY1uFS8X0OQOVGeuhdHy8ln7eyr-6MnkCcy64wl6S_S6ep9j7aJIIopZ9wxk7Iqm-gFjmBtg6KJVkBD0IA6BnS-XlIVpbqL5LYi62elCrbDgiaD6Oe8uluucbYeL1i9kgr4c1b_NBSNe6zFwj7vrju4Zdbax-GPHmiuirf2h86eKdRl7A5h8PXGrCDNIYMID-J7_KuHKqaM-I7W5yI00QDpG9x5q5xOQMgCy1bbu3St1paqt9KHrvNS_SCx-QJgBTOIWW6T0DHVlvV_9YF5UZpN7aV5a79xvN1Gdrc7spvSs82v6gta8AJHCgzNSWQw5QUR8EN_-cTPF6S-vifLa2KtRdRAV7q-CQvhMrbBCaEYY73bQcPZFd9XE7HIbHXwXYA=s200-no" class="picture-src" id="wizardPicturePreview" title="" />
                                    <input type="file" id="wizard-picture" class="" />
                                </div>
                                <h6 class="">Choose Picture</h6>

                            </div>
                        </div> */}



                  </div>

                </div>
        </>
    )
}
export default InformationTab