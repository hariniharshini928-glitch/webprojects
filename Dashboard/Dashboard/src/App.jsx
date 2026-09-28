import { useState } from "react";
import "./App.css";

function ProfileCard({ name, role, department, year, email, skills }) {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <div className="profile-card">
      <div className="profile-top">
        <div className="profile-image">H</div>

        <h2>{name}</h2>
        <p>{role}</p>
        <span>{department} • {year}</span>
      </div>

      <div className="profile-info">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Year:</strong> {year}</p>
      </div>

      <button onClick={() => setShowSkills(!showSkills)}>
        {showSkills ? "Hide Skills" : "View Skills"}
      </button>

      {showSkills && (
        <div className="skills">
          <h3>My Skills</h3>

          <div className="skill-list">
            {skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [active, setActive] = useState("Home");

  const student = {
    name: "Harini R",
    role: "Computer Science Student",
    department: "B.E. Computer Science",
    year: "1st Year",
    email: "harini@example.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Java", "Python"]
  };

  const menuItems = ["Home", "About", "Projects", "Contact"];

  return (
    <div className="dashboard">

      <aside className="sidebar">
        <h1>MyPortfolio</h1>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main">

        <header className="header">
          <div>
            <h1>Student Dashboard</h1>
            <p>Welcome to my personal portfolio</p>
          </div>

          <div className="avatar">H</div>
        </header>

        <section className="hero">
          <div>
            <h2>Hello, I'm Harini 👋</h2>
            <p>
              A passionate Computer Science student who loves creating
              websites and learning new technologies.
            </p>

            <button className="explore-btn">
              Explore My Portfolio
            </button>
          </div>
        </section>

        <section className="content">

          <ProfileCard
            name={student.name}
            role={student.role}
            department={student.department}
            year={student.year}
            email={student.email}
            skills={student.skills}
          />

          <div className="right-section">

            <div className="stats">
              <div className="stat-card">
                <h2>06</h2>
                <p>Skills</p>
              </div>

              <div className="stat-card">
                <h2>05</h2>
                <p>Projects</p>
              </div>

              <div className="stat-card">
                <h2>92%</h2>
                <p>Attendance</p>
              </div>
            </div>

            <div className="about-card">
              <h2>About Me</h2>

              <p>
                I am a first-year Computer Science Engineering student.
                I enjoy web development, programming and UI design.
                My goal is to become a skilled software developer.
              </p>

              <div className="education">
                <h3>🎓 Education</h3>
                <p>B.E. Computer Science Engineering</p>
                <p>First Year Student</p>
              </div>
            </div>

          </div>
        </section>

        <section className="projects">
          <h2>My Projects</h2>

          <div className="project-container">

            {[
              {
                title: "Student Dashboard",
                text: "A responsive dashboard created using React."
              },
              {
                title: "Digital Library",
                text: "Online library management interface."
              },
              {
                title: "Portfolio Website",
                text: "Personal portfolio using HTML, CSS and JavaScript."
              }
            ].map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-icon">
                  {index === 0 ? "📊" : index === 1 ? "📚" : "💻"}
                </div>

                <h3>{project.title}</h3>
                <p>{project.text}</p>

                <button>View Project</button>
              </div>
            ))}

          </div>
        </section>

        <footer>
          <p>© 2026 Harini R | Student Portfolio</p>
        </footer>

      </main>
    </div>
  );
}

export default App;