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
        <div className="main-container">
          <Navbar />

          <div className="content-wrapper">
            {/* LEFT SIDE - PHOTO */}
            <div className="left-panel">
              <img
                src="https://cdn.discordapp.com/attachments/1362253861506650266/1364086354685722685/Principal.jpg?ex=680863ea&is=6807126a&hm=9f1b826ccc2860b08c0aaa1ccfcbc3e6f735d03ac05a835bb56b5f759656a5f7&"
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
                      delay: 60,
                      deleteSpeed: 40
                    }}
                  />
                </h1>

                <p className="intro-text">
                  I'm a passionate software engineer specialized in crafting modern and responsive web applications.
                  I blend creativity with clean code to deliver elegant digital solutions, always aiming to provide the best user experience.
                </p>

                <a href="#contact" className="contact-button">
                  <img
                    src="https://cdn.discordapp.com/attachments/1362253861506650266/1364470099431526410/logo-88.png?ex=6809c94e&is=680877ce&hm=10aa33b47bec7d6a52b58681f0864fe2a0b6dcb7b7a08ab67bb9b234f7210c8d&"
                    alt="Contact Icon"
                    className="contact-img"
                  />
                  <Typewriter
                    options={{
                      strings: ['CONTACT ME', 'CONTACTAME'],
                      autoStart: true,
                      loop: true,
                      delay: 60,
                      deleteSpeed: 40
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
                      delay: 60,
                      deleteSpeed: 40
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

                <hr className="divider" />

                <div className="about-info-grid">
                  <div className="about-item">
                    <span className="about-typewriter-label">
                      <Typewriter
                        options={{
                          strings: ['Age: | Edad:'],
                          autoStart: true,
                          loop: true,
                          delay: 60,
                          deleteSpeed: 40,
                        }}
                      />
                    </span>
                    <span className="about-value">25</span>
                  </div>

                  <div className="about-item">
                    <span className="about-typewriter-label">
                      <Typewriter
                        options={{
                          strings: ['Residence: | Residencia:'],
                          autoStart: true,
                          loop: true,
                          delay: 60,
                          deleteSpeed: 40,
                        }}
                      />
                    </span>
                    <span className="about-value">Alajuela, Costa Rica</span>
                  </div>

                  <div className="about-item">
                    <span className="about-typewriter-label">
                      <Typewriter
                        options={{
                          strings: ['Phone: | Teléfono:'],
                          autoStart: true,
                          loop: true,
                          delay: 60,
                          deleteSpeed: 40,
                        }}
                      />
                    </span>
                    <span className="about-value">+506 6358-5318</span>
                  </div>

                  <div className="about-item">
                    <span className="about-typewriter-label">
                      <Typewriter
                        options={{
                          strings: ['Email: | Correo:'],
                          autoStart: true,
                          loop: true,
                          delay: 60,
                          deleteSpeed: 40,
                        }}
                      />
                    </span>
                    <span className="about-value">hejohc@gmail.com</span>
                  </div>

                  <div className="about-item">
                    <span className="about-typewriter-label">
                      <Typewriter
                        options={{
                          strings: ['Address: | Dirección:'],
                          autoStart: true,
                          loop: true,
                          delay: 60,
                          deleteSpeed: 40,
                        }}
                      />
                    </span>
                    <span className="about-value">Alajuela, Alajuela</span>
                  </div>

                  <div className="about-item">
                    <span className="about-typewriter-label">
                      <Typewriter
                        options={{
                          strings: ['Languages: | Idiomas:'],
                          autoStart: true,
                          loop: true,
                          delay: 60,
                          deleteSpeed: 40,
                        }}
                      />
                    </span>
                    <span className="about-value">Spanish, English</span>
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
                      delay: 60,
                      deleteSpeed: 40
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
                        <p>Bachillerato en ingeniería de sistemas informáticos, con especialización en desarrollo y bases de datos</p>
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
                  </ul>
                </div>
              </section>

              <hr className="resume-divider" />

              {/* PORTFOLIO */}
              <section className="section" id="portfolio">
                <h1 className="typewriter-wrapper portfolio-title">
                  <Typewriter
                    options={{
                      strings: ['Portfolio', 'Portafolio'],
                      autoStart: true,
                      loop: true,
                      delay: 60,
                      deleteSpeed: 40
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
                      delay: 60,
                      deleteSpeed: 40
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

                    <div className="info-pair"><strong>Age:</strong><p>25</p></div>
                    <div className="info-pair"><strong>Residence:</strong><p>Costa Rica</p></div>
                    <div className="info-pair"><strong>Freelance:</strong><p>Available</p></div>
                    <div className="info-pair"><strong>Address:</strong><p>Alajuela, Alajuela</p></div>
                    <div className="info-pair"><strong>Phone:</strong><p>+506 6358-5318</p></div>
                    <div className="info-pair"><strong>Email:</strong><p>hejohc@gmail.com</p></div>

                    <div className="signature">
                      <img src="https://media.discordapp.net/attachments/1362253861506650266/1370525782249574410/logo-43.png?ex=681fd119&is=681e7f99&hm=5405c7e7fb17e66b4b947fecadb80078cf13be5abacc67d791854aed4351037e&=&format=webp&quality=lossless&width=1778&height=582" 
                      alt="JerCode Logo" 
                      className="signature-logo" />
                    </div>

                  </div>
                </div>
              </section>

            </div>

            {/* RIGHT - SOCIAL MEDIA SIDEBAR */}
            <div className="social-sidebar-container">
              <div className="social-sidebar-wrapper">
                <div className="social-sidebar">
                  <a href="#"><img src="/icons/facebook.png" alt="Facebook" /></a>
                  <a href="#"><img src="/icons/instagram.png" alt="Instagram" /></a>
                  <a href="#"><img src="/icons/whatsapp.png" alt="WhatsApp" /></a>
                  <a href="#"><img src="/icons/linkedin.png" alt="LinkedIn" /></a>
                  <a href="#"><img src="/icons/github.png" alt="GitHub" /></a>

                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <img src="/icons/logo-44.png" alt="Toggle Icon" />
                  </a>
                </div>
              </div>
            </div>
          </div >
        </div >
      )
      }
    </>
  );
}

export default App;