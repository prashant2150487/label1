import logo from "./logo.svg";
import "./App.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import img1 from "./image/Group 1000006006.png";
function App() {
  return (
    <div>
      <div className="paper1">
        <div className="leftpaper1">
          {/* <h3>Expert BigCommerce Consulting</h3> */}
          <h2>Kotlin App Development </h2>
          <h3>Company</h3>
          <button className="team">
            <p> Consult our BigCommerce Team</p>{" "}
            <AiOutlineArrowRight id="fArrow" />
          </button>
        </div>
        {/* <div className="rightpaper1"> */}
        <div className="circle"></div>
        {/* <img src={img1} alt="img" width={300} className="rightimg1" /> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
