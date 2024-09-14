import About from "./contents/About";
import Contact from "./contents/Contact";
import HomeCV from "./contents/Home.cv";
import Services from "./contents/Services";
import Skills from "./contents/Skills";

const RightPart = () => {
  return (
    <div className="arlo_tm_rightpart">
      <div className="rightpart_inner">
        <HomeCV />
        <About />
        <Skills />
        <Services />

        <Contact />
      </div>
    </div>
  );
};

export default RightPart;