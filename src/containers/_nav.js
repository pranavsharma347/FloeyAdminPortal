import React from "react";
import CIcon from "@coreui/icons-react";
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Link } from "react-router-dom";
const cookies = new Cookies();
var NavArray = new Array();
if (!(cookies.get("uuid") && cookies.get("gym_uuid"))) {
  window.location = "/#/login";
}
var perm = cookies.get("perms");
// alert(perm)

console.log("permmm>>>>>", perm);
if (!perm) {
  window.location.reload();
}
NavArray.push(
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "CRM",
    to: "/base/Manage",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Plans and Packages",
    to: "/base/Package",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Billing & Invoices Page ",
    to: "/base/Invoicing",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Product/Service Page",
    route: "",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Classes",
        to: "/base/Classes",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Courses",
        to: "/base/Course",
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Online',
      //   to: '/base/Online',
      // },
      {
        _tag: "CSidebarNavItem",
        name: "Addlevel",
        to: "/base/addlevel",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Agegroup",
        to: "/base/age-group",
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'On Demand Videos',
      //   to: '',
      // },
    ],
  },
  //  {
  // _tag: 'CSidebarNavItem',
  // name: 'Membership',
  // to: '/base/Membership',
  // icon: 'cil-drop',
  // },
  {
    _tag: "CSidebarNavItem",
    name: "Instructor",
    to: "/base/Instructor",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Bookings",
    to: "/base/Bookings",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Holidays ",
    to: "/base/Holiday",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Calendar ",
    to: "/calender",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Expenses ",
    to: "/base/Expenses",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Reports",
    to: "/base/Reports",
    icon: "cil-puzzle",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Roles and Permissions ",
    to: "/base/permissions",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Gym Members ",
    to: "/base/users",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Gym Profile",
    to: "/base/Gymprofile",
    icon: "cil-puzzle",
  }
);
if (perm.includes("Dashboard")) {
  NavArray.push({
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  });
}

if (perm.includes("CRM")) {
  NavArray.push({
    _tag: "CSidebarNavItem",
    name: "Customer",
    to: "/base/manage",
    icon: "cil-user",
  });
}

if (perm.includes("CRM")) {
  NavArray.push({
    _tag: "CSidebarNavItem",
    name: "Customer History",
    to: "/base/customer-history",
    icon: "cil-spreadsheet",
  });
}

if (perm.includes("Packages")) {
  NavArray.push({
    _tag: "CSidebarNavItem",
    name: "Plans and Packages",
    to: "/base/Package",
    icon: "cil-justify-center",
  });
}

if (perm.includes("Billing")) {
  NavArray.push({
    _tag: "CSidebarNavItem",
    name: "Billing & Invoices Page ",
    to: "/base/Invoicing",
    icon: "cil-notes",
  });
}

if (perm.includes("Product")) {
  NavArray.push({
    _tag: "CSidebarNavDropdown",
    name: "Product/Service Page",
    route: "",
    icon: "cil-sun",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Classes",
        to: "/base/Classes",
        icon: "cil-list-rich",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Courses",
        to: "/base/Course",
        icon: "cil-spreadsheet",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Age Group",
        to: "/base/age-group",
        icon: "cil-list-numbered",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Add Level  ",
        to: "/base/Add-level",
        icon: "cil-chart-pie",
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Online',
      //   to: '/base/Online',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'On Demand Videos',
      //   to: '',
      // },
    ],
  });
}

// if (perm.includes('Membership')){
//   NavArray.push( {
//     _tag: 'CSidebarNavItem',
//     name: 'Membership',
//     to: '/base/Membership',
//     icon: 'cil-drop',
//   })

// }

if (perm.includes("Instructor")) {
  NavArray.push({
    _tag: "CSidebarNavItem",
    name: "Instructor",
    to: "/base/Instructor",
    icon: "cil-applications-settings",
  });
}

if (perm.includes("Bookings")) {
  NavArray.push({
    _tag: "CSidebarNavItem",
    name: "Bookings",
    to: "/base/Bookings",
    icon: "cil-bold",
  });
}

if (perm.includes("Holidays")) {
  NavArray.push({
    _tag: "CSidebarNavItem",
    name: "Holidays ",
    to: "/base/Holiday",
    icon: "cil-drop",
  });
}

