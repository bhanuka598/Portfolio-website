import Introduction from "./components/Introduction";
import Profile from "./components/Profile";
import WorkProcess from "./components/WorkProcess";
import Portfolio from "@/plugins/projects/components/Portfolio";
import WorkTogether from "@/plugins/contact/components/WorkTogether";
import Blog from "../blog/components/Blog";
import Profession from "./components/Profession";
import HappyClients from "./components/HappyClients";
import Testimonial from "./components/Testimonial";
import Contact from "../contact/components/Contact";

const AboutPlugin = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-soft-white pt-30">
        <WorkProcess />
      </div>
      <Portfolio />
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      <div className="blog-background">
        <Blog />
      </div>
      <div className="bg-soft-white">
        <Profession />
      </div>
      <HappyClients />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default AboutPlugin;
