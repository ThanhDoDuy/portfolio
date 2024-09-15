import About from "./contents/About";
import Contact from "./contents/Contact";
import HomeCV from "./contents/Home.cv";
import Projects from "./contents/Projects";
import Skills from "./contents/Skills";
import { Iprops } from "./LeftPart.component";

const RightPart = (props: Iprops) => {
  return (
    <div className={props.showLeftPart ? "arlo_tm_rightpart opened": "arlo_tm_rightpart"}>
      <div className="rightpart_inner">
        <HomeCV />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default RightPart;