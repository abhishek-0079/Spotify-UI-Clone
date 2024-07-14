
import cover1 from "../assets/albumCover/1.jpeg";
import cover2 from "../assets/albumCover/2.jpeg";
import cover3 from "../assets/albumCover/3.jpeg";
import cover4 from "../assets/albumCover/4.jpeg";
import cover5 from "../assets/albumCover/5.jpeg";
import cover6 from "../assets/albumCover/6.jpeg";

import styles from "../components/Album.module.css";
import { FaPlay } from "react-icons/fa6";

function popularAlbum(){

    return (
        <>
        <div className={styles.heading}>
        <h5>Popular albums</h5>
        <p>Show all</p>

      </div>
      <div className={styles.cards}>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover1} className={styles.image} alt="logo" />
          <p className={styles.songName}>Ek Tha Raja</p>
          <p className={styles.singer}>Badshah</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover2} className={styles.image} alt="logo" />
          <p className={styles.songName}>ANIMAL</p>
          <p className={styles.singer}>Manan Bhardwaj, Vishal Mishra, Jaani</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover3} className={styles.image} alt="logo" />
          <p className={styles.songName}>Aashiqui 2</p>
          <p className={styles.singer}>Mithoon, Ankit Tiwari, Jeet Gaanguli</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover4} className={styles.image} alt="logo" />
          <p className={styles.songName}>Moosetape</p>
          <p className={styles.singer}>Sidhu Moose Wala</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover5} className={styles.image} alt="logo" />
          <p className={styles.songName}>Sajni </p>
          <p className={styles.singer}>Ram Sampath, Arijit Singh, P Pandey2</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover6} className={styles.image} alt="logo" />
          <p className={styles.songName}>Still Rollin</p>
          <p className={styles.singer}>Shubh</p>
        </div>
        </div>
      

        </>
    );
}

export default popularAlbum;