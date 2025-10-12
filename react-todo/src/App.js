import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./components/TodoList";
import "./App.css"; // optional styling
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div className="App">
      <h1>My Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;

// Optional: If you want to include index.js logic here for rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance (optional)
reportWebVitals();
