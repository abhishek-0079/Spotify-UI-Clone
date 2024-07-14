import { BsSpotify } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { TbBrandNetbeans } from "react-icons/tb";

import Navbar from "./components/Navbar.jsx";
import Artist from "./components/Artist.jsx";
import Album from "./components/Album.jsx";
import Radio from "./components/Radio.jsx";
import Featured  from "./components/Featured.jsx";
import Playlist from "./components/Playlist.jsx";
import Footer from "./components/Footer.jsx";
import Episodes from "./components/Episodes.jsx";

import './App.css'; 


function App() {
  return (
    <div className="app">

      {/* THIS IS THE LEFT PANEL OF THE SPOTIFY  WEB PLAYER ......................................................*/}

      <div className="left-column">
        <div className="left-div1">
        <div className="logo"> <BsSpotify size="25px"/><span className="span1">Spotify</span></div>
         <div className="home"><GoHome size="25px" color ="rgb(150, 142, 142)"/><span className="span2">Home</span></div>
         <div className="search"><IoSearch  size="25px" color ="rgb(150, 142, 142)"/><span className="span2">Search</span></div>
        </div>
        <div className="left-div2">
         
         <div className="upperPart">
         <div className="library"><BiLibrary size="25px" color ="rgb(150, 142, 142)"/> <span className="span3">Your Library</span></div>
          <div className="add"><IoMdAdd size="25px" color ="rgb(150, 142, 142)"/></div>
          
        </div>
        <div className="mainContainer">
          <div className="container1">
          <p id="first">Create your first playlist</p>
          <p id ="second">It's easy, we'll help you</p>
          <button className="playlistBtn">Create playlist</button>
          </div>
          <div className="container1">
          <p id="first">Let's find some podcasts</p>
          <p id ="second">We'll keep updating on new episodes</p>
          <button className="playlistBtn">Browse podcasts</button>
          </div>

        </div>
        <div className="links">
        <div className="mainLink">
        <p id="links">Legal</p>
          <p id="links">Safety & Privacy Center</p>
          <p id="links">Privacy Policy</p>
          <p id="links">Cookies</p>
          <p id="links">About Ads</p>
          <p id="links">Accessibility</p>
          <p id="links">Cookies</p>
          <button className="explore"><TbBrandNetbeans size="18px"/><span className="span4">English</span></button>
        </div>
        </div>

         </div>
      </div>

{/* THIS IS THE RIGHT PANEL OF THE SPOTIFY WEB PLAYER...........................................................*/ }

      <div className="right-column">
       <Navbar/>
       <Artist/>
       <Album/>
       <Radio/>
       <Featured/>
       <Playlist/>
       <Episodes/>
       <Footer/>
       

      </div>
    </div>
  );
}

export default App;
