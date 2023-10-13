/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Award from "../../components/Award";

const Awards = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ok}>
                <Header title="Awards" /></div>
            <section className={styles.section}>
                <Award
                    title="Best Poster National Children's Day "
                    detail="Issued by Institut Teknologi Telkom Purwokerto · Juli 2022"
                />
            </section>
        </div>
    );
}

export default Awards;
