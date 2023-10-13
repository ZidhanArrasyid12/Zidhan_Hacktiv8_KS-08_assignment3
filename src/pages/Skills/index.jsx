/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Skill from "../../components/Skill";

const Skills = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ok}>
                <Header title="Skills" /></div>
            <section className={styles.section}>
                <Skill title="Figma" />
                <Skill title="Photoshop" />
                <Skill title="Premiere Pro" />
                <Skill title="Corel Draw" />
                <Skill title="Network enginer" />
                <Skill title="computer technician" />
                <Skill title="Cascading Style Sheets (CSS)" />
                <Skill title="HTML" />
                <Skill title="C++" />
                <Skill title="JavaScript" />
            </section>
        </div>
    );
}

export default Skills;
