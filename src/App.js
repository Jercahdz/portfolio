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
                        'Frontend Developer',
                        'Web Designer',
                        'Tech Consultant'
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      deleteSpeed: 60
                    }}
                  />
                </h1>

                <p className="intro-text">
                  I'm a passionate software engineer specialized in crafting modern and responsive web applications.
                  I blend creativity with clean code to deliver elegant digital solutions, always aiming to provide the best user experience.
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
                      I'm a passionate Software Engineer with a Bachelor's degree in Systems Engineering (graduated in October 2025).
                      I've been programming since 2022 and have over a year of professional experience developing real-world projects for clients.
                    </p>
                    <p>
                      I specialize in full-stack development — from creating elegant front-end interfaces to building solid back-end systems and working with databases.
                      I enjoy designing efficient, scalable, and user-centered solutions.
                    </p>
                  </div>

                  <div className="about-block">
                    <p>
                      Soy un Ingeniero en Software con el título de Bachiller en Ingeniería en Sistemas (graduado en octubre de 2025).
                      Programo desde 2022 y cuento con más de un año de experiencia profesional desarrollando proyectos reales para clientes.
                    </p>
                    <p>
                      Me especializo en desarrollo full-stack: desde la creación de interfaces atractivas hasta la construcción de sistemas back-end sólidos y el manejo de bases de datos.
                      Disfruto diseñar soluciones eficientes, escalables y centradas en el usuario.
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
                    <p>Spanish, English</p>
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
                        <p>(Jul 2025 - Present)</p>
                        <p>
                          Collaborated in a 4-person team to create a mobile business management app with client,
                          product, billing, and invoice printing modules.
                        </p>
                        <p>
                          Implemented multi-user authentication and analytics dashboards to visualize best-selling products and business metrics.
                        </p>
                        <p><em>Stack:</em> React Native, TypeScript</p>
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
                      <li>
                        <strong>CCNA (Cisco Certified Network Associate)</strong> - Cisco Networking Academy
                        <p>Fundamentals of computer networks, routing, and switching.</p>
                      </li>
                      <li>
                        <strong>Scrum Fundamentals Certified</strong> - ScrumStudy
                        <p>Foundations of Scrum methodology and its application in software development.</p>
                      </li>
                      <li>
                        <strong>English for IT 1</strong> - Cisco Networking Academy
                        <p>English communication skills focused on the IT industry and workplace.</p>
                      </li>
                      <li>
                        <strong>English for IT 2</strong> - In progress (currently studying)
                        <p>Advanced English skills for technology, communication, and project collaboration.</p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Skills */}
                <div className="resume-skills">
                  <h2>Skills / Habilidades</h2>
                  <ul className="skills-grid">
                    <li>Java</li>
                    <li>PHP</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>TypeScript</li>
                    <li>SQL</li>
                    <li>MySQL</li>
                    <li>SQL Server</li>
                    <li>Oracle</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>Figma</li>
                    <li>Chart.js</li>
                    <li>QA Testing</li>
                    <li>Git & GitHub</li>
                    <li>Scrum</li>
                    <li>Postman</li>
                    <li>Agile Methodologies</li>
                    <li>Problem Solving</li>
                    <li>Teamwork</li>
                  </ul>
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
                    <div className="info-pair"><strong>Experience:</strong><p>3+ years</p></div>
                    <div className="info-pair"><strong>Specialty:</strong><p>Full-Stack Web Development</p></div>

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

                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <img src="/icons/logo-44.png" alt="Toggle Icon" />
                  </a>
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

              <button className="icon-btn">
                <img src="/icons/logo-44.png" alt="Toggle Icon" />
              </button>
            </div>
          </div>
        </div>
      )
      }
    </>
  );
}

export default App;