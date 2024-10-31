import styles from "./HeroStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
// import twitterLight from "../../assets/twitter-light.svg";
// import twitterDark from "../../assets/twitter-dark.svg";
// import linkedinLight from "../../assets/linkedin-light.svg";
// import linkedinDark from "../../assets/linkedin-dark.svg";
// import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

// import heroImg from "../../assets/IMG_7260.jpg";
import devicon from "../../assets/w-icon.webp";
// import meicon from "../../assets/meicon.png";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  //   const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  //   const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={devicon} alt="pf" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          KAZUKI
          <br />
          TACHIBANA
        </h1>
        {/* <h2>Welcome to my portfolio</h2> */}
        <span>
          <a href="https://github.com/kazkt01" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          {/* <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a> */}
          {/* <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a> */}
        </span>
        {/* <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p> */}
        {/* <a href={CV} download> */}
        {/* <button className="hover">Resume</button> */}
        <a href="#contact">
          <button className="hover">Contact</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
