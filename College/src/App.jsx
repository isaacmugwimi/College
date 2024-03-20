import { About } from "./Component/About/About.jsx";
import { Campus } from "./Component/Campus/Campus.jsx";
import { Contact } from "./Component/Contact/Contact.jsx";
import { Footer } from "./Component/Footer/Footer.jsx";
import Hero from "./Component/Hero/Hero.jsx";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Programs from "./Component/Programs/Programs.jsx";
// import { Testimonials } from "./Component/Testimonials/Testimonials.jsx";
import { Testimonials2 } from "./Component/Testimonials/Testimonials2.jsx";
import { Title } from "./Component/Title/Title.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* <Program2 /> */}

      <Title subTitle="our program" title="what we offer" />
      <Programs />
      <About />
      <Title subTitle="Gallery" title="Campus Photos" />
      <Campus />
      <Title subTitle="Testimonials" title="what students says" />
      {/* <Testimonials/> */}
      <Testimonials2 />
      <Title subTitle="Contact Us" title="Get in touch" />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
