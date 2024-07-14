
import cover1 from "../assets/featuredCover/1.png";
import cover2 from "../assets/featuredCover/2.png";
import cover3 from "../assets/featuredCover/3.jpeg";
import cover4 from "../assets/featuredCover/4.jpeg";
import cover5 from "../assets/featuredCover/5.jpeg";
import cover6 from "../assets/featuredCover/6.jpeg";

import { FaPlay } from "react-icons/fa6";

import styles from "../components/Featured.module.css";

function Featured(){
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
          <p className={styles.featuredName}>Top Songs - Global</p>
          <p className={styles.tag}>Your weekly update of the most played tracks</p>
        </div>
        <div className={styles.card1}>
          <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover2} className={styles.image} alt="logo" />
          <p className={styles.featuredName}>Top Songs - USA</p>
          <p className={styles.tag}>Your weekly update of the most played tracks</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover3} className={styles.image} alt="logo" />
          <p className={styles.featuredName}>Top 50 - Global</p>
          <p className={styles.tag}>Your daily update of the most played tracks</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover4} className={styles.image} alt="logo" />
          <p className={styles.featuredName}>Top 50 - USA</p>
          <p className={styles.tag}>Your daily update of the most played tracks</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover5} className={styles.image} alt="logo" />
          <p className={styles.featuredName}>Viral 50 - Global </p>
          <p className={styles.tag}>Your daily update of the most played tracks</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover6} className={styles.image} alt="logo" />
          <p className={styles.featuredName}>Viral 50 - USA</p>
          <p className={styles.tag}>Your daily update of the most played tracks</p>
        </div>
        </div>
        </>
    );
}

export default Featured;