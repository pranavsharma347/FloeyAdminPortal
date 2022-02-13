import React from "react";
import { Calendar } from "react-big-calendar";
import AddCourse from "./views/base/AddCourse/AddCourse";
import AddLevel from "./views/base/AddLevel/AddLevel";
import AgeGroup from "./views/base/AgeGroup/AgeGroup";
// import Login from './views/pages/login/Login';

const Toaster = React.lazy(() =>
  import("./views/notifications/toaster/Toaster")
);
const Tables = React.lazy(() => import("./views/base/tables/Tables"));
const Manage = React.lazy(() => import("./views/base/Manage/Manage"));
const CustomerHistory = React.lazy(() =>
  import("./views/base/CustomerHistory/CustomerHistory")
);
const Invoicing = React.lazy(() => import("./views/base/Invoicing/Invoicing"));
const Package = React.lazy(() => import("./views/base/Package/Package"));
const Classes = React.lazy(() => import("./views/base/Classes/Classes"));
const Addclass = React.lazy(() => import("./views/base/Addclass/Addclass"));
const ClassCategories = React.lazy(() =>
  import("./views/base/ClassCategories/ClassCategories")
);
const EditCategory = React.lazy(() =>
  import("./views/base/EditCategory/EditCategory")
);
const AddCategory = React.lazy(() =>
  import("./views/base/AddCategory/AddCategory")
);
const Course = React.lazy(() => import("./views/base/Course/Course"));
const Membership = React.lazy(() =>
  import("./views/base/Membership/Membership")
);
const Expenses = React.lazy(() => import("./views/base/Expenses/Expenses"));
const Holiday = React.lazy(() => import("./views/base/Holiday/Holiday"));
const Policy = React.lazy(() => import("./views/base/Policy/Policy"));
const Ammenities = React.lazy(() =>
  import("./views/base/Ammenities/Ammenities")
);
const Login = React.lazy(() => import("./views/base/Login/Login"));
const bookings = React.lazy(() => import("./views/base/Bookings/Bookings"));
const Instructor = React.lazy(() =>
  import("./views/base/Instructor/Instructor")
);
const Online = React.lazy(() => import("./views/base/Online/Online"));
const Addlevel = React.lazy(() => import("./views/base/AddLevel/AddLevel"));
const Promocodes = React.lazy(() =>
  import("./views/base/Promocodes/Promocodes")
);
const Ruleset = React.lazy(() => import("./views/base/Promocodes/Ruleset"));

const Insbookings = React.lazy(() =>
  import("./views/base/Insbookings/Insbookings")
);
const Gymprofile = React.lazy(() =>
  import("./views/base/Gymprofile/Gymprofile")
);
const About = React.lazy(() => import("./views/base/About/About"));
const Location = React.lazy(() => import("./views/base/Location/Location"));
const Reports = React.lazy(() => import("./views/base/Reports/Reports"));
const GymDetails = React.lazy(() =>
  import("./views/base/Gym Details/Gym Details")
);
const GymUsers = React.lazy(() => import("./views/base/Gym Users/Users"));
const Roles = React.lazy(() => import("./views/base/Roles/Roles.js"));
const Permissions = React.lazy(() =>
  import("./views/base/Permissions/Permissions.js")
);
const ManagePermissions = React.lazy(() =>
  import("./views/base/Permissions/manage_perms.js")
);

const Breadcrumbs = React.lazy(() =>
  import("./views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"));
const BasicForms = React.lazy(() => import("./views/base/forms/BasicForms"));

