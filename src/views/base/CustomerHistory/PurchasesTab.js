import React from 'react';
import {
  CCard,
  CCardHeader,

} from '@coreui/react'

function PurchasesTab(){
    return (
        <>
<div className="manage-table-main purchse-tab-table">
            <table class="table table-bordered">
            <thead>
            <tr>
                <th>#</th>
                <th>Type</th>
                <th>Details</th>
                <th>Book date</th>
                <th>Attended</th>
                <th>Remaining</th>
                <th>Expire</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Free class</td>
                <td>1 classes,2 Weeks</td>
                <td>10/09/2020</td>
                <td>1</td>
                <td> 0</td>
                <td> 2021-02-24 </td>
                <td><a href="#" class="view" title="View Receipt" data-toggle="tooltip"><i class="fa fa-eye" aria-hidden="true"></i></a></td>
            </tr>

            <tr>
                <td>1</td>
                <td>Free class</td>
                <td>1 classes,2 Weeks</td>
                <td>10/09/2020</td>
                <td>1</td>
                <td> 0</td>
                <td> 2021-02-24 </td>
                <td><a href="#" class="view" title="View Receipt" data-toggle="tooltip"><i class="fa fa-eye" aria-hidden="true"></i></a></td>
            </tr>

            
            
            </tbody>
        </table>
      

       <div className="hed_title">
       <i class="fa fa-money" aria-hidden="true"></i>
        Total Amount Paid : <span> 100 </span>
       </div>

    </div>
    </>
    )
}
export default PurchasesTab