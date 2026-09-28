import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";

const marks = [
  { subject: "Data Structures", marks: 89, grade: "A+" },
  { subject: "Database Management", marks: 92, grade: "A+" },
  { subject: "Web Interface", marks: 86, grade: "A" },
  { subject: "Java Programming", marks: 90, grade: "A+" },
  { subject: "Data Science", marks: 84, grade: "A" }
];

function Layout({ children }) {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Marksheet", path: "/marksheet" },
    { name: "Year Count", path: "/year-count" },
    { name: "Admin", path: "/admin" }
  ];

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">R</div>
          <div>
            <h2>ReportCard</h2>
            <p>Student Portal</p>
          </div>
        </div>

        <div className="student-mini">
          <div className="avatar">HR</div>
          <div>
            <h4>Harini R</h4>
            <p>CSE - 1st Year</p>
          </div>
        </div>

        <nav>
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              <span>
                {item.name === "Dashboard" && "⌂"}
                {item.name === "Profile" && "◉"}
                {item.name === "Marksheet" && "▣"}
                {item.name === "Year Count" && "◷"}
                {item.name === "Admin" && "⚙"}
              </span>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <p>Academic Year</p>
          <h4>2026 - 2027</h4>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="page-small">STUDENT REPORT CARD</p>
            <h1>
              {location.pathname === "/" && "Dashboard"}
              {location.pathname === "/profile" && "Student Profile"}
              {location.pathname === "/marksheet" && "Marksheet"}
              {location.pathname === "/year-count" && "Year Count"}
              {location.pathname === "/admin" && "Admin"}
            </h1>
          </div>

          <div className="top-profile">
            <div className="notification">🔔</div>
            <div className="top-avatar">HR</div>
          </div>
        </header>

        <section className="content">{children}</section>
      </main>
    </div>
  );
}

