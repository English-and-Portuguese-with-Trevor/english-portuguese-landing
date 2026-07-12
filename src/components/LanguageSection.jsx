export default function LanguageSection({ language }) {
  const { sectionId, variant, label, heading, description, links, lang } =
    language;

  return (
    <section
      className={`lang-section ${variant === "dark" ? "lang-portuguese" : "lang-english"}`}
      id={sectionId}
      lang={lang}
    >
      <div className="lang-header">
        <p className="lang-label">{label}</p>
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
      <div className="link-grid">
        {links.map((link) => (
          <a className="link-card" href={link.href} key={link.title}>
            <span className="link-icon">{link.icon}</span>
            <h3>{link.title}</h3>
            <span className="desc">{link.desc}</span>
            <span className="link-arrow">{link.cta}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
