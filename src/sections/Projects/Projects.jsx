import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import webimage from "../../assets/w-website.webp";
import appimage from "../../assets/w-app-01.webp";
import threesiteimage from "../../assets/w-3dsite.webp";
import devimage from "../../assets/w-icon.webp";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Portfolio</h1>

      <div className={styles.projectsContainer}>
        <ProjectCard
          src={appimage}
          link="https://cotumo-mode-pf.vercel.app/"
          h3="Cotumo"
          p="Routin Chart App"
        />

        <ProjectCard
          src={threesiteimage}
          link="https://vite-3d-red.vercel.app/"
          h3="3DWebSite"
          p="WebGL Site"
        />

        <ProjectCard
          src={webimage}
          link="https://demoberger.vercel.app/"
          // vercel-var
          h3="WebSite"
          p="jQuery LP "
        />
        <ProjectCard
          src={devimage}
          link="https://animation-lab.vercel.app/"
          // vercel-var
          h3="AnimationSite(閲覧可能)"
          p="Under Development ..."
        />
        <ProjectCard
          src={devimage}
          link="https://wp-2-ashy.vercel.app/"
          // vercel-var
          h3="ReactSite(閲覧可能)"
          p="Under Development ..."
        />
      </div>
    </section>
  );
}

export default Projects;
