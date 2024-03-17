import { About } from "./Component/About/About.jsx";
import { Campus } from "./Component/Campus/Campus.jsx";
import Hero from "./Component/Hero/Hero.jsx";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Programs from "./Component/Programs/Programs.jsx";
import { Title } from "./Component/Title/Title.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <div className="nav-container"> */}
      {/* <Program2 /> */}
      {/* </div> */}
      <Title subTitle="our program" title="what we offer" />
      <Programs />
      <About />
      <Title subTitle="Gallery" title="Campus Photos" />
      <Campus />
    </div>
  );
};

export default App;
