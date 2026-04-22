import React, { useState, useEffect } from "react";
import './index.css';
import Typewriter from 'typewriter-effect';
import Navbar from './components/navbar';
import Loader from './components/loader';
import Portfolio from './components/portfolio';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setLoading(false), 500);
      }, 3000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {loading && <Loader fadeOut={fadeOut} />}

      {!loading && (
        <div className="main-container fade-in">
          <Navbar />

          <div className="content-wrapper">
            {/* LEFT SIDE - PHOTO */}
            <div className="left-panel">
              <img
                src="/images/Principal.jpg"
                alt="Jerson Hernández"
                className="profile-photo"
              />
            </div>

            {/* INTRODUCTION */}
            <div className="right-panel scroll-sections">
              <section className="section" id="home">
                {/* INTRO NAME */}
                <h1 className="name-title gradient-name">
                  JERSON <br /> HERNÁNDEZ
                </h1>

                {/* TYPEWRITER */}
                <h1 className="typewriter-wrapper">
                  <Typewriter
                    options={{
                      strings: [
                        'Software Engineer',
                        'Full-Stack Developer',
                        'Backend & API Specialist',
                        'Cloud & AI Enthusiast'
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      deleteSpeed: 60
                    }}
                  />
                </h1>

                <p className="intro-text">
                  Software Engineer focused on building scalable backend systems and modern full-stack applications.
                  I specialize in APIs, authentication, cloud architecture, and integrating AI to create smart and efficient solutions.
                  Passionate about clean code, performance, and real-world impact.
                </p>

                <a href="#contact" className="contact-button">
                  <img
                    src="/images/logo-88.png"
                    alt="Contact Icon"
                    className="contact-img"
                  />
                  <Typewriter
                    options={{
                      strings: ['CONTACT ME', 'CONTACTAME'],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      deleteSpeed: 60
                    }}
                  />
                </a>
              </section>

              <hr className="divider" />

              {/* ABOUT ME */}
              <section className="section about-grid" id="about">
                <h1 className="typewriter-wrapper about-title">
                  <Typewriter
                    options={{
                      strings: ['About Me', 'Sobre mí'],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      deleteSpeed: 60
                    }}
                  />
                </h1>

                <div className="about-columns">
                  <div className="about-block">
                    <p>
                      I'm a Software Engineer with a Bachelor's degree in Systems Engineering (2025) and hands-on experience building real-world applications.
                      I specialize in backend and full-stack development, focusing on scalable APIs, secure authentication, and cloud-based solutions.
                    </p>
                    <p>
                      Recently, I've been working on integrating AI into applications, designing CI/CD pipelines, and structuring systems as if they were production-ready environments.
                      I enjoy solving complex problems and building efficient, maintainable systems.
                    </p>
                  </div>

                  <div className="about-block">
                    <p>
                      Soy Ingeniero en Sistemas con un Bachillerato en Ingeniería en Sistemas de Computación (2025) y experiencia práctica desarrollando aplicaciones del mundo real.
                      Me especializo en desarrollo backend y full-stack, con enfoque en APIs escalables, autenticación segura y soluciones basadas en la nube.
                    </p>
                    <p>
                      Recientemente he estado trabajando en la integración de inteligencia artificial en aplicaciones, el diseño de pipelines CI/CD y la estructuración de sistemas como si fueran entornos listos para producción.
                      Disfruto resolver problemas complejos y construir sistemas eficientes y mantenibles.
                    </p>
                  </div>
                </div>

                <hr className="about-divider" />

                <div className="about-info-grid">
                  <div className="about-info-pair">
                    <strong>Email: | Correo:</strong>
                    <p>hejohc@gmail.com</p>
                  </div>
                  <div className="about-info-pair">
                    <strong>Residence: | Residencia:</strong>
                    <p>Costa Rica</p>
                  </div>
                  <div className="about-info-pair">
                    <strong>Languages: | Idiomas:</strong>
                    <p>Spanish (Native), English (B2)</p>
                  </div>
                  <div className="about-info-pair">
                    <strong>Experience: | Experiencia:</strong>
                    <p>+3 years programming</p>
                    <p>+1 year professional experience</p>
                  </div>
                  <div className="about-info-pair">
                    <strong>Interest: | Intereses:</strong>
                    <p>Full-stack development</p>
                  </div>
                  <div className="about-info-pair">
                    <strong>Favorite Stack: | Stack Favorito:</strong>
                    <p>React, PHP, Node.js, MySQL</p>
                  </div>
                </div>
              </section>

              <hr className="divider" />

              {/* RESUME */}
              <section className="section resume-section " id="resume">
                <h1 className="typewriter-wrapper resume-title">
                  <Typewriter
                    options={{
                      strings: ['Resume', 'Currículum'],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      deleteSpeed: 60
                    }}
                  />
                </h1>

                <div className="resume-columns">
                  <div className="resume-block">
                    <h2>Experience / Experiencia</h2>
                    <ul>
                      <li>
                        <strong>Full-Stack Development Lead</strong>, Academia Monká
                        <p>(May 2024 - May 2025)</p>
                        <p>
                          Led a team of 4 developers in building a sports management system for 500+ players,
                          featuring statistics tracking, evaluations, and interactive dashboards (Chart.js).
                        </p>
                        <p>
                          Implemented security architecture including encryption, SQL injection protection,
                          session validation, and role-based access control.
                        </p>
                        <p>
                          Developed a chatbot for frequent queries and managed the complete QA and testing cycle.
                        </p>
                        <p><em>Stack:</em> PHP, JavaScript, MySQL, HTML5, CSS3, Chart.js</p>
                      </li>

                      <li>
                        <strong>Frontend Developer</strong>, Personal Project: Portfolio Website
                        <p>(Jan 2024 - Mar 2024)</p>
                        <p>
                          Designed and developed a personal portfolio website with an innovative split-screen layout
                          combining photo and information panels.
                        </p>
                        <p>
                          Implemented a custom video loader, typewriter text animations, and a Formspree-integrated contact form.
                        </p>
                        <p><em>Stack:</em> React, JavaScript, CSS3, TailwindCSS</p>
                      </li>

                      <li>
                        <strong>Mobile Developer</strong>, Business Management App
                        <p>(Jul 2025 - Feb 2026)</p>
                        <p>
                          Collaborated in a team of 4 developers to build a mobile business management application
                          with modules for clients, products, billing, and invoice generation.
                        </p>
                        <p>
                          Implemented multi-user authentication including registration, login, password recovery (EmailJS),
                          and session management.
                        </p>
                        <p>
                          Designed and structured the database architecture and overall application flow.
                        </p>
                        <p>
                          Developed a backup and restore system using Firebase Storage to ensure data persistence and recovery.
                        </p>
                        <p>
                          Focused on building a scalable and user-friendly solution simulating real business environments.
                        </p>
                        <p><em>Stack:</em> React Native, TypeScript, Firebase</p>
                      </li>

                      <li>
                        <strong>Backend Developer</strong>, AI Training API (Personal Project)
                        <p>(2026 - Present)</p>
                        <p>
                          Developing a scalable REST API for managing training systems, including routines,
                          exercises, and user progress tracking.
                        </p>
                        <p>
                          Integrating AI to generate personalized training recommendations and improve user experience.
                        </p>
                        <p>
                          Implementing secure authentication using JWT and role-based access control.
                        </p>
                        <p>
                          Designing CI/CD pipelines and cloud deployment architecture to simulate production environments.
                        </p>
                        <p><em>Stack:</em> Node.js, PHP, MySQL, REST API, JWT, AI Integration, GitHub Actions</p>
                      </li>
                    </ul>
                  </div>

                  {/* Education */}
                  <div className="resume-block">
                    <h2>Education / Educación</h2>
                    <ul>
                      <li>
                        <strong>System Engineering</strong> - Universidad Fidélitas (2022 - 2025)
                        <p>
                          Bachelor's degree in Computer Systems Engineering, focused on full-stack web development, databases, computer networks,
                          OOP, system analysis and design, agile methodologies, and software quality assurance.
                        </p>
                        <p>
                          Bachillerato en Ingeniería en Sistemas de Computación, enfocado en desarrollo web full-stack, bases de datos, redes de computadoras,
                          programación orientada a objetos, análisis y diseño de sistemas, metodologías ágiles y aseguramiento de la calidad del software.
                        </p>
                      </li>
                    </ul>

                    <h2>Certifications / Certificaciones</h2>
                    <ul>
                     <div className="skills-certifications">
                    <h3>Completed</h3>
                    </div>
                      <li>
                        <strong>CCNA (Cisco Certified Network Associate)</strong> - Cisco Networking Academy
                        <p>Fundamentals of computer networks, routing, and switching.</p>
                      </li>
                      <li>
                        <strong>Scrum Fundamentals Certified</strong> - ScrumStudy
                        <p>Foundations of Scrum methodology and its application in software development.</p>
                      </li>
                      <li>
                        <strong>English for IT 1 & 2 (B2 Level)</strong>
                        <p>Cisco / CECI / MICITT</p>
                      </li>

                      <div className="skills-certifications">
                    <h3>In Progress</h3>
                    </div>
                      <li>
                        <strong>AWS Certified Cloud Practitioner</strong>
                        <p>Amazon Web Services</p>
                      </li>

                      <li>
                        <strong>GitHub Actions & CI/CD Fundamentals</strong>
                        <p>GitHub</p>
                      </li>

                      <li>
                        <strong>Claude 101</strong>
                        <p>Anthropic</p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Skills */}
                <div className="resume-skills">
                  <h2>Skills / Habilidades</h2>
                  <div className="skills-category">
                    <h3>Languages</h3>
                    <div className="skills-grid">
                      <span>JavaScript</span>
                      <span>TypeScript</span>
                      <span>PHP</span>
                      <span>Java</span>
                      <span>C#</span>
                    </div>
                  </div>

                  <div className="skills-category">
                    <h3>Frontend</h3>
                    <div className="skills-grid">
                      <span>React</span>
                      <span>React Native</span>
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>Tailwind</span>
                    </div>
                  </div>

                  <div className="skills-category">
                    <h3>Backend & Database</h3>
                    <div className="skills-grid">
                      <span>Node.js</span>
                      <span>REST APIs</span>
                      <span>JWT</span>
                      <span>MySQL</span>
                      <span>MongoDB</span>
                    </div>
                  </div>

                  <div className="skills-category">
                    <h3>Cloud & Tools</h3>
                    <div className="skills-grid">
                      <span>AWS</span>
                      <span>CI/CD</span>
                      <span>GitHub Actions</span>
                      <span>Firebase</span>
                    </div>
                  </div>

                  <div className="skills-category">
                    <h3>Testing & Others</h3>
                    <div className="skills-grid">
                      <span>Postman</span>
                      <span>Selenium</span>
                      <span>JUnit</span>
                      <span>Scrum</span>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="divider" />

              {/* PORTFOLIO */}
              <section className="section" id="portfolio">
                <h1 className="typewriter-wrapper portfolio-title">
                  <Typewriter
                    options={{
                      strings: ['Portfolio', 'Portafolio'],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      deleteSpeed: 60
                    }}
                  />
                </h1>
                <Portfolio />
              </section>

              <hr className="divider" />

              {/* CONTACT */}
              <section className="section" id="contact">
                <h1 className="typewriter-wrapper portfolio-title">
                  <Typewriter
                    options={{
                      strings: ['CONTACT ME', 'CONTACTAME'],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      deleteSpeed: 60
                    }}
                  />
                </h1>
                <p className="contact-subtitle">Let's talk</p>

                <div className="contact-container">
                  {/* FORM SUCCESS MESSAGE */}
                  {formSent && (
                    <div className="toast-message">
                      ✅ Message sent successfully!
                    </div>
                  )}
                  {/* FORM */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();

                      const formData = new FormData(e.target);
                      fetch("https://formspree.io/f/xqaqlbyw", {
                        method: "POST",
                        body: formData,
                        headers: {
                          Accept: "application/json"
                        }
                      })
                        .then((res) => {
                          if (res.ok) {
                            setFormSent(true);
                            e.target.reset();

                            setTimeout(() => setFormSent(false), 3500);
                          } else {
                            alert("Error sending message");
                          }
                        })
                        .catch(() => alert("Connection error"));
                    }}
                    className="contact-form"
                  >

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@domain.com"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="To write..."
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="contact-button-submit">
                      Send Message
                    </button>
                  </form>

                  {/* INFO */}
                  <div className="contact-info-card">
                    <h2>Jerson Hernández</h2>
                    <p className="contact-role">Software Engineer & Full-Stack Developer</p>

                    <div className="info-pair"><strong>Email:</strong><p>hejohc@gmail.com</p></div>
                    <div className="info-pair"><strong>Residence:</strong><p>Costa Rica</p></div>
                    <div className="info-pair"><strong>Freelance:</strong><p>Available</p></div>
                    <div className="info-pair"><strong>Experience:</strong><p>3+ years (1+ year professional)</p></div>
                    <div className="info-pair"><strong>Specialty:</strong><p>Full-Stack Development</p></div>

                    <div className="signature">
                      <img src="/images/logo-43.webp" alt="Signature" className="signature-logo" />
                    </div>

                  </div>
                </div>
              </section>

            </div>

            {/* RIGHT - SOCIAL MEDIA SIDEBAR */}
            <div className="social-sidebar-container">
              <div className="social-sidebar-wrapper">
                <div className="social-sidebar">
                  <a href="https://www.instagram.com/jercode_/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/instagram.png" alt="Instagram" />
                  </a>
                  <a href="https://www.linkedin.com/in/jerson-hernández-carvajal-021b99228/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/linkedin.png" alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/Jercahdz" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/github.png" alt="GitHub" />
                  </a>
                  <a
                    href="https://wa.me/50663585318?text=Hi%20Jerson,%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20get%20in%20touch%20with%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/icons/whatsapp.png" alt="WhatsApp" />
                  </a>

                  <img src="/icons/logo-44.png" alt="Toggle Icon" className="icon-btn-right" />
                </div>
              </div>
            </div>

            {/* CELLPHONE - SOCIAL MEDIA FOOTER */}
            <div className="social-footer">
              <a href="https://www.instagram.com/jercode_/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.png" alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/in/jerson-hernández-carvajal-021b99228/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/Jercahdz" target="_blank" rel="noopener noreferrer">
                <img src="/icons/github.png" alt="GitHub" />
              </a>
              <a
                href="https://wa.me/50663585318?text=Hi%20Jerson,%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20get%20in%20touch%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/whatsapp.png" alt="WhatsApp" />
              </a>

              <img src="/icons/logo-44.png" alt="Toggle Icon" className="icon-btn" />
            </div>
          </div>
        </div>
      )
      }
    </>
  );
}

export default App;