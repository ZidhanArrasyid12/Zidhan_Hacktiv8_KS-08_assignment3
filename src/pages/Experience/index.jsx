import telkom from "../../assets/img/telkom.jpg";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import ExperienceSection from "../../components/ExperienceSection";

const Experience = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ok}>
                <Header title="Experience" /></div>
            <section className={styles.section}>
                <ExperienceSection
                    title="Network Technician"
                    position="Institut Teknologi Telkom Purwokerto . internship"
                    date="Sep 2019 - Feb 2020 . 6 month"
                    logo={telkom}
                />
            </section>
        </div>
    );
}

export default Experience;