if (perm.includes("Calender")) {
  NavArray.push({
    _tag: "CSidebarNavItem",
    name: "Calendar ",
    to: "/calender",
    icon: "cil-calendar",
  });
}

if (perm.includes("Expenses")) {
  NavArray
    .push
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Sales ',
    //   to: '/base/Expenses',
    //   icon: 'cil-drop',
    // },
    ();
}

if (perm.includes("Reports")) {
  NavArray.push({
    _tag: "CSidebarNavItem",
    name: "Reports",
    to: "/base/Reports",
    icon: "cil-notes",
  });
}

if (perm.includes("Role and Permissions")) {
  NavArray.push({
    _tag: "CSidebarNavItem",
    name: "Roles and Permissions ",
    to: "/base/permissions",
    icon: "cil-drop",
  });
}

if (perm.includes("Users")) {
  NavArray.push({
    _tag: "CSidebarNavItem",
    name: "Gym Members ",
    to: "/base/users",
    icon: "cil-people",
  });
}

if (perm.includes("Gymprofile")) {
  NavArray.push({
    _tag: "CSidebarNavItem",
    name: "Gym Profile",
    to: "/base/Gymprofile",
    icon: "cil-notes",
  });
}

export default NavArray;

// var NavArray = [
//   {
//     _tag: 'CSidebarNavItem',
//     name: 'Dashboard',
//     to: '/dashboard',
//     icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,

//   },

//      {
//       _tag: 'CSidebarNavItem',
//       name: 'CRM',
//       to: '/base/manage',
//       icon: 'cil-drop',
//     },

//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Plans and Packages',
//       to: '/base/Package',
//       icon: 'cil-drop',
//     },

//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Billing & Invoices Page ',
//         to: '/base/Invoicing',
//         icon: 'cil-drop',
//       },
//       {
//         _tag: 'CSidebarNavDropdown',
//         name: 'Product/Service Page',
//         route: '',
//         icon: 'cil-puzzle',
//         _children: [

//           {
//             _tag: 'CSidebarNavItem',
//             name: 'Membership',
//             to: '/base/Membership',
//           },
//           {
//             _tag: 'CSidebarNavItem',
//             name: 'Classes',
//             to: '/base/Classes',
//           },
//           {
//             _tag: 'CSidebarNavItem',
//             name: 'Courses',
//             to: '/base/Course',
//           },
//           {
//             _tag: 'CSidebarNavItem',
//             name: 'Online',
//             to: '/base/Online',
//           },
//           // {
//           //   _tag: 'CSidebarNavItem',
//           //   name: 'On Demand Videos',
//           //   to: '',
//           // },

//         ],
//       },

//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Instructor',
//         to: '/base/Instructor',
//         icon: 'cil-drop',
//       },

//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Bookings',
//         to: '/base/Bookings',
//         icon: 'cil-drop',
//       },

//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Holidays ',
//         to: '/base/Holiday',
//         icon: 'cil-drop',
//       },

//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Calendar ',
//         to: '/calender',
//         icon: 'cil-drop',
//       },

//       // {
//       //   _tag: 'CSidebarNavItem',
//       //   name: 'Policy ',
//       //   to: '/base/Policy',
//       //   icon: 'cil-drop',
//       // },

//       // {
//       //   _tag: 'CSidebarNavItem',
//       //   name: 'Ammenities ',
//       //   to: '/base/Ammenities',
//       //   icon: 'cil-drop',
//       // },

//       {
//         _tag: 'CSidebarNavTitle',
//         _children: ['Financial Tools']
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Expenses ',
//         to: '/base/Expenses',
//         icon: 'cil-drop',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Reports',
//         to: '/base/Reports',
//         icon: 'cil-puzzle',

//       },

//       {
//         _tag: 'CSidebarNavTitle',
//         _children: ['Settings']
//       },
//       // {
//       //   _tag: 'CSidebarNavItem',
//       //   name: 'Users ',
//       //   to: '/base/user',
//       //   icon: 'cil-drop',
//       // },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Roles and Permissions ',
//         to: '/base/permissions',
//         icon: 'cil-drop',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Users ',
//         to: '/base/users',
//         icon: 'cil-drop',
//       },

//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Gym Profile',
//         to: '/base/Gymprofile',
//         icon: 'cil-puzzle',

//       },

// ]
