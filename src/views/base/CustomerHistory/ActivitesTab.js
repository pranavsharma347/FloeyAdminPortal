
import React from 'react';
import {
  CCard,
  CCardHeader,

} from '@coreui/react'

function ActivitesTab(){
    return (
        <>
<div className="col-md-12">
  <table class="countries_list">
                <tbody>
                  <tr>
                    <td>Last Package Purchased</td>
                    <td class="fs15 fw700 text-left">Basic</td>
                  </tr>
                  <tr>
                    <td>Last Purchase date</td>
                    <td class="fs15 fw700 text-left">09 Dec 2020 </td>
                  </tr>
                  <tr>
                    
                    <td> Total Classes remaining</td>
                    <td class="fs15 fw700 text-left"> 4  </td>
                  </tr>
                  <tr>
                    <td>Expire Date</td>
                    <td class="fs15 fw700 text-left">06 Jan 2021</td>
                  </tr>
                  <tr>
                    <td>Last Login Date</td>
                    <td class="fs15 fw700 text-left"></td>
                  </tr>
                  <tr>
                    <td>Days Since Last Login</td>
                    <td class="fs15 fw700 text-left">-0 days</td>
                  </tr>
                </tbody>
              </table>
</div>

                        </>
    )
}
export default ActivitesTab