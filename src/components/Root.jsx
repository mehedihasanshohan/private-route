import {Outlet} from "react-router-dom";
// import Home from "./Home/Home";
import Navbar from "./Navbar";
import Home from "./Home/Home";

const Root = () => {
  return(
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Outlet></Outlet>
      {/* <Home></Home> */}
    </div>
  )
}

export default Root