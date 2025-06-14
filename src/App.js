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
                      I'm a passionate software engineer currently pursuing a degree in Systems Engineering.
                      I have been programming for over 2 years, combining academic learning with hands-on projects.
                    </p>
                    <p>
                      My interests span across full-stack development: from crafting elegant front-end interfaces to building solid back-end systems and working with databases.
                    </p>
                  </div>

                  <div className="about-block">
                    <p>
                      Soy un ingeniero de software apasionado que actualmente estudia Ingeniería en Sistemas.
                      Llevo más de 2 años programando, combinando formación académica con proyectos prácticos.
                    </p>
                    <p>
                      Me interesa todo lo relacionado con el desarrollo full-stack: desde diseñar interfaces atractivas hasta construir sistemas back-end robustos y manejar bases de datos.
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
                    <p>2+ years programming</p>
                  </div>
                  <div className="about-info-pair">
                    <strong>Interest: | Intereses:</strong>
                    <p>Full-stack development</p>
                  </div>
                  <div className="about-info-pair">
                    <strong>Favorite Stack: | Stack Favorito:</strong>
                    <p>React, PHP, MySQL</p>
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
                        <strong>Web Application Developer</strong> - Freelance (2024 - 2025)
                        <p>Developed a web application using HTML, CSS with Bootstrap, JavaScript, and PHP.</p>
                      </li>
                    </ul>
                  </div>

                  {/* Education */}
                  <div className="resume-block">
                    <h2>Education / Educación</h2>
                    <ul>
                      <li>
                        <strong>System Engineering</strong> - Universidad Fidélitas (2022 - 2025)
                        <p>Bachelor's degree in computer systems engineering, with a focus on database development and databases</p>
                        <p>Bachillerato en ingeniería en sistemas de computación, con especialización en desarrollo y bases de datos</p>
                      </li>
                      <li>
                        <strong>Scrum Fundamentals</strong> - ScrumStudy (2023)
                        <p>Fundamentals of Scrum methodology and its application in software development.</p>
                        <p>Fundamentos de la metodología Scrum y su aplicación en el desarrollo de software.</p>
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
                    <li>SQL</li>
                    <li>MySQL</li>
                    <li>Oracle</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Figma</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>QA Testing</li>
                    <li>Git & GitHub</li>
                    <li>Scrum</li>
                    <li>Agile Methodologies</li>
                    <li>Problem Solving</li>
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
                    <p className="contact-role">Software Engineer & Developer</p>

                    <div className="info-pair"><strong>Email:</strong><p>hejohc@gmail.com</p></div>
                    <div className="info-pair"><strong>Residence:</strong><p>Costa Rica</p></div>
                    <div className="info-pair"><strong>Freelance:</strong><p>Available</p></div>
                    <div className="info-pair"><strong>Experience:</strong><p>2+ years</p></div>
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

              <a href="#" onClick={(e) => e.preventDefault()}>
                <img src="/icons/logo-44.png" alt="Toggle Icon" />
              </a>
            </div>
          </div>
        </div>
      )
      }
    </>
  );
}

export default App;