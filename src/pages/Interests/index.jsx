/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";

const Interests = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ok}>
                <Header title="Interests" /></div>
            <section className={styles.section}>
            <h2>Interest</h2>
            <p>
                I am a student majoring in informatics engineering at Institut Teknologi Telkom Purwokerto, 
                and I am interested in learning related to design such as Corel, Figma, and Front End Develop with VScode
            </p> <br></br>
            <p>
                I also like to learn things related to networks and computer hardware, then I also like to do various editing 
                such as images with Adobe Photoshop and video editing using Adobe Premiere Pro
            </p>
            </section>
        </div>
    );
}

export default Interests;
