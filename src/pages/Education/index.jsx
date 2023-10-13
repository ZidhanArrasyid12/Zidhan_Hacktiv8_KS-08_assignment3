import telkom from "../../assets/img/telkom.jpg";
import hacktiv8 from "../../assets/img/hacktiv8.png";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import EducationSection from "../../components/EducationSection";

const Education = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ok}>
                <Header title="Education" /></div>
            <section className={styles.section}>
                <EducationSection
                    title="Institut Teknologi Telkom Purwokerto"
                    position="Bachelor's degree, Informatics Engineering"
                    date="Sep 2021 - now"
                    logo={telkom}
                />
                <EducationSection
                    title="Hacktiv8 Indonesia"
                    position="Studi Independen, React and React Native for Front End Developer"
                    date="Aug 2023 - Dec 2023"
                    logo={hacktiv8}
                />
            </section>
        </div>
    );
}

export default Education;
