import Pritam from "../assets/images/Pritam.jpeg";
import Arjit from "../assets/images/Arjit.jpeg";
import Rahman from "../assets/images/arRahman.jpeg";
import Anirudh from "../assets/images/anirudh.jpeg";
import Vishal from "../assets/images/vishal.jpeg";
import Sachin from "../assets/images/sacin.jpeg";

import { FaPlay } from "react-icons/fa6";

import styles from "../components/Artist.module.css";
function Artist() {
  return (
    <>
    
     <div className={styles.heading}>
        <h5>Popular Artists</h5>
        <p>Show all</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={Pritam} className={styles.image} alt="logo" />
         
          <p className={styles.artistName}>Pritam</p>
          <p className={styles.tag}>Artist</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={Arjit} className={styles.image} alt="logo" />
          <p className={styles.artistName}>Arjit Singh</p>
          <p className={styles.tag}>Artist</p>
        </div>
       
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={Rahman} className={styles.image} alt="logo" />
          <p className={styles.artistName}>A.R.Rahman</p>
          <p className={styles.tag}>Artist</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={Anirudh} className={styles.image} alt="logo" />
          <p className={styles.artistName}>Anirudh </p>
          <p className={styles.tag}>Artist</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={Sachin} className={styles.image} alt="logo" />
          <p className={styles.artistName}>Sachin-Jigar</p>
          <p className={styles.tag}>Artist</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={Vishal} className={styles.image} alt="logo" />
          <p className={styles.artistName}>Vishal Mishra</p>
          <p className={styles.tag}>Artist</p>
        </div>

      
      </div>
   
    
    
    </>
  );
}
export default Artist;
