import avatar from "./media/avatar.jpeg";
import styles from "./App.module.css";

import Description from "./Description";
import FeaturedProjects from "./FeaturedProjects";
import Projects from "./Projects";
import SocialMedia from "./SocialMedia";

export default function App() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <img
              className={styles.avatar}
              src={avatar}
              alt="Vânia Costa Mendes"
            />
            <div className={styles.heroText}>
              <p className={styles.label}>Software Engineer</p>
              <h1 className={styles.name}>Vânia Costa Mendes</h1>
              <SocialMedia />
            </div>
          </div>
        </header>

        <section className={styles.section} style={{ animationDelay: "0.15s" }}>
          <Description />
        </section>

        <section className={styles.section} style={{ animationDelay: "0.3s" }}>
          <FeaturedProjects />
        </section>

        <section className={styles.section} style={{ animationDelay: "0.45s" }}>
          <Projects />
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerDivider} />
          <small className={styles.footerText}>
            2026 · Built with{" "}
            <span role="img" aria-label="love">
              💗
            </span>{" "}
            by Vânia Costa Mendes
            <span className={styles.footerSep}>·</span>
            <a
              href="https://github.com/vniacsta/my-page-vniacsta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source on GitHub
            </a>
          </small>
        </footer>
      </main>
    </div>
  );
}
