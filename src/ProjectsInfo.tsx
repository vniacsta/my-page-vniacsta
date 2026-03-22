import styles from "./ProjectsInfo.module.css";

interface ProjectsInfoProps {
  image: string;
  icon?: string;
  name: string;
  description?: string;
  linkProject: string;
  linkGithub?: string;
  featured?: boolean;
}

export default function ProjectsInfo({
  image,
  icon,
  name,
  description,
  linkProject,
  linkGithub,
  featured,
}: ProjectsInfoProps) {
  const cardClass = featured
    ? `${styles.card} ${styles.featured}`
    : styles.card;

  return (
    <div className={cardClass}>
      <a
        className={styles.imageLink}
        href={linkProject}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.image} src={image} alt={name} />
      </a>

      <div className={styles.content}>
        <div className={styles.info}>
          <span className={styles.nameRow}>
            {icon && <img className={styles.icon} src={icon} alt="" />}
            <span className={styles.name}>{name}</span>
          </span>
          {description && (
            <span className={styles.description}>{description}</span>
          )}
        </div>

        <div className={styles.links}>
          <a
            className={styles.link}
            href={linkProject}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live &rarr;
          </a>
          {linkGithub && (
            <a
              className={styles.link}
              href={linkGithub}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
