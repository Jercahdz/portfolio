import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../index.css";

const projects = [
  {
    title: "Workout Tracker API",
    images: [
      "/images/workout_api_swagger.jpg",
      "/images/workout_api_swagger2.jpg",
      "/images/workout_api_ai.jpg",
      "/images/workout_api_actions.jpg",
      "/images/workout_api_bd.jpg",
    ],
    category: "Backend / API",
    tech: "Node.js, TypeScript, Fastify, MySQL, Prisma, JWT, Ollama, Groq, Vitest, Docker, GitHub Actions",
    description:
      "Scalable REST API for workout management including routines, exercises, sessions and progress tracking. Integrates a local AI model via Ollama to generate personalized weekly routines based on the user's fitness profile, following an interchangeable provider pattern. Implements JWT authentication with access and refresh tokens, bcrypt password hashing, and role-based access control. Includes unit testing with Vitest and automated CI/CD pipeline via GitHub Actions.",
    demoLink: "https://workouttrackerapi-production.up.railway.app/docs",
    codeLink: "https://github.com/Jercahdz/workout_tracker_api",
  },
  {
    title: "Academia Monká",
    images: [
      "/images/academiaMonka.jpg",
      "/images/academiaMonka2.jpg",
      "/images/academiaMonka3.jpg",
    ],
    category: "Sports Management System",
    tech: "PHP, JavaScript, MySQL, HTML5, CSS3, Chart.js",
    description:
      "Full-stack web system for managing a soccer academy with +500 players. Includes registration, statistics, evaluations, and interactive dashboards. Features advanced security, roles, and a chatbot for frequent queries.",
    demoLink: "https://academiamonka.herokuapp.com",
    codeLink: "https://github.com/Jercahdz/MONKA_Academia",
  },
  {
    title: "Personal Portfolio Website",
    images: [
      "/images/portfolioWeb.jpg",
      "/images/portfolioWeb_about.jpg",
      "/images/portfolioWeb_resume.jpg",
      "/images/portfolioWeb_portfolio.jpg",
      "/images/portfolioWeb_contact.jpg",
    ],
    category: "Frontend Project",
    tech: "React, JavaScript, TailwindCSS, CSS3",
    description:
      "Innovative portfolio web app with a split-screen layout, typewriter effects, video loader, and custom fonts. Includes an integrated contact form powered by Formspree.",
    demoLink: "https://www.jercode.com",
    codeLink: "https://github.com/Jercahdz/portfolio",
  },
  {
    title: "Business Management App",
    images: [
      "/images/app_clientes.jpg",
      "/images/app_productos.jpg",
      "/images/app_facturas.jpg",
      "/images/app_estadisticas.jpg",
      "/images/app_respaldo.jpg",
    ],
    category: "Mobile Application",
    tech: "React Native, TypeScript, Firebase",
    description:
      "Mobile application for business management with modules for clients, products, billing, and invoice generation. Includes multi-user authentication (login, registration, password recovery via EmailJS), database architecture design, and a backup & restore system using Firebase Storage.",
    demoLink: "https://jmanu02.github.io/Mercantweare_Web/",
    codeLink: "https://github.com/Jercahdz/demo_mercantware",
  },
  {
    title: "App Workout",
    images: [
      "/images/appwork_register.jpg",
      "/images/appwork_main.jpg",
      "/images/appwork_exercises.jpg",
      "/images/appwork_schema.jpg",
    ],
    category: "Mobile Application",
    tech: "FlutterFlow, Firebase, Dart",
    description:
      "Mobile fitness application designed for workout tracking and routine management. Includes user authentication, custom workout creation, exercise tracking with repetitions and parameters, training history, profile management, and an intuitive dashboard for quick access to routines and progress. Built with Firebase for authentication and real-time data management.",
    codeLink: "https://github.com/JoseBravo2003/Gym-Buddy",
  },
  {
    title: "El Erizo Feliz",
    images: ["/images/erizoFeliz.jpg"],
    category: "Blog",
    tech: "PHP, CSS, JS",
    description:
      "My first web project and first production deployment. A blog dedicated to hedgehog care with content management, articles, and community tips.",
    demoLink: "https://blogserizos.vercel.app",
    codeLink: "https://github.com/Jercahdz/blogErizos",
  },
  {
    title: "E-Tech-Haven",
    images: [
      "/images/e-tech_index.jpg",
      "/images/e-tech_muestra.jpg",
      "/images/e-tech_carrito.jpg",
      "/images/e-tech_admin.jpg",
      "/images/e-tech_login.jpg",
    ],
    category: "Online Store",
    tech: "HTML, CSS, JS, PHP, MySQL",
    description:
      "Complete e-commerce platform for tech products featuring multi-page navigation, a functional shopping cart, an admin dashboard for product and category management, user authentication system, and a responsive design. Group project focused on polished UI and a smooth user experience.",
    demoLink: "https://jercahdz.github.io/e-techback/",
    codeLink: "https://github.com/Jercahdz/e-techback",
  },
  /*
  {
    title: "Italian Restaurant",
    image: ["/images/restauranteItaliano.jpg"],
    category: "Restaurant Website",
    tech: "PHP, MySQL, Bootstrap",
    description:
      "Website for an Italian restaurant. Includes dynamic menu, reservations, and admin panel for staff management.",
  },
  */
];

export default function PortfolioSection() {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setImgIndex(0);
  }, [index]);

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
          src={project.images?.[0]}
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
              <strong>Live Demo:</strong>{" "}
              <a href={project.demoLink} target="_blank" rel="noreferrer">
                {project.demoLink}
              </a>
            </p>
          )}
          {project.codeLink && (
            <p>
              <strong>Code:</strong>{" "}
              <a href={project.codeLink} target="_blank" rel="noreferrer">
                GitHub Repository
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

            <button
              className="modal-prev"
              onClick={() =>
                setImgIndex((prev) =>
                  prev === 0 ? project.images.length - 1 : prev - 1,
                )
              }
            >
              ‹
            </button>

            <img
              src={project.images?.[imgIndex]}
              alt={project.title}
              className="modal-full-image"
            />

            <button
              className="modal-next"
              onClick={() =>
                setImgIndex((prev) => (prev + 1) % project.images.length)
              }
            >
              ›
            </button>
          </div>,
          document.body,
        )}
    </section>
  );
}