function Dashboard() {
  return (
    <>
      <div className="welcome">
        <div>
          <p>WELCOME BACK 👋</p>
          <h2>Harini R</h2>
          <span>Here is your academic performance overview.</span>
        </div>
        <div className="welcome-icon">🎓</div>
      </div>

      <div className="stats">
        <div className="stat-card">
          <div className="stat-icon blue">▣</div>
          <div>
            <p>Total Subjects</p>
            <h2>05</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">✓</div>
          <div>
            <p>Average Mark</p>
            <h2>88.2%</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">★</div>
          <div>
            <p>Overall Grade</p>
            <h2>A+</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">◷</div>
          <div>
            <p>Attendance</p>
            <h2>92.6%</h2>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-title">
            <div>
              <h3>Recent Results</h3>
              <p>Your latest subject performance</p>
            </div>
            <Link to="/marksheet">View All →</Link>
          </div>

          <div className="result-list">
            {marks.slice(0, 4).map((item) => (
              <div className="result-row" key={item.subject}>
                <div className="subject-icon">📘</div>
                <div className="subject-name">
                  <h4>{item.subject}</h4>
                  <p>Academic Result</p>
                </div>
                <strong>{item.marks}</strong>
                <span className="grade">{item.grade}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card progress-card">
          <h3>Academic Progress</h3>
          <p>Overall degree progress</p>

          <div className="circle-progress">
            <div>
              <strong>25%</strong>
              <span>Completed</span>
            </div>
          </div>

          <div className="year-info">
            <span>Year 1</span>
            <span>Year 4</span>
          </div>

          <div className="progress-bar">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

function Profile() {
  return (
    <div className="page-card">
      <div className="profile-header">
        <div className="large-avatar">HR</div>
        <div>
          <h2>Harini R</h2>
          <p>Computer Science and Engineering</p>
          <span className="status">● Active Student</span>
        </div>
      </div>

      <div className="section-title">
        <h3>Personal Information</h3>
        <p>Student details and academic information</p>
      </div>

      <div className="details-grid">
        <div className="detail">
          <label>Student Name</label>
          <p>Harini R</p>
        </div>

        <div className="detail">
          <label>Register Number</label>
          <p>23CSE105</p>
        </div>

        <div className="detail">
          <label>Department</label>
          <p>Computer Science and Engineering</p>
        </div>

        <div className="detail">
          <label>Year</label>
          <p>1st Year</p>
        </div>

        <div className="detail">
          <label>Email</label>
          <p>harini@example.com</p>
        </div>

        <div className="detail">
          <label>Academic Year</label>
          <p>2026 - 2027</p>
        </div>
      </div>
    </div>
  );
}

function Marksheet() {
  const total = marks.reduce((sum, item) => sum + item.marks, 0);
  const average = (total / marks.length).toFixed(1);

  return (
    <div className="page-card">
      <div className="marksheet-head">
        <div>
          <h2>Academic Marksheet</h2>
          <p>Semester 1 Examination - 2026</p>
        </div>

        <button className="download-btn">⬇ Download</button>
      </div>

      <div className="mark-summary">
        <div>
          <span>Total Marks</span>
          <strong>{total}/500</strong>
        </div>
        <div>
          <span>Average</span>
          <strong>{average}%</strong>
        </div>
        <div>
          <span>Grade</span>
          <strong>A+</strong>
        </div>
        <div>
          <span>Status</span>
          <strong className="pass">PASS</strong>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Subject</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {marks.map((item, index) => (
              <tr key={item.subject}>
                <td>{index + 1}</td>
                <td className="subject-table">{item.subject}</td>
                <td>{item.marks}/100</td>
                <td>
                  <span className="grade">{item.grade}</span>
                </td>
                <td>
                  <span className="pass">Passed</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function YearCount() {
  const years = [
    { year: "Year 1", status: "Current", progress: "25%" },
    { year: "Year 2", status: "Upcoming", progress: "0%" },
    { year: "Year 3", status: "Upcoming", progress: "0%" },
    { year: "Year 4", status: "Upcoming", progress: "0%" }
  ];

  return (
    <div className="page-card">
      <div className="section-title">
        <h2>Academic Year Count</h2>
        <p>Track your progress throughout the degree</p>
      </div>

      <div className="degree-progress">
        <div>
          <span>Degree Completion</span>
          <strong>25%</strong>
        </div>

        <div className="big-progress">
          <div></div>
        </div>

        <p>1 of 4 academic years completed</p>
      </div>

      <div className="years">
        {years.map((item, index) => (
          <div
            className={`year-card ${index === 0 ? "current-year" : ""}`}
            key={item.year}
          >
            <div className="year-number">{index + 1}</div>
            <div>
              <h3>{item.year}</h3>
              <p>{item.status}</p>
            </div>
            <strong>{item.progress}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function Admin() {
  return (
    <div className="page-card">
      <div className="section-title">
        <h2>Admin Panel</h2>
        <p>Manage student report card information</p>
      </div>

      <div className="admin-grid">
        <div className="admin-card">
          <div className="admin-icon">👨‍🎓</div>
          <h3>Student Management</h3>
          <p>Add, edit and manage student information.</p>
          <button>Manage Students →</button>
        </div>

        <div className="admin-card">
          <div className="admin-icon">📊</div>
          <h3>Marks Management</h3>
          <p>Update subject marks and examination results.</p>
          <button>Manage Marks →</button>
        </div>

        <div className="admin-card">
          <div className="admin-icon">📅</div>
          <h3>Attendance</h3>
          <p>Monitor and update student attendance records.</p>
          <button>Manage Attendance →</button>
        </div>

        <div className="admin-card">
          <div className="admin-icon">📄</div>
          <h3>Report Generation</h3>
          <p>Generate student report cards and academic reports.</p>
          <button>Generate Report →</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/marksheet" element={<Marksheet />} />
          <Route path="/year-count" element={<YearCount />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;