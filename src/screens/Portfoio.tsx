import RightPart from "../components/RightPart.component"
import Mobile from "../components/mobiles/Mobile.menu"
import LeftPart from "../components/LeftPart.component"
import { FloatButton } from 'antd';
import { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';

const Portfolio = () => {
  const [showLeftPart, setShowLeftPart] = useState<boolean>(false);
  useEffect(() => {
    if (isMobile) {
      setShowLeftPart(true);
    }
  },[]);

  return (
    <>
      <div className="arlo_tm_wrapper_all">

        <div id="arlo_tm_popup_blog">
          <div className="container">
            <div className="inner_popup scrollable"></div>
          </div>
          <span className="close"><a href="#"></a></span>
        </div>

        {/* <!-- PRELOADER --> */}
        {/* <Preloader/> */}
        {/* <!-- /PRELOADER --> */}

        {/* <!-- MOBILE MENU --> */}
        <Mobile />
        {/* <!-- /MOBILE MENU --> */}

        {/* <!-- CONTENT --> */}
        <div className="arlo_tm_content">

          {/* <!-- LEFTPART --> */}
          <LeftPart
            showLeftPart={showLeftPart}
            setShowLeftPart={setShowLeftPart}
          />
          {/* <!-- /LEFTPART --> */}

          {/* <!-- RIGHTPART --> */}
          <RightPart 
            showLeftPart={showLeftPart}
            setShowLeftPart={setShowLeftPart}
          />
          {/* {/* <!-- /RIGHTPART --> */}

          <FloatButton.BackTop
            tooltip={<div>Roll To Top</div>}
          />

        </div>
      </div>
    </>
  )
}

export default Portfolio