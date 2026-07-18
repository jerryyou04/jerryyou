import { FiArrowUpRight } from "react-icons/fi";

function CompanyMark({ company, logo }) {
  if (logo?.type === "image") {
    return (
      <div className="company-mark company-mark--image">
        <img src={logo.src} alt={logo.alt} />
      </div>
    );
  }

  return (
    <div
      className={`company-mark company-mark--${logo?.tone ?? "default"}`}
      aria-hidden="true"
    >
      {logo?.value ?? company.slice(0, 2)}
    </div>
  );
}

export default function ExperienceItem({ experience }) {
  const {
    company,
    role,
    dates,
    description,
    technologies,
    logo,
    companyUrl,
    roleUrl,
  } = experience;

  return (
    <article className="experience-item">
      <CompanyMark company={company} logo={logo} />

      <div className="experience-heading">
        <h3>
          {companyUrl ? (
            <a href={companyUrl} target="_blank" rel="noreferrer">
              {company}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            company
          )}
        </h3>
        {roleUrl ? (
          <a className="experience-role" href={roleUrl}>
            {role}
          </a>
        ) : (
          <p>{role}</p>
        )}
      </div>

      <p className="experience-dates">{dates}</p>

      <p className="experience-description">{description}</p>

      <div className="experience-meta">
        <ul className="tag-list" aria-label={`${company} technologies`}>
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
