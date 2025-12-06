import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Java Developer</h3>
                            <p>
                                Skilled in Java, SQL, and backend development with JDBC and MySQL, along with full-stack development using the MERN stack. Proficient in Git and GitHub, with a focus on clean code and effective problem-solving.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Full-Stack Developer</h3>
                            <p>
                                I have experience developing full-stack applications using the MERN stack and React Native, creating responsive UIs and efficient REST APIs.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>AI & Cloud Enthusiast</h3>
                            <p>
                                Pursuing a B.E. in AI & Data Science with an interest in backend engineering, cloud computing (AWS Certified), and scalable application development.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};