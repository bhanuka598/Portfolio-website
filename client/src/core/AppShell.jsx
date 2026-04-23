import { Outlet } from "react-router-dom";
import NavBar from "../core-services/ui/Navbar";
import Footer from "../core-services/ui/Footer";
import ScrollToTop from "../core-services/ui/ScrollToTop";

const AppShell = () => {
  return (
    <div data-theme="light" className="relative">
      <NavBar />
      <Outlet />
      <div className="bg-[#2A374A]">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default AppShell;