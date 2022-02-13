import React from 'react';
import {
  CCard,
  CCardHeader,

} from '@coreui/react'

function HisotryTab(){
    return (
        <>
<div className="col-md-12">
<table class="countries_list">
  <thead>
      <tr>
          <th>Type</th>
          <th>Description</th>
          <th>Date</th>

      </tr>
  </thead>
  <tbody>

      <tr>

          <td>Registration</td>
          <td></td>
          <td>2020-12-09</td>
      </tr>

      <tr>

          <td>Class Applied</td>
          <td>Class scheduled on-2020-12-15</td>
          <td>2020-12-09</td>
      </tr>

      <tr>

          <td>Package purchased</td>
          <td>Package purchased Premium </td>
          <td>2020-12-09</td>
      </tr>
  </tbody>
</table>
</div>

</>
    )
}
export default HisotryTab