import styles from "./Description.module.css";

export default function Description() {
  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>About</h2>

      <div className={styles.body}>
        <p>
          Engineer with 5+ years of experience building web products
          end&#8209;to&#8209;end. I started in frontend and expanded into
          full&#8209;stack development — today I own the full layer: UI,
          backend, data model, infrastructure.
        </p>

        <p>
          I build AI&#8209;powered products and apply AI to development
          workflows. My focus is on practical product engineering — real
          applications, real users, real business logic. Not demos.
        </p>

        <p>
          I care about how systems are structured, not just whether they work.
        </p>
      </div>
    </div>
  );
}
