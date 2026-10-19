import { useRef } from "react";
import { FiExternalLink, FiGithub, FiMaximize2, FiX } from "react-icons/fi";

function ProjectPreview({ name, preview }) {
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  if (!preview?.src) return null;

  return (
    <>
      <button
        ref={triggerRef}
        className="project-preview-button"
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Expand ${name} screenshot`}
        aria-haspopup="dialog"
      >
        <span className="project-preview project-preview--image">
          <img
            src={preview.src}
            alt={preview.alt ?? `${name} interface`}
            loading="lazy"
            decoding="async"
          />
        </span>
        <span className="project-preview-caption" aria-hidden="true">
          Expand screenshot <FiMaximize2 />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="project-image-dialog"
        aria-label={`${name} screenshot`}
        onClose={() => triggerRef.current?.focus({ preventScroll: true })}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close();
          }
        }}
      >
        <div className="project-image-dialog-header">
          <h2>{name}</h2>
          <button
            type="button"
            className="project-image-close"
            aria-label="Close screenshot"
            onClick={() => dialogRef.current?.close()}
          >
            <FiX aria-hidden="true" />
          </button>
        </div>
        <img
          src={preview.src}
          alt={preview.alt ?? `${name} interface`}
          decoding="async"
        />
      </dialog>
    </>
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
