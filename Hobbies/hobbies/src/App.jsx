import { useState } from "react";
import "./App.css";

function HobbyCard({ icon, title, description, color }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="hobby-card" style={{ borderTop: `5px solid ${color}` }}>
      <div className="hobby-icon" style={{ backgroundColor: color }}>
        {icon}
      </div>

      <h2>{title}</h2>

      <p>{description}</p>

      {showMore && (
        <p className="more-text">
          This is one of my favourite hobbies. It helps me
          stay creative, active and happy.
        </p>
      )}

      <button
        onClick={() => setShowMore(!showMore)}
        style={{ backgroundColor: color }}
      >
        {showMore ? "Show Less" : "Know More"}
      </button>
    </div>
  );
}

function App() {
  const [selectedHobby, setSelectedHobby] = useState("All");

  const hobbies = [
    {
      id: 1,
      icon: "🎤",
      title: "Singing",
      category: "Creative",
      description: "I enjoy singing songs in my free time.",
      color: "#ec4899"
    },
    {
      id: 2,
      icon: "💃",
      title: "Dancing",
      category: "Creative",
      description: "Dancing helps me express myself with energy.",
      color: "#8b5cf6"
    },
    {
      id: 3,
      icon: "🎨",
      title: "Drawing",
      category: "Creative",
      description: "I love creating drawings and exploring designs.",
      color: "#f59e0b"
    },
    {
      id: 4,
      icon: "🎧",
      title: "Music",
      category: "Entertainment",
      description: "Listening to music helps me relax and refresh.",
      color: "#06b6d4"
    },
    {
      id: 5,
      icon: "📸",
      title: "Photography",
      category: "Creative",
      description: "I like capturing interesting moments and places.",
      color: "#10b981"
    },
    {
      id: 6,
      icon: "📚",
      title: "Reading",
      category: "Learning",
      description: "Reading helps me learn new things and improve myself.",
      color: "#3b82f6"
    }
  ];

  const filteredHobbies =
    selectedHobby === "All"
      ? hobbies
      : hobbies.filter((hobby) => hobby.category === selectedHobby);

  return (
    <div className="app">

      <header className="header">
        <div>
          <h1>✨ My Hobbies</h1>
          <p>Things I love to do in my free time</p>
        </div>

        <div className="profile">
          <div className="profile-icon">H</div>
          <span>Harini</span>
        </div>
      </header>

      <section className="intro">
        <h2>Welcome to My Hobby Space 🎨</h2>

        <p>
          Everyone has something they love doing.
          Here are some of the activities that make
          my free time fun and meaningful.
        </p>
      </section>

      <div className="filter-buttons">
        {["All", "Creative", "Entertainment", "Learning"].map(
          (category) => (
            <button
              key={category}
              className={
                selectedHobby === category ? "selected" : ""
              }
              onClick={() => setSelectedHobby(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      <section className="hobby-container">
        {filteredHobbies.map((hobby) => (
          <HobbyCard
            key={hobby.id}
            icon={hobby.icon}
            title={hobby.title}
            description={hobby.description}
            color={hobby.color}
          />
        ))}
      </section>

      <section className="quote">
        <h2>💖 Why Hobbies Matter?</h2>

        <p>
          Hobbies help us relax, discover our talents,
          improve creativity and enjoy our free time.
        </p>
      </section>

      <footer>
        <p>© 2026 Harini | My Hobbies Portfolio</p>
      </footer>

    </div>
  );
}

export default App;