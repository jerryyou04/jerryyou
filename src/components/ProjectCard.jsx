import { FiExternalLink, FiGithub } from "react-icons/fi";

function ProjectPreview({ name, preview }) {
  if (!preview?.src) return null;

  return (
    <div className="project-preview project-preview--image">
      <img
        src={preview.src}
        alt={preview.alt ?? `${name} interface`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export default function ProjectCard({ project }) {
  const { name, description, technologies, githubUrl, demoUrl, preview } =
    project;

  return (
    <article className="project-card">
      <ProjectPreview name={name} preview={preview} />

      <div className="project-content">
        <h3>{name}</h3>
        <p className="project-description">{description}</p>

        <ul className="tag-list" aria-label={`${name} technologies`}>
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {(githubUrl || demoUrl) && (
          <div className="project-links">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <FiGithub aria-hidden="true" />
                GitHub
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noreferrer">
                <FiExternalLink aria-hidden="true" />
                {demoUrl}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
