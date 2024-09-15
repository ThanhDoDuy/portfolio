import DesktopLogo from '@/assets/img/logo/desktop-logo.jpg';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export interface Iprops {
  showLeftPart: boolean;
  setShowLeftPart: (value: boolean) => void;
}

const LeftPart = (props: Iprops) => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const handleClickTab = (tab: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    window.location.hash = tab;
    setActiveTab(tab);
    e.preventDefault();
    const section = document.querySelector(`#${tab}`);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  return (
    <div className={props.showLeftPart ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
      <div className="leftpart_inner">
        <div className="logo_wrap">
          <a href="#"><img src={DesktopLogo} alt="desktop-logo" /></a>
        </div>
        <div className="menu_list_wrap">
          <ul className="anchor_nav">
            <li><a
              href="#home"
              className={activeTab === 'home' ? "active" : ""}
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('home', e)}
            >Home</a></li>
            <li><a
              href="#about"
              className={activeTab === 'about' ? "active" : ""}
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('about', e)}
            >About</a></li>
            <li><a
              href="#skills"
              className={activeTab === 'skills' ? "active" : ""}
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('skills', e)}
            >Skills</a></li>
            <li><a
              href="#projects"
              className={activeTab === 'projects' ? "active" : ""}
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('projects', e)}
            >Projects</a></li>
            <li><a
              href="#contact"
              className={activeTab === 'contact' ? "active" : ""}
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('contact', e)}
            >Contact</a></li>
          </ul>
        </div>
        <div className="leftpart_bottom">
          <div className="social_wrap">
            <ul>
              <li><a href="https://www.facebook.com/profile.php?id=100004163495586" target='_blank'>
                <FaFacebook />
              </a></li>
              <li><a href="https://www.linkedin.com/in/thanh-do-3aba58176" target='_blank'>
                <FaLinkedin />
              </a></li>
              <li><a href="https://github.com/ThanhDoDuy" target='_blank'>
                <FaGithub />
              </a></li>
            </ul>
          </div>
        </div>
        {!isMobile &&
          <a
            className={props.showLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              props.setShowLeftPart(!props.showLeftPart)
            }}>
            <i className={props.showLeftPart ? "xcon-angle-left opened" : "xcon-angle-left"}></i>
          </a>
        }
      </div>
    </div>
  );
};

export default LeftPart;