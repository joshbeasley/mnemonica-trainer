import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <h2>Welcome to the Mnemonica Trainer</h2>
      <div className={styles.info}>
        <p>
          The Mnemonica stack has been designed by Juan Tamariz, rightfully
          considered as a living legend of classic close-up magic, and he
          refined the usage of hi stack for decades; in addition, his stack is
          used by some of the best card magicians in the world; all this gives
          you a guarantee of quality. Juan Tamariz wrote a 364-page book with
          dozen of effects, and because others have used his stack for years,
          they too have developed dozens of ideas and effects with this stack;
          all this gives you a guarantee of quantity.
        </p>
      </div>
      <h3 className={styles.subtitle}>
        Take your pick of the training modes below:
      </h3>
      <div className={styles.page}>
        <div className={styles["hexagon-wrapper"]}>
          <Link to="/cardtonumber" style={{ textDecoration: "none" }}>
            <div className={styles["hexagon"]}>
              <p>Card To Number</p>
            </div>
          </Link>
        </div>
        <div className={styles["hexagon-wrapper"]}>
          <Link to="/stack" style={{ textDecoration: "none" }}>
            <div className={styles["hexagon"]}>
              <p>Study the Stack</p>
            </div>
          </Link>
        </div>
        <div className={styles["hexagon-wrapper"]}>
          <Link to="/numbertocard" style={{ textDecoration: "none" }}>
            <div className={styles["hexagon"]}>
              <p>Number To Card</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
