import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

import styles from "../components/Footer.module.css";

function Footer(){
    return (
        <>
        <div className={styles.footer}>
            <div className={styles.link1}>
                <span className={styles.firstLink}>Company</span>
                <span className={styles.subLinks}>About</span>
                <span className={styles.subLinks}>Jobs</span>
                <span className={styles.subLinks}>For the Record</span>

            </div>
            <div className={styles.link1}>
                <span className={styles.firstLink}>Communities</span>
                <span className={styles.subLinks}>For Artist</span>
                <span className={styles.subLinks}>Developers</span>
                <span className={styles.subLinks}>Advertising</span>
                <span className={styles.subLinks}>Investors</span>
                <span className={styles.subLinks}>Vendors</span>

            </div>
            <div className={styles.link1}>
                <span className={styles.firstLink}>Useful links</span>
                <span className={styles.subLinks}>Support</span>
                <span className={styles.subLinks}>Free Mobile App</span>
             

            </div>
            <div className={styles.link1}>
                <span className={styles.firstLink}>Spotify Plans</span>
                <span className={styles.subLinks}>Primium individuals</span>
                <span className={styles.subLinks}>Primium Duo</span>
                <span className={styles.subLinks}>Primium Family</span>
                <span className={styles.subLinks}>Primium Student</span>
                <span className={styles.subLinks}>Spotify Free</span>

            </div>
            <div className={styles.socialMediaLinks}>
                <div className={styles.socialLink}>
                <a href="https://www.instagram.com/spotify/"><FaInstagram  color= "white" size="20px"  /></a></div>
               <div className={styles.socialLink}> 
               <a href="https://x.com/spotify?mx=2"><FaTwitter color="white" size="20px"  /></a></div>
                <div className={styles.socialLink}>
                    <a href="https://www.facebook.com/Spotify"><FaFacebook color="white" size="20px" /></a></div>
            </div>

        
       

           
            

        </div>
        <div className={styles.hr}>
            <hr />
        </div>
        <div className={styles.copyright}>
            <div className={styles.copyrightSymbol}><MdCopyright size="12px"/></div>
            <div className={styles.text}>2024 Spotify AB</div>
        </div>
        <div className={styles.copyrightMsg}>
            <p>All Rights Reserved</p>
            <p>Created by Abhishek Kr. Prajapati</p>
        </div>
        </>
    );
}

export default Footer;