import hi from "../../assets/img/hi.jpg";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ok}>
                <Header title="Home" /></div>
            <section className={styles.section}>
                <p>Hi Guys!</p>
                <p>My name is Zidhan</p>
                <br></br><img src={hi} alt="Hacktiv8" className={styles.img} /><br /> 
                <p>This is my online portfolio</p>
                <p>Nice to meet you</p>
            </section>
        </div>
    );
}

export default Home;
