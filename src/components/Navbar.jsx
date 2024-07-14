import { MdOutlineChevronRight } from "react-icons/md";
import { MdOutlineChevronLeft } from "react-icons/md";

import styles from "../components/Navbar.module.css";

function Navbar(){
    return (
        <>
       <div className={styles.navbar}>
       <div className={styles.arrow}>
        <MdOutlineChevronLeft className={styles.leftArrow} size="30px"/>
        <MdOutlineChevronRight className={styles.rightArrow} size="30px"/>
        </div>

        <div className={styles.register}>
            <div className={styles.signUp}>
               Sign up
            </div>
            <div className={styles.logIn}><button className={styles.btn}>Log In</button></div>

        </div>
       </div>
        
        </>

    );

}
export default Navbar;