/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Advance from "views/AadharAdvance";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import AdharMannual from "views/AdharMannual";
import VoterMannual from "views/VoterMannul";
import VoterAdvance from "views/VoterAdvance";
import AayushmanCard from "views/AayushmanCard";
import PanCard from "views/PanCard";
import RationCard from "views/RationCard";
import Recharge from "views/Recharge";
import Card from "views/Card";
import Payment from "views/Card";
import Card100 from "components/cards/Card100";
// import Logout from "views/Logout";

const dashboardRoutes = [
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin",
  // },
  {
    path: "/dashboard",
    name: "Home",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/recharge",
    name: "Recharge",
    icon: "fas fa-wallet", 
    component: Recharge,
    layout: "/admin",
  },

  {
    path: "/aadharadvance",
    name: "Aadhar Advance",
    icon: "fas fa-credit-card", 
    component : Advance,
    layout: "/admin",
  }
  
,  
  {
    path: "/aadharmanual",
    name: "Aadhar Manual",
    icon: "fas fa-credit-card", 
    component: AdharMannual,
    layout: "/admin",
  },
  {
    path: "/voteradvance",
    name: "Voter Advance",
    icon: "fas fa-vote-yea", // Use a valid Font Awesome class
    component: VoterAdvance,
    layout: "/admin",
  }
  
,  

  {
    path: "/votermannual",
    name: "Voter Manual",
    icon: "fas fa-vote-yea",
    component: VoterMannual,
    layout: "/admin",
  },
  {
    path: "/aayushmancard",
    name: "Aayushman Card",
    icon: "fas fa-id-card", // Change to a different Font Awesome icon class
    component: AayushmanCard,
    layout: "/admin",
  },  
  {
    path: "/pancard",
    name: "Pan Card Print",
    icon: "fas fa-id-card-alt", // Change to a different Font Awesome icon class
    component: PanCard,
    layout: "/admin",
  },  
  {
    path: "/rationcard",
    name: "Ration Card",
    icon: "fas fa-clipboard", // Change to a different Font Awesome icon class
    component: RationCard,
    layout: "/admin",
  }
,  
  {
    path: "/kishan-register",
    name: "Kishan Register",
    icon: "nc-icon nc-notes",
    component: () => {
      window.location.href = "https://dbtagriculture.bihar.gov.in/"; // Replace with the external URL you want to link to
      return null; // Return null because you don't need to render a component
    },
    layout: "/admin",
  },  
  {
    path: "/samman-nidhi",
    name: "SAMMAN NIDHI",
    icon: "nc-icon nc-notes",
    component: () => {
      window.location.href = "https://pmkisan.gov.in/RegistrationFormnew.aspx"; // Replace with the external URL you want to link to
      return null; // Return null because you don't need to render a component
    },
    layout: "/admin",
  },
  {
    path: "/esharam-card",
    name: "E-sharam card",
    icon: "nc-icon nc-notes",
    component: () => {
      window.location.href = "https://register.eshram.gov.in/#/user/self"; // Replace with the external URL you want to link to
      return null; // Return null because you don't need to render a component
    },
    layout: "/admin",
  },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "nc-icon nc-notes",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/login",
  //   name: "Log out",
  //   icon: "nc-icon nc-simple-remove",
  //   component: Logout,
  //   layout: "/",
  // },
];

export default dashboardRoutes;
