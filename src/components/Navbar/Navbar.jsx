import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();


    return (
        <nav className={styles.navbar}>
            {/* Logo / Title */}
            <Link className={styles.title} to="/">
                Portfolio
            </Link>

            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl("nav/closeIcon.png")
                            : getImageUrl("nav/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />

                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        {location.pathname === "/" ? (
                            <a
                                href="#about"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .getElementById("about")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                    setMenuOpen(false);
                                }}
                            >
                                About
                            </a>
                        ) : (
                            <Link to="/#about">About</Link>
                        )}
                    </li>
                    <li>
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
