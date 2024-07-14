import cover1 from "../assets/trendingEpisodes/1.jpeg";
import cover2 from "../assets/trendingEpisodes/2.jpeg";
import cover3 from "../assets/trendingEpisodes/3.jpeg";
import cover4 from "../assets/trendingEpisodes/4.jpeg";
import cover5 from "../assets/trendingEpisodes/5.jpeg";
import cover6 from "../assets/trendingEpisodes/6.jpeg";

import styles from "../components/Episodes.module.css";
import { LuDot } from "react-icons/lu";
import { FaPlay } from "react-icons/fa6";

function Episodes(){
    return ( 
        <>
        <div className={styles.heading}>
        <h5>Trending Episodes</h5>
        <p>Show all</p>

      </div>
      <div className={styles.cards}>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>

           
          <img src={cover1} className={styles.image} alt="logo" />
          
          <p className={styles.featuredName}>Welcome back,...</p>
          <p className={styles.tag}>June 2021<LuDot size="20px"/>15 min</p>
          
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover2} className={styles.image} alt="logo" />
          <p className={styles.featuredName}>#73: Hotel of...</p>
          <p className={styles.tag}>June 2021<LuDot size="20px"/>93 min</p>
          
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover3} className={styles.image} alt="logo" />
          <p className={styles.featuredName}>Anubis: God of...</p>
          <p className={styles.tag}>June 2021<LuDot size="20px"/>16 min</p>
          
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover4} className={styles.image} alt="logo" />
          <p className={styles.featuredName}>Anubis: God of...</p>
          <p className={styles.tag}>June 2021<LuDot size="20px"/>13 min</p>
          
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover5} className={styles.image} alt="logo" />
          <p className={styles.featuredName}>Mahabharata...</p>
          <p className={styles.tag}>April 2014<LuDot size="20px"/>24 min</p>
          
        </div>
        <div className={styles.card1}>
        <div className={styles.playButton}>
            <FaPlay color="black" size="20px" />
          </div>
          <img src={cover6} className={styles.image} alt="logo" />
          <p className={styles.featuredName}>Relaxing Rain...</p>
          <p className={styles.tag}>April 2019<LuDot size="20px"/>122 min</p>
          
        </div>

        
        </div>

        

        </>
    );
}

export default Episodes;