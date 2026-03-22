import styles from "./FeaturedProjects.module.css";
import kitcheneraLogo from "./media/kitchenera.png";

const projects = [
  {
    name: "Kitchenera",
    logo: kitcheneraLogo,
    description:
      "Meal planning, shopping lists, and inventory tracking — with an AI kitchen assistant you can chat with in natural language.",
    url: "https://kitchenera.app/",
  },
];

export default function FeaturedProjects() {
  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.list}>
        {projects.map((project) => (
          <a
            key={project.name}
            className={styles.card}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.logo && (
              <img className={styles.logo} src={project.logo} alt={project.name} />
            )}
            <div className={styles.content}>
              <span className={styles.name}>{project.name}</span>
              <span className={styles.description}>{project.description}</span>
            </div>
            <span className={styles.arrow}>&rarr;</span>
          </a>
        ))}
      </div>
    </div>
  );
}
