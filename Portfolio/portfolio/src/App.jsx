import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React JS",
  "Java",
  "Python",
  "SQL",
  "UI/UX",
];

const projects = [
  {
    title: "Student Dashboard",
    description:
      "A responsive student dashboard for viewing academic information, attendance and performance.",
    tech: "React JS",
  },
  {
    title: "Online Library",
    description:
      "A digital library application for searching books and managing library information.",
    tech: "HTML • CSS • JavaScript",
  },
  {
    title: "Attendance Tracker",
    description:
      "A student attendance management application with search and status filtering.",
    tech: "React JS",
  },
  {
    title: "Form Validation",
    description:
      "A complete student registration form with input validation and error handling.",
    tech: "React JS • CSS",
  },
];

function Layout({ children }) {
  const location = useLocation();

  const menu = [
    ["/", "⌂", "Home"],
    ["/about", "👤", "About"],
    ["/skills", "⚡", "Skills"],
    ["/projects", "💼", "Projects"],
    ["/contact", "✉", "Contact"],
  ];

  return (
    <div className="portfolio">
      <header className="navbar">
        <Link to="/" className="logo">
          HR<span>.</span>
        </Link>

        <nav>
          {menu.map(([path, icon, name]) => (
            <Link
              key={path}
              to={path}
              className={location.pathname === path ? "active" : ""}
            >
              <span>{icon}</span>
              {name}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hire-btn">
          Hire Me
        </Link>
      </header>

      <main>{children}</main>

      <footer>
        <div>
          <h3>Harini R<span>.</span></h3>
          <p>Computer Science Student & Developer</p>
        </div>

        <p>© 2026 Harini R. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <section className="home page-section">
      <div className="home-content">
        <span className="welcome">WELCOME TO MY PORTFOLIO</span>

        <h1>
          Hi, I'm <span>Harini R</span>
        </h1>

        <h2>Computer Science Student & Developer</h2>

        <p>
          I am a passionate Computer Science student interested in web
          development, programming and creating modern digital experiences.
        </p>

        <div className="home-buttons">
          <Link to="/projects" className="primary-btn">
            View My Work →
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Me
          </Link>
        </div>

        <div className="quick-info">
          <div>
            <strong>01+</strong>
            <small>Years Learning</small>
          </div>

          <div>
            <strong>08+</strong>
            <small>Technical Skills</small>
          </div>

          <div>
            <strong>04+</strong>
            <small>Projects</small>
          </div>
        </div>
      </div>

      <div className="hero-card">
        <div className="profile-circle">HR</div>
        <div className="code-card">
          <span>&lt;developer&gt;</span>
          <b>Creative</b>
          <b>Curious</b>
          <b>Consistent</b>
          <span>&lt;/developer&gt;</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page-section inner-page">
      <div className="section-heading">
        <span>GET TO KNOW ME</span>
        <h1>About Me</h1>
        <p>A little about my academic and professional journey.</p>
      </div>

      <div className="about-grid">
        <div className="about-image">
          <div className="profile-circle large">HR</div>
        </div>

        <div className="about-content">
          <h2>I'm a Computer Science Student</h2>

          <p>
            I am currently pursuing my B.E. in Computer Science and
            Engineering. I enjoy learning new technologies and building
            practical applications using programming and web development.
          </p>

          <p>
            My interests include React development, Java programming,
            database management and UI/UX design.
          </p>

          <div className="details">
            <div>
              <small>Name</small>
              <b>Harini R</b>
            </div>

            <div>
              <small>Degree</small>
              <b>B.E. CSE</b>
            </div>

            <div>
              <small>Year</small>
              <b>First Year</b>
            </div>

            <div>
              <small>Location</small>
              <b>Chennai, India</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="page-section inner-page">
      <div className="section-heading">
        <span>MY EXPERTISE</span>
        <h1>Technical Skills</h1>
        <p>Technologies and tools that I work with.</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill}>
            <div className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div>
              <h3>{skill}</h3>
              <div className="skill-line">
                <span></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="page-section inner-page">
      <div className="section-heading">
        <span>MY WORK</span>
        <h1>Projects</h1>
        <p>Some of the applications I have developed.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={project.title}>
            <div className="project-top">
              <span>0{index + 1}</span>
              <b>↗</b>
            </div>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="project-tech">{project.tech}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page-section inner-page">
      <div className="section-heading">
        <span>GET IN TOUCH</span>
        <h1>Contact Me</h1>
        <p>Have a project or opportunity? Let's connect.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h2>Let's work together.</h2>

          <p>
            I'm always interested in learning, collaborating and working on
            interesting projects.
          </p>

          <div className="contact-item">
            <div>✉</div>
            <span>
              <small>Email</small>
              harini@example.com
            </span>
          </div>

          <div className="contact-item">
            <div>☎</div>
            <span>
              <small>Phone</small>
              +91 XXXXX XXXXX
            </span>
          </div>

          <div className="contact-item">
            <div>⌖</div>
            <span>
              <small>Location</small>
              Chennai, India
            </span>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea rows="6" placeholder="Your Message"></textarea>
          <button type="button">Send Message →</button>
        </form>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;