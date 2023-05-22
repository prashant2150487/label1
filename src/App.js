import "./App.css";
import img1 from "./image/startup icon.png";
import img11 from "./image/Group.png"
import img2 from "./image/Group1.png";
import img21 from "./image/designicon.png"
import img3 from "./image/Group (1).png";
import img31 from "./image/Migration Icon.png";
import img4 from "./image/Group (3).png";
import img41 from "./image/programming.png";
import img5 from "./image/Group (4).png";
import img51 from "./image/maintenance icon.png";
import img6 from "./image/Group (5).png";
import img61 from "./image/Customization icon.png";
import sideimg from "./image/Untitled-4 2.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
function App() {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  return (
    <div>
      <div className="paper1">
        <div className="leftpaper1">
          <h3>Expert BigCommerce Consulting</h3>
          <h2>Bigcommerce Development Service</h2>
          <button className="team">
            <p> Consult our BigCommerce Team</p>{" "}
            <AiOutlineArrowRight id="fArrow" />
          </button>
        </div>
        <div className="rightpaper1">
          <div className="circle"></div>
          <img src={sideimg} alt="img" width={300} className="rightimg1" />
        </div>
      </div>
      {/* ************************************ */}
      <div className="paper2">
        <h2>BIGCOMMERCE SERVICES OFFERED</h2>
        <h3 className="stores">
          We develop BigCommerce stores that provide a unique and refined
          experience to site visitors
        </h3>
        <h4>which results in better conversions and higher AOV.</h4>
        <div className="paperbox">
          <div className="first1" id="new"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <img src={hovered ? img11 : img1} className="startup" alt="img"
            />
            <h3>Startup</h3>
            <h5>
              We can help you start up a BigCommerce store that is completely
              SEO friendly, high on user experience, and easy to maintain.
            </h5>
          </div>
          <div className="first1"
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}>
            <img src={hovered2 ? img21 : img2}
              className="startup"
              alt="img"
            />
            <h3>Design</h3>
            <h5>
              Our BigCommerce design team has demonstrated its excellence in
              designing custom BigCommerce themes with all the desired features
              and capabilities
            </h5>
          </div>
          <div className="first1"
            onMouseEnter={() => setHovered3(true)}
            onMouseLeave={() => setHovered3(false)}>
            <img src={hovered3 ? img31 : img3}
              className="startup"
              alt="img"
            />
            <h3>Migration</h3>
            <h5>
              We make migration to BigCommerce easy. We guarantee that no data
              will be lost and that your SEO ranking will be back up in a short
              time.
            </h5>
          </div>
          <div className="first1"
            onMouseEnter={() => setHovered4(true)}
            onMouseLeave={() => setHovered4(false)}>
            <img src={hovered4 ? img41 : img4}
              className="startup"
              alt="img"
            />
            <h3>Programming</h3>
            <h5>
              If you need something that is out of the box we can help you
              achieve the same with our BigCommerce expertise and knowledge
            </h5>
          </div>
          <div className="first1"
            onMouseEnter={() => setHovered5(true)}
            onMouseLeave={() => setHovered5(false)}>
            <img src={hovered5 ? img51 : img5}
              className="startup"
              alt="img"
            />
            <h3>Maintenance</h3>
            <h5>
              We maintain and manage several BigCommerce stores helping them
              with their operations and scalability
            </h5>
          </div>
          <div className="first1"
            onMouseEnter={() => setHovered6(true)}
            onMouseLeave={() => setHovered6(false)}>
            <img src={hovered6 ? img61 : img6}
              className="startup"
              alt="img"
            />
            <h3>Customization</h3>
            <h5>
              Whether you are looking to migrate from blueprint to stencil or
              are looking for some out of the box compliance checks or
              customizations, we are here to serve you.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
