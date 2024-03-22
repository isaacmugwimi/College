import { useState } from "react";
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
import { VideoPlayer } from "./Component/VideoPlayer/VideoPlayer.jsx";
const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
     
      <Hero />

      {/* <Program2 /> */}

      <Title subTitle="our program" title="what we offer" />

      <Programs />
      <About setPlayState={setPlayState} />
      <Title subTitle="Gallery" title="Campus Photos" />
      <Campus />
      <Title subTitle="Testimonials" title="what students says" />
      {/* <Testimonials/> */}
      <Testimonials2 />
      <Title subTitle="Contact Us" title="Get in touch" />
      <Contact />
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
