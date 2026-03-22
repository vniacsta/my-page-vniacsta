import styles from "./Games.module.css";
import joystick from "./media/joystick-pink.svg";

export default function Games() {
  return (
    <a
      className={styles.card}
      href="https://vniacsta.github.io/my-phaser-games/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className={styles.icon} src={joystick} alt="" />
      <div className={styles.text}>
        <span className={styles.label}>Side project</span>
        <span className={styles.title}>Retro Games</span>
        <span className={styles.subtitle}>
          PhaserJS arcade games — wanna play some oldies?
        </span>
      </div>
      <span className={styles.arrow}>&rarr;</span>
    </a>
  );
}
