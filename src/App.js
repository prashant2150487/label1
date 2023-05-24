import "./App.css";
import img from "./image/Vector (14).png";
import img1 from "./image/Group.png";
import img2 from "./image/Group (1).png";
import img3 from "./image/Group.png";
import img4 from "./image/Group (5).png";
import img5 from "./image/Group (10).png";
import img6 from "./image/Group (6).png";
import img7 from "./image/Group 1000005615.png";
import img8 from "./image/Group (7).png";
import img9 from "./image/Group (8).png";
import img10 from "./image/Group (9).png";
import img11 from "./image/w_line.png"
import img12 from "./image/r_line.png"
function App() {
  return (
    <div>
      <div className="box1">
        <div className="oneline">
          <h3>OUR OFFERINGS</h3>
          <img src={img} alt='img' />
        </div>
        <img src={img11} alt="img" className="wline" />
        <img src={img12} alt="img" className="rline" />
        <div className="paper_main">
          <div className="first1" id="enterprise">
            <img src={img1} className="startup" alt='img' />
            <h5>Enterprise Software Development</h5>
          </div>
          <div className="first1" id="moblie">
            <img src={img2} className="startup" alt='img' />
            <h5>Mobile App Development</h5>
          </div>
          <div className="first1" id="website">
            <img src={img3} className="startup" alt='img' />
            <h5>Website Development</h5>
          </div>
          <div className="first1" id="Analytics">
            <img src={img4} className="startup" alt='img' />
            <h5>Data </h5>
            <h4>Analytics </h4>
          </div>
          <div className="first1" id="it">
            <img src={img5} className="startup" alt='img' />
            <h5>IT </h5>
            <h4>Consultancy</h4>
          </div>
          <div className="first1" id="Graphic">
            <img src={img6} className="startup" alt='img' />
            <h5>Graphic Design</h5>
          </div>
          <div className="first1" id="Digital">
            <img src={img7} className="startup" alt='img' />
            <h5>Digital Marketing</h5>
          </div>
          <div className="first1" id="ux">
            <img src={img8} className="startup" alt='img' />
            <h5>UI/UX Designing</h5>
          </div>
          <div className="first1" id="video">
            <img src={img9} className="startup" alt='img' />
            <h5>Video Marketing</h5>
          </div>
          <div className="first1" id="branding">
            <img src={img10} className="startup" alt='img' />
            <h5>Branding Positioning Services</h5>
          </div>
        </div>



      </div>

    </div>
  );
}

export default App;
