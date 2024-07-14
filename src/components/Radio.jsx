
import cover1 from "../assets/radioCover/1.jpeg";
import cover2 from "../assets/radioCover/2.jpeg";
import cover3 from "../assets/radioCover/3.jpeg";
import cover4 from "../assets/radioCover/4.jpeg";
import cover5 from "../assets/radioCover/5.jpeg";
import cover6 from "../assets/radioCover/6.jpeg";


import styles from "../components/Radio.module.css";
import { FaPlay } from "react-icons/fa6";

function Radio(){
    return (
        <>
        <div className={styles.heading}>
        <h5>Popular radio</h5>
        <p>Show all</p>

      </div>
      <div className={styles.cards}>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover1} className={styles.image} alt="logo" />
          <p className={styles.radioName}>Ikka Radio</p>
          <p className={styles.singer}>With Karma, Raga, Muhfaad and more</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover2} className={styles.image} alt="logo" />
          <p className={styles.radioName}>Arijit Singh Radio</p>
          <p className={styles.singer}>With Neha Kakkar, Pritam, KK and more</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover3} className={styles.image} alt="logo" />
          <p className={styles.radioName}>Udit Narayan Radio</p>
          <p className={styles.singer}>With Kumar Sanu, Alka Yagnik, Anuradha P</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover4} className={styles.image} alt="logo" />
          <p className={styles.radioName}>S.P.B Radio</p>
          <p className={styles.singer}>With Mano, Ilaiyaraaja, S. Janaki</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover5} className={styles.image} alt="logo" />
          <p className={styles.radioName}>A.R. Rahman Radio</p>
          <p className={styles.singer}>With Shankar Mahadevan, Anirudh R</p>
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover6} className={styles.image} alt="logo" />
          <p className={styles.radioName}>Diljit Dosanjh Radio</p>
          <p className={styles.singer}>With Garry Sandhu, Ranjit Bawa, A Gill</p>
        </div>
        </div>
        </>
     );
}

export default Radio;
