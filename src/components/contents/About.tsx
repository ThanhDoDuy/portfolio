import AboutLogo from '@/assets/img/about/1.jpg';
import MyCV from '@/assets/files/Do_Duy_Thanh_Backend_Resume.pdf';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';

const About = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    if (sceneEl && sceneEl.current){
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true
      })
      parallaxInstance.enable();
      return () => parallaxInstance.disable();
    }
  }, [])
  return (
    <div className="arlo_tm_section relative" id="about" style={{ paddingTop: 100 }}>
      <div className="arlo_tm_about_wrapper_all">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>About Me</h3>
            <span>Main informations about me</span>
          </div>
          <div className="arlo_tm_about_wrap">
            <div className="author_wrap">
              <div className="leftbox">
                <div ref={sceneEl} className="about_image_wrap parallax" data-relative-input="true">
                  <div className="image layer" data-depth="0.1">
                    <img src={AboutLogo} alt="550x640" />
                    <div className="inner" data-img-url={AboutLogo}></div>
                  </div>
                  <div className="border layer" data-depth="0.2">
                    <img src="img/about/550x640.jpg" alt="550x640" />
                    <div className="inner"></div>
                  </div>
                </div>

              </div>
              <div className="rightbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>I'm &nbsp;
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Freelancer',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Backend Engineering',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                      ]}
                      wrapper="span"
                      speed={50}
                      // style={{ fontSize: '2em', display: 'inline-block' }}
                      repeat={Infinity}
                    /></h4>
                </div>
                <div className="definition">
                  <p>Hi! My name is <strong>DO DUY THANH</strong>. I am a Backend Developer, and I'm very passionate and dedicated to my work. With 3 years of experience as a professional Backend Developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the development process, from discussion and collaboration to execution, but I find the most satisfaction in seeing the final product perform exactly as intended.</p>
                  <br/>
                  <p><strong>IT Domain Knowledge:</strong> AI Safety Platform, Booking System, Mobile communication System, Security Platform.  </p>
                </div>
                <div className="about_short_contact_wrap">
                  <ul>
                    <li>
                      <span><label>City:</label> Ho Chi Minh, Vietnam</span>
                    </li>
                    <li>
                      <span><label>Interests:</label> Street Food, Traveling</span>
                    </li>
                    <li>
                      <span><label>Study:</label> Ho Chi Minh University</span>
                    </li>
                    <li>
                      <span><label>Degree:</label> Bachelor</span>
                    </li>
                    <li>
                      <span><label>Linkedin:</label> <a href="https://www.linkedin.com/in/thanh-do-3aba58176/"><u>THANH DO</u></a></span>
                    </li>
                    <li>
                      <span><label>Mail:</label> <a href="mailto:duythanh1602@gmail.com"><u>duythanh1602@gmail.com</u></a></span>
                    </li>
                  </ul>
                </div>
                <div className="buttons_wrap">
                  <ul>
                    <li>
                      <a href={MyCV} download="Do_Duy_Thanh_Backend_Resume"><span>Download CV</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;