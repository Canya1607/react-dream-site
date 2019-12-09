import Index from "./views/Index.jsx";
import Profile from "./views/examples/Profile.jsx";
import Register from "./views/examples/Register.jsx";
import Login from "./views/examples/Login.jsx";
import Tables from "./views/examples/Tables.jsx";
import Icons from "./views/examples/Icons.jsx";

var routes = [
  {
    path: "/index",
    name: "Main",
    icon: "ni ni-archive-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/facts",
    name: "Facts",
    icon: "ni ni-folder-17 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/researches",
    name: "Researches",
    icon: "ni ni-bulb-61 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/music",
    name: "Music",
    icon: "ni ni-note-03 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-circle-08 text-primary",
    component: Profile,
    layout: "/admin"
  },
  // // //
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Index,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin"
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth"
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // },
]
export default routes;
