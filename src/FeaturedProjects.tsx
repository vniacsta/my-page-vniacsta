import styles from "./FeaturedProjects.module.css";
import kitcheneraLogo from "./media/kitchenera.png";
import giftosLogo from "./media/giftos.svg";
import planzapLogo from "./media/planzap.svg";

const projects = [
  {
    name: "Kitchenera",
    logo: kitcheneraLogo,
    meta: "Solo-built · Live",
    description:
      "An AI-powered kitchen assistant — tracks your inventory, builds shopping lists, and lets you plan meals through natural language. Built to remove the friction from home cooking management.",
    url: "https://kitchenera.app/",
  },
  {
    name: "Giftos",
    logo: giftosLogo,
    meta: "Solo-built · Live",
    description:
      "A gift exchange platform designed for minimal friction. One organiser sets up the exchange; participants get their assignments by email. No accounts, no apps, no coordination overhead.",
    url: "https://giftos.pt/",
  },
  {
    name: "PlanZap",
    logo: planzapLogo,
    meta: "Solo-built · Live",
    description:
      "A scheduling and booking platform for service businesses — class management, member attendance, admin workflows, and client-facing booking in one system.",
    url: "https://planzap.vaniacostamendes.pt/",
  },
];

export default function FeaturedProjects() {
  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>Selected Projects</h2>
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
              {project.meta && (
                <span className={styles.meta}>{project.meta}</span>
              )}
              <span className={styles.description}>{project.description}</span>
            </div>
            <span className={styles.arrow}>&rarr;</span>
          </a>
        ))}
      </div>
    </div>
  );
}
