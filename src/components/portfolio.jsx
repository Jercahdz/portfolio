import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../index.css";

const projects = [
  {
    title: "Academia Monká",
    image: "/images/academiaMonka.jpg",
    category: "Sports Management System",
    tech: "PHP, JavaScript, MySQL, HTML5, CSS3, Chart.js",
    description:
      "Full-stack web system for managing a soccer academy with +500 players. Includes registration, statistics, evaluations, and interactive dashboards. Features advanced security, roles, and a chatbot for frequent queries.",
    demoLink: "https://academiamonka.herokuapp.com",
    codeLink: "#",
  },
  {
    title: "Personal Portfolio Website",
    image: "/images/portfolioWeb.jpg",
    category: "Frontend Project",
    tech: "React, JavaScript, TailwindCSS, CSS3",
    description:
      "Innovative portfolio web app with a split-screen layout, typewriter effects, video loader, and custom fonts. Includes an integrated contact form powered by Formspree.",
    demoLink: "https://www.jercode.com",
    codeLink: "#",
  },
  {
    title: "Business Management App",
    image: "/images/gestionEmpresarial.jpg",
    category: "Mobile Application",
    tech: "React Native, TypeScript",
    description:
      "Currently in development. | Mobile app for business management with client, product, and billing modules. Supports multiuser authentication and includes analytical dashboards for performance visualization.",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "El Erizo Feliz",
    image: "/images/erizoFeliz.jpg",
    category: "Blog",
    tech: "PHP, HTML, CSS, JS",
    description:
      "Blog focused on the care and well-being of hedgehogs as pets. Friendly and lightweight design for frequent readers.",
    demoLink: "https://blogserizos.vercel.app",
    codeLink: "#",
  },
  {
    title: "E-Tech-Haven",
    image: "/images/e-tech-haven.jpg",
    category: "Online Store",
    tech: "PHP, HTML, CSS, JS",
    description:
      "Online store specializing in tech products. Shopping cart, filters, and basic product management.",
  },
  {
    title: "Italian Restaurant",
    image: "/images/restauranteItaliano.jpg",
    category: "Restaurant Website",
    tech: "PHP, MySQL, Bootstrap",
    description:
      "Website for an Italian restaurant. Includes dynamic menu, reservations, and admin panel for staff management.",
  },
];

export default function PortfolioSection() {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          onClick={openModal}
          style={{ cursor: "pointer" }}
        />
        <div className="portfolio-details">
          <h3>{project.title}</h3>
          <p className="portfolio-category">{project.category}</p>
          <p>{project.description}</p>
          <p>
            <strong>Technologies:</strong> {project.tech}
          </p>
          {project.demoLink && (
            <p>
              <strong>Demo:</strong>{" "}
              <a href={project.demoLink} target="_blank" rel="noreferrer">
                {project.demoLink}
              </a>
            </p>
          )}
        </div>
      </div>

      <div className="portfolio-pagination">
        <button onClick={prev}>Previous</button>
        <span>
          {index + 1} / {projects.length}
        </span>
        <button onClick={next}>Next</button>
      </div>

      {isModalOpen &&
        ReactDOM.createPortal(
          <div className="modal-overlay">
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <img
              src={project.image}
              alt={project.title}
              className="modal-full-image"
            />
          </div>,
          document.body
        )}
    </section>
  );
}
