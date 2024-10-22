import styles from "./ProjectsStyles.module.css";
// import viberr from "../../assets/viberr.png";
// import freshBurger from "../../assets/fresh-burger.png";
// import hipsster from "../../assets/hipsster.png";
// import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";
// import cotumo from "../../assets/Ctumo-icon-idea.png";
// import enviorment from "../../assets/DE04DAE1-BF05-4348-880B-E614A4AB4A71.jpg";
import webimage from "../../assets/webpageimage.png";
import appimage from "../../assets/appimage.png";
import threesiteimage from "../../assets/3dsiteimage.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Portfolio</h1>

      <div className={styles.projectsContainer}>
        <ProjectCard
          src={appimage}
          link="https://cotumo-app-beta-var2.vercel.app/"
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
          link="https://demoberger.vercel.app/" //vercel-var
          h3="WebSite"
          p="Portfolio LP"
        />
        {/* <ProjectCard
          src={webimage}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="And more ..."
          p="...."
        /> */}
      </div>
    </section>
  );
}

export default Projects;
