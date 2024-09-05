import {Outlet} from "react-router-dom";
// import Home from "./Home/Home";
import Navbar from "./Navbar";

const Root = () => {
  return(
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <Home></Home> */}
    </div>
  )
}

export default Root