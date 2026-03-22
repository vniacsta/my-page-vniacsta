import styles from "./Description.module.css";

export default function Description() {
  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>About</h2>

      <div className={styles.body}>
        <p>
          Engineer with 5+ years of experience building modern web platforms and
          scalable applications.
        </p>

        <p>
          My career started in frontend development, but today I focus on
          AI-driven full-stack systems, software architecture, and building
          intelligent developer workflows.
        </p>

        <p>
          I enjoy designing systems end-to-end, combining strong engineering
          fundamentals with modern tooling and AI-assisted development to build
          efficient, scalable software.
        </p>
      </div>
    </div>
  );
}
