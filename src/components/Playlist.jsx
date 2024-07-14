import cover1 from "../assets/spotifyPlaylists/1.jpeg";
import cover2 from "../assets/spotifyPlaylists/2.jpeg";
import cover3 from "../assets/spotifyPlaylists/3.jpeg";
import cover4 from "../assets/spotifyPlaylists/4.jpeg";
import cover5 from "../assets/spotifyPlaylists/5.jpeg";
import cover6 from "../assets/spotifyPlaylists/6.jpeg";

import styles from "../components/Playlist.module.css";
import { FaPlay } from "react-icons/fa6";

function Playlist(){
    return ( 
        <>
        <div className={styles.heading}>
        <h5>Spotify Playlists</h5>
        <p>Show all</p>

      </div>
      <div className={styles.cards}>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover1} className={styles.image} alt="logo" />
          <p className={styles.featuredName}>Chillout Lounge</p>
          <p className={styles.tag}>Just lean back and enjoy relaxed beats.</p>
        </div>
        <div className={styles.card1}> <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover2} className={styles.image} alt="logo" />
          <p className={styles.featuredName}>All Out 2020s</p>
          <p className={styles.tag}>The biggest songs of the 2020s. Cover:...</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover3} className={styles.image} alt="logo" />
          <p className={styles.featuredName}>Lofi Beats</p>
          <p className={styles.tag}>chill beats, lofi vibes, new tracks everyday</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover4} className={styles.image} alt="logo" />
          <p className={styles.featuredName}>Today's Top Hits</p>
          <p className={styles.tag}>Billie Eilish is on top of the Hottest 50!</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover5} className={styles.image} alt="logo" />
          <p className={styles.featuredName}>Jazz in the....</p>
          <p className={styles.tag}>Soft instrumental<br></br> Jazz for all your....</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover6} className={styles.image} alt="logo" />
          <p className={styles.featuredName}>All Out 80s</p>
          <p className={styles.tag}>The biggest song of the 1980s. Cover:...</p>
        </div>
        </div>

        </>
    );
}

export default Playlist;