const Jumbotrons = React.lazy(() =>
  import("./views/base/jumbotrons/Jumbotrons")
);
const ListGroups = React.lazy(() =>
  import("./views/base/list-groups/ListGroups")
);
const Navbars = React.lazy(() => import("./views/base/navbars/Navbars"));
const Navs = React.lazy(() => import("./views/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("./views/base/paginations/Pagnations")
);
const Popovers = React.lazy(() => import("./views/base/popovers/Popovers"));
const ProgressBar = React.lazy(() =>
  import("./views/base/progress-bar/ProgressBar")
);
const Switches = React.lazy(() => import("./views/base/switches/Switches"));

const Tabs = React.lazy(() => import("./views/base/tabs/Tabs"));
const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));
const BrandButtons = React.lazy(() =>
  import("./views/buttons/brand-buttons/BrandButtons")
);
const ButtonDropdowns = React.lazy(() =>
  import("./views/buttons/button-dropdowns/ButtonDropdowns")
);
const ButtonGroups = React.lazy(() =>
  import("./views/buttons/button-groups/ButtonGroups")
);
const Buttons = React.lazy(() => import("./views/buttons/buttons/Buttons"));
const Charts = React.lazy(() => import("./views/charts/Charts"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const CoreUIIcons = React.lazy(() =>
  import("./views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("./views/icons/flags/Flags"));
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("./views/theme/typography/Typography")
);
const Widgets = React.lazy(() => import("./views/widgets/Widgets"));
const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));
const MyCalender = React.lazy(() => import("./views/CalenderTrial"));

const routes = [
  { path: "/Login", name: "Login", component: Login },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography },
  { path: "/base", name: "Base", component: Cards, exact: true },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/carousels", name: "Carousel", component: Carousels },
  { path: "/base/collapses", name: "Collapse", component: Collapses },
  { path: "/base/forms", name: "Forms", component: BasicForms },
  { path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons },
  { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  { path: "/base/navbars", name: "Navbars", component: Navbars },
  { path: "/base/navs", name: "Navs", component: Navs },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/popovers", name: "Popovers", component: Popovers },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/switches", name: "Switches", component: Switches },
  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/base/Manage", name: "Manage", component: Manage },
  {
    path: "/base/customer-history",
    name: "CustomerHistory",
    component: CustomerHistory,
  },
  { path: "/base/Invoicing", name: "Invoicing", component: Invoicing },
  { path: "/base/Package", name: "Package", component: Package },
  { path: "/base/Classes", name: "Classes", component: Classes },
  { path: "/base/Addclass", name: "Addclass", component: Addclass },
  {
    path: "/base/ClassCategories",
    name: "ClassCategories",
    component: ClassCategories,
  },
  { path: "/base/EditCategory", name: "EditCategory", component: EditCategory },
  { path: "/base/AddCategory", name: "AddCategory", component: AddCategory },
  { path: "/base/Course", name: "Course", component: Course },
  { path: "/base/age-group", name: "AgeGroup", component: AgeGroup },
  { path: "/base/Add-level", name: "AddLevel", component: AddLevel },
  { path: "/base/Membership", name: "Membership", component: Membership },
  { path: "/base/AddCourse", name: "AddCourse", component: AddCourse },
  { path: "/base/Expenses", name: "Expenses", component: Expenses },
  { path: "/base/Holiday", name: "Holiday", component: Holiday },
  { path: "/base/Policy", name: "Policy", component: Policy },
  { path: "/base/Ammenities", name: "Ammenities", component: Ammenities },
  { path: "/base/bookings", name: "bookings", component: bookings },
  { path: "/base/Instructor", name: "Instructor", component: Instructor },
  { path: "/base/Online", name: "Online", component: Online },
  { path: "/base/addlevel", name: "Addlevel", component: Addlevel },

  { path: "/base/Promocodes", name: "Promocodes", component: Promocodes },
  { path: "/base/Ruleset", name: "Ruleset", component: Ruleset },

  { path: "/base/Insbookings", name: "Insbookings", component: Insbookings },
  { path: "/base/Gymprofile", name: "Gymprofile", component: Gymprofile },
  { path: "/base/About", name: "About", component: About },
  { path: "/base/Location", name: "Location", component: Location },
  { path: "/base/Reports", name: "Reports", component: Reports },
  { path: "/base/gymdetails", name: "GymDetails", component: GymDetails },
  { path: "/base/users", name: "GymUsers", component: GymUsers },
  { path: "/base/roles", name: "Roles", component: Roles },
  { path: "/base/permissions", name: "Permisions", component: Permissions },
  {
    path: "/base/manage-permissions",
    name: "ManagePermissions",
    component: ManagePermissions,
  },

  { path: "/base/tabs", name: "Tabs", component: Tabs },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  { path: "/calender", name: "Buttons", component: MyCalender },
  {
    path: "/buttons/button-dropdowns",
    name: "Dropdowns",
    component: ButtonDropdowns,
  },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
  {
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
  },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/brands", name: "Brands", component: Brands },
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toaster", name: "Toaster", component: Toaster },
  { path: "/widgets", name: "Widgets", component: Widgets },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
];

export default routes;
