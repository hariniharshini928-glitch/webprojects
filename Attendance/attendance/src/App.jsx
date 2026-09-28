import { useState } from "react";
import "./App.css";

function StudentCard({ student }) {
  const getStatus = (attendance) => {
    if (attendance >= 90) {
      return "Excellent";
    } else if (attendance >= 75) {
      return "Good";
    } else {
      return "Low";
    }
  };

  return (
    <div className="student-card">
      <div className="student-info">
        <div className="student-avatar">
          {student.name.charAt(0)}
        </div>

        <div>
          <h3>{student.name}</h3>
          <p>{student.department}</p>
        </div>
      </div>

      <div className="attendance-info">
        <div className="percentage">
          <h2>{student.attendance}%</h2>
          <p>Attendance</p>
        </div>

        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${student.attendance}%` }}
          ></div>
        </div>

        <span
          className={`status ${getStatus(student.attendance).toLowerCase()}`}
        >
          {getStatus(student.attendance)}
        </span>
      </div>
    </div>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const students = [
    {
      id: 1,
      name: "Harini",
      department: "Computer Science",
      attendance: 92
    },
    {
      id: 2,
      name: "Nisha",
      department: "Computer Science",
      attendance: 88
    },
    {
      id: 3,
      name: "Kushi",
      department: "Information Technology",
      attendance: 76
    },
    {
      id: 4,
      name: "Priya",
      department: "Electronics",
      attendance: 68
    },
    {
      id: 5,
      name: "Anjali",
      department: "Computer Science",
      attendance: 95
    },
    {
      id: 6,
      name: "Divya",
      department: "Information Technology",
      attendance: 73
    }
  ];

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All"
        ? true
        : filter === "Excellent"
        ? student.attendance >= 90
        : filter === "Good"
        ? student.attendance >= 75 && student.attendance < 90
        : student.attendance < 75;

    return matchesSearch && matchesFilter;
  });

  const totalStudents = students.length;

  const averageAttendance = Math.round(
    students.reduce(
      (total, student) => total + student.attendance,
      0
    ) / students.length
  );

  const excellentStudents = students.filter(
    (student) => student.attendance >= 90
  ).length;

  const lowAttendance = students.filter(
    (student) => student.attendance < 75
  ).length;

  return (
    <div className="dashboard">

      <aside className="sidebar">
        <h1>Attendify</h1>

        <div className="menu active">🏠 Dashboard</div>
        <div className="menu">👨‍🎓 Students</div>
        <div className="menu">📅 Attendance</div>
        <div className="menu">📊 Reports</div>
        <div className="menu">⚙️ Settings</div>
      </aside>

      <main className="main">

        <header className="header">
          <div>
            <h1>Attendance Dashboard</h1>
            <p>Track and manage student attendance</p>
          </div>

          <div className="profile">
            <div className="profile-icon">H</div>
            <span>Harini</span>
          </div>
        </header>

        <section className="summary">

          <div className="summary-card">
            <div className="icon">👨‍🎓</div>
            <div>
              <p>Total Students</p>
              <h2>{totalStudents}</h2>
            </div>
          </div>

          <div className="summary-card">
            <div className="icon">📈</div>
            <div>
              <p>Average Attendance</p>
              <h2>{averageAttendance}%</h2>
            </div>
          </div>

          <div className="summary-card">
            <div className="icon">🏆</div>
            <div>
              <p>Excellent</p>
              <h2>{excellentStudents}</h2>
            </div>
          </div>

          <div className="summary-card">
            <div className="icon">⚠️</div>
            <div>
              <p>Low Attendance</p>
              <h2>{lowAttendance}</h2>
            </div>
          </div>

        </section>

        <section className="attendance-section">

          <div className="section-header">
            <div>
              <h2>Student Attendance</h2>
              <p>Monitor individual attendance percentage</p>
            </div>

            <input
              type="text"
              placeholder="🔍 Search student..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-buttons">
            {["All", "Excellent", "Good", "Low"].map((item) => (
              <button
                key={item}
                className={filter === item ? "selected" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="student-container">

            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                />
              ))
            ) : (
              <div className="no-result">
                <h3>No student found</h3>
                <p>Try searching with another name.</p>
              </div>
            )}

          </div>

        </section>

        <section className="notice">
          <h2>📢 Attendance Reminder</h2>
          <p>
            Students should maintain at least 75% attendance
            to be eligible for examinations.
          </p>
        </section>

        <footer>
          © 2026 Attendify | Student Attendance Management
        </footer>

      </main>
    </div>
  );
}

export default App;