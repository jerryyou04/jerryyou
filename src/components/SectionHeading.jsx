export default function SectionHeading({ id, children }) {
  return (
    <div className="section-heading">
      <h2 id={id}>{children}</h2>
    </div>
  );
}
