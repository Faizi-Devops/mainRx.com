import Navbar from "@/components/Navbar/Navbar";
import styles from '../styles/Landing.module.css'


const Landing = () => {
    return (
        <div>
            <div className={`${styles.widthing}`}>
                <Navbar />
            </div>

            <div className={` ${styles.fonting} ${styles.widthing}`}>
                <h1 className={`${styles.head}`}>Your medication, delivered</h1>
                <p className={`${styles.paragraph}`}>Same-day delivery, scheduled shipping, and scheduled pick-ups available.</p>
            </div>

            <div className={`${styles.backgroundpicture}`}>
                
                

            </div>

        </div>
    )
}
export default Landing;