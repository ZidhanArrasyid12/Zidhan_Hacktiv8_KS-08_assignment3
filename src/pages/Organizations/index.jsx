import smega from "../../assets/img/smega.jpeg";
import voli from "../../assets/img/voli.jpeg";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Organization from "../../components/Organization";

const Organizations = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ok}>
                <Header title="Organizations" /></div>
            <section className={styles.section}>
                <Organization
                    position="Member"
                    title="Graphic Desain Smega"
                    date="Sep 2018 - 2021"
                    logo={smega}
                />
                <Organization
                    position="Member"
                    title="Volley Ball Smega"
                    date="Sep 2018 - 2021"
                    logo={voli}
                />
            </section>
        </div>
    );
}

export default Organizations;
