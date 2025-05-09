import React, { useState, useEffect } from "react";
import "../index.css";

const projects = [
  {
    title: "Academia Monká",
    image: "/images/academiaMonka.jpg",
    category: "Institutional Website",
    tech: "PHP, HTML, CSS, JS",
    description:
      "Complete web application for a soccer academy in Costa Rica. Allows management of the academy, players, statistics, and categories.",
    demoLink: "https://academiamonka.herokuapp.com",
    codeLink: "#"
  },
  {
    title: "El Erizo Feliz",
    image: "/images/erizoFeliz.jpg",
    category: "Blog",
    tech: "PHP, HTML, CSS, JS",
    description:
      "Blog focused on the care and well-being of hedgehogs as pets. Friendly and lightweight design for frequent readers.",
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "E-Tech-Haven",
    image: "/images/e-tech-haven.jpg",
    category: "Online Store",
    tech: "PHP, HTML, CSS, JS",
    description:
      "Online store specializing in tech products. Shopping cart, filters, and basic product management.",
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Italian Restaurant",
    image: "/images/restauranteItaliano.jpg",
    category: "Restaurant",
    tech: "PHP, MySQL, Bootstrap",
    description:
      "Website for an Italian restaurant. Dynamic menu, reservations, and an admin panel for staff.",
    demoLink: "#",
    codeLink: "#"
  }
];

export default function PortfolioSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const project = projects[index];

  return (
    <section className="portfolio-section full-height-section" id="portfolio">

      <div className="portfolio-container">
        <img
          src={project.image}
          alt={project.title}
          className="portfolio-img"
        />
        <div className="portfolio-details">
          <h3>{project.title}</h3>
          <p className="portfolio-category">{project.category}</p>
          <p>{project.description}</p>
          <p><strong>Technologies:</strong> {project.tech}</p>
          {project.demoLink && (
            <p>
              <strong>Demo:</strong>{" "}
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
              >
                {project.demoLink}
              </a>
            </p>
          )}
        </div>
      </div>

      <div className="portfolio-pagination">
        <button onClick={prev}>Previous</button>
        <span>{index + 1} / {projects.length}</span>
        <button onClick={next}>Next</button>
      </div>
    </section>
  );
}