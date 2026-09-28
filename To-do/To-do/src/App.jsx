import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("Dashboard");
  const [selectedDate, setSelectedDate] = useState("2026-09-25");
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      date: "2026-09-25",
      title: "Complete React Assignment",
      category: "College",
      completed: false
    },
    {
      id: 2,
      date: "2026-09-25",
      title: "Prepare Web Interface Notes",
      category: "Study",
      completed: true
    },
    {
      id: 3,
      date: "2026-09-26",
      title: "Submit DBMS Record",
      category: "College",
      completed: false
    },
    {
      id: 4,
      date: "2026-09-27",
      title: "Practice Java Programs",
      category: "Practice",
      completed: false
    }
  ]);

  const [currentMonth, setCurrentMonth] = useState(8);
  const [currentYear, setCurrentYear] = useState(2026);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const categories = ["All", "College", "Study", "Practice"];

  const [filter, setFilter] = useState("All");

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (item) => item.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  const completion =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      date: selectedDate,
      title: task,
      category: "College",
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const changeMonth = (value) => {
    let newMonth = currentMonth + value;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }

    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const getDays = () => {
    const firstDay = new Date(
      currentYear,
      currentMonth,
      1
    ).getDay();

    const totalDays = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();

    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    return days;
  };

  const getDateString = (day) => {
    return `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;
  };

  const selectedTasks = tasks.filter(
    (item) => item.date === selectedDate
  );

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((item) => item.category === filter);

  return (
    <div className="app">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">✓</div>

          <div>
            <h2>Planora</h2>
            <p>Task & Calendar</p>
          </div>
        </div>

        <div className="profile">
          <div className="avatar">H</div>

          <div>
            <h4>Harini</h4>
            <p>Student Planner</p>
          </div>
        </div>

        <nav>
          <p className="menu-title">MENU</p>

          <button
            className={page === "Dashboard" ? "nav-active" : ""}
            onClick={() => setPage("Dashboard")}
          >
            <span>⌂</span>
            Dashboard
          </button>

          <button
            className={page === "Calendar" ? "nav-active" : ""}
            onClick={() => setPage("Calendar")}
          >
            <span>▣</span>
            Calendar
          </button>

          <button
            className={page === "Tasks" ? "nav-active" : ""}
            onClick={() => setPage("Tasks")}
          >
            <span>✓</span>
            My Tasks
          </button>

          <button
            className={page === "Progress" ? "nav-active" : ""}
            onClick={() => setPage("Progress")}
          >
            <span>◔</span>
            Progress
          </button>

          <p className="menu-title second-menu">OTHERS</p>

          <button
            className={page === "About" ? "nav-active" : ""}
            onClick={() => setPage("About")}
          >
            <span>ⓘ</span>
            About
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="mini-progress">
            <div className="mini-progress-top">
              <span>Daily progress</span>
              <b>{completion}%</b>
            </div>

            <div className="mini-bar">
              <div style={{ width: `${completion}%` }}></div>
            </div>
          </div>

          <p className="sidebar-footer">
            Plan your day. Own your time.
          </p>
        </div>

      </aside>

      {/* MAIN */}

      <main className="main">

        {/* TOPBAR */}

        <header className="topbar">
          <div>
            <p className="welcome">GOOD DAY, HARINI ✨</p>
            <h1>{page}</h1>
          </div>

          <div className="top-date">
            <span>📅</span>
            September 25, 2026
          </div>
        </header>

        {/* DASHBOARD PAGE */}

        {page === "Dashboard" && (
          <section className="page">

            <div className="hero-card">
              <div>
                <p className="hero-label">YOUR DAY AT A GLANCE</p>

                <h2>
                  Turn your plans into
                  <span> progress.</span>
                </h2>

                <p>
                  Organize your college work, study plans and
                  personal tasks in one simple workspace.
                </p>

                <button
                  className="hero-button"
                  onClick={() => setPage("Calendar")}
                >
                  Open Calendar →
                </button>
              </div>

              <div className="hero-shape">
                <div className="hero-circle">
                  {completion}%
                  <small>done</small>
                </div>
              </div>
            </div>

            <div className="stats">

              <div className="stat-card purple">
                <div className="stat-icon">☷</div>
                <div>
                  <p>Total Tasks</p>
                  <h2>{totalTasks}</h2>
                </div>
              </div>

              <div className="stat-card green">
                <div className="stat-icon">✓</div>
                <div>
                  <p>Completed</p>
                  <h2>{completedTasks}</h2>
                </div>
              </div>

              <div className="stat-card orange">
                <div className="stat-icon">◷</div>
                <div>
                  <p>Pending</p>
                  <h2>{pendingTasks}</h2>
                </div>
              </div>

              <div className="stat-card blue">
                <div className="stat-icon">★</div>
                <div>
                  <p>Completion</p>
                  <h2>{completion}%</h2>
                </div>
              </div>

            </div>

            <div className="dashboard-grid">

              <div className="panel">
                <div className="panel-title">
                  <div>
                    <p>UPCOMING</p>
                    <h3>Next Tasks</h3>
                  </div>

                  <button onClick={() => setPage("Tasks")}>
                    View all →
                  </button>
                </div>

                <div className="upcoming-list">

                  {tasks.slice(0, 4).map((item) => (
                    <div className="upcoming-item" key={item.id}>

                      <div className="date-box">
                        <b>
                          {item.date.split("-")[2]}
                        </b>

                        <small>
                          SEP
                        </small>
                      </div>

                      <div className="upcoming-content">
                        <h4>{item.title}</h4>
                        <p>{item.category}</p>
                      </div>

                      <span
                        className={
                          item.completed
                            ? "status done"
                            : "status pending"
                        }
                      >
                        {item.completed
                          ? "Done"
                          : "Pending"}
                      </span>

                    </div>
                  ))}

                </div>
              </div>

              <div className="panel quote-panel">

                <div className="quote-symbol">“</div>

                <h3>
                  Small steps every day
                  create big results.
                </h3>

                <p>
                  Keep your tasks simple, focused and
                  achievable.
                </p>

                <div className="quote-line"></div>

                <span>DAILY MOTIVATION</span>

              </div>

            </div>

          </section>
        )}

        {/* CALENDAR PAGE */}

        {page === "Calendar" && (
          <section className="page">

            <div className="calendar-page">

              <div className="calendar-main">

                <div className="calendar-top">

                  <div>
                    <p>YOUR SCHEDULE</p>

                    <h2>
                      {months[currentMonth]}{" "}
                      {currentYear}
                    </h2>
                  </div>

                  <div className="month-control">

                    <button
                      onClick={() => changeMonth(-1)}
                    >
                      ←
                    </button>

                    <button
                      onClick={() => changeMonth(1)}
                    >
                      →
                    </button>

                  </div>

                </div>

                <div className="week-header">
                  {[
                    "SUN",
                    "MON",
                    "TUE",
                    "WED",
                    "THU",
                    "FRI",
                    "SAT"
                  ].map((day) => (
                    <div key={day}>{day}</div>
                  ))}
                </div>

                <div className="big-calendar">

                  {getDays().map((day, index) => {

                    if (!day) {
                      return (
                        <div
                          className="blank-day"
                          key={index}
                        ></div>
                      );
                    }

                    const date = getDateString(day);

                    const dayTasks = tasks.filter(
                      (item) => item.date === date
                    );

                    return (
                      <button
                        key={day}
                        className={
                          selectedDate === date
                            ? "calendar-selected"
                            : ""
                        }
                        onClick={() =>
                          setSelectedDate(date)
                        }
                      >

                        <span className="day-number">
                          {day}
                        </span>

                        {dayTasks.slice(0, 2).map(
                          (item) => (
                            <small
                              key={item.id}
                              className={
                                item.completed
                                  ? "calendar-task completed-task"
                                  : "calendar-task"
                              }
                            >
                              {item.title}
                            </small>
                          )
                        )}

                      </button>
                    );
                  })}

                </div>

              </div>

              <div className="selected-day">

                <p className="selected-label">
                  SELECTED DAY
                </p>

                <h2>
                  {new Date(
                    selectedDate + "T00:00:00"
                  ).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric"
                  })}
                </h2>

                <div className="selected-line"></div>

                <div className="day-task-list">

                  {selectedTasks.length === 0 ? (
                    <div className="no-task">
                      <span>☁</span>
                      <p>No tasks planned</p>
                      <small>
                        Enjoy your free time!
                      </small>
                    </div>
                  ) : (
                    selectedTasks.map((item) => (
                      <div
                        className="selected-task"
                        key={item.id}
                      >
                        <button
                          onClick={() =>
                            toggleTask(item.id)
                          }
                        >
                          {item.completed ? "✓" : ""}
                        </button>

                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.category}</p>
                        </div>
                      </div>
                    ))
                  )}

                </div>

                <div className="quick-add">

                  <input
                    value={task}
                    onChange={(e) =>
                      setTask(e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        addTask();
                      }
                    }}
                    placeholder="Quick add a task..."
                  />

                  <button onClick={addTask}>
                    +
                  </button>

                </div>

              </div>

            </div>

          </section>
        )}

        {/* TASKS PAGE */}

        {page === "Tasks" && (
          <section className="page">

            <div className="task-page-header">

              <div>
                <p>ORGANIZE EVERYTHING</p>
                <h2>My Tasks</h2>
              </div>

              <div className="task-total">
                {pendingTasks} pending
              </div>

            </div>

            <div className="filter-buttons">

              {categories.map((item) => (
                <button
                  key={item}
                  className={
                    filter === item
                      ? "filter-active"
                      : ""
                  }
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}

            </div>

            <div className="all-tasks">

              {filteredTasks.map((item) => (
                <div
                  className={
                    item.completed
                      ? "large-task completed-large"
                      : "large-task"
                  }
                  key={item.id}
                >

                  <button
                    className="large-check"
                    onClick={() =>
                      toggleTask(item.id)
                    }
                  >
                    {item.completed ? "✓" : ""}
                  </button>

                  <div className="large-task-content">

                    <h3>{item.title}</h3>

                    <div className="task-meta">
                      <span>
                        📅 {item.date}
                      </span>

                      <span className="category-tag">
                        {item.category}
                      </span>
                    </div>

                  </div>

                  <span
                    className={
                      item.completed
                        ? "large-status complete-status"
                        : "large-status pending-status"
                    }
                  >
                    {item.completed
                      ? "Completed"
                      : "In Progress"}
                  </span>

                  <button
                    className="trash"
                    onClick={() =>
                      deleteTask(item.id)
                    }
                  >
                    🗑
                  </button>

                </div>
              ))}

            </div>

          </section>
        )}

        {/* PROGRESS PAGE */}

        {page === "Progress" && (
          <section className="page">

            <div className="progress-hero">

              <div>
                <p>YOUR PRODUCTIVITY</p>

                <h2>
                  You are making
                  <span> progress.</span>
                </h2>

                <p>
                  Keep completing your tasks and build
                  a consistent study routine.
                </p>
              </div>

              <div className="big-progress">
                <div>
                  {completion}%
                </div>
              </div>

            </div>

            <div className="progress-grid">

              <div className="progress-box">
                <span>✓</span>
                <p>Completed Tasks</p>
                <h2>{completedTasks}</h2>
              </div>

              <div className="progress-box">
                <span>◷</span>
                <p>Pending Tasks</p>
                <h2>{pendingTasks}</h2>
              </div>

              <div className="progress-box">
                <span>☷</span>
                <p>Total Tasks</p>
                <h2>{totalTasks}</h2>
              </div>

            </div>

            <div className="progress-panel">

              <div className="panel-title">
                <div>
                  <p>PERFORMANCE</p>
                  <h3>Task Completion</h3>
                </div>

                <strong>{completion}%</strong>
              </div>

              <div className="progress-track">
                <div
                  style={{
                    width: `${completion}%`
                  }}
                ></div>
              </div>

              <p className="progress-message">
                {completion === 100
                  ? "Amazing! All tasks are completed."
                  : "Keep going! Complete your remaining tasks to reach 100%."}
              </p>

            </div>

          </section>
        )}

        {/* ABOUT PAGE */}

        {page === "About" && (
          <section className="page">

            <div className="about-page">

              <div className="about-visual">
                <div className="about-logo">✓</div>

                <h2>Planora</h2>

                <p>
                  Your simple digital planner for
                  organized and productive days.
                </p>
              </div>

              <div className="about-content">

                <p className="about-label">
                  ABOUT THE APPLICATION
                </p>

                <h2>
                  Plan better.
                  <br />
                  <span>Achieve more.</span>
                </h2>

                <p>
                  Planora is a student-friendly task and
                  calendar application designed to help
                  manage academic activities, deadlines,
                  study plans and daily tasks.
                </p>

                <p>
                  The application combines a calendar,
                  task manager and progress tracker into
                  one clean interface.
                </p>

                <div className="feature-list">

                  <div>
                    <span>✓</span>
                    Calendar-based planning
                  </div>

                  <div>
                    <span>✓</span>
                    Task completion tracking
                  </div>

                  <div>
                    <span>✓</span>
                    Productivity progress
                  </div>

                  <div>
                    <span>✓</span>
                    Simple student-friendly interface
                  </div>

                </div>

              </div>

            </div>

          </section>
        )}

        <footer>
          Planora © 2026 • Built with React JS
        </footer>

      </main>

    </div>
  );
}

export default App;