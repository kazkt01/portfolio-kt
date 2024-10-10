import PropTypes from "prop-types";

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired, // 画像のパスは必須の文字列
  link: PropTypes.string.isRequired, // リンクも必須の文字列
  h3: PropTypes.string.isRequired, // タイトルは必須の文字列
  p: PropTypes.string.isRequired, // 説明文は必須の文字列
};

export default ProjectCard;
