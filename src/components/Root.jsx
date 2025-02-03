import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Home from "./Home";


const Root = () => {
    return (
        <div>
          <Navbar />
          <Home></Home>
          <Outlet />
          <Footer />
        </div>
    );
};

export default Root;