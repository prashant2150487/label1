
import "./App.css";
import img1 from "./image/Rectangle 17995.png"
import img2 from "./image/Rectangle 17996.png"
import img3 from "./image/Rectangle 17997.png"
import img4 from "./image/Rectangle 17998.png"
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import playIcon from "./image/Group.png"
import youtube from "./image/youtubeicon.png"
function App() {
  return (
    <div>
      <div className="container1">
        <h2>Types of Partnerships</h2>
        <div className="box">
          <div className="first1">
            <h3>CLOSED WHITE LABEL</h3>
            <h5>
              When you choose us for a closed white label partnership, we remain
              behind the scenes. You and your team interact with the clients.
              Your client would not know that we exist, and we work on their
              project. Kushel Digi bill you, and you can bill your client.
            </h5>
          </div>
          <div className="first1">
            <h3>OPEN WHITE LABEL</h3>
            <h5>
              Under open white label partnership, we act as a part of your
              in-house team and your clients would know that we exist. You
              manage the project, take care of the client communication, and
              guide us. We bill you and you may bill your end clients.
            </h5>
          </div>
          <div className="first1">
            <h3>REFERRAL</h3>
            <h5>
              When we join our client's project, become their full-time
              employees. We participate in all development meetings and we do
              everything we can to actively support product development.
            </h5>
          </div>
        </div>
      </div>
      {/* ******************************************************** */}
      <div className="container2">
        <h3>Appreciation From Clients</h3>
        <div className="box1">
          <AiOutlineArrowLeft className="leftArr" />
          <div className="img_container">
            <img src={playIcon} className="play_icon" />

            <h5 className="you_tube">Watch on<img src={youtube} className="youtube_icon" /> Youtube</h5>

            <img src={img1} className="img_L" alt="img" />
          </div>
          <div className="img_container">
            <img src={playIcon} className="play_icon" />
            <h5 className="you_tube">Watch on<img src={youtube} className="youtube_icon" /> Youtube</h5>
            <img src={img2} className="img_L" alt="img" />
          </div>
          <div className="img_container">
            <img src={playIcon} className="play_icon" />
            <h5 className="you_tube">Watch on<img src={youtube} className="youtube_icon" /> Youtube</h5>
            <img src={img3} className="img_L" alt="img" />
          </div>
          <div className="img_container">
            <img src={playIcon} className="play_icon" />
            <h5 className="you_tube">Watch on<img src={youtube} className="youtube_icon" /> Youtube</h5>
            <img src={img4} className="img_L" alt="img" />
          </div>
          <AiOutlineArrowRight className="rightArr" />
        </div>
      </div>

    </div >
  );
}

export default App;
