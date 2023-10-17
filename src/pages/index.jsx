import Navbar from "../components/Navbar/navbar";
import FreelancreIntro from "../components/Freelancre-intro/freelancre-intro";
import Intro3 from "../components/Intro3/intro3";
import Services3 from "../components/Services3/services3";
import Clients from "../components/Clients/clients";
import Blogs4 from "../components/blogs/Blogs4/blogs4";
import Team from "../components/Team/team";
import NoName from "../components/NoName";
import Works1 from "../components/Works/works";
import CallToAction from "../components/Call-to-action/call-to-action";
import Blogs3 from "../components/blogs/Blogs3/blogs3";
import ContactFormS from "../components/s-contact-form/s-contact-form";

import DarkTheme from "../layouts/Dark";

const Home = () => {
    return (
        <>
            <DarkTheme>
                <Navbar />
                <FreelancreIntro />
                <Intro3 />
                <Services3 />
                <Clients />
                <Blogs4  />
                <Team />
                <NoName />
                <Works1 />
                <CallToAction />
                <Blogs3 />
                <ContactFormS />
            </DarkTheme>
        </>
    );
};

export default Home;
