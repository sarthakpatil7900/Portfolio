import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Sarthak</h1>
                <p className={styles.description}>
                    Backend-focused engineering student skilled in Java, SQL, and full-stack development.
                    I build applications using Java, MySQL, MERN, and cloud technologies, with a strong interest in backend systems and problem-solving.
                </p>
                <a href="#contact" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("hero/heroImage.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};