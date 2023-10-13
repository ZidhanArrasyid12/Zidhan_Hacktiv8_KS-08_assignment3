import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ok}>
                <Header title="About" /></div>
            <section className={styles.section}>
                <h2>Zidhan Arrasyid</h2>
                <p>informatics engineering student at Institut Teknologi Telkom Purwokerto</p>
                <h3>Contact</h3>
                <em>+6282329056948</em>
                <em>zidhanarrasyid05@gmail.com</em>
                <h3>About Me</h3>
                <p>
                    I am a student majoring in informatics engineering at Institut Teknologi Telkom Purwokerto, 
                    I live in Purbalingga and now I am 20 years old
                </p>
                <br />
                <div className={styles.icons}>
                    <a href="https://www.instagram.com/zdhn_z/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2xl" />
                    </a>
                    <a href="https://www.facebook.com/zidhan.arrasyid.1" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebookSquare} size="2xl" />
                    </a>
                </div>
            </section>
        </div>
    );
}

export default About;
